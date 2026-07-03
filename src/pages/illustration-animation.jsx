import { lazy, Suspense, useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import Animation from "../assets/animation.png";
import WebWork from "../assets/work.png";
import Analytic from "../assets/icons/analytic.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import Cloud from "../assets/icons/cloud.png";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import avatar5 from "../assets/avatar-7.png";
import avatar4 from "../assets/avatar-8.png";
import avatar6 from "../assets/avatar-9.png";
import BgApp from "../assets/bg-app.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import illustrationAnimationPricingPlans from "../components/pricing/illustrationAnimationPricingData.json";
import {
  SiFigma,
  SiBlender,
  SiLottiefiles,
  SiCinema4D,
  SiFramer,
  SiDribbble,
  SiDavinciresolve,
  SiSketch,
  SiCanva,
  SiInkscape,
  SiAffinitydesigner,
  SiThreedotjs,
  SiUnrealengine,
  SiUnity,
  SiSketchup,
} from "react-icons/si";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

const services = [
  {
    title: "2D Illustration & Character Design",
    description:
      "Custom illustration systems, character design, and editorial artwork — built to a consistent style that works across web, mobile, print, and social media without losing visual cohesion.",
  },
  {
    title: "Motion Graphics & Explainer Video",
    description:
      "Animated explainer videos, product demos, and motion graphics that communicate complex ideas clearly in 60–90 seconds. Script, storyboard, animation, and sound design — end to end.",
  },
  {
    title: "Lottie UI Animations",
    description:
      "Lightweight, scalable Lottie JSON animations for web and mobile — micro-interactions, onboarding flows, loading states, and success animations that delight users and boost retention.",
  },
  {
    title: "Social & Brand Motion Content",
    description:
      "Animated social media assets, brand intros, logo animations, and digital advertising motion — built to your brand guidelines and formatted for every platform out of the box.",
  },
];

const whyItems = [
  {
    id: "craft",
    title: "Craft-Level Motion Quality",
    description:
      "We treat timing, easing, and rhythm as crafts — not afterthoughts. Every animation is frame-accurate with intentional motion language that reinforces your brand personality.",
  },
  {
    id: "lottie",
    title: "Developer-Ready Lottie Deliverables",
    description:
      "All UI animations exported as Lottie JSON — lightweight, vector-based, and drop-in ready for React, Vue, iOS, Android, and Flutter without any additional engineering.",
  },
  {
    id: "script",
    title: "Script Writing Included",
    description:
      "For explainer videos, our copywriters craft the narrative before a frame is animated. A weak script produces a weak video — we write tight, conversion-focused scripts as standard.",
  },
  {
    id: "brand",
    title: "Brand-Consistent Visual Language",
    description:
      "Every illustration and animation is built within your existing brand system — or we establish a new one. Visual language is never invented randomly; it's designed to be owned.",
  },
  {
    id: "formats",
    title: "Every Format, No Extra Charge",
    description:
      "Final delivery includes MP4, WebM, GIF, Lottie JSON, and source files in every format you need. No nickel-and-diming on export formats.",
  },
];

const techTabData = {
  "Motion Tools": [
    {
      label: "Lottie",
      icon: (
        <SiLottiefiles
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#00DDB4" }}
        />
      ),
    },
    {
      label: "Framer",
      icon: (
        <SiFramer
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#0055FF" }}
        />
      ),
    },
    {
      label: "Cinema 4D",
      icon: (
        <SiCinema4D
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#5E6AD2" }}
        />
      ),
    },
    {
      label: "Blender",
      icon: (
        <SiBlender
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F5792A" }}
        />
      ),
    },
    {
      label: "DaVinci Resolve",
      icon: (
        <SiDavinciresolve
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#6ABFDB" }}
        />
      ),
    },
    {
      label: "Figma",
      icon: (
        <SiFigma
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F24E1E" }}
        />
      ),
    },
  ],
  Illustration: [
    {
      label: "Figma",
      icon: (
        <SiFigma
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F24E1E" }}
        />
      ),
    },
    {
      label: "Sketch",
      icon: (
        <SiSketch
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F7B500" }}
        />
      ),
    },
    {
      label: "Dribbble",
      icon: (
        <SiDribbble
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#EA4C89" }}
        />
      ),
    },
    {
      label: "Canva",
      icon: (
        <SiCanva
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#00C4CC" }}
        />
      ),
    },
    {
      label: "Inkscape",
      icon: (
        <SiInkscape
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "Affinity Designer",
      icon: (
        <SiAffinitydesigner
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#1B72BE" }}
        />
      ),
    },
  ],
  "3D & Effects": [
    {
      label: "Cinema 4D",
      icon: (
        <SiCinema4D
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#5E6AD2" }}
        />
      ),
    },
    {
      label: "Blender",
      icon: (
        <SiBlender
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F5792A" }}
        />
      ),
    },
    {
      label: "Three.js",
      icon: (
        <SiThreedotjs
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "Unreal Engine",
      icon: (
        <SiUnrealengine
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "Unity",
      icon: (
        <SiUnity
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "SketchUp",
      icon: (
        <SiSketchup
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#005F9E" }}
        />
      ),
    },
  ],
};

export default function IllustrationAnimation() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [openId, setOpenId] = useState("craft");
  const [activeTechTab, setActiveTechTab] = useState("Motion Tools");

  return (
    <>
      {/* BANNER */}
      <section
        id="home"
        className="relative z-0 flex w-full items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt="hero-bg"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 mt-10 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Illustration & Motion Design
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            Stories That <span className="precision-gradient">Move</span>
            <br />
            Your Audience
          </h1>
          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            Custom illustration systems and motion content that communicate
            faster, convert better, and make your brand impossible to scroll
            past.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
          <BannerRightAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
              <img
                src={Cloud}
                alt="cloud icon"
                className="w-12 h-12 object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
          <BannerLeftAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
              <img
                src={Cloud}
                alt="cloud icon"
                className="w-12 h-12 object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HERO CONTENT */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative group overflow-hidden">
              <img
                src={Animation}
                alt="illustration animation"
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 text-center xl:text-left">
              <span
                className="inline-block text-[11px] tracking-[0.25em] uppercase mb-5 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(7,190,184,0.12)",
                  border: "1px solid rgba(7,190,184,0.35)",
                  color: "#FFF",
                }}
              >
                Motion that converts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Illustration &{" "}
                <span className="precision-gradient">Animation Services</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-center xl:text-left">
              Static content gets scrolled past. Motion content gets shared,
              remembered, and acted on.
              <br />
              <br />
              CoreHives creates illustration systems and motion content that
              communicate your product's value in seconds — explainer videos,
              Lottie UI animations, brand motion packages, and social content
              built to move audiences from awareness to action.
            </p>
            <div className="flex items-center flex-wrap gap-4 pt-4">
              <CTAButton href="/contact">Build Creative Project</CTAButton>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-start relative h-32">
                  <div
                    className="relative flex-shrink-0"
                    style={{ zIndex: 30 }}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={avatar4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0"
                    style={{ marginLeft: "-20px", zIndex: 20 }}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={avatar5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0"
                    style={{ marginLeft: "-20px", zIndex: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={avatar6}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0  -mt-1"
                    style={{ marginLeft: "-20px", zIndex: 0 }}
                  >
                    <div className="w-9 h-9 rounded-full border-4 border-gray-300 bg-gray-100 flex items-center justify-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                      <div className="w-2 h-2 rounded-full bg-[#07beb89c]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#07BEB8]">
                    500+
                  </span>
                  <span className="text-gray-400 text-sm">
                    Animations Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section
        className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgApp})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Bringing your ideas
                <br />
                to life visually{" "}
                <span className="precision-gradient">through:</span>
              </h2>
            </div>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                    className="w-full flex items-start justify-between p-4 rounded-lg border border-white/10 hover:border-[#07BEB8]/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#07BEB8] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 ml-4 text-[#07BEB8] transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-0"}`}
                  >
                    <div className="px-4 py-3 text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-[#07BEB8] ml-2">
                      {service.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Motion Work That{" "}
              <span className="precision-gradient">Delivered Results</span>{" "}
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
              Explainer videos, UI animation systems, and brand motion packages
              — built for measurable business outcomes, not just aesthetic
              awards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  1200% More
                  <br />
                  Social Shares
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Animated Content Outperforms Static Posts Across Every Major
                  Social Platform — Consistently & Measurably.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  60fps Lottie
                  <br />
                  UI Animations
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lightweight, Developer-Ready Lottie JSON That Drops Into Any
                  React, Flutter, or iOS Build Instantly.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-900/20 to-transparent">
                <img
                  src={WebWork}
                  alt="animation work"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-2 flex items-center justify-between">
                <div className="flex mx-auto items-center gap-3">
                  <div className="flex items-center">
                    <img
                      src={avatar4}
                      alt=""
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <img
                      src={avatar5}
                      alt=""
                      className="w-15 h-15 rounded-full object-cover -ml-6"
                    />
                    <img
                      src={avatar6}
                      alt=""
                      className="w-15 h-15 rounded-full object-cover -ml-6"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">
                      500+
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Animations Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  80% Landing Page
                  <br />
                  Conversion Lift
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Explainer Videos on Landing Pages Consistently Outperform
                  Static Alternatives by 40–80% on Conversion Rate.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Multi-Format
                  <br />
                  Final Delivery
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  MP4, WebM, GIF, Lottie JSON & Source Files Delivered as
                  Standard — No Extra Charge for Format Variants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COREHIVES */}
      <section className="bg-black px-5 sm:px-10 lg:px-20 py-10 sm:py-15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why CoreHives{" "}
              <span className="precision-gradient">Motion Work</span> Converts
            </h2>
            <p className="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-sm">
              Craft-level animation built for commercial outcomes — not just
              aesthetics.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {whyItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#2a2a2a] bg-[#141414]" : "border-[#1f1f1f] bg-[#0f0f0f]"}`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </span>
                    <span className="flex-shrink-0 ml-4 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out px-5 ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"} overflow-hidden`}
                  >
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection
        plans={illustrationAnimationPricingPlans}
        eyebrow="Transparent creative project pricing"
        title="Motion design packages built for every production scale"
        description="From single Lottie animations to full explainer video + brand motion systems — structured engagements with clear deliverables and zero revision surprises."
        savingsLabel="Save up to 20% on ongoing motion retainers"
        footerNote="Need a custom motion scope or full animation system?"
        footerDescription="We also quote multi-video campaigns, complete UI animation libraries, 3D integration projects, and ongoing brand motion retainers."
        footerCtaText="Discuss your motion scope"
        footerCtaHref="/contact"
        showToggle={false}
        showPeriod={false}
      />

      {/* MOTION TOOLS */}
      <section className="relative px-6 pt-10 pb-20 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Motion Tools &{" "}
              <span className="precision-gradient">Expertise</span>{" "}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Industry-standard animation and illustration tools operated by
              senior motion designers with 5+ years of production experience.
            </p>
          </div>
          <div className="grid grid-cols-3 max-w-md mx-auto gap-2 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-4 mb-10 sm:mb-12">
            {["Motion Tools", "Illustration", "3D & Effects"].map((tab) => {
              const active = tab === activeTechTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTechTab(tab)}
                  className={`px-3 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-medium transition-all border whitespace-nowrap ${
                    active
                      ? "bg-[#07BEB8] text-white border-[#07BEB8] shadow-[0_0_25px_rgba(7,190,184,0.45)]"
                      : "bg-transparent text-gray-200 border-white/25 hover:border-white/50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {techTabData[activeTechTab].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border border-white/40 hover:border-[#07BEB8]/60 hover:shadow-[0_0_25px_rgba(7,190,184,0.15)] transition-all cursor-pointer group h-32 sm:h-36"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-white text-center">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
