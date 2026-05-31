import { ArrowRight, Palette, Layers, FileText } from "lucide-react";
import leftLight from "../../../assets/left-light.png";
import rightLight from "../../../assets/right-light.png";
import heroBg from "../../../assets/hero-bgs.webp";

const statPills = [
  { icon: Palette, label: "50+ Brands Launched" },
  { icon: Layers,  label: "Full System Delivery" },
  { icon: FileText, label: "Brand Guide Included" },
];

const swatchColors = ["#07BEB8", "#0d2535", "#F4A623", "#4f46e5", "#ffffff"];
const patternRow = Array.from({ length: 16 });

function BrandMockup() {
  return (
    <div
      className="relative w-full max-w-md mx-auto"
      style={{ animation: "pricing-orb-float 7s ease-in-out infinite" }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(7,190,184,0.12) 0%, transparent 72%)",
        }}
      />

      {/* Main board card */}
      <div
        className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
        style={{
          background: "rgba(5,22,32,0.92)",
          border: "1px solid rgba(7,190,184,0.3)",
          boxShadow:
            "0 0 50px rgba(7,190,184,0.12), 0 24px 64px rgba(0,0,0,0.5)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(7,190,184,0.7), transparent)",
          }}
        />

        {/* Header bar — mock toolbar */}
        <div className="flex items-center gap-1.5 mb-6">
          {["#FF6B6B", "#FFD93D", "#6BCB77"].map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
          <span
            className="ml-3 text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            brand_identity_system.fig
          </span>
        </div>

        {/* Mock logo zone */}
        <div
          className="flex items-center gap-4 mb-6 p-4 rounded-xl"
          style={{
            background: "rgba(7,190,184,0.05)",
            border: "1px solid rgba(7,190,184,0.15)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #07BEB8, #058682)",
              boxShadow: "0 0 20px rgba(7,190,184,0.4)",
            }}
          >
            <div className="w-5 h-5 rounded-sm rotate-45" style={{ background: "rgba(255,255,255,0.9)" }} />
          </div>
          <div>
            <div className="h-3 w-28 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.75)" }} />
            <div className="h-2 w-20 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>
          <div
            className="ml-auto text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full"
            style={{
              color: "#07BEB8",
              background: "rgba(7,190,184,0.12)",
              border: "1px solid rgba(7,190,184,0.25)",
            }}
          >
            Primary Mark
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-5">
          <span
            className="text-[9px] tracking-widest uppercase block mb-2"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Color System
          </span>
          <div className="flex gap-2">
            {swatchColors.map((c, i) => (
              <div
                key={i}
                className="flex-1 h-9 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{
                  background: c,
                  border:
                    c === "#ffffff"
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                  boxShadow: i === 0 ? `0 0 12px ${c}60` : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Typography specimen */}
        <div
          className="mb-5 p-4 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-baseline gap-4">
            <span
              className="font-extrabold leading-none"
              style={{
                fontSize: "2.2rem",
                background: "linear-gradient(135deg, #ffffff, rgba(255,255,255,0.5))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aa
            </span>
            <div>
              <div className="h-2 w-24 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.18)" }} />
              <div className="h-1.5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
          </div>
          <span
            className="text-[9px] tracking-widest uppercase mt-2 block"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Primary Typeface · Mona Sans
          </span>
        </div>

        {/* Pattern strip */}
        <div className="flex gap-1">
          {patternRow.map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i % 4 === 0
                    ? "#07BEB8"
                    : i % 4 === 2
                    ? "#F4A623"
                    : "rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>

        {/* Bottom label */}
        <div className="flex items-center justify-between mt-5">
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Brand Guidelines v2.0
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full"
            style={{
              color: "#F4A623",
              background: "rgba(244,167,35,0.1)",
              border: "1px solid rgba(244,167,35,0.25)",
            }}
          >
            Ready to Deliver
          </span>
        </div>
      </div>

      {/* Floating badge — top right */}
      <div
        className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-[10px] font-bold"
        style={{
          background: "rgba(7,190,184,0.12)",
          border: "1px solid rgba(7,190,184,0.35)",
          color: "#07BEB8",
          backdropFilter: "blur(8px)",
          animation: "badge-drift 4s ease-in-out infinite",
        }}
      >
        Visual Identity ✦
      </div>

      {/* Floating badge — bottom left */}
      <div
        className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full text-[10px] font-bold"
        style={{
          background: "rgba(244,167,35,0.12)",
          border: "1px solid rgba(244,167,35,0.3)",
          color: "#F4A623",
          backdropFilter: "blur(8px)",
          animation: "badge-drift 5.5s ease-in-out 0.8s infinite",
        }}
      >
        Brand Strategy ✦
      </div>
    </div>
  );
}

export default function BrandingHero() {
  return (
    <section className="relative z-0 flex min-h-[90vh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-top opacity-80"
          decoding="async"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 35% 45%, rgba(7,190,184,0.09) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Light accents */}
      <img
        src={leftLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto opacity-50 hidden sm:block"
        style={{ animation: "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
        decoding="async"
      />
      <img
        src={rightLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto opacity-50 hidden sm:block"
        style={{ animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
        decoding="async"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left: Text ── */}
          <div className="w-full lg:w-[52%]">
            {/* Service badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
              style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
              <span className="text-xs font-medium tracking-widest text-white uppercase">
                Brand Identity Services
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.08] text-white mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
                animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both",
              }}
            >
              Build a Brand That{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Commands
              </span>{" "}
              Instant Trust
            </h1>

            {/* Sub */}
            <p
              className="leading-relaxed mb-8"
              style={{
                fontSize: "clamp(0.9375rem, 1.1vw + 0.3rem, 1.125rem)",
                color: "rgba(255,255,255,0.72)",
                animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s both",
              }}
            >
              We don't just design logos. We architect complete brand identities —
              strategy, visual systems, tone of voice, and everything your brand
              needs to dominate its market and be unforgettable.
            </p>

            {/* Stat pills */}
            <div
              className="flex flex-wrap gap-3 mb-8"
              style={{ animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s both" }}
            >
              {statPills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(7,190,184,0.07)",
                    border: "1px solid rgba(7,190,184,0.26)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Icon className="h-3.5 w-3.5 text-[#07BEB8] flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 1s both" }}
            >
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
                href="#branding-process"
                className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium text-white/60 transition-all hover:text-white"
              >
                See How We Work
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* ── Right: Brand mockup ── */}
          <div
            className="w-full lg:w-[48%] flex justify-center lg:justify-end"
            style={{ animation: "fadeScaleIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}
          >
            <BrandMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 z-[3]"
        style={{ background: "linear-gradient(to top, #000405, transparent)" }}
      />
    </section>
  );
}
