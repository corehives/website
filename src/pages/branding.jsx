import { lazy, Suspense, useState } from "react";
import hero_bg   from "../assets/hero-bgs.webp";
import BrandingShowcase from "../assets/branding-showcase.png";
import Cloud     from "../assets/icons/cloud.png";
import leftLight  from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import BgApp     from "../assets/bg-app.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation  from "../components/animations/bannerleft";
import BrandingHero3D       from "../components/animations/BrandingHero3D";
import {
  ArrowRight, Target, Layers, Package,
  Search, Compass, Settings, Zap, Palette,
} from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import brandingPricingPlans from "../components/pricing/brandingPricingData.json";
import useScrollReveal from "../hooks/useScrollReveal.js";
import {
  SiFigma, SiSketch, SiCanva, SiFramer, SiMiro, SiInvision,
  SiBlender, SiNotion, SiAirtable, SiLinear, SiWebflow,
} from "react-icons/si";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

/* ─── data ─────────────────────────────────────────────────────────────────── */

const services = [
  {
    number: "01", icon: Palette,
    title: "Brand Identity Design",
    description:
      "Your logo, colour palette, typography, and visual language, all built as a cohesive system. Identities that are instantly recognisable and built to last across every touchpoint.",
  },
  {
    number: "02", icon: Target,
    title: "Brand Strategy & Positioning",
    description:
      "Positioning, messaging hierarchy, tone of voice, and competitive differentiation. Strategy that gives every design decision a clear reason to exist, and a measurable business objective.",
  },
  {
    number: "03", icon: Layers,
    title: "Visual Brand Systems",
    description:
      "Scalable component libraries, brand guidelines, and asset management frameworks. Your team can create new materials in-house without losing consistency or diluting the brand.",
  },
  {
    number: "04", icon: Package,
    title: "Brand Collateral & Print",
    description:
      "Business cards, decks, packaging, signage, and campaign assets, all produced within your brand system to a premium standard, print-ready and digitally optimised.",
  },
];

const processSteps = [
  { number: "01", icon: Search,  title: "Discovery",  description: "Deep-dive market analysis and audience research to find your brand's unique positioning space." },
  { number: "02", icon: Compass, title: "Strategy",   description: "Define messaging hierarchy, tone of voice, and brand narrative that resonates with your market." },
  { number: "03", icon: Palette, title: "Design",     description: "Create the visual identity, logo, colour system, typography, as a fully cohesive design language." },
  { number: "04", icon: Settings, title: "Build",     description: "Produce the complete brand system, guidelines, templates, and asset library your team can own." },
  { number: "05", icon: Zap,     title: "Launch",     description: "Deploy your brand across all channels with full handover documentation and team training." },
];

const stats = [
  { value: "150+", label: "Brands Built"      },
  { value: "12+",  label: "Industries"        },
  { value: "5★",   label: "Avg Rating"        },
  { value: "100%", label: "Design Ownership"  },
];

const whyItems = [
  { id: "research",    title: "Research-Led Brand Positioning",    description: "Every brand decision is grounded in market research, competitor analysis, and audience insight, not aesthetic preference. We find the white space in your market and build your brand to own it." },
  { id: "system",      title: "Brand Systems, Not Just Logos",      description: "We don't deliver a logo and disappear. Every engagement produces a complete brand system, guidelines, templates, and component libraries your team can actually use." },
  { id: "commercial",  title: "Commercially Focused Design",        description: "Beautiful brands that don't convert are expensive art. We design with conversion, recall, and market share in mind, every visual choice serves a commercial objective." },
  { id: "consistency", title: "Multi-Channel Brand Consistency",    description: "From digital to print to environmental design, your brand looks and feels identical across every touchpoint. Consistency builds trust. Trust builds revenue." },
  { id: "handover",    title: "Fully Documented Handover",          description: "Every brand project closes with a comprehensive brand book, asset library, usage guidelines, and a team training session. You own your brand completely." },
];

