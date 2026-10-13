import { lazy, Suspense, useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import AiMarketHero from "../assets/ai-market-hero.webp";
import AiGrowthChart from "../assets/ai-growth-chart.webp";
import Analytic from "../assets/icons/analytic.webp";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import Cloud from "../assets/icons/cloud.webp";
import leftLight from "../assets/left-light.webp";
import rightLight from "../assets/right-light.webp";
import BgApp from "../assets/bg-app.webp";
import { ArrowRight, ChevronDown } from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import aiMarketOptimizationPricingPlans from "../components/pricing/aiMarketOptimizationPricingData.json";
import { FaReact, FaPython, FaLinkedin } from "react-icons/fa";
import {
  SiNextdotjs,
  SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiHotjar, SiMixpanel, SiHubspot,
  SiGoogleads, SiMeta, SiTiktok, SiX, SiMailchimp,
  SiTensorflow, SiHuggingface, SiGooglebigquery, SiDatadog,
} from "react-icons/si";

const SiOpenai = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const Footer = lazy(() => import("../components/layout/footer.jsx"));

const services = [
  {
    title: "AI-Driven SEO & Content Intelligence",
    description:
      "Programmatic content cluster strategy, AI-powered keyword intelligence, entity optimisation, and automated internal linking, systems that build topical authority faster than any manual editorial calendar could.",
  },
  {
    title: "Paid Media AI Automation",
    description:
      "Google PMax, Meta Advantage+, LinkedIn ABM, and TikTok Paid, AI-managed campaigns with dynamic creative optimisation, real-time bid adjustments, and cross-channel attribution that tells you what's actually driving revenue.",
  },
  {
    title: "Conversion Rate Optimisation",
    description:
      "Full-funnel CRO, AI-personalised landing pages, behavioural heatmap analysis, multivariate testing, and funnel leak detection. We find where revenue is escaping and seal it systematically.",
  },
  {
    title: "Predictive Analytics & Intelligence",
    description:
      "Custom ML models forecasting customer LTV, churn probability, content performance, and campaign outcomes, giving your team actionable intelligence before your competitors react.",
  },
];

const whyItems = [
  { id: "compound", title: "Compounding Growth, Not Campaigns", description: "We build marketing systems, not campaigns. Every AI optimisation loop compounds, organic authority, paid efficiency, and conversion rate all improve together the longer the engagement runs." },
  { id: "attribution", title: "Single Source of Truth Reporting", description: "Custom attribution models, GA4 + BigQuery pipelines, and unified dashboards give your team clarity on what's actually driving revenue, not vanity metrics." },
  { id: "noblackbox", title: "No Black Boxes, No Vague KPIs", description: "Every action has a measurable output tied to a business metric. Traffic, CAC, ROAS, conversion rate, we agree the KPIs upfront and report against them every week." },
  { id: "fullstack", title: "Full-Funnel Ownership", description: "One team manages organic, paid, and conversion, eliminating the coordination overhead of fragmented agency relationships and the finger-pointing when channels underperform." },
  { id: "audit", title: "Free AI Growth Audit Included", description: "Every engagement starts with a comprehensive audit of your current organic, paid, and conversion performance, identifying every gap and opportunity before a single budget decision is made." },
];

const techTabData = {
  "Analytics & SEO": [
    { label: "Google Analytics", icon: <SiGoogleanalytics className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#E37400" }} /> },
    { label: "Search Console", icon: <SiGooglesearchconsole className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#458CF5" }} /> },
    { label: "Semrush", icon: <SiSemrush className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FF642D" }} /> },
    { label: "Hotjar", icon: <SiHotjar className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#F6461A" }} /> },
    { label: "Mixpanel", icon: <SiMixpanel className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#7856FF" }} /> },
    { label: "HubSpot", icon: <SiHubspot className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FF7A59" }} /> },
  ],
  "Paid Media": [
    { label: "Google Ads", icon: <SiGoogleads className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#4285F4" }} /> },
    { label: "Meta Ads", icon: <SiMeta className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#0082FB" }} /> },
    { label: "TikTok Ads", icon: <SiTiktok className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FFFFFF" }} /> },
    { label: "LinkedIn Ads", icon: <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#0A66C2" }} /> },
    { label: "X Ads", icon: <SiX className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FFFFFF" }} /> },
    { label: "Mailchimp", icon: <SiMailchimp className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FFE01B" }} /> },
  ],
  "AI & Data": [
    { label: "OpenAI", icon: <SiOpenai className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FFFFFF" }} /> },
    { label: "TensorFlow", icon: <SiTensorflow className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FF6F00" }} /> },
    { label: "Hugging Face", icon: <SiHuggingface className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#FFD21E" }} /> },
    { label: "BigQuery", icon: <SiGooglebigquery className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#4285F4" }} /> },
    { label: "Python", icon: <FaPython className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#3776AB" }} /> },
    { label: "Datadog", icon: <SiDatadog className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: "#632CA6" }} /> },
  ],
};

export default function AIMarketOptimization() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [openId, setOpenId] = useState("compound");
  const [activeTechTab, setActiveTechTab] = useState("Analytics & SEO");

  return (
    <>
      {/* BANNER */}
      <section id="home" className="relative z-0 flex w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hero_bg} alt="hero-bg" loading="eager" fetchPriority="high" className="h-full w-full object-cover object-center opacity-90" />
        </div>
        <img src={leftLight} alt="" aria-hidden="true" loading="eager" fetchPriority="high" className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left" />
        <img src={rightLight} alt="" aria-hidden="true" loading="eager" fetchPriority="high" className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right" />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">AI-Driven Growth Systems</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            Growth That <span className="precision-gradient">Compounds</span>
            <br />
            Powered by AI
          </h1>
          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            AI-driven marketing systems that optimise every channel simultaneously, compounding gains that manual teams simply can't match.
          </p>
        </div>

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

      {/* HERO CONTENT */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative group overflow-hidden rounded-lg border border-[#07BEB8]/30">
              <img src={AiMarketHero} alt="AI market optimization" className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-[11px] tracking-[0.25em] uppercase mb-5 px-4 py-1.5 rounded-full" style={{ background: "rgba(7,190,184,0.12)", border: "1px solid rgba(7,190,184,0.35)", color: "#FFF" }}>
                AI-powered marketing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI Market <span className="precision-gradient">Optimization</span></h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Traditional marketing agencies run campaigns. CoreHives builds AI-driven growth systems.
              <br /><br />
              We deploy machine learning across your entire marketing funnel, analysing every signal, automating optimisation loops, and compounding performance gains that no manual team can replicate at scale. Your competitors are still A/B testing manually. You'll be running 40 tests simultaneously.
            </p>
            <div className="flex items-center flex-wrap gap-4 pt-4">
              <CTAButton href="/contact">
                Free AI Audit
              </CTAButton>
              <div className="flex flex-col ml-2 sm:ml-4">
                <span className="text-4xl font-bold text-[#07BEB8]">32%</span>
                <span className="text-gray-400 text-sm">Avg. Traffic Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Turning your data into<br />compounding revenue{" "}
                <span className="precision-gradient">through:</span>
              </h2>
            </div>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <button onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)} className="w-full flex items-start justify-between p-4 rounded-lg border border-white/10 hover:border-[#07BEB8]/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="flex-1 text-left">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#07BEB8] transition-colors">{service.title}</h3>
                    </div>
                    <div className={`flex-shrink-0 ml-4 text-[#07BEB8] transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-0"}`}>
                    <div className="px-4 py-3 text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-[#07BEB8] ml-2">{service.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESULTS */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">AI Growth Results <span className="precision-gradient">Worth Showing</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">Measurable outcomes across organic, paid, and conversion, not vanity metrics, not vague "brand awareness."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"><img src={Analytic} className="h-5" alt="" /></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">+312% Organic<br />Traffic Growth</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Average Organic Session Growth Across All Active SEO Clients in the First 12 Months of Engagement.</p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"><img src={Analytic} className="h-5" alt="" /></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">7.8× Average<br />ROAS at Scale</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Return on Ad Spend Achieved Across Paid Media Engagements, AI Bidding Outperforming Manual by 3.2×.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-900/20 to-transparent">
                <img src={AiGrowthChart} alt="AI growth results" className="w-full h-full object-contain" />
              </div>
              <div className="rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-2 flex items-center justify-between">
                <div className="flex mx-auto items-center gap-3">
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">80+</p>
                    <p className="text-gray-400 text-xs mt-1">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"><img src={Analytic} className="h-5" alt="" /></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">–58% Average<br />Cost Per Acquisition</h3>
                <p className="text-gray-300 text-sm leading-relaxed">AI Bid Optimisation Eliminates Wasted Spend on Underperforming Segments, More Revenue, Less Budget.</p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"><img src={Analytic} className="h-5" alt="" /></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">+4.2× Conversion<br />Rate Lift</h3>
                <p className="text-gray-300 text-sm leading-relaxed">AI-Personalised Landing Experiences Outperform Static Pages by 4.2× on Conversion Rate, Consistently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COREHIVES */}
      <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why <span className="precision-gradient">AI Marketing</span> Outperforms Traditional Agencies
            </h2>
            <p className="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-sm">Systems that compound, not campaigns that expire, AI-driven growth with full-funnel transparency.</p>
          </div>
          <div className="flex flex-col gap-3">
            {whyItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#2a2a2a] bg-[#141414]" : "border-[#1f1f1f] bg-[#0f0f0f]"}`}>
                  <button onClick={() => setOpenId(isOpen ? null : item.id)} className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none">
                    <span className="text-sm sm:text-base font-bold text-white">{item.title}</span>
                    <span className="flex-shrink-0 ml-4 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out px-5 ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"} overflow-hidden`}>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection
        plans={aiMarketOptimizationPricingPlans}
        eyebrow="Transparent AI growth investment tiers"
        title="AI marketing packages built for measurable revenue outcomes"
        description="From organic SEO systems to full-funnel AI growth programmes, structured engagements with weekly reporting, clear KPIs, and results tied directly to business metrics."
        savingsLabel="Save up to 20% on 6-month+ AI growth retainers"
        footerNote="Need a custom AI marketing programme or enterprise growth scope?"
        footerDescription="We also quote full-funnel AI growth programmes, enterprise data infrastructure builds, multi-brand marketing operations, and bespoke ML model development."
        footerCtaText="Claim your free AI growth audit"
        footerCtaHref="/contact"
      />

      {/* TOOLS */}
      <section className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Marketing <span className="precision-gradient">Stack & Tools </span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">Best-in-class analytics, advertising, and SEO platforms, operated by specialists who extract maximum performance from every tool.</p>
          </div>
          <div className="flex flex-nowrap overflow-x-auto gap-3 sm:gap-4 mb-12 pb-1 -mx-6 px-6 sm:-mx-12 sm:px-12 md:-mx-20 md:px-20 lg:mx-0 lg:px-0 lg:justify-center">
            {["Analytics & SEO", "Paid Media", "AI & Data"].map((tab) => {
              const active = tab === activeTechTab;
              return (
                <button key={tab} onClick={() => setActiveTechTab(tab)} className={`shrink-0 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${active ? "bg-[#07BEB8] text-white border-[#07BEB8] shadow-[0_0_25px_rgba(7,190,184,0.45)]" : "bg-transparent text-gray-200 border-white/25 hover:border-white/50"}`}>{tab}</button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {techTabData[activeTechTab].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border border-white/40 hover:border-[#07BEB8]/60 hover:shadow-[0_0_25px_rgba(7,190,184,0.15)] transition-all cursor-pointer group h-32 sm:h-36">
                <div className="group-hover:scale-110 transition-transform">{tech.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-white text-center">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
}
