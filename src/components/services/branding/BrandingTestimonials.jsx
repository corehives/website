import { Star } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "CoreHives didn't just give us a logo — they gave us a complete brand architecture that our entire company rallied behind. The strategy phase alone was worth the entire engagement. Six months later, investors are telling us our brand looks like a Series C company.",
    name: "James Thornton",
    role: "Co-Founder & CEO",
    company: "Nexus Capital",
    rating: 5,
    initials: "JT",
    color: "#07BEB8",
  },
  {
    quote:
      "We had 12 different visual identities across our regional markets. CoreHives unified them into one cohesive brand system while still giving each region the flexibility they needed. The savings in design resources alone paid for the project in under 4 months.",
    name: "Amara Osei",
    role: "Head of Brand & Marketing",
    company: "PulseHealth Group",
    rating: 5,
    initials: "AO",
    color: "#34D399",
  },
  {
    quote:
      "The new brand identity completely changed how our customers perceive us. Our average order value went up 28% in the quarter after the rebrand launched — partly pricing psychology, but mostly because people now trust us enough to buy premium.",
    name: "Zara Mitchell",
    role: "Brand Director",
    company: "AuraStore",
    rating: 5,
    initials: "ZM",
    color: "#A78BFA",
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#FFD139] fill-[#FFD139]" : "text-white/10 fill-white/10"}
        />
      ))}
    </div>
  );
}

function TestiCard({ t, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl p-7 sm:p-8 transition-all duration-400 hover:-translate-y-1"
      style={{
        background: "linear-gradient(145deg, rgba(7,190,184,0.06), rgba(7,190,184,0.02))",
        border: "1px solid rgba(7,190,184,0.2)",
        boxShadow: "0 0 30px rgba(7,190,184,0.06)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${t.color}60, transparent)`,
        }}
      />

      <StarRow count={t.rating} />

      {/* Quote */}
      <p
        className="text-sm sm:text-base leading-relaxed text-white/80 mb-6 flex-1"
        style={{ fontStyle: "italic" }}
      >
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
          style={{
            background: `${t.color}20`,
            border: `2px solid ${t.color}40`,
            color: t.color,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs" style={{ color: t.color }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrandingTestimonials() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(7,190,184,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            ref={labelRef}
            className="text-xs uppercase font-medium mb-3"
            style={{
              color: "#07BEB8",
              textShadow: "0 0 10px rgba(7,190,184,0.5)",
              letterSpacing: "0.18em",
            }}
          >
            Client Voices
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
          >
            What Brands Say{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              After Working With Us
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <TestiCard key={t.name} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
