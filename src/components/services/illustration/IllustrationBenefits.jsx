import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const stats = [
  { value: "1200%",  label: "more social shares — video vs. text + image combined",  color: "#A78BFA" },
  { value: "80%",    label: "increase in landing page conversions with explainer video", color: "#07BEB8" },
  { value: "88%",    label: "longer time on page when video content is present",       color: "#F472B6" },
  { value: "95%",    label: "message retention rate — video vs. 10% for text alone",   color: "#F4A623" },
];

const benefits = [
  { title: "Instant audience clarity",    desc: "Complex products explained in 60–90 seconds. Buyers understand your value faster, reducing sales cycles." },
  { title: "Higher organic reach",        desc: "Animated content gets 3× the algorithmic boost of static posts across every major social platform." },
  { title: "Brand memorability",          desc: "Consistent illustration styles create visual anchors — audiences recognise your brand before they read your name." },
  { title: "Developer-ready deliverables",desc: "All animations exported as Lottie JSON — lightweight, scalable, and drop-in ready for any web or mobile build." },
  { title: "Reusable asset libraries",    desc: "Illustration systems built as scalable component libraries — your team can create new assets in-house without a designer." },
  { title: "Proven conversion impact",    desc: "Product pages with animated demos consistently outperform static equivalents by 40–80% on conversion rate." },
];

export default function IllustrationBenefits() {
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
              style={{ color: "#A78BFA", textShadow: "0 0 10px rgba(167,139,250,0.4)", letterSpacing: "0.18em" }}>
              Why Animation Works
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              Motion Content{" "}
              <span style={{
                background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Outperforms
              </span>{" "}
              Static by Every Metric
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
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.22)" }}>
              Sources: Wyzowl, HubSpot, Cisco Visual Networking Index
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="w-full lg:w-[58%]">
            <div className="rounded-2xl p-7 sm:p-8"
              style={{ background: "rgba(167,139,250,0.03)", border: "1px solid rgba(167,139,250,0.12)" }}>
              <h3 className="text-xl font-bold text-white mb-6">
                What CoreHives Animation Delivers to Your Business
              </h3>
              <div className="flex flex-col gap-5">
                {benefits.map((item, i) => {
                  const ref = useScrollReveal(i * 70);
                  return (
                    <div ref={ref} key={item.title} className="flex gap-4 items-start group">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#A78BFA]"
                        style={{ color: "rgba(167,139,250,0.5)" }} strokeWidth={1.5} />
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
