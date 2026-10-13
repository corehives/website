import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Video,
  Sparkles,
  Users,
  ShieldCheck,
  RefreshCw,
  Layers,
  Palette,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Gamepad2,
  ExternalLink,
  Clock,
  Lock,
  Zap,
  Star,
  Quote,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Real project assets
import readingRoomImg from "../../assets/bailey-beau/reading-room.webp";
import activityHubImg from "../../assets/bailey-beau/activity-hub.webp";
import activityQuizImg from "../../assets/bailey-beau/activity-quiz.webp";
import activityDragDropImg from "../../assets/bailey-beau/activity-drag-drop.webp";
import activityDrawingImg from "../../assets/bailey-beau/activity-drawing.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

// Custom Tech SVGs
const NextJsIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.665 21.978C16.745 23.255 14.457 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.197-1.252 6.1-3.295 8.243l-8.986-11.58h-1.85v10.674h1.706v-8.28l8.09 10.921zm-1.042-12.875h1.706v6.398h-1.706V9.103z" />
  </svg>
);

const DjangoIcon = () => (
  <svg className="w-6 h-6 text-[#092E20]" viewBox="0 0 24 24" fill="#2BA977">
    <path d="M11.146 0h3.332v17.472c-1.579.336-2.617.448-3.782.448-3.725 0-5.741-1.708-5.741-4.872 0-3.136 2.072-4.984 5.236-4.984.392 0 .672.028.955.084V0zm0 10.556a3.298 3.298 0 0 0-.84-.112c-1.68 0-2.66.868-2.66 2.576 0 1.624.952 2.52 2.576 2.52.308 0 .644-.028.924-.084v-4.9zm4.789 2.52h3.304V24h-3.304V13.076zM15.935 0h3.304v9.632h-3.304V0zM0 8.092h3.332v6.692c0 2.296-.084 3.78-.28 4.704h3.304c.168-.784.224-2.128.224-4.704V8.092h3.332v-3.36H0v3.36z" />
  </svg>
);

const PostgresIcon = () => (
  <svg className="w-6 h-6 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 17.5c-3.1 0-5.7-1.9-6.8-4.7.7-.3 1.5-.5 2.3-.5 2.8 0 5.1 1.9 5.8 4.6-.4.4-.8.6-1.3.6zm5.3-3.4c-1.1-2.6-3.7-4.4-6.7-4.4-.7 0-1.4.1-2 .3-.1-.5-.2-1-.2-1.5 0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.2-1.2 4.2-3.1 5.6z" />
  </svg>
);

const LiveKitIcon = () => (
  <svg className="w-6 h-6 text-[#07BEB8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
  </svg>
);

const AwsIcon = () => (
  <svg className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a7.5 7.5 0 0 1-5-2 1 1 0 1 1 1.4-1.4 5.5 5.5 0 0 0 3.6 1.4 5.5 5.5 0 0 0 3.6-1.4 1 1 0 1 1 1.4 1.4 7.5 7.5 0 0 1-5 2zm3.5-6.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm-7 0A1.5 1.5 0 1 1 8 8.5a1.5 1.5 0 0 1 1.5 1.5z" />
  </svg>
);

const StripeIcon = () => (
  <svg className="w-6 h-6 text-[#635BFF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.068.966 15.753.5 12.827.5 6.782.5 2.9 3.69 2.9 8.675c0 4.985 3.906 6.55 7.643 8.012 2.628 1.026 3.528 1.708 3.528 2.766 0 .979-.853 1.543-2.316 1.543-2.073 0-4.908-.953-6.908-2.053l-.927 5.584c2.251 1.056 5.092 1.473 7.859 1.473 6.324 0 10.421-3.084 10.421-8.318 0-4.93-3.662-6.536-8.224-7.532z" />
  </svg>
);

