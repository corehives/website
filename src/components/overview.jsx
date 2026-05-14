import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BgOverview from "../assets/bg-overview-1x.webp";
import SliderPreview1 from "../assets/slider-preview-1.png";
import SliderPreview2 from "../assets/slider-preview-2.png";

const projects = [
  {
    title: "Zach Moore Personal Training",
    desc: "Zach Moore specializes in strength training, injury prevention, and nutrition coaching for high-income professionals in Miami.",
    image: SliderPreview1,
    tag: "Health & Fitness",
  },
  {
    title: "AI Dashboard",
    desc: "Modern analytics dashboard with predictive insights and automation tools for enterprise teams.",
    image: SliderPreview2,
    tag: "SaaS / Analytics",
  },
  {
    title: "E-Commerce Platform",
    desc: "Scalable commerce solution with seamless checkout and deep third-party integrations.",
    image: SliderPreview1,
    tag: "E-Commerce",
  },
];

export default function OverviewSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

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
                Here's an{" "}
                <span
                  style={{
                    background: "#07BEB8",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Overview
                </span>{" "}
                of Some of our Favorite Projects
              </h1>
            </div>

            <div className="flex flex-col items-start gap-4 md:gap-5 max-w-lg">
              <p className="text-white text-base md:text-lg leading-relaxed">
                We've been digitizing businesses for years from reducing
                development time through our low-code approach to cutting
                operational costs at significantly affordable rates.
              </p>
              <button className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/40 text-[#FFF] text-sm font-medium hover:bg-[#07BEB8]/20 transition-all duration-300">
                Explore All Case Studies
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950">
                <ArrowRight className="h-4 w-4" />
              </span>
              </button>
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
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-[#07BEB8] text-black flex items-center justify-center"
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
              <button className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-[#07BEB8]/50 text-[#FFF] text-sm hover:bg-[#07BEB8]/10 transition-all duration-300">
                View Case Study
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>

            {/* ───── Right Slider ───── */}
            <div className="w-full lg:w-[70%] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${index} * 72%))`,
                  gap: "24px",
                }}
              >
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 cursor-pointer"
                    style={{ width: "calc(72% - 12px)" }}
                    onClick={() => setIndex(i)}
                  >
                    <div className="rounded-2xl overflow-hidden border-[3px] border-[#cccccca1] transition-all duration-500">
                      <div className="relative">
                        <img
                          src={p.image}
                          className="w-full h-auto object-cover"
                          alt={p.title}
                          loading="lazy"
                        />
                        {i !== index && (
                          <div className="absolute inset-0 bg-[#021b1a]/40" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile dot indicators */}
              <div className="flex gap-2 mt-5 lg:hidden">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-[#07BEB8]"
                        : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
