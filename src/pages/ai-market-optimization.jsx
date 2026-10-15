import { lazy, Suspense, useState, useEffect } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.webp";
import rightLight from "../assets/right-light.webp";
import BgApp from "../assets/bg-app.webp";
import Cloud from "../assets/icons/cloud.webp";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Sparkles,
  Share2,
  Search,
  Target,
  MapPin,
  FileText,
  Video,
  BarChart3,
  Layers,
  Compass,
  TrendingUp,
  Bot,
  Cpu,
  Calendar,
  Clock,
  ChevronDown,
  Megaphone,
  Zap,
  Activity,
  LineChart,
  Eye,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import digitalMarketingPricingPlans from "../components/pricing/aiMarketOptimizationPricingData.json";

import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiHotjar,
  SiHubspot,
  SiGoogleads,
  SiMeta,
  SiTiktok,
  SiX,
  SiMailchimp,
} from "react-icons/si";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

/* ─── 9 Core Services ───────────────────────────────────────────────────────── */
const coreServices = [
  {
    id: "social-media",
    number: "01",
    icon: Share2,
    badge: "Social Media",
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence with strategic content, professional creative assets, and organized monthly publishing.",
    deliverables: [
      "Monthly social media content calendar",
      "Social media post design & copywriting",
      "Monthly content publishing and scheduling",
      "Social profile setup and bio optimization",
      "Platform-specific content planning (IG, FB, LI, TT)",
      "Monthly activity and engagement reporting",
    ],
    clarification:
      "Content creation and publishing are clearly scheduled. Full community management and supported channels are defined per package.",
  },
  {
    id: "seo",
    number: "02",
    icon: Search,
    badge: "Organic Search",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website's organic search visibility with a structured SEO strategy focused on technical quality, relevant content, and search intent.",
    deliverables: [
      "Comprehensive technical SEO audits",
      "Targeted keyword & search intent research",
      "On-page metadata and content optimization",
      "Internal linking & site hierarchy recommendations",
      "Google Search Console health monitoring",
      "Organic search performance reporting",
    ],
    clarification:
      "Focused on technical excellence and content quality. Search engine rankings depend on external algorithms and cannot be guaranteed.",
  },
  {
    id: "aio",
    number: "03",
    icon: Bot,
    badge: "AI Discovery",
    title: "AI Search Optimization (AIO)",
    description:
      "Prepare your website and content for discovery across AI-powered search experiences and answer engines.",
    deliverables: [
      "Content clarity & topical authority structuring",
      "Entity and brand information consistency",
      "Structured data & schema markup recommendations",
      "Helpful, authoritative question-answering content",
      "Technical accessibility and crawlability verification",
      "Monitoring emerging AI discovery touchpoints",
    ],
    clarification:
      "AI search visibility depends on third-party generative models and evolving search architectures.",
  },
  {
    id: "geo",
    number: "04",
    icon: Cpu,
    badge: "Generative Search",
    title: "Generative Engine Optimization (GEO)",
    description:
      "Improve how clearly your business, expertise, products, and services are represented in content that may be used by generative search and answer engines.",
    deliverables: [
      "Topic and entity-focused content planning",
      "Clear, authoritative answers to customer questions",
      "Brand credibility & knowledge graph consistency",
      "Supporting technical SEO and semantic content",
      "Quotable, structured data formatting",
    ],
    clarification:
      "Presented in coordination with AIO and technical SEO to build a unified authority profile.",
  },
  {
    id: "google-ads",
    number: "05",
    icon: Target,
    badge: "Paid Media",
    title: "Google Ads & Paid Advertising",
    description:
      "Reach customers actively searching for your products and services through carefully planned and measured paid campaigns.",
    deliverables: [
      "Google Ads account & campaign architecture",
      "High-intent keyword and audience research",
      "Conversion-oriented ad copy development",
      "Conversion tracking & GTM configuration",
      "Budget, search term, and bidding optimization",
      "Transparent monthly campaign performance reporting",
    ],
    clarification:
      "Advertising platform spend is billed separately by ad networks. Specific leads or ROAS cannot be guaranteed.",
  },
  {
    id: "local-seo",
    number: "06",
    icon: MapPin,
    badge: "Local Presence",
    title: "Google Business Profile & Local SEO",
    description:
      "Help local customers discover your business through an optimized Google Business Profile and stronger local search presence.",
    deliverables: [
      "Google Business Profile setup or full audit",
      "Name, Address, Phone (NAP) consistency checks",
      "Category and service catalogue optimization",
      "Business description & attribute improvements",
      "Photo and promotional update publishing support",
      "Customer review response & management guidance",
    ],
    clarification:
      "Aims to maximize local prominence; specific map pack positions or call quantities cannot be guaranteed.",
  },
  {
    id: "content-marketing",
    number: "07",
    icon: FileText,
    badge: "Content Strategy",
    title: "Content Marketing",
    description:
      "Create useful, relevant content that supports your brand, organic visibility, and customer acquisition goals.",
    deliverables: [
      "Editorial calendar & website content planning",
      "SEO-focused blog articles and guides",
      "Landing page copywriting and value framing",
      "Multi-channel content repurposing workflows",
      "Educational resources tailored for buyer intent",
    ],
    clarification:
      "Distinct from routine social posting, focused on long-term organic authority and lead conversion.",
  },
  {
    id: "ugc-video",
    number: "08",
    icon: Video,
    badge: "Creative Production",
    title: "UGC & Short-Form Video Content",
    description:
      "Create engaging short-form content and UGC-style creative assets for social media channels and paid advertising campaigns.",
    deliverables: [
      "Short-form promotional & explainer video concepts",
      "UGC-style product and service demonstrations",
      "Reels, TikTok, and Shorts-formatted creative",
      "Ad creative concepts structured for testing",
      "Professional video editing, subtitles & repurposing",
    ],
    clarification:
      "Focuses on authentic digital video production and editing. External celebrity or influencer talent requires separate arrangement.",
  },
  {
    id: "analytics-cro",
    number: "09",
    icon: BarChart3,
    badge: "Measurement",
    title: "Analytics & Conversion Optimization",
    description:
      "Understand how visitors discover and interact with your business, and use meaningful data to improve your marketing decisions.",
    deliverables: [
      "Google Analytics 4 & Tag Manager setup/review",
      "Key conversion and lead action event tracking",
      "Actionable monthly marketing performance reports",
      "Landing page user journey & conversion recommendations",
      "Clear funnel measurement without vanity metrics",
    ],
    clarification:
      "Delivers transparent visibility into campaign and website interaction points.",
  },
];

