import { useRef, useEffect } from "react";
import {
  PenTool, Layout, MessageSquare, BookOpen, Target, RefreshCw
} from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const capabilities = [
  {
    icon: PenTool,
    title: "Logo & Mark Design",
    desc: "Primary mark, wordmark, icon mark, and responsive logo variants. Designed for scalability from favicon to billboard.",
    tag: "Foundation",
    color: "#07BEB8",
  },
  {
    icon: Layout,
    title: "Full Brand Identity System",
    desc: "Color palette, typography hierarchy, iconography, photography direction, and a complete visual language document.",
    tag: "Core Service",
    color: "#F4A623",
    featured: true,
  },
  {
    icon: MessageSquare,
    title: "Brand Voice & Messaging",
    desc: "Tone of voice guidelines, key messaging pillars, tagline development, and copy frameworks for consistent communication.",
    tag: "Strategy",
    color: "#A78BFA",
  },
  {
    icon: BookOpen,
    title: "Visual Style Guide",
    desc: "A comprehensive guidelines document covering every visual rule, usage example, and do/don't for maintaining brand integrity.",
    tag: "Documentation",
    color: "#34D399",
  },
  {
    icon: Target,
    title: "Brand Strategy & Positioning",
    desc: "Market positioning, competitive analysis, brand personality definition, and audience mapping to anchor every design decision.",
    tag: "Strategy",
    color: "#F472B6",
  },
  {
    icon: RefreshCw,
    title: "Rebranding & Brand Refresh",
    desc: "Systematic brand evolution for established businesses — modernize without losing equity, or completely pivot when the market demands it.",
    tag: "Evolution",
    color: "#FB923C",
  },
];

function CapabilityCard({ item, delay }) {
  const cardRef = useRef(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: -999, y: -999 });
  const revealRef = useScrollReveal(delay);

  const flush = () => {
    frameRef.current = 0;
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${pointerRef.current.x}px`);
    el.style.setProperty("--my", `${pointerRef.current.y}px`);
  };

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pointerRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (!frameRef.current) frameRef.current = requestAnimationFrame(flush);
  };

  const onLeave = () => {
    if (frameRef.current) { cancelAnimationFrame(frameRef.current); frameRef.current = 0; }
    const el = cardRef.current;
    if (el) { el.style.setProperty("--mx", "-999px"); el.style.setProperty("--my", "-999px"); }
  };

  useEffect(() => () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); }, []);

  return (
    <div ref={revealRef}>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full"
        style={{
          background: item.featured
            ? `linear-gradient(135deg, ${item.color}12, ${item.color}06)`
            : "rgba(7,190,184,0.03)",
          border: item.featured
            ? `1px solid ${item.color}50`
            : "1px solid rgba(7,190,184,0.14)",
          "--mx": "-999px",
          "--my": "-999px",
        }}
      >
        {/* Mouse glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(160px circle at var(--mx) var(--my), ${item.color}18, transparent 70%)`,
          }}
        />

        {item.featured && (
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${item.color}80, transparent)`,
            }}
          />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Tag */}
          <span
            className="self-start text-[10px] font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: item.color,
              background: `${item.color}12`,
              border: `1px solid ${item.color}28`,
            }}
          >
            {item.tag}
          </span>

          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${item.color}15`,
              border: `1px solid ${item.color}28`,
            }}
          >
            <item.icon className="h-5 w-5" style={{ color: item.color }} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold text-white mb-3 leading-tight"
            style={{}}
          >
            {item.title}
          </h3>

          {/* Divider */}
          <div
            className="w-7 h-px mb-4 transition-all duration-300 group-hover:w-12"
            style={{ background: `${item.color}70` }}
          />

          {/* Description */}
          <p className="text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrandingCapabilities() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);
  const paraRef = useScrollReveal(200);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-50 z-0"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(7,190,184,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            ref={labelRef}
            className="text-xs uppercase font-medium mb-3"
            style={{
              color: "#07BEB8",
              textShadow: "0 0 10px rgba(7,190,184,0.5)",
              letterSpacing: "0.18em",
            }}
          >
            What's Included
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Our Branding{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Capabilities
            </span>
          </h2>
          <p
            ref={paraRef}
            className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            From early-stage startups building their identity from zero to established
            enterprises needing a strategic rebrand — we cover the full spectrum.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((item, i) => (
            <CapabilityCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
