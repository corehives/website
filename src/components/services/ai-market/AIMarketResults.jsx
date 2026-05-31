import { ArrowRight, ArrowUpRight } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const cases = [
  {
    id: 1,
    name: "Vaultly",
    category: "FinTech · SEO + Content AI",
    description: "A complete SEO overhaul for a B2B fintech — programmatic content cluster strategy, technical SEO remediation, and AI-generated topical authority. 14 months to page-1 dominance across 180+ target keywords.",
    result: "+418% organic sessions",
    result2: "180+ page-1 rankings",
    colors: ["#F472B6", "#2a0a1e", "#A78BFA"],
    tags: ["Programmatic SEO", "Content AI", "Technical SEO"],
    accentColor: "#F472B6",
    metric: "+418%",
  },
  {
    id: 2,
    name: "Shopvibe",
    category: "eCommerce · Paid Media AI",
    description: "Full paid media rebuild for a DTC eCommerce brand — Google PMax, Meta Advantage+, and a custom ML model for product-level bid management. Scaled from £12k/mo to £90k/mo spend while improving ROAS.",
    result: "7.4× ROAS at scale",
    result2: "£90k/mo ad spend managed",
    colors: ["#A78BFA", "#1a0a2e", "#F472B6"],
    tags: ["Google PMax", "Meta Advantage+", "Bid Automation"],
    accentColor: "#A78BFA",
    metric: "7.4× ROAS",
  },
  {
    id: 3,
    name: "Meridiem SaaS",
    category: "B2B SaaS · Full-Funnel CRO",
    description: "End-to-end conversion optimisation for a project management SaaS — AI-personalised onboarding flows, pricing page multivariate tests, and trial-to-paid email sequences. 90-day engagement.",
    result: "+62% trial-to-paid rate",
    result2: "–41% CAC",
    colors: ["#07BEB8", "#0d2535", "#38BDF8"],
    tags: ["CRO", "Lifecycle Email", "A/B Testing"],
    accentColor: "#07BEB8",
    metric: "+62% conversion",
  },
];

function CaseCard({ cs, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{ background: "rgba(244,114,182,0.03)", border: "1px solid rgba(244,114,182,0.12)" }}>

      {/* Visual zone */}
      <div className="relative h-48 overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${cs.colors[1]}, rgba(5,15,22,0.95))`,
          borderBottom: `1px solid ${cs.accentColor}20`,
        }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute rounded-full opacity-15"
            style={{ width: "90px", height: "90px", border: `2px solid ${cs.accentColor}`, animation: "rotateSlow 10s linear infinite" }} />
          <div className="text-4xl font-black tracking-tighter"
            style={{ color: `${cs.accentColor}30`, fontFamily: "monospace" }}>
            {cs.metric}
          </div>
        </div>
        <div className="absolute top-5 left-5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ color: cs.accentColor, background: `${cs.accentColor}12`, border: `1px solid ${cs.accentColor}28`, backdropFilter: "blur(8px)" }}>
          {cs.category.split("·")[0].trim()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs text-white/30 mb-1">{cs.category}</span>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F472B6] transition-colors duration-300">
          {cs.name}
        </h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{cs.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {cs.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(244,114,182,0.1)" }}>
          <div>
            <span className="block text-sm font-bold" style={{ color: cs.accentColor }}>{cs.result}</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{cs.result2}</span>
          </div>
          <button className="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-white/35 transition-all duration-300 group-hover:border-[#F472B6] group-hover:text-[#F472B6]">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AIMarketResults() {
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
              style={{ color: "#F472B6", textShadow: "0 0 10px rgba(244,114,182,0.4)", letterSpacing: "0.18em" }}>
              Case Studies
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Growth Results{" "}
              <span style={{
                background: "linear-gradient(135deg, #F472B6, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Worth Showing
              </span>
            </h2>
          </div>
          <a href="/our-portfolio" ref={paraRef}
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#4a1a2e5e] flex-shrink-0">
            View Full Portfolio
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F472B6] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cases.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
