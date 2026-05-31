import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const stats = [
  { value: "72hrs", label: "average time from brief to first engineer embedded in your team", color: "#38BDF8" },
  { value: "94%",   label: "12-month retention rate across all active outsourced engagements",  color: "#07BEB8" },
  { value: "50+",   label: "senior engineers across 8 disciplines available on the roster",     color: "#A78BFA" },
  { value: "4.9★",  label: "average client satisfaction score across quarterly NPS surveys",    color: "#F4A623" },
];

const benefits = [
  { title: "No recruitment overhead",       desc: "Skip months of job posts, screening calls, and offer negotiations. Your engineer is working within days." },
  { title: "Senior-only talent pool",       desc: "Every engineer on our roster has 5+ years of production experience. No juniors, no trainees — ever." },
  { title: "Timezone-matched availability", desc: "Engineers are matched to your primary working hours — standups, Slack, and code reviews happen in real time." },
  { title: "Flexible commitment structure", desc: "Scale from 1 engineer to a full squad. Adjust team size with 2 weeks notice — no annual contracts required." },
  { title: "IP & NDA protection built-in",  desc: "All engagements include full IP assignment, strict NDAs, and data-handling compliance by default." },
  { title: "Dedicated account management",  desc: "A CoreHives account manager monitors performance, handles escalations, and conducts monthly reviews with you." },
];

export default function OutsourcingBenefits() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgLeft} alt="" aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-1/2 opacity-40 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: Stats */}
          <div className="w-full lg:w-[42%]">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#38BDF8", textShadow: "0 0 10px rgba(56,189,248,0.4)", letterSpacing: "0.18em" }}>
              Why It Works
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              The Numbers Behind{" "}
              <span style={{
                background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Every Engagement
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const ref = useScrollReveal(i * 80);
                return (
                  <div ref={ref} key={stat.value} className="rounded-2xl p-5"
                    style={{ background: `${stat.color}07`, border: `1px solid ${stat.color}22` }}>
                    <span className="block text-2xl sm:text-3xl font-extrabold mb-2 leading-none"
                      style={{ background: stat.color, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {stat.value}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="w-full lg:w-[58%]">
            <div className="rounded-2xl p-7 sm:p-8"
              style={{ background: "rgba(56,189,248,0.03)", border: "1px solid rgba(56,189,248,0.12)" }}>
              <h3 className="text-xl font-bold text-white mb-6">
                What CoreHives Outsourcing Gives Your Business
              </h3>
              <div className="flex flex-col gap-5">
                {benefits.map((item, i) => {
                  const ref = useScrollReveal(i * 70);
                  return (
                    <div ref={ref} key={item.title} className="flex gap-4 items-start group">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#38BDF8]"
                        style={{ color: "rgba(56,189,248,0.5)" }} strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
