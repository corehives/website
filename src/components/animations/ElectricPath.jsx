import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const TEAL = [0.027, 0.745, 0.722]; // #07BEB8

const VARIANTS = {
  circuit: {
    tension: 0.1,
    resolution: 120,
    segment: 0.3,
    steps: 40,
    delayMax: 2,
    trackA: 0.2,
    trackB: 0.09,
  },
  analytic: {
    tension: 0.3,
    resolution: 160,
    segment: 0.25,
    steps: 50,
    delayMax: 1.5,
    trackA: 0.36,
    trackB: 0.12,
  },
};

export default function ElectricPath({
  points,
  speed = 1,
  bgOpacity = 0.2,
  reversed = false,
  variant = "analytic",
}) {
  const { tension, resolution, segment, steps, delayMax, trackA, trackB } =
    VARIANTS[variant];

  const segmentRef = useRef();
  const progress = useRef(Math.random());
  const delay = useRef(Math.random() * delayMax);

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points, false, "catmullrom", tension),
    [points, tension],
  );

  const fullPoints = useMemo(() => curve.getPoints(resolution), [curve, resolution]);

  const fullGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(fullPoints);
    const colors = [];
    fullPoints.forEach((_, i) => {
      const t = i / (fullPoints.length - 1);
      const r = trackA - t * trackB;
      colors.push(r, r, r);
    });
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, [fullPoints, trackA, trackB]);

  useFrame((_, delta) => {
    delay.current -= delta;
    if (delay.current > 0) return;

    progress.current += speed;
    if (progress.current >= 1 + segment) {
      progress.current = -segment;
      delay.current = Math.random() * delayMax;
    }

    const segStart = Math.max(progress.current, 0);
    const segEnd = Math.min(progress.current + segment, 1);

    if (segStart >= segEnd) {
      segmentRef.current.visible = false;
      return;
    }

    segmentRef.current.visible = true;
    const segPoints = [];
    const segColors = [];

    for (let i = 0; i <= steps; i++) {
      const rawT = segStart + (segEnd - segStart) * (i / steps);
      const t = reversed ? 1 - rawT : rawT;

      // fade=1 at the leading head → full #07BEB8
      // fade=0 at the trailing tail → [0,0,0] ≈ #000405 (dark/invisible in additive)
      const fade = reversed ? 1 - i / steps : i / steps;

      segPoints.push(curve.getPointAt(t));
      segColors.push(
        TEAL[0] * fade,
        TEAL[1] * fade,
        TEAL[2] * fade,
      );
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
          opacity={bgOpacity}
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