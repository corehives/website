import { useEffect, useState, lazy, Suspense } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Star,
  Quote,
  Boxes,
  CreditCard,
  Truck,
  Lock,
  Server,
  KeyRound,
  ArrowRight,
  Radio,
  Smartphone,
  Store,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic project screenshots
import vendorDashboardImg from "../../assets/doors/vendor-dashboard.webp";
import adminSellersImg from "../../assets/doors/admin-sellers.webp";
import adminCategoriesImg from "../../assets/doors/admin-categories.webp";
import adminOrdersImg from "../../assets/doors/admin-orders.webp";
import vendorProductsImg from "../../assets/doors/vendor-products.webp";
import loginPortalImg from "../../assets/doors/login-portal.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiLaravel,
  SiMysql,
  SiPhp,
  SiBootstrap,
} from "react-icons/si";

// Official Tech Icons
const LaravelIcon = () => <SiLaravel className="w-6 h-6 text-[#FF2D20]" />;
const MysqlIcon = () => <SiMysql className="w-6 h-6 text-[#00758F]" />;
const PhpIcon = () => <SiPhp className="w-6 h-6 text-[#777BB4]" />;
const BootstrapIcon = () => <SiBootstrap className="w-6 h-6 text-[#7952B3]" />;

export default function DoorsCaseStudy() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Doors Marketplace Case Study | Multi-Vendor E-Commerce Development | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives developed Doors, a multi-vendor e-commerce platform for Saudi Arabia featuring independent order splitting, merchant portals, MyFatoorah payments, OTO logistics, and mobile APIs.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://corehives.com/portfolio/doors-ecommerce-marketplace";
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
      title: "Customer Checkout",
      shortDesc: "Single checkout across multiple sellers in SAR.",
      detail:
        "The customer selects items from multiple independent stores and completes a single unified payment via MyFatoorah.",
      badge: "Mobile App / Web",
    },
    {
      num: "02",
      title: "Master Order",
      shortDesc: "Central platform generates an umbrella order record.",
      detail:
        "The system creates an umbrella master order logging transaction references, delivery coordinates, and total fees.",
      badge: "Core Order Engine",
    },
    {
      num: "03",
      title: "Vendor-Specific Packages",
      shortDesc: "Line items divide automatically by merchant store.",
      detail:
        "The master order splits into isolated vendor packages, scoping items, pricing, and fulfillment queues to each seller.",
      badge: "OrderPackage Service",
    },
    {
      num: "04",
      title: "Independent Fulfillment",
      shortDesc: "Each merchant packs and ships from their own hub.",
      detail:
        "Merchants review their portion, print packing slips, and coordinate courier pickup directly from their warehouse.",
      badge: "Vendor Workspace",
    },
    {
      num: "05",
      title: "Unified Customer Tracking",
      shortDesc: "Buyer monitors all merchant packages in one timeline.",
      detail:
        "The customer tracks individual package dispatches and courier milestones within a cohesive order screen.",
      badge: "Customer Timeline",
    },
  ];

  return (
    <div className="bg-[#000405] text-white min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-0 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/10">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <img
            src={hero_bg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          width={700}
          height={560}
          className="pointer-events-none absolute left-0 top-0 z-[1] w-1/2 opacity-70"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          width={700}
          height={560}
          className="pointer-events-none absolute right-0 top-0 z-[1] w-1/2 opacity-70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#07BEB8]/40 bg-[#07BEB8]/10 text-[#07BEB8]">
              <Sparkles className="w-3.5 h-3.5" />
              CASE STUDY | E-COMMERCE &amp; MARKETPLACE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Doors
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Powering a Connected Multi-Vendor Shopping Experience
          </p>

          {/* Description (Exact requested copy) */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Doors is a multi-vendor e-commerce platform built for the Saudi
            Arabian retail market, connecting merchant storefronts, mobile
            shopping, payment processing, and delivery operations through an
            integrated commerce system.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToOverview}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Explore the Platform
            </CTAButton>
            <CTAButton to="/contact">
              Discuss Your Project
            </CTAButton>
            <a
              href="https://doorsecommerce.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-[#07BEB8]/50 transition-all group"
            >
              Visit Live Platform
              <ExternalLink className="w-3.5 h-3.5 text-[#07BEB8] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Metadata Card Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#010e14]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Industry &amp; Market
              </p>
              <p className="text-sm font-medium text-white">
                E-Commerce &amp; Retail Tech
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Kingdom of Saudi Arabia (SAR)</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Live Website
              </p>
              <a
                href="https://doorsecommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8efcf8] hover:text-[#07BEB8] transition-colors"
              >
                doorsecommerce.com
                <ExternalLink className="w-3 h-3 text-[#07BEB8]" />
              </a>
              <p className="text-xs text-gray-400 mt-0.5">Multi-Vendor Marketplace</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Backend &amp; Database
              </p>
              <p className="text-sm font-medium text-white">
                Laravel 10 • MySQL 8
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Sanctum REST API v1</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Key Integrations
              </p>
              <p className="text-sm font-medium text-white">
                MyFatoorah • OTO Logistics
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Taqnyat SMS OTP • Pusher</p>
            </div>
          </div>

          {/* Primary Visual — Strongest Dashboard Screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)] group">
            <div className="flex items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  doorsecommerce.com / vendor / dashboard
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#07BEB8] bg-[#07BEB8]/10 px-2.5 py-0.5 rounded-full border border-[#07BEB8]/30">
                Merchant Operations Hub
              </span>
            </div>
            <img
              src={vendorDashboardImg}
              alt="Doors Multi-Vendor Marketplace Merchant Operations Dashboard"
              width={1024}
              height={504}
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PROJECT OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              One Marketplace. Three Connected Experiences.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              Doors brings marketplace administration, merchant operations, and
              mobile shopping together in a unified commerce ecosystem. The
              platform provides tools for managing sellers, products, orders,
              payments, and delivery workflows while exposing REST APIs for
              consumer mobile applications.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              By consolidating platform governance, self-service merchant tooling,
              and native mobile endpoints into a modular Laravel architecture,
              Doors eliminates data silos between administrators, independent
              retailers, and end shoppers.
            </p>
          </div>

          {/* Three Connected Experiences Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Super Admin Portal */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Super Admin Portal
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Marketplace Governance Hub
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Centralized management for merchants, categories, orders,
                  platform operations, and role-based permissions. Provides
                  command oversight across seller verifications, platform-wide
                  commission rules, and customer dispute resolution.
                </p>

                {/* Screenshot snippet */}
                <div className="rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#00151c]">
                  <img
                    src={adminSellersImg}
                    alt="Super Admin Seller Management Interface"
                    className="w-full aspect-[16/9] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Merchant onboarding and commercial documentation review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Category taxonomy with tags and promotional banners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Role-Based Access Control (RBAC) with granular operator privileges
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Vendor Portal */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Vendor Portal
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Merchant Self-Service Suite
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  A merchant workspace for managing storefront information,
                  product catalogs, inventory, incoming orders, shipping
                  workflows, and financial records. Enables retailers to run
                  independent business operations within the marketplace framework.
                </p>

                {/* Screenshot snippet */}
                <div className="rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#00151c]">
                  <img
                    src={vendorProductsImg}
                    alt="Vendor Products Management Interface"
                    className="w-full aspect-[16/9] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Product SKU publishing, pricing, discounts, and galleries
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Dedicated order dispatch queues and packing slips
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Revenue ledger, commission tracking, and bank payout requests
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Consumer Mobile API */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between hover:border-[#07BEB8]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Consumer Mobile API
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  High-Throughput Mobile Layer
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  RESTful endpoints supporting authentication, product
                  discovery, favorites, addresses, checkout, order history, and
                  shipment tracking for native iOS and Android clients. Powered
                  by Laravel Sanctum Bearer tokens and instant SMS OTP.
                </p>

                {/* API Matrix Mock */}
                <div className="rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#000a0f] p-3 font-mono text-[11px] text-gray-300 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#07BEB8] font-sans font-semibold pb-1 border-b border-white/10">
                    <span>Endpoints (v1)</span>
                    <span className="text-gray-400 text-[10px]">Sanctum Bearer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">POST</span>
                    <span className="text-gray-300 truncate">/api/v1/auth/otp/verify</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">GET</span>
                    <span className="text-gray-300 truncate">/api/v1/stores/category/{'{id}'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">POST</span>
                    <span className="text-gray-300 truncate">/api/v1/orders (Split Engine)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">GET</span>
                    <span className="text-gray-300 truncate">/api/v1/orders/shipment-tracking</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Passwordless phone-based OTP authentication via Taqnyat
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Personalized discovery, wishlists, and store bookmarking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07BEB8] flex-shrink-0" />
                    Multi-vendor checkout with unified MyFatoorah gateway initiation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE CENTERPIECE — ORDER SPLITTING WORKFLOW
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/40 shadow-[0_20px_60px_rgba(7,190,184,0.12)]">
            <div className="max-w-3xl mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                CORE MARKETPLACE CAPABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                One Customer Order. Independent Merchant Fulfillment.
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Doors separates a multi-vendor customer order into merchant-specific
                packages, allowing each seller to manage its own fulfillment while
                preserving a unified customer order experience.
              </p>
            </div>

            {/* Visual Sequence: Customer Checkout → Master Order → Vendor Packages → Independent Fulfillment → Unified Tracking */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveWorkflowStep(idx)}
                    role="button"
                    tabIndex={0}
                    className={`p-5 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                      activeWorkflowStep === idx
                        ? "bg-[#07BEB8]/15 border-[#07BEB8] shadow-lg shadow-[#07BEB8]/10"
                        : "bg-[#00151c]/70 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-[#07BEB8]">
                          STEP {step.num}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {step.shortDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#07BEB8]">
                      <span>{activeWorkflowStep === idx ? "Active Step" : "Click to View"}</span>
                      {idx < 4 && <ArrowRight className="w-3.5 h-3.5 text-gray-500 hidden md:inline" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Step Explainer Card */}
              <div className="mt-4 p-5 rounded-xl bg-[#001017] border border-[#07BEB8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                  <span className="text-white font-bold mr-2">
                    {workflowSteps[activeWorkflowStep].title}:
                  </span>
                  {workflowSteps[activeWorkflowStep].detail}
                </div>
                <div className="text-xs font-mono text-[#8efcf8] bg-[#07BEB8]/10 px-3 py-1 rounded-full border border-[#07BEB8]/30 self-start sm:self-auto shrink-0">
                  Architecture: {workflowSteps[activeWorkflowStep].badge}
                </div>
              </div>
            </div>

            {/* Actual Screenshot: Admin Orders Hub Showing Split Vendor Packages */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] mb-8">
              <div className="px-4 py-3 bg-[#00151c] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="font-mono text-gray-300">
                  doorsecommerce.com / admin / vendor-orders
                </span>
                <span className="text-[#07BEB8] font-medium">
                  Orders &amp; Dispatch Hub: Ready to Ship • In Progress • Hub Dispatch
                </span>
              </div>
              <img
                src={adminOrdersImg}
                alt="Doors Multi-Vendor Order Management and Fulfillment Hub Screenshot"
                width={1024}
                height={504}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Business & Engineering Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#001017] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-[#07BEB8]" />
                  Business Significance
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Eliminates fulfillment bottlenecks by giving each seller full
                  autonomy over packing and dispatch schedules. Shoppers enjoy the
                  convenience of single-cart checkout, while merchants receive only
                  their relevant line items.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#001017] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#07BEB8]" />
                  Engineering Significance
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The <code className="text-[#8efcf8] font-mono text-xs">OrderPackage</code> model
                  scopes database queries strictly to the vendor&apos;s own line items,
                  preventing cross-merchant data leakage while keeping commission calculations
                  and courier webhooks cleanly isolated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CONSOLIDATED MARKETPLACE CAPABILITIES (3 Groups)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              MARKETPLACE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Comprehensive Commerce Operations
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Consolidating core functionality into three major capability groups
              supporting merchants, finance, and logistics.
            </p>
          </div>

          <div className="space-y-16">
            {/* Group A: Marketplace & Merchant Operations */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP A
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Marketplace &amp; Merchant Operations
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Tools empowering administrators to govern the platform and
                  enabling merchants to self-manage their digital storefronts,
                  inventory, and customer orders.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Merchant Onboarding:</strong> Commercial registration and license verification workflows.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Catalog &amp; Inventory:</strong> Product SKUs, base pricing, promotional discounts, and variations.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Taxonomy &amp; Discovery:</strong> Category hierarchy, tags, and promotional merchant highlights.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Fulfillment Controls:</strong> Vendor-specific order dispatch and administrative oversight.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2 bg-[#00151c] border-b border-white/10 text-xs text-gray-400 font-mono">
                    doorsecommerce.com / admin / categories
                  </div>
                  <img
                    src={adminCategoriesImg}
                    alt="Doors Super Admin Categories and Taxonomy Interface"
                    width={1024}
                    height={504}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Group B: Payments & Merchant Financials */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP B
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Payments &amp; Merchant Financials
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Doors integrates with MyFatoorah to handle electronic transactions
                  in Saudi Riyal (SAR). Payment processing connects automated
                  commission accounting with secure server-to-server callback verification.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CreditCard className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>MyFatoorah Gateway:</strong> Saudi Riyal checkout supporting regional debit (Mada), Visa, and Mastercard.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>HMAC SHA-256 Verification:</strong> Payment callbacks validate incoming signature headers against raw payloads before order state transitions.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Commission Calculations:</strong> Automated platform commission splitting, merchant store balances, and payout records.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2 bg-[#00151c] border-b border-white/10 text-xs text-gray-400 font-mono">
                    doorsecommerce.com / auth / login
                  </div>
                  <img
                    src={loginPortalImg}
                    alt="Doors Merchant Login and Secure Authentication Interface"
                    width={1024}
                    height={504}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Group C: Logistics & Mobile Commerce */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP C
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Logistics &amp; Mobile Commerce
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Connecting physical delivery operations to mobile consumer
                  touchpoints through integrated courier APIs and real-time event broadcasting.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>OTO Delivery Integration:</strong> Live rate quotations, merchant warehouse pickup codes, and shipment creation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Taqnyat SMS OTP:</strong> Passwordless phone login tailored to Saudi consumer mobile preferences.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Radio className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Unified Shipment Tracking:</strong> Live status updates from dispatch to doorstep delivered via Pusher notifications.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#01141c] border border-[#07BEB8]/30 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#07BEB8]" />
                      OTO Logistics Gateway
                    </span>
                    <span className="text-[#07BEB8] font-mono">Active Gateway</span>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#001017] border border-white/10">
                      <span className="text-[#07BEB8] font-mono block text-[10px]">STAGE 1</span>
                      <p className="font-bold text-white">Merchant Warehouse Registration</p>
                      <p className="text-gray-400">Registers seller pickup coordinates and warehouse code.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#001017] border border-white/10">
                      <span className="text-[#07BEB8] font-mono block text-[10px]">STAGE 2</span>
                      <p className="font-bold text-white">Automated Delivery Quotation</p>
                      <p className="text-gray-400">Calculates shipping fee based on distance and package weight.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#001017] border border-white/10">
                      <span className="text-[#07BEB8] font-mono block text-[10px]">STAGE 3</span>
                      <p className="font-bold text-white">Live Courier Webhook Updates</p>
                      <p className="text-gray-400">Pushes tracking waybill and delivery milestones to the mobile app.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ARCHITECTURE (4 Concise Layers)
      ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ARCHITECTURE &amp; SYSTEM DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Built Around Modular Marketplace Architecture
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Doors is structured into four distinct layers, decoupling user-facing
              applications from business logic, database transactions, and regional integrations.
            </p>
          </div>

          {/* 4-Layer Architecture Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Layer 1: Client Applications */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 01
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Client Applications
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Super Admin Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Vendor Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Consumer Mobile Applications
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Multi-Channel Frontends
              </div>
            </div>

            {/* Layer 2: Application Layer */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 02
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Application Layer
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Laravel 10 &amp; REST API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Laravel Sanctum authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Role-based permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Order splitting &amp; commissions
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Laravel 10 Core
              </div>
            </div>

            {/* Layer 3: Data Layer */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 03
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Data Layer
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    MySQL Relational Store
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Eloquent ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Marketplace domain models
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Product and media storage
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Relational Model
              </div>
            </div>

            {/* Layer 4: External Integrations */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 04
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  External Integrations
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    MyFatoorah (Payments)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    OTO (Logistics)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Taqnyat (SMS OTP)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Pusher (Broadcasting)
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Regional Ecosystem
              </div>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <LaravelIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Laravel 10</h4>
                <p className="text-xs text-gray-400">Application Framework</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <MysqlIcon />
              <div>
                <h4 className="text-sm font-bold text-white">MySQL 8.0</h4>
                <p className="text-xs text-gray-400">Relational Database</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <PhpIcon />
              <div>
                <h4 className="text-sm font-bold text-white">PHP 8.2</h4>
                <p className="text-xs text-gray-400">Backend Runtime</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <BootstrapIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Blade &amp; UI</h4>
                <p className="text-xs text-gray-400">Admin Portals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ENGINEERING HIGHLIGHTS (3 Distinctive Capabilities)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ENGINEERING HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Engineering Beyond a Standard Online Store
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Three distinctive engineering capabilities differentiate the Doors
              platform from standard monolithic storefront software.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Vendor-Specific Order Processing
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Decoupled Fulfillment
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Splitting a master order into independent merchant fulfillment packages.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Prevents vendor fulfillment dependencies so one merchant&apos;s shipping delay never holds back another merchant&apos;s package.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Payment Verification
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  HMAC SHA-256 Signatures
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Validating payment callbacks using server-to-server signature verification.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Ensures transaction confirmations originate authentically from MyFatoorah before marking orders as paid.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Role-Based Access Control
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Multi-Tier Governance
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Managing administrative permissions across marketplace operations.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Enforces data isolation between merchants and restricts sensitive platform financial operations to authorized administrators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: PROJECT OUTCOME (Credible & Fact-Based)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PROJECT OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Foundation for Connected Digital Commerce
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              Doors brings merchant management, product discovery, vendor-specific
              order fulfillment, payment processing, and logistics workflows into
              one integrated marketplace platform. Its modular architecture
              provides a foundation for managing complex commerce operations across
              multiple sellers and consumer channels.
            </p>

            {/* Verified Project Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  MODULES DELIVERED
                </span>
                <p className="text-base font-bold text-white mb-1">
                  3 Portals &amp; APIs
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Super Admin, Vendor Portal, and Mobile Consumer REST API.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  ORDER ARCHITECTURE
                </span>
                <p className="text-base font-bold text-white mb-1">
                  Multi-Vendor Split
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Automated separation into isolated merchant package queues.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  PAYMENTS &amp; SECURITY
                </span>
                <p className="text-base font-bold text-white mb-1">
                  MyFatoorah + HMAC
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Saudi Riyal transactions with HMAC SHA-256 signature checks.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  LOGISTICS GATEWAY
                </span>
                <p className="text-base font-bold text-white mb-1">
                  OTO Integration
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Merchant pickup codes, live courier quotes, and tracking webhooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: CLIENT REVIEW (Immediately after Outcome, before CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-2 block">
              CLIENT TESTIMONIAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              What Our Client Says
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Feedback on the collaboration and the work delivered by CoreHives.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/30 shadow-[0_20px_60px_rgba(7,190,184,0.1)] relative overflow-hidden">
            {/* Ambient background glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
              style={{ background: "rgba(7,190,184,0.15)" }}
            />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-1 block">
                  AUTHENTIC CLIENT FEEDBACK
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Doors E-Commerce Marketplace
                </h3>
              </div>

              {/* 5 Star Rating */}
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#001925] border border-white/10 self-start sm:self-auto">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD139] text-[#FFD139]" />
                ))}
                <span className="text-xs font-semibold text-white ml-1">5.0</span>
              </div>
            </div>

            {/* Quote Body (Authentic review preserved word-for-word) */}
            <div className="relative mb-8 text-gray-300 text-base sm:text-lg leading-relaxed space-y-4">
              <Quote className="w-10 h-10 text-[#07BEB8]/20 absolute -top-4 -left-3 -z-0" />
              <p className="relative z-10">
                &ldquo;Great developer to work with. Very professional, delivered everything as promised, and the quality of work was excellent. I would definitely recommend and work with him again.
              </p>
              <p className="relative z-10">
                Actually he is excellent at what he does. He clearly knows what he&apos;s doing and he got the job done quick.
              </p>
              <p className="relative z-10">
                He&apos;s kind, intelligent in his field, works hard, and makes sure the work he completes is correct. Thanks for your efforts.&rdquo;
              </p>
            </div>

            {/* Client Info Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#07BEB8] to-[#4eecea] flex items-center justify-center text-[#010A11] font-extrabold text-base shadow-md">
                  RD
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Rahaf</h4>
                  <p className="text-xs text-gray-400">Project Lead &amp; Product Owner, Doors Marketplace</p>
                </div>
              </div>

              <a
                href="https://doorsecommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#07BEB8] hover:text-[#4eecea] transition-colors font-medium self-start sm:self-auto"
              >
                doorsecommerce.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FINAL CTA (Immediately after Client Review)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#000405] to-[#011119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-4 block">
            WORK WITH COREHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Building a Marketplace or Complex E-Commerce Platform?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            CoreHives develops custom digital products that connect business
            workflows, integrate third-party services, and support complex commerce
            operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              to="/contact"
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Discuss Your Project
            </CTAButton>
            <CTAButton to="/our-portfolio">
              Explore More Projects
            </CTAButton>
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
