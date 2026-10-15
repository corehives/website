import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Receipt,
  UploadCloud,
  Lock,
  History,
  Bell,
  Smartphone,
  Layers,
  FileCheck2,
  AlertCircle,
  XCircle,
  DollarSign,
  Zap,
  Droplets,
  Flame,
  Check,
  Languages,
  Eye,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Cover Image Asset (exact user-supplied cover)
import tenantismCover from "../../assets/tenantism-cover.webp";

// Other case study covers for exploration section
import RescueSpotImg from "../../assets/rescue-spot-showcase.webp";
import DoorsImg from "../../assets/doors-showcase.webp";
import ProDocetImg from "../../assets/prodocet-showcase.webp";
import ProStartImg from "../../assets/prostart-showcase.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

export default function TenantismCaseStudy() {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState("tenant"); // "tenant" | "owner"
  const [activeStatusDemo, setActiveStatusDemo] = useState("Approved");

  useEffect(() => {
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Tenantism Case Study | Rent & Bill Settlement App Concept | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore Tenantism, a proposed mobile application concept designed by CoreHives to help tenants and property owners manage monthly rent, utility bills, deductions, supporting documents, and approval records in one organized place.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/tenantism";

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
      "Tenantism Case Study | Rent & Bill Settlement App Concept | CoreHives"
    );
    setOgMeta(
      "og:description",
      "Bring clarity and transparency to rent settlements through documented bills, proof uploads, owner review, and shared monthly records."
    );
    setOgMeta("og:url", "https://corehives.com/portfolio/tenantism");
    setOgMeta("og:type", "article");
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const keyFeatures = [
    {
      icon: <Receipt className="w-5 h-5 text-[#07BEB8]" />,
      num: "01",
      title: "Monthly Rent Records",
      description:
        "Record base rent and monthly settlement details in a structured format, maintaining an organized ledger across billing cycles.",
      tag: "Core Ledger",
    },
    {
      icon: (
        <div className="flex items-center gap-1 text-[#07BEB8]">
          <Zap className="w-4 h-4 text-amber-400" />
          <Droplets className="w-4 h-4 text-sky-400" />
          <Flame className="w-4 h-4 text-orange-400" />
        </div>
      ),
      num: "02",
      title: "Utility Bills Tracking",
      description:
        "Itemize electricity, water, gas, and miscellaneous utility bills with dedicated entry fields and breakdown totals.",
      tag: "Utilities",
    },
    {
      icon: <UploadCloud className="w-5 h-5 text-[#07BEB8]" />,
      num: "03",
      title: "Bill Proof Uploads",
      description:
        "Attach and review high-resolution photo evidence or digital receipts linked directly to the corresponding month and utility bill.",
      tag: "Verification",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#07BEB8]" />,
      num: "04",
      title: "Manual Deductions",
      description:
        "Enter justified deduction amounts for authorized repairs or maintenance expenses with mandatory explanatory notes.",
      tag: "Settlement",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#07BEB8]" />,
      num: "05",
      title: "Owner Review & Decision",
      description:
        "Empower property owners to examine itemized bills, inspect attached proofs, and either approve the record or reject with comments.",
      tag: "Approval",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#07BEB8]" />,
      num: "06",
      title: "Frozen Approved Records",
      description:
        "Once approved by the owner, the monthly record is locked as read-only for both parties, preventing silent edits or retrospective disputes.",
      tag: "Integrity",
    },
    {
      icon: <History className="w-5 h-5 text-[#07BEB8]" />,
      num: "07",
      title: "Shared Monthly History",
      description:
        "Both tenant and landlord can revisit any previous month's finalized settlement, itemized deductions, and archived proof documents.",
      tag: "Audit Trail",
    },
    {
      icon: <Bell className="w-5 h-5 text-[#07BEB8]" />,
      num: "08",
      title: "Real-Time Notifications",
      description:
        "Notify both parties instantly upon record submission, approval, rejection, or receipt of owner review notes.",
      tag: "Alerts",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#07BEB8]" />,
      num: "09",
      title: "Role-Based Dashboards",
      description:
        "Distinct, tailored interfaces designed specifically for tenants creating submissions and owners managing portfolio approvals.",
      tag: "Workspaces",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#07BEB8]" />,
      num: "10",
      title: "Accessible Mobile Experience",
      description:
        "Guided step-by-step entry, large touch targets, high-contrast labels, and intuitive navigation built for stress-free operation.",
      tag: "UX Design",
    },
  ];

  const tenantSteps = [
    {
      step: "01",
      title: "Select Billing Month",
      desc: "Pick the current or target billing cycle to initiate a new settlement draft.",
    },
    {
      step: "02",
      title: "Enter Rent & Utilities",
      desc: "Input base rent along with itemized electricity, gas, and water meter totals.",
    },
    {
      step: "03",
      title: "Add Deductions & Notes",
      desc: "Document any legitimate repair or expense offsets with clear explanations.",
    },
    {
      step: "04",
      title: "Upload Bill Proofs",
      desc: "Attach camera captures or PDF receipts mapped to each specific bill item.",
    },
    {
      step: "05",
      title: "Review Summary",
      desc: "Inspect the calculated net payable amount and verified proof thumbnails.",
    },
    {
      step: "06",
      title: "Submit for Owner Review",
      desc: "Send the complete settlement package directly to the property owner's queue.",
    },
    {
      step: "07",
      title: "Track Status & Notes",
      desc: "Receive prompt notifications regarding owner approval or corrective comments.",
    },
    {
      step: "08",
      title: "View Frozen History",
      desc: "Access the immutable, finalized monthly archive anytime for peace of mind.",
    },
  ];

  const ownerSteps = [
    {
      step: "01",
      title: "Open Pending Submissions",
      desc: "Access the owner queue displaying all tenant monthly submissions awaiting review.",
    },
    {
      step: "02",
      title: "Review Rent, Bills & Proofs",
      desc: "Examine itemized utility amounts and tap to expand supporting bill screenshots.",
    },
    {
      step: "03",
      title: "Approve or Reject",
      desc: "Authorize the settlement with one tap or flag discrepancies for correction.",
    },
    {
      step: "04",
      title: "Add Rejection Reasons",
      desc: "Provide contextual guidance if adjustments are required before re-submission.",
    },
    {
      step: "05",
      title: "Review Shared History",
      desc: "Maintain a permanent, clean historical log of all approved settlements across properties.",
    },
  ];

  return (
    <div className="bg-[#000405] text-white min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-0 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/10">
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
              CASE STUDY | PROPTECH &amp; MOBILE APP CONCEPT
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Tenant<span className="text-[#07BEB8]">ism</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Rent &amp; Bill Settlement App — Product Design Concept
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Tenantism is a proposed mobile application designed to help tenants and
            property owners manage monthly rent, utility bills, deductions, supporting
            documents, and approval records in one organized place.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={() => scrollToSection("overview")}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5"
            >
              Explore the Concept
            </CTAButton>
            <CTAButton
              onClick={() => scrollToSection("features")}
              className="border-white/20 hover:border-[#07BEB8]/50"
            >
              Key Features
            </CTAButton>
            <CTAButton
              onClick={() => scrollToSection("workflow")}
              className="border-white/20 hover:border-[#07BEB8]/50"
            >
              Tenant &amp; Owner Workflows
            </CTAButton>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl border border-white/10 bg-[#01141c]/80 backdrop-blur-sm mb-12">
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Category
              </p>
              <p className="text-sm font-medium text-white">
                Mobile App Development
              </p>
              <p className="text-xs text-gray-400 mt-0.5">PropTech Product Design</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Project Status
              </p>
              <p className="text-sm font-medium text-white">
                Product Design Concept
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Proposed Mobile Application</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Target Architecture
              </p>
              <p className="text-sm font-medium text-white">
                Flutter / iOS &amp; Android
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Cross-Platform Mobile</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Deliverables
              </p>
              <p className="text-sm font-medium text-white">
                UX Flow • UI Design System
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Settlement &amp; Proof Workflows</p>
            </div>
          </div>

          {/* Primary Visual Showcase — Exact User-Supplied Cover */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.18)] group">
            <div className="flex items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline">
                  tenantism.app / mobile-prototype / product-concept
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#07BEB8] bg-[#07BEB8]/10 px-2.5 py-0.5 rounded-full border border-[#07BEB8]/30">
                Official Concept Showcase
              </span>
            </div>
            <div className="relative w-full aspect-[1024/501] bg-black">
              <img
                src={tenantismCover}
                alt="Tenantism rent and bill settlement mobile app concept featuring monthly rent records, bill proof uploads, and approval history"
                width={1024}
                height={501}
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: OVERVIEW & VALUE PROPOSITION
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="py-20 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#07BEB8] block mb-2">
              01 / Executive Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Simplifying Monthly Rent Settlement Between Tenants &amp; Property Owners
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Tenantism is designed to simplify monthly rent settlement between tenants and
              property owners. It brings rent amounts, utility bills, deductions, bill
              proofs, and approval decisions together in a single shared record.
            </p>
          </div>

          {/* Core Value Proposition Callout Card */}
          <div className="p-8 sm:p-10 rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-[#011d23]/80 via-[#01141c]/90 to-[#000a0d] shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#07BEB8]/10 blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-semibold tracking-wider text-[#8efcf8] mb-2 block">
                  Core Value Proposition
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Bring clarity and transparency to rent settlements through documented bills,
                  proof uploads, owner review, and shared monthly records.
                </p>
                <p className="text-sm text-gray-300 mt-3">
                  Eliminates messy chat threads, disputed utility bill splits, and lost paper
                  receipts by creating an authoritative single source of truth every billing cycle.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:min-w-[240px]">
                <div className="flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8]" />
                  <span>Documented bills &amp; proofs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8]" />
                  <span>Owner approval workflow</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/90 bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#07BEB8]" />
                  <span>Frozen immutable records</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE PROBLEM & THE PROPOSED SOLUTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/10 bg-[#00080c]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* The Problem */}
            <div className="p-8 rounded-2xl border border-red-500/20 bg-[#120406]/40 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/30 mb-6">
                <AlertCircle className="w-3.5 h-3.5" />
                The Problem
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Fragmented Communications &amp; Unreliable Monthly Records
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Monthly rent settlements can lead to confusion, missing receipts, unclear
                deductions, and disagreements over what was paid or approved. Verbal agreements
                and scattered screenshots make it difficult for both parties to maintain a
                reliable monthly history.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Scattered Proofs in Chat Apps</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Utility receipts sent over instant messaging get buried under conversational noise or accidentally deleted.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Unclear Maintenance Deductions</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Tenants subtract repair costs without written owner authorization, sparking contentious disputes at payment time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">No Historical Audit Trail</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Neither party has an immutable, tamper-resistant archive of what was agreed upon 6 or 12 months ago.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Proposed Solution */}
            <div className="p-8 rounded-2xl border border-[#07BEB8]/30 bg-[#01141c]/60 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#07BEB8] bg-[#07BEB8]/10 border border-[#07BEB8]/30 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                The Proposed Solution
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Structured Monthly Submissions &amp; Frozen Approved Records
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Tenantism introduces a guided monthly workflow where tenants enter rent and utility
                amounts, attach supporting images, record deductions and explanations, and submit
                the record for owner review. Owners can review the information, approve it, or
                reject it with a reason for correction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#07BEB8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#07BEB8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Step-by-Step Guided Entry</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Guided flow leads tenants through rent, electricity, gas, water, and deduction forms with mandatory proof uploads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#07BEB8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#07BEB8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Owner Review with Actionable Feedback</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Landlords inspect attached proofs and approve or reject with clear comments for swift correction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#07BEB8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#07BEB8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Frozen Read-Only Finality</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Once approved, the monthly record becomes read-only for both parties, preserving approved data and proofs indefinitely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: KEY FEATURES (10 Core Proposed Capabilities)
      ───────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#07BEB8] block mb-2">
              02 / Proposed Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ten Core Features Designed for Mutual Trust
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              A comprehensive set of proposed mobile tools specifically architected to eliminate
              friction and bring structure to property settlements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 bg-[#01141c]/60 hover:border-[#07BEB8]/50 hover:bg-[#011a24] transition-all duration-300 hover:shadow-xl hover:shadow-[#07BEB8]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center group-hover:bg-[#07BEB8]/20 transition-colors">
                      {feat.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold text-gray-400 group-hover:text-[#07BEB8] transition-colors">
                      {feat.num}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#07BEB8] bg-[#07BEB8]/10 px-2 py-0.5 rounded border border-[#07BEB8]/20 inline-block mb-1.5">
                      {feat.tag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#8efcf8] transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TENANT & OWNER WORKFLOWS (Interactive Tabs)
      ───────────────────────────────────────────────────────────── */}
      <section id="workflow" className="py-20 border-b border-white/10 bg-[#00080c]/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#07BEB8] block mb-2">
              03 / End-to-End User Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Guided Workflows Tailored to Each Role
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Explore how Tenantism simplifies the monthly settlement cycle for both tenants creating submissions and owners managing approvals.
            </p>

            {/* Workflow Toggle Buttons */}
            <div className="inline-flex p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mt-8">
              <button
                onClick={() => setActiveWorkflowTab("tenant")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeWorkflowTab === "tenant"
                    ? "bg-[#07BEB8] text-[#001925] shadow-md shadow-[#07BEB8]/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Tenant Workflow (8 Steps)
              </button>
              <button
                onClick={() => setActiveWorkflowTab("owner")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeWorkflowTab === "owner"
                    ? "bg-[#07BEB8] text-[#001925] shadow-md shadow-[#07BEB8]/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Owner Workflow (5 Steps)
              </button>
            </div>
          </div>

          {/* Workflow Content */}
          {activeWorkflowTab === "tenant" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tenantSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60 hover:border-[#07BEB8]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#07BEB8]/15 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-mono font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">
                        Step {idx + 1} of 8
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {ownerSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60 hover:border-[#07BEB8]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#07BEB8]/15 border border-[#07BEB8]/30 text-[#07BEB8] text-xs font-mono font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">
                        Step {idx + 1} of 5
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: DESIGN APPROACH & UX PRINCIPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#07BEB8] block mb-2">
              04 / Design Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proposed User Experience Principles
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Every screen in Tenantism is crafted around clarity, preventing user frustration,
              and eliminating ambiguity between landlords and tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile-First */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mobile-First &amp; Easy to Understand</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Optimized for single-handed mobile usage with bottom navigation, clear visual hierarchy,
                and uncluttered card layouts designed for quick status checks on the go.
              </p>
            </div>

            {/* Guided Step-by-Step Entry */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Guided Step-by-Step Entry</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Instead of overwhelming users with an intimidating monolithic form, inputs are chunked into
                progressive steps with instant subtotal calculations.
              </p>
            </div>

            {/* Clear Status Indicators */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clear Status Indicators</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3">
                Explicit lifecycle states leave zero ambiguity about where a settlement stands:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Draft", cls: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
                  { label: "Submitted", cls: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
                  { label: "Rejected", cls: "bg-red-500/20 text-red-400 border-red-500/30" },
                  { label: "Approved", cls: "bg-[#07BEB8]/20 text-[#07BEB8] border-[#07BEB8]/30" },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setActiveStatusDemo(s.label)}
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border transition-all ${s.cls} ${
                      activeStatusDemo === s.label
                        ? "ring-1 ring-white/60 font-bold scale-105"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Large Touch Targets */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Large Touch-Friendly Controls</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Generous tap areas (minimum 48px), prominent green primary CTA buttons, and clear
                number pads ensure accessible data entry for users of all technical proficiencies.
              </p>
            </div>

            {/* Visual Proof Previews */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Visual Proof Previews</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Thumbnails render directly alongside utility amounts so both parties can inspect
                meter photos, official bill slips, or bank transfer slips without navigating away.
              </p>
            </div>

            {/* Localization Consideration */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#01141c]/60">
              <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/20 flex items-center justify-center mb-4">
                <Languages className="w-5 h-5 text-[#07BEB8]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Localization Consideration</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                English and Urdu localization designed as foundational architecture considerations,
                ensuring font support and RTL readiness for regional property markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#07BEB8] bg-[#07BEB8]/10 border border-[#07BEB8]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Product Design &amp; Development
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Have a Mobile App Concept You Want to Build?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            From product discovery and wireframing to high-fidelity Flutter and native mobile builds,
            CoreHives helps founders turn complex workflows into intuitive applications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton
              to="/contact"
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-8 py-3 text-base"
            >
              Start a Project
            </CTAButton>
            <CTAButton
              to="/portfolio/mobile-app-development"
              className="border-white/20 hover:border-[#07BEB8]/50 text-white px-8 py-3 text-base"
            >
              View Mobile Portfolio
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: EXPLORE MORE CASE STUDIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#00080c]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#07BEB8] block mb-1">
                Explore More Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/our-portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#07BEB8] hover:text-[#8efcf8] transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  PetTech &amp; Rescue Network
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  Rescue Spot
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  US pet adoption platform connecting adopters, foster families, and rescue shelters.
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
                  alt="Doors Multi-Vendor E-Commerce Marketplace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/80 group-hover:bg-[#07BEB8] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono uppercase font-semibold text-[#07BEB8] block mb-1">
                  E-Commerce Marketplace
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                  Doors
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  Saudi Arabian retail platform with merchant storefronts, MyFatoorah, and OTO shipping.
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
                  Lease-to-own equipment management portal with live payoff calculators and Stripe billing.
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
