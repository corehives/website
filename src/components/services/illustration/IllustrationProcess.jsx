import useScrollReveal from "../../../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Brief & Discovery",
    subtitle: "Goals, Audience & Creative Direction",
    desc: "We start with a deep-dive brief — understanding your brand, audience, goals, and the emotional impact you want the content to create. We define tone, style references, and success metrics before anything visual begins.",
    duration: "Day 1–3",
    deliverable: "Creative Brief Doc",
  },
  {
    number: "02",
    title: "Script & Concept",
    subtitle: "Narrative Structure & Storyboarding",
    desc: "For video content, our scriptwriters craft a tight narrative arc — every word earns its place. Simultaneously, our art directors sketch the visual storyboard: scene by scene, frame by frame.",
    duration: "Day 3–7",
    deliverable: "Script + Storyboard",
  },
  {
    number: "03",
    title: "Illustration & Art",
    subtitle: "Character Design & Visual Assets",
    desc: "With a locked storyboard, our illustrators build every visual asset — characters, environments, UI mockups, iconography. Style is established here and signed off before a single frame is animated.",
    duration: "Week 2–3",
    deliverable: "Static Style Frames",
  },
  {
    number: "04",
    title: "Animation & Motion",
    subtitle: "Bringing Assets to Life",
    desc: "The animation phase transforms static art into living, breathing motion. Timing, easing, and rhythm are treated as crafts — we never use default transitions. Everything is frame-accurate and production-ready.",
    duration: "Week 3–5",
    deliverable: "Animated Draft v1",
  },
  {
    number: "05",
    title: "Review & Deliver",
    subtitle: "Feedback, Polish & Multi-Format Export",
    desc: "Two structured revision rounds ensure the final output meets every requirement. We export in every format you need — MP4, WebM, Lottie JSON, GIF, and source files — plus a usage guide.",
    duration: "Week 5–6",
    deliverable: "Final Files + Source",
  },
];

function Step({ step, index, total }) {
  const ref = useScrollReveal(index * 120);
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex gap-5 sm:gap-7">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{
            background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(167,139,250,0.08))",
            border: "1px solid rgba(167,139,250,0.45)",
            boxShadow: "0 0 20px rgba(167,139,250,0.15)",
          }}>
          <span className="text-xs font-extrabold" style={{ color: "#A78BFA" }}>{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{
            background: "linear-gradient(to bottom, rgba(167,139,250,0.35), rgba(167,139,250,0.05))",
            minHeight: "32px",
          }} />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-2"}`}>
        <div className="group rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5"
          style={{ background: "rgba(167,139,250,0.03)", border: "1px solid rgba(167,139,250,0.12)" }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
            <span className="text-[10px] tracking-widest uppercase text-white/25">—</span>
            <span className="text-sm text-white/45 italic">{step.subtitle}</span>
            <span className="ml-auto text-[10px] font-bold tracking-wide px-3 py-1 rounded-full hidden sm:inline-block"
              style={{ color: "#A78BFA", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}>
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
              style={{ color: "#A78BFA", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}>
              {step.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IllustrationProcess() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section id="illustration-process" className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 w-72 h-[600px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left sticky */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#A78BFA", textShadow: "0 0 10px rgba(167,139,250,0.4)", letterSpacing: "0.18em" }}>
              Our Creative Process
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              From{" "}
              <span style={{
                background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Brief to Screen</span>{" "}
              in 6 Weeks
            </h2>
            <p ref={paraRef} className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: "#8ca0b0" }}>
              A disciplined creative process that delivers high-quality motion content
              without endless revision cycles or missed deadlines.
            </p>
            <div className="rounded-2xl p-5"
              style={{ background: "rgba(167,139,250,0.04)", border: "1px solid rgba(167,139,250,0.16)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Typical Timeline</span>
                <span className="text-sm font-extrabold" style={{ color: "#A78BFA" }}>4–6 Weeks</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mb-3"
                style={{ background: "rgba(167,139,250,0.10)" }}>
                <div className="h-full rounded-full" style={{
                  width: "80%",
                  background: "linear-gradient(to right, #A78BFA, #07BEB8)",
                }} />
              </div>
              <p className="text-xs" style={{ color: "#8ca0b0" }}>
                2 structured revision rounds included in every project
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
