import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { DECORATIVE_CANVAS_DPR, DECORATIVE_CANVAS_GL } from "./canvasConfig.js";

/* ── constants ─────────────────────────────────────────────────────────── */
const LAYERS  = [3, 5, 7, 5, 3];
const LAYER_X = [-3.5, -1.75, 0, 1.75, 3.5];
const MAX_P   = 32;
const TEAL    = new THREE.Color("#07BEB8");

/* seeded LCG for deterministic, consistent layout every mount */
function mkRand(seed = 42) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 0x100000000; };
}

/* ── graph builder ─────────────────────────────────────────────────────── */
function buildGraph() {
  const r = mkRand(137);
  const nodes = [];

  LAYERS.forEach((count, li) => {
    const isIO = li === 0 || li === LAYERS.length - 1;
    const span = (count - 1) * 0.68;
    for (let i = 0; i < count; i++) {
      nodes.push({
        id:       nodes.length,
        layer:    li,
        x:        LAYER_X[li],
        y:        count > 1 ? -span + i * (2 * span / (count - 1)) : 0,
        z:        isIO ? (r() - 0.5) * 0.7 : (r() - 0.5) * 1.8,
        isInput:  li === 0,
        isOutput: li === LAYERS.length - 1,
        isIO,
        radius:   isIO ? 0.148 : li === 2 ? 0.082 : 0.106,
        phase:    r() * Math.PI * 2,
      });
    }
  });

  const edges = [];

  /* adjacent-layer connections */
  for (let li = 0; li < LAYERS.length - 1; li++) {
    const A = nodes.filter(n => n.layer === li);
    const B = nodes.filter(n => n.layer === li + 1);
    A.forEach(a => B.forEach(b => edges.push({ a, b, skip: false })));
  }

  /* skip connections — ResNet / attention style */
  [[0, 2], [2, 4]].forEach(([la, lb]) => {
    const A = nodes.filter(n => n.layer === la);
    const B = nodes.filter(n => n.layer === lb);
    A.forEach((a, ai) =>
      B.filter((_, bi) => (ai + bi) % 2 === 0).forEach(b => edges.push({ a, b, skip: true }))
    );
  });

  return { nodes, edges };
}

