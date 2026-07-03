import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import CTAButton from "../shared/CTAButton";

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
          Let's Build Something Great
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
      </div>

      {/* Headline */}
      <h2
        ref={headRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
      >
        Let's Talk About{" "}
        <span className="precision-gradient">Your Project</span>
      </h2>

      {/* Description */}
      <p
        ref={paraRef}
        className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed mb-8"
        style={{ color: "#8ca0b0" }}
      >
        Whether you're building a new product, improving an existing platform,
        or expanding your team, we're here to help. Tell us about your idea, and
        we'll work with you to find the right solution.
      </p>

      {/* CTA */}
      <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
        <CTAButton href="/contact">Start Your Project</CTAButton>
      </div>

      {/* Trust note */}
      <p className="mt-8 text-xs" style={{ color: "#8ca0b0" }}>
        Web Development • Mobile Apps • AI Solutions • Blockchain • UI/UX Design
      </p>
    </div>
  </section>
);
}
