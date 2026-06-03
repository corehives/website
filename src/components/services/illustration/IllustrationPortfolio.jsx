import { ArrowRight, ArrowUpRight } from "lucide-react";
import CTAButton from "../../shared/CTAButton";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const projects = [
  {
    id: 1,
    name: "DataStream",
    category: "SaaS · Motion Graphics",
    description: "A 90-second animated product intro for a real-time analytics platform — from storyboard to final render. Clean data visualisation aesthetics, custom icon animations, and kinetic typography.",
    result: "+45% avg. session time",
    result2: "3× demo request rate",
    colors: ["#A78BFA", "#1a0a2e", "#07BEB8"],
    tags: ["Motion Graphics", "Product Demo", "2D Animation"],
    accentColor: "#A78BFA",
    frameLabel: "00:01:32 / 00:01:32",
  },
  {
    id: 2,
    name: "Klarify App",
    category: "Mobile App · UI Animations",
    description: "Complete UI animation package for a fintech app — 40+ Lottie components covering onboarding, success states, empty states, and micro-interactions. Designed for 60fps on iOS and Android.",
    result: "+62% onboarding retention",
    result2: "4.9★ App Store rating",
    colors: ["#07BEB8", "#0d2535", "#34D399"],
    tags: ["Lottie Animation", "UI Motion", "Mobile App"],
    accentColor: "#07BEB8",
    frameLabel: "40+ Lottie Files",
  },
  {
    id: 3,
    name: "NovaBridge",
    category: "B2B · Explainer Video",
    description: "A full explainer video for a blockchain infrastructure company — character animation, complex technical storytelling simplified into a clean 2-minute narrative that prospects actually watch in full.",
    result: "80% completion rate",
    result2: "+35% qualified leads",
    colors: ["#F472B6", "#2a0a1e", "#F4A623"],
    tags: ["Explainer Video", "Character Animation", "Script Writing"],
    accentColor: "#F472B6",
    frameLabel: "00:02:08 Runtime",
  },
];

function PortCard({ project, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{ background: "rgba(7,190,184,0.03)", border: "1px solid rgba(7,190,184,0.12)" }}>

      {/* Visual zone */}
      <div className="relative h-52 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.colors[1]}, rgba(5,15,22,0.95))`,
          borderBottom: `1px solid ${project.accentColor}20`,
        }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated abstract visual */}
          <div className="absolute rounded-full opacity-20"
            style={{
              width: "80px", height: "80px",
              border: `2px solid ${project.accentColor}`,
              animation: "rotateSlow 8s linear infinite",
            }} />
          <div className="absolute rounded-full"
            style={{
              width: "50px", height: "50px",
              background: `radial-gradient(circle, ${project.accentColor}40, transparent)`,
              animation: "pricing-orb-float 4s ease-in-out infinite",
            }} />
          {/* Play button indicator */}
          <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: `${project.accentColor}25`,
              border: `1px solid ${project.accentColor}50`,
              backdropFilter: "blur(4px)",
            }}>
            <div className="w-0 h-0 ml-1" style={{
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: `12px solid ${project.accentColor}`,
            }} />
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-5 left-5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            color: project.accentColor,
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}28`,
            backdropFilter: "blur(8px)",
          }}>
          {project.category.split("·")[0].trim()}
        </div>

        {/* Frame label */}
        <div className="absolute bottom-3 right-4 text-[10px] font-mono"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          {project.frameLabel}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs text-white/30 mb-1">{project.category}</span>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(167,139,250,0.1)" }}>
          <div>
            <span className="block text-sm font-bold" style={{ color: project.accentColor }}>{project.result}</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{project.result2}</span>
          </div>
          <button className="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-white/35 transition-all duration-300 group-hover:border-[#A78BFA] group-hover:text-[#A78BFA]">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function IllustrationPortfolio() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgRight} alt="" aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-40 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#A78BFA", textShadow: "0 0 10px rgba(167,139,250,0.4)", letterSpacing: "0.18em" }}>
              Featured Work
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Motion Work That{" "}
              <span style={{
                background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Delivered Results
              </span>
            </h2>
          </div>
          <CTAButton href="/our-portfolio" ref={paraRef} className="shrink-0">
            View Full Portfolio
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <PortCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
