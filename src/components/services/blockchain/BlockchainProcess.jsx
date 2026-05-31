import useScrollReveal from "../../../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Protocol Discovery",
    subtitle: "Architecture & Chain Selection",
    desc: "We start by deeply understanding the protocol you're building — economics, governance, user flows, and the technical constraints of your target chain(s). Chain selection is decided with data, not trend-following.",
    duration: "Week 1",
    deliverable: "Architecture Blueprint",
  },
  {
    number: "02",
    title: "Smart Contract Design",
    subtitle: "Logic, Interfaces & Data Structures",
    desc: "Contract interfaces, storage layouts, event schemas, and upgrade patterns are all defined and reviewed before a line of implementation is written. Architecture review with two senior engineers included.",
    duration: "Week 1–2",
    deliverable: "Contract Spec Document",
  },
  {
    number: "03",
    title: "Development & Testing",
    subtitle: "Implementation + 100% Test Coverage",
    desc: "Smart contracts are written, unit tested, and fuzz-tested with Foundry or Hardhat. We maintain 100% branch coverage — not as a metric target, but because every untested branch is a potential exploit.",
    duration: "Week 2–5",
    deliverable: "Auditable Codebase",
  },
  {
    number: "04",
    title: "Security Audit",
    subtitle: "Internal + Optional Third-Party",
    desc: "Every contract undergoes our internal security review before deployment — manual analysis, Slither/MythX static analysis, and economic attack modelling. Third-party audit integration available for protocols above $5M TVL.",
    duration: "Week 5–6",
    deliverable: "Audit Report",
  },
  {
    number: "05",
    title: "Deploy & Launch Support",
    subtitle: "Testnet → Mainnet → Post-Launch",
    desc: "Staged deployments: testnet with full QA, mainnet with multi-sig governance setup, monitoring infrastructure, and 30-day post-launch incident response. You don't ship alone.",
    duration: "Week 6–7",
    deliverable: "Deployed Contracts + Monitoring",
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
            background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.07))",
            border: "1px solid rgba(52,211,153,0.45)",
            boxShadow: "0 0 20px rgba(52,211,153,0.15)",
          }}>
          <span className="text-xs font-extrabold" style={{ color: "#34D399" }}>{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom, rgba(52,211,153,0.35), rgba(52,211,153,0.04))", minHeight: "32px" }} />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-2"}`}>
        <div className="group rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
          style={{ background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.12)" }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
            <span className="text-[10px] tracking-widest uppercase text-white/25">—</span>
            <span className="text-sm text-white/45 italic">{step.subtitle}</span>
            <span className="ml-auto text-[10px] font-bold tracking-wide px-3 py-1 rounded-full hidden sm:inline-block"
              style={{ color: "#34D399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
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
              style={{ color: "#34D399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
              {step.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlockchainProcess() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section id="blockchain-process" className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 w-72 h-[600px] z-0"
        style={{ background: "radial-gradient(ellipse at left, rgba(52,211,153,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#34D399", textShadow: "0 0 10px rgba(52,211,153,0.4)", letterSpacing: "0.18em" }}>
              Development Process
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              From{" "}
              <span style={{
                background: "linear-gradient(135deg, #34D399, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Concept to Mainnet
              </span>{" "}
              in 7 Weeks
            </h2>
            <p ref={paraRef} className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: "#8ca0b0" }}>
              A security-first development process with no shortcuts and no compromises
              — because on-chain bugs aren't patches, they're exploits.
            </p>
            <div className="rounded-2xl p-5"
              style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.16)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Security Audit</span>
                <span className="text-sm font-extrabold" style={{ color: "#34D399" }}>Included</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(52,211,153,0.10)" }}>
                <div className="h-full rounded-full" style={{
                  width: "100%",
                  background: "linear-gradient(to right, #34D399, #07BEB8)",
                }} />
              </div>
              <p className="text-xs" style={{ color: "#8ca0b0" }}>
                100% test coverage + internal audit on every engagement
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