/* ─── 4 Connected Stages ────────────────────────────────────────────────────── */
const connectedStages = [
  {
    step: "01",
    title: "Build Your Foundation",
    description:
      "Before scaling traffic, ensure your core assets and measurement systems are configured properly.",
    items: [
      "Website and landing page conversion readiness",
      "Google Business Profile setup & optimization",
      "Google Analytics 4 & conversion tracking setup",
      "Core technical SEO and crawlability foundation",
    ],
  },
  {
    step: "02",
    title: "Increase Visibility",
    description:
      "Grow organic awareness and search discoverability across traditional and emerging channels.",
    items: [
      "Targeted SEO keyword mapping & content marketing",
      "Active, consistent social media presence",
      "AI search optimization (AIO) & entity clarity",
      "Local search discoverability for regional customers",
    ],
  },
  {
    step: "03",
    title: "Reach More Customers",
    description:
      "Connect with high-intent prospects through focused advertising and engaging creative.",
    items: [
      "Search campaigns via Google Ads",
      "Social media distribution and campaign support",
      "UGC-style creative assets and short-form video",
      "Targeted promotional offers and announcements",
    ],
  },
  {
    step: "04",
    title: "Measure and Improve",
    description:
      "Evaluate performance data to eliminate wasted effort and refine ongoing marketing activities.",
    items: [
      "Transparent monthly activity & progress reporting",
      "Conversion tracking review & funnel improvements",
      "Iterative content and campaign optimizations",
      "Clear recommendations for your next growth stage",
    ],
  },
];

/* ─── 4 Process Steps ───────────────────────────────────────────────────────── */
const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    description:
      "We learn about your business, target audience, existing marketing footprint, competitors, goals, and budget constraints.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Plan",
    description:
      "We recommend the right combination of services, establish clear monthly deliverables, and agree on reporting cadences.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Execute",
    description:
      "Our team delivers agreed marketing activities according to the selected package, from content creation to SEO sprints and ad management.",
  },
  {
    num: "04",
    icon: Activity,
    title: "Measure & Improve",
    description:
      "We review performance data, communicate progress transparently, and refine activities to maximize marketing effectiveness.",
  },
];

