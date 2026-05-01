import hero_bg from "../assets/hero-bg.png";
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 flex min-h-screen items-stretch overflow-hidden"
    >
      {/* ── Layer 0: Background image (z-0, behind everything) ── */}
      <div className="absolute inset-0 -top-5 z-0">
        <img
          src={hero_bg}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* ── Layer 1: Atmospheric lights (z-2, above bg only) ── */}
      <img
        src={leftLight}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-[2] h-[18rem] w-auto sm:h-[28rem] lg:h-[50rem]"
      />
      <img
        src={rightLight}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-[2] h-[18rem] w-auto sm:h-[28rem] lg:h-[50rem]"
      />

      {/* ── Layer 2: Main content (z-10, above lights) ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-12 pt-24 text-center sm:px-6 sm:pt-32 lg:px-10 lg:pt-28">

        {/* Headline */}
        <h1 className="max-w-5xl text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
          Future-Proof Your{" "}
          <span
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full align-middle p-[3px] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            style={{ background: "linear-gradient(135deg, #01090E, #07BEB8)" }}
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

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          Enterprise-grade development solutions designed to secure, modernize,
          and accelerate your digital transformation.
        </p>

        {/* ── Globe container — drives its own height responsively ── */}
        <div className="relative  w-full "
             style={{ aspectRatio: "18 / 10", minHeight: "400px", }}>
          <AnimationGlobe />
          <AnimationDataAnalytics/>
          <AnimationQuality/>
          <AnimationCloudDevops/>
          <AnimationDigital/>
          <AnimationBlockChain/>
          <AnimationSupport/>
        </div>

      </div>
    </section>
  );
}