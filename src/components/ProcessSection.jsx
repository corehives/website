import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ── Icons mirroring the blueprint & strategy styling with Tech Stack accents ─
function DiscoveryIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="8" width="28" height="28" rx="3" />
      <path d="M6 16h28M6 24h18M14 8v28M22 8v28" opacity="0.35" />
      <path d="M22 26l16 14H22V26z" />
      <path d="M26 34l6 6H26v-6z" opacity="0.55" />
      <path d="M34 6l6 6-18 18-6 1 1-6L34 6z" />
    </svg>
  );
}

function StrategyIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.2-1.9 6-4.6 7.3-.9.5-1.4 1.4-1.4 2.4V31h-4v-1.3c0-1-.5-1.9-1.4-2.4C17.9 26 16 23.2 16 20z" />
      <path d="M20 35h8M22 39h4" />
      <circle cx="24" cy="20" r="3" />
      <path
        d="M24 14v2M24 24v2M18 20h2M28 20h2M19.8 15.8l1.4 1.4M26.8 22.8l1.4 1.4M19.8 24.2l1.4-1.4M26.8 17.2l1.4-1.4"
        opacity="0.65"
      />
      <path d="M24 4v3M12 9l2.2 2.2M36 9l-2.2 2.2M8 20h3M37 20h3" opacity="0.5" />
    </svg>
  );
}

function DesignIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="8" width="36" height="28" rx="4" />
      <path d="M6 16h36" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      <circle cx="22" cy="12" r="1.5" fill="currentColor" />
      <rect x="11" y="21" width="10" height="10" rx="1.5" opacity="0.6" />
      <path d="M26 21h11M26 26h11M26 31h7" opacity="0.6" />
      <path d="M36 28l6 6-4 4-6-6 4-4z" />
      <path d="M38 30l2 2" />
    </svg>
  );
}

function DevelopmentIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="8" width="36" height="28" rx="4" />
      <path d="M6 16h36" />
      <path d="M14 26l-4 4 4 4M22 26l4 4-4 4M19 24l-2 12" />
      <path d="M30 26h8M30 31h5" opacity="0.6" />
    </svg>
  );
}

function TestingIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 6l14 5v11c0 9.5-6.2 16.5-14 19-7.8-2.5-14-9.5-14-19V11l14-5z" />
      <path d="M18 24l4 4 8-8" />
    </svg>
  );
}

function LaunchIcon({ className = "w-7 h-7 text-[#07BEB8]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M30 6c-6 0-12 4-15 11l-5 5 8 8 5-5c7-3 11-9 11-15 0-2-2-4-4-4l-5 5z" />
      <circle cx="28" cy="16" r="2.5" fill="currentColor" />
      <path d="M18 28l-6 6v4h4l6-6" opacity="0.7" />
      <path d="M8 38l4-4M14 44l4-4" opacity="0.5" />
      <path d="M38 12l4-4M34 22l6 1" opacity="0.5" />
    </svg>
  );
}

// ── Process Cards Data ────────────────────────────────────────────────────────
const processSteps = [
  {
    title: "Discovery",
    icon: DiscoveryIcon,
    points: [
      "Understand Your Business Goals",
      "Identify The Target Audience",
      "Analyze Competitors And Trends",
      "Plan Website Structure",
      "Decide Timeline And Deliverables",
    ],
  },
  {
    title: "Strategy",
    icon: StrategyIcon,
    points: [
      "Define The Website's Goals And KPIs",
      "Create Website Structure",
      "Plan UI/UX And SEO Strategies",
      "Identify Content Requirements",
      "Decide Strategic Placement Of CTA's",
    ],
  },
  {
    title: "UI/UX Design",
    icon: DesignIcon,
    points: [
      "Create Wireframes And User Flows",
      "Design Intuitive UI/UX Interfaces",
      "Develop Interactive Clickable Prototypes",
      "Establish Design Systems And Style Guides",
      "Gather Feedback And Refine Assets",
    ],
  },
  {
    title: "Development",
    icon: DevelopmentIcon,
    points: [
      "Develop Clean Front-End Interfaces",
      "Build Robust Back-End Architecture",
      "Integrate APIs, CRMs And Payment Gateways",
      "Ensure Full Mobile Responsiveness",
      "Optimize For Speed And SEO Performance",
    ],
  },
  {
    title: "Quality Assurance",
    icon: TestingIcon,
    points: [
      "Perform Cross-Browser & Device Testing",
      "Conduct Rigorous Security & Speed Audits",
      "Test Forms, Workflows And Integrations",
      "Validate Accessibility (WCAG) Compliance",
      "Fix Bugs And Fine-Tune Performance",
    ],
  },
  {
    title: "Launch & Support",
    icon: LaunchIcon,
    points: [
      "Execute Seamless Zero-Downtime Deployment",
      "Setup Analytics, Tracking And Search Console",
      "Provide Admin Training & Documentation",
      "Monitor Post-Launch Performance",
      "Deliver Ongoing SLA Support And Maintenance",
    ],
  },
];

