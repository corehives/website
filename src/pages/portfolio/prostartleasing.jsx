import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  ExternalLink,
  FileText,
  Users,
  Activity,
  Check,
  Wrench,
  UserCheck,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic project screenshots
import coverShowcaseImg from "../../assets/prostart/cover-showcase.webp";
import dashboardImg from "../../assets/prostart/dashboard-overview.webp";
import newLeaseImg from "../../assets/prostart/new-lease-application.webp";
import appDetailsImg from "../../assets/prostart/application-details-funded.webp";
import archSummaryImg from "../../assets/prostart/architecture-summary.webp";

// Other case study covers for footer navigation
import BaileyBeauImg from "../../assets/bailey-beau-showcase.webp";
import DoorsImg from "../../assets/doors-showcase.webp";
import ProDocetImg from "../../assets/prodocet-showcase.webp";
import RescueSpotImg from "../../assets/rescue-spot-showcase.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiLaravel,
  SiReact,
  SiMysql,
  SiStripe,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// Official Tech Icons
const LaravelIcon = () => <SiLaravel className="w-6 h-6 text-[#FF2D20]" />;
const ReactIcon = () => <SiReact className="w-6 h-6 text-[#61DAFB]" />;
const MysqlIcon = () => <SiMysql className="w-6 h-6 text-[#00758F]" />;
const StripeIcon = () => <SiStripe className="w-6 h-6 text-[#635BFF]" />;
const NextjsIcon = () => <SiNextdotjs className="w-6 h-6 text-white" />;
const TailwindIcon = () => <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />;

