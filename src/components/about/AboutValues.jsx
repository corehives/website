import { Lightbulb, Gem, Handshake, MessageSquare } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We embrace emerging technology before it becomes mainstream. Our teams invest in R&D so your product ships with capabilities your competitors haven't discovered yet.",
  },
  {
    icon: Gem,
    title: "Quality Obsession",
    desc: "Every line of code, every pixel, every micro-interaction matters. We hold ourselves to a standard where 'good enough' is never enough — only exceptional ships.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    desc: "We don't deliver projects and disappear. We build long-term relationships where your goals become our goals and your wins become our proudest case studies.",
  },
  {
    icon: MessageSquare,
    title: "Radical Transparency",
    desc: "Clear communication, honest timelines, no surprises. You always know where your project stands. We believe trust is earned through consistent honesty — not polished pitches.",
  },
];

function GlowValueCard({ item, delay }) {
  const ref = useScrollReveal(delay);

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
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: "rgba(7,190,184,0.12)",
            border: "1px solid rgba(7,190,184,0.25)",
          }}
        >
          <item.icon className="h-5 w-5 text-[#07BEB8]" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#07BEB8] transition-colors duration-300">
          {item.title}
        </h3>

        {/* Divider */}
        <div
          className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-12"
          style={{ background: "rgba(7,190,184,0.5)" }}
        />

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function AboutValues() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(120);
  const paraRef = useScrollReveal(220);

  return (
    <section className="section-auto-render relative overflow-hidden py-10 sm:py-15">
      {/* Center teal glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(7,190,184,0.06) 0%, transparent 70%)",
        }}
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
            What We Stand For
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Our Core{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Values
            </span>
          </h2>
          <p
            ref={paraRef}
            className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            These aren't words on a wall. They're the standards that every
            CoreHives team member is held to on every project, every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((item, i) => (
            <GlowValueCard key={item.title} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
