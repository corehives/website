import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import AnimationGlobe from "./animations/globe.jsx";
import AnimationQuality from "./animations/quality.jsx";
import AnimationDigital from "./animations/digital.jsx";
import AnimationDataAnalytics from "./animations/dataAnalytic.jsx";
import AnimationSupport from "./animations/support.jsx";
import AnimationCloudDevops from "./animations/cloudDevops.jsx";
import AnimationBlockChain from "./animations/digitalInnovation.jsx";
import { ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative z-0 flex min-h-screen items-stretch overflow-hidden"
    >

      {/* ── Layer 0: Background image ── */}
      <div className="absolute inset-0 -top-5 z-0">
        <img
          src={hero_bg}
          alt="hero-bg"
          loading="eager"
          fetchpriority="high"
          className="h-full w-full object-cover object-top opacity-90"
        />
      </div>

      {/* ── Layer 1: Left light — slides in from left ── */}
      <img
        src={leftLight}
        alt="left-content"
        loading="eager"
        fetchpriority="high"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-[18rem] w-auto sm:h-[28rem] lg:h-[50rem]"
        style={{
          animation: "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
        }}
      />

      {/* ── Layer 1: Right light — slides in from right ── */}
      <img
        src={rightLight}
        alt="right-content"
        loading="eager"
        fetchpriority="high"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-[18rem] w-auto sm:h-[28rem] lg:h-[50rem]"
        style={{
          animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
        }}
      />

      {/* ── Layer 2: Main content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 text-center sm:px-6 sm:pt-22 lg:px-10 lg:pt-20">
        <h1
          className="max-w-5xl text-3xl font-semibold leading-[1.15] text-white sm:text-3xl lg:text-5xl"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both",
          }}
        >
          Future-Proof Your{" "}
          <span
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full align-middle p-[3px] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            style={{
              background: "linear-gradient(to bottom, #07BEB8, #33384B)",
            }}
          >
            <span
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(7,190,184,0.1))",
              }}
            >
              <ShieldCheck
                className="relative z-10 h-5 w-5 sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                color="#07BEB8"
                strokeWidth={1}
                fill="#ffffff"
              />
            </span>
          </span>{" "}
          Business With our Web & App Solutions
        </h1>

        <p
          className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s both",
          }}
        >
          Enterprise-grade development solutions designed to secure, modernize,
          and accelerate your digital transformation.
        </p>

        <div
          className="relative w-full -top-20"
          style={{
            aspectRatio: "18 / 10",
            minHeight: "480px",
          }}
        >
          <AnimationGlobe />
          <AnimationDataAnalytics />
          <AnimationQuality />
          <AnimationCloudDevops />
          <AnimationDigital />
          <AnimationBlockChain />
          <AnimationSupport />
        </div>
      </div>
    </section>
  );
}
