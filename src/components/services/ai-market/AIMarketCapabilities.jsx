import { useRef, useEffect } from "react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const capabilities = [
  {
    title: "AI Content Strategy & SEO",
    desc: "Programmatic content systems, topic cluster architecture, keyword intelligence, and AI-assisted editorial — scaling organic authority systematically.",
    tags: ["Topic Cluster Mapping", "AI Content Generation", "SERP Feature Targeting", "Link Building AI"],
    color: "#F472B6",
    icon: "✍️",
  },
  {
    title: "Performance Paid Media",
    desc: "Google, Meta, LinkedIn, and TikTok — AI-managed campaigns with dynamic creative optimisation, real-time bid adjustments, and predictive audience scaling.",
    tags: ["Google Ads / PMax", "Meta Advantage+", "LinkedIn ABM", "TikTok Paid"],
    color: "#A78BFA",
    icon: "📣",
  },
  {
    title: "Conversion Rate Optimisation",
    desc: "Full-funnel CRO — landing page personalisation, checkout flow optimisation, A/B and multivariate testing managed by ML models that adapt in real time.",
    tags: ["AI A/B Testing", "Landing Page Personalisation", "Checkout Optimisation", "Session Replay Analysis"],
    color: "#07BEB8",
    icon: "📈",
  },
  {
    title: "Marketing Automation",
    desc: "Lifecycle email flows, behavioural triggers, lead scoring, and CRM enrichment — all orchestrated by AI logic that adapts to each user's individual journey.",
    tags: ["Lifecycle Email Flows", "Lead Scoring AI", "Behavioural Triggers", "CRM Enrichment"],
    color: "#F4A623",
    icon: "⚙️",
  },
  {
    title: "Data & Analytics Infrastructure",
    desc: "Custom tracking setups, GA4 / BigQuery pipelines, attribution modelling, and executive dashboards that give you clarity across every channel.",
    tags: ["GA4 + BigQuery", "Custom Attribution", "Executive Dashboards", "Server-side Tracking"],
    color: "#34D399",
    icon: "🗄️",
  },
  {
    title: "AI Competitor Intelligence",
    desc: "Continuous competitor monitoring — content moves, ad creative, keyword shifts, and backlink acquisition — surfaced as weekly intelligence briefs for your team.",
    tags: ["Competitor Ad Monitoring", "Content Gap Alerts", "Backlink Intelligence", "SERP Position Tracking"],
    color: "#38BDF8",
    icon: "🔭",
  },
];

function CapCard({ cap, delay }) {
  const cardRef = useRef(null);
  const revealRef = useScrollReveal(delay);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    card.addEventListener("pointermove", onMove);
    return () => card.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={(el) => { cardRef.current = el; revealRef.current = el; }}
      className="group relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default transition-all duration-400 hover:-translate-y-1"
      style={{ background: "rgba(244,114,182,0.03)", border: "1px solid rgba(244,114,182,0.12)" }}>

      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${cap.color}10, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}28` }}>
          {cap.icon}
        </div>
        <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{cap.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {cap.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ color: `${cap.color}cc`, background: `${cap.color}0e`, border: `1px solid ${cap.color}22` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AIMarketCapabilities() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 w-80 h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(244,114,182,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#F472B6", textShadow: "0 0 10px rgba(244,114,182,0.4)", letterSpacing: "0.18em" }}>
            What We Deploy
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Every Growth Channel,{" "}
            <span style={{
              background: "linear-gradient(135deg, #F472B6, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              AI-Optimised
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Full-stack marketing capabilities — not agencies stitched together, but one team with one strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((cap, i) => (
            <CapCard key={cap.title} cap={cap} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
