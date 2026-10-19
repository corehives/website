import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Database,
  Layers,
  FileCheck2,
  Lock,
  Search,
  Activity,
  FileText,
  BarChart3,
  MapPin,
  Cpu,
  Server,
  CreditCard,
  Check,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  FileCode,
  ShieldAlert,
  Building2,
  Compass,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic BetaCompass project screenshots
import coverShowcaseImg from "../../assets/betacompass/betacompass-cover.webp";
import heroScreenshot from "../../assets/betacompass/betacompass-hero.webp";
import featuresScreenshot from "../../assets/betacompass/betacompass-features.webp";
import reportsScreenshot from "../../assets/betacompass/betacompass-reports.webp";
import footerScreenshot from "../../assets/betacompass/betacompass-footer.webp";

// Related case study covers
import BaileyBeauImg from "../../assets/bailey-beau-showcase.webp";
import DoorsImg from "../../assets/doors-showcase.webp";
import ProDocetImg from "../../assets/prodocet-showcase.webp";
import ProStartImg from "../../assets/prostart-showcase.webp";
import RescueSpotImg from "../../assets/rescue-spot-showcase.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiReact,
  SiVite,
  SiLaravel,
  SiMysql,
  SiStripe,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Official Tech Icons
const ReactIcon = () => <SiReact className="w-6 h-6 text-[#61DAFB]" />;
const ViteIcon = () => <SiVite className="w-6 h-6 text-[#646CFF]" />;
const LaravelIcon = () => <SiLaravel className="w-6 h-6 text-[#FF2D20]" />;
const MysqlIcon = () => <SiMysql className="w-6 h-6 text-[#00758F]" />;
const AwsIcon = () => <FaAws className="w-6 h-6 text-[#FF9900]" />;
const StripeIcon = () => <SiStripe className="w-6 h-6 text-[#635BFF]" />;
const OpenAiIcon = () => <SiOpenai className="w-6 h-6 text-[#10A37F]" />;