export default function ProcessSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardStep = 320;
    el.scrollBy({ left: direction * cardStep, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Our Process"
      className="section-auto-render relative w-full overflow-hidden bg-[#000405] pt-12 pb-10 sm:py-16 lg:py-24 border-b border-white/5"
    >
      {/* ── Background Crosshair Grid Pattern ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="process-cross-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
            <path
              d="M 27 30 L 33 30 M 30 27 L 30 33"
              stroke="rgba(7, 190, 184, 0.25)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#process-cross-grid)" />
      </svg>

      {/* Subtle Background Mesh Glows (matching Our Tech Stack) */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 w-[400px] h-[400px] z-0 opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 w-[400px] h-[400px] z-0 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ── Left Column: Headline & Description ── */}
          <div className="flex flex-col items-start lg:col-span-5 lg:sticky lg:top-28">
            {/* Pill Eyebrow Badge — Styled like Our Tech Stack */}
            <span className="inline-block text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/[0.06]">
              Our Process
            </span>

            {/* Headline with Precision Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.18] text-white tracking-tight mt-1">
              Website Design &amp;
              <br />
              Development,
              <br />
              <span className="precision-gradient">Built Around You</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/50">
              Our portfolio of successful projects reflects our systematic
              framework to web design and web development. By focusing on your
              business goals, user expectations, and technology stack, we
              create high-performing websites that generate real business
              results.
            </p>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous step"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#07BEB8] hover:bg-[#07BEB8] hover:text-black hover:shadow-[0_0_16px_rgba(7,190,184,0.35)] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-white/70 disabled:hover:border-white/20 disabled:hover:shadow-none"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canScrollRight}
                aria-label="Next step"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#07BEB8] hover:bg-[#07BEB8] hover:text-black hover:shadow-[0_0_16px_rgba(7,190,184,0.35)] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-white/70 disabled:hover:border-white/20 disabled:hover:shadow-none"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              <span className="ml-2 text-xs font-semibold tracking-[0.2em] text-[#07BEB8]/80 uppercase">
                Step-by-Step Flow
              </span>
            </div>
          </div>

          {/* ── Right Column: Process Cards Carousel Track ── */}
          <div className="relative w-full overflow-hidden lg:col-span-7">
            {/* Right edge fade gradient */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 sm:w-24 bg-gradient-to-l from-[#000405] via-[#000405]/80 to-transparent sm:block"
              aria-hidden="true"
            />

            <div
              ref={scrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="group snap-start w-[285px] sm:w-[325px] shrink-0 rounded-2xl border border-white/5 bg-[#031111]/40 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#07BEB8]/40 hover:bg-[#051e1e]/50 hover:shadow-[0_0_30px_rgba(7,190,184,0.2)] flex flex-col justify-between min-h-[460px] select-none"
                  >
                    <div>
                      {/* Logo Box (styled like Tech Stack's icon box) */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#000405]/80 border border-white/10 transition-all duration-300 group-hover:border-[#07BEB8]/50 group-hover:shadow-[0_0_20px_rgba(7,190,184,0.2)]">
                        <IconComponent className="h-7 w-7 text-[#07BEB8] transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Title */}
                      <h3 className="mb-6 text-2xl font-bold text-white tracking-tight group-hover:text-[#07BEB8] transition-colors duration-200">
                        {step.title}
                      </h3>

                      {/* Points List */}
                      <ul className="flex flex-col gap-4">
                        {step.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-left"
                          >
                            <span
                              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#07BEB8] shadow-[0_0_8px_#07BEB8]"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium leading-snug text-white/80 group-hover:text-white transition-colors duration-200">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
