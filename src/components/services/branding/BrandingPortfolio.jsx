import { ArrowRight, ArrowUpRight } from "lucide-react";
import CTAButton from "../../shared/CTAButton";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const projects = [
  {
    id: 1,
    name: "Nexus Capital",
    category: "FinTech · Full Rebrand",
    description:
      "Complete brand overhaul for a Series B fintech platform — new positioning, visual identity, and messaging framework that repositioned them as the 'trusted infrastructure' choice.",
    result: "+40% conversion rate",
    result2: "2× qualified leads",
    colors: ["#07BEB8", "#0d2535", "#F4A623"],
    tags: ["Strategy", "Visual Identity", "Guidelines"],
    accentColor: "#07BEB8",
  },
  {
    id: 2,
    name: "PulseHealth",
    category: "Healthcare · Brand Unification",
    description:
      "Unified the fragmented visual identities of a healthcare group operating across 12 markets into a single, coherent brand system while preserving regional flexibility.",
    result: "12 markets unified",
    result2: "60% design cost savings",
    colors: ["#34D399", "#0a2a22", "#ffffff"],
    tags: ["Brand System", "Multi-Market", "Style Guide"],
    accentColor: "#34D399",
  },
  {
    id: 3,
    name: "AuraStore",
    category: "E-Commerce · Brand Refresh",
    description:
      "Identity refresh for a premium lifestyle e-commerce brand entering new verticals — new mark, refined color system, and elevated visual language that drove 3× brand recall.",
    result: "3× brand recall",
    result2: "+28% avg. order value",
    colors: ["#A78BFA", "#1a0a2e", "#F472B6"],
    tags: ["Brand Refresh", "Visual Language", "Motion Kit"],
    accentColor: "#A78BFA",
  },
];

function PortfolioCard({ project, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(7,190,184,0.14)",
      }}
    >
      {/* Visual zone — CSS brand preview */}
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.colors[1] || "#0d2535"}, rgba(5,15,22,0.95))`,
          borderBottom: `1px solid ${project.accentColor}22`,
        }}
      >
        {/* Abstract brand geometry */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Color swatches */}
          <div className="absolute top-5 left-5 flex gap-2">
            {project.colors.map((c, i) => (
              <div
                key={i}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: "28px",
                  height: "28px",
                  background: c,
                  border: c === "#ffffff" ? "1px solid rgba(255,255,255,0.15)" : "none",
                  boxShadow: i === 0 ? `0 0 12px ${c}60` : "none",
                  transitionDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>

          {/* Large faint initial */}
          <span
            className="select-none font-extrabold leading-none"
            style={{
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: `${project.accentColor}15`,
              letterSpacing: "-4px",
            }}
          >
            {project.name.charAt(0)}
          </span>

          {/* Mock logo mark */}
          <div
            className="absolute bottom-5 right-5 flex items-center gap-2.5"
            style={{
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}30`,
              borderRadius: "12px",
              padding: "8px 14px",
            }}
          >
            <div
              className="w-5 h-5 rounded flex-shrink-0"
              style={{
                background: project.accentColor,
                borderRadius: "5px",
                transform: "rotate(12deg)",
              }}
            />
            <span className="text-xs font-bold text-white">{project.name}</span>
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to top, ${project.accentColor}30, transparent)`,
            }}
          />
        </div>

        {/* Category tag */}
        <div
          className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            color: project.accentColor,
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}28`,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.category.split("·")[0].trim()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs text-white/35 mb-1">{project.category}</span>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#07BEB8] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{
                color: "rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Results + CTA */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(7,190,184,0.1)" }}
        >
          <div>
            <span
              className="block text-sm font-bold"
              style={{ color: project.accentColor }}
            >
              {project.result}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {project.result2}
            </span>
          </div>
          <button className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/40 transition-all duration-300 group-hover:border-[#07BEB8] group-hover:text-[#07BEB8]">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BrandingPortfolio() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);
  const paraRef = useScrollReveal(200);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-40 z-0"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              ref={labelRef}
              className="text-xs uppercase font-medium mb-3"
              style={{
                color: "#07BEB8",
                textShadow: "0 0 10px rgba(7,190,184,0.5)",
                letterSpacing: "0.18em",
              }}
            >
              Featured Work
            </p>
            <h2
              ref={headRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            >
              Brand{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transformations
              </span>
            </h2>
          </div>
          <CTAButton href="/our-portfolio" ref={paraRef} className="shrink-0">
            View Full Portfolio
          </CTAButton>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <PortfolioCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
