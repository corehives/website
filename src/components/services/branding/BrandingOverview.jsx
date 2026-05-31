import { Eye, Compass, BookOpen } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const pillars = [
  {
    icon: Eye,
    title: "Visual Identity",
    desc: "The look of your brand — logo system, color palette, typography, iconography, and the visual rules that make your brand instantly recognizable across every surface.",
    color: "#07BEB8",
    items: ["Logo & Mark Design", "Color System", "Typography Scale", "Iconography"],
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "The thinking behind your brand — how you're positioned in the market, how you speak, what you stand for, and why your audience should choose you over anyone else.",
    color: "#F4A623",
    items: ["Positioning & Differentiation", "Brand Personality", "Voice & Tone", "Messaging Framework"],
  },
  {
    icon: BookOpen,
    title: "Brand System",
    desc: "The infrastructure of your brand — a complete guidelines document, asset library, templates, and the tools your team needs to stay consistent at every scale.",
    color: "#A78BFA",
    items: ["Brand Guidelines Doc", "Asset Library", "UI Component Kit", "Team Onboarding Kit"],
  },
];

function PillarCard({ pillar, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl p-7 sm:p-8 transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(7,190,184,0.14)",
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          boxShadow: `0 0 32px ${pillar.color}22, inset 0 0 20px ${pillar.color}08`,
          border: `1px solid ${pillar.color}40`,
          borderRadius: "16px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${pillar.color}18`,
            border: `1px solid ${pillar.color}35`,
          }}
        >
          <pillar.icon className="h-5 w-5" style={{ color: pillar.color }} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-white mb-3 transition-colors duration-300"
          style={{ "--hover-color": pillar.color }}
        >
          {pillar.title}
        </h3>

        {/* Top accent line */}
        <div
          className="w-8 h-0.5 mb-4 transition-all duration-300 group-hover:w-14"
          style={{ background: pillar.color }}
        />

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#8ca0b0" }}>
          {pillar.desc}
        </p>

        {/* Deliverable list */}
        <ul className="flex flex-col gap-2">
          {pillar.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: pillar.color }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function BrandingOverview() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);
  const paraRef = useScrollReveal(200);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-1/2 opacity-50 z-0"
        loading="lazy"
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
            What We Mean By Branding
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Three Pillars of a{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Powerful Brand
            </span>
          </h2>
          <p
            ref={paraRef}
            className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            A logo alone is not a brand. A true brand identity is an interconnected
            system of visuals, strategy, and infrastructure that works consistently
            across every touchpoint — digital, print, product, and beyond.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
