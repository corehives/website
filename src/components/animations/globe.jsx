import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import HalfLogo from "../../assets/logo-half.png";
import GlobeLogo from "../../assets/globe-frame.png";
import {
  DECORATIVE_CANVAS_DPR,
  DECORATIVE_CANVAS_GL,
} from "./canvasConfig.js";

class GlobeMotionController {
  constructor() {
    this.offset = { x: 1, y: 1 };
    this.target = { x: 1, y: 1 };
    this.autoY = 0;
  }

  setTarget(x, y) {
    this.target = { x, y };
  }

  step(delta) {
    const lerp = Math.min(delta * 4.5, 0.18);
    const nextOffset = {
      x: this.offset.x + (this.target.x - this.offset.x) * lerp,
      y: this.offset.y + (this.target.y - this.offset.y) * lerp,
    };

    this.offset = nextOffset;
    this.autoY += delta * 0.15;

    return {
      x: nextOffset.y * 0.3,
      y: this.autoY + nextOffset.x * 0.6,
    };
  }
}

function useHoverRotation() {
  const controller = useMemo(() => new GlobeMotionController(), []);

  useEffect(() => {
    const handleMove = (event) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;
      const nx = (x / window.innerWidth - 1) * 5;
      const ny = (y / window.innerHeight - 1) * 5;

      controller.setTarget(nx, ny);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [controller]);

  return controller;
}

function Globe() {
  const groupRef = useRef();
  const controller = useHoverRotation();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 3), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  const edgePositions = useMemo(() => edges.attributes.position.array, [edges]);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");

    context.beginPath();
    context.arc(32, 32, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(
    () => () => {
      geometry.dispose();
      edges.dispose();
      circleTexture.dispose();
    },
    [circleTexture, edges, geometry],
  );

  useFrame((_, delta) => {
    const nextRotation = controller.step(delta);
    if (!groupRef.current || !nextRotation) {
      return;
    }

    groupRef.current.rotation.x = nextRotation.x;
    groupRef.current.rotation.y = nextRotation.y;
  });

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

  useEffect(
    () => () => {
      material.dispose();
    },
    [material],
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

export default function GlobeScene() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        top: "0%",
      }}
    >
      <img
        src={GlobeLogo}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% - 40px))",
          width: "clamp(220px, 32vw, 330px)",
          height: "auto",
          aspectRatio: "1",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
          animation: "rotateSlow 20s linear infinite",
          filter: "drop-shadow(0 0 25px #07BEB8) drop-shadow(0 0 60px #07BEB8)",
        }}
      />

      <Canvas
        camera={{ position: [0, -0.8, 7] }}
        dpr={DECORATIVE_CANVAS_DPR}
        gl={DECORATIVE_CANVAS_GL}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={0.3} />
        <Globe />
        <GlobeCore />
        <CenterGlow />
      </Canvas>

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
            width: "clamp(70px, 12vw, 200px)",
            height: "auto",
            objectFit: "contain",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
