import {
  Zap,
  ShieldCheck,
  Layers,
  HeadphonesIcon,
  Users,
  TrendingUp,
} from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import BgLeft from "../../assets/bg-left-content.webp";
import BgRight from "../../assets/bg-right-content.webp";

const features = [
  {
    icon: Zap,
    title: "Efficient Development",
    tag: "Faster Delivery",
    desc: "Our development process helps reduce project timelines while maintaining code quality, performance, and long-term reliability.",
    metric: "60%",
    metricLabel: "Faster Time to Market",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    tag: "Expertise",
    desc: "Our engineers have hands-on experience building web, mobile, AI, blockchain, and enterprise applications for businesses across different industries.",
    metric: "7+",
    metricLabel: "Years Avg. Experience",
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    tag: "One Partner",
    desc: "From planning and design to development, deployment, and support, we handle every stage of the project with one dedicated team.",
    metric: "10+",
    metricLabel: "Technology Practices",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    tag: "Built for Growth",
    desc: "We build software that is easy to maintain, expand, and support as your business grows and your requirements change.",
    metric: "10×",
    metricLabel: "Scale Readiness",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Support",
    tag: "Ongoing Assistance",
    desc: "Our team continues to provide maintenance, updates, and technical support after launch to keep your applications running reliably.",
    metric: "24/7",
    metricLabel: "Support Coverage",
  },
  {
    icon: Users,
    title: "Clear Communication",
    tag: "Collaboration",
    desc: "We keep clients informed with regular updates, honest discussions, and direct communication throughout the entire project.",
    metric: "100%",
    metricLabel: "Project Transparency",
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
          boxShadow:
            "0 0 32px rgba(7,190,184,0.14), inset 0 0 24px rgba(7,190,184,0.04)",
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
            <feature.icon
              className="h-4.5 w-4.5 text-[#07BEB8]"
              strokeWidth={1.5}
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-[#07BEB8] transition-colors duration-300">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: "#8ca0b0" }}
        >
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
    <section className="section-auto-render relative overflow-hidden py-10 sm:py-15">
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
            Why Choose Us
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Why <span className="precision-gradient">CoreHives</span>?
          </h2>

          <p
            ref={paraRef}
            className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            Choosing the right technology partner is an important decision. At
            CoreHives, we combine technical expertise, clear communication, and a
            practical approach to deliver solutions that support your business goals.
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
