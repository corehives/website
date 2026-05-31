import { useRef, useEffect } from "react";
import { Video, PenTool, Layers, Smartphone, Share2, Box } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const capabilities = [
  {
    icon: Video,
    title: "Explainer & Demo Videos",
    desc: "Script-to-screen explainer videos that clarify complex products in under 90 seconds. Perfect for SaaS, fintech, and healthcare audiences.",
    tag: "Most Requested",
    color: "#A78BFA",
    featured: true,
  },
  {
    icon: PenTool,
    title: "Brand Illustration Systems",
    desc: "Cohesive sets of custom illustrations — from hero artwork to empty states — built as a scalable library your team can use across every touchpoint.",
    tag: "Brand Asset",
    color: "#07BEB8",
  },
  {
    icon: Layers,
    title: "Motion Graphics Packages",
    desc: "Animated logo reveals, kinetic typography, product feature showcases, and social media motion content — ready for any screen format.",
    tag: "High Impact",
    color: "#F472B6",
  },
  {
    icon: Smartphone,
    title: "UI Lottie Animations",
    desc: "Lightweight, scalable Lottie files for onboarding flows, success states, loading animations, and micro-interactions that delight users.",
    tag: "Developer-Ready",
    color: "#34D399",
  },
  {
    icon: Share2,
    title: "Social Content Animation",
    desc: "Scroll-stopping animated content formatted for Instagram, LinkedIn, TikTok, and YouTube — built for algorithms and human attention spans.",
    tag: "Growth Content",
    color: "#F4A623",
  },
  {
    icon: Box,
    title: "3D Product Visualisation",
    desc: "Photorealistic 3D renders and animated product demos that showcase your physical or digital product in its best possible light.",
    tag: "Premium Tier",
    color: "#FB923C",
  },
];

function CapCard({ item, delay }) {
  const cardRef = useRef(null);
  const frameRef = useRef(0);
  const ptrRef = useRef({ x: -999, y: -999 });
  const revealRef = useScrollReveal(delay);

  const flush = () => {
    frameRef.current = 0;
    const el = cardRef.current;
    if (el) { el.style.setProperty("--mx", `${ptrRef.current.x}px`); el.style.setProperty("--my", `${ptrRef.current.y}px`); }
  };
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    ptrRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
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
      <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}
        className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full"
        style={{
          background: item.featured ? `linear-gradient(135deg, ${item.color}10, ${item.color}04)` : "rgba(7,190,184,0.03)",
          border: item.featured ? `1px solid ${item.color}45` : "1px solid rgba(7,190,184,0.12)",
          "--mx": "-999px", "--my": "-999px",
        }}>
        <div className="pointer-events-none absolute inset-0 z-0"
          style={{ background: `radial-gradient(160px circle at var(--mx) var(--my), ${item.color}15, transparent 70%)` }} />
        {item.featured && (
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${item.color}80, transparent)` }} />
        )}
        <div className="relative z-10 flex flex-col h-full">
          <span className="self-start text-[10px] font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
            {item.tag}
          </span>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
            <item.icon className="h-5 w-5" style={{ color: item.color }} strokeWidth={1.5} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-tight">{item.title}</h3>
          <div className="w-7 h-px mb-4 transition-all duration-300 group-hover:w-12"
            style={{ background: `${item.color}70` }} />
          <p className="text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function IllustrationCapabilities() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgRight} alt="" aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-50 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#A78BFA", textShadow: "0 0 10px rgba(167,139,250,0.4)", letterSpacing: "0.18em" }}>
            What We Deliver
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Full-Spectrum{" "}
            <span style={{
              background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Creative Capabilities</span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            From a single Lottie animation to an entire brand motion kit — we cover every
            creative format your product and marketing team will ever need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((item, i) => (
            <CapCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