/* Adobe-style letter badge, matches the official product icon visual language */
const ab = (letters, fg, bg) => (
  <div
    className="w-11 h-11 rounded-[9px] flex items-center justify-center font-black text-[15px] tracking-tight select-none"
    style={{ background: bg, color: fg, fontFamily: "system-ui, sans-serif" }}
  >
    {letters}
  </div>
);

/* si helper, keeps icon size uniform */
const si = (Comp, color) => (
  <Comp className="w-11 h-11" style={{ color }} />
);

const toolsByTab = {
  "Design Tools": [
    { label: "Figma",    color: "#F24E1E", iconEl: si(SiFigma,    "#F24E1E"), desc: "UI & Identity Design"  },
    { label: "Sketch",   color: "#F7B500", iconEl: si(SiSketch,   "#F7B500"), desc: "Vector Artboards"      },
    { label: "Framer",   color: "#0055FF", iconEl: si(SiFramer,   "#0055FF"), desc: "Interactive Prototypes" },
    { label: "InVision", color: "#FF3366", iconEl: si(SiInvision, "#FF3366"), desc: "Design Handoff"         },
    { label: "Webflow",  color: "#4353FF", iconEl: si(SiWebflow,  "#4353FF"), desc: "Web Design"             },
    { label: "Canva",    color: "#00C4CC", iconEl: si(SiCanva,    "#00C4CC"), desc: "Brand Templates"        },
  ],
  "Brand Strategy": [
    { label: "Miro",      color: "#FFD02F", iconEl: si(SiMiro,     "#FFD02F"), desc: "Visual Workshops"   },
    { label: "Notion",    color: "#CCCCCC", iconEl: si(SiNotion,   "#CCCCCC"), desc: "Strategy Briefs"    },
    { label: "Figma",     color: "#F24E1E", iconEl: si(SiFigma,    "#F24E1E"), desc: "Brand Systems"      },
    { label: "Airtable",  color: "#18BFFF", iconEl: si(SiAirtable, "#18BFFF"), desc: "Asset Management"   },
    { label: "Linear",    color: "#5E6AD2", iconEl: si(SiLinear,   "#5E6AD2"), desc: "Project Workflow"   },
    { label: "Canva",     color: "#00C4CC", iconEl: si(SiCanva,    "#00C4CC"), desc: "Client Decks"       },
  ],
  "Motion & Print": [
    { label: "After Effects", color: "#9999FF", iconEl: ab("Ae", "#9999FF", "#00005B"), desc: "Motion Graphics"  },
    { label: "Premiere Pro",  color: "#E040FB", iconEl: ab("Pr", "#E040FB", "#1A0033"), desc: "Video Production" },
    { label: "Blender",       color: "#E87D0D", iconEl: si(SiBlender, "#E87D0D"),       desc: "3D Animation"     },
    { label: "Photoshop",     color: "#31A8FF", iconEl: ab("Ps", "#31A8FF", "#001E36"), desc: "Image Production" },
    { label: "InDesign",      color: "#EE3D8F", iconEl: ab("Id", "#EE3D8F", "#30002C"), desc: "Print & Layout"   },
    { label: "Illustrator",   color: "#FF9A00", iconEl: ab("Ai", "#FF9A00", "#330000"), desc: "Vector Artwork"   },
  ],
};

const TAB_DESCS = {
  "Design Tools":    "Core visual design software for crafting brand identities, digital interfaces, and scalable design systems, from initial concept to production-ready assets.",
  "Brand Strategy":  "Collaboration, documentation, and ideation tools that power the strategic research and systematic thinking behind every brand identity we deliver.",
  "Motion & Print":  "Production-grade software for motion branding, video content, and premium print collateral across every physical and digital brand touchpoint.",
};

const PALETTE_DOTS = ["#07BEB8", "#FF6B6B", "#FFE66D", "#C9B1FF", "#A8E6CF", "#FFA07A"];

/* ─── component ─────────────────────────────────────────────────────────────── */

