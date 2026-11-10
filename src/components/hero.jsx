import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.webp";
import rightLight from "../assets/right-light.webp";
// import GlobeLogo from "../assets/globe-frame.webp";
// import HalfLogo from "../assets/logo-half.webp";
import zainAvatar from "../assets/founders/zain-haider.jpg";
import heroVideo from "../assets/corehives_hero.mp4";
import { ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// const HeroVisuals = lazy(() => import("./heroVisuals.jsx"));

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

/*
const GlobeFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="absolute rounded-full blur-[80px]"
      style={{
        width: "clamp(240px, 36vw, 360px)",
        height: "clamp(240px, 36vw, 360px)",
        background:
          "radial-gradient(circle, rgba(7,190,184,0.22) 0%, rgba(7,190,184,0.08) 42%, transparent 72%)",
      }}
    />
    <img
      src={GlobeLogo}
      alt=""
      aria-hidden="true"
      width={330}
      height={330}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "clamp(220px, 32vw, 330px)",
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
      style={{ width: "clamp(60px, 9.6vw, 144px)", height: "auto" }}
      decoding="async"
    />
  </div>
);
*/

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM attributes for iOS Safari / WebKit and Android Chrome
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.defaultMuted = true;
    video.muted = true;

    const handleReady = () => setIsVideoReady(true);
    video.addEventListener("playing", handleReady, { once: true });

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.then(handleReady).catch(() => {
          // Autoplay policy prevented playback, poster remains smoothly visible
        });
      }
    };

    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    tryPlay();

    return () => {
      video.removeEventListener("playing", handleReady);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  /*
  const [shouldLoadVisuals, setShouldLoadVisuals] = useState(false);
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
    : { marginTop: "-2rem", aspectRatio: "18 / 10", minHeight: "480px" };
  */

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-0 flex sm:min-h-[74vh] lg:min-h-[78vh] items-center justify-center overflow-hidden"
    >
      {/* Layer 0: Background Video & Seamless Fallback */}
      <div className="absolute inset-0 -top-5 z-0 overflow-hidden bg-[#000405]">
        {/* Poster image visible while video buffers, fades out when video starts */}
        <img
          src={hero_bg}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
            isVideoReady ? "opacity-0" : "opacity-90"
          }`}
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          onPlaying={() => setIsVideoReady(true)}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            isVideoReady ? "opacity-75" : "opacity-0"
          }`}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/corehives_hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient gradient vignette to blend top nav and bottom section seamlessly */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000405]/50 via-transparent to-[#000405]" />
      </div>

      {/* Layer 1: Light accents — wide desktop only (>1150px) */}
      {!isMobile && (
        <>
          <img
            src={leftLight}
            alt=""
            aria-hidden="true"
            width={700}
            height={560}
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
            width={700}
            height={560}
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
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16 lg:px-10 lg:pt-40 lg:pb-28">
        <h1
          className="max-w-4xl font-bold leading-[1.2] text-white"
          style={{
            fontSize: "clamp(1.85rem, 3.8vw + 0.6rem, 3.25rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both",
            willChange: "opacity, transform",
          }}
        >
          Future-Proof Your{" "}
          <span
            className="relative inline-flex items-center justify-center rounded-full align-middle p-[3px] mx-1 sm:mx-1.5 -translate-y-0.5"
            style={{
              width: "clamp(2.25rem, 4.5vw, 3.5rem)",
              height: "clamp(2.25rem, 4.5vw, 3.5rem)",
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
                  width: "clamp(1.25rem, 2.5vw, 2rem)",
                  height: "clamp(1.25rem, 2.5vw, 2rem)",
                }}
                color="#07BEB8"
                strokeWidth={1.5}
                fill="#ffffff"
              />
            </span>
          </span>{" "}
          Business With Our{" "}
          <span className="block mt-1 sm:mt-1.5 precision-gradient">
            Web & App Solutions
          </span>
        </h1>

        <p
          className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/75"
          style={{
            fontSize: "clamp(0.9375rem, 1.15vw + 0.35rem, 1.125rem)",
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s both",
            willChange: "opacity, transform",
          }}
        >
          Enterprise-grade development solutions designed to secure, modernize,
          and accelerate your digital transformation.
        </p>

        {/* Hero CTAs */}
        <div
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.9s both",
            willChange: "opacity, transform",
          }}
        >
          {/* Primary CTA: Schedule a call with Zain's circular photo */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3.5 rounded-full bg-white pl-6 pr-1.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#f3faf9] hover:shadow-[0_0_30px_rgba(7,190,184,0.38)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-sm sm:text-base font-semibold tracking-tight text-neutral-900 group-hover:text-black">
              Schedule a call
            </span>
            <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full ring-2 ring-neutral-200/90 shadow-sm transition-all duration-300 group-hover:ring-[#07BEB8]">
              <img
                src={zainAvatar}
                alt="Zain Haider - CEO & Co-Founder"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </span>
          </Link>

          {/* Secondary CTA: See our work */}
          <Link
            to="/our-portfolio"
            className="group relative inline-flex items-center text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:text-[#07BEB8]"
          >
            <span className="relative pb-1">
              See our work
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white/70 transition-colors duration-200 group-hover:bg-[#07BEB8]" />
            </span>
          </Link>
        </div>

        {/* Trustpilot Review Badge */}
        <div
          className="mx-auto mt-6 flex items-center justify-center text-xs text-white/60"
          style={{
            animation: "fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 1s both",
            willChange: "opacity, transform",
          }}
        >
          <a
            href="https://www.trustpilot.com/review/corehives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-wrap items-center justify-center gap-2 transition-colors duration-200 hover:text-white"
          >
            {/* 5-Star Rating Icons */}
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#00B67A] shadow-sm transition-transform duration-200 group-hover:scale-105"
                >
                  <svg className="h-2.5 w-2.5 fill-white" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 0L12.94 6.58L20 7.64L15 12.42L16.18 19.51L10 16.27L3.82 19.51L5 12.42L0 7.64L7.06 6.58L10 0Z" />
                  </svg>
                </span>
              ))}
            </div>

            <span className="text-white/70">4.5 Rated on</span>

            <span className="flex items-center gap-1 font-semibold text-white transition-colors group-hover:text-[#00B67A]">
              <svg className="h-3.5 w-3.5 fill-[#00B67A]" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 0L12.94 6.58L20 7.64L15 12.42L16.18 19.51L10 16.27L3.82 19.51L5 12.42L0 7.64L7.06 6.58L10 0Z" />
              </svg>
              Trustpilot
            </span>
          </a>
        </div>

        {/* Visuals — Globe & floating cards (commented out per preview request) */}
        {/*
        <div className="relative w-full" style={visualsStyle}>
          {shouldLoadVisuals ? (
            <Suspense fallback={<GlobeFallback />}>
              <HeroVisuals isMobile={isMobile} />
            </Suspense>
          ) : (
            <GlobeFallback />
          )}
        </div>
        */}
      </div>
    </section>
  );
}