/* ─── Marketing Metrics Focus ───────────────────────────────────────────────── */
const performanceMetrics = [
  {
    title: "Organic Search Visibility",
    desc: "Monitor impressions, indexed keywords, and organic clicks in Google Search Console to track authority growth.",
    icon: Search,
  },
  {
    title: "Website Traffic & Engagement",
    desc: "Understand where qualified visitors come from, which pages they read, and how long they engage with your content.",
    icon: Activity,
  },
  {
    title: "Social Reach & Community",
    desc: "Evaluate content interactions, profile visits, follower growth, and click-throughs from your social channels.",
    icon: Share2,
  },
  {
    title: "Qualified Inquiries & Leads",
    desc: "Track form submissions, consultation requests, call clicks, and direct email inquiries from digital channels.",
    icon: Target,
  },
  {
    title: "Ad Spend & Cost Per Action",
    desc: "Track cost per click, search impression share, and acquisition costs to ensure media budgets are used efficiently.",
    icon: LineChart,
  },
  {
    title: "Local Search Performance",
    desc: "Monitor Google Business Profile views, search queries, direction requests, and local customer interactions.",
    icon: MapPin,
  },
];

/* ─── Marketing Stack & Tools ───────────────────────────────────────────────── */
const toolTabs = {
  "Analytics & Measurement": [
    {
      label: "Google Analytics 4",
      icon: (
        <SiGoogleanalytics
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#E37400" }}
        />
      ),
      role: "Traffic & User Behavior",
    },
    {
      label: "Search Console",
      icon: (
        <SiGooglesearchconsole
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#458CF5" }}
        />
      ),
      role: "Indexation & Keywords",
    },
    {
      label: "Hotjar",
      icon: (
        <SiHotjar
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#F6461A" }}
        />
      ),
      role: "Heatmaps & User Journeys",
    },
    {
      label: "HubSpot",
      icon: (
        <SiHubspot
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#FF7A59" }}
        />
      ),
      role: "CRM & Inbound Workflows",
    },
  ],
  "SEO & Research": [
    {
      label: "Semrush",
      icon: (
        <SiSemrush
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#FF642D" }}
        />
      ),
      role: "Keyword & Competitor Analysis",
    },
    {
      label: "Google Search Console",
      icon: (
        <SiGooglesearchconsole
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#458CF5" }}
        />
      ),
      role: "Crawl & Performance Auditing",
    },
    {
      label: "Schema Markup & AIO",
      icon: <Bot className="w-9 h-9 sm:w-10 sm:h-10 text-[#07BEB8]" />,
      role: "Structured Entity Data",
    },
  ],
  "Advertising & Paid": [
    {
      label: "Google Ads",
      icon: (
        <SiGoogleads
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#4285F4" }}
        />
      ),
      role: "Search & Intent Campaigns",
    },
    {
      label: "Meta Ads Manager",
      icon: (
        <SiMeta
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#0082FB" }}
        />
      ),
      role: "Social Media Advertising",
    },
    {
      label: "LinkedIn Ads",
      icon: (
        <FaLinkedin
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#0A66C2" }}
        />
      ),
      role: "B2B Professional Audience",
    },
  ],
  "Content & Social": [
    {
      label: "Instagram & Facebook",
      icon: (
        <FaInstagram
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#E4405F" }}
        />
      ),
      role: "Visual Social Publishing",
    },
    {
      label: "LinkedIn",
      icon: (
        <FaLinkedin
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#0A66C2" }}
        />
      ),
      role: "Professional Thought Leadership",
    },
    {
      label: "Short-Form Video (TikTok & Reels)",
      icon: (
        <SiTiktok
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#FFFFFF" }}
        />
      ),
      role: "Engaging Video Formats",
    },
    {
      label: "Mailchimp",
      icon: (
        <SiMailchimp
          className="w-9 h-9 sm:w-10 sm:h-10"
          style={{ color: "#FFE01B" }}
        />
      ),
      role: "Email & Newsletter Campaigns",
    },
  ],
};

