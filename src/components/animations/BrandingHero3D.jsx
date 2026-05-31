import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { DECORATIVE_CANVAS_DPR, DECORATIVE_CANVAS_GL } from "./canvasConfig.js";

class MotionController {
  constructor() {
    this.tX = 0; this.tY = 0;
    this.cX = 0; this.cY = 0;
    this.auto = Math.random() * Math.PI * 2;
  }
  setTarget(x, y) { this.tX = x; this.tY = y; }
  step(delta) {
    const k = Math.min(delta * 2.5, 0.1);
    this.cX += (this.tX - this.cX) * k;
    this.cY += (this.tY - this.cY) * k;
    this.auto += delta * 0.22;
    return { rx: this.cY * 0.18, ry: this.auto + this.cX * 0.35 };
  }
}

const ORBS = [
  { color: "#07BEB8", r: 2.7,  speed: 0.55, phase: 0.0, size: 0.13, yA:  0.45 },
  { color: "#FF6B6B", r: 3.2,  speed: 0.38, phase: 1.2, size: 0.11, yA: -0.38 },
  { color: "#FFE66D", r: 2.4,  speed: 0.70, phase: 2.5, size: 0.09, yA:  0.52 },
  { color: "#A8E6CF", r: 3.5,  speed: 0.32, phase: 4.0, size: 0.12, yA: -0.28 },
  { color: "#C9B1FF", r: 2.1,  speed: 0.66, phase: 1.8, size: 0.08, yA:  0.33 },
  { color: "#FFA07A", r: 3.0,  speed: 0.45, phase: 3.2, size: 0.10, yA: -0.48 },
];

function Scene() {
  const prismRef  = useRef();
  const orbRefs   = useRef([]);
  const orbTime   = useRef(ORBS.map(o => o.phase));
  const ctrl      = useMemo(() => new MotionController(), []);

  const geo1    = useMemo(() => new THREE.IcosahedronGeometry(1.75, 2), []);
  const edges1  = useMemo(() => new THREE.EdgesGeometry(geo1),   [geo1]);
  const geo2    = useMemo(() => new THREE.IcosahedronGeometry(0.9, 1),  []);
  const edges2  = useMemo(() => new THREE.EdgesGeometry(geo2),   [geo2]);

  const stars = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const r     = 5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      ctrl.setTarget(
        (e.clientX / window.innerWidth  - 0.5) * 3,
        (e.clientY / window.innerHeight - 0.5) * 3,
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [ctrl]);

  useEffect(() => () => {
    geo1.dispose(); edges1.dispose();
    geo2.dispose(); edges2.dispose();
  }, [geo1, edges1, geo2, edges2]);

  useFrame((_, delta) => {
    const { rx, ry } = ctrl.step(delta);
    if (prismRef.current) {
      prismRef.current.rotation.x = rx;
      prismRef.current.rotation.y = ry;
    }
    ORBS.forEach(({ r, speed, yA }, i) => {
      orbTime.current[i] += delta * speed;
      const t = orbTime.current[i];
      const m = orbRefs.current[i];
      if (m) {
        m.position.set(
          Math.cos(t) * r,
          Math.sin(t * 1.3) * yA,
          Math.sin(t) * r,
        );
      }
    });
  });

  return (
    <>
      {/* Star field */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={stars}
            count={300}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#07BEB8"
          size={0.025}
          transparent
          opacity={0.38}
          sizeAttenuation
        />
      </points>

      {/* Central prism */}
      <group ref={prismRef}>
        <lineSegments geometry={edges1}>
          <lineBasicMaterial color="#07BEB8" transparent opacity={0.72} />
        </lineSegments>
        <lineSegments geometry={edges2}>
          <lineBasicMaterial color="#07BEB8" transparent opacity={0.38} />
        </lineSegments>
        {/* Outer glow sphere */}
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshBasicMaterial color="#07BEB8" transparent opacity={0.18} />
        </mesh>
        {/* Inner bright core */}
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Orbiting brand-palette spheres */}
      {ORBS.map(({ color, size }, i) => (
        <mesh key={i} ref={el => { orbRefs.current[i] = el; }}>
          <sphereGeometry args={[size, 12, 12]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.9}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      ))}
    </>
  );
}

export default function BrandingHero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 52 }}
      dpr={DECORATIVE_CANVAS_DPR}
      gl={DECORATIVE_CANVAS_GL}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]}   color="#07BEB8" intensity={2.5} />
      <pointLight position={[-5, -5, 5]} color="#ffffff"  intensity={0.5} />
      <Scene />
    </Canvas>
  );
}
