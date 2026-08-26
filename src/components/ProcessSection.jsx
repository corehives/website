import useScrollReveal from "../hooks/useScrollReveal";
import DiscoverImg from "../assets/process-discover.jpg";
import DesignImg from "../assets/process-design.jpg";
import DevelopImg from "../assets/process-develop.jpg";
import LaunchImg from "../assets/process-launch.jpg";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We dive deep into your requirements, target audience, and business objectives to establish a clear, data-driven project roadmap.",
    image: DiscoverImg,
  },
  {
    number: "02",
    title: "Design",
    desc: "Our creative team builds intuitive wireframes, premium visual design systems, and clickable prototypes tailored to engage users.",
    image: DesignImg,
  },
  {
    number: "03",
    title: "Develop",
    desc: "We write clean, modular, and optimized code, turning designs into fast, secure, and feature-rich digital products.",
    image: DevelopImg,
  },
  {
    number: "04",
    title: "Launch",
    desc: "Following comprehensive QA testing and security audits, we deploy your solution and offer ongoing launch support.",
    image: LaunchImg,
  },
];

export default function ProcessSection() {
  const headerReveal = useScrollReveal(0);
  const subtitleReveal = useScrollReveal(100);

  return (
    <section className="section-auto-render relative py-20 md:py-24 lg:py-28 overflow-hidden bg-[#000405] text-white">
      {/* ── Background Glow ── */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 w-96 h-[500px] z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 w-96 h-[500px] z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            ref={subtitleReveal}
            className="text-xs uppercase text-[#07BEB8] mb-3 font-semibold tracking-widest"
            style={{ textShadow: "0 0 10px rgba(7,190,184,0.4)" }}
          >
            How We Work
          </p>
          <h2
            ref={headerReveal}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            Our <span className="precision-gradient">Step-by-Step</span> Journey
          </h2>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const cardReveal = useScrollReveal(index * 150);
            return (
              <div
                ref={cardReveal}
                key={step.number}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#030d0d]/40 transition-all duration-350 hover:border-[#07BEB8]/30 hover:-translate-y-1.5"
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Visual Cover image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Step Overlay Number */}
                  <div className="absolute top-4 left-4 flex items-center justify-center w-9 h-9 rounded-full bg-[#000405]/85 border border-[#07BEB8]/30 backdrop-blur-md">
                    <span className="text-xs font-black text-[#07BEB8]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#07BEB8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