/* ── scene component ───────────────────────────────────────────────────── */
function NeuralScene() {
  const { camera } = useThree();

  const groupRef  = useRef();
  const nodeRefs  = useRef([]);
  const glowRefs  = useRef([]);
  const ringRefs  = useRef([]);
  const pulseRefs = useRef([]);
  const pulses    = useRef([]);
  const edgeAct   = useRef(null);   /* Float32Array — per-std-edge activity 0-1 */
  const rotY      = useRef(0);
  const rotX      = useRef(0);
  const autoA     = useRef(0);
  const mNDC      = useRef({ x: 0, y: 0 });
  const tmpV      = useRef(new THREE.Vector3());

  const { nodes, edges } = useMemo(buildGraph, []);
  const stdEdges  = useMemo(() => edges.filter(e => !e.skip), [edges]);
  const skipEdges = useMemo(() => edges.filter(e =>  e.skip), [edges]);
  const ioNodes   = useMemo(() => nodes.filter(n => n.isIO),  [nodes]);

  useEffect(() => { edgeAct.current = new Float32Array(stdEdges.length); }, [stdEdges]);

  /* standard-edge geometry with per-vertex colours */
  const stdGeo = useMemo(() => {
    const pos = new Float32Array(stdEdges.length * 6);
    const col = new Float32Array(stdEdges.length * 6);
    const D = 0.08;
    stdEdges.forEach(({ a, b }, i) => {
      pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
      const c = [TEAL.r * D, TEAL.g * D, TEAL.b * D];
      col.set([...c, ...c], i * 6);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color",    new THREE.BufferAttribute(col, 3));
    return g;
  }, [stdEdges]);

  /* skip-edge geometry */
  const skipGeo = useMemo(() => {
    const pos = new Float32Array(skipEdges.length * 6);
    skipEdges.forEach(({ a, b }, i) => pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6));
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, [skipEdges]);

  /* ambient background particles */
  const bgPos = useMemo(() => {
    const r = mkRand(99);
    const arr = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      const d = 6 + r() * 9, th = r() * Math.PI * 2, ph = Math.acos(2 * r() - 1);
      arr.set(
        [d * Math.sin(ph) * Math.cos(th), d * Math.sin(ph) * Math.sin(th), d * Math.cos(ph)],
        i * 3,
      );
    }
    return arr;
  }, []);

  /* mouse tracking */
  useEffect(() => {
    const h = e => {
      mNDC.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mNDC.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => {
      window.removeEventListener("mousemove", h);
      stdGeo.dispose();
      skipGeo.dispose();
    };
  }, [stdGeo, skipGeo]);

  /* ── render loop ── */
  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    /* group rotation — slow auto-spin + mouse parallax */
    autoA.current += delta * 0.07;
    const k = Math.min(delta * 3, 0.12);
    rotY.current += (autoA.current + mNDC.current.x * 0.3  - rotY.current) * k;
    rotX.current += (-mNDC.current.y * 0.15 - rotX.current) * k;
    if (groupRef.current) {
      groupRef.current.rotation.y = rotY.current;
      groupRef.current.rotation.x = rotX.current;
    }

    /* spawn signal pulses */
    if (pulses.current.length < MAX_P - 2 && Math.random() < 0.1) {
      const e = edges[Math.floor(Math.random() * edges.length)];
      pulses.current.push({ edge: e, t: 0, spd: 0.25 + Math.random() * 0.5, si: stdEdges.indexOf(e) });
    }

    /* advance pulses + boost edge activity */
    pulses.current = pulses.current.filter(p => {
      p.t += delta * p.spd;
      if (p.si >= 0 && edgeAct.current) {
        edgeAct.current[p.si] = Math.min(1, (edgeAct.current[p.si] ?? 0) + delta * 2.5);
      }
      return p.t <= 1;
    });

    /* decay activity */
    if (edgeAct.current) {
      for (let i = 0; i < edgeAct.current.length; i++) {
        if (edgeAct.current[i] > 0) edgeAct.current[i] = Math.max(0, edgeAct.current[i] - delta * 0.85);
      }
    }

    /* update per-edge vertex colours based on activity */
    if (edgeAct.current && stdGeo.attributes.color) {
      const col = stdGeo.attributes.color;
      for (let i = 0; i < stdEdges.length; i++) {
        const f = 0.08 + 0.92 * edgeAct.current[i];
        col.setXYZ(i * 2,     TEAL.r * f, TEAL.g * f, TEAL.b * f);
        col.setXYZ(i * 2 + 1, TEAL.r * f, TEAL.g * f, TEAL.b * f);
      }
      col.needsUpdate = true;
    }

    /* position signal pulse meshes from pool */
    for (let i = 0; i < MAX_P; i++) {
      const mesh = pulseRefs.current[i];
      if (!mesh) continue;
      const p = pulses.current[i];
      if (p) {
        const { a, b } = p.edge;
        tmpV.current.set(
          a.x + (b.x - a.x) * p.t,
          a.y + (b.y - a.y) * p.t,
          a.z + (b.z - a.z) * p.t,
        );
        mesh.position.copy(tmpV.current);
        mesh.visible = true;
        /* bell-curve scale: tiny at endpoints, full in middle */
        mesh.scale.setScalar(0.45 + Math.sin(p.t * Math.PI) * 0.85);
      } else {
        mesh.visible = false;
      }
    }

    /* per-node hover detection via screen-space projection */
    const mX = mNDC.current.x;
    const mY = -mNDC.current.y; /* THREE NDC Y is flipped vs clientY */
    nodes.forEach((n, i) => {
      tmpV.current.set(n.x, n.y, n.z);
      if (groupRef.current) tmpV.current.applyMatrix4(groupRef.current.matrixWorld);
      tmpV.current.project(camera);
      const hover = Math.max(0, 1 - Math.hypot(tmpV.current.x - mX, tmpV.current.y - mY) / 0.22);

      const nm = nodeRefs.current[i];
      if (nm) {
        nm.scale.setScalar(1 + Math.sin(t * 1.5 + n.phase) * 0.07 + hover * 0.42);
        if (nm.material) nm.material.emissiveIntensity = (n.isIO ? 0.65 : 0.5) + hover * 0.9;
      }

      const gm = glowRefs.current[i];
      if (gm) {
        gm.scale.setScalar(1 + Math.sin(t * 1.1 + n.phase + 1) * 0.1 + hover * 0.55);
        if (gm.material) gm.material.opacity = (n.isIO ? 0.11 : 0.055) + hover * 0.18;
      }
    });

    /* orbital ring spin */
    ringRefs.current.forEach((m, i) => {
      if (m) {
        m.rotation.x += delta * (0.55 + i * 0.13);
        m.rotation.z += delta * (0.38 + i * 0.09);
      }
    });
  });

  /* ── JSX ── */
  return (
    <group ref={groupRef}>

      {/* ambient background particle cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={bgPos} count={180} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#07BEB8" size={0.016} transparent opacity={0.18} sizeAttenuation />
      </points>

      {/* standard connections — vertex-coloured so activity can be shown per-edge */}
      <lineSegments geometry={stdGeo}>
        <lineBasicMaterial vertexColors transparent opacity={1} />
      </lineSegments>

      {/* skip / residual connections — subtle purple to differentiate */}
      <lineSegments geometry={skipGeo}>
        <lineBasicMaterial color="#9966dd" transparent opacity={0.07} />
      </lineSegments>

      {/* neuron nodes */}
      {nodes.map((n, i) => {
        const col = n.isInput ? "#a0d8ef" : n.isOutput ? "#ffd580" : "#07BEB8";
        const emi = n.isInput ? "#4488aa" : n.isOutput ? "#aa7700" : "#07BEB8";
        return (
          <group key={n.id} position={[n.x, n.y, n.z]}>
            {/* solid core */}
            <mesh ref={el => { nodeRefs.current[i] = el; }}>
              <sphereGeometry args={[n.radius, 16, 16]} />
              <meshStandardMaterial
                color={col} emissive={emi}
                emissiveIntensity={n.isIO ? 0.65 : 0.5}
                roughness={0.1} metalness={0.5}
              />
            </mesh>
            {/* inner glow halo */}
            <mesh ref={el => { glowRefs.current[i] = el; }}>
              <sphereGeometry args={[n.radius * 2.4, 8, 8]} />
              <meshBasicMaterial color={col} transparent opacity={n.isIO ? 0.11 : 0.055} />
            </mesh>
            {/* outer soft corona */}
            <mesh>
              <sphereGeometry args={[n.radius * 5.2, 6, 6]} />
              <meshBasicMaterial color={col} transparent opacity={0.018} />
            </mesh>
          </group>
        );
      })}

      {/* spinning orbital rings on input / output nodes */}
      {ioNodes.map((n, ri) => (
        <mesh
          key={`ring-${n.id}`}
          ref={el => { ringRefs.current[ri] = el; }}
          position={[n.x, n.y, n.z]}
          rotation={[Math.PI / 2 + ri * 0.45, ri * 0.7, 0]}
        >
          <torusGeometry args={[0.29, 0.012, 8, 52]} />
          <meshBasicMaterial
            color={n.isInput ? "#a0d8ef" : "#ffd580"}
            transparent opacity={0.48}
          />
        </mesh>
      ))}

      {/* travelling signal pulse pool */}
      {Array.from({ length: MAX_P }).map((_, i) => (
        <mesh key={`p-${i}`} ref={el => { pulseRefs.current[i] = el; }} visible={false}>
          <sphereGeometry args={[0.048, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      ))}

    </group>
  );
}

/* ── export ────────────────────────────────────────────────────────────── */
export default function BrandingHero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.2], fov: 48 }}
      dpr={DECORATIVE_CANVAS_DPR}
      gl={DECORATIVE_CANVAS_GL}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.08} />
      <pointLight position={[5, 4, 5]}   color="#07BEB8" intensity={4.5} />
      <pointLight position={[-5, -3, 4]} color="#3344ff" intensity={1.2} />
      <pointLight position={[0, 5, -3]}  color="#ffffff"  intensity={0.4} />
      <NeuralScene />
    </Canvas>
  );
}
