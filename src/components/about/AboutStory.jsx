import { useRef, useEffect } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import BgLeft from "../../assets/bg-left-content.webp";

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    desc: "CoreHives was founded with a simple mission: make enterprise-grade technology accessible to growth-stage businesses. We started as a tight-knit team of three developers with a shared belief — great software shouldn't be a privilege.",
  },
  {
    year: "2020",
    title: "First 25 Clients",
    desc: "Despite a global pandemic, we doubled down. Our low-code approach helped clients launch faster and spend less. By year-end we had delivered 25 projects across 8 countries and built our first dedicated AI team.",
  },
  {
    year: "2022",
    title: "Scaling Up",
    desc: "We expanded to a 30+ person team, added blockchain and staff outsourcing practices, and received our first Clutch Top Developer recognition. Revenue grew 3× as word-of-mouth referrals became our primary channel.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    desc: "150+ projects delivered across 20+ countries. Recognized on Clutch, GoodFirms, G2, Google, and Trustpilot. We now serve clients from Fortune 500 enterprises to fast-moving startups — all with the same obsession over quality.",
  },
];

function TimelineItem({ item, index }) {
  const itemRef = useScrollReveal(index * 120);

  return (
    <div
      ref={itemRef}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
          style={{
            background: "linear-gradient(135deg, #07BEB8, #058682)",
            boxShadow: "0 0 20px rgba(7,190,184,0.4)",
            color: "#001925",
          }}
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>
        {index < milestones.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: "linear-gradient(to bottom, rgba(7,190,184,0.4), rgba(7,190,184,0.05))",
              minHeight: "40px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full"
          style={{
            color: "#07BEB8",
            background: "rgba(7,190,184,0.1)",
            border: "1px solid rgba(7,190,184,0.25)",
          }}
        >
          {item.year}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function AboutStory() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);
  const paraRef = useScrollReveal(200);

  return (
    <section
      className="section-auto-render relative overflow-hidden py-20 sm:py-28"
    >
      {/* Bg accent */}
      <img
        src={BgLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-1/2 opacity-60 z-0"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 w-72 h-72 rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: Heading + intro ── */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-28">
            <p
              ref={labelRef}
              className="text-xs uppercase font-medium mb-3"
              style={{
                color: "#07BEB8",
                textShadow: "0 0 10px rgba(7,190,184,0.5)",
                letterSpacing: "0.18em",
              }}
            >
              Our Journey
            </p>
            <h2
              ref={headRef}
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-5"
            >
              The Story{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Behind
              </span>{" "}
              CoreHives
            </h2>
            <p
              ref={paraRef}
              className="text-sm sm:text-base leading-relaxed mb-8"
              style={{ color: "#8ca0b0" }}
            >
              We didn't start as the biggest agency — we started as the most
              committed one. Every client, every deadline, every late-night sprint
              shaped what CoreHives is today: a studio that treats your product as
              its own.
            </p>

            {/* Decorative stat card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(7,190,184,0.05)",
                border: "1px solid rgba(7,190,184,0.2)",
                boxShadow: "0 0 30px rgba(7,190,184,0.06)",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Years in Industry" },
                  { value: "20+", label: "Countries Reached" },
                  { value: "150+", label: "Projects Shipped" },
                  { value: "50+", label: "Team Members" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <span
                      className="block text-2xl font-extrabold"
                      style={{
                        background: "#07BEB8",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </span>
                    <span className="text-xs" style={{ color: "#8ca0b0" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Timeline ── */}
          <div className="w-full lg:w-[62%] pt-2">
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
