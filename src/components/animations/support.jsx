import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import bgImage from "../../assets/bg-data-analytic.png";
import Support from "../../assets/icons/support.png";
import * as THREE from "three";
import {
  DECORATIVE_CANVAS_DPR,
  DECORATIVE_CANVAS_GL,
} from "./canvasConfig.js";
import ElectricPath from "./ElectricPath";

export default function AnalyticMirrorLeftScene() {
  const exits = [
    { y: -1.4, endY: -0.5 },
    { y: -0.99, endY: -0.1 },
  ];

  const paths = useMemo(() =>
    exits.map(({ y, endY }) => {
      const mid = (y + endY) / 2;
      return [
        new THREE.Vector3(0.0, y, 0.0),
        new THREE.Vector3(1.2, y, 0.0),
        new THREE.Vector3(2.2, y, 0.0),
        new THREE.Vector3(2.9, mid, 0.0),
        new THREE.Vector3(3.5, endY, 0.0),
        new THREE.Vector3(4.5, endY, 0.0),
        new THREE.Vector3(4.5, endY, 0.0),
        new THREE.Vector3(6.0, endY, 0.7),
        new THREE.Vector3(6.4, endY + 0.9, 1.5),
      ];
    }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5%",
        left: "-8%",
        width: "45%",
        height: "45%",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        dpr={DECORATIVE_CANVAS_DPR}
        gl={DECORATIVE_CANVAS_GL}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        {paths.map((pts, i) => (
          <ElectricPath key={i} points={pts} speed={0.01} />
        ))}
      </Canvas>

      <div
        style={{
          position: "absolute",
          right: "40%",
          top: "68%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "clamp(44px, 5vw, 60px)",
            height: "clamp(44px, 5vw, 60px)",
            borderRadius: "24px",
            background: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {[{ top: "32%" }, { top: "55%" }].map(({ top }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                right: "-2px",
                top,
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#07BEB8",
                boxShadow: "0 0 8px #07BEB8, 0 0 10px #07BEB866",
                zIndex: 10,
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={Support}
              alt=""
              style={{ width: "45%", height: "45%", objectFit: "contain" }}
            />
          </div>
        </div>

        <span
          style={{
            fontSize: "clamp(9px, 1.1vw, 12px)",
            fontWeight: 500,
            letterSpacing: "0.02em",
            textAlign: "center",
            lineHeight: 1.4,
            whiteSpace: "nowrap",
            background: "linear-gradient(90deg, #FFFFFF 0%, #999999 96%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Support and Maintenance
        </span>
      </div>
    </div>
  );
}
