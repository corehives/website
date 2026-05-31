import useScrollReveal from "../../../hooks/useScrollReveal";

const models = [
  {
    icon: "👤",
    title: "Dedicated Developer",
    subtitle: "One engineer, full focus",
    desc: "A single senior engineer embedded in your team full-time. Works exclusively on your product — attends your standups, uses your tools, ships your features.",
    highlights: ["Full-time commitment", "Direct communication", "Your workflow, your tools"],
    color: "#38BDF8",
    best: "Ongoing product development",
  },
  {
    icon: "🧩",
    title: "Team Augmentation",
    subtitle: "Scale without the overhead",
    desc: "Add 2–8 senior engineers to your existing team within days, not months. Plug into your sprint cycles and scale up or down as your roadmap demands.",
    highlights: ["Flexible team sizing", "Immediate availability", "Sprint-aligned delivery"],
    color: "#07BEB8",
    best: "Growing engineering teams",
  },
  {
    icon: "🚀",
    title: "Project Squad",
    subtitle: "Full-stack team, fixed scope",
    desc: "A cross-functional squad — PM, designer, engineers, QA — assembled to deliver a specific product or feature set from discovery through launch.",
    highlights: ["PM + Design + Dev + QA", "Fixed-scope ownership", "Milestone-based delivery"],
    color: "#A78BFA",
    best: "New product launches",
  },
  {
    icon: "🧠",
    title: "Fractional CTO",
    subtitle: "Strategic technical leadership",
    desc: "A senior technical leader — 20–40hrs/week — driving architecture, hiring strategy, and engineering culture without the full-time executive cost.",
    highlights: ["Architecture decisions", "Hiring & team building", "Technology roadmap"],
    color: "#F4A623",
    best: "Startups & scale-ups",
  },
];

export default function OutsourcingOverview() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] z-0"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#38BDF8", textShadow: "0 0 10px rgba(56,189,248,0.4)", letterSpacing: "0.18em" }}>
            Engagement Models
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            How You{" "}
            <span style={{
              background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Engage With Us
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Choose the engagement model that fits where you are right now —
            and change it as your needs evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {models.map((model, i) => {
            const ref = useScrollReveal(i * 90);
            return (
              <div ref={ref} key={model.title}
                className="group relative rounded-2xl p-6 flex flex-col transition-all duration-400 hover:-translate-y-1.5"
                style={{ background: `${model.color}05`, border: `1px solid ${model.color}18` }}>

                <div className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${model.color}10`, border: `1px solid ${model.color}25` }}>
                  {model.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-1">{model.title}</h3>
                <span className="text-xs italic mb-3" style={{ color: model.color }}>{model.subtitle}</span>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{model.desc}</p>

                <div className="flex flex-col gap-1.5 mb-4">
                  {model.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: model.color }} />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4" style={{ borderTop: `1px solid ${model.color}18` }}>
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Best for</span>
                  <span className="block text-xs font-semibold mt-1" style={{ color: model.color }}>{model.best}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
