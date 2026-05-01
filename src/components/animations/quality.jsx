import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import bgImage from "../.././assets/bg-circuit-chip.png";
import Setting from "../.././assets/icons/setting.png";
import avatar1 from "../.././assets/avatar-1.png";
import avatar2 from "../.././assets/avatar-2.png";
import avatar3 from "../.././assets/avatar-3.png";
import * as THREE from "three";

function ElectricPath({ points, speed = 0.016 }) {
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
      const t = segStart + (segEnd - segStart) * (i / steps);
      segPoints.push(curve.getPointAt(t));
      const fade = i / steps;
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
          opacity={0.3}
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

export default function CircuitScene() {
  // Each exit has: y (start), endY (final), sign (direction of bend)
  const exits = [
    { y: 1.25, endY: 0.55 },
    { y: 0.97, endY: 0.4 },
    { y: -0.97, endY: -0.4 },
    { y: -1.25, endY: -0.55 },
  ];

  const STRAIGHT_END = 0.75; // x where straight section ends
  const BEND_START = 1.05; // x where bend begins
  const BEND_MID = 1.45; // x at midpoint of arc
  const BEND_END = 1.85; // x where arc finishes
  const TIP_X = 2.55; // x of final tip point

  const paths = exits.map(({ y, endY }) => {
    const mid = (y + endY) / 2; // midpoint Y for smooth arc
    return [
      new THREE.Vector3(-2, y, 0.0),
      new THREE.Vector3(STRAIGHT_END, y, 0.0), // straight
      new THREE.Vector3(BEND_START, y, 0.0), // bend begins
      new THREE.Vector3(BEND_MID, mid, 0.05), // arc midpoint
      new THREE.Vector3(BEND_END, endY, 1.5), // arc settled
      new THREE.Vector3(TIP_X, endY, 0.5), // tip, straight exit
    ];
  });

  return (
    <div
      style={{ height: "400px", position: "relative" }}
      className="absolute -top-138 right-74"
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        {paths.map((pts, i) => (
          <ElectricPath key={i} points={pts} speed={0.01 + i * 0.0} />
        ))}
      </Canvas>

      {/* CARD */}
      <div
        style={{
          // display: "none",
          position: "absolute",
          left: "19%",
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
          { top: "17%" },
          { top: "24%" },
          { top: "73.5%" },
          { top: "80.5%" },
        ].map(({ top }, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: "3px",
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

        <div style={{ padding: "15px 14px 6px", display: "flex", gap: "6px" }}>
          {[
            "rgba(255,255,255,0.3)",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.9)",
          ].map((bg, i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: bg,
                display: "inline-block",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0 14px",
            position: "relative",
          }}
        >
          {[70, 55, 20].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: size + "px",
                height: size + "px",
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(255,255,255,${1 - i * 0.5}) 0%, transparent 80%)`,
              }}
            />
          ))}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img src={Setting} alt="icon" height={25} width={25} />
          </div>
        </div>

        <div className="flex justify-around px-4 py-5">
          <h3
            style={{
              textAlign: "start",
              fontSize: "14px",
              lineHeight: 1.5,
              width: "60%",
            }}
          >
            Quality Assurance And Testing
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {[avatar1, avatar2, avatar3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`avatar-${i}`}
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: "2px solid #FFFF  ",
                  marginLeft: i === 0 ? 0 : "-7px",
                  zIndex: 3 - i,
                  position: "relative",
                  objectFit: "cover",
                }}
              />
            ))}

            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "rgba(0,245,212,0.15)",
                border: "2px solid rgba(0,245,212,0.5)",
                marginLeft: "-7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
                color: "#00f5d4",
                fontWeight: 700,
                position: "relative",
                zIndex: 0,
              }}
            >
              10+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
