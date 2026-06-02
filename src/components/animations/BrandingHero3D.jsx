import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { DECORATIVE_CANVAS_DPR, DECORATIVE_CANVAS_GL } from "./canvasConfig.js";

  /* ── topology ──────────────────────────────────────────────────────────── */
const LAYERS  = [4, 6, 6, 4];          // neurons per layer
const LAYER_X = [-3.0, -1.1, 1.1, 3.0]; // x position of each layer
const PULSE_SLOTS = 18;

function buildGraph() {
  const nodes = [];
  LAYERS.forEach((count, li) => {
    const gap = count > 1 ? 2.8 / (count - 1) : 0;
    const y0  = -(count - 1) * gap * 0.5;
    for (let i = 0; i < count; i++) {
      nodes.push({
        id:    nodes.length,
        layer: li,
        x:     LAYER_X[li],
        y:     y0 + i * gap,
        z:     Math.sin(li * 2.4 + i * 1.9) * 0.5,
      });
    }
  });

  const edges = [];
  for (let li = 0; li < LAYERS.length - 1; li++) {
    const A = nodes.filter(n => n.layer === li);
    const B = nodes.filter(n => n.layer === li + 1);
    A.forEach(a => B.forEach(b => edges.push({ a, b })));
  }
  return { nodes, edges };
}

