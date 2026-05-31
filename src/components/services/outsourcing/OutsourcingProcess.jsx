import useScrollReveal from "../../../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Scope & Alignment",
    subtitle: "Requirements, Stack & Team Shape",
    desc: "We start with a structured discovery session — understanding your product, current team structure, tech stack, growth stage, and the specific gaps you need filled. No generic intake forms.",
    duration: "Day 1",
    deliverable: "Team Brief",
  },
  {
    number: "02",
    title: "Talent Matching",
    subtitle: "Hand-picked from a Vetted Roster",
    desc: "From our pre-vetted engineer roster, we identify the strongest profile matches — technical fit, timezone alignment, communication style, and domain experience. You review shortlisted profiles within 48hrs.",
    duration: "Day 2–3",
    deliverable: "Shortlisted Profiles",
  },
  {
    number: "03",
    title: "Interview & Trial Sprint",
    subtitle: "You Choose, Then Verify",
    desc: "You interview candidates and select your hire. A paid 2-week trial sprint follows — a real deliverable from your backlog, giving you confidence before any long-term commitment.",
    duration: "Week 1–2",
    deliverable: "Trial Sprint Output",
  },
  {
    number: "04",
    title: "Onboard & Embed",
    subtitle: "Tools, Access & First Sprint",
    desc: "We handle all contracting, NDAs, and access provisioning. Your new engineer is in your standups, Slack, Jira/Linear, and shipping code by day one of the official engagement.",
    duration: "Week 2",
    deliverable: "First Sprint Shipped",
  },
  {
    number: "05",
    title: "Scale & Optimise",
    subtitle: "Grow or Flex As You Need",
    desc: "Scale the team up or down with 2 weeks notice. Monthly performance reviews, talent swaps if needed, and ongoing account management ensure the engagement stays high-output.",
    duration: "Ongoing",
    deliverable: "Monthly Reviews",
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
            background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.07))",
            border: "1px solid rgba(56,189,248,0.45)",
            boxShadow: "0 0 20px rgba(56,189,248,0.15)",
          }}>
          <span className="text-xs font-extrabold" style={{ color: "#38BDF8" }}>{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom, rgba(56,189,248,0.35), rgba(56,189,248,0.04))", minHeight: "32px" }} />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-2"}`}>
        <div className="group rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
          style={{ background: "rgba(56,189,248,0.03)", border: "1px solid rgba(56,189,248,0.12)" }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
            <span className="text-[10px] tracking-widest uppercase text-white/25">—</span>
            <span className="text-sm text-white/45 italic">{step.subtitle}</span>
            <span className="ml-auto text-[10px] font-bold tracking-wide px-3 py-1 rounded-full hidden sm:inline-block"
              style={{ color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)" }}>
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
              style={{ color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)" }}>
              {step.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutsourcingProcess() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section id="outsourcing-process" className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 w-72 h-[600px] z-0"
        style={{ background: "radial-gradient(ellipse at left, rgba(56,189,248,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left sticky */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#38BDF8", textShadow: "0 0 10px rgba(56,189,248,0.4)", letterSpacing: "0.18em" }}>
              How It Works
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              From{" "}
              <span style={{
                background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Brief to Shipping
              </span>{" "}
              in 72 Hours
            </h2>
            <p ref={paraRef} className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: "#8ca0b0" }}>
              A lean, structured process designed to eliminate the friction of traditional hiring —
              without compromising on quality or fit.
            </p>
            <div className="rounded-2xl p-5"
              style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.16)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Time to First Commit</span>
                <span className="text-sm font-extrabold" style={{ color: "#38BDF8" }}>≤ 72 hrs</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(56,189,248,0.10)" }}>
                <div className="h-full rounded-full" style={{
                  width: "85%",
                  background: "linear-gradient(to right, #38BDF8, #07BEB8)",
                }} />
              </div>
              <p className="text-xs" style={{ color: "#8ca0b0" }}>
                2-week trial sprint included — no commitment required
              </p>
            </div>
          </div>

          {/* Right: Steps */}
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
