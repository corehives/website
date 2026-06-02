import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function AboutCTA() {
  const headRef = useScrollReveal(80);
  const paraRef = useScrollReveal(180);
  const ctaRef = useScrollReveal(280);

  return (
    <section className="section-auto-render relative overflow-hidden py-10 sm:py-15">
      {/* Glow blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(7,190,184,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium tracking-widest text-white uppercase">
            Start A Strategic Consultation Today
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        {/* Headline */}
        <h2
          ref={headRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
        >
          Let's Talk About{" "}
          <span
            style={{
              background: "#07BEB8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Project
          </span>
        </h2>

        {/* Sub */}
        <p
          ref={paraRef}
          className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: "#8ca0b0" }}
        >
          Share your goals with us and identify the areas where smarter systems can grow your business.
        </p>

        {/* Agency description */}
        <p
          className="mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}
        >
          This Design And Development Agency In USA Delivers Precision Engineering And Scalable Infrastructure For Modern Enterprises.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
          >
            Start a Project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/25"
          >
            <Calendar className="h-4 w-4 text-[#07BEB8]" />
            Book a Free Consultation
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-xs" style={{ color: "#8ca0b0" }}>
          Established Technical Teams Built To Handle Your Complex Digital Needs
        </p>
      </div>
    </section>
  );
}
