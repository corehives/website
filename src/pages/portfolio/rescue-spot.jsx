import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
  Database,
  Users,
  Heart,
  ChevronRight,
  Zap,
  Server,
  Smartphone,
  FileCheck2,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic project screenshots
import coverShowcaseImg from "../../assets/rescue-spot/cover-showcase.webp";
import shelterDashboardImg from "../../assets/rescue-spot/shelter-dashboard.webp";
import petDirectoryImg from "../../assets/rescue-spot/pet-directory.webp";
import petProfileImg from "../../assets/rescue-spot/pet-profile-detail.webp";
import landingWorkflowImg from "../../assets/rescue-spot/landing-workflow.webp";

// Other case study covers for footer navigation
import BaileyBeauImg from "../../assets/bailey-beau-showcase.webp";
import DoorsImg from "../../assets/doors-showcase.webp";
import ProDocetImg from "../../assets/prodocet-showcase.webp";
import ProStartImg from "../../assets/prostart-showcase.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiLaravel,
  SiMysql,
  SiFlutter,
} from "react-icons/si";

// Official Tech Icons
const LaravelIcon = () => <SiLaravel className="w-6 h-6 text-[#FF2D20]" />;
const MysqlIcon = () => <SiMysql className="w-6 h-6 text-[#00758F]" />;
const FlutterIcon = () => <SiFlutter className="w-6 h-6 text-[#02569B]" />;

