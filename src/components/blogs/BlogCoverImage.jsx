// Category-specific cover illustrations for blog cards and detail pages.
// All visuals are pure SVG/CSS — no external image dependencies.

const THEMES = {
  "AI & ML":    { color: "#07BEB8", bg: "linear-gradient(145deg, #020c1b 0%, #041f1e 100%)" },
  "Web Dev":    { color: "#818cf8", bg: "linear-gradient(145deg, #0f0c29 0%, #1a1040 100%)" },
  "Blockchain": { color: "#f59e0b", bg: "linear-gradient(145deg, #1a0a00 0%, #0f0800 100%)" },
  "Design":     { color: "#ec4899", bg: "linear-gradient(145deg, #1a0533 0%, #120328 100%)" },
  "Mobile":     { color: "#34d399", bg: "linear-gradient(145deg, #041f1a 0%, #0a180c 100%)" },
  "Branding":   { color: "#f97316", bg: "linear-gradient(145deg, #1a0800 0%, #120600 100%)" },
  "Cloud":      { color: "#60a5fa", bg: "linear-gradient(145deg, #001020 0%, #000e1a 100%)" },
};

// ── Shared decorative layer ──────────────────────────────────────────────────
function DotGrid() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        pointerEvents: "none",
      }}
    />
  );
}

function GlowOrb({ color }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "-30%",
        left: "-10%",
        width: "70%",
        height: "100%",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
  );
}

// ── Category illustrations ───────────────────────────────────────────────────

function AIIllustration({ color }) {
  const L1 = [[70,65],[70,130],[70,195],[70,255]];
  const L2 = [[175,50],[175,115],[175,178],[175,240]];
  const L3 = [[280,80],[280,155],[280,230]];
  const edges = [
    ...L1.flatMap(a => L2.map(b => [a, b])),
    ...L2.flatMap(a => L3.map(b => [a, b])),
  ];
  return (
    <svg
      viewBox="0 0 350 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {edges.map(([[x1,y1],[x2,y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeOpacity={0.13} strokeWidth={1} />
      ))}
      {[...L1, ...L2, ...L3].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={11} fill={color} fillOpacity={0.09} />
          <circle cx={cx} cy={cy} r={5}  fill={color} fillOpacity={0.55} />
        </g>
      ))}
      {/* Highlighted central node */}
      <circle cx={175} cy={145} r={18} fill={color} fillOpacity={0.18} />
      <circle cx={175} cy={145} r={10} fill={color} fillOpacity={0.92} />
    </svg>
  );
}

function WebDevIllustration({ color }) {
  const codeLines = [
    { y: 95,  w: 130, indent: 0,  op: 0.55 },
    { y: 115, w: 90,  indent: 20, op: 0.25 },
    { y: 135, w: 145, indent: 20, op: 0.35 },
    { y: 155, w: 60,  indent: 40, op: 0.2  },
    { y: 175, w: 110, indent: 20, op: 0.28 },
    { y: 195, w: 75,  indent: 0,  op: 0.22 },
  ];
  return (
    <svg
      viewBox="0 0 320 260"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Browser frame */}
      <rect x={35} y={25} width={250} height={200} rx={10}
        fill={color} fillOpacity={0.06}
        stroke={color} strokeOpacity={0.25} strokeWidth={1.5} />
      {/* Title bar */}
      <rect x={35} y={25} width={250} height={28} rx={10}
        fill={color} fillOpacity={0.1} />
      {/* Traffic dots */}
      {[62, 82, 102].map((cx, i) => (
        <circle key={i} cx={cx} cy={39} r={5} fill={color} fillOpacity={0.35} />
      ))}
      {/* Code lines */}
      {codeLines.map((l, i) => (
        <rect key={i} x={55 + l.indent} y={l.y} width={l.w} height={8} rx={3}
          fill={color} fillOpacity={l.op} />
      ))}
      {/* </> symbol */}
      <text x={230} y={200}
        fill={color} fillOpacity={0.45}
        fontSize={28} fontWeight={700} fontFamily="monospace">
        {"</>"}
      </text>
    </svg>
  );
}

