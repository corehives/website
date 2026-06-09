import { useState } from "react";
import { Search } from "lucide-react";
import hero_bg    from "../../assets/hero-bgs.webp";
import leftLight  from "../../assets/left-light.png";
import rightLight from "../../assets/right-light.png";
import Cloud      from "../../assets/icons/cloud.png";
import BannerRightAnimation from "../animations/bannerRight";
import BannerLeftAnimation  from "../animations/bannerleft";

export default function BlogsHero({ onSearch }) {
  const [query,   setQuery]   = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="blogs-hero"
      className="relative z-0 flex w-full items-center justify-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero_bg}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-90"
        />
      </div>

      {/* ── Left light ── */}
      <img
        src={leftLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
      />

      {/* ── Right light ── */}
      <img
        src={rightLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-24 text-center sm:px-12 md:px-20 lg:px-32">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium tracking-widest text-white uppercase">
            CoreHives Journal
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1.05] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
          Ideas Worth{" "}
          <span className="precision-gradient">Reading</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white/70 sm:text-base">
          Perspectives on technology, design, and building digital products —
          from the team at CoreHives.
        </p>

        {/* Stats row */}
        <div className="mt-8 flex items-center gap-6 flex-wrap justify-center">
          {[
            { value: "24+",       label: "Articles"  },
            { value: "8",         label: "Topics"    },
            { value: "Bi-weekly", label: "Updates"   },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-white/20" />
              )}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-2xl font-extrabold text-[#07BEB8] leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/35 font-medium">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <form
          onSubmit={(e) => { e.preventDefault(); onSearch?.(query); }}
          className="mt-8 w-full max-w-[520px]"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 10px 10px 20px",
              borderRadius: 50,
              border: `1px solid ${focused ? "rgba(7,190,184,0.48)" : "rgba(255,255,255,0.12)"}`,
              background: focused
                ? "rgba(7,190,184,0.06)"
                : "rgba(255,255,255,0.06)",
              boxShadow: focused
                ? "0 0 0 4px rgba(7,190,184,0.07), 0 8px 32px rgba(7,190,184,0.08)"
                : "none",
              backdropFilter: "blur(12px)",
              transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
            }}
          >
            <Search size={15} style={{ color: "rgba(7,190,184,0.65)", flexShrink: 0 }} />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); onSearch?.(e.target.value); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search 24+ articles…"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: 15,
                color: "#ffffff",
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              className="shrink-0 rounded-full border border-white/50 px-5 py-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ── Right banner animation + Cloud icon ── */}
      <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
        <BannerRightAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
            <img src={Cloud} alt="" aria-hidden="true" className="w-12 h-12 object-contain filter brightness-125" />
          </div>
        </div>
      </div>

      {/* ── Left banner animation + Cloud icon ── */}
      <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
        <BannerLeftAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
            <img src={Cloud} alt="" aria-hidden="true" className="w-12 h-12 object-contain filter brightness-125" />
          </div>
        </div>
      </div>

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </section>
  );
}