export default function Branding() {
  const [openId,        setOpenId]        = useState("research");
  const [activeTechTab, setActiveTechTab] = useState("Design Tools");
  const [toolFade,      setToolFade]      = useState(true);

  const switchTab = (tab) => {
    if (tab === activeTechTab) return;
    setToolFade(false);
    setTimeout(() => {
      setActiveTechTab(tab);
      requestAnimationFrame(() => setToolFade(true));
    }, 180);
  };

  /* scroll-reveal refs */
  const r0 = useScrollReveal(80);
  const r1 = useScrollReveal(0);
  const r2 = useScrollReveal(0);
  const r3 = useScrollReveal(0);
  const r4 = useScrollReveal(0);
  const r5 = useScrollReveal(0);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          BANNER
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative z-0 flex w-full items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg} alt="hero-bg" loading="eager" fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>
        <img src={leftLight}  alt="" aria-hidden="true" loading="eager" fetchPriority="high"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />
        <img src={rightLight} alt="" aria-hidden="true" loading="eager" fetchPriority="high"
          className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 mt-10 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">Brand Identity & Strategy</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>

          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            A Brand That Makes You{" "}
            <span className="precision-gradient">Impossible</span>
            <br />
            to Ignore
          </h1>

          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            Strategic brand identities that position your business for the market it deserves, designed to be remembered, trusted, and chosen.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">
              Start Your Brand Project
            </CTAButton>
          </div>
        </div>

        {/* electric-path decorations */}
        <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
          <BannerRightAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
              <img src={Cloud} alt="cloud icon" className="w-12 h-12 object-contain filter brightness-125" />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
          <BannerLeftAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
              <img src={Cloud} alt="cloud icon" className="w-12 h-12 object-contain filter brightness-125" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HERO SHOWCASE ,  3D canvas + text
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(7,190,184,0.06) 0%, transparent 70%)" }}
        />

        <div ref={r0} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 3-D canvas, gradient-border wrapper */}
          <div
            className="relative h-[420px] md:h-[520px] rounded-[18px] p-px"
            style={{
              background: "linear-gradient(135deg, rgba(7,190,184,0.55) 0%, rgba(7,190,184,0.12) 40%, rgba(51,68,255,0.22) 70%, rgba(7,190,184,0.45) 100%)",
              boxShadow: "0 0 48px rgba(7,190,184,0.09), 0 0 100px rgba(7,190,184,0.04)",
            }}
          >
            {/* inner container, transparent so the neural net floats on the page bg */}
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{ background: "radial-gradient(ellipse 65% 55% at 50% 35%, rgba(7,190,184,0.04) 0%, transparent 70%)" }}
            >
              <BrandingHero3D />

              {/* bottom overlay bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(to top, rgba(2,6,23,0.65) 0%, transparent 100%)" }}
              >
                <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">Neural Identity System</span>
                <div className="flex gap-1.5">
                  {PALETTE_DOTS.map((c, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="space-y-6">
            <span
              className="inline-block text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
              style={{ background: "rgba(7,190,184,0.12)", border: "1px solid rgba(7,190,184,0.35)", color: "#FFF" }}
            >
              Brand that converts
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Branding &amp; <br />
              <span className="precision-gradient">Visual Identity</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Your brand is the first thing your market judges you on, before your product, before your pricing, before a single conversation.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              CoreHives builds brand identities that communicate authority, build trust, and create the emotional connection that turns first impressions into long-term loyalty.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <CTAButton href="/contact">
                Start Your Brand Project
              </CTAButton>
            </div>

            {/* count */}
            <div className="flex items-center gap-6 pt-2">
              <div>
                <p className="text-2xl font-bold text-[#07BEB8] leading-none">110+</p>
                <p className="text-gray-400 text-xs mt-0.5">Clients Servered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND MANIFESTO
      ══════════════════════════════════════════════════════════════ */}
      <section ref={r1} className="relative py-28 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(7,190,184,0.07) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8] mb-6">
            The CoreHives Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            We don&apos;t just design logos.
            We build the visual language
            that makes your market{" "}
            <span className="precision-gradient">choose&nbsp;you.</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            Every decision rooted in research. Every design built to scale. Every brand delivered as a complete system you own outright.
          </p>

          {/* stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 hover:border-[#07BEB8]/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-[#07BEB8] mb-2">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND SERVICES  (card grid)
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={r2}
        className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8] mb-3">What We Build</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Brand services that<br />
              <span className="precision-gradient">dominate your market</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl p-7 border border-white/10 hover:border-[#07BEB8]/50 bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                >
                  <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#07BEB8]/50 mb-4 block">
                    {svc.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#07BEB8]/10 group-hover:bg-[#07BEB8]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#07BEB8]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.description}</p>

                  {/* hover glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(ellipse 60% 60% at 30% 30%, rgba(7,190,184,0.07) 0%, transparent 70%)" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND PROCESS , alternating spine timeline
      ══════════════════════════════════════════════════════════════ */}
      <section ref={r3} className="relative py-10 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">

        {/* Dot-grid atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(7,190,184,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(7,190,184,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="mb-15 text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#07BEB8]/25 bg-[#07BEB8]/[0.07] px-5 py-2 mb-6 backdrop-blur-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]"
                style={{ boxShadow: "0 0 6px rgba(7,190,184,0.8)" }}
              />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8]">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Five steps.{" "}
              <span className="precision-gradient">One market-ready brand.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              A research-led, commercially focused methodology that takes your brand from a white page to a system your market can't ignore.
            </p>
          </div>

          {/* ── Desktop: alternating spine timeline ── */}
          <div className="hidden md:block">
            <div className="relative">

              {/* Central glowing spine */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(7,190,184,0.45) 10%, rgba(7,190,184,0.45) 90%, transparent 100%)",
                }}
              />

              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;

                /* icon block, reused on whichever side gets the icon */
                const iconEl = (
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    {/* Soft outer glow */}
                    <div
                      className="absolute -inset-5 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(ellipse at center, rgba(7,190,184,0.16) 0%, transparent 70%)" }}
                    />
                    {/* Icon card */}
                    <div
                      className="relative w-[76px] h-[76px] rounded-2xl flex items-center justify-center overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(7,190,184,0.16) 0%, rgba(7,190,184,0.04) 100%)",
                        border: "1px solid rgba(7,190,184,0.28)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Card inner hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(135deg, rgba(7,190,184,0.24) 0%, rgba(7,190,184,0.08) 100%)" }}
                      />
                      <Icon className="relative w-7 h-7 text-[#07BEB8]" />
                    </div>
                    {/* Step tag */}
                    <div className="mt-3 flex justify-center">
                      <span
                        className="text-[9px] font-mono tracking-[0.3em] px-2.5 py-1 rounded-full text-[#07BEB8]/55"
                        style={{
                          border: "1px solid rgba(7,190,184,0.2)",
                          background: "rgba(7,190,184,0.06)",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                );

                /* text block, right-aligned when on the left column */
                const textRight = (
                  <div className="max-w-[265px] text-right ml-auto">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#07BEB8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div
                      className="h-px w-8 ml-auto mb-3 transition-all duration-500 group-hover:w-14"
                      style={{ background: "linear-gradient(270deg, #07BEB8, transparent)" }}
                    />
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                );

                /* text block, left-aligned when on the right column */
                const textLeft = (
                  <div className="max-w-[265px]">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#07BEB8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div
                      className="h-px w-8 mb-3 transition-all duration-500 group-hover:w-14"
                      style={{ background: "linear-gradient(90deg, #07BEB8, transparent)" }}
                    />
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                );

                return (
                  <div key={i} className="group grid grid-cols-[1fr_100px_1fr] items-center py-14 relative">

                    {/* Giant watermark number */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 font-black text-white leading-none select-none pointer-events-none"
                      style={{ fontSize: "9.5rem", opacity: 0.026, letterSpacing: "-0.04em" }}
                    >
                      {step.number}
                    </span>

                    {/* Left column */}
                    <div className="flex items-center justify-end pr-10">
                      {isLeft ? iconEl : textRight}
                    </div>

                    {/* Centre: glowing node on the spine */}
                    <div className="relative flex items-center justify-center z-10">
                      <div className="absolute w-14 h-14 rounded-full border border-[#07BEB8]/12 group-hover:border-[#07BEB8]/38 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute w-8 h-8 rounded-full border border-[#07BEB8]/25 group-hover:border-[#07BEB8]/65 group-hover:scale-110 transition-all duration-500" />
                      <div
                        className="relative z-10 w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-[1.3]"
                        style={{
                          background: "radial-gradient(circle, #c4f8f6 0%, #07BEB8 65%)",
                          boxShadow: "0 0 8px rgba(7,190,184,0.75), 0 0 22px rgba(7,190,184,0.38)",
                        }}
                      />
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-start pl-10">
                      {isLeft ? textLeft : iconEl}
                    </div>

                    {/* Row hover radial glow */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(ellipse 55% 85% at 50% 50%, rgba(7,190,184,0.04) 0%, transparent 70%)" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile: glassmorphism card stack ── */}
          <div className="md:hidden flex flex-col gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(7,190,184,0.08) 0%, rgba(7,190,184,0.02) 100%)",
                    border: "1px solid rgba(7,190,184,0.2)",
                  }}
                >
                  {/* Watermark */}
                  <span
                    className="absolute right-3 top-0 font-black text-white leading-none select-none pointer-events-none"
                    style={{ fontSize: "5.5rem", opacity: 0.042 }}
                  >
                    {step.number}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(7,190,184,0.2), rgba(7,190,184,0.07))",
                          border: "1px solid rgba(7,190,184,0.3)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-[#07BEB8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#07BEB8]/45 tracking-wider block">{step.number}</span>
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <div
                      className="h-px w-8 mb-3"
                      style={{ background: "linear-gradient(90deg, #07BEB8, transparent)" }}
                    />
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FEATURED WORK  (bento grid)
      ══════════════════════════════════════════════════════════════ */}
      <section ref={r4} className="relative px-6 py-10 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8] mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="precision-gradient">Brand Work</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
              Brand identities built for growth-stage companies, scale-ups, and enterprise rebrands, each one designed to own its market position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* left column */}
            <div className="flex flex-col gap-5">
              {[
                { Icon: Target, title: "Strategic Brand Positioning", desc: "Research-Led Positioning That Places Your Brand Exactly Where Your Market Can't Ignore It." },
                { Icon: Layers, title: "Identity Systems That Scale",  desc: "Complete Brand Frameworks Your Team Can Use Independently, Without Losing Consistency." },
              ].map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/30 hover:border-[#07BEB8]/60 bg-gradient-to-br from-teal-950/40 via-black/60 to-black/80 p-7 flex-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(7,190,184,0.1)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#07BEB8]/12 group-hover:bg-[#07BEB8]/20 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-[#07BEB8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* centre column */}
            <div className="flex flex-col gap-5">
              <div
                className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[380px]"
                style={{ background: "radial-gradient(ellipse at center, rgba(7,190,184,0.12) 0%, rgba(0,0,0,0.8) 70%)" }}
              >
                <img src={BrandingShowcase} alt="brand work" className="w-full h-full object-contain p-4" />
              </div>

              {/* stat bar */}
              <div className="rounded-2xl border border-[#07BEB8]/30 bg-gradient-to-br from-teal-950/40 via-black/60 to-black/80 p-3 flex items-center justify-between">
                <div className="flex mx-auto items-center gap-3">
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">150+</p>
                    <p className="text-gray-400 text-xs mt-0.5">Brands Delivered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* right column */}
            <div className="flex flex-col gap-5">
              {[
                { Icon: Palette, title: "Premium Visual Identity",        desc: "Logo, Typography, Colour & Motion Guidelines That Command Premium Perception In Every Market." },
                { Icon: Layers,  title: "Cross-Channel Brand Consistency", desc: "Digital, Print & Environmental Design Unified Under One Brand System That Never Breaks." },
              ].map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/30 hover:border-[#07BEB8]/60 bg-gradient-to-br from-teal-950/40 via-black/60 to-black/80 p-7 flex-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(7,190,184,0.1)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#07BEB8]/12 group-hover:bg-[#07BEB8]/20 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-[#07BEB8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY COREHIVES  (sticky accordion + stats)
      ══════════════════════════════════════════════════════════════ */}
      <section ref={r5} className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 5% 50%, rgba(7,190,184,0.05) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* sticky left */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why CoreHives{" "}
              <span className="precision-gradient">Builds Brands</span>
              {" "}That Last
            </h2>
            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Strategy-first, commercially focused brand work that gives your business a durable competitive identity.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/8 bg-white/[0.03]">
                  <p className="text-2xl font-extrabold text-[#07BEB8]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* accordion */}
          <div className="flex flex-col gap-3">
            {whyItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#07BEB8]/30 bg-[#07BEB8]/[0.04]"
                      : "border-[#1f1f1f] bg-[#0a0a0a]"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">{item.title}</span>
                    <span
                      className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none font-light transition-colors ${
                        isOpen ? "border-[#07BEB8] text-[#07BEB8]" : "border-white/20 text-white/40"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                      isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════════════ */}
      <PricingSection
        plans={brandingPricingPlans}
        eyebrow="Transparent brand investment tiers"
        title="Brand packages built for the growth stage you're in"
        description="From startup identity launches to full enterprise rebrands, structured engagements with clear deliverables, timelines, and measurable business outcomes."
        savingsLabel="Save up to 20% on annual brand retainers"
        footerNote="Need a custom brand scope or rebrand strategy?"
        footerDescription="We also quote full enterprise rebrands, brand mergers, multi-brand portfolio management, and long-term brand guardianship retainers."
        footerCtaText="Discuss your brand scope"
        footerCtaHref="/contact"
      />

      {/* ══════════════════════════════════════════════════════════════
          DESIGN TOOLS, dynamic tab-switched expertise showcase
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-10 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(7,190,184,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#07BEB8] mb-3">Our Stack</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tools &amp; <span className="precision-gradient">Expertise</span>
            </h2>
          </div>

          {/* Segmented tab control */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-1 p-1.5 rounded-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              {Object.keys(toolsByTab).map((tab) => {
                const active = tab === activeTechTab;
                return (
                  <button
                    key={tab}
                    onClick={() => switchTab(tab)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      active
                        ? "bg-[#07BEB8] text-white shadow-[0_0_22px_rgba(7,190,184,0.45)]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated tab description */}
          <p
            className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
            style={{
              opacity:    toolFade ? 1 : 0,
              transform:  toolFade ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            {TAB_DESCS[activeTechTab]}
          </p>

          {/* Tool grid, fades + slides on tab switch */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            style={{
              opacity:    toolFade ? 1 : 0,
              transform:  toolFade ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            {toolsByTab[activeTechTab].map((tool, idx) => (
              <div
                key={`${activeTechTab}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-white/18 bg-white/1.5 hover:bg-white/4 p-7 flex flex-col items-center gap-5 cursor-default transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                {/* Per-tool radial colour glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 50% 20%, ${tool.color}1c 0%, transparent 70%)` }}
                />

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${tool.color}bb, transparent)` }}
                />

                {/* Icon with soft glow halo + hover scale wrapper */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500"
                    style={{ background: tool.color + "50" }}
                  />
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    {tool.iconEl}
                  </div>
                </div>

                {/* Name + use-case */}
                <div className="text-center relative z-10">
                  <p className="text-[13px] font-semibold text-white leading-tight">{tool.label}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug group-hover:text-gray-400 transition-colors duration-300">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRE-FOOTER CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-28 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
        {/* background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7,190,184,0.10) 0%, transparent 70%)" }}
        />
        {/* top/bottom border fade lines */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(7,190,184,0.3) 50%, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(7,190,184,0.3) 50%, transparent)" }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">Ready to Begin?</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to build a brand that<br />
            <span className="precision-gradient">dominates your market?</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
            From startup identity launches to full enterprise rebrands, our brand strategists and designers are ready to build something market-defining with you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
     
             <CTAButton  href="/contact">
              Start Your Brand Project
            </CTAButton>
            <a
              href="/our-portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 py-2 px-6 text-sm font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
            >
              View Our Portfolio
              <ArrowRight className="h-4 w-4 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
