import { Zap, ShieldCheck, Layers, HeadphonesIcon, Users, TrendingUp } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import BgLeft from "../../assets/bg-left-content.webp";
import BgRight from "../../assets/bg-right-content.webp";

const features = [
  {
    icon: Zap,
    title: "Low-Code Speed Advantage",
    tag: "Faster Delivery",
    desc: "Our proprietary low-code approach cuts development timelines by up to 60%. What takes other agencies months, we ship in weeks — without compromising architecture quality or scalability.",
    metric: "60%",
    metricLabel: "Faster Time to Market",
  },
  {
    icon: ShieldCheck,
    title: "Senior-Only Engineering",
    tag: "Expert Execution",
    desc: "No juniors. No learning on your dime. Every CoreHives engineer brings a minimum of 5 years of production-grade experience. Your project is always in expert hands.",
    metric: "5+",
    metricLabel: "Years Avg. Experience",
  },
  {
    icon: Layers,
    title: "Full-Spectrum Capability",
    tag: "One Partner",
    desc: "Design, frontend, backend, DevOps, AI, mobile, blockchain — under one roof. No coordination nightmares across agencies. One team, one vision, one point of accountability.",
    metric: "8+",
    metricLabel: "Technology Practices",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented Architecture",
    tag: "Built to Scale",
    desc: "We don't just build for today. Every solution is architected to support 10× growth. Clean code, CI/CD pipelines, cloud-native infrastructure — built for where you're going.",
    metric: "10×",
    metricLabel: "Scale Readiness",
  },
  {
    icon: HeadphonesIcon,
    title: "Always-On Support",
    tag: "Continuous Care",
    desc: "Production issues don't respect business hours. Our support team monitors critical systems 24/7 and responds with urgency. We're not just vendors — we're your digital safety net.",
    metric: "24/7",
    metricLabel: "Support Coverage",
  },
  {
    icon: Users,
    title: "Transparent Collaboration",
    tag: "Real Partnership",
    desc: "Weekly syncs, live project dashboards, Slack integration, and proactive updates. You'll never wonder where your project stands. We treat your business like our own.",
    metric: "100%",
    metricLabel: "Visibility Guarantee",
  },
];

function FeatureCard({ feature, index }) {
  const ref = useScrollReveal(index * 80);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(7,190,184,0.14)",
      }}
    >
      {/* Hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          boxShadow: "0 0 32px rgba(7,190,184,0.14), inset 0 0 24px rgba(7,190,184,0.04)",
          border: "1px solid rgba(7,190,184,0.3)",
          borderRadius: "16px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Tag */}
        <span
          className="self-start text-[10px] font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{
            color: "#07BEB8",
            background: "rgba(7,190,184,0.1)",
            border: "1px solid rgba(7,190,184,0.2)",
          }}
        >
          {feature.tag}
        </span>

        {/* Icon + Title row */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{
              background: "rgba(7,190,184,0.1)",
              border: "1px solid rgba(7,190,184,0.2)",
            }}
          >
            <feature.icon className="h-4.5 w-4.5 text-[#07BEB8]" strokeWidth={1.5} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-[#07BEB8] transition-colors duration-300">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#8ca0b0" }}>
          {feature.desc}
        </p>

        {/* Metric pill */}
        <div
          className="flex items-center gap-3 mt-auto pt-5"
          style={{ borderTop: "1px solid rgba(7,190,184,0.12)" }}
        >
          <span
            className="text-2xl font-extrabold"
            style={{
              background: "#07BEB8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {feature.metric}
          </span>
          <span className="text-xs leading-tight" style={{ color: "#8ca0b0" }}>
            {feature.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AboutWhyUs() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(120);
  const paraRef = useScrollReveal(220);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-1/2 opacity-50 z-0"
        loading="lazy"
      />
      <img
        src={BgRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-1/2 opacity-50 z-0"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            ref={labelRef}
            className="text-xs uppercase font-medium mb-3"
            style={{
              color: "#07BEB8",
              textShadow: "0 0 10px rgba(7,190,184,0.5)",
              letterSpacing: "0.18em",
            }}
          >
            Our Difference
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Why{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CoreHives
            </span>
            ?
          </h2>
          <p
            ref={paraRef}
            className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            There are hundreds of digital agencies. Here's what makes CoreHives
            a genuinely different choice for businesses that can't afford to
            compromise.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
