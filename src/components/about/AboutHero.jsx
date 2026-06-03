import { ArrowRight, Users, Globe, Briefcase, Award } from "lucide-react";
import CTAButton from "../shared/CTAButton";
import leftLight from "../../assets/left-light.png";
import rightLight from "../../assets/right-light.png";
import heroBg from "../../assets/hero-bgs.webp";

const statPills = [
  { icon: Briefcase, label: "150+ Projects Delivered" },
  { icon: Users, label: "50+ Expert Team Members" },
  { icon: Globe, label: "20+ Countries Served" },
  { icon: Award, label: "98% Client Satisfaction" },
];

export default function AboutHero() {
  return (
    <section
      id="about"
      className="relative z-0 flex min-h-[90vh] items-center overflow-hidden"
    >
      {/* ── Background ── */}
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
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(7,190,184,0.10) 0%, transparent 72%)",
          }}
        />
      </div>

      {/* ── Light accents ── */}
      <img
        src={leftLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto opacity-55 hidden sm:block"
        style={{
          animation: "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.3s both",
        }}
        decoding="async"
      />
      <img
        src={rightLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto opacity-55 hidden sm:block"
        style={{
          animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.3s both",
        }}
        decoding="async"
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pt-32 pb-20 text-center">
        {/* Eyebrow badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium text-white">
            Multiple Teams & Ideas Working Together To Build Better Digital
            Solutions
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        {/* Headline */}
        <h1
          className="mx-auto max-w-4xl font-extrabold leading-[1.1] text-white"
          style={{
            fontSize: "clamp(2rem, 4.5vw + 0.5rem, 4rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both",
          }}
        >
          A Passionate Team Building High-Quality Digital Solutions{" "}
          <span className="precision-gradient">With Precision</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mx-auto mt-4 max-w-4xl font-semibold text-white"
          style={{
            fontSize: "clamp(0.95rem, 1.3vw + 0.3rem, 1.15rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s both",
          }}
        >
          Dedicated Experts Building Quality Digital Solutions For Your Project
          Needs
        </p>

        {/* Stat pills */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 1s both",
          }}
        >
          {statPills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(7,190,184,0.07)",
                border: "1px solid rgba(7,190,184,0.28)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Icon className="h-4 w-4 text-[#07BEB8] flex-shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.15s both",
          }}
        >
          <CTAButton href="/contact">
            Work With Us
          </CTAButton>
        
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-[3]"
        style={{
          background: "linear-gradient(to top, #000405, transparent)",
        }}
      />
    </section>
  );
}
