import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TEAL = [0.027, 0.745, 0.722];

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

class SegmentBuffer {
  constructor(steps) {
    this.steps = steps;
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array((steps + 1) * 3);
    this.colors = new Float32Array((steps + 1) * 3);
    this.positionAttr = new THREE.BufferAttribute(this.positions, 3);
    this.colorAttr = new THREE.BufferAttribute(this.colors, 3);

    this.geometry.setAttribute("position", this.positionAttr);
    this.geometry.setAttribute("color", this.colorAttr);
    this.geometry.setDrawRange(0, steps + 1);
  }

  update(curve, segStart, segEnd, reversed, scratchPoint) {
    for (let index = 0; index <= this.steps; index++) {
      const rawT = segStart + (segEnd - segStart) * (index / this.steps);
      const t = reversed ? 1 - rawT : rawT;
      const fade = reversed ? 1 - index / this.steps : index / this.steps;
      const offset = index * 3;

      curve.getPointAt(t, scratchPoint);
      this.positions[offset] = scratchPoint.x;
      this.positions[offset + 1] = scratchPoint.y;
      this.positions[offset + 2] = scratchPoint.z;
      this.colors[offset] = TEAL[0] * fade;
      this.colors[offset + 1] = TEAL[1] * fade;
      this.colors[offset + 2] = TEAL[2] * fade;
    }

    this.positionAttr.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
  }

  dispose() {
    this.geometry.dispose();
  }
}

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
  const progress = useRef(0);
  const delay = useRef(0);
  const scratchPoint = useRef(new THREE.Vector3());

  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points, false, "catmullrom", tension),
    [points, tension],
  );

  const fullPoints = useMemo(
    () => curve.getPoints(resolution),
    [curve, resolution],
  );

  const fullGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(fullPoints);
    const colors = new Float32Array(fullPoints.length * 3);

    fullPoints.forEach((_, index) => {
      const t = index / (fullPoints.length - 1);
      const channel = trackA - t * trackB;
      const offset = index * 3;

      colors[offset] = channel;
      colors[offset + 1] = channel;
      colors[offset + 2] = channel;
    });

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [fullPoints, trackA, trackB]);

  const segmentBuffer = useMemo(() => new SegmentBuffer(steps), [steps]);

  useEffect(() => {
    progress.current = Math.random();
    delay.current = Math.random() * delayMax;
  }, [delayMax]);

  useEffect(
    () => () => {
      fullGeometry.dispose();
      segmentBuffer.dispose();
    },
    [fullGeometry, segmentBuffer],
  );

  useFrame((_, delta) => {
    const segmentLine = segmentRef.current;
    if (!segmentLine) {
      return;
    }

    delay.current -= delta;
    if (delay.current > 0) {
      return;
    }

    progress.current += speed * delta * 60;
    if (progress.current >= 1 + segment) {
      progress.current = -segment;
      delay.current = Math.random() * delayMax;
    }

    const segStart = Math.max(progress.current, 0);
    const segEnd = Math.min(progress.current + segment, 1);

    if (segStart >= segEnd) {
      segmentLine.visible = false;
      return;
    }

    segmentLine.visible = true;
    segmentBuffer.update(
      curve,
      segStart,
      segEnd,
      reversed,
      scratchPoint.current,
    );
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
      <line ref={segmentRef} geometry={segmentBuffer.geometry}>
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
