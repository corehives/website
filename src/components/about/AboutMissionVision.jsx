import { Target, Eye } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import BgRight from "../../assets/bg-right-content.webp";

const cards = [
  {
    icon: Target,
    tag: "Mission",
    headline: "Why We Exist",
    body: "To empower businesses of every size with cutting-edge technology solutions that drive measurable growth, operational efficiency, and lasting digital transformation — delivered with the precision of an enterprise partner and the agility of a startup.",
    gradient: "from-[#07BEB8]/20 to-[#07BEB8]/5",
    borderColor: "rgba(7,190,184,0.35)",
    glowColor: "rgba(7,190,184,0.12)",
    iconBg: "rgba(7,190,184,0.15)",
    iconColor: "#07BEB8",
    accentLine: "#07BEB8",
  },
  {
    icon: Eye,
    tag: "Vision",
    headline: "Where We're Going",
    body: "To become the world's most trusted technology partner for growth-stage businesses — known not just for what we build, but for how we think, how we communicate, and how we relentlessly champion our clients' success long after launch.",
    gradient: "from-white/5 to-white/[0.02]",
    borderColor: "rgba(255,255,255,0.12)",
    glowColor: "rgba(255,255,255,0.04)",
    iconBg: "rgba(255,255,255,0.08)",
    iconColor: "#ffffff",
    accentLine: "rgba(255,255,255,0.3)",
  },
];

function MissionCard({ card, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="relative flex flex-col rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: `1px solid ${card.borderColor}`,
        boxShadow: `0 0 40px ${card.glowColor}`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${card.accentLine}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{ background: card.iconBg }}
      >
        <card.icon className="h-6 w-6" style={{ color: card.iconColor }} strokeWidth={1.5} />
      </div>

      {/* Tag */}
      <span
        className="text-xs font-bold tracking-widest uppercase mb-3"
        style={{ color: "#07BEB8" }}
      >
        {card.tag}
      </span>

      {/* Headline */}
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
        {card.headline}
      </h3>

      {/* Divider */}
      <div
        className="w-10 h-px mb-5"
        style={{ background: card.accentLine }}
      />

      {/* Body */}
      <p className="text-sm sm:text-base leading-relaxed flex-1" style={{ color: "#8ca0b0" }}>
        {card.body}
      </p>

      {/* Bottom glow blob */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full"
        style={{
          background: `radial-gradient(circle, ${card.glowColor} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function AboutMissionVision() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(120);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-60 z-0"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Core Purpose
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            Mission &{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vision
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <MissionCard key={card.tag} card={card} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
