import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Lock,
  Check,
  ChevronRight,
  Smartphone,
  Store,
  ShoppingBag,
  CreditCard,
  Truck,
  Bell,
  Layers,
  Cpu,
  ExternalLink,
  Zap,
  Search,
  Boxes,
  RefreshCw,
  Eye,
  Sliders,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic Doors Mobile App assets
import doorsMobileCover from "../../assets/doors-mobile/doors-mobile-cover.webp";
import doorsMobileScreens from "../../assets/doors-mobile/doors-mobile-screens.webp";

// Related case study covers
import tenantismCover from "../../assets/tenantism-cover.webp";
import DoorsMarketplaceImg from "../../assets/doors-showcase.webp";
import RescueSpotImg from "../../assets/rescue-spot-showcase.webp";
import BetaCompassImg from "../../assets/betacompass-showcase.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiFlutter,
  SiDart,
  SiApple,
  SiAndroid,
} from "react-icons/si";

// Official Tech Icons
const FlutterIcon = () => <SiFlutter className="w-6 h-6 text-[#02569B]" />;
const DartIcon = () => <SiDart className="w-6 h-6 text-[#0175C2]" />;
const AppleIcon = () => <SiApple className="w-6 h-6 text-white" />;
const AndroidIcon = () => <SiAndroid className="w-6 h-6 text-[#3DDC84]" />;