/* ─── Frequently Asked Questions ────────────────────────────────────────────── */
const faqs = [
  {
    q: "Which digital marketing services does CoreHives offer?",
    a: "CoreHives provides social media marketing, search engine optimization (SEO), AI search optimization (AIO), generative engine optimization (GEO), Google Ads and paid advertising management, Google Business Profile and local SEO, content marketing, short-form video creative, and digital analytics with conversion tracking.",
  },
  {
    q: "Can I hire CoreHives for only one service?",
    a: "Yes. Many clients start with a single focused service, such as monthly social media management, a technical SEO audit, or Google Ads management, and later expand into additional channels as their business grows.",
  },
  {
    q: "Do you provide monthly social media management?",
    a: "Yes. We offer recurring monthly social media packages that include a curated content calendar, branded graphics, custom copywriting, hashtag planning, post scheduling, and monthly activity reporting.",
  },
  {
    q: "How many social media posts are included in a package?",
    a: "Our standard Social Media Essentials package includes 12 branded posts per month scheduled across up to 2 key platforms. Custom plans can accommodate higher post volumes, short-form video production, or additional channels.",
  },
  {
    q: "Do Google Ads budgets include advertising spend?",
    a: "No. Advertising platform spend is paid directly to Google (or other advertising networks) using your own payment method. CoreHives charges a transparent campaign management fee for strategy, setup, copywriting, and ongoing optimization.",
  },
  {
    q: "What is the difference between SEO, AIO, and GEO?",
    a: "Traditional SEO focuses on indexing, crawlability, on-page optimization, and keyword intent for standard search engines. AIO (AI Search Optimization) and GEO (Generative Engine Optimization) focus on structuring your website content, brand entities, and answers so that AI-powered answer engines can accurately understand, cite, and reference your business.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a medium-to-long-term investment. Most businesses begin to see improvements in indexation and keyword impressions within 2 to 3 months, with meaningful traffic growth typically developing over 4 to 6 months of consistent work. We do not make unrealistic promises of overnight rankings.",
  },
  {
    q: "Can you optimize an existing Google Business Profile?",
    a: "Yes. We audit your existing listing, correct NAP (Name, Address, Phone) details, refine categories, update descriptions and service lists, organize photos, and provide guidance on gathering and responding to customer reviews.",
  },
  {
    q: "Do you provide custom digital marketing packages?",
    a: "Absolutely. If your business has unique requirements, multiple locations, specific video production needs, or multi-brand operations, we can create a tailored scope aligned with your budget and objectives.",
  },
  {
    q: "How do you report marketing performance?",
    a: "We deliver transparent monthly activity reports detailing completed work, key metrics (such as organic impressions, traffic, ad cost-per-click, and lead conversions), and actionable recommendations for the upcoming cycle. You always have direct access to your analytics.",
  },
];

