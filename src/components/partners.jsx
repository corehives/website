import React, { useState, useEffect, useRef } from "react";

// ── Partner logos ─────────────────────────────────────────────────────────────
const partners = [
  {
    id: "ibm",
    name: "IBM",
    svg: (
      <svg
        viewBox="0 0 60 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 48, height: "auto" }}
      >
        <rect x="0" y="0" width="8" height="4" />
        <rect x="0" y="7" width="8" height="4" />
        <rect x="0" y="14" width="8" height="4" />
        <rect x="0" y="21" width="8" height="4" />
        <rect x="13" y="0" width="14" height="4" />
        <rect x="13" y="7" width="14" height="4" />
        <rect x="13" y="14" width="14" height="4" />
        <rect x="13" y="21" width="14" height="4" />
        <rect x="38" y="0" width="8" height="4" />
        <rect x="38" y="7" width="8" height="4" />
        <rect x="38" y="14" width="8" height="4" />
        <rect x="38" y="21" width="8" height="4" />
        <rect x="51" y="0" width="8" height="4" />
        <rect x="51" y="7" width="8" height="4" />
        <rect x="51" y="14" width="8" height="4" />
        <rect x="51" y="21" width="8" height="4" />
      </svg>
    ),
  },
  {
    id: "dell",
    name: "Dell",
    svg: (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 38, height: "auto" }}
      >
        <circle
          cx="30"
          cy="30"
          r="27"
          stroke="white"
          strokeWidth="3.5"
          fill="none"
        />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="17"
          fontFamily="Arial"
          fontWeight="bold"
        >
          dell
        </text>
      </svg>
    ),
  },
  {
    id: "ringcentral",
    name: "RingCentral",
    svg: (
      <svg
        viewBox="0 0 130 22"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 80, height: "auto" }}
      >
        <text
          x="0"
          y="18"
          fill="white"
          fontSize="18"
          fontFamily="Arial"
          fontWeight="600"
        >
          RingCentral
        </text>
      </svg>
    ),
  },
  {
    id: "aws",
    name: "AWS",
    svg: (
      <svg
        viewBox="0 0 70 28"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 52, height: "auto" }}
      >
        <text
          x="0"
          y="24"
          fill="white"
          fontSize="26"
          fontFamily="Arial"
          fontWeight="700"
        >
          aws
        </text>
      </svg>
    ),
  },
  {
    id: "cisco",
    name: "Cisco",
    svg: (
      <svg
        viewBox="0 0 80 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 56, height: "auto" }}
      >
        <text
          x="0"
          y="20"
          fill="white"
          fontSize="21"
          fontFamily="Arial"
          fontWeight="600"
        >
          cisco
        </text>
      </svg>
    ),
  },
  {
    id: "microsoft",
    name: "Microsoft",
    svg: (
      <svg
        viewBox="0 0 100 22"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 82, height: "auto" }}
      >
        <text
          x="0"
          y="19"
          fill="white"
          fontSize="19"
          fontFamily="Arial"
          fontWeight="400"
          letterSpacing="0.5"
        >
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    id: "google",
    name: "Google",
    svg: (
      <svg
        viewBox="0 0 80 22"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 68, height: "auto" }}
      >
        <text
          x="0"
          y="19"
          fill="white"
          fontSize="20"
          fontFamily="Arial"
          fontWeight="400"
        >
          Google
        </text>
      </svg>
    ),
  },
  {
    id: "oracle",
    name: "Oracle",
    svg: (
      <svg
        viewBox="0 0 80 22"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 64, height: "auto" }}
      >
        <text
          x="0"
          y="19"
          fill="white"
          fontSize="20"
          fontFamily="Arial"
          fontWeight="700"
        >
          ORACLE
        </text>
      </svg>
    ),
  },
];

// ── Flat-top hex geometry ─────────────────────────────────────────────────────
const S = 74;
const GAP = 10;
const SQ3 = Math.sqrt(3);
const HEX_W = 2 * S;
const HEX_H = SQ3 * S;
const COL_STEP = 1.5 * S + GAP;
const ROW_STEP = HEX_H + GAP;

