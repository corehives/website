import { useEffect, useState, lazy, Suspense } from "react";
import {
  Sparkles,
  ShoppingBag,
  Store,
  Truck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  ExternalLink,
  Lock,
  Star,
  Quote,
  Boxes,
  Smartphone,
  Server,
  Database,
  KeyRound,
  FileSpreadsheet,
  Radio,
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

// Custom Tech SVGs
const LaravelIcon = () => (
  <svg className="w-6 h-6 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.574 6.786l-9.146-5.28a.86.86 0 00-.856 0L2.426 6.786a.853.853 0 00-.426.74v10.56c0 .307.162.589.426.74l9.146 5.28a.86.86 0 00.856 0l9.146-5.28a.853.853 0 00.426-.74V7.526a.853.853 0 00-.426-.74zM12 2.87l7.632 4.407-3.23 1.865-7.632-4.407L12 2.87zm-8.29 5.864l7.435 4.293v8.586l-7.435-4.293V8.734zm9.145 12.879v-8.586l7.435-4.293v8.586l-7.435 4.293z" />
  </svg>
);

const MysqlIcon = () => (
  <svg className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const PhpIcon = () => (
  <svg className="w-6 h-6 text-[#777BB4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5H8.5l.8-4.5h1.7c1.3 0 2.2.8 2 2-.2 1.4-1.3 2.5-2.8 2.5zm5.6 0h-1.7l.8-4.5h1.7c1.3 0 2.2.8 2 2-.2 1.4-1.3 2.5-2.8 2.5z" />
  </svg>
);

const BootstrapIcon = () => (
  <svg className="w-6 h-6 text-[#7952B3]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.8 13.7c-.5.4-1.3.6-2.3.6h-2.9V7.7h2.7c1 0 1.7.2 2.2.6.5.4.7 1 .7 1.8 0 .6-.2 1.1-.6 1.5.6.3 1 .9 1 1.7 0 .9-.3 1.6-.8 2.4z" />
  </svg>
);

export default function DoorsCaseStudy() {
  const [heroView, setHeroView] = useState("vendor");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [catalogView, setCatalogView] = useState("products");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Doors Marketplace Case Study | E-Commerce Development | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore the Doors multi-vendor marketplace, featuring merchant management, vendor-specific order processing, payment integration, logistics automation, and mobile commerce APIs.";

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

  const scrollToSolution = (e) => {
    e.preventDefault();
    const element = document.getElementById("solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const workflowSteps = [
    {
      num: "01",
      title: "Customer Checkout",
      desc: "Shopper selects multiple products across different merchant stores and completes a unified payment in Saudi Riyal (SAR).",
      role: "Consumer Mobile API",
    },
    {
      num: "02",
      title: "Master Order Creation",
      desc: "The system generates an umbrella master order logging transaction references, delivery coordinates, and total fees.",
      role: "Order Engine",
    },
    {
      num: "03",
      title: "Vendor Package Splitting",
      desc: "The master order automatically divides into distinct vendor-specific packages with isolated dispatch queues.",
      role: "OrderPackage Service",
    },
    {
      num: "04",
      title: "Independent Fulfillment",
      desc: "Each seller prepares their goods, prints package documentation, and triggers an automated OTO courier pickup.",
      role: "Vendor Workspace",
    },
    {
      num: "05",
      title: "Unified Customer Tracking",
      desc: "The customer monitors all consignments within a single mobile order timeline with live courier milestones.",
      role: "OTO Tracking Webhook",
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
              CASE STUDY | E-COMMERCE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Doors
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Powering a Connected Multi-Vendor Shopping Experience
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
            Doors is a multi-vendor commerce platform designed for the Saudi
            Arabian retail market. It connects merchants and consumers through
            storefront management, product discovery, mobile shopping APIs,
            payment processing, and delivery operations.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToSolution}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold"
            >
              Explore the Platform
            </CTAButton>
            <CTAButton to="/contact">Discuss Your Project</CTAButton>
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
                Industry & Market
              </p>
              <p className="text-sm font-medium text-white">
                E-Commerce & Retail Tech
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
              <p className="text-xs text-gray-400 mt-0.5">KSA Multi-Vendor Platform</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Backend & Database
              </p>
              <p className="text-sm font-medium text-white">
                Laravel 10 • MySQL 8
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Blade, Bootstrap & REST v1</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Key Integrations
              </p>
              <p className="text-sm font-medium text-white">
                MyFatoorah, OTO Logistics
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Taqnyat SMS OTP, Pusher</p>
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
                  doorsecommerce.com / {heroView === "vendor" ? "vendor/dashboard" : heroView === "orders" ? "admin/vendor-orders" : "admin/sellers"}
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="flex items-center gap-1.5 bg-[#000a0f] p-1 rounded-lg border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setHeroView("vendor")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "vendor"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Vendor Hub
                </button>
                <button
                  onClick={() => setHeroView("orders")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "orders"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Order Splitting
                </button>
                <button
                  onClick={() => setHeroView("sellers")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "sellers"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Seller Operations
                </button>
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative bg-[#020d13]">
              <img
                src={
                  heroView === "vendor"
                    ? vendorDashboardImg
                    : heroView === "orders"
                    ? adminOrdersImg
                    : adminSellersImg
                }
                alt="Doors Marketplace Production Dashboard Interface"
                width={1024}
                height={504}
                className="w-full h-auto object-cover object-top"
                loading="eager"
              />
              <div className="absolute bottom-4 right-4 bg-[#00151c]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#07BEB8]/30 text-xs text-[#8efcf8] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                {heroView === "vendor"
                  ? "Merchant Portal • Store Analytics & Top Products"
                  : heroView === "orders"
                  ? "Admin Hub • Multi-Vendor Order Splitting & Hub Dispatch"
                  : "Super Admin • Verified Merchant Verification Pipeline"}
              </div>
            </div>
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
          SECTION 3: THE CHALLENGE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Managing Commerce Across Multiple Vendors
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Operating a regional marketplace in Saudi Arabia involves intricate
              technical coordination across merchant boundaries, payment settlement,
              and last-mile fulfillment operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: "Multiple Merchants",
                desc: "Managing multiple independent sellers with discrete storefront identities within a single customer-facing shopping experience.",
              },
              {
                icon: FileCheck2,
                title: "Seller Onboarding",
                desc: "Collecting commercial registrations, trade licenses, and banking details while enforcing administrative verification workflows.",
              },
              {
                icon: Boxes,
                title: "Isolated Catalogs",
                desc: "Maintaining separate inventory counts, pricing structures, and product variations across hundreds of vendor catalogs without cross-contamination.",
              },
              {
                icon: ShoppingBag,
                title: "Multi-Seller Baskets",
                desc: "Processing shopping carts containing goods from multiple vendors in a single checkout while splitting fulfillment downstream.",
              },
              {
                icon: Truck,
                title: "Fulfillment & Shipping",
                desc: "Coordinating courier pickups from disparate vendor warehouse locations while providing cohesive shipment updates to buyers.",
              },
              {
                icon: CreditCard,
                title: "Regional Payments",
                desc: "Supporting Saudi Riyal transactions (Mada, Visa, Mastercard) through MyFatoorah with tamper-proof webhook verification.",
              },
              {
                icon: FileSpreadsheet,
                title: "Commissions & Balances",
                desc: "Automating platform commission calculations, merchant net balances, and withdrawal settlement audit trails.",
              },
              {
                icon: Smartphone,
                title: "Secure Mobile APIs",
                desc: "Providing fast, authenticated REST endpoints for iOS and Android apps with Saudi phone OTP login instead of standard passwords.",
              },
            ].map((challenge, i) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#01141c]/50 border border-white/10 hover:border-[#07BEB8]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {challenge.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span>CHALLENGE 0{i + 1}</span>
                    <span className="text-[#07BEB8]">KSA SCOPE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: THE SOLUTION
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              An Integrated Platform for Modern Marketplace Operations
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              CoreHives architected Doors around authentic multi-vendor commerce
              workflows, combining merchant autonomy with rigorous central governance
              and mobile consumer connectivity.
            </p>
          </div>

          <div className="space-y-20">
            {/* 4A. Multi-Vendor Marketplace Management */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2">
                  01 // CATALOG & SELLER WORKSPACE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Multi-Vendor Marketplace Management
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  Doors empowers merchants to manage their own storefronts, inventory,
                  and pricing while administrators maintain platform standards and
                  taxonomies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Merchant onboarding & commercial license verification",
                    "Storefront profile and pickup warehouse address setup",
                    "SKU inventory with base prices, discounts & galleries",
                    "Product variations (colors, sizes, and custom specifications)",
                    "Taxonomy management with subcategories and interest tags",
                    "Customer discovery, favorites, and saved merchant stores",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#07BEB8] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span className="font-mono">
                      {catalogView === "products"
                        ? "doors.sa / vendor / products"
                        : "doors.sa / admin / categories"}
                    </span>
                    <div className="flex items-center gap-1 bg-[#000a0f] p-1 rounded-md border border-white/10">
                      <button
                        onClick={() => setCatalogView("products")}
                        className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                          catalogView === "products"
                            ? "bg-[#07BEB8] text-[#00151c] font-bold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Products
                      </button>
                      <button
                        onClick={() => setCatalogView("categories")}
                        className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                          catalogView === "categories"
                            ? "bg-[#07BEB8] text-[#00151c] font-bold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Categories
                      </button>
                    </div>
                  </div>
                  <img
                    src={catalogView === "products" ? vendorProductsImg : adminCategoriesImg}
                    alt={
                      catalogView === "products"
                        ? "Doors Vendor Product Management Interface"
                        : "Doors Super Admin Categories Taxonomy Interface"
                    }
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* 4B. Order Splitting and Fulfillment */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/30">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2">
                  02 // ORDER ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  One Customer Order. Independent Merchant Fulfillment.
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  When customers purchase products from multiple sellers in a single checkout,
                  the platform separates the master order into vendor-specific packages. Each
                  merchant can manage the fulfillment of their portion while customers retain
                  a unified order-tracking experience.
                </p>
              </div>

              {/* Visual Workflow Sequence */}
              <div className="mb-10">
                <p className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-4">
                  Order Splitting & Fulfillment Lifecycle
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {workflowSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all ${
                        activeWorkflowStep === idx
                          ? "bg-[#07BEB8]/15 border-[#07BEB8] text-white"
                          : "bg-[#00151c]/80 border-white/10 text-gray-300 hover:border-white/20"
                      }`}
                      onClick={() => setActiveWorkflowStep(idx)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#07BEB8]">
                          {step.num}
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase font-mono">
                          {step.role}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1.5 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Hub Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11]">
                <div className="px-4 py-2.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono">doors.sa / admin / vendor-orders</span>
                  <span className="text-[#07BEB8]">
                    Fulfillment Hub: In Progress • Ready to Ship • Hub Dispatch
                  </span>
                </div>
                <img
                  src={adminOrdersImg}
                  alt="Super Admin Vendor Orders Hub Interface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 4C. Payments and Merchant Financials */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span className="font-mono">doors.sa / auth / login</span>
                    <span className="text-[#07BEB8]">Merchant Auth & Identity</span>
                  </div>
                  <img
                    src={loginPortalImg}
                    alt="Doors Merchant Login and Brand Interface"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2">
                  03 // FINANCIAL PIPELINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Secure Payment Processing and Merchant Financial Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  Doors integrates with MyFatoorah to handle electronic transactions
                  in Saudi Riyal (SAR). The architecture balances frictionless consumer
                  payment with verified server-to-server callback processing and
                  automated commission accounting.
                </p>

                <div className="space-y-4 text-xs text-gray-300">
                  <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white mb-1">
                      <CreditCard className="w-4 h-4 text-[#07BEB8]" />
                      MyFatoorah Gateway & Saudi Riyal Support
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Supports regional checkout methods including Mada, Visa, and Mastercard with automated invoice generation and status synchronization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white mb-1">
                      <Lock className="w-4 h-4 text-[#07BEB8]" />
                      HMAC SHA-256 Webhook Verification
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Payment callbacks are validated server-to-server using HMAC SHA-256 signature checking on incoming headers to protect against forged confirmations before orders advance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white mb-1">
                      <FileSpreadsheet className="w-4 h-4 text-[#07BEB8]" />
                      Commission Splitting & Vendor Balances
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Calculates platform fee cuts upon checkout, crediting vendor net earnings to store balances and providing formal withdrawal audit logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4D. Mobile Commerce APIs */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2">
                  04 // MOBILE LAYER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Connecting the Marketplace to Mobile Shopping
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  A comprehensive REST API provides the backend infrastructure for native
                  iOS and Android consumer applications, designed around Middle Eastern
                  mobile shopping behaviors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    method: "POST",
                    endpoint: "/api/v1/auth/otp/request",
                    label: "Phone OTP Authentication",
                    desc: "Passwordless customer registration and login powered by Taqnyat Saudi SMS gateway.",
                  },
                  {
                    method: "GET",
                    endpoint: "/api/v1/categories & /stores",
                    label: "Discovery & Categorization",
                    desc: "Category hierarchies with interest tags and verified merchant storefront directories.",
                  },
                  {
                    method: "GET",
                    endpoint: "/api/v1/products/favorites",
                    label: "Wishlists & Bookmarks",
                    desc: "Real-time sync of customer bookmarked products and followed merchant storefronts.",
                  },
                  {
                    method: "POST",
                    endpoint: "/api/v1/addresses",
                    label: "Address Book & Geolocation",
                    desc: "Street, city, and GPS coordinates mapping for exact OTO courier delivery routing.",
                  },
                  {
                    method: "POST",
                    endpoint: "/api/v1/payments/initiate",
                    label: "Payment Initiation",
                    desc: "MyFatoorah checkout URL creation with multi-method Mada / credit card support.",
                  },
                  {
                    method: "POST",
                    endpoint: "/api/v1/orders/shipment-tracking",
                    label: "Live Courier Tracking",
                    desc: "Real-time tracking milestones, package status updates, and customer return requests.",
                  },
                ].map((api, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#001017] border border-white/10 hover:border-[#07BEB8]/30 transition-all font-sans"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                          api.method === "POST"
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                        }`}
                      >
                        {api.method}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">v1 REST</span>
                    </div>
                    <p className="font-mono text-xs text-gray-200 truncate mb-2">
                      {api.endpoint}
                    </p>
                    <h4 className="text-xs font-bold text-white mb-1">
                      {api.label}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {api.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: LOGISTICS AUTOMATION (OTO)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                LOGISTICS AUTOMATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Connecting Orders to Delivery Operations
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                The platform integrates with OTO to connect order fulfillment with
                delivery operations. The documented workflow supports delivery
                quotations, shipment creation, pickup coordination, and unified
                shipment tracking.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Rather than forcing every vendor to independently integrate and
                negotiate with multiple local couriers, Doors acts as a centralized
                dispatch layer. Vendor warehouse pickup coordinates map directly
                to delivery calculations, ensuring predictable fulfillment.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Automated Quotations",
                    desc: "Fetches live shipping rates based on seller warehouse origin and customer delivery address.",
                  },
                  {
                    title: "Pickup Coordination",
                    desc: "Uses merchant registered OTO pickup codes to dispatch couriers directly to merchant hubs.",
                  },
                  {
                    title: "Unified Tracking Milestones",
                    desc: "Standardizes status tracking from dispatch to customer doorstep across various regional couriers.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#01141c]/60 border border-white/10">
                    <Truck className="w-5 h-5 text-[#07BEB8] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Architecture sequence card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#01141c] border border-[#07BEB8]/30 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#07BEB8]" />
                    <span className="text-sm font-bold text-white">OTO Logistics Gateway</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">
                    Active Gateway
                  </span>
                </div>

                <div className="space-y-4 relative">
                  <div className="p-4 rounded-xl bg-[#001017] border border-white/10">
                    <span className="text-[10px] font-mono text-[#07BEB8] block mb-1">STAGE 1</span>
                    <h5 className="text-xs font-bold text-white mb-1">Warehouse Address Registration</h5>
                    <p className="text-xs text-gray-400">Merchant inputs pickup city, neighborhood, and OTO warehouse code.</p>
                  </div>

                  <div className="flex justify-center text-gray-500">
                    <ChevronRight className="w-5 h-5 rotate-90 text-[#07BEB8]" />
                  </div>

                  <div className="p-4 rounded-xl bg-[#001017] border border-white/10">
                    <span className="text-[10px] font-mono text-[#07BEB8] block mb-1">STAGE 2</span>
                    <h5 className="text-xs font-bold text-white mb-1">Delivery Quotation & Split Manifest</h5>
                    <p className="text-xs text-gray-400">Order package generates courier request and sets delivery fee.</p>
                  </div>

                  <div className="flex justify-center text-gray-500">
                    <ChevronRight className="w-5 h-5 rotate-90 text-[#07BEB8]" />
                  </div>

                  <div className="p-4 rounded-xl bg-[#001017] border border-white/10">
                    <span className="text-[10px] font-mono text-[#07BEB8] block mb-1">STAGE 3</span>
                    <h5 className="text-xs font-bold text-white mb-1">Live Shipment Tracking Webhook</h5>
                    <p className="text-xs text-gray-400">Waybill number and live courier tracking link pushed to consumer mobile app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ARCHITECTURE AND ENGINEERING
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ARCHITECTURE & SYSTEM DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Built Around Modular Marketplace Architecture
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Doors is structured around clean separation of concerns, decoupling
              presentation tiers from business logic, database transactions, and
              third-party Saudi retail integrations.
            </p>
          </div>

          {/* 4-Layer Architecture Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Layer 1: Client Applications */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#07BEB8] uppercase block mb-1">TIER 1</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Client Applications
                </h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Super Admin Portal (Blade / JS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Vendor Self-Service Portal (Blade)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Consumer Mobile Apps (iOS / Android)
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-400 font-mono">
                Multi-Channel Clients
              </div>
            </div>

            {/* Layer 2: Application Layer */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#07BEB8] uppercase block mb-1">TIER 2</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Application Layer
                </h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Laravel 10 Engine & Routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Sanctum Bearer Tokens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Repository Pattern Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Order Splitting Domain Service
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-400 font-mono">
                PHP 8.2 / Laravel 10
              </div>
            </div>

            {/* Layer 3: Data Layer */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#07BEB8] uppercase block mb-1">TIER 3</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Data Layer
                </h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    MySQL 8.0 Database
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    40+ Eloquent Domain Models
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    OrderPackage Split Hierarchy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Product & Media Storage
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-400 font-mono">
                Relational Model
              </div>
            </div>

            {/* Layer 4: External Integrations */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#07BEB8] uppercase block mb-1">TIER 4</span>
                <h3 className="text-lg font-bold text-white mb-3">
                  External Integrations
                </h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    MyFatoorah (Payments & Webhooks)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    OTO (Shipping & Logistics API)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Taqnyat (SMS OTP Phone Verification)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Pusher (Real-Time Broadcasting)
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-400 font-mono">
                KSA Ecosystem
              </div>
            </div>
          </div>

          {/* Tech Stack Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <LaravelIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Laravel 10</h4>
                <p className="text-[11px] text-gray-400">Application Core</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <MysqlIcon />
              <div>
                <h4 className="text-sm font-bold text-white">MySQL 8.0</h4>
                <p className="text-[11px] text-gray-400">Relational Database</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <PhpIcon />
              <div>
                <h4 className="text-sm font-bold text-white">PHP 8.2</h4>
                <p className="text-[11px] text-gray-400">Backend Runtime</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <BootstrapIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Blade & UI</h4>
                <p className="text-[11px] text-gray-400">Merchant Frontends</p>
              </div>
            </div>
          </div>

          {/* Simple Pipeline Summary */}
          <div className="p-5 rounded-2xl bg-[#001017] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300 font-mono">
            <span className="text-[#07BEB8] font-bold">DATA FLOW:</span>
            <span>Client Apps (Web/Mobile)</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span>Laravel 10 Application Layer</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span>Domain Services & MySQL Database</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span>External Gateways (MyFatoorah / OTO / Taqnyat)</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: KEY ENGINEERING HIGHLIGHTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ENGINEERING HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Beyond a Standard Online Store
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
                  Decoupled Fulfillment Lifecycle
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  A master order can be separated into merchant-specific packages
                  for independent fulfillment and shipment tracking.
                </p>
                <div className="p-3.5 rounded-xl bg-[#001017] border border-white/5 text-xs text-gray-400 leading-relaxed font-mono">
                  <span className="text-[#07BEB8] font-bold block mb-1">Architecture Note:</span>
                  Implements an <code className="text-gray-200">OrderPackage</code> model that scopes vendor access to their specific line items, preventing data leakage while retaining single customer payment continuity.
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Payment Webhook Verification
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Tamper-Proof Callback Defense
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Payment callbacks use HMAC signature verification to help prevent
                  forged transaction confirmations before updating order balances.
                </p>
                <div className="p-3.5 rounded-xl bg-[#001017] border border-white/5 text-xs text-gray-400 leading-relaxed font-mono">
                  <span className="text-[#07BEB8] font-bold block mb-1">Architecture Note:</span>
                  Validates the <code className="text-gray-200">MyFatoorah-Signature</code> header using server-side HMAC SHA-256 against raw webhook payloads, discarding unauthorized state transitions.
                </div>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Granular Role-Based Access
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Multi-Guard Governance Matrix
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Administrative permissions help control access to marketplace
                  operations and sensitive management functions.
                </p>
                <div className="p-3.5 rounded-xl bg-[#001017] border border-white/5 text-xs text-gray-400 leading-relaxed font-mono">
                  <span className="text-[#07BEB8] font-bold block mb-1">Architecture Note:</span>
                  Combines multi-tier user classification (<code className="text-gray-200">is_admin: 1=Admin, 2=Vendor, 3=Customer</code>) with role tables and permission middleware to restrict sensitive financial functions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: PROJECT OUTCOME
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PROJECT OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Foundation for Connected Digital Commerce
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
              Doors brings merchant management, product discovery, vendor-specific
              order fulfillment, payment processing, and logistics workflows into
              one integrated marketplace platform. Its modular architecture
              provides a foundation for managing complex commerce operations across
              multiple sellers and consumer channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">01 / ARCHITECTURE</span>
                <p className="text-sm font-bold text-white mb-1">Order Splitting Engine</p>
                <p className="text-xs text-gray-400">Master orders automatically split into isolated vendor fulfillment packages.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">02 / LOGISTICS</span>
                <p className="text-sm font-bold text-white mb-1">Automated OTO Gateway</p>
                <p className="text-xs text-gray-400">Direct courier quotation, merchant pickup codes, and live tracking.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">03 / PAYMENTS</span>
                <p className="text-sm font-bold text-white mb-1">MyFatoorah + HMAC</p>
                <p className="text-xs text-gray-400">Saudi Riyal settlements with HMAC SHA-256 signature webhook verification.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">04 / MOBILE</span>
                <p className="text-sm font-bold text-white mb-1">REST API Layer</p>
                <p className="text-xs text-gray-400">Sanctum-secured endpoints powering iOS and Android mobile shoppers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: CLIENT REVIEW & TESTIMONIAL (Rahaf)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  CLIENT TESTIMONIAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Client Feedback from Doors
                </h3>
              </div>

              {/* 5 Star Rating */}
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#001925] border border-white/10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD139] text-[#FFD139]" />
                ))}
                <span className="text-xs font-semibold text-white ml-1">5.0</span>
              </div>
            </div>

            {/* Quote Body */}
            <div className="relative mb-8 text-gray-300 text-base sm:text-lg leading-relaxed space-y-4">
              <Quote className="w-10 h-10 text-[#07BEB8]/20 absolute -top-4 -left-3 -z-0" />
              <p className="relative z-10">
                &ldquo;Great developer to work with. Very professional, delivered everything as promised, and the quality of work was excellent. I would definitely recommend and work with him again.
              </p>
              <p className="relative z-10">
                Actually he is excellent at what he does. He clearly knows what he's doing and he got the job done quick.
              </p>
              <p className="relative z-10">
                He's kind, intelligent in his field, works hard, and makes sure the work he completes is correct. Thanks for your efforts.&rdquo;
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
                  <p className="text-xs text-gray-400">Project Lead & Product Owner, Doors Marketplace</p>
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
          SECTION 10: FINAL CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#000405] to-[#011119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-4 block">
            WORK WITH COREHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Building a Marketplace or Complex E-Commerce Platform?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
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
            <CTAButton to="/our-portfolio">Explore More Projects</CTAButton>
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
