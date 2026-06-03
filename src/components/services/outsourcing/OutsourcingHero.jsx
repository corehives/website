import { ArrowRight, CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import CTAButton from "../../shared/CTAButton";

const engineers = [
  { initials: "AR", color: "#38BDF8", role: "Full-Stack", status: "online" },
  { initials: "MK", color: "#07BEB8", role: "Mobile", status: "online" },
  { initials: "SP", color: "#A78BFA", role: "DevOps", status: "online" },
  { initials: "JL", color: "#F472B6", role: "AI/ML", status: "away" },
  { initials: "TC", color: "#F4A623", role: "QA", status: "online" },
  { initials: "NB", color: "#34D399", role: "Blockchain", status: "online" },
];

const techStack = ["React", "Node.js", "Python", "AWS", "Kubernetes", "TypeScript", "Rust", "Flutter"];

const pills = [
  "72hr avg. placement",
  "Senior-only talent",
  "No long-term lock-in",
];

export default function OutsourcingHero() {
  const badgeRef = useScrollReveal(0);
  const headRef  = useScrollReveal(80);
  const subRef   = useScrollReveal(160);
  const ctaRef   = useScrollReveal(240);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background lights */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)" }} />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(7,190,184,0.05) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

          {/* Left: Copy */}
          <div className="w-full lg:w-[52%]">
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#38BDF8" }} />
              <span className="text-xs font-medium tracking-widest text-white uppercase">Tech Staff Outsourcing</span>
            </div>

            <h1 ref={headRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Your Team,{" "}
              <span style={{
                background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Extended
              </span>
              <br />
              <span className="text-white/70">On Demand</span>
            </h1>

            <p ref={subRef} className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#8ca0b0" }}>
              Embed senior engineers directly into your team — zero recruitment overhead, no onboarding delays.
              CoreHives talent operates as your own, with your tools, your workflows, your timezone.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-8">
              <CTAButton href="/contact">
                Build Your Extended Team
              </CTAButton>
              <CTAButton href="#outsourcing-process">
                See How It Works
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-4">
              {pills.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#38BDF8" }} strokeWidth={2} />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Engineering team panel */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              {/* Main panel */}
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.16)" }}>

                {/* Panel header */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: "1px solid rgba(56,189,248,0.1)", background: "rgba(56,189,248,0.04)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#38BDF8" }} />
                    <span className="text-xs font-bold text-white tracking-wide">CoreHives Engineering Pod</span>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{ color: "#38BDF8", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                    6 Active
                  </span>
                </div>

                {/* Engineers list */}
                <div className="p-4 flex flex-col gap-2.5">
                  {engineers.map((eng) => (
                    <div key={eng.initials}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-white/[0.03]"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: `${eng.color}22`, border: `1.5px solid ${eng.color}55` }}>
                          {eng.initials}
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#000405]"
                          style={{ background: eng.status === "online" ? "#34D399" : "#F4A623" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-semibold text-white/80">{eng.role} Engineer</span>
                        <span className="block text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                          {eng.status === "online" ? "Available now" : "In sprint"}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{ color: eng.color, background: `${eng.color}12`, border: `1px solid ${eng.color}25` }}>
                        {eng.role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech stack row */}
                <div className="px-4 pb-4">
                  <div className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="block text-[10px] uppercase tracking-widest mb-2.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                          style={{ color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "placement" badge */}
              <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(56,189,248,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(56,189,248,0.12)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#38BDF8" }}>72hrs</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>avg. placement</span>
              </div>

              {/* Floating "retention" badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(7,190,184,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(7,190,184,0.10)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#07BEB8" }}>94%</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>12-month retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
