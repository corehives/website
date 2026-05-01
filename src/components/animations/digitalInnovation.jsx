import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import bgImage from "../.././assets/bg-data-analytic.png";
import Innovation from "../.././assets/icons/innovation.png";
import * as THREE from "three";

function ElectricPath({ points, speed = 0.016 }) {
  const segmentRef = useRef();
  const progress = useRef(Math.random());
  const delay = useRef(Math.random() * 2);
  const SEGMENT = 0.25;

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.3),
    [points],
  );

  const fullPoints = useMemo(() => curve.getPoints(160), [curve]);

  const fullGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(fullPoints);
    const colors = [];
    fullPoints.forEach((_, i) => {
      const t = i / (fullPoints.length - 1);
      const r = 0.12 * (3 - t);
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
      delay.current = Math.random() * 1.5;
    }

    const segStart = Math.max(progress.current, 0);
    const segEnd = Math.min(progress.current + SEGMENT, 1);

    if (segStart >= segEnd) {
      segmentRef.current.visible = false;
      return;
    }

    segmentRef.current.visible = true;
    const segPoints = [], segColors = [], steps = 50;

    for (let i = 0; i <= steps; i++) {
      const t = segStart + (segEnd - segStart) * (i / steps);
      const fade = i / steps;
      segPoints.push(curve.getPointAt(t));
      segColors.push(0.01 * fade, 0.55 * fade, 0.75 * fade);
    }

    const geo = segmentRef.current.geometry;
    geo.setFromPoints(segPoints);
    geo.setAttribute("color", new THREE.Float32BufferAttribute(segColors, 3));
  });

  return (
    <>
      <line geometry={fullGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </line>
      <line ref={segmentRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={1} blending={THREE.AdditiveBlending} />
      </line>
    </>
  );
}

export default function AnalyticMirrorScene() {
  const exits = [
    { y: -1.4, endY: -0.5 },   // ← Y flipped downward
    { y: -0.99, endY: -0.1 },  // ← Y flipped downward
  ];

  const paths = exits.map(({ y, endY }) => {
    const mid = (y + endY) / 2;
    return [
      new THREE.Vector3( 0.0,  y,    0.0),
      new THREE.Vector3(-1.2,  y,    0.0),   // ← X negated: flows left
      new THREE.Vector3(-2.2,  y,    0.0),
      new THREE.Vector3(-2.9,  mid,  0.0),
      new THREE.Vector3(-3.5,  endY, 0.0),
      new THREE.Vector3(-4.5,  endY, 0.0),
      new THREE.Vector3(-4.5,  endY, 0.0),   // flat run
      new THREE.Vector3(-6.0,  endY, 0.7),   // start of final bend
      new THREE.Vector3(-6.4,  endY + 0.9, 1.5), // ← bends upward (+ instead of -)
    ];
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "15%",    // ← pinned to bottom instead of top
        right: "-8%",   // ← pinned to right instead of left
        width: "45%",
        height: "45%",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: true }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        {paths.map((pts, i) => (
          <ElectricPath key={i} points={pts} speed={0.010 + i * 0.00} />
        ))}
      </Canvas>

      {/* Card — left side where lines terminate */}
      <div
        style={{
          position: "absolute",
          left: "44%",      // ← left instead of right
          top: "68%",       // ← lower since container is bottom-anchored
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
          {/* Terminal dots — LEFT side */}
          {[{ top: "32%" }, { top: "55%" }].map(({ top }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "-2px",    // ← left instead of right
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

          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={Innovation} alt="" style={{ width: "45%", height: "45%", objectFit: "contain" }} />
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
          Digital Innovation
        </span>
      </div>
    </div>
  );
}