export default function AIMarketOptimization() {
  const [activeToolTab, setActiveToolTab] = useState("Analytics & Measurement");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Set page SEO metadata
  useEffect(() => {
    document.title =
      "Digital Marketing Services | SEO, Social Media & Google Ads | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore CoreHives digital marketing services, including social media management, SEO, AI search optimization, Google Ads, local SEO, and content marketing.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/services/ai-market-optimization";

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
      "Digital Marketing Services | SEO, Social Media & Google Ads | CoreHives"
    );
    setOgMeta(
      "og:description",
      "Explore CoreHives digital marketing services, including social media management, SEO, AI search optimization, Google Ads, local SEO, and content marketing."
    );
    setOgMeta(
      "og:url",
      "https://corehives.com/services/ai-market-optimization"
    );
    setOgMeta("og:type", "website");
  }, []);

  return (
    <div className="min-h-screen bg-[#000405] text-white">
      {/* ───── HERO SECTION ───── */}
      <section
        id="hero"
        className="relative z-0 flex w-full flex-col items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
      >
        {/* Background artwork */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt="hero background"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-85"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
        />

        {/* Ambient floating animations */}
        <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
          <BannerRightAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
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
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
              <img
                src={Cloud}
                alt="cloud icon"
                className="w-12 h-12 object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Full-Service Digital Marketing
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Grow Your Business With Smarter{" "}
            <span className="precision-gradient">Digital Marketing</span>
          </h1>

          {/* Supporting description */}
          <p className="mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
            From social media marketing and search engine optimization to paid
            advertising and AI search visibility, CoreHives helps businesses
            strengthen their online presence, reach the right audience, and build
            sustainable growth.
          </p>

          {/* Hero CTAs: Primary & Secondary */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <CTAButton to="/contact" className="w-full sm:w-auto font-semibold">
              Book a Free Consultation
            </CTAButton>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#07BEB8]/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#07BEB8]/50"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 text-[#07BEB8]" />
            </a>
          </div>
        </div>
      </section>

      {/* ───── 9 COMPREHENSIVE SERVICES SECTION ───── */}
      <section
        id="services"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Our Capabilities
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Everything You Need to{" "}
              <span className="precision-gradient">Grow Online</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              From building your social presence to improving search visibility
              and managing paid campaigns, our services help connect your
              business with the right audience across digital channels.
            </p>
          </div>

          {/* 9 Services Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#010A11]/70 p-6 sm:p-7 transition-all duration-300 hover:border-[#07BEB8]/50 hover:bg-[#021319]/90 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(7,190,184,0.3)]"
                >
                  <div>
                    {/* Header: Number & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-500 group-hover:text-[#07BEB8] transition-colors">
                        {service.number}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                        {service.badge}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="w-12 h-12 rounded-xl border border-[#07BEB8]/30 bg-[#07BEB8]/10 flex items-center justify-center mb-4 text-[#84fff7] group-hover:bg-[#07BEB8] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="border-t border-white/10 pt-4 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Key Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-200">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Clarification & Action */}
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="text-[11px] text-slate-400 leading-snug mb-4 italic">
                      {service.clarification}
                    </p>
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84fff7] hover:text-white transition-colors"
                    >
                      View related package{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── HOW SERVICES WORK TOGETHER ───── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#010d12]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Strategic Framework
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              One Connected Strategy.{" "}
              <span className="precision-gradient">
                Multiple Growth Channels.
              </span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              Digital marketing works best when each channel supports a clear
              business objective. CoreHives helps organize the right mix of
              services around your audience, goals, and budget.
            </p>
          </div>

          {/* 4 Stages Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectedStages.map((stage) => (
              <div
                key={stage.step}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#00080b]/90 p-6 sm:p-7 transition-all duration-300 hover:border-[#07BEB8]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-[#07BEB8]/40">
                      {stage.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#07BEB8]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {stage.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-200">
                    {stage.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] text-slate-400">
                    Stage {stage.step} of 04
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy customization clarification note */}
          <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Tailored to your business:</strong>{" "}
              Not every business requires every channel at once. We prioritize
              the channels with the highest relevance to your specific target
              market, customer acquisition model, and available resources.
            </p>
          </div>
        </div>
      </section>

      {/* ───── DEDICATED SOCIAL MEDIA MANAGEMENT SECTION ───── */}
      <section
        id="social-media-management"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Messaging & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Recurring Content Workflows
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Consistent Social Media{" "}
              <span className="precision-gradient">
                Without the Daily Workload
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Keep your business active and professional across relevant social
              channels with planned content, consistent publishing, and a
              recognizable brand voice.
            </p>

            {/* Key Deliverables Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Monthly Content Planning", desc: "Structured monthly calendar" },
                { title: "Branded Post Designs", desc: "Clean graphics in your brand style" },
                { title: "Captions & Copywriting", desc: "Engaging text & targeted hashtags" },
                { title: "Content Scheduling", desc: "Automated timed publishing" },
                { title: "Profile Optimization", desc: "Bios, links & highlight covers" },
                { title: "Monthly Reporting", desc: "Activity & engagement summaries" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                >
                  <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8]" />
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Package Scope Note */}
            <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-[#07BEB8] pl-3 py-1">
              Note: The exact number of posts, supported platforms (Instagram,
              Facebook, LinkedIn, TikTok), short-form video production, and
              community management depend on your selected package.
            </p>

            <div className="pt-2">
              <CTAButton to="#pricing" className="font-semibold">
                Explore Social Media Packages
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Visual Mockup (Editorial Calendar & Post Card) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-[#010D12]/90 p-5 sm:p-7 shadow-[0_20px_60px_-20px_rgba(7,190,184,0.3)] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#07BEB8]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Content Publishing Calendar
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#84fff7] bg-[#07BEB8]/10 border border-[#07BEB8]/30 px-2 py-0.5 rounded-full">
                  Monthly Cycle
                </span>
              </div>

              {/* Sample Scheduled Days */}
              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3.5 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="rounded-lg bg-[#07BEB8]/15 text-[#84fff7] font-bold text-xs p-2 text-center w-12 shrink-0">
                      MON
                      <span className="block text-[10px] text-slate-300 font-normal">
                        10:00
                      </span>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Educational Industry Carousel
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        LinkedIn & Instagram • 5-slide breakdown
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                    Published
                  </span>
                </div>

                <div className="rounded-xl border border-[#07BEB8]/30 bg-[#011a1f]/60 p-3.5 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="rounded-lg bg-[#07BEB8] text-black font-bold text-xs p-2 text-center w-12 shrink-0">
                      WED
                      <span className="block text-[10px] font-normal">14:00</span>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Product Spotlight & Feature Graphic
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Instagram, Facebook & LinkedIn • High-res graphic
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#84fff7] bg-[#07BEB8]/20 border border-[#07BEB8]/40 px-2 py-0.5 rounded-full shrink-0">
                    Scheduled
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-3.5 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="rounded-lg bg-white/10 text-white font-bold text-xs p-2 text-center w-12 shrink-0">
                      FRI
                      <span className="block text-[10px] text-slate-400 font-normal">
                        11:30
                      </span>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Short Video / Behind The Scenes
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Instagram Reels & TikTok • 30-second vertical
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full shrink-0">
                    Review Ready
                  </span>
                </div>
              </div>

              {/* Workflow Footnote */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Multi-platform distribution</span>
                <span className="text-slate-300">
                  Approved monthly prior to publishing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SEARCH VISIBILITY: SEO, AIO, AND GEO ───── */}
      <section
        id="search-visibility-section"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#01090d]/80 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Next-Generation Search
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Be Easier to Find on{" "}
              <span className="precision-gradient">
                Search Engines & AI-Powered Search
              </span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              Build a stronger online presence through technical SEO, helpful
              content, clear business information, and structured information
              that supports discoverability across evolving search experiences.
            </p>
          </div>

          {/* 3 Pillars Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1: SEO */}
            <div className="rounded-2xl border border-white/10 bg-[#000608]/90 p-7 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl border border-[#07BEB8]/30 bg-[#07BEB8]/10 flex items-center justify-center mb-5 text-[#84fff7]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Traditional SEO
                </h3>
                <p className="text-xs text-[#84fff7] font-semibold uppercase tracking-wider mb-4">
                  Search Engine Optimization
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Traditional organic search visibility focused on technical
                  site health, keyword intent research, on-page content, and
                  internal site structure.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Technical crawlability and Core Web Vitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Keyword mapping aligned with buyer search intent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Search Console indexing and error resolution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: AIO */}
            <div className="rounded-2xl border border-[#07BEB8]/40 bg-[#011419]/80 p-7 flex flex-col justify-between shadow-[0_20px_50px_-25px_rgba(7,190,184,0.3)]">
              <div>
                <div className="w-12 h-12 rounded-xl border border-[#07BEB8] bg-[#07BEB8] text-black flex items-center justify-center mb-5">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Search Optimization (AIO)
                </h3>
                <p className="text-xs text-[#84fff7] font-semibold uppercase tracking-wider mb-4">
                  AI Discovery Architecture
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Improving the clarity, structure, and accessibility of your
                  website content so AI-powered answer engines can accurately
                  read and digest your data.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Clear entity relationships and brand clarity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Structured data markup and schema tags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Crawl accessibility for AI bots and crawlers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: GEO */}
            <div className="rounded-2xl border border-white/10 bg-[#000608]/90 p-7 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl border border-[#07BEB8]/30 bg-[#07BEB8]/10 flex items-center justify-center mb-5 text-[#84fff7]">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Generative Engine Optimization (GEO)
                </h3>
                <p className="text-xs text-[#84fff7] font-semibold uppercase tracking-wider mb-4">
                  Entity & Authority Representation
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Strengthening the representation of your expertise, products,
                  and answers in formats likely to be referenced by generative
                  search systems.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Direct, authoritative answers to client queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Authoritativeness & credible sourcing signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span>Consistent knowledge graph representation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transparent Note on AI Search & Action */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm text-slate-200 leading-relaxed">
                <strong className="text-white">Transparent expectations:</strong>{" "}
                While we implement the industry's best structured data and
                editorial standards, inclusion in third-party answer engines
                (like ChatGPT, Perplexity, or Google AI Overviews) depends on
                their proprietary models and cannot be guaranteed.
              </p>
            </div>
            <CTAButton to="/contact" className="shrink-0 font-semibold">
              Request a Search Visibility Audit
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── PAID ADVERTISING SECTION (GOOGLE ADS) ───── */}
      <section
        id="paid-advertising"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Intent-Driven Advertising
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Turn Advertising Budgets Into{" "}
              <span className="precision-gradient">Measurable Campaigns</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              CoreHives helps businesses plan, launch, monitor, and optimize
              Google Ads search campaigns that connect with prospective
              customers actively looking for your solutions.
            </p>

            {/* Campaign Deliverables Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Campaign Strategy & Structure",
                "High-Intent Keyword Research",
                "Negative Keyword Filtering",
                "Conversion-Focused Ad Copy",
                "Landing Page Alignment Advice",
                "Conversion Tracking & GTM",
                "Budget & Bidding Optimization",
                "Transparent Monthly Reporting",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-200 rounded-lg bg-white/[0.02] border border-white/5 p-2.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Visible Clarification on Ad Spend */}
            <div className="rounded-xl border border-amber-300/20 bg-amber-400/5 p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200/90 leading-relaxed">
                <strong>Important billing note:</strong> Advertising platform
                spend is billed directly to you by Google or other advertising
                networks. CoreHives charges a separate campaign management fee
                for strategy, setup, copywriting, and ongoing optimization.
              </p>
            </div>

            <div>
              <CTAButton to="/contact" className="font-semibold">
                Discuss Your Advertising Goals
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Google Ads Campaign Snapshot Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-[#010D12]/90 p-5 sm:p-7 shadow-[0_20px_60px_-20px_rgba(7,190,184,0.3)] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <SiGoogleads className="w-5 h-5 text-[#4285F4]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Google Ads Campaign Control
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Status: Enabled
                </span>
              </div>

              {/* Sample Campaign Card */}
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Campaign: Search_HighIntent_Services</span>
                    <span className="text-[#84fff7]">Exact & Phrase Match</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    CoreHives LLC | Professional Development & Digital Solutions
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Custom web applications, digital marketing strategy &
                    scalable technology partner.
                  </p>
                </div>

                {/* Tracking & Governance Indicators */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 text-[11px] block">
                      Conversion Actions
                    </span>
                    <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Verified via GTM
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 text-[11px] block">
                      Negative Keywords
                    </span>
                    <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#07BEB8]" />
                      Active Filter List
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Direct client account ownership</span>
                <span>Weekly budget & search term review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── GOOGLE BUSINESS PROFILE & LOCAL SEO SECTION ───── */}
      <section
        id="local-seo-section"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#010a0e]/60 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl border border-white/10 bg-[#000608]/90 p-5 sm:p-6 shadow-[0_20px_50px_-20px_rgba(7,190,184,0.25)]">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#07BEB8]/20 text-[#84fff7] flex items-center justify-center font-bold text-sm">
                  <MapPin className="w-5 h-5 text-[#07BEB8]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Google Business Profile
                  </p>
                  <p className="text-xs text-slate-400">
                    Local Search Optimization
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>Name, Address, Phone (NAP)</span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    Verified
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>Primary & Secondary Categories</span>
                  <span className="text-[#84fff7] font-mono text-[11px]">
                    Optimized
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>Service List & Descriptions</span>
                  <span className="text-[#84fff7] font-mono text-[11px]">
                    Updated
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span>Review Response Templates</span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Messaging */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Local Search Discovery
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Help Local Customers{" "}
              <span className="precision-gradient">Find Your Business</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              For businesses serving specific geographic communities, accurate
              information, relevant service categories, helpful updates, and
              consistent local SEO practices support local discovery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              {[
                "Profile verification and audit",
                "Business description & attributes",
                "Category and catalogue refinement",
                "Photo and update publishing support",
                "Review management guidance",
                "Local citation & visibility checks",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-lg bg-white/[0.02] border border-white/5 p-2.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-[#07BEB8] pl-3 py-1">
              Note: We strictly follow Google's guidelines to maximize your
              presence. We do not promise guaranteed #1 Google Maps positions or
              guaranteed call volumes.
            </p>

            <div>
              <CTAButton to="/contact" className="font-semibold">
                Improve Your Local Visibility
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MARKETING PERFORMANCE THAT MATTERS (HONEST REPORTING) ───── */}
      <section
        id="performance-metrics"
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Transparent Measurement
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Marketing Performance{" "}
              <span className="precision-gradient">That Matters</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              We focus on tracking the key metrics that directly reflect business
              growth, eliminating fabricated statistics, black-box promises,
              and vanity indicators.
            </p>
          </div>

          {/* 6 Metric Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#01090d]/80 p-6 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/15 text-[#84fff7] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {metric.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reporting Cadence Banner */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-base font-bold text-white">
                How We Keep You Informed
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Every client receives monthly activity summaries, clear metric
                dashboards, and actionable recommendations so you always know
                what has been completed and what comes next.
              </p>
            </div>
            <CTAButton to="/contact" className="shrink-0 font-semibold">
              Book a Strategy Call
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── DIGITAL MARKETING PACKAGES (PRICING) ───── */}
      <div id="pricing">
        <PricingSection
          plans={digitalMarketingPricingPlans}
          eyebrow="Transparent Engagement Packages"
          title="Digital Marketing Packages Built for Sustainable Growth"
          description="Choose a focused delivery package to keep your channels active and visible, or combine services for an integrated growth partnership."
          savingsLabel="Save up to 25% with annual commitments"
          footerNote="Need a custom combination or multi-location marketing scope?"
          footerDescription="We create tailored quotes for businesses requiring custom post volumes, dedicated short-form video production, multi-location local SEO, or multi-platform advertising."
          footerCtaText="Request a Custom Quote"
          footerCtaHref="/contact"
        />
      </div>

      {/* ───── MARKETING STACK & TOOLS ───── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#01090d]/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Technology & Platforms
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Marketing <span className="precision-gradient">Stack & Tools</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Best-in-class analytics, advertising, and SEO platforms operated
              by specialists to extract reliable insights and performance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {Object.keys(toolTabs).map((tab) => {
              const active = tab === activeToolTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveToolTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                    active
                      ? "bg-[#07BEB8] text-black font-bold border-[#07BEB8] shadow-[0_0_20px_rgba(7,190,184,0.35)]"
                      : "bg-transparent text-slate-300 border-white/15 hover:border-white/40"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {toolTabs[activeToolTab].map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-white/10 bg-[#000608]/80 hover:border-[#07BEB8]/50 hover:bg-[#021319]/90 transition-all group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-sm font-semibold text-white">
                  {tool.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-1">
                  {tool.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROCESS SECTION ───── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              A Clear Process From{" "}
              <span className="precision-gradient">Strategy to Execution</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              A structured approach ensuring every marketing dollar and creative
              asset has a defined purpose and clear accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl border border-white/10 bg-[#01090d]/80 p-6 sm:p-7 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold text-[#07BEB8]">
                        {step.num}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── FREQUENTLY ASKED QUESTIONS (ACCORDION) ───── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#01090d]/80 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
              Got Questions?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Frequently Asked{" "}
              <span className="precision-gradient">Questions</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Clear, transparent answers about our digital marketing
              capabilities and terms.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#07BEB8]/40 bg-[#011419]/60"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#07BEB8]/50"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 text-[#07BEB8] ${
                        isOpen ? "rotate-180 border-[#07BEB8]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── FINAL CONSULTATION CTA ───── */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-transparent via-[#01171d]/60 to-[#000405]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#84fff7] uppercase">
            Start Your Growth Sprints
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's Build Your{" "}
            <span className="precision-gradient">Digital Growth Strategy</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-300">
            Tell us about your business, your goals, and the challenges you're
            facing. We'll help identify the digital marketing services that make
            the most sense for your next stage of growth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton to="/contact" className="w-full sm:w-auto font-semibold">
              Book a Free Consultation
            </CTAButton>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#07BEB8]/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 text-[#07BEB8]" />
            </a>
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
