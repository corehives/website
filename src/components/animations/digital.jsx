import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import bgImage from "../../assets/bg-digital-chip.png";
import Icon1 from "../../assets/icons/icon-digi-inov-1.png";
import Icon2 from "../../assets/icons/icon-digi-inov-2.png";
import Icon3 from "../../assets/icons/icon-digi-inov-3.png";
import * as THREE from "three";
import {
  DECORATIVE_CANVAS_DPR,
  DECORATIVE_CANVAS_GL,
} from "./canvasConfig.js";
import ElectricPath from "./ElectricPath";

function mirrorPoints(pts) {
  return pts.map((v) => new THREE.Vector3(-v.x, v.y, v.z));
}

export default function CircuitScene() {
  const exits = [
    { y: 1.25, endY: 0.55 },
    { y: 0.97, endY: 0.4 },
    { y: -0.97, endY: -0.4 },
    { y: -1.25, endY: -0.55 },
  ];

  const STRAIGHT_END = 0.75;
  const BEND_START = 1.05;
  const BEND_MID = 1.45;
  const BEND_END = 1.85;
  const TIP_X = 3;

  const mirroredPointSets = useMemo(() =>
    exits.map(({ y, endY }) => {
      const mid = (y + endY) / 2;
      return mirrorPoints([
        new THREE.Vector3(-2, y, 0.0),
        new THREE.Vector3(STRAIGHT_END, y, 0.0),
        new THREE.Vector3(BEND_START, y, 0.0),
        new THREE.Vector3(BEND_MID, mid, 0.05),
        new THREE.Vector3(BEND_END, endY, 1.5),
        new THREE.Vector3(TIP_X, endY, 0.4),
      ]);
    }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <div
      style={{ height: "400px", position: "relative" }}
      className="absolute -top-225 left-78"
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        dpr={DECORATIVE_CANVAS_DPR}
        gl={DECORATIVE_CANVAS_GL}
        style={{ background: "transparent" }}
      >
        {mirroredPointSets.map((pts, i) => (
          <ElectricPath
            key={`mirror-${i}`}
            points={pts}
            speed={0.01}
            variant="circuit"
            bgOpacity={0.2}
          />
        ))}
      </Canvas>

      <div
        style={{
          position: "absolute",
          right: "25%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "250px",
          height: "170px",
          borderRadius: "24px",
          overflow: "visible",
          background: `url(${bgImage})`,
          backgroundSize: "cover",
          color: "white",
          zIndex: 10,
        }}
      >
        {[
          { top: "16.5%" },
          { top: "24%" },
          { top: "73.5%" },
          { top: "80.5%" },
        ].map(({ top }, i) => (
          <div
            key={`dot-l-${i}`}
            style={{
              position: "absolute",
              left: "-1px",
              top,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#07BEB8",
              boxShadow: "0 0 8px #07BEB8, 0 0 10px #07BEB866",
              zIndex: 10,
            }}
          />
        ))}

        <div className="py-3 px-4">
          <h3 style={{ textAlign: "start", fontSize: "14px", lineHeight: 1.4 }}>
            Digital Innovation
          </h3>

          <div className="flex justify-around py-3 items-center">
            <div className="bg-[#FFFF]/46 h-10 w-10 flex items-center justify-center rounded-full">
              <img src={Icon1} alt="icon" />
            </div>
            <div className="bg-[#FFFF] h-14 w-14 flex items-center justify-center rounded-full">
              <img src={Icon2} alt="icon" />
            </div>
            <div className="bg-[#FFFF]/46 h-10 w-10 flex items-center justify-center rounded-full">
              <img src={Icon3} alt="icon" />
            </div>
          </div>
          <h3 style={{ textAlign: "start", fontSize: "14px", lineHeight: 1.4 }}>
            Secure. Modernize. Transform your digital future.
          </h3>
        </div>
      </div>
    </div>
  );
}
