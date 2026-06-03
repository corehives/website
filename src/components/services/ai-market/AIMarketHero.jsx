import { ArrowRight, CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import CTAButton from "../../shared/CTAButton";

const metrics = [
  { label: "Organic Sessions", value: "+312%", delta: "↑", color: "#F472B6" },
  { label: "Cost per Acquisition", value: "–58%", delta: "↓", color: "#07BEB8" },
  { label: "Conversion Rate", value: "+4.2×", delta: "↑", color: "#A78BFA" },
  { label: "ROAS", value: "7.8×", delta: "↑", color: "#F4A623" },
];

const graphBars = [22, 31, 28, 45, 42, 58, 55, 72, 68, 85, 89, 100];

const pills = [
  "AI-driven, not guesswork",
  "Full-funnel coverage",
  "Weekly performance reports",
];

export default function AIMarketHero() {
  const badgeRef = useScrollReveal(0);
  const headRef  = useScrollReveal(80);
  const subRef   = useScrollReveal(160);
  const ctaRef   = useScrollReveal(240);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 65%)" }} />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(7,190,184,0.05) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

          {/* Left: Copy */}
          <div className="w-full lg:w-[52%]">
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#F472B6" }} />
              <span className="text-xs font-medium tracking-widest text-white uppercase">AI Market Optimization</span>
            </div>

            <h1 ref={headRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Growth That{" "}
              <span style={{
                background: "linear-gradient(135deg, #F472B6, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Compounds
              </span>
              <br />
              <span className="text-white/70">Powered by AI</span>
            </h1>

            <p ref={subRef} className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#8ca0b0" }}>
              CoreHives deploys AI-driven marketing systems — not campaigns. We analyse every signal in your funnel,
              automate optimisation loops, and compound gains that manual teams simply can't match.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-8">
              <CTAButton href="/contact">
                Get Your AI Growth Audit
              </CTAButton>
              <CTAButton href="#ai-market-process">
                See How It Works
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-4">
              {pills.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#F472B6" }} strokeWidth={2} />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Performance dashboard */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(244,114,182,0.04)", border: "1px solid rgba(244,114,182,0.16)" }}>

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: "1px solid rgba(244,114,182,0.1)", background: "rgba(244,114,182,0.04)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#F472B6" }} />
                    <span className="text-xs font-bold text-white tracking-wide">AI Performance Dashboard</span>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{ color: "#F472B6", background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)" }}>
                    Live
                  </span>
                </div>

                {/* Chart area */}
                <div className="px-5 py-4">
                  <div className="flex items-end gap-1.5 h-24 mb-2">
                    {graphBars.map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          background: i >= graphBars.length - 3
                            ? "linear-gradient(to top, #F472B6, #A78BFA)"
                            : "rgba(244,114,182,0.25)",
                        }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                    <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                  </div>
                  <p className="mt-1 text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Organic traffic — AI-optimised content strategy
                  </p>
                </div>

                {/* Metric pills */}
                <div className="grid grid-cols-2 gap-2.5 px-4 pb-4">
                  {metrics.map((m) => (
                    <div key={m.label}
                      className="rounded-xl px-4 py-3"
                      style={{ background: `${m.color}08`, border: `1px solid ${m.color}20` }}>
                      <span className="block text-lg font-extrabold leading-none mb-1"
                        style={{ color: m.color }}>{m.value}</span>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(244,114,182,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(244,114,182,0.12)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#F472B6" }}>312%</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>avg. traffic growth</span>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(7,190,184,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(7,190,184,0.10)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#07BEB8" }}>–58%</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>cost per acquisition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
