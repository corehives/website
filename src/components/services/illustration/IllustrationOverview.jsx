import { Brush, Clapperboard, Zap, Globe } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const pillars = [
  {
    icon: Brush,
    title: "2D Illustration",
    desc: "Custom character design, iconography, editorial illustration, and brand artwork. Every pixel hand-crafted to match your visual identity.",
    items: ["Character & Mascot Design", "Brand Illustration Sets", "Editorial Art", "Icon Systems"],
    color: "#A78BFA",
  },
  {
    icon: Clapperboard,
    title: "Motion Graphics",
    desc: "Animated logos, kinetic typography, product showcases, and broadcast-quality motion content that elevates any visual surface.",
    items: ["Logo Animation", "Brand Motion Kit", "Explainer Videos", "Social Reels"],
    color: "#07BEB8",
  },
  {
    icon: Zap,
    title: "UI Micro-animations",
    desc: "Subtle interactions, loading states, onboarding flows, and delightful transitions that make your digital product feel premium.",
    items: ["Lottie Animations", "Onboarding Flows", "Hover Interactions", "Loading States"],
    color: "#F472B6",
  },
  {
    icon: Globe,
    title: "3D & Visual Effects",
    desc: "3D product renders, dynamic visual effects, and immersive brand experiences that make your brand impossible to ignore.",
    items: ["3D Product Renders", "Visual Effects", "Interactive 3D", "AR-Ready Assets"],
    color: "#F4A623",
  },
];

function PillarCard({ pillar, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref}
      className="group relative flex flex-col rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(7,190,184,0.12)",
      }}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          boxShadow: `0 0 32px ${pillar.color}18, inset 0 0 20px ${pillar.color}06`,
          border: `1px solid ${pillar.color}35`,
          borderRadius: "16px",
        }} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}>
          <pillar.icon className="h-5 w-5" style={{ color: pillar.color }} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
        <div className="w-8 h-0.5 mb-4 transition-all duration-300 group-hover:w-14"
          style={{ background: pillar.color }} />
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{pillar.desc}</p>
        <ul className="flex flex-col gap-1.5">
          {pillar.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function IllustrationOverview() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgLeft} alt="" aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-1/2 opacity-50 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#A78BFA", textShadow: "0 0 10px rgba(167,139,250,0.4)", letterSpacing: "0.18em" }}>
            Creative Services
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Four Dimensions of{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Visual Storytelling
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Static visuals tell a story. Motion visuals tell it in a way people remember.
            We combine both — crafting illustration and animation systems that build brand
            recognition and drive measurable audience engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
