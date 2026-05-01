import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import HalfLogo from "./../../assets/logo-half.png";
import GlobeLogo from "./../../assets/globe-frame.png";
import * as THREE from "three";

/* Globe.jsx — responsive rewrite */

function Globe() {
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y += 0.0025;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 3), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  const edgePositions = useMemo(() => edges.attributes.position.array, [edges]);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#01827d" transparent opacity={0.85} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={edgePositions}
            count={edgePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={circleTexture}
          color="#07BEB8"
          size={0.12}
          transparent
          alphaTest={0.5}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function CenterGlow() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { color: { value: new THREE.Color("#000000") } },
        vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform vec3 color;
      varying vec3 vNormal;
      void main() {
        float intensity = 1.0 - abs(dot(vNormal, vec3(0.0,0.0, 1.0)));
        intensity = 1.0 - pow(intensity, 1.5);
        gl_FragColor = vec4(color, intensity * 0.25);
      }
    `,
      }),
    [],
  );

  return (
    <mesh>
      <sphereGeometry args={[2.0, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function GlobeCore() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#041f22" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshBasicMaterial color="#04ada8" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

/* ── Main export ── */
export default function GlobeScene() {
  return (
    // ✅ Fill the parent container fully — no fixed heights or negative offsets
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      {/* Rotating ring image — centered, scales with container */}
      <img
        src={GlobeLogo}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% - 40px))", //
          width: "clamp(240px,31vw, 350px)", // ✅ responsive
          height: "auto",
          aspectRatio: "1",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
          animation: "rotateSlow 20s linear infinite",
          filter: "drop-shadow(0 0 25px #07BEB8) drop-shadow(0 0 60px #07BEB8)",
        }}
      />

      {/* Three.js Canvas — fills parent */}
      <Canvas
        camera={{ position: [0, -0.8, 7] }}
        style={{ position: "absolute", inset: 0, zIndex: 1, width:"100%", height:"100%" }} // ✅ absolute fill
      >
        <ambientLight intensity={0.3} />
        <Globe />
        <GlobeCore />
        <CenterGlow />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Logo — centered on top */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // ← match the ring
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <img
          src={HalfLogo}
          alt="logo"
          style={{
            width: "clamp(50px,10vw, 120px)", // ✅ responsive
            height: "auto",
            objectFit: "contain",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
