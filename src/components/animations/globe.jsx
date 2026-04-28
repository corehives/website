import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import HalfLogo from "./../../assets/logo-half.png";
import GlobeLogo from "./../../assets/globe-frame.png";
import * as THREE from "three";

/* ------------------ GLOBE ------------------ */

function Globe() {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.0025;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 3), []);

  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  // extract edge positions (THIS WAS MISSING)
  const edgePositions = useMemo(() => {
    return edges.attributes.position.array;
  }, [edges]);

  // circular dot texture (MUST BE INSIDE COMPONENT)
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
      {/* WIREFRAME */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#01827d" transparent opacity={0.85} />
      </lineSegments>

      {/* NODES (ONLY ON EDGES) */}
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
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        color: { value: new THREE.Color("#000000") },
      },
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
          float intensity = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          intensity = 1.0 - pow(intensity, 1.5);
          float alpha = intensity * 0.25;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });
  }, []);

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
      {/* CENTER BRIGHT GLOW — makes wireframe lighter in middle */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#FFFF" transparent opacity={0} />
      </mesh>

      {/* INNER CORE */}
      <mesh>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshBasicMaterial color="#000000" transparent opacity={0} />
      </mesh>

      {/* MIDDLE BLEND LAYER */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#041f22" transparent opacity={0.4} />
      </mesh>

      {/* OUTER CYAN FADE */}
      <mesh>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshBasicMaterial color="#04ada8" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

/* ------------------ MAIN ------------------ */

export default function GlobeScene() {
  return (
    <div style={{ position: "relative", top: "-8rem", height: "700px" }}>
      {/* BG IMAGE — behind everything */}
      <img
        src={GlobeLogo}
        alt="background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
          animation: "rotateSlow 20s linear infinite",
          filter: "drop-shadow(0 0 25px #07BEB8) drop-shadow(0 0 60px #07BEB8)",
        }}
      />

      {/* CANVAS — globe on top of bg */}
      <Canvas
        camera={{ position: [0, 0, 7] }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <ambientLight intensity={0.3} />
        <Globe />
        <GlobeCore />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* LOGO — on top of everything */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <img
          src={HalfLogo}
          alt="logo"
          style={{
            width: "140px",
            height: "auto",
            objectFit: "contain",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