export default function BaileyAndBeauCaseStudy() {
  const [activeTab, setActiveTab] = useState("reading");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Bailey & Beau Case Study | Custom Software Development | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives approaches an interactive family reading platform combining shared storybooks, real-time video, educational activities, and custom software engineering.";

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://corehives.com/portfolio/bailey-and-beau";
  }, []);

  const scrollToSolution = (e) => {
    e.preventDefault();
    const element = document.getElementById("solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              CASE STUDY | EDTECH
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Bailey & Beau
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Bringing Families Together Through Interactive Digital Reading
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
            An interactive family reading platform designed to connect children
            with parents, grandparents, and loved ones through shared stories,
            real-time collaboration, and educational activities.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton onClick={scrollToSolution} className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90">
              Explore the Solution
            </CTAButton>
            <CTAButton to="/contact">
              Discuss Your Project
            </CTAButton>
            <a
              href="https://baileyandbeauco.com/"
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
                Industry
              </p>
              <p className="text-sm font-medium text-white">
                Education Technology
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Live Website
              </p>
              <a
                href="https://baileyandbeauco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8efcf8] hover:text-[#07BEB8] transition-colors"
              >
                baileyandbeauco.com
                <ExternalLink className="w-3 h-3 text-[#07BEB8]" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Core Services
              </p>
              <p className="text-sm font-medium text-white">
                Custom Web App, Real-Time Video, Interactive Learning
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-[#07BEB8] mb-1">
                Tech Stack
              </p>
              <p className="text-sm font-medium text-white">
                Next.js, Django, PostgreSQL, LiveKit, AWS, Stripe
              </p>
            </div>
          </div>

          {/* Primary Visual — Reading Room Browser Mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#010A11] shadow-[0_20px_60px_rgba(7,190,184,0.15)] group">
            <div className="flex items-center justify-between px-4 py-3 bg-[#00151c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <a
                  href="https://baileyandbeauco.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-xs text-gray-400 font-mono hidden sm:inline hover:text-[#07BEB8] transition-colors"
                >
                  baileyandbeauco.com / reading-room / live-session
                </a>
              </div>
              <span className="text-[11px] font-medium text-[#07BEB8] bg-[#07BEB8]/10 px-2 py-0.5 rounded-full border border-[#07BEB8]/30">
                LiveKit Synchronized Session
              </span>
            </div>
            <img
              src={readingRoomImg}
              alt="Bailey & Beau Reading Room Live Session Interface"
              width={1024}
              height={682}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                A More Connected Way to Read Together
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Bailey & Beau is an interactive family reading platform designed to make remote reading sessions more engaging and collaborative. The experience combines video communication, shared digital storybooks, drawing tools, and interactive educational activities within a unified application.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                Rather than treating digital reading as a passive video call with a shared screen, the system provides native synchronized turn mechanics, low-latency live video, and interactive learning modules that keep children invested in every story.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <BookOpen className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Synchronized Storybooks
                  </h3>
                  <p className="text-xs text-gray-400">
                    Host-controlled page turns and synchronized viewports.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Video className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Integrated Video
                  </h3>
                  <p className="text-xs text-gray-400">
                    Built-in low-latency WebRTC streams powered by LiveKit.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Palette className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Live Drawing Canvas
                  </h3>
                  <p className="text-xs text-gray-400">
                    Real-time collaborative annotations and coloring.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Gamepad2 className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Interactive Activities
                  </h3>
                  <p className="text-xs text-gray-400">
                    Quizzes, feeling matches, coloring, and hotspot discovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010e14] shadow-xl relative group">
                <img
                  src={activityHubImg}
                  alt="Bailey & Beau Activity Room Hub"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 bg-[#001017] border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">
                    Activity Selection Hub: Story Quest, Place & Play, Discovery Spots
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    2 Participants Active
                  </span>
                </div>
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Moving Beyond Traditional Video Calls
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Standard consumer video calling apps were built for meetings, not for young children reading with grandparents. Creating a purposeful family reading platform required solving several technical and interaction design challenges:
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Shared Storybook Viewing",
                desc: "Enabling remote family members to read the same book together with precise typography, dual-page layout rendering, and clean scaling across phones, tablets, and laptops.",
              },
              {
                icon: RefreshCw,
                title: "Synchronized Page Navigation",
                desc: "Keeping storybook navigation synchronized between participants without race conditions, so remote readers and children are always on the exact same page.",
              },
              {
                icon: Palette,
                title: "Collaborative Real-Time Drawing",
                desc: "Supporting simultaneous pen strokes, highlighters, and annotations across active devices without lag or state collisions.",
              },
              {
                icon: Sparkles,
                title: "Integrated Educational Activities",
                desc: "Introducing educational activities connected directly to illustrated story content rather than relying on disconnected mini-games.",
              },
              {
                icon: Lock,
                title: "Invitation-Based Session Access",
                desc: "Providing safe, friction-free session invitations and access controls suitable for children, parents, and older family members.",
              },
              {
                icon: Zap,
                title: "Connection Recovery & Resilience",
                desc: "Gracefully handling intermittent mobile Wi-Fi drops, reconnecting participants automatically, and preserving reading progress.",
              },
              {
                icon: Layers,
                title: "Content & Subscription Management",
                desc: "Supporting modular content management for newly released titles alongside Stripe-powered subscription plans for families.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#01141c]/50 border border-white/10 hover:border-[#07BEB8]/40 transition-all duration-300 ${
                    idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: THE SOLUTION (TWO EXPERIENCES)
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              One Platform. Two Interactive Experiences.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              CoreHives structured Bailey & Beau into two purpose-built digital environments: the Reading Room for shared live storytelling, and the Activity Room for guided interactive learning.
            </p>
          </div>

          {/* ── Sub-section A: Reading Room ── */}
          <div className="mb-24 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#011119] border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-widest mb-2 block">
                  EXPERIENCE A
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  The Reading Room
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  The Reading Room provides a shared digital reading experience where family members can participate in a story session together.
                </p>
                <div className="space-y-3">
                  {[
                    "Live video sessions powered by LiveKit",
                    "Shared book viewing with dual-page rendering",
                    "Host-controlled, synchronized page navigation",
                    "Collaborative drawing and annotations",
                    "Session timer and advance warnings",
                    "Invitation-based session joining",
                    "Reconnection and session recovery functionality",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                  <img
                    src={readingRoomImg}
                    alt="Reading Room Experience with live video, open book and drawing tools"
                    width={1024}
                    height={682}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Sub-section B: Activity Room ── */}
          <div>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-widest mb-2 block">
                EXPERIENCE B
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The Activity Room
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                The Activity Room extends the reading experience with interactive educational activities that encourage children to explore, answer questions, and create.
              </p>
            </div>

            {/* 4 Activity Concept Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Quiz */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                    1. Quiz — Story Quest
                  </span>
                  <span className="text-[11px] text-gray-400">Comprehension & Questions</span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityQuizImg}
                    alt="Bailey & Beau Quiz Activity Room Concept"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Illustrated Questions & Answer Feedback
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Children explore story comprehension through illustrated question cards, instant visual feedback, sound cues, and guided host interaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Drag & Drop */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                    2. Drag & Drop — Place & Play
                  </span>
                  <span className="text-[11px] text-gray-400">Match the Feeling</span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityDragDropImg}
                    alt="Bailey & Beau Drag and Drop Match the Feeling Activity"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Drop Zones & Draggable Text Labels
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Interactive drop zones where young readers match emotion words (Excited, Curious, Brave, Surprised) to characters in the illustrated story scenes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Drawing & Coloring */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                    3. Drawing & Coloring — Create Together
                  </span>
                  <span className="text-[11px] text-gray-400">Interactive Canvas</span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityDrawingImg}
                    alt="Bailey & Beau Drawing and Coloring Canvas"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Collaborative Drawing & Palette Tools
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      A digital art canvas providing pens, erasers, bucket fills, and rich color palettes for coloring story lineart or freeform sketching with loved ones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Discovery Spots */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                    4. Discovery Spots
                  </span>
                  <span className="text-[11px] text-gray-400">Interactive Hotspots</span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityHubImg}
                    alt="Bailey & Beau Discovery Spots Activity Hub"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Hotspots & Educational Discoveries
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Interactive glowing hotspots positioned across story art that reveal educational facts, voiceover clips, and hidden surprises when tapped.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: CONTENT MANAGEMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                ADMINISTRATION & PUBLISHING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Designed for Reusable Educational Content
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                The platform includes an administrative content management approach for managing books and configuring activities. By adopting a template-driven content architecture, the editorial team can publish new interactive activities and book releases without requiring bespoke code updates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <BookOpen className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Book & Illustration Management
                  </h3>
                  <p className="text-xs text-gray-400">
                    Structured storage and delivery of high-resolution storybook spreads and audio narration tracks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <FileCheck2 className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Activity Configuration & Publishing
                  </h3>
                  <p className="text-xs text-gray-400">
                    Visual configuration of quizzes, drop coordinates, and hotspot metadata without engineering handoffs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Layers className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Reusable Activity Templates
                  </h3>
                  <p className="text-xs text-gray-400">
                    Consistent engine schemas for Quiz, Place & Play, and Canvas coloring that scale with content volume.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#07BEB8] mb-2" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    Publishing & Access Controls
                  </h3>
                  <p className="text-xs text-gray-400">
                    Draft, preview, and scheduled release workflows aligned with family subscription tiers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#01141c] to-[#001017] border border-white/15">
                <span className="text-xs font-mono uppercase text-[#07BEB8] mb-2 block">
                  ARCHITECTURAL BENEFIT
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  Decoupling Content From Code
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Allowing the content team to independently create and manage supported content is vital for platform growth. Educators and illustrators configure activities via standardized schema definitions, eliminating the need to write new code for every newly released story.
                </p>
                <div className="p-4 rounded-xl bg-[#001d26]/80 border border-[#07BEB8]/30">
                  <p className="text-xs text-[#8efcf8] font-mono leading-relaxed">
                    &bull; Zero-code activity creation<br />
                    &bull; Instant multi-device sync<br />
                    &bull; Scalable educational library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TECHNICAL ARCHITECTURE
      ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ARCHITECTURE & INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              The Technology Behind the Experience
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Bailey & Beau relies on a modern, decoupled cloud architecture designed to handle real-time WebRTC media streams, state synchronization, and secure content delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: NextJsIcon,
                name: "Next.js",
                role: "Frontend Application & UI",
                desc: "Powers the responsive client-side interface, fast page hydration, canvas drawing layers, and real-time session controls.",
              },
              {
                icon: DjangoIcon,
                name: "Django REST Framework",
                role: "Backend APIs & Business Logic",
                desc: "Provides secure REST endpoints, session token issuance, user authentication, and activity schema validation.",
              },
              {
                icon: PostgresIcon,
                name: "PostgreSQL",
                role: "Relational Data Management",
                desc: "Stores user profiles, book metadata, activity schemas, and transactional session history with referential integrity.",
              },
              {
                icon: LiveKitIcon,
                name: "LiveKit",
                role: "Real-Time Audio & Video",
                desc: "Delivers low-latency WebRTC audio/video feeds, room management, and synchronized data channels between participants.",
              },
              {
                icon: AwsIcon,
                name: "AWS S3",
                role: "Media & Asset Storage",
                desc: "Scalable cloud object storage hosting high-resolution storybook illustrations, audio assets, and coloring templates.",
              },
              {
                icon: StripeIcon,
                name: "Stripe",
                role: "Subscription & Payments",
                desc: "Manages customer subscriptions, recurring family billing, and secure checkout workflows.",
              },
            ].map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#01141c]/50 border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                        <TechIcon />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-[#07BEB8] font-medium">
                          {tech.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: ENGINEERING CHALLENGES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              ENGINEERING INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Engineering a Synchronized Experience
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Bringing live video and interactive education into a single screen demanded thoughtful architectural compromises and careful state management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Real-Time Synchronization
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Multiple participants must see consistent storybook pages and shared interactions during an active session. CoreHives engineered real-time data channel messaging so page flips, drawing strokes, and quiz choices stay synchronized between adults and children across varying network conditions.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Session Reliability
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Invitation handling, participant connections, reconnection, and recovery of session state are important to preserving the shared experience. The platform monitors connection health and seamlessly restores session state when transient network drops occur.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Configurable Activities
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A reusable activity model allows the content team to create different educational experiences without building a separate application for every activity. By structuring quizzes, puzzles, and hotspot data into modular JSON schemas, new activities deploy rapidly.
                </p>
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
              Bringing Reading, Interaction, and Technology Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
              Bailey & Beau brings shared reading, real-time communication, creative collaboration, and interactive learning into a unified product experience. Its configurable activity approach provides a foundation for expanding the educational content library while maintaining a consistent user experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">01 / FEATURE</span>
                <p className="text-sm font-bold text-white mb-1">Synchronized Storytelling</p>
                <p className="text-xs text-gray-400">Host-controlled page navigation with dual-page rendering.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">02 / MEDIA</span>
                <p className="text-sm font-bold text-white mb-1">Live WebRTC Video</p>
                <p className="text-xs text-gray-400">Integrated low-latency video calling powered by LiveKit.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">03 / ACTIVITIES</span>
                <p className="text-sm font-bold text-white mb-1">4 Educational Modules</p>
                <p className="text-xs text-gray-400">Story Quest, Place & Play, Create Together, Discovery Spots.</p>
              </div>
              <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">04 / CONTENT</span>
                <p className="text-sm font-bold text-white mb-1">Reusable CMS Schema</p>
                <p className="text-xs text-gray-400">Zero-code activity configuration and publishing workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLIENT REVIEW & TESTIMONIAL
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
                  Client Feedback from Bailey & Beau
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
                &ldquo;CoreHives has been fantastic to work with. They are extremely thoughtful in how they approach development and take the time to understand both the technical requirements and the broader vision behind the project. Their communication is clear, proactive, and very professional throughout the process.
              </p>
              <p className="relative z-10">
                What I appreciate most is their ability to translate complex ideas into a well-structured system. They bring strong technical skills, but also a strategic mindset that helps shape the architecture of the product in a smart and scalable way. They consistently provide clear explanations, thoughtful solutions, and keep the work organized with well-defined milestones.
              </p>
              <p className="relative z-10">
                CoreHives is also very collaborative and receptive to feedback. When I test features and provide input, they respond quickly and make adjustments in a way that improves the overall system rather than just applying quick fixes.
              </p>
              <p className="relative z-10">
                Overall, I&rsquo;ve been very happy with the work and the direction the project is going. I would absolutely recommend CoreHives to anyone looking for a skilled and reliable development partner who truly cares about building things the right way.&rdquo;
              </p>
            </div>

            {/* Client Info Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#07BEB8] to-[#4eecea] flex items-center justify-center text-[#010A11] font-extrabold text-base shadow-md">
                  SF
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Sherry Foley</h4>
                  <p className="text-xs text-gray-400">Founder & Creator, Bailey & Beau</p>
                </div>
              </div>

              <a
                href="https://baileyandbeauco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#07BEB8] hover:text-[#4eecea] transition-colors font-medium self-start sm:self-auto"
              >
                baileyandbeauco.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FINAL CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#000405] to-[#011119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-4 block">
            WORK WITH COREHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Have a Complex Digital Product in Mind?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            From interactive web applications to real-time platforms and custom business software, CoreHives helps businesses turn product ideas into practical digital experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact" className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold px-6 py-2.5">
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
