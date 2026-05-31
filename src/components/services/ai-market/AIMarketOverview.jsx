import useScrollReveal from "../../../hooks/useScrollReveal";

const pillars = [
  {
    icon: "🔍",
    title: "SEO Intelligence",
    subtitle: "Organic growth at machine speed",
    desc: "AI content gap analysis, programmatic SEO, entity optimisation, and automated internal linking — systems that build topical authority faster than any manual editorial calendar.",
    highlights: ["Content gap AI analysis", "Entity & topical authority", "Programmatic SEO", "Core Web Vitals optimisation"],
    color: "#F472B6",
    best: "Long-term organic growth",
  },
  {
    icon: "🎯",
    title: "Paid Media AI",
    subtitle: "Every pound working harder",
    desc: "AI-driven bid management, audience segmentation, creative fatigue detection, and cross-channel attribution. We don't just run ads — we build self-optimising media machines.",
    highlights: ["Smart bidding automation", "Audience lookalike expansion", "Creative performance testing", "Multi-channel attribution"],
    color: "#A78BFA",
    best: "Scaling paid acquisition",
  },
  {
    icon: "🔄",
    title: "Conversion Optimisation",
    subtitle: "More revenue from existing traffic",
    desc: "AI-personalised landing pages, behavioural heatmap analysis, multivariate testing frameworks, and funnel leak detection. We find where revenue is escaping and seal it.",
    highlights: ["AI-personalised experiences", "Heatmap & session analysis", "Multivariate testing", "Funnel leak detection"],
    color: "#07BEB8",
    best: "Improving conversion rate",
  },
  {
    icon: "📊",
    title: "Predictive Analytics",
    subtitle: "Act before the data says so",
    desc: "Custom ML models that forecast customer LTV, churn probability, content performance, and campaign outcomes — giving your team actionable intelligence before your competitors react.",
    highlights: ["LTV & churn modelling", "Content performance forecasting", "Cohort attribution analysis", "Custom dashboards & alerts"],
    color: "#F4A623",
    best: "Data-driven decision making",
  },
];

export default function AIMarketOverview() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] z-0"
        style={{ background: "radial-gradient(ellipse, rgba(244,114,182,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#F472B6", textShadow: "0 0 10px rgba(244,114,182,0.4)", letterSpacing: "0.18em" }}>
            Service Pillars
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Four Systems,{" "}
            <span style={{
              background: "linear-gradient(135deg, #F472B6, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              One Growth Engine
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Each pillar compounds with the others. Organic traffic improves paid efficiency.
            Better conversion multiplies every channel's ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => {
            const ref = useScrollReveal(i * 90);
            return (
              <div ref={ref} key={pillar.title}
                className="group relative rounded-2xl p-6 flex flex-col transition-all duration-400 hover:-translate-y-1.5"
                style={{ background: `${pillar.color}05`, border: `1px solid ${pillar.color}18` }}>

                <div className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${pillar.color}10`, border: `1px solid ${pillar.color}25` }}>
                  {pillar.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <span className="text-xs italic mb-3" style={{ color: pillar.color }}>{pillar.subtitle}</span>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{pillar.desc}</p>

                <div className="flex flex-col gap-1.5 mb-4">
                  {pillar.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4" style={{ borderTop: `1px solid ${pillar.color}18` }}>
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Best for</span>
                  <span className="block text-xs font-semibold mt-1" style={{ color: pillar.color }}>{pillar.best}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
