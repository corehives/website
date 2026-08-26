import useScrollReveal from "../hooks/useScrollReveal";
import { ShoppingCart, Activity, Building2, Coins, Truck } from "lucide-react";

const industries = [
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    desc: "Next-gen digital storefronts, shopping carts, and secure checkout systems designed to maximize conversion rates and scale performance.",
  },
  {
    name: "Healthcare",
    icon: Activity,
    desc: "HIPAA-compliant software, patient portals, telemedicine systems, and analytics panels built for clinics and healthcare providers.",
  },
  {
    name: "Real Estate",
    icon: Building2,
    desc: "Dynamic property listings, agent portals, virtual tours, and custom CRM software that streamline transaction workflows.",
  },
  {
    name: "FinTech",
    icon: Coins,
    desc: "Secure multi-currency wallets, payment gateway integrations, financial auditing, and budgeting dashboards built with top-tier encryption.",
  },
  {
    name: "Logistics",
    icon: Truck,
    desc: "Custom fleet management systems, supply chain dashboards, parcel tracking, and multi-depot warehouse optimization tools.",
  },
];

export default function IndustriesSection() {
  const headerReveal = useScrollReveal(0);
  const subtitleReveal = useScrollReveal(100);

  return (
    <section className="section-auto-render relative py-20 md:py-24 lg:py-28 overflow-hidden bg-[#000405] text-white">
      {/* ── Background Glow ── */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 w-96 h-[500px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.05) 0%, transparent 70%)",
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
            Where We Deliver
          </p>
          <h2
            ref={headerReveal}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            Industries We <span className="precision-gradient">Serve</span>
          </h2>
        </div>

        {/* ── Industries Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
          {industries.map((ind, index) => {
            const cardReveal = useScrollReveal(index * 100);
            const Icon = ind.icon;
            return (
              <div
                ref={cardReveal}
                key={ind.name}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-[#030d0d] to-[#010606] transition-all duration-350 hover:border-[#07BEB8]/30 hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Icon wrapper with teal background ring */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-350 group-hover:scale-105"
                  style={{
                    background: "rgba(7,190,184,0.08)",
                    border: "1px solid rgba(7,190,184,0.25)",
                    boxShadow: "inset 0 0 15px rgba(7,190,184,0.1)",
                  }}
                >
                  <Icon className="w-6 h-6 text-[#07BEB8] transition-transform duration-350" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#07BEB8] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs leading-relaxed text-white/60">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
