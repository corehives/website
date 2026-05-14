import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import ElectricPath from "./ElectricPath";

const GL_CONFIG = {
  alpha: true,
  antialias: true,
  powerPreference: "high-performance",
};

function WireScene({ points }) {
  return (
    <Canvas
      orthographic
      camera={{
        zoom: 40,
        position: [0, 0, 10],
      }}
      dpr={[1, 2]}
      gl={GL_CONFIG}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ElectricPath
        points={points}
        speed={0.01}
        variant="analytic"
        bgOpacity={0.15}
        thickness={0.015}
        glowIntensity={1}
        color="#d1d5db"
      />
    </Canvas>
  );
}

export default function ElectricPathBannerMirror() {
  const points = useMemo(
    () => [
      // RIGHT HORIZONTAL (mirrored)
      new THREE.Vector3(5, 0.8, 0),
      new THREE.Vector3(2.4, 0.8, 0),

      // RIGHT CURVE (mirrored)
      new THREE.Vector3(1.7, 0.8, 0),
      new THREE.Vector3(1.3, 0.7, 0),

      // RIGHT DROP (mirrored)
      new THREE.Vector3(1.2, -0.7, 0),
      new THREE.Vector3(1.2, -1.6, 0),

      // BOTTOM (mirrored - reversed direction)
      new THREE.Vector3(1, -3.2, 0),
      new THREE.Vector3(-1, -3.2, 0),

    ],
    [],
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "270px",
        overflow: "hidden",
      }}
    >
      <WireScene points={points} />
    </div>
  );
}