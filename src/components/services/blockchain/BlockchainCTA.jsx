import { ArrowRight, Calendar } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import CTAButton from "../../shared/CTAButton";

const trustItems = [
  "Internal security audit included",
  "100% test coverage standard",
  "Multi-chain deployment support",
  "30-day post-launch support",
];

export default function BlockchainCTA() {
  const headRef  = useScrollReveal(60);
  const paraRef  = useScrollReveal(160);
  const ctaRef   = useScrollReveal(260);
  const trustRef = useScrollReveal(340);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(52,211,153,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(7,190,184,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#34D399" }} />
          <span className="text-xs font-medium tracking-widest text-white uppercase">Start Building On-Chain</span>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#34D399" }} />
        </div>

        <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Ship Your{" "}
          <span style={{
            background: "linear-gradient(135deg, #34D399, #07BEB8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Protocol to Mainnet?
          </span>
        </h2>

        <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}>
          Tell us what you're building — chain, protocol type, and timeline.
          We'll come back with a technical architecture proposal and engagement structure within 48 hours.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <CTAButton href="/contact">
            Start Your Blockchain Project
          </CTAButton>
          <CTAButton href="/contact">
            Book a Technical Discovery Call
          </CTAButton>
        </div>

        <div ref={trustRef} className="flex flex-wrap justify-center gap-4">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#34D399" }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
