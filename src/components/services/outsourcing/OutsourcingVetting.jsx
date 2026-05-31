import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const stages = [
  {
    step: "Stage 1",
    title: "Technical Assessment",
    desc: "A 3-hour take-home challenge in the candidate's primary stack — not LeetCode puzzles, but a real-world problem representative of actual production work. Reviewed by two senior engineers.",
    pass: "Top 15% proceed",
    color: "#38BDF8",
  },
  {
    step: "Stage 2",
    title: "System Design Interview",
    desc: "A live 90-minute architecture session. Candidates are asked to design systems they'll likely encounter with clients — scalability, trade-offs, observability, and failure modes.",
    pass: "Top 8% proceed",
    color: "#07BEB8",
  },
  {
    step: "Stage 3",
    title: "Culture & Communication Screen",
    desc: "Technical skill alone isn't enough. We assess async communication clarity, stakeholder management instincts, and ability to work autonomously within a client's team culture.",
    pass: "Top 5% proceed",
    color: "#A78BFA",
  },
  {
    step: "Stage 4",
    title: "Paid Trial Engagement",
    desc: "Every engineer completes a paid internal project before joining the roster. This validates real-world delivery velocity, code quality standards, and documentation habits.",
    pass: "Roster entry",
    color: "#F4A623",
  },
];

const standards = [
  "5+ years production experience minimum",
  "Documented open-source or production portfolio",
  "English proficiency at business level",
  "Background check & reference verification",
  "Security-aware coding practices confirmed",
  "Re-evaluated quarterly on active engagements",
];

export default function OutsourcingVetting() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgRight} alt="" aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-30 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#38BDF8", textShadow: "0 0 10px rgba(56,189,248,0.4)", letterSpacing: "0.18em" }}>
            How We Vet Talent
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Only the Top 5%{" "}
            <span style={{
              background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Make the Roster
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Our vetting process is rigorous by design. Every engineer you meet has already passed
            four stages of evaluation before you see their profile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left: vetting stages */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-4">
              {stages.map((stage, i) => {
                const ref = useScrollReveal(i * 90);
                return (
                  <div ref={ref} key={stage.step}
                    className="group flex gap-5 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-0.5"
                    style={{ background: `${stage.color}04`, border: `1px solid ${stage.color}18` }}>
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold"
                        style={{ background: `${stage.color}15`, border: `1px solid ${stage.color}35`, color: stage.color }}>
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: stage.color }}>{stage.step}</span>
                        <h3 className="text-base font-bold text-white">{stage.title}</h3>
                        <span className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full hidden sm:inline-block"
                          style={{ color: stage.color, background: `${stage.color}10`, border: `1px solid ${stage.color}20` }}>
                          {stage.pass}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{stage.desc}</p>
                      <span className="mt-2 text-[10px] font-bold px-2.5 py-1 rounded-full sm:hidden inline-block"
                        style={{ color: stage.color, background: `${stage.color}10`, border: `1px solid ${stage.color}20` }}>
                        {stage.pass}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: standards */}
          <div className="w-full lg:w-[40%]">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl p-7"
                style={{ background: "rgba(56,189,248,0.03)", border: "1px solid rgba(56,189,248,0.16)" }}>
                <h3 className="text-lg font-bold text-white mb-6">Baseline Standards</h3>
                <div className="flex flex-col gap-4">
                  {standards.map((s, i) => {
                    const ref = useScrollReveal(i * 60 + 200);
                    return (
                      <div ref={ref} key={s} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.3)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#38BDF8" }} />
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{s}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-xl p-4"
                  style={{ background: "rgba(7,190,184,0.06)", border: "1px solid rgba(7,190,184,0.18)" }}>
                  <span className="block text-2xl font-extrabold mb-1" style={{ color: "#07BEB8" }}>95%</span>
                  <p className="text-xs leading-relaxed" style={{ color: "#8ca0b0" }}>
                    of applicants are rejected. The 5% who pass are the only engineers you'll ever meet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
