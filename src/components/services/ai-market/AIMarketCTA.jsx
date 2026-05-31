import { ArrowRight, Calendar } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const trustItems = [
  "Free AI growth audit included",
  "No long-term contracts",
  "Weekly performance reporting",
  "Results-focused KPIs from day one",
];

export default function AIMarketCTA() {
  const headRef  = useScrollReveal(60);
  const paraRef  = useScrollReveal(160);
  const ctaRef   = useScrollReveal(260);
  const trustRef = useScrollReveal(340);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(244,114,182,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.3)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#F472B6" }} />
          <span className="text-xs font-medium tracking-widest text-white uppercase">Start Growing</span>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#F472B6" }} />
        </div>

        <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Get Your Free{" "}
          <span style={{
            background: "linear-gradient(135deg, #F472B6, #A78BFA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            AI Growth Audit
          </span>
        </h2>

        <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}>
          We'll audit your current organic, paid, and conversion performance —
          and show you exactly where the biggest growth opportunities are hiding.
          No commitment, no sales pressure.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#4a1a2e5e]">
            Claim Your Free Audit
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F472B6] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Calendar className="h-4 w-4" style={{ color: "#F472B6" }} />
            Book a Strategy Call
          </a>
        </div>

        <div ref={trustRef} className="flex flex-wrap justify-center gap-4">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#F472B6" }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