/* ── scene ─────────────────────────────────────────────────────────────── */
function NeuralScene() {
  const groupRef  = useRef();
  const scanRef   = useRef();
  const nodeRefs  = useRef([]);
  const ringRefs  = useRef([]);
  const pulseRefs = useRef([]);
  const pulses    = useRef([]);          // { edge, t, spd }
  const autoAngle = useRef(0);
  const rX = useRef(0), rY = useRef(0);
  const tX = useRef(0), tY = useRef(0);
  const mXY   = useRef({ x: 0, y: 0 });
  const scanX = useRef(-4.5);
  const tmp   = useRef(new THREE.Vector3());

  const { nodes, edges } = useMemo(() => buildGraph(), []);

  /* synapse line geometry */
  const edgeGeo = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(({ a, b }, i) => {
      arr[i*6]   = a.x; arr[i*6+1] = a.y; arr[i*6+2] = a.z;
      arr[i*6+3] = b.x; arr[i*6+4] = b.y; arr[i*6+5] = b.z;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [edges]);

  /* background particle field */
  const starPos = useMemo(() => {
    const arr = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i++) {
      const r = 6 + Math.random() * 8;
      const θ = Math.random() * Math.PI * 2;
      const φ = Math.acos(2 * Math.random() - 1);
      arr[i*3]   = r * Math.sin(φ) * Math.cos(θ);
      arr[i*3+1] = r * Math.sin(φ) * Math.sin(θ);
      arr[i*3+2] = r * Math.cos(φ);
    }
    return arr;
  }, []);

  /* indices of I/O neurons (get quantum rings) */
  const ioIndices = useMemo(() => {
    const acc = [];
    nodes.forEach((n, i) => {
      if (n.layer === 0 || n.layer === LAYERS.length - 1) acc.push(i);
    });
    return acc;
  }, [nodes]);

  useEffect(() => {
    const onMove = e => {
      mXY.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mXY.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      edgeGeo.dispose();
    };
  }, [edgeGeo]);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    /* rotation */
    autoAngle.current += delta * 0.13;
    tY.current = autoAngle.current + mXY.current.x * 0.5;
    tX.current = mXY.current.y * 0.22;
    const k = Math.min(delta * 2.5, 0.1);
    rX.current += (tX.current - rX.current) * k;
    rY.current += (tY.current - rY.current) * k;
    if (groupRef.current) {
      groupRef.current.rotation.x = rX.current;
      groupRef.current.rotation.y = rY.current;
    }

    /* scan wave sweeps left → right */
    scanX.current += delta * 2.2;
    if (scanX.current > 4.5) scanX.current = -4.5;
    if (scanRef.current) scanRef.current.position.x = scanX.current;

    /* spawn signal pulses */
    if (pulses.current.length < PULSE_SLOTS - 1 && Math.random() < 0.1) {
      pulses.current.push({
        edge: edges[Math.floor(Math.random() * edges.length)],
        t:    0,
        spd:  0.30 + Math.random() * 0.55,
      });
    }

    /* advance & cull completed pulses */
    pulses.current = pulses.current.filter(p => {
      p.t += delta * p.spd;
      return p.t <= 1.0;
    });

    /* position pulse meshes from the pool */
    for (let i = 0; i < PULSE_SLOTS; i++) {
      const mesh = pulseRefs.current[i];
      if (!mesh) continue;
      const p = pulses.current[i];
      if (p) {
        const { a, b } = p.edge;
        tmp.current.set(
          a.x + (b.x - a.x) * p.t,
          a.y + (b.y - a.y) * p.t,
          a.z + (b.z - a.z) * p.t,
        );
        mesh.position.copy(tmp.current);
        mesh.visible = true;
      } else {
        mesh.visible = false;
      }
    }

    /* neuron scale breathing */
    nodeRefs.current.forEach((m, i) => {
      if (m) m.scale.setScalar(1 + Math.sin(t * 1.7 + i * 0.85) * 0.13);
    });

    /* quantum ring spin */
    ringRefs.current.forEach((m, i) => {
      if (!m) return;
      m.rotation.x += delta * (0.65 + i * 0.17);
      m.rotation.z += delta * (0.40 + i * 0.11);
    });
  });

  return (
    <group ref={groupRef}>

      {/* ambient particle field */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={starPos}
            count={240}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#07BEB8"
          size={0.022}
          transparent
          opacity={0.28}
          sizeAttenuation
        />
      </points>

      {/* synapse connections */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color="#07BEB8" transparent opacity={0.13} />
      </lineSegments>

      {/* scanning wave — gives a "quantum search" sweep feel */}
      <mesh ref={scanRef} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[5, 7]} />
        <meshBasicMaterial
          color="#07BEB8"
          transparent
          opacity={0.035}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* neurons */}
      {nodes.map((n, i) => {
        const isIO = n.layer === 0 || n.layer === LAYERS.length - 1;
        return (
          <group key={n.id} position={[n.x, n.y, n.z]}>
            {/* core sphere */}
            <mesh ref={el => { nodeRefs.current[i] = el; }}>
              <sphereGeometry args={[isIO ? 0.125 : 0.09, 14, 14]} />
              <meshStandardMaterial
                color={isIO ? "#c0f0ff" : "#07BEB8"}
                emissive={isIO ? "#44ccff" : "#07BEB8"}
                emissiveIntensity={isIO ? 0.7 : 1.2}
                roughness={0.15}
                metalness={0.4}
              />
            </mesh>
            {/* soft glow halo */}
            <mesh>
              <sphereGeometry args={[isIO ? 0.30 : 0.20, 8, 8]} />
              <meshBasicMaterial
                color="#07BEB8"
                transparent
                opacity={isIO ? 0.08 : 0.04}
              />
            </mesh>
          </group>
        );
      })}

      {/* quantum orbital rings on input / output neurons */}
      {ioIndices.map((ni, ri) => {
        const n = nodes[ni];
        return (
          <mesh
            key={`ring-${n.id}`}
            ref={el => { ringRefs.current[ri] = el; }}
            position={[n.x, n.y, n.z]}
            rotation={[Math.PI / 2 + ri * 0.5, ri * 0.8, 0]}
          >
            <torusGeometry args={[0.27, 0.013, 8, 40]} />
            <meshBasicMaterial color="#07BEB8" transparent opacity={0.55} />
          </mesh>
        );
      })}

      {/* travelling signal pulse pool */}
      {Array.from({ length: PULSE_SLOTS }).map((_, i) => (
        <mesh
          key={`p-${i}`}
          ref={el => { pulseRefs.current[i] = el; }}
          visible={false}
        >
          <sphereGeometry args={[0.042, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.88} />
        </mesh>
      ))}

    </group>
  );
}

/* ── export ─────────────────────────────────────────────────────────────── */
export default function BrandingHero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 50 }}
      dpr={DECORATIVE_CANVAS_DPR}
      gl={DECORATIVE_CANVAS_GL}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.10} />
      <pointLight position={[4, 4, 4]}   color="#07BEB8" intensity={3.5} />
      <pointLight position={[-4, -3, 4]} color="#3366ff" intensity={0.9} />
      <NeuralScene />
    </Canvas>
  );
}
