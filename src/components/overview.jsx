import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "./shared/CTAButton";
import BgOverview from "../assets/bg-overview-1x.webp";
import BaileyBeauImg from "../assets/bailey-beau-showcase.webp";
import DoorsImg from "../assets/doors-showcase.webp";
import ProDocetImg from "../assets/prodocet-showcase.webp";
import RescueSpotImg from "../assets/rescue-spot-showcase.webp";

const projects = [
  {
    title: "Rescue Spot | Pet Adoption Platform",
    desc: "A US-based pet adoption platform connecting adopters, foster families, volunteers, and rescue shelters through unified application workflows and search across 46,000+ animals.",
    image: RescueSpotImg,
    tag: "PetTech | Custom Software Development",
    to: "/portfolio/rescue-spot",
    ctaText: "View Case Study",
  },
  {
    title: "Bailey & Beau | Interactive Family Reading Platform",
    desc: "An interactive family reading and learning platform that brings children and distant loved ones together through live video, synchronized storybooks, collaborative drawing, and engaging educational activities.",
    image: BaileyBeauImg,
    tag: "EdTech | Custom Software Development",
    to: "/portfolio/bailey-and-beau",
    ctaText: "View Case Study",
  },
  {
    title: "Doors | Multi-Vendor E-Commerce Marketplace",
    desc: "A multi-vendor e-commerce marketplace built for the Saudi Arabian retail market, connecting merchants and shoppers through product management, mobile commerce APIs, secure payment processing, and integrated delivery operations.",
    image: DoorsImg,
    tag: "E-Commerce | Marketplace Development",
    to: "/portfolio/doors-ecommerce-marketplace",
    ctaText: "View Case Study",
  },
  {
    title: "ProDocet LMS | School Learning Management System",
    desc: "A comprehensive school management platform that centralizes curriculum planning, automated class scheduling, student attendance, academic grading, tuition tracking, and teacher invoicing in one system.",
    image: ProDocetImg,
    tag: "EdTech | Education Management",
    to: "/portfolio/prodocet-lms",
    ctaText: "View Case Study",
  },
];

export default function OverviewSection() {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const minSwipeDistance = 35;

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    if (touchStartX !== null && Math.abs(e.targetTouches[0].clientX - touchStartX) > 10) {
      setIsSwiping(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setTimeout(() => setIsSwiping(false), 100);
  };

  return (
    <div className="section-auto-render relative overflow-hidden">
      {/* ───── Background ───── */}
      <div className="absolute inset-0 z-0">
        <img
          src={BgOverview}
          className="absolute inset-0 w-full h-full object-center opacity-70"
          alt=""
          loading="lazy"
        />
      </div>

      {/* ───── Content ───── */}
      <section className="relative z-10 text-white py-14 md:py-20 lg:py-24 pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Header Row ── */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 mb-10 md:mb-14 lg:mb-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
                Here's an <span className="precision-gradient">Overview</span>{" "}
                of Some of our Favorite Projects
              </h1>
            </div>

            <div className="flex flex-col items-start gap-4 md:gap-5 max-w-lg">
              <p className="text-white text-base md:text-lg leading-relaxed">
                We've been digitizing businesses for years from reducing
                development time through our low-code approach to cutting
                operational costs at significantly affordable rates.
              </p>

            </div>
          </div>

          {/* ── Main Row ── */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-center">
            {/* ───── Left Panel ───── */}
            <div className="w-full lg:w-[30%] flex-shrink-0 h-90">
              <div className="flex items-center justify-between gap-6 mb-6 md:mb-8">
                {/* Left: counter + progress */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="text-xs text-white/35 font-mono tracking-widest whitespace-nowrap">
                    {String(index + 1).padStart(2, "0")}
                    <span className="mx-1 text-white/20">/</span>
                    {String(projects.length).padStart(2, "0")}
                  </span>

                  <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#058682] transition-[width] duration-500 ease-in-out"
                      style={{
                        width: `${((index + 1) / projects.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Right: arrows */}
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={prev}
                    aria-label="Previous project"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-black hover:bg-[#07BEB8]"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next project"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-black hover:bg-[#07BEB8]"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#FFF]/40 border border-[#07BEB8]/25 rounded-full px-3 py-1 mb-3 md:mb-4">
                {projects[index].tag}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-snug">
                {projects[index].title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-white mb-6 md:mb-8 leading-relaxed">
                {projects[index].desc}
              </p>

              {/* CTA */}
              <CTAButton to={projects[index].to || "/contact"}>
                {projects[index].ctaText || "View Case Studies"}
              </CTAButton>
            </div>

            {/* ───── Right Slider ───── */}
            <div
              className="w-full lg:w-[70%] overflow-hidden touch-pan-y select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4 lg:gap-6 [--card-w:84%] sm:[--card-w:76%] lg:[--card-w:calc(72%-12px)] [--card-gap:16px] lg:[--card-gap:24px]"
                style={{
                  transform: `translateX(calc(-${index} * (var(--card-w) + var(--card-gap))))`,
                }}
              >
                {projects.map((p, i) => {
                  const isActive = i === index;
                  const cardContent = (
                    <div className="rounded-2xl overflow-hidden border-[3px] border-[#cccccca1] transition-all duration-500">
                      <div className="relative">
                        <img
                          src={p.image}
                          className="w-full aspect-[16/10] object-cover object-top pointer-events-none"
                          alt={p.title}
                          width={560}
                          height={350}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-[#021b1a]/40" />
                        )}
                      </div>
                    </div>
                  );

                  return isActive ? (
                    <Link
                      key={i}
                      to={p.to || "/contact"}
                      onClick={(e) => {
                        if (isSwiping) e.preventDefault();
                      }}
                      className="w-[var(--card-w)] flex-shrink-0 cursor-pointer block"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      className="w-[var(--card-w)] flex-shrink-0 cursor-pointer block"
                      onClick={() => setIndex(i)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setIndex(i);
                      }}
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>

              {/* Mobile controls: Dots + Arrows */}
              <div className="flex items-center justify-between mt-6 lg:hidden">
                <div className="flex items-center gap-1.5">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="py-2 px-1 focus:outline-none"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          i === index
                            ? "w-8 bg-[#07BEB8]"
                            : "w-3 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous project"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#07BEB8] hover:text-[#07BEB8] active:bg-[#07BEB8]/20 transition-colors"
                  >
                    <ArrowLeft size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next project"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-[#07BEB8] hover:text-[#07BEB8] active:bg-[#07BEB8]/20 transition-colors"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