export default function ProStartLeasingCaseStudy() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [heroView, setHeroView] = useState("cover");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "ProStartLeasing | Lease-to-Own Equipment Management Portal | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives designed and built ProStartLeasing, a modern lease-to-own equipment management portal featuring 4-step applications, dynamic early purchase payoff previews, credit risk underwriting, and automated Stripe billing.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/prostartleasing";

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
      "ProStartLeasing | Lease-to-Own Equipment Management Portal | CoreHives"
    );
    setOgMeta(
      "og:description",
      "A complete digital equipment leasing ecosystem with real-time early purchase amortization, dealer management, automated underwriting, and Stripe AutoPay."
    );
    setOgMeta("og:url", "https://corehives.com/portfolio/prostartleasing");
    setOgMeta("og:type", "article");

    // JSON-LD Structured Data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ProStartLeasing",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://prostartleasing.com/",
      description:
        "Lease-to-own equipment management portal developed by CoreHives LLC, featuring automated application workflows, risk assessment, payoff previews, and recurring billing.",
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

  const workflowSteps = [
    {
      num: "01",
      title: "Application Submission",
      shortDesc: "Dealer inputs customer ZIP and equipment selection.",
      detail:
        "Dealers launch a streamlined application using customer ZIP codes. Equipment specifications (cash price, condition, make/model like Worldlawn Diamondback 60\") and requested terms are captured in minutes.",
      badge: "Dealer Workspace",
    },
    {
      num: "02",
      title: "Underwriting & Risk Review",
      shortDesc: "Identity, employment, and bank data verification.",
      detail:
        "The underwriting system cross-checks applicant driver license details, residential history, employment status, and automated Plaid bank data to confirm credit risk profile pass/fail criteria.",
      badge: "Automated Underwriting",
    },
    {
      num: "03",
      title: "Terms & Contract Generation",
      shortDesc: "Transparent monthly payment and buyout schedule.",
      detail:
        "The portal computes monthly rental ($373.69), sales tax (8.25%), total monthly obligations ($404.52), and generates a 36-month lease agreement with an early purchase option (EPO) amortization preview.",
      badge: "Contract Engine",
    },
    {
      num: "04",
      title: "Deposit & E-Signature",
      shortDesc: "Initial payment collection and digital contract signing.",
      detail:
        "The customer signs the lease electronically and submits initial security deposit ($443.94) plus upfront monthly installment via secure Stripe processing, triggering automated receipt generation.",
      badge: "Stripe Billing",
    },
    {
      num: "05",
      title: "Dealer Checklist & Verification",
      shortDesc: "Invoice upload, equipment serials, and dealer notes.",
      detail:
        "Dealers complete an interactive funding checklist: confirming payment collection, uploading the signed supplier invoice, documenting unit serials, and exchanging real-time notes with ProStart review teams.",
      badge: "Dealer Operations",
    },
    {
      num: "06",
      title: "Funding & AutoPay Activation",
      shortDesc: "Equipment release to customer and merchant payout.",
      detail:
        "Upon administrative sign-off, the application moves to Funded status. The dealer receives payout, the customer takes delivery, and recurring monthly AutoPay charges schedule automatically.",
      badge: "Lifecycle Complete",
    },
  ];

  return (
    <div className="bg-[#00080d] text-white min-h-screen selection:bg-[#07BEB8]/30 selection:text-[#07BEB8]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
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
              CASE STUDY | FINTECH &amp; EQUIPMENT LEASING
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            ProStart<span className="text-[#07BEB8]">Leasing</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Lease-to-Own Equipment Management Portal
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A comprehensive lease-to-own equipment management portal designed from Figma
            to production by CoreHives LLC. Built to empower commercial contractors,
            dealers, and equipment providers with real-time application workflows,
            transparent early payoff calculations, automated risk underwriting, and
            recurring Stripe AutoPay.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToOverview}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Explore Case Study
            </CTAButton>
            <a
              href="https://prostartleasing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:border-[#07BEB8]/60"
            >
              <span>Visit Live Portal</span>
              <ExternalLink className="w-4 h-4 text-[#07BEB8]" />
            </a>
            <CTAButton to="/contact">Discuss Your Project</CTAButton>
          </div>

          {/* Metadata Card Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#010e14]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Industry &amp; Client Market
              </p>
              <p className="text-sm font-medium text-white">
                FinTech &amp; Equipment Leasing
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Commercial Power Equipment (US)</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Deliverables
              </p>
              <p className="text-sm font-medium text-white">
                Full-Stack Portal &amp; Workflows
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Figma UI/UX • End-to-End Build</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Backend &amp; Payments
              </p>
              <p className="text-sm font-medium text-white">
                Laravel REST API • MySQL 8
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Stripe Recurring Billing &amp; AutoPay</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Frontend &amp; Experience
              </p>
              <p className="text-sm font-medium text-white">
                React • Next.js • Tailwind CSS
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Interactive Payoff &amp; Status Stepper</p>
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
                  prostartleasing.com / {heroView === "cover" ? "portfolio/overview" : heroView === "dashboard" ? "dealer/dashboard" : heroView === "lease" ? "application/lease-details" : heroView === "details" ? "applications/funded" : "architecture"}
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
                  Portfolio Cover
                </button>
                <button
                  onClick={() => setHeroView("dashboard")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "dashboard"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Dealer Dashboard
                </button>
                <button
                  onClick={() => setHeroView("lease")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "lease"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  New Lease &amp; Payoff
                </button>
                <button
                  onClick={() => setHeroView("details")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "details"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Application Details
                </button>
                <button
                  onClick={() => setHeroView("arch")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "arch"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Tech Architecture
                </button>
              </div>
            </div>

            {/* Displayed Image */}
            <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-[#000d14] overflow-hidden">
              <img
                src={
                  heroView === "cover"
                    ? coverShowcaseImg
                    : heroView === "dashboard"
                    ? dashboardImg
                    : heroView === "lease"
                    ? newLeaseImg
                    : heroView === "details"
                    ? appDetailsImg
                    : archSummaryImg
                }
                alt="ProStartLeasing Interface Showcase"
                className="w-full h-full object-contain object-top"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 4 STAKEHOLDER ROLES (SINGLE ROW ON DESKTOP)
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 md:py-28 relative border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ROLE-BASED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              One Portal. Four Connected Stakeholder Workflows.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Commercial lease-to-own transactions require seamless alignment
              between equipment merchants, buyers, credit underwriters, and
              executives. ProStartLeasing consolidates the entire lifecycle into
              tightly scoped, secure role environments.
            </p>
          </div>

          {/* 4 Roles Grid - Single Line on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Role 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 01
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Super Admin &amp; Owner
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Full governance across all dealer networks, global funded volume analytics ($44K+), fee structures, and master system configurations.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 02
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Equipment Dealers
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Launch applications by customer ZIP, configure unit pricing, upload supplier invoices, resolve checklist items, and monitor merchant funding.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 03
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Risk &amp; Underwriting
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Review applicant identity, verify employer history, evaluate Plaid banking data, validate risk scores, and record audit notes before approval.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                  ROLE 04
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  Lease Customers
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Review 36-month lease terms, complete digital contracts, track monthly billing receipts, and inspect real-time early purchase buyout options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE CHALLENGE & THE SOLUTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Challenge */}
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Eliminating the Pain of Traditional Equipment Financing
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Commercial power equipment—such as zero-turn mowers, skid steers,
                  and industrial outdoor gear—represents significant capital investment.
                  Traditional lease and financing models relied on paper-heavy applications,
                  opaque rate multipliers, delayed underwriting decisions, and cumbersome
                  dealer payment reconciliations.
                </p>
                <p>
                  Dealers struggled to provide fast quotes at point-of-sale, while customers
                  often hesitated due to unclear total ownership costs and punitive early
                  buyout penalties. ProStart needed an automated, high-trust digital portal
                  that could calculate instant terms, automate risk scoring, and streamline
                  funding within 24 hours.
                </p>
              </div>

              {/* Challenge bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-xs font-semibold text-red-400 mb-1">Legacy Barrier</p>
                  <p className="text-xs text-gray-400">Days lost waiting on manual bank and ID verifications</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-xs font-semibold text-red-400 mb-1">Opaque Terms</p>
                  <p className="text-xs text-gray-400">Buyers unsure of exact payoff numbers across the term</p>
                </div>
              </div>
            </div>

            {/* Right: CoreHives Solution */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#011a24] to-[#010c14] border border-[#07BEB8]/30 shadow-[0_10px_40px_rgba(7,190,184,0.1)]">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                THE COREHIVES SOLUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                A Transparent, API-Driven Lease-to-Own Platform
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                CoreHives engineered an end-to-end digital ecosystem connecting
                dealers, applicants, underwriters, and banking rails through a clean,
                modern interface designed in Figma and deployed on scalable cloud infrastructure.
              </p>

              <div className="space-y-3.5">
                {[
                  "4-Step Application Wizard: Equipment, Lease Details, Customer Info, and Risk & Verification.",
                  "Live Early Purchase Option (EPO): Real-time payoff recalculation descending after every monthly installment.",
                  "Automated Underwriting: Identity, employment, and Plaid bank verification with instantaneous pass/fail states.",
                  "Automated Stripe AutoPay: 67% enrollment rate with recurring card and ACH billing, reducing manual follow-ups.",
                  "Audit-Ready Dealer Portal: Checklist verification, invoice tracking, and direct communication threads.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#07BEB8]/20 border border-[#07BEB8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#07BEB8]" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: INTERACTIVE APPLICATION LIFECYCLE (STEPPER)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#000405]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              WORKFLOW ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              From Customer ZIP to Funded Lease in 6 Steps
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              The platform standardizes the lease-to-own progression through an
              auditable, real-time lifecycle tracker. Click each stage to see how data flows.
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? "bg-[#07BEB8]/15 border-[#07BEB8] shadow-[0_0_20px_rgba(7,190,184,0.2)]"
                      : "bg-[#01141c]/50 border-white/10 hover:border-white/25 hover:bg-[#01141c]"
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold block mb-1 ${
                      isActive ? "text-[#07BEB8]" : "text-gray-500"
                    }`}
                  >
                    STAGE {step.num}
                  </span>
                  <p
                    className={`text-sm font-semibold leading-tight line-clamp-1 ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {step.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#01141c]/80 border border-[#07BEB8]/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#07BEB8] mb-1 block">
                  ACTIVE LIFECYCLE STAGE • {workflowSteps[activeWorkflowStep].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Step {workflowSteps[activeWorkflowStep].num}: {workflowSteps[activeWorkflowStep].title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-xs font-medium text-[#07BEB8] self-start md:self-auto">
                <Activity className="w-3.5 h-3.5" />
                <span>Live State Engine</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-4xl mb-6">
              {workflowSteps[activeWorkflowStep].detail}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400">
                Stage {activeWorkflowStep + 1} of {workflowSteps.length}
              </span>
              <div className="flex gap-2">
                <button
                  disabled={activeWorkflowStep === 0}
                  onClick={() => setActiveWorkflowStep((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg border border-white/20 text-xs font-medium text-gray-300 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <button
                  disabled={activeWorkflowStep === workflowSteps.length - 1}
                  onClick={() =>
                    setActiveWorkflowStep((prev) =>
                      Math.min(workflowSteps.length - 1, prev + 1)
                    )
                  }
                  className="px-3.5 py-1.5 rounded-lg bg-[#07BEB8] text-[#00151c] text-xs font-bold hover:bg-[#07BEB8]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: INTERFACE SHOWCASE DEEP DIVES
      ───────────────────────────────────────────────────────────── */}

      {/* Deep Dive 1: Dealer & Owner Dashboard */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_50px_rgba(7,190,184,0.1)]">
                <img
                  src={dashboardImg}
                  alt="ProStartLeasing Dealer & Owner Dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Dealer &amp; Owner Operations Command Center — Outdoor Fix · Willis
              </p>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] block">
                DEALER OPERATIONS COMMAND CENTER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Real-Time Funded Volume &amp; Application Metrics
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                The operations dashboard gives equipment merchants and platform owners
                an instant pulse on their business. Dealers can launch new applications by customer
                ZIP code in a single click, monitor urgent action items, and track 8-week volume trends.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Application Pipeline</span>
                    <span className="text-xs font-mono text-[#07BEB8]">50 Total • 6 Approved</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Clean categorization across Needs Info, Under Review, Approved, and Funded states.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Funded Volume Velocity</span>
                    <span className="text-xs font-mono text-emerald-400">$44K (+44%)</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Interactive 8-week bar charts visualizing units funded and revenue throughput.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: New Lease Application & Early Purchase Payoff */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] block">
                TRANSPARENT AMORTIZATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Live Early Purchase Option (EPO) Payoff Calculation
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                One of ProStartLeasing&apos;s standout innovations is complete payoff transparency.
                Instead of locking customers into rigid penalties, the system dynamically computes
                their exact buyout discount for each of the 36 months in advance.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-xs font-semibold text-white mb-1">4-Step Guided Wizard</p>
                  <p className="text-xs text-gray-400">
                    1. Equipment Selection • 2. Lease Details • 3. Customer Info • 4. Risk &amp; Verification.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-xs font-semibold text-white mb-1">Dynamic Lease Summary</p>
                  <p className="text-xs text-gray-400">
                    Live calculation of cash price ($7,399), sales tax (8.25%), security deposit ($360), and Day-1 buyout ($7,095.97).
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_50px_rgba(7,190,184,0.1)]">
                <img
                  src={newLeaseImg}
                  alt="New Lease Application and Early Purchase Option Payoff Preview"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                New Lease Application Wizard &amp; Descending Early Purchase Payoff Chart
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: Application Underwriting & Dealer Notes */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_50px_rgba(7,190,184,0.1)]">
                <img
                  src={appDetailsImg}
                  alt="Application Details, Risk Profile, and Dealer Notes"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Application Detail View — Robert Kirkland · $ Funded Status with Audit Trail
              </p>
            </div>

            {/* Copy */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] block">
                UNDERWRITING &amp; AUDITABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Automated Risk Verification &amp; Dealer Collaboration
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Every application consolidates customer records, lease terms, equipment serials,
                and underwriting results into a single audit-ready dashboard with live status progression.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-xs font-semibold text-emerald-400 mb-1">Passed Risk Profile</p>
                  <p className="text-xs text-gray-400">
                    Integrated identity checks, employer verification, and Plaid bank account confirmation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-xs font-semibold text-white mb-1">Two-Way Dealer Notes</p>
                  <p className="text-xs text-gray-400">
                    Threaded commentary between dealers and ProStart reviewers keeps communications in context.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-xs font-semibold text-white mb-1">Pre-Funding Checklist</p>
                  <p className="text-xs text-gray-400">
                    Mandatory verification for payment collection ($848.46), invoice receipt, and signed contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 4: Production Architecture */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#000405]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] block">
                ENGINEERING FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Robust Full-Stack Web Architecture
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                ProStartLeasing was designed in Figma and developed end-to-end using
                modern enterprise technologies. The stack pairs high-performance frontend
                responsiveness with secure, transactional backend services.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold text-[#FF2D20] block mb-0.5">LARAVEL</span>
                  <span className="text-xs text-gray-400">REST API &amp; Amortization</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold text-[#61DAFB] block mb-0.5">REACT</span>
                  <span className="text-xs text-gray-400">Responsive UI &amp; State</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold text-[#00758F] block mb-0.5">MYSQL</span>
                  <span className="text-xs text-gray-400">Relational Ledger</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-bold text-[#635BFF] block mb-0.5">STRIPE</span>
                  <span className="text-xs text-gray-400">AutoPay &amp; Deposits</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_50px_rgba(7,190,184,0.1)]">
                <img
                  src={archSummaryImg}
                  alt="ProStartLeasing Architecture Graphic"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                System Architecture Overview — Designed in Figma, Engineered by CoreHives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TECHNOLOGY STACK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#000a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Verified Production Technologies
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Selected for transactional reliability, strict financial data integrity, and responsive performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tech 1 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <LaravelIcon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Laravel REST API</h3>
                  <p className="text-xs text-gray-400">Backend Core</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Handles amortization math, lease agreement generation, status state machines, webhooks, and granular multi-tenant role authorizations.
              </p>
            </div>

            {/* Tech 2 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1.5">
                  <ReactIcon />
                  <NextjsIcon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">React &amp; Next.js</h3>
                  <p className="text-xs text-gray-400">Frontend Portal</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Delivers smooth 4-step wizard transitions, dynamic payoff charts, dealer dashboard analytics, and clean typography with Barlow fonts.
              </p>
            </div>

            {/* Tech 3 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <StripeIcon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Stripe Billing &amp; AutoPay</h3>
                  <p className="text-xs text-gray-400">Payment Engine</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Processes upfront security deposits, schedules recurring 36-month customer payments, and powers the 67% AutoPay enrollment rate.
              </p>
            </div>

            {/* Tech 4 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MysqlIcon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">MySQL 8 Relational DB</h3>
                  <p className="text-xs text-gray-400">Data Integrity</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                ACID-compliant storage for lease agreements, customer identities, payment receipts, equipment units, and dealer account relationships.
              </p>
            </div>

            {/* Tech 5 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <TailwindIcon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Tailwind CSS</h3>
                  <p className="text-xs text-gray-400">Visual Styling</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                High-contrast red, dark charcoal, and crisp white interface styling optimized for desktop showroom counters and mobile field devices.
              </p>
            </div>

            {/* Tech 6 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#07BEB8]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Built-in E-Signature</h3>
                  <p className="text-xs text-gray-400">Document Signing</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Instant digital contract compilation with embedded e-signature verification, generating downloadable PDF copies for customer and dealer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: VERIFIED PROJECT IMPACT METRICS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              RESULTS &amp; PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Measurable Operational Impact
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Verified outcomes recorded across dealer networks and customer transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/80 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#07BEB8] mb-2 font-mono">
                $44K+
              </div>
              <p className="text-sm font-semibold text-white mb-1">Funded Volume Velocity</p>
              <p className="text-xs text-gray-400">Recorded across active 4-week window (+44% growth)</p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/80 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#07BEB8] mb-2 font-mono">
                50+
              </div>
              <p className="text-sm font-semibold text-white mb-1">Commercial Applications</p>
              <p className="text-xs text-gray-400">Processed through end-to-end dealer workflow</p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/80 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-2 font-mono">
                67%
              </div>
              <p className="text-sm font-semibold text-white mb-1">AutoPay Enrollment Rate</p>
              <p className="text-xs text-gray-400">Automated recurring billing via Stripe</p>
            </div>

            {/* Metric 4 */}
            <div className="p-6 rounded-2xl bg-[#01141c]/80 border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 font-mono">
                &lt; 24h
              </div>
              <p className="text-sm font-semibold text-white mb-1">Turnaround to Funding</p>
              <p className="text-xs text-gray-400">From customer submission to merchant disbursement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: CALL TO ACTION (CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative bg-[#000405] text-center overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(7,190,184,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
            BUILD YOUR NEXT DIGITAL PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Need a Custom FinTech or Equipment Management Portal?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            From automated lease-to-own portals and e-commerce platforms to complex
            enterprise workflow tools, CoreHives delivers robust software tailored
            precisely to your commercial operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Discuss Your Project</CTAButton>
            <a
              href="https://prostartleasing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:border-[#07BEB8]/60"
            >
              <span>Visit ProStartLeasing</span>
              <ExternalLink className="w-4 h-4 text-[#07BEB8]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION: EXPLORE MORE CASE STUDIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-t border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-2 block">
                MORE CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Discover Other Platforms Built and Scaled by CoreHives LLC
              </h2>
            </div>
            <Link
              to="/portfolio/web-development"
              className="inline-flex items-center gap-2 text-sm text-[#07BEB8] hover:text-[#4eecea] transition-colors font-semibold self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bailey & Beau */}
            <Link
              to="/portfolio/bailey-and-beau"
              className="group block rounded-2xl border border-white/10 bg-[#01141c]/60 overflow-hidden hover:border-[#07BEB8]/50 transition-all hover:shadow-xl hover:shadow-[#07BEB8]/10"
            >
              <div className="h-44 overflow-hidden relative bg-black/40">
                <img
                  src={BaileyBeauImg}
                  alt="Bailey & Beau"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  EdTech &amp; Family Platform
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  Bailey &amp; Beau
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Interactive remote family reading with synchronized WebRTC video and live drawing canvas.
                </p>
              </div>
            </Link>

            {/* Doors */}
            <Link
              to="/portfolio/doors-ecommerce-marketplace"
              className="group block rounded-2xl border border-white/10 bg-[#01141c]/60 overflow-hidden hover:border-[#07BEB8]/50 transition-all hover:shadow-xl hover:shadow-[#07BEB8]/10"
            >
              <div className="h-44 overflow-hidden relative bg-black/40">
                <img
                  src={DoorsImg}
                  alt="Doors Multi-Vendor Marketplace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  E-Commerce &amp; Retail Tech
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  Doors Marketplace
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Multi-vendor marketplace for Saudi Arabia with automated order splitting and MyFatoorah payments.
                </p>
              </div>
            </Link>

            {/* ProDocet LMS */}
            <Link
              to="/portfolio/prodocet-lms"
              className="group block rounded-2xl border border-white/10 bg-[#01141c]/60 overflow-hidden hover:border-[#07BEB8]/50 transition-all hover:shadow-xl hover:shadow-[#07BEB8]/10"
            >
              <div className="h-44 overflow-hidden relative bg-black/40">
                <img
                  src={ProDocetImg}
                  alt="ProDocet LMS"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  EdTech &amp; School LMS
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  ProDocet LMS
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Unified school platform centralizing curriculum, automated scheduling, attendance, and billing.
                </p>
              </div>
            </Link>

            {/* Rescue Spot */}
            <Link
              to="/portfolio/rescue-spot"
              className="group block rounded-2xl border border-white/10 bg-[#01141c]/60 overflow-hidden hover:border-[#07BEB8]/50 transition-all hover:shadow-xl hover:shadow-[#07BEB8]/10"
            >
              <div className="h-44 overflow-hidden relative bg-black/40">
                <img
                  src={RescueSpotImg}
                  alt="Rescue Spot Pet Adoption Platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  PetTech &amp; Animal Rescue
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  Rescue Spot
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  US-based pet adoption platform with unified multi-shelter applications and 46,000+ pet catalog search.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
