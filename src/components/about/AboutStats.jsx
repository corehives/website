import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 150, suffix: "+", label: "Projects Delivered", desc: "Across web, mobile, AI & blockchain" },
  { end: 50,  suffix: "+", label: "Expert Team Members", desc: "Senior engineers, designers & strategists" },
  { end: 20,  suffix: "+", label: "Countries Served",   desc: "From North America to Southeast Asia" },
  { end: 98,  suffix: "%", label: "Client Satisfaction", desc: "Verified across Clutch, G2 & Google" },
];

function useCountUp(end, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, started]);

  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.end, 1600 + index * 100, started);

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 relative"
      style={{
        borderRight: index < stats.length - 1
          ? "1px solid rgba(7,190,184,0.12)"
          : "none",
      }}
    >
      {/* Number */}
      <div className="flex items-end gap-0.5 mb-2">
        <span
          className="font-extrabold leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            background: "linear-gradient(135deg, #07BEB8 30%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}
        </span>
        <span
          className="font-extrabold pb-1"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            background: "linear-gradient(135deg, #07BEB8 30%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-base sm:text-lg font-bold text-white mb-1.5">
        {stat.label}
      </p>

      {/* Desc */}
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
        {stat.desc}
      </p>
    </div>
  );
}

export default function AboutStats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-auto-render relative overflow-hidden py-6 sm:py-10">
      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(7,190,184,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(7,190,184,0.04)",
            border: "1px solid rgba(7,190,184,0.18)",
            boxShadow: "0 0 60px rgba(7,190,184,0.08)",
          }}
        >
          {/* Top shimmer line */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(7,190,184,0.6), transparent)",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} started={started} index={i} />
            ))}
          </div>

          {/* Bottom shimmer line */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(7,190,184,0.3), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