export default function RescueSpotCaseStudy() {
  const [activeLifecycleStep, setActiveLifecycleStep] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Rescue Spot Case Study | Pet Adoption Platform | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how Full Stack Developer Hanzalah contributed 8 months of full-stack development, API integrations, and ongoing updates to Rescue Spot, a US-based pet adoption platform connecting adopters and shelters.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/rescue-spot";

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
      "Rescue Spot Case Study | Pet Adoption Platform | CoreHives"
    );
    setOgMeta(
      "og:description",
      "Full stack development, API integrations, and 8 months of ongoing updates for a US pet adoption platform featuring 46,000+ pets and shelter workflows."
    );
    setOgMeta("og:url", "https://corehives.com/portfolio/rescue-spot");
    setOgMeta("og:type", "article");

    // JSON-LD Structured Data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Rescue Spot",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web, Mobile (Flutter)",
      url: "https://www.rescue-spot.com/",
      description:
        "US-based pet adoption platform connecting adopters, foster families, volunteers, and rescue shelters with unified application workflows and search across 46,000+ animals.",
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

  const scrollToSolution = (e) => {
    e.preventDefault();
    const element = document.getElementById("solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lifecycleSteps = [
    {
      num: "01",
      title: "Nationwide Pet Search",
      shortDesc: "Fast multi-facet catalog filtering across 46,000+ pets.",
      detail:
        "Prospective pet parents filter by species, breed, distance radius, age, and temperament using reactive Flutter widgets communicating with cached Laravel query endpoints.",
      badge: "Discovery Engine",
    },
    {
      num: "02",
      title: "Universal Application Form",
      shortDesc: "Single reusable application profile for all shelters.",
      detail:
        "Adopters fill out their home environment, background, previous pets, and veterinary references once, eliminating repetitive multi-page paperwork across different rescue groups.",
      badge: "Universal Profile",
    },
    {
      num: "03",
      title: "Shelter Verification Hub",
      shortDesc: "Rescue coordinators review candidate queues in real time.",
      detail:
        "Participating rescue organizations access incoming applications, verify applicant documentation, update pipeline statuses, and schedule meet-and-greets.",
      badge: "Shelter Portal",
    },
    {
      num: "04",
      title: "Direct Placement & Finalization",
      shortDesc: "In-platform communication and finalized adoption records.",
      detail:
        "Direct messaging between shelter staff and prospective owners facilitates placement agreements, foster handoffs, and care foundation donations.",
      badge: "Placement Engine",
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
              CASE STUDY | PETTECH &amp; RESCUE NETWORK
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Rescue <span className="text-[#07BEB8]">Spot</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Unifying Pet Adoption &amp; Shelter Operations Across the United States
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Rescue Spot is a US-based pet adoption platform connecting adopters, foster
            families, volunteers, and rescue shelters through a unified digital experience.
            Working as Full Stack Developer for approximately 8 months, I contributed
            core API integrations, shelter management dashboard enhancements, and
            ongoing platform maintenance under the direction of founder &amp; CEO Nicole Patrick.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToOverview}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Explore the Project
            </CTAButton>
            <CTAButton
              onClick={scrollToSolution}
              className="border-white/20 hover:border-[#07BEB8]/50"
            >
              The Adoption Engine
            </CTAButton>
            <a
              href="https://www.rescue-spot.com/"
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
                PetTech &amp; Animal Rescue
              </p>
              <p className="text-xs text-gray-400 mt-0.5">United States Nationwide</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Live Website
              </p>
              <a
                href="https://www.rescue-spot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8efcf8] hover:text-[#07BEB8] transition-colors"
              >
                rescue-spot.com
                <ExternalLink className="w-3 h-3 text-[#07BEB8]" />
              </a>
              <p className="text-xs text-gray-400 mt-0.5">Pet Adoption &amp; Foster Hub</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Role &amp; Timeline
              </p>
              <p className="text-sm font-medium text-white">
                Full Stack Developer
              </p>
              <p className="text-xs text-gray-400 mt-0.5">~8 Months (API Integrations &amp; Updates)</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Production Stack
              </p>
              <p className="text-sm font-medium text-white">
                Laravel • MySQL • Flutter
              </p>
              <p className="text-xs text-gray-400 mt-0.5">REST APIs &amp; Data Synchronization</p>
            </div>
          </div>

          {/* Primary Visual — Official Project Cover Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)] group">
            <div className="flex items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  rescue-spot.com / case-study / overview
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#07BEB8] bg-[#07BEB8]/10 px-2.5 py-0.5 rounded-full border border-[#07BEB8]/30">
                Official Portfolio Showcase
              </span>
            </div>
            <img
              src={coverShowcaseImg}
              alt="Rescue Spot Pet Adoption Platform Portfolio Cover Showcase"
              width={1024}
              height={768}
              className="w-full h-auto object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: PROJECT OVERVIEW AND CHALLENGE
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Copy */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                OVERVIEW &amp; CHALLENGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Streamlining Pet Adoption in a Fragmented Landscape
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Traditionally, finding and adopting a rescue pet in the United States has been
                a disjointed, repetitive experience. Adopters fill out the same 10-page forms
                dozens of times across independent shelters, wait weeks with zero feedback,
                and navigate clunky websites with outdated pet rosters.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Rescue Spot bridges this gap by offering a centralized platform with a
                &quot;One Spot, One Application&quot; promise. During my 8-month engagement,
                I collaborated closely with the team to enhance platform stability, optimize
                heavy queries across tens of thousands of pet records, and deliver continuous
                feature updates across four core areas:
              </p>

              {/* 4 Core Challenge Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Catalog Scale (46,000+ Pets)
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Structuring fast, paginated MySQL queries and REST API serializers to maintain sub-150ms search response times across tens of thousands of active animal profiles.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Multi-Party Shelter Dashboards
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Empowering rescue coordinators with live application pipelines, foster queues, volunteer verification, and adoption velocity analytics in one interface.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Unified Universal Application
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Enabling pet parents to fill out one comprehensive profile and seamlessly apply to adopt or foster across hundreds of participating rescue organizations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Ongoing Updates &amp; Reliability
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Maintaining high uptime, rapid bug fixes, Flutter UI component iterations, and reliable data synchronization throughout the 8-month development cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column — Authentic Landing Workflow Screenshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010e14] shadow-2xl relative group">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-[11px] font-mono text-gray-400 ml-2">
                      rescue-spot.com / workflow
                    </span>
                  </div>
                  <span className="text-[10px] text-[#07BEB8] font-mono">
                    Adoption Flow
                  </span>
                </div>
                <div className="p-2 bg-black/40 flex items-center justify-center max-h-[560px] overflow-hidden">
                  <img
                    src={landingWorkflowImg}
                    alt="Rescue Spot Adoption Flow and Platform Experience"
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#00121a] border-t border-white/10">
                  <p className="text-xs text-gray-300 font-medium">
                    The &quot;One Spot, One Application&quot; user onboarding journey connecting prospective pet parents with rescue organizations nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE CENTERPIECE — ADOPTION LIFECYCLE (Interactive)
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#01141c] via-[#010e14] to-[#001017] border border-[#07BEB8]/40 shadow-[0_20px_60px_rgba(7,190,184,0.12)]">
            <div className="max-w-3xl mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                CORE PLATFORM CAPABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                One Spot, One Application: The Universal Adoption Lifecycle
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Rescue Spot transforms how prospective adopters and shelter teams connect.
                Instead of isolated forms and fragmented communications, the platform coordinates
                search, verification, review, and placement through a single shared data contract.
              </p>
            </div>

            {/* Interactive Step Selector */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                {lifecycleSteps.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveLifecycleStep(idx)}
                    role="button"
                    tabIndex={0}
                    className={`p-5 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                      activeLifecycleStep === idx
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
                      <span>{activeLifecycleStep === idx ? "Active Step" : "Click to View"}</span>
                      {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-gray-500 hidden md:inline" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Step Explainer Card */}
              <div className="mt-4 p-5 rounded-xl bg-[#001017] border border-[#07BEB8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-300">
                  <span className="text-white font-bold mr-2">
                    {lifecycleSteps[activeLifecycleStep].title}:
                  </span>
                  {lifecycleSteps[activeLifecycleStep].detail}
                </div>
                <div className="text-xs font-mono text-[#8efcf8] bg-[#07BEB8]/10 px-3 py-1 rounded-full border border-[#07BEB8]/30 self-start sm:self-auto shrink-0">
                  Subsystem: {lifecycleSteps[activeLifecycleStep].badge}
                </div>
              </div>
            </div>

            {/* Business & Engineering Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#001017] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#07BEB8]" />
                  Adopter &amp; Community Significance
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Eliminates the friction of applying to multiple shelters. Families complete
                  their veterinary references, household data, and landlord approvals once,
                  allowing rescue teams to act promptly while reducing shelter abandonment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#001017] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#07BEB8]" />
                  Full-Stack Engineering Significance
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Centralized application schemas in Laravel with scoped permission queries
                  ensure that participating rescue groups access only the records submitted to
                  their organization, preserving applicant privacy and maintaining data isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CONSOLIDATED CAPABILITIES (3 Distinct Groups)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Consolidating core functionality into three major capability groups
              supporting pet search, shelter operations, and universal adoption workflows.
            </p>
          </div>

          <div className="space-y-16">
            {/* Group A: Nationwide Pet Discovery & Search */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP A
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Nationwide Pet Search &amp; Discovery
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Fast, multi-attribute catalog search across 46,000+ active animals.
                  Optimized Laravel JSON serializers and MySQL indexes ensure instant
                  pagination, distance calculations, and responsive cards.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Multi-Facet Filters:</strong> Search by species (dogs, cats, birds), breed, age, size, gender, and temperament.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Proximity Search:</strong> Optimized ZIP code radius calculations surfacing closest adoptable pets first.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Verified Shelter Badges:</strong> Direct visual indicators confirming verified 501(c)(3) rescue organizations.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Responsive Catalog Cards:</strong> Smooth infinite scroll and high-performance image thumbnail caching.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>rescue-spot.com / pets / find</span>
                    <span className="text-[#07BEB8]">46,905 Active Pets</span>
                  </div>
                  <img
                    src={petDirectoryImg}
                    alt="Rescue Spot Nationwide Pet Discovery Directory"
                    width={1024}
                    height={724}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Group B: Shelter Management Operations Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP B
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Multi-Tenant Shelter Operations Hub
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  A centralized workspace empowering rescue coordinators to manage
                  their pet rosters, incoming adoption inquiries, foster pipelines,
                  and volunteer verification queues.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Live Application Pipelines:</strong> Real-time counters tracking Foster, Volunteer, and Adoption reviews.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Adoption Velocity Analytics:</strong> Month-over-month performance trends comparing total placements and foster retention.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FileCheck2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Applicant Data Verification:</strong> Secure access to landlord permission slips, vet records, and photo IDs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Direct Coordinator Messaging:</strong> Built-in messaging keeping applicant communication organized within the portal.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>rescue-spot.com / shelter / dashboard</span>
                    <span className="text-[#07BEB8]">Shelter Admin</span>
                  </div>
                  <img
                    src={shelterDashboardImg}
                    alt="Rescue Spot Shelter Operations Management Interface"
                    width={1024}
                    height={601}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Group C: Pet Profile & Universal Application Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#01141c]/50 border border-white/10">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono text-[#07BEB8] uppercase tracking-wider block mb-2 font-bold">
                  GROUP C
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Pet Profile &amp; Universal Application
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Rich pet profile displays with photo galleries, compatibility
                  matrices (kids, dogs, cats), and dual &quot;Adopt&quot; and &quot;Foster&quot;
                  actions that pre-fill adopter data to maximize placement rates.
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <Heart className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Compatibility Matrices:</strong> Clear icons detailing whether the pet thrives with kids, cats, or other dogs.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Dual Action Pathways:</strong> Instant toggles for permanent adoption vs. temporary foster care placement.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Pre-Filled Applications:</strong> One-click submission reusing verified adopter details without typing redundancy.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#07BEB8] shrink-0 mt-0.5" />
                    <span><strong>Care Foundation Support:</strong> Seamless donation prompts supporting medical care for high-need rescue animals.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-xl">
                  <div className="px-4 py-2 bg-[#00151c] border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>rescue-spot.com / pet / profile</span>
                    <span className="text-[#07BEB8]">Adoption Detail</span>
                  </div>
                  <img
                    src={petProfileImg}
                    alt="Rescue Spot Pet Profile and Adoption Flow Interface"
                    width={1024}
                    height={920}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ARCHITECTURE & SYSTEM DESIGN (4 Layers + Badges)
      ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ARCHITECTURE &amp; SYSTEM DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Built Around Modular Full-Stack Architecture
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Rescue Spot combines a scalable Laravel REST API backend, an optimized
              MySQL relational database, and a cross-platform Flutter frontend to ensure
              consistency across mobile and web platforms.
            </p>
          </div>

          {/* 4-Layer Architecture Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Layer 1: Flutter Frontend */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 01
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Flutter Frontend
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Cross-platform mobile apps (iOS &amp; Android)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Responsive web client UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Custom catalog cards &amp; filters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Reactive state management
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Cross-Platform Flutter
              </div>
            </div>

            {/* Layer 2: Laravel Application Layer */}
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
                    Laravel RESTful API v1
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Multi-tenant shelter auth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Role-based permission guards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Background queue workers
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Laravel REST Engine
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
                    Composite index optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    46,000+ animal catalog records
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    ACID transaction security
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                MySQL Relational Model
              </div>
            </div>

            {/* Layer 4: External Integrations */}
            <div className="p-6 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#07BEB8] uppercase block mb-1 font-bold">
                  LAYER 04
                </span>
                <h3 className="text-lg font-bold text-white mb-3">
                  Integrations &amp; Sync
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    ZIP distance mathematical queries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Shelter partner synchronization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    Media storage &amp; image CDN
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                    In-platform messaging webhooks
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 font-mono">
                Partner &amp; Media Services
              </div>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <FlutterIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Flutter Framework</h4>
                <p className="text-xs text-gray-400">Cross-Platform Frontend UI</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <LaravelIcon />
              <div>
                <h4 className="text-sm font-bold text-white">Laravel Core</h4>
                <p className="text-xs text-gray-400">Backend API &amp; Business Logic</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10 flex items-center gap-3">
              <MysqlIcon />
              <div>
                <h4 className="text-sm font-bold text-white">MySQL 8.0</h4>
                <p className="text-xs text-gray-400">Relational Database &amp; Indexing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ENGINEERING HIGHLIGHTS (3 Distinct Capabilities)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ENGINEERING HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Engineering Beyond a Standard Portal
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Three distinctive engineering capabilities differentiate the Rescue Spot
              platform from conventional pet listing websites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  High-Capacity Catalog Optimization
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Sub-150ms Query Times
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Structuring compound database indexes across species, location coordinates, shelter keys, and intake dates.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Allows users to fluidly browse 46,000+ active animals without encountering server timeouts or lagging client renders.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Multi-Tenant Shelter Isolation
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Scoped Query Security
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Multi-guard authentication with scoped Eloquent query builders preventing cross-shelter data bleed.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Guarantees that sensitive applicant documents, veterinary notes, and volunteer records remain strictly confined to the authorized shelter.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Universal Form Synchronization
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#07BEB8] font-semibold mb-4">
                  Single Data Contract
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <strong>Technical Capability:</strong> Decoupled applicant profile state in Flutter synchronized to normalized Laravel relational entities.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  <strong>Practical Importance:</strong> Adopters submit one comprehensive application that seamlessly maps into any participating rescue organization&apos;s custom review workflow.
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
              ENGAGEMENT OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Measurable Engineering Impact &amp; Platform Stability
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              Eight months of disciplined full-stack engineering and ongoing updates delivered
              measurable improvements across application speed, shelter data reliability, and
              user adoption velocity.
            </p>

            {/* 4 Fact-Based Outcome Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  01 / CATALOG SCALE
                </span>
                <p className="text-base font-bold text-white mb-1">
                  46,000+ Active Pets
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Synchronized across rescue shelters nationwide with sub-150ms catalog retrieval.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  02 / ENGAGEMENT DURATION
                </span>
                <p className="text-base font-bold text-white mb-1">
                  ~8 Months Updates
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Continuous full-stack development, API integrations, and feature maintenance.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  03 / ADOPTION LIFECYCLE
                </span>
                <p className="text-base font-bold text-white mb-1">
                  1-Spot Universal Flow
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Eliminating redundant applications across shelters through a single validated profile.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  04 / VERIFIED STACK
                </span>
                <p className="text-base font-bold text-white mb-1">
                  100% Production Stack
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Reliable deployment built entirely upon Laravel, MySQL, and Flutter technologies.
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
              Verified feedback on the 8-month development collaboration from company leadership.
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
                  AUTHENTIC CLIENT FEEDBACK &amp; VIDEO ENDORSEMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Rescue Spot
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

            {/* Video & Quote Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 relative text-gray-300 text-base sm:text-lg leading-relaxed space-y-4">
                <Quote className="w-10 h-10 text-[#07BEB8]/20 absolute -top-4 -left-3 -z-0" />
                <p className="relative z-10 text-xl sm:text-2xl font-bold text-white leading-snug">
                  &ldquo;I have worked with Hanzalah ( CTO - CoreHives ) for about 8 months now. He has been an integral part of our updates.&rdquo;
                </p>
                <p className="relative z-10 text-sm sm:text-base text-gray-300 leading-relaxed">
                  Nicole Patrick, CEO &amp; Founder of Rescue Spot, highlights our 8-month engagement supporting the platform through core full-stack updates, API enhancements, and consistent technical execution.
                </p>
              </div>

              {/* Embedded Player */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-[#07BEB8]/40 shadow-2xl bg-black relative aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/RoBbZznKk54"
                    title="Nicole Patrick Testimonial for Hanzalah - Rescue Spot"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>

            {/* Client Info Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#07BEB8] to-[#4eecea] flex items-center justify-center text-[#010A11] font-extrabold text-base shadow-md">
                  NP
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Nicole Patrick</h4>
                  <p className="text-xs text-gray-400">CEO &amp; Founder, Rescue Spot</p>
                </div>
              </div>

              <a
                href="https://www.rescue-spot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#07BEB8] hover:text-[#4eecea] transition-colors font-medium self-start sm:self-auto"
              >
                rescue-spot.com
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
            Have a Complex Digital Platform to Build or Scale?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            From high-volume consumer portals to multi-tenant backends and full-stack engineering retainers, CoreHives delivers reliable, production-ready systems.
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

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: EXPLORE MORE CASE STUDIES
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

            {/* ProStartLeasing */}
            <Link
              to="/portfolio/prostartleasing"
              className="group block rounded-2xl border border-white/10 bg-[#01141c]/60 overflow-hidden hover:border-[#07BEB8]/50 transition-all hover:shadow-xl hover:shadow-[#07BEB8]/10"
            >
              <div className="h-44 overflow-hidden relative bg-black/40">
                <img
                  src={ProStartImg}
                  alt="ProStartLeasing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  FinTech &amp; Equipment Leasing
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  ProStartLeasing
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Commercial vehicle and equipment leasing portal with automated credit underwriting and payment calculators.
                </p>
              </div>
            </Link>
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
