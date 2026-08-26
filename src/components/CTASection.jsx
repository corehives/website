import useScrollReveal from "../hooks/useScrollReveal";
import CTAButton from "./shared/CTAButton";

export default function CTASection() {
  const containerReveal = useScrollReveal(0);

  return (
    <section 
      ref={containerReveal}
      className="section-auto-render w-full border-y border-[#07BEB8]/15 bg-[#000405] text-white py-16 md:py-20 overflow-hidden relative"
    >
      {/* ── Subtle Background Mesh Glow ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] z-0 opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-[#031111] via-[#051e1e] to-[#031111]"
          style={{
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Text Area */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
              Got a Question? <span className="precision-gradient">Book a Free Consultation</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl">
              Connect with our technology experts to discuss your requirements, explore options, and receive a tailormade roadmap for your business.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <CTAButton to="/contact">
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