function flatHexPath(size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i;
    pts.push(
      `${(size * Math.cos(a)).toFixed(2)},${(size * Math.sin(a)).toFixed(2)}`,
    );
  }
  return `M ${pts.join(" L ")} Z`;
}

const DRAW_S = S - GAP / 2;
const HEX_PATH = flatHexPath(DRAW_S);

// ── Grid: 13 cols × 3 rows ───────────────────────────────────────────────────
// KEY FIX: Center must be on an EVEN column so it has NO y-offset.
// With 13 cols (0-12), col 6 is even ✓. Row 1 of 3 (0-2) is middle ✓.
// BUT: odd cols get shifted down by ROW_STEP/2, so the visual vertical
// center of the grid is NOT simply row 1, col 6.
//
// Solution: Don't use a grid cell as the circle position.
// Instead compute the TRUE visual center of the entire bounding box
// and place the circle there independent of any cell.

const COLS = 13;
const ROWS = 3;

function buildGrid(cols, rows) {
  const cells = [];
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cx = col * COL_STEP;
      // Even cols: no offset. Odd cols: shift down by half row.
      const cy = row * ROW_STEP + (col % 2 === 1 ? ROW_STEP / 2 : 0);
      cells.push({ id: `${col}-${row}`, col, row, cx, cy });
    }
  }
  return cells;
}

const GRID = buildGrid(COLS, ROWS);

// ── Compute true bounding box of ALL hex cells ────────────────────────────────
const allCX = GRID.map((c) => c.cx);
const allCY = GRID.map((c) => c.cy);
const gridMinX = Math.min(...allCX) - HEX_W / 2;
const gridMaxX = Math.max(...allCX) + HEX_W / 2;
const gridMinY = Math.min(...allCY) - HEX_H / 2;
const gridMaxY = Math.max(...allCY) + HEX_H / 2;

// TRUE center of the bounding box — this is where we place the circle
const TRUE_CX = (gridMinX + gridMaxX) / 2;
const TRUE_CY = (gridMinY + gridMaxY) / 2;

// Mark the cell whose centre is closest to the true center as CENTER
// (used only to exclude it from logo placement)
const CENTER_CELL = GRID.reduce((best, cell) => {
  const d = Math.hypot(cell.cx - TRUE_CX, cell.cy - TRUE_CY);
  const bd = Math.hypot(best.cx - TRUE_CX, best.cy - TRUE_CY);
  return d < bd ? cell : best;
}, GRID[0]);
const CENTER_ID = CENTER_CELL.id;

const PERIPHERAL = GRID.filter((c) => c.id !== CENTER_ID);

// ViewBox — no horizontal padding, small vertical padding
const VPadY = 20;
const VX = gridMinX;
const VY = gridMinY - VPadY;
const VW = gridMaxX - gridMinX;
const VH = gridMaxY - gridMinY + VPadY * 2;

// Circle position in viewBox space
const CCX = TRUE_CX - VX; // horizontal center of bounding box
const CCY = TRUE_CY - VY; // vertical center of bounding box

