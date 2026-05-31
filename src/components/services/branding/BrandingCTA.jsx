import { ArrowRight, Calendar, Palette } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const trustItems = [
  "Free brand discovery call",
  "No creative brief required to start",
  "Fixed-scope, fixed-timeline engagements",
  "Full IP and asset ownership on delivery",
];

export default function BrandingCTA() {
  const headRef = useScrollReveal(60);
  const paraRef = useScrollReveal(160);
  const ctaRef = useScrollReveal(260);
  const trustRef = useScrollReveal(340);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      {/* Layered glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(7,190,184,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(244,167,35,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative brand elements */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-10"
        style={{ border: "1px solid #07BEB8", animation: "rotateSlow 20s linear infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-8"
        style={{ border: "1px solid #F4A623", animation: "rotateSlow 15s linear reverse infinite" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(7,190,184,0.1)",
            border: "1px solid rgba(7,190,184,0.3)",
          }}
        >
          <Palette className="h-6 w-6 text-[#07BEB8]" strokeWidth={1.5} />
        </div>

        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium tracking-widest text-white uppercase">
            Ready to Build Your Brand?
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        {/* Headline */}
        <h2
          ref={headRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
        >
          Your Brand Deserves to{" "}
          <span
            style={{
              background: "#07BEB8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stand Out
          </span>
          , Not Blend In
        </h2>

        {/* Sub */}
        <p
          ref={paraRef}
          className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}
        >
          Whether you're launching a new business or repositioning an existing one,
          our brand team is ready to build the visual identity system your business
          needs to grow with confidence.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
          >
            Start Your Brand Project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/25"
          >
            <Calendar className="h-4 w-4 text-[#07BEB8]" />
            Book a Free Discovery Call
          </a>
        </div>

        {/* Trust checklist */}
        <div
          ref={trustRef}
          className="flex flex-wrap justify-center gap-4"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-xs"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <span className="w-1 h-1 rounded-full bg-[#07BEB8] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
