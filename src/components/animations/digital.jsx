import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import bgImage from "../.././assets/bg-digital-chip.png";
import Icon1 from "../.././assets/icons/icon-digi-inov-1.png";
import Icon2 from "../.././assets/icons/icon-digi-inov-2.png";
import Icon3 from "../.././assets/icons/icon-digi-inov-3.png";

import { Settings } from "lucide-react";
import * as THREE from "three";

function ElectricPath({ points, speed = 0.016, reversed = true }) {
  const segmentRef = useRef();
  const progress = useRef(Math.random());
  const delay = useRef(Math.random() * 2);
  const SEGMENT = 0.3;

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.1),
    [points],
  );

  const fullPoints = useMemo(() => curve.getPoints(120), [curve]);

  const fullGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(fullPoints);
    const colors = [];
    fullPoints.forEach((_, i) => {
      const t = i / (fullPoints.length - 1);
      const r = 0.2 - t * 0.09;
      colors.push(r, r, r);
    });
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, [fullPoints]);

  useFrame((_, delta) => {
    delay.current -= delta;
    if (delay.current > 0) return;

    progress.current += speed;
    if (progress.current >= 1 + SEGMENT) {
      progress.current = -SEGMENT;
      delay.current = Math.random() * 2;
    }

    const segStart = Math.max(progress.current, 0);
    const segEnd = Math.min(progress.current + SEGMENT, 1);

    if (segStart >= segEnd) {
      segmentRef.current.visible = false;
      return;
    }

    segmentRef.current.visible = true;
    const segPoints = [],
      segColors = [],
      steps = 40;

    for (let i = 0; i <= steps; i++) {
      const rawT = segStart + (segEnd - segStart) * (i / steps);
      const t = reversed ? 1 - rawT : rawT;
      segPoints.push(curve.getPointAt(t));
      const fade = reversed ? 1 - i / steps : i / steps;
      segColors.push(0.027 * fade, 0.45 * fade, 0.72 * fade);
    }

    const geo = segmentRef.current.geometry;
    geo.setFromPoints(segPoints);
    geo.setAttribute("color", new THREE.Float32BufferAttribute(segColors, 3));
  });

  return (
    <>
      <line geometry={fullGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </line>
      <line ref={segmentRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
        />
      </line>
    </>
  );
}

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
  const TIP_X = 2.9;

  const originalPointSets = exits.map(({ y, endY }) => {
    const mid = (y + endY) / 2;
    return [
      new THREE.Vector3(-2, y, 0.0),
      new THREE.Vector3(STRAIGHT_END, y, 0.0),
      new THREE.Vector3(BEND_START, y, 0.0),
      new THREE.Vector3(BEND_MID, mid, 0.05),
      new THREE.Vector3(BEND_END, endY, 1.5),
      new THREE.Vector3(TIP_X, endY, 0.4),
    ];
  });

  const mirroredPointSets = originalPointSets.map(mirrorPoints);

  return (
    <div
      style={{ height: "400px", position: "relative" }}
      className="absolute -top-237 left-78"
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        {mirroredPointSets.map((pts, i) => (
          <ElectricPath
            key={`mirror-${i}`}
            points={pts}
            speed={0.01 + i * 0.0}
            reversed={false}
          />
        ))}
      </Canvas>

      {/* CARD */}
      <div
        style={{
          // display: "none",
          position: "absolute",
          right: "19%",
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
