import { Rocket, Users, TrendingUp, Globe } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const milestones = [
  {
    year: "2019",
    icon: Rocket,
    title: "The Beginning",
    desc: "CoreHives was founded with a simple mission: make enterprise-grade technology accessible to growth-stage businesses. We started as a tight-knit team of three developers with a shared belief — great software shouldn't be a privilege.",
  },
  {
    year: "2020",
    icon: Users,
    title: "First 25 Clients",
    desc: "Despite a global pandemic, we doubled down. Our low-code approach helped clients launch faster and spend less. By year-end we had delivered 25 projects across 8 countries and built our first dedicated AI team.",
  },
  {
    year: "2022",
    icon: TrendingUp,
    title: "Scaling Up",
    desc: "We expanded to a 30+ person team, added blockchain and staff outsourcing practices, and received our first Clutch Top Developer recognition. Revenue grew 3× as word-of-mouth referrals became our primary channel.",
  },
  {
    year: "2024",
    icon: Globe,
    title: "Global Recognition",
    desc: "150+ projects delivered across 20+ countries. Recognized on Clutch, GoodFirms, G2, Google, and Trustpilot. We now serve clients from Fortune 500 enterprises to fast-moving startups — all with the same obsession over quality.",
  },
];

function MilestoneRow({ item, index }) {
  const ref = useScrollReveal(index * 120);
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  const iconEl = (
    <div className="relative group-hover:scale-105 transition-transform duration-500">
      {/* Soft outer glow */}
      <div
        className="absolute -inset-5 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at center, rgba(7,190,184,0.16) 0%, transparent 70%)" }}
      />
      {/* Icon card */}
      <div
        className="relative w-19 h-19 rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(7,190,184,0.16) 0%, rgba(7,190,184,0.04) 100%)",
          border: "1px solid rgba(7,190,184,0.28)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(135deg, rgba(7,190,184,0.24) 0%, rgba(7,190,184,0.08) 100%)" }}
        />
        <Icon className="relative w-7 h-7 text-[#07BEB8]" />
      </div>
      {/* Year tag */}
      <div className="mt-3 flex justify-center">
        <span
          className="text-[9px] font-mono tracking-[0.3em] px-2.5 py-1 rounded-full text-[#07BEB8]/55"
          style={{
            border: "1px solid rgba(7,190,184,0.2)",
            background: "rgba(7,190,184,0.06)",
          }}
        >
          {item.year}
        </span>
      </div>
    </div>
  );

  const textRight = (
    <div className="max-w-66.25 text-right ml-auto">
      <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#07BEB8] transition-colors duration-300">
        {item.title}
      </h3>
      <div
        className="h-px w-8 ml-auto mb-3 transition-all duration-500 group-hover:w-14"
        style={{ background: "linear-gradient(270deg, #07BEB8, transparent)" }}
      />
      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {item.desc}
      </p>
    </div>
  );

  const textLeft = (
    <div className="max-w-66.25">
      <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#07BEB8] transition-colors duration-300">
        {item.title}
      </h3>
      <div
        className="h-px w-8 mb-3 transition-all duration-500 group-hover:w-14"
        style={{ background: "linear-gradient(90deg, #07BEB8, transparent)" }}
      />
      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {item.desc}
      </p>
    </div>
  );

  return (
    <div
      ref={ref}
      className="group grid grid-cols-[1fr_100px_1fr] items-center py-5 relative"
    >
      {/* Giant watermark year */}
      <span
        className="absolute left-1/2 -translate-x-1/2 font-black text-white leading-none select-none pointer-events-none"
        style={{ fontSize: "9.5rem", opacity: 0.026, letterSpacing: "-0.04em" }}
      >
        {item.year}
      </span>

      {/* Left column */}
      <div className="flex items-center justify-end pr-10">
        {isLeft ? iconEl : textRight}
      </div>

      {/* Centre: glowing node on the spine */}
      <div className="relative flex items-center justify-center z-10">
        <div className="absolute w-14 h-14 rounded-full border border-[#07BEB8]/12 group-hover:border-[#07BEB8]/38 group-hover:scale-110 transition-all duration-700" />
        <div className="absolute w-8 h-8 rounded-full border border-[#07BEB8]/25 group-hover:border-[#07BEB8]/65 group-hover:scale-110 transition-all duration-500" />
        <div
          className="relative z-10 w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-[1.3]"
          style={{
            background: "radial-gradient(circle, #c4f8f6 0%, #07BEB8 65%)",
            boxShadow: "0 0 8px rgba(7,190,184,0.75), 0 0 22px rgba(7,190,184,0.38)",
          }}
        />
      </div>

      {/* Right column */}
      <div className="flex items-center justify-start pl-10">
        {isLeft ? textLeft : iconEl}
      </div>

      {/* Row hover radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse 55% 85% at 50% 50%, rgba(7,190,184,0.04) 0%, transparent 70%)" }}
      />
    </div>
  );
}

export default function AboutStory() {
  const badgeRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(200);

  return (
    <section className="section-auto-render relative py-10 sm:py-15 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">

      {/* Dot-grid atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(7,190,184,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(7,190,184,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-24 text-center">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#07BEB8]/25 bg-[#07BEB8]/[0.07] px-5 py-2 mb-6 backdrop-blur-sm"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]"
              style={{ boxShadow: "0 0 6px rgba(7,190,184,0.8)" }}
            />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8]">Our Journey</span>
          </div>

          <h2
            ref={headRef}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            Four milestones.{" "}
            <span className="text-[#07BEB8]">One unstoppable story.</span>
          </h2>

          <p
            ref={paraRef}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            From a three-person founding team to a global technology partner — every milestone shaped how we build, who we serve, and what we stand for.
          </p>
        </div>

        {/* ── Desktop: alternating spine timeline ── */}
        <div className="hidden md:block">
          <div className="relative">

            {/* Central glowing spine */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px"
              style={{
                background: "linear-gradient(180deg, transparent 0%, rgba(7,190,184,0.45) 10%, rgba(7,190,184,0.45) 90%, transparent 100%)",
              }}
            />

            {milestones.map((item, i) => (
              <MilestoneRow key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ── Mobile: glassmorphism card stack ── */}
        <div className="md:hidden flex flex-col gap-4">
          {milestones.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                className="relative overflow-hidden rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(7,190,184,0.08) 0%, rgba(7,190,184,0.02) 100%)",
                  border: "1px solid rgba(7,190,184,0.2)",
                }}
              >
                {/* Watermark year */}
                <span
                  className="absolute right-3 top-0 font-black text-white leading-none select-none pointer-events-none"
                  style={{ fontSize: "5.5rem", opacity: 0.042 }}
                >
                  {item.year}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(7,190,184,0.2), rgba(7,190,184,0.07))",
                        border: "1px solid rgba(7,190,184,0.3)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-[#07BEB8]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#07BEB8]/45 tracking-wider block">
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div
                    className="h-px w-8 mb-3"
                    style={{ background: "linear-gradient(90deg, #07BEB8, transparent)" }}
                  />
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