function BlockchainIllustration({ color }) {
  const blocks = [30, 105, 180, 255];
  const hashRows = [75, 90, 105, 120, 135];
  return (
    <svg
      viewBox="0 0 340 200"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {blocks.map((x, i) => (
        <g key={i}>
          {/* Block rect */}
          <rect x={x} y={50} width={60} height={105} rx={7}
            fill={color} fillOpacity={0.09}
            stroke={color} strokeOpacity={0.32} strokeWidth={1.2} />
          {/* Block index */}
          <text x={x + 30} y={70} textAnchor="middle"
            fill={color} fillOpacity={0.55} fontSize={9} fontWeight={700} fontFamily="monospace">
            {`#${String(i + 1).padStart(3,"0")}`}
          </text>
          {/* Hash lines */}
          {hashRows.map((y, j) => (
            <rect key={j} x={x + 8} y={y} width={44} height={5} rx={2}
              fill={color} fillOpacity={j === 0 ? 0.55 : 0.18} />
          ))}
          {/* Chain connector */}
          {i < blocks.length - 1 && (
            <>
              <line x1={x + 60} y1={102} x2={x + 75} y2={102}
                stroke={color} strokeOpacity={0.55} strokeWidth={2} />
              <circle cx={x + 67} cy={102} r={3} fill={color} fillOpacity={0.55} />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

function DesignIllustration({ color }) {
  const swatches = ["#ec4899", "#818cf8", "#f97316", "#34d399", "#60a5fa"];
  return (
    <svg
      viewBox="0 0 320 270"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Venn circles */}
      <circle cx={130} cy={110} r={72}
        fill={color} fillOpacity={0.1}
        stroke={color} strokeOpacity={0.22} strokeWidth={1.2} />
      <circle cx={195} cy={110} r={72}
        fill={color} fillOpacity={0.07}
        stroke={color} strokeOpacity={0.16} strokeWidth={1.2} />
      <circle cx={162} cy={172} r={72}
        fill={color} fillOpacity={0.08}
        stroke={color} strokeOpacity={0.18} strokeWidth={1.2} />
      {/* Centre intersection */}
      <circle cx={162} cy={130} r={30} fill={color} fillOpacity={0.22} />
      {/* Color swatch dots */}
      {swatches.map((c, i) => (
        <g key={i}>
          <circle cx={60 + i * 46} cy={243} r={12} fill={c} fillOpacity={0.55} />
          <circle cx={60 + i * 46} cy={243} r={6}  fill={c} fillOpacity={0.8} />
        </g>
      ))}
    </svg>
  );
}

function MobileIllustration({ color }) {
  const apps = [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]];
  return (
    <svg
      viewBox="0 0 300 290"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Phone frame */}
      <rect x={90} y={18} width={120} height={210} rx={18}
        fill={color} fillOpacity={0.08}
        stroke={color} strokeOpacity={0.38} strokeWidth={1.5} />
      {/* Screen */}
      <rect x={98} y={44} width={104} height={166} rx={6}
        fill={color} fillOpacity={0.05} />
      {/* Status bar */}
      <rect x={98} y={44} width={104} height={20} rx={6}
        fill={color} fillOpacity={0.14} />
      {/* Camera notch */}
      <rect x={131} y={24} width={38} height={12} rx={6}
        fill={color} fillOpacity={0.28} />
      {/* App icons */}
      {apps.map(([col, row], i) => (
        <rect key={i}
          x={109 + col * 32} y={78 + row * 44}
          width={22} height={22} rx={6}
          fill={color} fillOpacity={0.32 + (i % 2) * 0.12} />
      ))}
      {/* Home indicator */}
      <rect x={135} y={222} width={30} height={5} rx={2.5}
        fill={color} fillOpacity={0.45} />
      {/* Side button */}
      <rect x={210} y={88} width={5} height={32} rx={2}
        fill={color} fillOpacity={0.32} />
    </svg>
  );
}

function BrandingIllustration({ color }) {
  return (
    <svg
      viewBox="0 0 320 270"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Concentric rings */}
      {[100, 80, 60, 40].map((r, i) => (
        <circle key={i} cx={160} cy={130} r={r}
          fill="none"
          stroke={color} strokeOpacity={0.1 + i * 0.055} strokeWidth={1.5} />
      ))}
      {/* Horizontal color band strips */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={48} y={58 + i * 26} width={224} height={16} rx={5}
          fill={color} fillOpacity={0.03 + (4 - i) * 0.028} />
      ))}
      {/* Large letter mark */}
      <text x={160} y={162} textAnchor="middle"
        fill={color} fillOpacity={0.65}
        fontSize={104} fontWeight={900} fontFamily="sans-serif"
        letterSpacing="-4">
        B
      </text>
      {/* Accent dot */}
      <circle cx={160} cy={215} r={7} fill={color} fillOpacity={0.7} />
    </svg>
  );
}

function CloudIllustration({ color }) {
  const nodes = [70, 130, 190, 250];
  return (
    <svg
      viewBox="0 0 320 270"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Cloud body (composed from ellipses + rect) */}
      <ellipse cx={160} cy={105} rx={78} ry={48}
        fill={color} fillOpacity={0.14}
        stroke={color} strokeOpacity={0.32} strokeWidth={1.5} />
      <ellipse cx={110} cy={122} rx={48} ry={38}
        fill={color} fillOpacity={0.1} />
      <ellipse cx={210} cy={122} rx={48} ry={38}
        fill={color} fillOpacity={0.1} />
      <rect x={78} y={118} width={164} height={42}
        fill={color} fillOpacity={0.1} />
      {/* Upload arrow */}
      <line x1={160} y1={80} x2={160} y2={48}
        stroke={color} strokeOpacity={0.55} strokeWidth={2} />
      <polyline points="150,60 160,46 170,60"
        fill="none" stroke={color} strokeOpacity={0.55} strokeWidth={2} strokeLinejoin="round" />
      {/* Drop lines to server nodes */}
      {nodes.map((cx, i) => (
        <line key={i} x1={cx} y1={160} x2={cx} y2={200}
          stroke={color} strokeOpacity={0.28} strokeWidth={1} />
      ))}
      {/* Horizontal connector between nodes */}
      <line x1={nodes[0]} y1={200} x2={nodes[nodes.length - 1]} y2={200}
        stroke={color} strokeOpacity={0.18} strokeWidth={1} />
      {/* Server node boxes */}
      {nodes.map((cx, i) => (
        <g key={i}>
          <rect x={cx - 16} y={200} width={32} height={20} rx={4}
            fill={color} fillOpacity={0.18}
            stroke={color} strokeOpacity={0.35} strokeWidth={1} />
          <circle cx={cx} cy={210} r={4} fill={color} fillOpacity={0.6} />
        </g>
      ))}
    </svg>
  );
}

