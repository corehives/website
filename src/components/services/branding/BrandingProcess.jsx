import useScrollReveal from "../../../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Research & Competitive Intelligence",
    desc: "We immerse ourselves in your industry, audience, and competitive landscape. Deep-dive interviews, brand audits, and market research reveal the whitespace where your brand can own.",
    duration: "Week 1–2",
    deliverable: "Brand Audit Report",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Positioning & Brand Architecture",
    desc: "With research in hand, we define your brand positioning, personality archetypes, messaging pillars, and the strategic direction that will guide every design decision.",
    duration: "Week 2–3",
    deliverable: "Brand Strategy Deck",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Visual Identity Creation",
    desc: "The creative phase begins. We explore multiple visual directions, develop logo concepts, select color systems, and build the typography hierarchy. You see options, not assumptions.",
    duration: "Week 3–5",
    deliverable: "3 Design Directions",
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "Feedback, Iteration & Perfection",
    desc: "Two rounds of structured feedback ensure the final identity genuinely represents your brand. We refine, iterate, and test across multiple applications until it's exactly right.",
    duration: "Week 5–6",
    deliverable: "Final Identity System",
  },
  {
    number: "05",
    title: "Deliver",
    subtitle: "Handoff, Guidelines & Launch",
    desc: "Full asset delivery in every format you'll ever need, plus a comprehensive brand guidelines document so your team and vendors maintain consistency forever.",
    duration: "Week 6–7",
    deliverable: "Brand Guidelines + Assets",
  },
];

function ProcessStep({ step, index, total }) {
  const ref = useScrollReveal(index * 120);
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex gap-5 sm:gap-7">
      {/* Left: number column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Step circle */}
        <div
          className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: "linear-gradient(135deg, rgba(7,190,184,0.2), rgba(7,190,184,0.08))",
            border: "1px solid rgba(7,190,184,0.45)",
            boxShadow: "0 0 20px rgba(7,190,184,0.15)",
          }}
        >
          <span
            className="text-xs font-extrabold"
            style={{ color: "#07BEB8" }}
          >
            {step.number}
          </span>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7,190,184,0.35), rgba(7,190,184,0.05))",
              minHeight: "32px",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-2"}`}>
        <div
          className="group rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
          style={{
            background: "rgba(7,190,184,0.03)",
            border: "1px solid rgba(7,190,184,0.13)",
          }}
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {step.title}
            </h3>
            <span className="text-[10px] tracking-widest uppercase text-white/30">
              —
            </span>
            <span className="text-sm text-white/50 italic">{step.subtitle}</span>

            {/* Duration badge */}
            <span
              className="ml-auto text-[10px] font-bold tracking-wide px-3 py-1 rounded-full hidden sm:inline-block"
              style={{
                color: "#07BEB8",
                background: "rgba(7,190,184,0.08)",
                border: "1px solid rgba(7,190,184,0.2)",
              }}
            >
              {step.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#8ca0b0" }}>
            {step.desc}
          </p>

          {/* Deliverable */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs text-white/35">Deliverable:</span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                color: "#F4A623",
                background: "rgba(244,167,35,0.08)",
                border: "1px solid rgba(244,167,35,0.22)",
              }}
            >
              {step.deliverable}
            </span>
            {/* Mobile duration */}
            <span
              className="text-[10px] font-bold tracking-wide px-3 py-1 rounded-full sm:hidden ml-auto"
              style={{
                color: "#07BEB8",
                background: "rgba(7,190,184,0.08)",
                border: "1px solid rgba(7,190,184,0.2)",
              }}
            >
              {step.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrandingProcess() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);
  const paraRef = useScrollReveal(200);

  return (
    <section
      id="branding-process"
      className="section-auto-render relative overflow-hidden py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 w-72 h-[600px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(7,190,184,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left sticky header ── */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
            <p
              ref={labelRef}
              className="text-xs uppercase font-medium mb-3"
              style={{
                color: "#07BEB8",
                textShadow: "0 0 10px rgba(7,190,184,0.5)",
                letterSpacing: "0.18em",
              }}
            >
              Our Methodology
            </p>
            <h2
              ref={headRef}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
            >
              A Proven{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                5-Step
              </span>{" "}
              Brand Creation Process
            </h2>
            <p
              ref={paraRef}
              className="text-sm sm:text-base leading-relaxed mb-7"
              style={{ color: "#8ca0b0" }}
            >
              Every successful brand we've built follows the same disciplined
              process — from research to launch in 6–7 weeks, with full
              transparency at every stage.
            </p>

            {/* Timeline summary */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(7,190,184,0.04)",
                border: "1px solid rgba(7,190,184,0.16)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Total Timeline</span>
                <span
                  className="text-sm font-extrabold"
                  style={{ color: "#07BEB8" }}
                >
                  6–7 Weeks
                </span>
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(7,190,184,0.12)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "85%",
                    background: "linear-gradient(to right, #07BEB8, #058682)",
                  }}
                />
              </div>
              <p className="text-xs" style={{ color: "#8ca0b0" }}>
                Structured for momentum — no open-ended engagements
              </p>
            </div>
          </div>

          {/* ── Right: Steps ── */}
          <div className="w-full lg:w-[65%] pt-2">
            {steps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