// ── Component ─────────────────────────────────────────────────────────────────
export default function PartnersSection() {
  const [slots, setSlots] = useState({});
  const slotsRef = useRef({});
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    slotsRef.current = slots;
  }, [slots]);

  // Seed all logos into random peripheral cells
  useEffect(() => {
    const shuffled = [...PERIPHERAL].sort(() => Math.random() - 0.5);
    const init = {};
    partners.forEach((p, i) => {
      if (shuffled[i]) init[shuffled[i].id] = { partnerId: p.id, phase: "in" };
    });
    setSlots(init);
    slotsRef.current = init;
  }, []);

  // Staggered independent animation per partner
  useEffect(() => {
    const timers = [];

    const makeTick = () => () => {
      if (!isVisibleRef.current) return;
      const curr = slotsRef.current;
      const visible = Object.entries(curr).filter(([, v]) => v.phase === "in");
      if (!visible.length) return;

      const [fromId, { partnerId }] =
        visible[Math.floor(Math.random() * visible.length)];
      setSlots((prev) => ({ ...prev, [fromId]: { partnerId, phase: "out" } }));

      setTimeout(() => {
        const currSlots = slotsRef.current;
        const occupied = new Set(Object.keys(currSlots));
        const free = PERIPHERAL.filter(
          (c) => !occupied.has(c.id) || c.id === fromId,
        );
        if (!free.length) return;
        const candidates = free.filter((c) => c.id !== fromId);
        const pool = candidates.length ? candidates : free;
        const newCell = pool[Math.floor(Math.random() * pool.length)];

        setSlots((prev) => {
          const next = { ...prev };
          delete next[fromId];
          next[newCell.id] = { partnerId, phase: "in" };
          return next;
        });
      }, 800);
    };

    partners.forEach((_, i) => {
      const delay = i * 700;
      const interval = 2200 + i * 250;
      const tick = makeTick();
      const t = setTimeout(() => {
        tick();
        const iv = setInterval(tick, interval);
        timers.push(iv);
      }, delay);
      timers.push(t);
    });

    return () =>
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
  }, []);

  const cR = DRAW_S * 1.45;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07beb822]"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FFF 0.9px, transparent 01px), linear-gradient(90deg, #FFF 0.9px, transparent 0.9px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Centre radial glow */}
      <div className="absolute inset-0 top-40 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-[#07beb8d4] blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="text-center pt-16 pb-8 px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Tech Staff{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Outsourcing
            </span>{" "}
            is Highly
            <br /> Trusted by the Likes of
          </h2>
        </div>

        {/* Full-width honeycomb */}
        <div className="w-full" style={{ lineHeight: 0 }}>
          <svg
            viewBox={`${VX} ${VY} ${VW} ${VH}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", display: "block" }}
          >
            <defs>
              <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="14" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#d0f5f4" />
              </radialGradient>
              <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#07BEB8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#024d4a" stopOpacity="0.7" />
              </radialGradient>
              <radialGradient id="hexActive" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#0f3836" />
                <stop offset="100%" stopColor="#082322" />
              </radialGradient>
            </defs>

            {/* All hives */}
            {GRID.map((cell, idx) => {
              const isCenter = cell.id === CENTER_ID;
              const slot = slots[cell.id];
              const partner = slot
                ? partners.find((p) => p.id === slot.partnerId)
                : null;
              const logoOpacity = slot?.phase === "in" ? 1 : 0;

              const isFirst = idx === 0;
              const isLast = idx === GRID.length - 1;

              // Tilt first card right (inward), last card left (inward)
              const tiltTransform = isFirst
                ? `translate(${cell.cx}, ${cell.cy})`
                : isLast
                  ? `translate(${cell.cx}, ${cell.cy})`
                  : `translate(${cell.cx}, ${cell.cy})`;

              return (
                <g key={cell.id} transform={tiltTransform}>
                  <path
                    d={HEX_PATH}
                    fill={partner ? "url(#hexActive)" : "#0a2e2c57"}
                    stroke="#07BEB8"
                    strokeWidth="1"
                    strokeOpacity={partner ? 0.6 : 0.2}
                    style={{ transition: "stroke-opacity 0.5s ease" }}
                  />
                  {!isCenter && partner && (
                    <foreignObject
                      x={-HEX_W / 2}
                      y={-HEX_H / 2}
                      width={HEX_W}
                      height={HEX_H}
                      style={{
                        opacity: logoOpacity,
                        transition: "opacity 0.8s ease",
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {partner.svg}
                      </div>
                    </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>
          <div
            className="absolute z-40 top-85 left-1/2 -translate-x-1/2"
            style={{
              width: 250,
              height: 250,
              borderRadius: "50%",
              background: "linear-gradient(140deg, #07BEB8, #33384B)",
              padding: 15,
            }}
          >
            {/* Inner ring layer for depth */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(70deg, #07BEB8, #33384B)",
                padding: 10,
              }}
            >
              {/* White inner circle */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 40% 95%, #ffffff, #dff7f5)",
                  display: "flex",
                  border: "5px solid #FFF",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "inset 0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <span
                  style={{
                    color: "#058682",
                    fontSize: 30,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  Trusted
                </span>
                <span
                  style={{
                    color: "#0a2540",
                    fontSize: 30,
                    fontWeight: 900,
                    lineHeight: 1.2,
                  }}
                >
                  Partners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
