import { useEffect, useRef, useState } from "react";
import IbmImg from "../assets/icons/ibm.png";
import DellImg from "../assets/icons/dell.png";
import RingImg from "../assets/icons/ring.png";
// import AwsImg from "../assets/icons/aws.png";
// import CiscoImg from "../assets/icons/cisco.png";
// import MicrosoftImg from "../assets/icons/microsoft.png";
// import GoogleImg from "../assets/icons/google.png";
// import OracleImg from "../assets/icons/oracle.png";

// ── Partner logos ─────────────────────────────────────────────────────────────
const partners = [
  { id: "ibm",         name: "IBM",         imgSrc: IbmImg,       width: 60  },
  { id: "dell",        name: "Dell",        imgSrc: DellImg,      width: 50  },
  { id: "ringcentral", name: "RingCentral", imgSrc: RingImg,      width: 90  },
  // { id: "aws",         name: "AWS",         imgSrc: AwsImg,       width: 60  },
  // { id: "cisco",       name: "Cisco",       imgSrc: CiscoImg,     width: 70  },
  // { id: "microsoft",   name: "Microsoft",   imgSrc: MicrosoftImg, width: 90  },
  // { id: "google",      name: "Google",      imgSrc: GoogleImg,    width: 80  },
  // { id: "oracle",      name: "Oracle",      imgSrc: OracleImg,    width: 80  },
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
      `${(size * Math.cos(a)).toFixed(2)},${(size * Math.sin(a)).toFixed(2)}`
    );
  }
  return `M ${pts.join(" L ")} Z`;
}

const DRAW_S = S - GAP / 2;
const HEX_PATH = flatHexPath(DRAW_S);

// ── Grid: 8 cols × 2 rows ─────────────────────────────────────────────────────
const COLS = 8;
const ROWS = 2;

function buildGrid(cols, rows) {
  const cells = [];
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cx = col * COL_STEP;
      const cy = row * ROW_STEP + (col % 2 === 1 ? ROW_STEP / 2 : 0);
      cells.push({ id: `${col}-${row}`, col, row, cx, cy });
    }
  }
  return cells;
}

const GRID = buildGrid(COLS, ROWS);

// ── Bounding box ──────────────────────────────────────────────────────────────
const allCX = GRID.map((c) => c.cx);
const allCY = GRID.map((c) => c.cy);
const gridMinX = Math.min(...allCX) - HEX_W / 2;
const gridMaxX = Math.max(...allCX) + HEX_W / 2;
const gridMinY = Math.min(...allCY) - HEX_H / 2;
const gridMaxY = Math.max(...allCY) + HEX_H / 2;

const TRUE_CX = (gridMinX + gridMaxX) / 2;
const TRUE_CY = (gridMinY + gridMaxY) / 2;

const CENTER_CELL = GRID.reduce((best, cell) => {
  const d = Math.hypot(cell.cx - TRUE_CX, cell.cy - TRUE_CY);
  const bd = Math.hypot(best.cx - TRUE_CX, best.cy - TRUE_CY);
  return d < bd ? cell : best;
}, GRID[0]);
const CENTER_ID = CENTER_CELL.id;

const PERIPHERAL = GRID.filter((c) => c.id !== CENTER_ID);

const VPadY = 20;
const VX = gridMinX;
const VY = gridMinY - VPadY;
const VW = gridMaxX - gridMinX;
const VH = gridMaxY - gridMinY + VPadY * 2;

// ── Initial slot assignment ───────────────────────────────────────────────────
function createInitialSlots() {
  const shuffled = [...PERIPHERAL].sort(() => Math.random() - 0.5);
  const initialSlots = {};
  partners.forEach((partner, index) => {
    if (shuffled[index]) {
      initialSlots[shuffled[index].id] = { partnerId: partner.id, phase: "in" };
    }
  });
  return initialSlots;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PartnersSection() {
  const [slots, setSlots] = useState(() => createInitialSlots());
  const slotsRef = useRef(slots);
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { slotsRef.current = slots; }, [slots]);

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

      const transitionTimer = setTimeout(() => {
        const currSlots = slotsRef.current;
        const occupied = new Set(Object.keys(currSlots));
        const free = PERIPHERAL.filter(
          (c) => !occupied.has(c.id) || c.id === fromId
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
      timers.push(transitionTimer);
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

    return () => timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-auto-render relative overflow-hidden bg-[#07beb822]"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FFF 0.9px, transparent 1px), linear-gradient(90deg, #FFF 0.9px, transparent 0.9px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Centre radial glow */}
      <div className="absolute inset-0 top-32 sm:top-40 flex items-center justify-center pointer-events-none">
        <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#07beb8d4] blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="text-center pt-12 sm:pt-16 pb-6 sm:pb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Tech Staff{" "}
            <span className="precision-gradient">
              Outsourcing
            </span>{" "}
            is Highly
            <br /> Trusted by the Likes of
          </h2>
        </div>

        {/* Full-width honeycomb */}
        <div className="relative w-full" style={{ lineHeight: 0 }}>
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
              <radialGradient id="hexActive" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#0f3836" />
                <stop offset="100%" stopColor="#082322" />
              </radialGradient>
              {/* Whitens a logo (= brightness(0) invert(1)) while keeping its alpha */}
              <filter id="whiten" x="-20%" y="-20%" width="140%" height="140%">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
                />
              </filter>
            </defs>

            {GRID.map((cell) => {
              const isCenter = cell.id === CENTER_ID;
              const slot = slots[cell.id];
              const partner = slot
                ? partners.find((p) => p.id === slot.partnerId)
                : null;
              const logoOpacity = slot?.phase === "in" ? 1 : 0;

              return (
                <g key={cell.id} transform={`translate(${cell.cx}, ${cell.cy})`}>
                  <path
                    d={HEX_PATH}
                    fill={partner ? "url(#hexActive)" : "#0a2e2c57"}
                    stroke="#07BEB8"
                    strokeWidth="1"
                    strokeOpacity={partner ? 0.6 : 0.2}
                    style={{ transition: "stroke-opacity 0.5s ease" }}
                  />

                  {!isCenter && partner && (
                    <image
                      href={partner.imgSrc}
                      x={-partner.width / 2}
                      y={-(HEX_H * 0.5) / 2}
                      width={partner.width}
                      height={HEX_H * 0.5}
                      preserveAspectRatio="xMidYMid meet"
                      filter="url(#whiten)"
                      style={{
                        opacity: logoOpacity,
                        transition: "opacity 0.8s ease",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Centre "Trusted Partners" circle */}
          <div
            className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "clamp(120px, 25vw, 300px)",
              height: "clamp(120px, 25vw, 300px)",
              borderRadius: "50%",
              background: "linear-gradient(140deg, #07BEB8, #33384B)",
              padding: "clamp(6px, 1.4vw, 15px)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(70deg, #07BEB8, #33384B)",
                padding: "clamp(4px, 1vw, 10px)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 95%, #ffffff, #dff7f5)",
                  display: "flex",
                  border: "clamp(2px, 0.5vw, 5px) solid #FFF",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "inset 0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <span style={{ color: "#058682", fontSize: "clamp(18px, 4.2vw, 45px)", fontWeight: 700, lineHeight: 1.1 }}>
                  Trusted
                </span>
                <span style={{ color: "#0a2540", fontSize: "clamp(16px, 3.8vw, 40px)", fontWeight: 900, lineHeight: 1.1 }}>
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