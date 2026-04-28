import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import bgImage from "../.././assets/bg-data-analytic.png";
import Devops from "../.././assets/icons/devops.png"; // ← add your actual image path
import * as THREE from "three";

function ElectricPath({ points, speed = 0.016 }) {
  const segmentRef = useRef();
  const progress = useRef(Math.random());
  const delay = useRef(Math.random() * 2);
  const SEGMENT = 0.25;

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.1),
    [points],
  );

  const fullPoints = useMemo(() => curve.getPoints(160), [curve]);

  const fullGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(fullPoints);
    const colors = [];
    fullPoints.forEach((_, i) => {
      const t = i / (fullPoints.length - 1);
      const r = 0.12 * (1 - t);
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
    const segPoints = [],
      segColors = [],
      steps = 50;

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
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.25}
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
  const exits = [
    { y: 1.3, endY: 0.4 },
    { y: 0.99, endY: 0.15 },
  ];

  const paths = exits.map(({ y, endY }) => {
    const mid = (y + endY) / 2;
    return [
      new THREE.Vector3(0.0, y, 0.0),
      new THREE.Vector3(1.0, y, 0.0),
      new THREE.Vector3(2.0, y, 0.0),
      new THREE.Vector3(2.8, mid, 0.12),
      new THREE.Vector3(3.4, endY, 0.7),
      new THREE.Vector3(4.1, endY, 0.9),
      new THREE.Vector3(4.1, endY, 0.95),
      new THREE.Vector3(6.2, endY, -0.4),
    ];
  });

  const mirroredPaths = paths.map((path) =>
    path.map((p) => new THREE.Vector3(-p.x, p.y, p.z)),
  );
  return (
    <div
      style={{ height: "400px", position: "relative" }}
      className="absolute -top-[150rem] left-[25rem]"
    >
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        {[...mirroredPaths].map((pts, i) => (
          <ElectricPath
            key={i}
            points={pts}
            speed={0.014 + (i % paths.length) * 0.003}
          />
        ))}
      </Canvas>

      {/* CARD + LABEL wrapper */}
      <div
        style={{
          position: "absolute",
          left: "46%",
          top: "42%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {/* CARD */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "24px",
            overflow: "visible",
            background: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
            position: "relative",
          }}
        >
          {/* Terminal dots */}
          {[{ top: "27%" }, { top: "49%" }].map(({ top }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "0",
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

          {/* Center icon */}
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
              src={Devops}
              alt=""
              style={{
                width: "30px",
                height: "25px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <span
          style={{
            fontSize: "12px",
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
          Cloud & DevOps
        </span>
      </div>
    </div>
  );
}
