import { ArrowRight, Play, Film, Sparkles } from "lucide-react";
import leftLight from "../../../assets/left-light.png";
import rightLight from "../../../assets/right-light.png";
import heroBg from "../../../assets/hero-bgs.webp";

const statPills = [
  { icon: Film,     label: "2D · 3D · Motion Graphics" },
  { icon: Play,     label: "Explainer Videos" },
  { icon: Sparkles, label: "UI Micro-animations" },
];

const layers = [
  { name: "Background", width: "90%",  color: "#A78BFA", delay: 0 },
  { name: "Characters",  width: "75%",  color: "#07BEB8", delay: 0.3 },
  { name: "UI Elements", width: "60%",  color: "#F472B6", delay: 0.6 },
  { name: "Text & CTA",  width: "45%",  color: "#F4A623", delay: 0.9 },
];

const keyframes = [0, 15, 30, 45, 60, 75, 90];

function AnimationMockup() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      style={{ animation: "pricing-orb-float 8s ease-in-out infinite" }}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.10) 0%, transparent 72%)",
        }}
      />

      {/* Main panel */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(5,22,32,0.94)",
          border: "1px solid rgba(167,139,250,0.3)",
          boxShadow:
            "0 0 50px rgba(167,139,250,0.10), 0 24px 64px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(167,139,250,0.7), transparent)",
          }}
        />

        {/* Title bar */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {["#FF6B6B", "#FFD93D", "#6BCB77"].map((c) => (
                <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <span className="text-[10px] tracking-widest uppercase ml-2" style={{ color: "rgba(255,255,255,0.25)" }}>
              brand_explainer_v3.aep
            </span>
          </div>
          <span
            className="text-[10px] px-2.5 py-0.5 rounded-full font-bold"
            style={{
              color: "#07BEB8",
              background: "rgba(7,190,184,0.1)",
              border: "1px solid rgba(7,190,184,0.25)",
            }}
          >
            ▶ Rendering...
          </span>
        </div>

        {/* Canvas preview */}
        <div
          className="relative mx-5 mt-5 rounded-xl overflow-hidden"
          style={{
            height: "140px",
            background: "linear-gradient(135deg, #0d1a2e, #0a0f1a)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Animated scene elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Abstract animated shape */}
            <div
              className="absolute rounded-full"
              style={{
                width: "70px",
                height: "70px",
                background: "radial-gradient(circle, rgba(167,139,250,0.35), rgba(7,190,184,0.15))",
                animation: "pricing-orb-float 4s ease-in-out infinite",
                boxShadow: "0 0 30px rgba(167,139,250,0.3)",
              }}
            />
            {/* Orbiting dot */}
            <div
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: "#F472B6",
                top: "30%",
                left: "55%",
                boxShadow: "0 0 10px #F472B6",
                animation: "pricing-orb-float 3s ease-in-out 0.5s infinite",
              }}
            />
            {/* Motion blur line */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "20%",
                right: "20%",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(7,190,184,0.5), transparent)",
                animation: "pricing-sheen 2.5s ease-in-out infinite",
              }}
            />
          </div>
          {/* Frame counter */}
          <div
            className="absolute bottom-2 right-3 text-[10px] font-mono"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Frame: 0042 / 0090
          </div>
          {/* FPS badge */}
          <div
            className="absolute top-2 left-3 text-[9px] font-bold tracking-wide px-2 py-0.5 rounded"
            style={{
              color: "#A78BFA",
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            24 FPS
          </div>
        </div>

        {/* Timeline section */}
        <div className="p-5">
          {/* Scrubber */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.25)", width: "28px" }}>
              0:00
            </span>
            <div className="flex-1 relative">
              <div
                className="h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
              <div
                className="absolute top-0 left-0 h-1 rounded-full"
                style={{ width: "47%", background: "linear-gradient(to right, #A78BFA, #07BEB8)" }}
              />
              {keyframes.map((kf, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    left: `${(kf / 90) * 100}%`,
                    background: i % 2 === 0 ? "#A78BFA" : "#07BEB8",
                    boxShadow: `0 0 6px ${i % 2 === 0 ? "#A78BFA" : "#07BEB8"}`,
                  }}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.25)", width: "28px" }}>
              3:45
            </span>
          </div>

          {/* Layer tracks */}
          <div className="flex flex-col gap-2">
            {layers.map((layer, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="text-[10px] w-20 flex-shrink-0 truncate"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {layer.name}
                </span>
                <div className="flex-1 relative h-4">
                  <div
                    className="h-full rounded"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 h-full rounded"
                    style={{
                      width: layer.width,
                      background: `${layer.color}28`,
                      border: `1px solid ${layer.color}50`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute -top-4 -right-2 px-3 py-1.5 rounded-full text-[10px] font-bold"
        style={{
          background: "rgba(167,139,250,0.12)",
          border: "1px solid rgba(167,139,250,0.35)",
          color: "#A78BFA",
          backdropFilter: "blur(8px)",
          animation: "badge-drift 4.5s ease-in-out infinite",
        }}
      >
        Motion Design ✦
      </div>
      <div
        className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full text-[10px] font-bold"
        style={{
          background: "rgba(244,114,182,0.12)",
          border: "1px solid rgba(244,114,182,0.3)",
          color: "#F472B6",
          backdropFilter: "blur(8px)",
          animation: "badge-drift 5s ease-in-out 1s infinite",
        }}
      >
        Explainer Videos ✦
      </div>
    </div>
  );
}

export default function IllustrationHero() {
  return (
    <section className="relative z-0 flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" aria-hidden="true" loading="eager" fetchPriority="high"
          className="h-full w-full object-cover object-top opacity-80" decoding="async" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 65% 55% at 35% 45%, rgba(167,139,250,0.08) 0%, transparent 70%)",
        }} />
      </div>

      <img src={leftLight} alt="" aria-hidden="true" loading="eager"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto opacity-50 hidden sm:block"
        style={{ animation: "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.3s both" }} decoding="async" />
      <img src={rightLight} alt="" aria-hidden="true" loading="eager"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto opacity-50 hidden sm:block"
        style={{ animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.3s both" }} decoding="async" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left: Text */}
          <div className="w-full lg:w-[52%]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
              style={{ animation: "fadeIn 0.6s ease 0.2s both" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#A78BFA" }} />
              <span className="text-xs font-medium tracking-widest text-white uppercase">Illustration & Animation</span>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#A78BFA" }} />
            </div>

            <h1 className="font-extrabold leading-[1.08] text-white mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
                animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both",
              }}>
              Visuals That{" "}
              <span style={{
                background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Move, Engage
              </span>{" "}
              & Convert
            </h1>

            <p className="leading-relaxed mb-8" style={{
              fontSize: "clamp(0.9375rem, 1.1vw + 0.3rem, 1.125rem)",
              color: "rgba(255,255,255,0.72)",
              animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s both",
            }}>
              From bespoke 2D illustrations and motion graphics to UI micro-animations
              and full explainer videos — we create visual content that makes your
              audience stop scrolling and start engaging.
            </p>

            <div className="flex flex-wrap gap-3 mb-8"
              style={{ animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s both" }}>
              {statPills.map(({ icon: Icon, label }) => (
                <div key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(167,139,250,0.07)",
                    border: "1px solid rgba(167,139,250,0.25)",
                    backdropFilter: "blur(10px)",
                  }}>
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#A78BFA" }} />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4"
              style={{ animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 1s both" }}>
              <a href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]">
                Start a Creative Project
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a href="#illustration-process"
                className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-medium text-white/60 transition-all hover:text-white">
                See Our Process <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end"
            style={{ animation: "fadeScaleIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}>
            <AnimationMockup />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 z-[3]"
        style={{ background: "linear-gradient(to top, #000405, transparent)" }} />
    </section>
  );
}
