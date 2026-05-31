import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const stats = [
  { value: "312%",  label: "average organic traffic growth across all active SEO clients in first year",  color: "#F472B6" },
  { value: "7.8×",  label: "average return on ad spend achieved across paid media engagements",            color: "#A78BFA" },
  { value: "–58%",  label: "average reduction in cost per acquisition through AI bid optimisation",        color: "#07BEB8" },
  { value: "4.2×",  label: "average conversion rate lift from AI-personalised landing experiences",        color: "#F4A623" },
];

const benefits = [
  { title: "Compounding organic authority",      desc: "AI-driven content systems build topical authority that compounds month over month — not a sprint, a machine." },
  { title: "Ads that get smarter over time",     desc: "Every impression feeds the model. Campaigns that run 90 days outperform campaigns that start from scratch by 3–4×." },
  { title: "Zero-waste budget allocation",       desc: "Real-time AI bid management eliminates wasted spend on underperforming audience segments and keywords." },
  { title: "Single-source-of-truth reporting",   desc: "Custom attribution models and unified dashboards give your team clarity on what's actually driving revenue." },
  { title: "No channel silos",                  desc: "One team manages all channels with one strategy — eliminating the coordination overhead of fragmented agency relationships." },
  { title: "Predictive, not reactive",          desc: "ML models forecast performance before issues surface — giving your team time to act, not react." },
];

export default function AIMarketBenefits() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgLeft} alt="" aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-1/2 opacity-40 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="w-full lg:w-[42%]">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#F472B6", textShadow: "0 0 10px rgba(244,114,182,0.4)", letterSpacing: "0.18em" }}>
              The Results
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              Numbers That{" "}
              <span style={{
                background: "linear-gradient(135deg, #F472B6, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Speak for Themselves
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

          <div className="w-full lg:w-[58%]">
            <div className="rounded-2xl p-7 sm:p-8"
              style={{ background: "rgba(244,114,182,0.03)", border: "1px solid rgba(244,114,182,0.12)" }}>
              <h3 className="text-xl font-bold text-white mb-6">
                Why AI-Driven Marketing Outperforms Traditional Agencies
              </h3>
              <div className="flex flex-col gap-5">
                {benefits.map((item, i) => {
                  const ref = useScrollReveal(i * 70);
                  return (
                    <div ref={ref} key={item.title} className="flex gap-4 items-start group">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#F472B6]"
                        style={{ color: "rgba(244,114,182,0.5)" }} strokeWidth={1.5} />
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