export default function BetaCompassCaseStudy() {
  const [heroView, setHeroView] = useState("cover");
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "BetaCompass Case Study | AI-Powered Property Intelligence SaaS | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives engineered BetaCompass, a UK property intelligence SaaS platform combining property valuation estimates, property health scoring, area insights, evidence management, and AI-assisted reports for buyers and investors.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/betacompass";

    // OpenGraph
    const setOgMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setOgMeta(
      "og:title",
      "BetaCompass Case Study | AI-Powered Property Intelligence SaaS | CoreHives"
    );
    setOgMeta(
      "og:description",
      "Full-stack SaaS engineering, AI integration, valuation engines, and secure evidence storage for UK property intelligence platform BetaCompass."
    );
    setOgMeta("og:url", "https://corehives.com/portfolio/betacompass");
    setOgMeta("og:type", "article");

    // JSON-LD Structured Data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BetaCompass",
      applicationCategory: "RealEstateApplication, BusinessApplication",
      operatingSystem: "Web",
      url: "https://betacompass.co.uk/",
      description:
        "AI-assisted property intelligence SaaS platform combining property valuation estimates, property health scoring, area insights, evidence management, and premium reports for buyers and investors across the United Kingdom.",
      creator: {
        "@type": "Organization",
        name: "CoreHives LLC",
        url: "https://corehives.com",
      },
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const scrollToOverview = (e) => {
    e.preventDefault();
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 7 Key Features documented across milestones
  const keyFeatures = [
    {
      id: "valuation",
      icon: TrendingUp,
      title: "Property Valuation & Market Intelligence",
      tagline: "Evidence-backed valuation estimates and market context",
      bulletPoints: [
        "Estimated property values based on available market evidence and historical records",
        "Comparable-sales analysis where supporting local transaction data is available",
        "Valuation confidence indicators reflecting evidence depth and recency",
        "Clear explanations of the geographic basis and limitations of estimates",
        "Property price history tracking and regional market trend indicators",
      ],
      badge: "Deterministic Engine",
    },
    {
      id: "health",
      icon: Activity,
      title: "Property Health Intelligence",
      tagline: "Comprehensive condition scoring and risk analysis",
      bulletPoints: [
        "Structured property health scoring across critical condition vectors",
        "Identification of positive factors, potential concerns, and missing information",
        "Evidence-backed explanations and actionable improvement recommendations",
        "Property records designed to evolve as additional information becomes available",
        "Visual confidence meters highlighting verified data versus unknown details",
      ],
      badge: "Condition Analytics",
    },
    {
      id: "ai-reports",
      icon: Sparkles,
      title: "AI-Assisted Property Reports",
      tagline: "Accessible plain-English analysis powered by OpenAI",
      bulletPoints: [
        "AI-generated property assessments synthesized into clear, plain English",
        "Buyer-focused risk registers and structured due-diligence checklists",
        "Investor analysis covering yield considerations and investment factors",
        "Practical action plans tailored for different stages of a property transaction",
        "Strict boundaries between verified facts, calculations, AI interpretations, and unknown details",
      ],
      badge: "OpenAI Integration",
    },
    {
      id: "area-intel",
      icon: MapPin,
      title: "Area Intelligence",
      tagline: "Hyperlocal UK neighbourhood and environmental insights",
      bulletPoints: [
        "Local property market context and postcode-level demographic trends",
        "Energy performance (EPC) distribution and neighbourhood housing profiles",
        "Crime rates, flood risk, local schools, transport links, and planning data where supported",
        "Rental market indicators and regional capital growth patterns",
        "Transparent disclosure of geographic coverage across England, Wales, Scotland, and NI",
      ],
      badge: "Geospatial Data",
    },
    {
      id: "evidence",
      icon: ShieldCheck,
      title: "Evidence Management & Property Records",
      tagline: "Persistent document vault with cryptographic provenance",
      bulletPoints: [
        "Persistent records and unique digital identity for individual UK properties",
        "Secure document and photograph storage with verified metadata",
        "Evidence provenance and verification workflows for uploaded records",
        "Property history and event-based audit timelines",
        "Controlled access to private property information with time-limited signed links",
      ],
      badge: "Secure Vault",
    },
    {
      id: "payments",
      icon: CreditCard,
      title: "Premium Reports & Payments",
      tagline: "Monetized Buyer and Investor workflows with Stripe",
      bulletPoints: [
        "Tiered access model: Free Instant Report, Premium Buyer Report, and Investor Report",
        "Stripe checkout workflows with instant purchase webhook confirmation",
        "Automated access entitlement management per property record",
        "High-fidelity server-side PDF report compilation and delivery",
        "Financial calculators with dynamic recalculation (yield, mortgage, stamp duty, ROI)",
      ],
      badge: "Stripe & PDF",
    },
    {
      id: "security",
      icon: Lock,
      title: "Security & Cloud Infrastructure",
      tagline: "Enterprise cloud resilience on AWS & Laravel",
      bulletPoints: [
        "Authentication and granular role-based access control (RBAC)",
        "Multi-factor authentication (MFA) for platform administrators",
        "Protected S3 document storage accessed strictly via time-limited signed URLs",
        "Rate limiting, CSRF protection, and strict session security controls",
        "Automated RDS database snapshots, scheduled background queues, and AWS EC2 hosting",
      ],
      badge: "AWS & Security",
    },
  ];

  // Property Journey Workflow steps
  const journeySteps = [
    {
      step: "01",
      title: "Property Search & Address Resolution",
      desc: "Users begin by searching any UK postcode or address. The system resolves unique property titles across England, Wales, Scotland, and Northern Ireland with fallback handling for unmapped records.",
      highlight: "UK-wide Postcode Lookup",
    },
    {
      step: "02",
      title: "Instant Free Property Intelligence",
      desc: "Immediate delivery of initial property attributes: estimated valuation, confidence indicator, geographic comp radius, price history, and baseline area context.",
      highlight: "Deterministic Calculation",
    },
    {
      step: "03",
      title: "Property Health Score & Condition Analysis",
      desc: "A multi-dimensional health audit evaluating physical condition indicators, EPC records, environmental checks, and explicit identification of unverified or missing data.",
      highlight: "Transparent Scoring",
    },
    {
      step: "04",
      title: "Premium Buyer & Investor Due Diligence",
      desc: "Unlocking in-depth due diligence through Stripe: AI-synthesized risk registers, financial yield calculators, stamp duty estimators, and plain-English recommendations.",
      highlight: "Stripe Monetization",
    },
    {
      step: "05",
      title: "Evidence Vault & PDF Generation",
      desc: "Homeowners and buyers store private certificates, survey documents, and photos securely in S3. One-click PDF compilation delivers a professional, shareable report.",
      highlight: "Signed S3 URLs & PDF",
    },
  ];

  // Engineering highlights
  const engineeringHighlights = [
    {
      title: "Evidence-Led AI Architecture",
      icon: Cpu,
      description:
        "AI-generated explanations complement verified information and deterministic calculations rather than replacing them. The platform strictly separates empirical evidence, mathematical calculations, AI interpretations, and unknown variables to prevent hallucination.",
    },
    {
      title: "Property Identity & Data Integrity",
      icon: Building2,
      description:
        "Individual property records are maintained with strict relational boundaries, ensuring reports, historical calculations, and uploaded evidence stay permanently bound to the correct UK address and property title.",
    },
    {
      title: "Transparent Valuation Logic",
      icon: BarChart3,
      description:
        "Valuation estimates dynamically adapt to the availability of comparable-sales evidence. When local comps are sparse, the engine broadens its geographic or temporal search window while explicitly stating its basis and limitations.",
    },
    {
      title: "Secure Evidence Storage",
      icon: Lock,
      description:
        "Private property deeds, survey reports, and photographs are stored in isolated cloud buckets with zero public access. Access is granted exclusively through short-lived cryptographic signed URLs following strict user authentication.",
    },
    {
      title: "Premium Reporting Workflows",
      icon: FileCheck2,
      description:
        "Stripe payment webhooks trigger instant entitlement provisioning, synchronizing data across web viewports and headless PDF generation engines so calculations match down to the penny.",
    },
    {
      title: "Automated Testing & Verification",
      icon: ShieldCheck,
      description:
        "Milestone 5 development close documented 1,914 passing automated tests and 9,475 assertions. Rigorous engineering verification included a valuation back-test against 600 real sales across two empirical samples.",
      metric: "1,914 Passing Tests • 9,475 Assertions",
    },
  ];

  // Tech stack items
  const techStack = [
    {
      name: "React",
      category: "Frontend SPA",
      icon: ReactIcon,
      desc: "Component-driven user interface delivering reactive property search, dynamic financial calculators, and interactive health score meters.",
    },
    {
      name: "Vite",
      category: "Build Tooling",
      icon: ViteIcon,
      desc: "Ultra-fast developer tooling, optimized ES modules, and lean production bundles engineered for rapid UK web delivery.",
    },
    {
      name: "Laravel",
      category: "Backend REST API",
      icon: LaravelIcon,
      desc: "Enterprise PHP 8.2+ backend handling business logic, background job queues, webhook listeners, and deterministic property scoring algorithms.",
    },
    {
      name: "MySQL",
      category: "Relational Database",
      icon: MysqlIcon,
      desc: "Structured relational data model optimized for indexing high-volume UK transaction datasets, user vaults, and property audit timelines.",
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Infrastructure",
      icon: AwsIcon,
      desc: "AWS EC2 compute, Amazon RDS managed database with automated daily snapshots, and private Amazon S3 document storage.",
    },
    {
      name: "Stripe",
      category: "Payment Processing",
      icon: StripeIcon,
      desc: "Secure checkout sessions, SCA-compliant payment verification, and automated entitlement unlock for premium Buyer and Investor reports.",
    },
    {
      name: "OpenAI Integration",
      category: "AI Analysis",
      icon: OpenAiIcon,
      desc: "Assisted natural-language synthesis turning raw property statistics, risk factors, and due-diligence checklists into plain-English guidance.",
    },
  ];

  // Related projects
  const otherProjects = [
    {
      title: "Rescue Spot | Pet Adoption Platform",
      category: "PetTech • Full-Stack Development",
      image: RescueSpotImg,
      to: "/portfolio/rescue-spot",
    },
    {
      title: "ProStartLeasing | Equipment Leasing Portal",
      category: "FinTech • Laravel & Stripe",
      image: ProStartImg,
      to: "/portfolio/prostartleasing",
    },
    {
      title: "ProDocet LMS | School Management System",
      category: "EdTech • Laravel & MySQL",
      image: ProDocetImg,
      to: "/portfolio/prodocet-lms",
    },
    {
      title: "Doors | Multi-Vendor E-Commerce",
      category: "E-Commerce • Marketplace",
      image: DoorsImg,
      to: "/portfolio/doors-ecommerce-marketplace",
    },
  ];

  return (
    <div className="bg-[#00080d] text-white min-h-screen selection:bg-[#07BEB8]/30 selection:text-[#07BEB8]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION A: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10">
        {/* Ambient lighting & backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[1] w-1/2 opacity-70"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-[1] w-1/2 opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#07BEB8]/40 bg-[#07BEB8]/10 text-[#07BEB8]">
              <Sparkles className="w-3.5 h-3.5" />
              CASE STUDY | PROPTECH &amp; SAAS PLATFORM
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Beta<span className="text-[#07BEB8]">Compass</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Building an AI-Powered Property Intelligence Platform
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A property intelligence platform designed to help homeowners, buyers,
            and investors understand property value, assess potential risks, explore
            local market conditions, and make more informed decisions across the
            United Kingdom.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="https://betacompass.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#07BEB8] text-[#001925] font-semibold text-sm hover:bg-[#07BEB8]/90 transition-all shadow-lg shadow-[#07BEB8]/20 group"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4 text-[#001925] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <CTAButton
              onClick={scrollToOverview}
              className="border-white/20 hover:border-[#07BEB8]/50"
            >
              Explore Case Study
            </CTAButton>

            <CTAButton to="/contact">Discuss Your Project</CTAButton>
          </div>

          {/* Project Information Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#010e14]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Client &amp; Country
              </p>
              <p className="text-sm font-medium text-white">Adebola Adebayo</p>
              <p className="text-xs text-gray-400 mt-0.5">United Kingdom (UK)</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Industry &amp; Type
              </p>
              <p className="text-sm font-medium text-white">Property Technology</p>
              <p className="text-xs text-gray-400 mt-0.5">Property Intelligence SaaS</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Deliverables
              </p>
              <p className="text-sm font-medium text-white">Full-Stack SaaS Platform</p>
              <p className="text-xs text-gray-400 mt-0.5">
                AI Reports, Health Scoring, Stripe
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Production Stack
              </p>
              <p className="text-sm font-medium text-white">React • Laravel • AWS</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Vite, MySQL, Stripe, OpenAI
              </p>
            </div>
          </div>

          {/* Primary Visual — Interactive Browser Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)]">
            {/* Browser Top Bar with View Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  betacompass.co.uk /{" "}
                  {heroView === "cover"
                    ? "showcase"
                    : heroView === "hero"
                    ? "home"
                    : heroView === "features"
                    ? "property-health-intelligence"
                    : heroView === "reports"
                    ? "buyer-and-investor-reports"
                    : "platform-summary"}
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-[#000a0f] p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setHeroView("cover")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "cover"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Platform Showcase
                </button>
                <button
                  onClick={() => setHeroView("hero")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "hero"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Homepage &amp; Search
                </button>
                <button
                  onClick={() => setHeroView("features")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "features"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Health Scoring
                </button>
                <button
                  onClick={() => setHeroView("reports")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "reports"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Premium Reports
                </button>
                <button
                  onClick={() => setHeroView("footer")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "footer"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Platform Architecture
                </button>
              </div>
            </div>

            {/* Displayed Viewport */}
            <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[580px] bg-[#070e17] flex items-center justify-center p-2 sm:p-4">
              {heroView === "cover" && (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={coverShowcaseImg}
                    alt="BetaCompass AI-Powered Property Intelligence Platform"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10 object-cover object-top"
                  />
                  <div className="w-full mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#07BEB8] animate-pulse" />
                      BetaCompass Multi-Device Intelligence: Valuation, Health Scoring &amp; UK Evidence
                    </span>
                    <a
                      href="https://betacompass.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8efcf8] hover:text-white inline-flex items-center gap-1 font-medium"
                    >
                      Visit betacompass.co.uk <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {heroView === "hero" && (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={heroScreenshot}
                    alt="BetaCompass AI-Powered Property Intelligence Homepage"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10 object-cover object-top"
                  />
                  <div className="w-full mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Production UI: Property Search, Confidence Score &amp; Instant Estimates
                    </span>
                    <a
                      href="https://betacompass.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8efcf8] hover:text-white inline-flex items-center gap-1 font-medium"
                    >
                      Visit betacompass.co.uk <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {heroView === "features" && (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={featuresScreenshot}
                    alt="BetaCompass Property Health Score and Condition Analytics"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10 object-cover object-top"
                  />
                  <div className="w-full mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>
                      Multi-Vector Condition Scoring, Risk Flags &amp; Verified Evidence Vault
                    </span>
                    <span className="text-[#07BEB8] font-mono">
                      Deterministic + AI Synergy
                    </span>
                  </div>
                </div>
              )}

              {heroView === "reports" && (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={reportsScreenshot}
                    alt="BetaCompass Premium Buyer and Investor Reports with Financial Calculators"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10 object-cover object-top"
                  />
                  <div className="w-full mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>
                      Tailored Due-Diligence Reports, Yield Calculations &amp; Instant PDF Delivery
                    </span>
                    <span className="text-[#07BEB8] font-mono">
                      Stripe Purchase-Based Entitlements
                    </span>
                  </div>
                </div>
              )}

              {heroView === "footer" && (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={footerScreenshot}
                    alt="BetaCompass UK Property Coverage and Enterprise Capabilities"
                    className="w-full h-auto rounded-lg shadow-2xl border border-white/10 object-cover object-top"
                  />
                  <div className="w-full mt-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>
                      UK Geographic Coverage: England, Wales, Scotland &amp; Northern Ireland
                    </span>
                    <span className="text-[#07BEB8] font-mono">
                      AWS Cloud Infrastructure
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION B: PROJECT OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story */}
            <div className="lg:col-span-7">
              <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-2">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                About the <span className="text-[#07BEB8]">Project</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">BetaCompass</strong> is a property intelligence platform
                  designed to help homeowners, buyers, and property investors understand
                  properties beyond their estimated market value.
                </p>
                <p>
                  The platform brings together property valuation estimates, property health
                  assessments, local area intelligence, evidence management, and AI-assisted
                  reporting to provide users with a clearer picture of a property&apos;s
                  characteristics, potential risks, and investment considerations.
                </p>
                <p>
                  <strong className="text-[#8efcf8]">CoreHives</strong> worked on developing and
                  enhancing the platform&apos;s frontend, backend, data processing workflows,
                  reporting capabilities, payment infrastructure, and security systems.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">UK Coverage</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    England, Wales, Scotland, and Northern Ireland property records.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center mb-3">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Transparent Logic</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Deterministic calculation engine with explicit confidence metrics.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Secure Evidence</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Time-limited signed URLs protecting sensitive title documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#011721] to-[#000d14] border border-[#07BEB8]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#07BEB8]/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#07BEB8]" />
                  Project Specification
                </h3>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Client</span>
                    <span className="font-semibold text-white text-right">
                      Adebola Adebayo
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Jurisdiction</span>
                    <span className="font-semibold text-white text-right">
                      United Kingdom
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Engineering Agency</span>
                    <span className="font-semibold text-[#8efcf8] text-right">
                      CoreHives LLC
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Industry Sector</span>
                    <span className="font-semibold text-white text-right">
                      Property Technology (PropTech)
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Platform Model</span>
                    <span className="font-semibold text-white text-right">
                      Full-Stack SaaS Platform
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-400">Payments &amp; Access</span>
                    <span className="font-semibold text-white text-right">
                      Stripe Checkout &amp; Webhooks
                    </span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-gray-400">Live Website</span>
                    <a
                      href="https://betacompass.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#07BEB8] hover:underline flex items-center gap-1 font-medium text-right"
                    >
                      betacompass.co.uk
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <CTAButton
                    onClick={scrollToFeatures}
                    className="w-full text-center justify-center bg-[#07BEB8] text-[#001925] font-semibold hover:bg-[#07BEB8]/90 py-2.5"
                  >
                    View Key Features
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION C & D: THE CHALLENGE & OUR SOLUTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* The Challenge */}
            <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/10 relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                The Problem Space
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                The <span className="text-rose-400">Challenge</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Property decisions require more than a single valuation figure. Buyers and
                  investors need reliable property information, local market context,
                  supporting evidence, and a clear understanding of which details are
                  verified, estimated, or unknown.
                </p>
                <p>
                  The challenge was to bring these different information sources together in a
                  cohesive digital experience while maintaining transparent calculations,
                  protecting sensitive documents, and supporting premium reports for different
                  user needs.
                </p>
                <p>
                  The platform also needed to accommodate differences in property data
                  availability across England, Wales, Scotland, and Northern Ireland.
                </p>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Black-Box Valuations:</strong> Automated algorithms
                    giving single figures without confidence levels or comps radius disclosure.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Fragmented UK Registries:</strong> Dissimilar data
                    structures across HM Land Registry, Registers of Scotland, and Land &amp; Property Services NI.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Unclear AI Hallucinations:</strong> The risk of
                    unconstrained generative AI inventing property facts or overriding factual records.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="rounded-2xl p-8 bg-white/[0.02] border border-[#07BEB8]/30 relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#07BEB8]/10 text-[#07BEB8] border border-[#07BEB8]/30 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                The CoreHives Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Our <span className="text-[#07BEB8]">Solution</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  We developed and enhanced BetaCompass as a full-stack SaaS platform combining
                  a modern web interface with a Laravel backend, structured data processing,
                  cloud infrastructure, and AI-assisted interpretation.
                </p>
                <p>
                  The solution connects property information, deterministic calculation engines,
                  evidence management, reporting workflows, and premium payment functionality.
                </p>
                <p>
                  A central design principle is transparency. Valuation estimates and calculated
                  scores are produced through defined logic and available evidence, while AI
                  helps explain findings in accessible language. Missing or unverified
                  information is identified rather than presented as established fact.
                </p>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Deterministic &amp; Explainable:</strong> Calculation
                    engines enforce clear mathematical rules, and AI translates them into clear English.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">Evidence-Based Provenance:</strong> Unverified data is
                    explicitly flagged, while documents and surveys are locked in cryptographically signed vaults.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-white">End-to-End Monetization:</strong> Seamless Stripe
                    workflows providing instantaneous web reports and PDF downloads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION E: KEY FEATURES
      ───────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-2">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Key <span className="text-[#07BEB8]">Features</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Engineered across comprehensive milestones, balancing deterministic calculation engines,
              evidence provenance, and accessible AI analysis.
            </p>
          </div>

          {/* Interactive Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={feat.id}
                  className={`p-6 rounded-2xl bg-white/[0.03] border transition-all duration-300 hover:border-[#07BEB8]/50 hover:bg-white/[0.05] flex flex-col justify-between ${
                    idx === 0 || idx === 1
                      ? "border-[#07BEB8]/30 shadow-lg shadow-[#07BEB8]/5"
                      : "border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center text-[#07BEB8]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{feat.title}</h3>
                    <p className="text-xs text-[#8efcf8] mb-4 font-medium">
                      {feat.tagline}
                    </p>

                    <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
                      {feat.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Milestone Verified</span>
                    <span className="text-[#07BEB8] font-mono">0{idx + 1} / 07</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verification Disclosure Alert */}
          <div className="mt-8 p-4 rounded-xl bg-[#01141c] border border-white/15 flex items-start gap-3 text-xs text-gray-300">
            <ShieldCheck className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Feature Verification Note:</strong> Features presented
              reflect the delivered codebases and verified milestone documentation. Where external data
              availability varies across devolved UK registries or requires user-supplied property evidence,
              the platform communicates limitations clearly rather than presenting estimates as guaranteed facts.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION F: DESIGN AND USER EXPERIENCE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-2">
              USER EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Designed Around the <span className="text-[#07BEB8]">Property Journey</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              A dark navy and blue visual identity engineered to guide users seamlessly from
              initial postcode search to actionable risk assessment and investment calculations.
            </p>
          </div>

          {/* Step-by-Step Interactive Journey Navigator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Step Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {journeySteps.map((item, idx) => (
                <button
                  key={item.step}
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    activeJourneyStep === idx
                      ? "bg-[#011721] border-[#07BEB8] shadow-lg shadow-[#07BEB8]/10"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`font-mono text-base font-bold shrink-0 mt-0.5 ${
                      activeJourneyStep === idx ? "text-[#07BEB8]" : "text-gray-500"
                    }`}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4
                      className={`text-sm font-bold ${
                        activeJourneyStep === idx ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-semibold text-[#8efcf8] uppercase tracking-wider">
                      ● {item.highlight}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Step Detail Card with Visual Context */}
            <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-[#010e14] border border-white/15">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono text-[#07BEB8]">
                    PHASE {journeySteps[activeJourneyStep].step}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {journeySteps[activeJourneyStep].title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#07BEB8]/10 text-[#07BEB8] border border-[#07BEB8]/30">
                  {journeySteps[activeJourneyStep].highlight}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {journeySteps[activeJourneyStep].desc}
              </p>

              {/* Journey Visual Callout */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="font-mono">
                    UK Property Flow • Interactive Interface
                  </span>
                  <span className="text-[#07BEB8]">Active State</span>
                </div>
                {activeJourneyStep === 0 && (
                  <div className="p-4 rounded-lg bg-[#0c1829] border border-white/10 text-center space-y-3">
                    <Search className="w-8 h-8 text-[#07BEB8] mx-auto" />
                    <p className="text-xs text-gray-200">
                      &quot;10 Downing Street, London, SW1A 2AA&quot; or &quot;EH1 1YZ&quot;
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#07BEB8] text-[#001925] text-xs font-bold rounded-full">
                      Search Property Database
                    </span>
                  </div>
                )}
                {activeJourneyStep === 1 && (
                  <div className="p-4 rounded-lg bg-[#0c1829] border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Estimated Value</span>
                      <span className="text-white font-bold text-sm">£485,000</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Confidence Indicator</span>
                      <span className="text-emerald-400 font-semibold">High (14 Recent Comps)</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#07BEB8] h-full w-[85%]" />
                    </div>
                  </div>
                )}
                {activeJourneyStep === 2 && (
                  <div className="p-4 rounded-lg bg-[#0c1829] border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Property Health Score</span>
                      <span className="text-[#8efcf8] font-bold text-sm">82 / 100</span>
                    </div>
                    <p className="text-[11px] text-gray-300">
                      Positive factors: High EPC rating (B), no recorded flood zone risk.
                      Action items: Verify boiler warranty and roof inspection history.
                    </p>
                  </div>
                )}
                {activeJourneyStep === 3 && (
                  <div className="p-4 rounded-lg bg-[#0c1829] border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Investor Gross Yield</span>
                      <span className="text-emerald-400 font-bold text-sm">6.4% Projected</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Due Diligence Checklist</span>
                      <span className="text-gray-300">12 Verified Criteria</span>
                    </div>
                  </div>
                )}
                {activeJourneyStep === 4 && (
                  <div className="p-4 rounded-lg bg-[#0c1829] border border-white/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Document Vault</span>
                      <span className="text-[#07BEB8] font-mono text-xs">Signed S3 URL (60m)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Export Ready</span>
                      <span className="text-white font-semibold">Full Comprehensive PDF</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION G: TECHNOLOGY STACK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-2">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Technology Behind the <span className="text-[#07BEB8]">Platform</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              A production-tested stack chosen for sub-second query performance, strict data
              integrity, and enterprise cloud reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#07BEB8]/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <IconComponent />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#07BEB8] block mb-1">
                      {tech.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION H: ENGINEERING HIGHLIGHTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-2">
              ENGINEERING EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Engineering a Reliable <span className="text-[#07BEB8]">Property Platform</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Six foundational engineering principles governing system stability, mathematical
              accuracy, and security auditing across all milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringHighlights.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 text-[#07BEB8] flex items-center justify-center mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-gray-500 mb-1 block">
                      ARCHITECTURAL PILLAR 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  {pillar.metric && (
                    <div className="pt-4 border-t border-white/10">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#07BEB8]/10 text-[#07BEB8] border border-[#07BEB8]/30">
                        {pillar.metric}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Milestone Metrics Box */}
          <div className="mt-12 p-6 rounded-2xl bg-[#01141c] border border-[#07BEB8]/30 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-white">
                  Documented Milestone Verification
                </h4>
                <p className="text-xs text-gray-300">
                  Milestone 5 close recorded 1,914 automated tests, 9,475 assertions, and an
                  empirical back-test on 600 real sales across two samples.
                </p>
                <p className="text-[11px] text-gray-400 italic">
                  Note: Metrics describe engineering verification and back-test samples; they do not constitute a guarantee of valuation accuracy for every individual property.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <div className="text-center px-4 py-2 bg-black/40 rounded-xl border border-white/10">
                  <span className="block text-xl font-bold text-[#07BEB8] font-mono">
                    1,914
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase">Tests Passed</span>
                </div>
                <div className="text-center px-4 py-2 bg-black/40 rounded-xl border border-white/10">
                  <span className="block text-xl font-bold text-[#8efcf8] font-mono">
                    9,475
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase">Assertions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION I: PROJECT OUTCOME
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block">
              IMPACT &amp; OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              A More Informed Approach to{" "}
              <span className="text-[#07BEB8]">Property Decisions</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed text-left sm:text-center">
              <p>
                BetaCompass brings property intelligence, valuation estimates, health scoring,
                local area research, evidence management, and premium reporting together in a
                single digital platform.
              </p>
              <p>
                The platform provides buyers, homeowners, and investors with a structured way
                to explore property information, understand the evidence behind assessments,
                identify potential risks, and plan their next steps.
              </p>
              <p>
                Its modular architecture provides a foundation for extending property datasets,
                reporting capabilities, and evidence-backed intelligence as requirements evolve.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                UK Multi-Nation Architecture
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                Deterministic Scoring Logic
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                OpenAI Narrative Synthesis
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                Automated Stripe Entitlements
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION J: CLOSING CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#000a0f] to-[#01141c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            PARTNER WITH COREHIVES
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Have a SaaS Platform to Build or Scale?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            CoreHives develops custom SaaS platforms, AI-powered applications, and data-driven
            digital products. From product architecture and backend engineering to third-party
            integrations and cloud infrastructure, we help businesses turn complex requirements
            into practical digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact" className="px-8 py-3 text-base">
              Discuss Your Project
            </CTAButton>
            <a
              href="https://betacompass.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-[#07BEB8]/50 transition-all group"
            >
              <span>Visit BetaCompass Live</span>
              <ExternalLink className="w-4 h-4 text-[#07BEB8] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION K: EXPLORE OTHER CASE STUDIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/10 bg-[#000405]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-[#07BEB8] text-xs uppercase font-bold tracking-widest block mb-1">
                PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Explore More Client Projects
              </h3>
            </div>
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-1.5 text-xs text-[#07BEB8] hover:underline mt-4 sm:mt-0 font-medium"
            >
              View Full Portfolio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((proj) => (
              <Link
                key={proj.title}
                to={proj.to}
                className="group block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-[#07BEB8]/40 hover:shadow-lg hover:shadow-[#07BEB8]/10"
              >
                <div className="relative h-44 overflow-hidden bg-black/60">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black group-hover:border-[#07BEB8] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-mono text-[#07BEB8] uppercase mb-1">
                    {proj.category}
                  </p>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#07BEB8] transition-colors line-clamp-1">
                    {proj.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
