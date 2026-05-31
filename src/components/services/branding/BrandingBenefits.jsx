import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const benefits = [
  {
    title: "Immediate visual credibility",
    desc: "A polished brand signals professionalism before a single word is read. First impressions take milliseconds — your brand shapes them.",
  },
  {
    title: "Consistent cross-channel presence",
    desc: "Your brand looks the same on your website, app, social, packaging, and pitch deck — creating a unified, trustworthy experience everywhere.",
  },
  {
    title: "Premium pricing justification",
    desc: "Strong brands command premium prices. Customers pay more for brands they trust and identify with — often 20–30% more.",
  },
  {
    title: "Faster market recognition",
    desc: "A distinctive visual identity and consistent messaging makes your brand memorable and findable — cutting customer acquisition costs over time.",
  },
  {
    title: "Team alignment & culture",
    desc: "A clear brand identity aligns your entire team around a shared vision — improving internal communication, culture, and external advocacy.",
  },
  {
    title: "Long-term asset building",
    desc: "Unlike ads that stop working when you stop spending, a strong brand compounds in value year over year as recognition and trust accumulate.",
  },
];

const stats = [
  {
    value: "73%",
    label: "of consumers prefer brands with consistent visual identity",
    color: "#07BEB8",
  },
  {
    value: "23%",
    label: "average revenue increase attributed to brand consistency",
    color: "#F4A623",
  },
  {
    value: "94%",
    label: "of first impressions are influenced by visual design quality",
    color: "#A78BFA",
  },
  {
    value: "3–5×",
    label: "greater brand recall when visual identity is cohesive",
    color: "#34D399",
  },
];

function BenefitItem({ item, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="flex gap-4 items-start group">
      <div className="flex-shrink-0 mt-0.5">
        <CheckCircle2
          className="h-5 w-5 transition-colors duration-300 group-hover:text-[#07BEB8]"
          style={{ color: "rgba(7,190,184,0.5)" }}
          strokeWidth={1.5}
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function StatCard({ stat, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 sm:p-6"
      style={{
        background: `${stat.color}08`,
        border: `1px solid ${stat.color}25`,
      }}
    >
      <span
        className="block text-2xl sm:text-3xl font-extrabold mb-2 leading-none"
        style={{
          background: stat.color,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.value}
      </span>
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>
        {stat.label}
      </p>
    </div>
  );
}

export default function BrandingBenefits() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(100);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-1/2 opacity-40 z-0"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: Stats ── */}
          <div className="w-full lg:w-[42%]">
            <p
              ref={labelRef}
              className="text-xs uppercase font-medium mb-3"
              style={{
                color: "#07BEB8",
                textShadow: "0 0 10px rgba(7,190,184,0.5)",
                letterSpacing: "0.18em",
              }}
            >
              The Business Case
            </p>
            <h2
              ref={headRef}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8"
            >
              Branding Is the{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Highest-ROI
              </span>{" "}
              Investment You Can Make
            </h2>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.value} stat={stat} delay={i * 100} />
              ))}
            </div>

            {/* Source note */}
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.25)" }}>
              Sources: Forbes, Lucidpress, Nielsen, Adobe Brand Equity Index
            </p>
          </div>

          {/* ── Right: Benefits list ── */}
          <div className="w-full lg:w-[58%]">
            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(7,190,184,0.03)",
                border: "1px solid rgba(7,190,184,0.13)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                What a CoreHives Brand Identity Delivers
              </h3>

              <div className="flex flex-col gap-5">
                {benefits.map((item, i) => (
                  <BenefitItem key={item.title} item={item} delay={i * 80} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
