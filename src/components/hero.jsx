import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import GlobeLogo from "../assets/globe-frame.png";
import HalfLogo from "../assets/logo-half.png";
import { ShieldCheck } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroVisuals = lazy(() => import("./heroVisuals.jsx"));

function HeroVisualFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="absolute h-[18rem] w-[18rem] rounded-full blur-[80px] sm:h-[24rem] sm:w-[24rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(7,190,184,0.22) 0%, rgba(7,190,184,0.08) 42%, transparent 72%)",
        }}
      />
      <img
        src={GlobeLogo}
        alt=""
        className="absolute h-auto w-[clamp(240px,31vw,350px)] object-cover opacity-95"
        style={{
          animation: "rotateSlow 20s linear infinite",
          filter: "drop-shadow(0 0 25px #07BEB8) drop-shadow(0 0 60px #07BEB8)",
        }}
      />
      <img
        src={HalfLogo}
        alt="CoreHives mark"
        className="relative h-auto w-[clamp(50px,10vw,200px)] object-contain opacity-90"
      />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const frameRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldLoadVisuals, setShouldLoadVisuals] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") {
      setShouldLoadVisuals(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "280px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || shouldLoadVisuals || typeof window === "undefined") {
      return undefined;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      setShouldLoadVisuals(true);
    });

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isVisible, shouldLoadVisuals]);

  return (
    <section
      id="home"
      ref={sectionRef}
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
          {shouldLoadVisuals && isVisible ? (
            <Suspense fallback={<HeroVisualFallback />}>
              <HeroVisuals />
            </Suspense>
          ) : !shouldLoadVisuals ? (
            <HeroVisualFallback />
          ) : null}
        </div>
      </div>
    </section>
  );
}
