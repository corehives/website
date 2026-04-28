import hero_bg from "../assets/hero-bg.png";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import AnimationGlobe from "./animations/globe.jsx";
import AnimationCircuit from "./animations/quality.jsx";
import AnimationDigital from "./animations/digital.jsx";
import AnimationDataAnalytics from "./animations/dataAnalytic.jsx";
import AnimationSupport from "./animations/support.jsx";
import AnimationCloudDevops from "./animations/cloudDevops.jsx";
import AnimationBlockChain from "./animations/blockChain.jsx";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
       id="home"
      className="relative z-0 flex h-screen items-stretch overflow-hidden md:min-h-[120vh] lg:min-h-[120vh]"
    >
      {/* Background */}
      <div className="absolute inset-0 -top-16 sm:-top-24 lg:-top-[20px]">
        <img
          src={hero_bg}
          alt=""
          className="h-full w-full object-cover object-top md:object-contain"
        />
      </div>

      {/* Left Light */}
      <img
        src={leftLight}
        alt=""
        className="pointer-events-none absolute left-0 top-0 z-10 h-[18rem] w-auto max-w-none animate-lightUpLeft sm:h-[24rem] lg:h-[50rem]"
      />

      {/* Right Light */}
      <img
        src={rightLight}
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-[18rem] w-auto max-w-none animate-lightUpRight sm:h-[24rem] lg:h-[50rem]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-12 pt-28 text-center sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pt-28">
        <h1 className="mt-6 max-w-5xl text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Future-Proof Your{" "}
          <span
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full align-middle p-[3px] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            style={{ background: "linear-gradient(135deg, #01090E, #07BEB8)" }}
          >
            {/* Inner fill */}
            <span
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(7,190,184,0.1))",
              }}
            >
              <ShieldCheck
                className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                color="#07BEB8"
                strokeWidth={1}
                fill="#ffffff"
              />
            </span>
          </span> <span> </span>
          Business With our Web & App Solutions
        </h1>

        <p className="mx-auto max-w-3xl px-2 py-6 text-base leading-relaxed text-white sm:px-6 sm:text-lg lg:px-0 lg:py-8 lg:text-xl">
          Enterprise-grade development solutions designed to secure, modernize,
          and accelerate your digital transformation.
        </p>

        <div className="relative mt-2 h-[22rem] w-full max-w-[22rem] overflow-visible sm:h-[26rem] sm:max-w-[30rem] md:h-[32rem] md:max-w-[48rem] lg:h-[38rem] lg:max-w-[68rem] xl:max-w-[72rem]">
          {/* Globe Animation */}
          <AnimationGlobe />

          {/* Circuit Animation */}
          <div className="hidden md:block">
            <AnimationCircuit />
          </div>

          {/* Digital Animation */}
          <div className="hidden md:block">
            <AnimationDigital />
          </div>

          {/* Data Analytics Animation */}
          <div className="hidden md:block">
            <AnimationDataAnalytics />
          </div>

          {/* Support Animation */}
          <div className="hidden md:block">
            <AnimationSupport />
          </div>

          {/* Cloud DevOps Animation */}
          <div className="hidden md:block">
            <AnimationCloudDevops />
          </div>
          
          {/* BlockChain Animation */}
          <div className="hidden md:block">
            <AnimationBlockChain />
          </div>
        </div>
      </div>
    </section>
  );
}