// ── Illustration map ─────────────────────────────────────────────────────────
const ILLUSTRATIONS = {
  "AI & ML":    AIIllustration,
  "Web Dev":    WebDevIllustration,
  "Blockchain": BlockchainIllustration,
  "Design":     DesignIllustration,
  "Mobile":     MobileIllustration,
  "Branding":   BrandingIllustration,
  "Cloud":      CloudIllustration,
};

// ── Public component ─────────────────────────────────────────────────────────
// variant="card"   → fills parent absolutely (use inside a position:relative container)
// variant="detail" → standalone block with fixed height and rounded border
export default function BlogCoverImage({ category, variant = "card", style }) {
  const theme       = THEMES[category] || THEMES["AI & ML"];
  const Illustration = ILLUSTRATIONS[category] || AIIllustration;

  if (variant === "detail") {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(200px, 35vw, 320px)",
          borderRadius: 18,
          overflow: "hidden",
          border: `1px solid ${theme.color}20`,
          boxShadow: `0 8px 48px ${theme.color}12`,
          ...style,
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
        <DotGrid />
        <GlowOrb color={theme.color} />
        <Illustration color={theme.color} />
      </div>
    );
  }

  // card variant — absolute fill, parent must be position:relative
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
      <DotGrid />
      <GlowOrb color={theme.color} />
      <Illustration color={theme.color} />
    </>
  );
}