export default function DoorsMobileAppCaseStudy() {
  const [heroView, setHeroView] = useState("cover");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Doors Mobile App Case Study | Flutter Multi-Vendor E-Commerce | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives engineered the Doors cross-platform mobile application using Flutter and Dart, delivering native iOS and Android performance, multi-vendor product discovery, unified checkout in SAR, and vendor package tracking.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/doors-mobile-app";

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
      "Doors Mobile App Case Study | Flutter Multi-Vendor E-Commerce | CoreHives"
    );
    setOgMeta(
      "og:description",
      "Cross-platform Flutter mobile application engineering for Saudi Arabia's retail market: multi-merchant storefronts, unified SAR cart checkout, and vendor package tracking."
    );
    setOgMeta("og:url", "https://corehives.com/portfolio/doors-mobile-app");
    setOgMeta("og:type", "article");

    // JSON-LD Structured Data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Doors Mobile App",
      applicationCategory: "ShoppingApplication, BusinessApplication",
      operatingSystem: "iOS, Android (Flutter)",
      url: "https://corehives.com/portfolio/doors-mobile-app",
      description:
        "Cross-platform e-commerce mobile application developed with Flutter and Dart for the Doors multi-vendor marketplace, featuring multi-merchant discovery, unified checkout in SAR, and vendor package tracking.",
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
      title: "Multi-Merchant Product Discovery",
      shortDesc: "Curated storefronts and instant item search.",
      detail:
        "Shoppers explore verified vendor storefronts, dynamic product collections, and categorized feeds with localized search and price filters in Saudi Riyals (SAR).",
      badge: "Discovery & Feed",
      icon: Search,
    },
    {
      num: "02",
      title: "Consolidated Multi-Store Cart",
      shortDesc: "Single cart holding items from multiple sellers.",
      detail:
        "Customers add items from diverse independent merchants into one cohesive cart. The app groups items by vendor transparently with per-seller shipping calculations.",
      badge: "Unified Cart",
      icon: ShoppingBag,
    },
    {
      num: "03",
      title: "Unified Checkout in SAR",
      shortDesc: "One payment covering all selected vendors.",
      detail:
        "Customers complete a single transaction in SAR via MyFatoorah gateway (supporting Mada, Visa, Mastercard, and Apple Pay) without separate payment hurdles per merchant.",
      badge: "Secure Payment",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "Automated Vendor Package Splitting",
      shortDesc: "Master order divides into merchant-specific fulfillment queues.",
      detail:
        "The backend splits the master order into isolated vendor packages. The mobile app immediately provides dedicated tracking tokens and fulfillment status for each vendor's portion.",
      badge: "Order Routing",
      icon: Boxes,
    },
    {
      num: "05",
      title: "Independent Parcel Tracking",
      shortDesc: "Real-time updates as couriers dispatch each package.",
      detail:
        "Shoppers view a visual milestone timeline showing each package's progress from warehouse preparation to courier pickup and doorstep delivery.",
      badge: "Customer Timeline",
      icon: Truck,
    },
  ];

  const coreCapabilities = [
    {
      icon: Smartphone,
      title: "Single Codebase, Native 60 FPS",
      category: "Cross-Platform",
      desc: "Engineered with Flutter and Dart to run seamlessly on both Android and iOS devices, ensuring consistent UI fidelity, smooth 60fps animations, and native gestures.",
      points: [
        "Identical UI/UX behavior across iOS and Android",
        "Cupertino and Material navigation patterns respected",
        "High-performance rendering with Flutter Skia engine",
      ],
    },
    {
      icon: Store,
      title: "Merchant Storefront Profiles",
      category: "Vendor Ecosystem",
      desc: "Provides dedicated vendor storefront pages where customers can explore seller bios, catalog offerings, fulfillment locations, and verified merchant credentials.",
      points: [
        "Individual seller landing profiles and categories",
        "Vendor-specific policies and shipping notes",
        "Direct seller product feeds with instant search",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Unified Multi-Vendor Cart",
      category: "E-Commerce Engine",
      desc: "Solves the multi-merchant cart complexity by intelligently organizing items by seller while maintaining a single, uninterrupted checkout journey for the buyer.",
      points: [
        "Item grouping by merchant with transparent sub-totals",
        "Automatic stock availability validation across stores",
        "Live shipping fee calculation per merchant location",
      ],
    },
    {
      icon: CreditCard,
      title: "SAR Currency & Regional Payments",
      category: "FinTech Integration",
      desc: "Integrated with MyFatoorah to support localized payment methods throughout Saudi Arabia and the GCC, processing transactions natively in Saudi Riyals (SAR).",
      points: [
        "Full support for Mada debit cards and credit cards",
        "Native-friendly payment webview and callback verification",
        "Transparent VAT tax calculation and itemized receipts",
      ],
    },
    {
      icon: Truck,
      title: "Multi-Package Order Tracking",
      category: "Logistics & Fulfillment",
      desc: "Gives customers complete visibility into multi-part shipments when orders contain goods sourced from distinct merchant warehouses across the region.",
      points: [
        "Independent tracking timeline per vendor package",
        "Integration with OTO courier delivery milestones",
        "Interactive dispatch alerts and ETA updates",
      ],
    },
    {
      icon: RefreshCw,
      title: "Offline-First State & Network Resilience",
      category: "Mobile Architecture",
      desc: "Built with resilient local caching and secure storage to safeguard customer cart items, recent searches, and order history even during intermittent connectivity.",
      points: [
        "Zero cart loss on app backgrounding or restart",
        "Cached product catalog previews for instant loading",
        "Automatic background retry for pending requests",
      ],
    },
  ];

  const techStack = [
    {
      name: "Flutter",
      category: "Cross-Platform Framework",
      icon: FlutterIcon,
      desc: "Google's UI toolkit compiling to native ARM machine code for iOS and Android, providing high-performance 60fps animations and fluid touch interactions.",
    },
    {
      name: "Dart",
      category: "Client Programming Language",
      icon: DartIcon,
      desc: "Type-safe, object-oriented language optimized for client UI development, sound null safety, and fast execution on mobile devices.",
    },
    {
      name: "iOS Deployment",
      category: "Apple Ecosystem",
      icon: AppleIcon,
      desc: "Targeting iPhone and iPad with Apple HIG guidelines, smooth swipe transitions, safe area layout handling, and App Store submission readiness.",
    },
    {
      name: "Android Deployment",
      category: "Google Ecosystem",
      icon: AndroidIcon,
      desc: "Adaptive Material Design support across diverse Android screen sizes, hardware variations, and Google Play Store compliance.",
    },
    {
      name: "RESTful Mobile APIs",
      category: "Backend Integration",
      icon: () => <Cpu className="w-6 h-6 text-[#07BEB8]" />,
      desc: "Secure, authenticated REST API integration connecting the Flutter app to the Doors Laravel marketplace backend for instant catalog and order sync.",
    },
    {
      name: "MyFatoorah Gateway",
      category: "Regional Payment Gateway",
      icon: () => <CreditCard className="w-6 h-6 text-[#635BFF]" />,
      desc: "Localized payment processing tailored for Saudi Arabia (SAR), supporting Mada, Visa, Mastercard, and secure merchant settlement.",
    },
  ];

  const architecturalPillars = [
    {
      num: "01",
      title: "100% Shared Business Logic",
      desc: "A single Flutter codebase powers both iOS and Android applications, reducing maintenance overhead, preventing feature divergence, and accelerating release velocity.",
      badge: "Cross-Platform",
    },
    {
      num: "02",
      title: "Clean Layered Architecture",
      desc: "Separates Presentation (Widgets & BLoC state), Domain (Use Cases & Entities), and Data (REST API Client & Local Storage) for modularity and testability.",
      badge: "Software Architecture",
    },
    {
      num: "03",
      title: "Multi-Vendor Package Splitting",
      desc: "A single consumer checkout dynamically bifurcates into isolated vendor fulfillment streams, allowing separate warehouse processing and courier dispatches.",
      badge: "Fulfillment Logic",
    },
    {
      num: "04",
      title: "Secure Device Storage & Session Auth",
      desc: "Encrypted token storage on device with automated refresh cycles, keeping user sessions active securely and protecting transaction histories.",
      badge: "Security & Auth",
    },
  ];

  // Related projects
  const otherProjects = [
    {
      title: "Tenantism | Rent & Bill Settlement App",
      category: "PropTech • Flutter Mobile App Concept",
      image: tenantismCover,
      to: "/portfolio/tenantism",
    },
    {
      title: "Doors | Multi-Vendor E-Commerce Marketplace",
      category: "E-Commerce • Web Platform & Portals",
      image: DoorsMarketplaceImg,
      to: "/portfolio/doors-ecommerce-marketplace",
    },
    {
      title: "Rescue Spot | Pet Adoption Platform",
      category: "PetTech • Full-Stack & Mobile",
      image: RescueSpotImg,
      to: "/portfolio/rescue-spot",
    },
    {
      title: "BetaCompass | Property Intelligence SaaS",
      category: "PropTech • Full-Stack Web Platform",
      image: BetaCompassImg,
      to: "/portfolio/betacompass",
    },
  ];

  return (
    <div className="bg-[#00080d] text-white min-h-screen selection:bg-[#07BEB8]/30 selection:text-[#07BEB8]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION A: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <img
            src={hero_bg}
            alt=""
            className="w-full h-auto object-cover opacity-25"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          className="absolute top-1/4 -left-32 w-96 h-96 opacity-20 blur-3xl pointer-events-none"
        />
        <img
          src={rightLight}
          alt=""
          className="absolute top-1/3 -right-32 w-96 h-96 opacity-20 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600 inline" />
              </li>
              <li>
                <Link
                  to="/our-portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600 inline" />
              </li>
              <li>
                <Link
                  to="/portfolio/mobile-app-development"
                  className="hover:text-white transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600 inline" />
              </li>
              <li className="text-[#07BEB8] font-medium truncate">
                Doors Mobile App
              </li>
            </ol>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#07BEB8]" />
            <span>Case Study • Mobile App Development</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            Doors <span className="text-[#07BEB8]">Mobile App</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Multi-Vendor E-Commerce Mobile App Built with Flutter for Android &amp; iOS
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A high-performance cross-platform retail application engineered for Saudi
            Arabia’s multi-vendor shopping ecosystem. Delivering unified shopping
            across independent merchant storefronts, multi-store cart consolidation,
            localized SAR payments, and automated vendor package tracking.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToOverview}
              className="border-white/20 hover:border-[#07BEB8]/50"
            >
              Explore Case Study
            </CTAButton>

            <Link
              to="/portfolio/doors-ecommerce-marketplace"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/15 text-gray-200 font-semibold text-sm hover:bg-white/10 hover:border-[#07BEB8]/40 transition-all group"
            >
              <span>View Web Marketplace Case Study</span>
              <ArrowUpRight className="w-4 h-4 text-[#07BEB8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <CTAButton to="/contact">Discuss Your Mobile App</CTAButton>
          </div>

          {/* Project Information Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#010e14]/80 border border-white/10 backdrop-blur-md mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Client &amp; Market
              </p>
              <p className="text-sm font-medium text-white">Doors Platform</p>
              <p className="text-xs text-gray-400 mt-0.5">Saudi Arabia / GCC</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Target Platforms
              </p>
              <p className="text-sm font-medium text-white">iOS &amp; Android</p>
              <p className="text-xs text-gray-400 mt-0.5">Single Cross-Platform Codebase</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Deliverables
              </p>
              <p className="text-sm font-medium text-white">Mobile E-Commerce App</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Multi-Vendor Cart, SAR Checkout, Tracking
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Engineering Stack
              </p>
              <p className="text-sm font-medium text-white">Flutter • Dart</p>
              <p className="text-xs text-gray-400 mt-0.5">
                REST APIs, MyFatoorah, OTO Logistics
              </p>
            </div>
          </div>

          {/* Primary Visual Showcase — Interactive Dual Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)]">
            {/* Top Bar with View Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  doors-app /{" "}
                  {heroView === "cover"
                    ? "ecosystem-showcase"
                    : "screens-checkout-walkthrough"}
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
                  App Showcase &amp; Devices
                </button>
                <button
                  onClick={() => setHeroView("screens")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    heroView === "screens"
                      ? "bg-[#07BEB8] text-[#00151c] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Screens &amp; Checkout Flow
                </button>
              </div>
            </div>

            {/* Display Viewport */}
            <div className="p-4 sm:p-8 bg-gradient-to-b from-[#01111a] to-[#00080d] flex items-center justify-center">
              {heroView === "cover" ? (
                <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={doorsMobileCover}
                    alt="Doors Multi-Vendor E-Commerce Mobile App developed with Flutter for iOS and Android"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#00151c]/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-400">
                    <span className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#07BEB8]" />
                      <span>Cross-platform mobile presentation: Flutter compiled to native ARM for iOS &amp; Android.</span>
                    </span>
                    <span className="text-[#07BEB8] font-mono">Status: Production-Grade</span>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={doorsMobileScreens}
                    alt="Doors Mobile App Screens showing product discovery, product detail in SAR, and multi-vendor checkout"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#00151c]/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-400">
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#07BEB8]" />
                      <span>Customer journey: Merchant Discovery → Product Details (SAR) → Multi-Vendor Checkout.</span>
                    </span>
                    <span className="text-[#07BEB8] font-mono">Flow: 3 Screen Walkthrough</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION B: PROJECT OVERVIEW & THE MULTI-VENDOR CHALLENGE
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 bg-[#000c12] border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Context & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/20 text-[#07BEB8] text-xs font-medium">
                <Store className="w-3.5 h-3.5" />
                <span>The Mobile Retail Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Extending a Multi-Merchant Marketplace into Mobile Users&apos; Hands
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                The Doors platform operates as an active multi-vendor marketplace in
                Saudi Arabia. While the web platform enabled comprehensive seller
                dashboards and back-office management, the modern Middle Eastern retail
                landscape demanded a fluid, mobile-first experience for consumers who
                prefer shopping directly from their smartphones.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Building a multi-vendor mobile shopping app introduces unique engineering
                hurdles beyond standard e-commerce: customers expect a seamless single-cart
                checkout, yet the underlying system must accommodate items dispatched by
                independent sellers with distinct warehouse locations, individual courier
                consignments, and differing fulfillment velocities.
              </p>

              {/* Core Deliverable Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Single Cross-Platform Codebase</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Unified Flutter project targeting both iOS and Android.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">SAR Currency &amp; Regional Gateways</h4>
                    <p className="text-xs text-gray-400 mt-0.5">MyFatoorah integration supporting Mada, Visa, and Apple Pay.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Multi-Store Cart Consolidation</h4>
                    <p className="text-xs text-gray-400 mt-0.5">One payment automatically broken down into merchant packages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Independent Package Tracking</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Granular delivery status per seller order package.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#01141f] to-[#010a10] border border-[#07BEB8]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#07BEB8]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-[#07BEB8]">
                    <Smartphone className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Mobile Specifications</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#07BEB8]/15 text-[#07BEB8] border border-[#07BEB8]/30">
                    Production
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">Framework</span>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <SiFlutter className="w-4 h-4 text-[#02569B]" />
                      Flutter (3.x)
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">Language</span>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <SiDart className="w-4 h-4 text-[#0175C2]" />
                      Dart (Sound Null Safety)
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">Platforms</span>
                    <span className="text-white font-medium">iOS (14+) &amp; Android (8.0+)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">State Management</span>
                    <span className="text-white font-medium">Reactive BLoC / Repository Pattern</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">Payment Gateway</span>
                    <span className="text-white font-medium">MyFatoorah (Mada, Cards)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                    <span className="text-gray-400">Logistics Bridge</span>
                    <span className="text-white font-medium">OTO Logistics API Sync</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2">
                    <span className="text-gray-400">Currency</span>
                    <span className="text-[#07BEB8] font-bold">Saudi Riyal (SAR)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-lg bg-[#001017] border border-white/5 text-xs text-gray-300">
                    <span className="font-semibold text-white">Ecosystem Synergy: </span>
                    Shares backend data contracts with the Doors Web Marketplace for 100% catalog and inventory parity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION C: MULTI-VENDOR MOBILE WORKFLOW (INTERACTIVE TIMELINE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-4">
              <Boxes className="w-3.5 h-3.5 text-[#07BEB8]" />
              <span>End-to-End User Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              The Mobile Multi-Vendor Shopping Flow
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              How the Doors mobile app simplifies complex multi-merchant commerce into
              a seamless, friction-free experience for Saudi shoppers.
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    activeWorkflowStep === idx
                      ? "bg-[#01141f] border-[#07BEB8] shadow-[0_0_20px_rgba(7,190,184,0.2)]"
                      : "bg-[#010b10] border-white/10 hover:border-white/20 hover:bg-[#011017]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        activeWorkflowStep === idx ? "text-[#07BEB8]" : "text-gray-500"
                      }`}
                    >
                      STEP {step.num}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        activeWorkflowStep === idx ? "text-[#07BEB8]" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white truncate">
                    {step.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Step Feature Box */}
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#01131c] to-[#00090e] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-mono font-extrabold text-[#07BEB8]">
                    {workflowSteps[activeWorkflowStep].num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#07BEB8]/15 text-[#07BEB8] border border-[#07BEB8]/30">
                    {workflowSteps[activeWorkflowStep].badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {workflowSteps[activeWorkflowStep].title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {workflowSteps[activeWorkflowStep].detail}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#07BEB8]">
                  <Check className="w-4 h-4" />
                  <span>Optimized for fast mobile execution &amp; responsive UI feedback.</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#000d14] border border-white/10">
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-3">
                  Mobile Implementation Details
                </h4>
                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#07BEB8] font-bold">UI:</span>
                    <span>Custom Flutter widgets with Cupertino/Material adaptive themes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#07BEB8] font-bold">API:</span>
                    <span>REST endpoints serialized with Dart json_serializable models.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#07BEB8] font-bold">Safety:</span>
                    <span>Bearer token authentication with automatic token renewal.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#07BEB8] font-bold">Speed:</span>
                    <span>Image caching &amp; lazy-loaded product lists for instant scrolling.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION D: ARCHITECTURAL PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#000c12] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-[#07BEB8]" />
              <span>Engineering Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Architectural Pillars
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Designed from day one to deliver frictionless consumer commerce, high scalability,
              and seamless multi-merchant coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 rounded-2xl bg-[#011017] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-[#07BEB8]">
                      {pillar.num}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 group-hover:border-[#07BEB8]/30 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#07BEB8] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION E: CORE APP CAPABILITIES & FEATURES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#07BEB8]" />
              <span>Feature Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Key Capabilities &amp; Mobile Innovations
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Every interface and interaction is tuned for high-converting mobile commerce
              and intuitive multi-vendor shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#01111a] to-[#00080d] border border-white/10 hover:border-[#07BEB8]/50 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#07BEB8]/10 text-[#07BEB8] border border-[#07BEB8]/20 group-hover:bg-[#07BEB8] group-hover:text-[#001017] transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#07BEB8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-[#07BEB8] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION F: TECH STACK GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#000c12] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#07BEB8]" />
              <span>Technology Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Built on Modern Mobile Engineering
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Leveraging Flutter’s reactive framework and industry-standard integrations
              to deliver native-level responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#011017] border border-white/10 hover:border-[#07BEB8]/40 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <TechIcon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-400">{tech.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION G: ECOSYSTEM SYNERGY (WEB MARKETPLACE & MOBILE APP)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#011622] via-[#010e16] to-[#00080d] border border-[#07BEB8]/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07BEB8]/15 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-semibold uppercase tracking-wider">
                  <span>Unified E-Commerce Ecosystem</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Complementing the Doors Web Marketplace
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  The Doors mobile application works in tandem with the web marketplace platform
                  also developed by CoreHives. While merchants use the web interface to manage
                  inventory, fulfill order packages, and track earnings, shoppers enjoy a native,
                  speedy mobile app for searching, purchasing, and receiving push updates.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/portfolio/doors-ecommerce-marketplace"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#07BEB8] text-[#001721] font-semibold text-sm hover:bg-[#07BEB8]/90 transition-all shadow-md group"
                  >
                    <span>Read Doors Web Marketplace Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#001017] border border-white/10 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/15 text-[#07BEB8] flex items-center justify-center mx-auto mb-3">
                  <Boxes className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Dual-Pillar Commerce</h4>
                <p className="text-xs text-gray-400 mb-4">
                  Admin, Vendor Portal &amp; Web Platform + Native Flutter Mobile App
                </p>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-[#07BEB8] font-mono">
                  100% CoreHives Engineered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION H: EXPLORE OTHER CASE STUDIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#000a0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-2">
                Portfolio Showcase
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore More Client Success Stories
              </h2>
            </div>
            <Link
              to="/our-portfolio"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm text-[#07BEB8] hover:underline font-semibold group"
            >
              <span>View All Portfolio Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((proj, idx) => (
              <Link
                key={idx}
                to={proj.to}
                className="group rounded-2xl overflow-hidden bg-[#01111a] border border-white/10 hover:border-[#07BEB8]/50 transition-all flex flex-col shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/40 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01111a] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#07BEB8] tracking-wider block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#07BEB8] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION I: FINAL CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#01141e] to-[#00080d] border border-white/15 shadow-[0_20px_60px_rgba(7,190,184,0.12)]">
            <div className="w-16 h-16 rounded-2xl bg-[#07BEB8]/15 text-[#07BEB8] flex items-center justify-center mx-auto mb-6 border border-[#07BEB8]/30">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to Launch Your Mobile Application?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need a multi-vendor retail platform, a dedicated iOS &amp; Android app,
              or a bespoke SaaS system, CoreHives delivers robust engineering from concept to app store release.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton to="/contact">Discuss Your Project</CTAButton>
              <Link
                to="/portfolio/mobile-app-development"
                className="px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#07BEB8]/50 text-sm font-semibold transition-all"
              >
                Explore Mobile Portfolio
              </Link>
            </div>
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
