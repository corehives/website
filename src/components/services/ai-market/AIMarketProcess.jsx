import useScrollReveal from "../../../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "AI Growth Audit",
    subtitle: "Full-Funnel Diagnosis",
    desc: "We run a comprehensive audit across your organic, paid, and owned channels — identifying every gap, inefficiency, and untapped opportunity. Competitor benchmarking and market sizing included.",
    duration: "Week 1",
    deliverable: "Growth Audit Report",
  },
  {
    number: "02",
    title: "Strategy Architecture",
    subtitle: "Data-Driven Growth Roadmap",
    desc: "From the audit findings, we architect a 90-day growth roadmap — prioritising by ROI potential, speed to impact, and resource requirements. You approve before we execute.",
    duration: "Week 1–2",
    deliverable: "90-Day Roadmap",
  },
  {
    number: "03",
    title: "System Setup & Integration",
    subtitle: "Infrastructure Before Execution",
    desc: "We build the tracking and data infrastructure first — GA4, server-side tags, attribution models, and custom dashboards. Decisions based on bad data compound into bad results.",
    duration: "Week 2–3",
    deliverable: "Analytics Infrastructure",
  },
  {
    number: "04",
    title: "Activation & Optimisation",
    subtitle: "Launch, Measure, Iterate",
    desc: "Campaigns, content, and conversion tests are launched in ordered priority. AI models monitor performance continuously — adjusting bids, rotating creatives, and flagging anomalies in real time.",
    duration: "Week 3–8",
    deliverable: "Live Campaigns + Dashboards",
  },
  {
    number: "05",
    title: "Scale & Compound",
    subtitle: "Double Down on What Works",
    desc: "Weekly performance reviews identify the highest-ROI activities. Budget and effort are systematically redirected toward what's working, building compounding momentum across every channel.",
    duration: "Month 3+",
    deliverable: "Monthly Growth Reviews",
  },
];

function Step({ step, index, total }) {
  const ref = useScrollReveal(index * 110);
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex gap-5 sm:gap-7">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(244,114,182,0.07))",
            border: "1px solid rgba(244,114,182,0.45)",
            boxShadow: "0 0 20px rgba(244,114,182,0.15)",
          }}>
          <span className="text-xs font-extrabold" style={{ color: "#F472B6" }}>{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom, rgba(244,114,182,0.35), rgba(244,114,182,0.04))", minHeight: "32px" }} />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-2"}`}>
        <div className="group rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
          style={{ background: "rgba(244,114,182,0.03)", border: "1px solid rgba(244,114,182,0.12)" }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
            <span className="text-[10px] tracking-widest uppercase text-white/25">—</span>
            <span className="text-sm text-white/45 italic">{step.subtitle}</span>
            <span className="ml-auto text-[10px] font-bold tracking-wide px-3 py-1 rounded-full hidden sm:inline-block"
              style={{ color: "#F472B6", background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.2)" }}>
              {step.duration}
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#8ca0b0" }}>{step.desc}</p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs text-white/30">Deliverable:</span>
            <span className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ color: "#07BEB8", background: "rgba(7,190,184,0.08)", border: "1px solid rgba(7,190,184,0.22)" }}>
              {step.deliverable}
            </span>
            <span className="text-[10px] font-bold tracking-wide px-3 py-1 rounded-full sm:hidden ml-auto"
              style={{ color: "#F472B6", background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.2)" }}>
              {step.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIMarketProcess() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section id="ai-market-process" className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 w-72 h-[600px] z-0"
        style={{ background: "radial-gradient(ellipse at left, rgba(244,114,182,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#F472B6", textShadow: "0 0 10px rgba(244,114,182,0.4)", letterSpacing: "0.18em" }}>
              Our Process
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              From{" "}
              <span style={{
                background: "linear-gradient(135deg, #F472B6, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Audit to Growth
              </span>{" "}
              in 90 Days
            </h2>
            <p ref={paraRef} className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: "#8ca0b0" }}>
              A structured AI growth programme with weekly transparency and measurable milestones.
              No black boxes, no vague "brand awareness" KPIs.
            </p>
            <div className="rounded-2xl p-5"
              style={{ background: "rgba(244,114,182,0.04)", border: "1px solid rgba(244,114,182,0.16)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Typical Results Timeline</span>
                <span className="text-sm font-extrabold" style={{ color: "#F472B6" }}>90 Days</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(244,114,182,0.10)" }}>
                <div className="h-full rounded-full" style={{
                  width: "75%",
                  background: "linear-gradient(to right, #F472B6, #A78BFA)",
                }} />
              </div>
              <p className="text-xs" style={{ color: "#8ca0b0" }}>
                Most clients see measurable organic growth within 60 days
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[65%] pt-2">
            {steps.map((step, i) => (
              <Step key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
