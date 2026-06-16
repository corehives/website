import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import GlobeLogo from "../assets/globe-frame.png";
import HalfLogo from "../assets/logo-half.png";
import { ShieldCheck } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroVisuals = lazy(() => import("./heroVisuals.jsx"));

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 1150,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1149px)");
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

const GlobeFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="absolute rounded-full blur-[80px]"
      style={{
        width: "clamp(320px, 52vw, 490px)",
        height: "clamp(320px, 52vw, 490px)",
        background:
          "radial-gradient(circle, rgba(7,190,184,0.22) 0%, rgba(7,190,184,0.08) 42%, transparent 72%)",
      }}
    />
    <img
      src={GlobeLogo}
      alt=""
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "clamp(300px, 50vw, 460px)",
        height: "auto",
        objectFit: "cover",
        opacity: 0.95,
        animation: "rotateSlow 20s linear infinite",
        filter: "drop-shadow(0 0 25px #07BEB8) drop-shadow(0 0 60px #07BEB8)",
        willChange: "transform",
      }}
      decoding="async"
      loading="lazy"
    />
    <img
      src={HalfLogo}
      alt="CoreHives mark"
      className="relative object-contain opacity-90"
      style={{ width: "clamp(70px, 12vw, 200px)", height: "auto" }}
      decoding="async"
    />
  </div>
);

export default function Hero() {
  const sectionRef = useRef(null);
  const [shouldLoadVisuals, setShouldLoadVisuals] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      setShouldLoadVisuals(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVisuals(true);
          observer.unobserve(section);
        }
      },
      { rootMargin: "280px 0px", threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const visualsStyle = isMobile
    ? { marginTop: "1.5rem", height: "clamp(360px, 56vw, 530px)" }
    : { top: "-5rem", aspectRatio: "18 / 10", minHeight: "480px" };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-0 flex min-h-screen items-stretch overflow-hidden"
    >
      {/* Layer 0: Background */}
      <div className="absolute inset-0 -top-5 z-0">
        <img
          src={hero_bg}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-top opacity-90"
          decoding="async"
        />
      </div>

      {/* Layer 1: Light accents — wide desktop only (>1150px) */}
      {!isMobile && (
        <>
          <img
            src={leftLight}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="pointer-events-none absolute left-0 top-0 z-2 h-112 w-auto lg:h-200"
            style={{
              animation: "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
              willChange: "transform",
            }}
            decoding="async"
          />
          <img
            src={rightLight}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="pointer-events-none absolute right-0 top-0 z-2 h-112 w-auto lg:h-200"
            style={{
              animation: "slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
              willChange: "transform",
            }}
            decoding="async"
          />
        </>
      )}

      {/* Layer 2: Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 text-center mt-6 sm:px-6 sm:pt-22 lg:px-10 lg:pt-20">
        <h1
          className="max-w-5xl font-bold leading-[1.15] text-white"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw + 0.75rem, 3rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both",
            willChange: "opacity, transform",
          }}
        >
          Future-Proof Your{" "}
          <span
            className="relative inline-flex items-center justify-center rounded-full align-middle p-[3px]"
            style={{
              width: "clamp(2.25rem, 5.5vw, 4rem)",
              height: "clamp(2.25rem, 5.5vw, 4rem)",
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
                style={{
                  width: "clamp(1.25rem, 3vw, 2.25rem)",
                  height: "clamp(1.25rem, 3vw, 2.25rem)",
                }}
                color="#07BEB8"
                strokeWidth={1}
                fill="#ffffff"
              />
            </span>
          </span>{" "}
          Business With our
          <span className="precision-gradient">Web & App Solutions</span>
        </h1>

        <p
          className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/80"
          style={{
            fontSize: "clamp(0.9375rem, 1.25vw + 0.35rem, 1.25rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s both",
            willChange: "opacity, transform",
          }}
        >
          Enterprise-grade development solutions designed to secure, modernize,
          and accelerate your digital transformation.
        </p>

        {/* Visuals — responsive container */}
        <div className="relative w-full" style={visualsStyle}>
          {shouldLoadVisuals ? (
            <Suspense fallback={<GlobeFallback />}>
              <HeroVisuals isMobile={isMobile} />
            </Suspense>
          ) : (
            <GlobeFallback />
          )}
        </div>
      </div>
    </section>
  );
}
