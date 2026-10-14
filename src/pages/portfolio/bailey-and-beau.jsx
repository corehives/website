import { useEffect, lazy, Suspense } from "react";
import {
  BookOpen,
  Video,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Layers,
  Palette,
  CheckCircle2,
  FileCheck2,
  Gamepad2,
  ExternalLink,
  Quote,
  Star,
  Zap,
} from "lucide-react";
import CTAButton from "../../components/shared/CTAButton";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.webp";
import rightLight from "../../assets/right-light.webp";

// Authentic project assets
import readingRoomImg from "../../assets/bailey-beau/reading-room.webp";
import activityHubImg from "../../assets/bailey-beau/activity-hub.webp";
import activityQuizImg from "../../assets/bailey-beau/activity-quiz.webp";
import activityDragDropImg from "../../assets/bailey-beau/activity-drag-drop.webp";
import activityDrawingImg from "../../assets/bailey-beau/activity-drawing.webp";

const Footer = lazy(() => import("../../components/layout/footer.jsx"));

import {
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiLivekit,
  SiStripe,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Official Brand Icons
const NextJsIcon = () => <SiNextdotjs className="w-6 h-6 text-white" />;
const DjangoIcon = () => <SiDjango className="w-6 h-6 text-[#44B78B]" />;
const PostgresIcon = () => <SiPostgresql className="w-6 h-6 text-[#336791]" />;
const LiveKitIcon = () => <SiLivekit className="w-6 h-6 text-[#07BEB8]" />;
const AwsIcon = () => <FaAws className="w-6 h-6 text-[#FF9900]" />;
const StripeIcon = () => <SiStripe className="w-6 h-6 text-[#635BFF]" />;

export default function BaileyAndBeauCaseStudy() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // SEO Title & Meta
    document.title =
      "Bailey & Beau Case Study | Interactive Family Reading Platform | CoreHives";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Explore how CoreHives engineered Bailey & Beau, an interactive family reading platform combining live video, synchronized storybooks, collaborative drawing, and educational activities.";

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
              CASE STUDY | EDTECH & FAMILY PLATFORM
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            Bailey &amp; Beau
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8efcf8] mb-6 max-w-4xl leading-snug">
            Bringing Families Together Through Interactive Digital Reading
          </p>

          {/* Description (Exact requested copy) */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            An interactive family reading platform combining live video,
            synchronized storybooks, collaborative drawing, and educational
            activities to help families share meaningful learning experiences
            remotely.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <CTAButton
              onClick={scrollToSolution}
              className="bg-[#07BEB8] text-[#001925] border-transparent hover:bg-[#07BEB8]/90 font-semibold"
            >
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
                Education Technology &amp; Publishing
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
              <span className="text-[11px] font-medium text-[#07BEB8] bg-[#07BEB8]/10 px-2.5 py-0.5 rounded-full border border-[#07BEB8]/30">
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
          SECTION 2: PROJECT OVERVIEW AND CHALLENGE (Consolidated)
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
                Bridging Distance Through Shared Digital Reading
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Standard video conferencing apps were built for workplace meetings,
                not for a grandparent reading a bedtime story to a young child
                hundreds of miles away. Passive screen-sharing creates disconnected
                experiences—children lose focus, page turns lag, and there is no
                shared physical engagement.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                Bailey &amp; Beau was created to turn remote reading into a warm,
                collaborative family ritual. To make this vision a reality, CoreHives
                tackled four foundational engineering and interaction challenges:
              </p>

              {/* 4 Core Challenge Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Synchronized Dual-Page Reading
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Eliminating navigation race conditions with host-controlled pacing so readers and children remain locked to the exact same page spread across diverse screens.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Integrated Real-Time Video
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Delivering low-latency WebRTC video directly alongside the storybook, maintaining face-to-face eye contact without cumbersome multi-window setups.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Live Collaborative Drawing
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Supporting simultaneous multi-user pen strokes, highlights, and coloring directly over story pages with sub-50ms synchronized rendering.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10 hover:border-[#07BEB8]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Session Recovery &amp; Resilience
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Providing frictionless family invite codes with automated state restoration to gracefully withstand transient mobile and home Wi-Fi drops.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#010e14] shadow-2xl relative group">
                <div className="p-3 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">
                    Activity Hub &amp; Shared Selection
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    2 Participants Active
                  </span>
                </div>
                <img
                  src={activityHubImg}
                  alt="Bailey & Beau Activity Hub selection showing Story Quest, Place & Play, and Discovery Spots"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 bg-[#001017] border-t border-white/10">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The interactive hub allows family members to transition seamlessly between book reading and collaborative learning modules in one session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE SOLUTION (Two Core Experiences)
      ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              One Platform. Two Interactive Experiences.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              CoreHives structured Bailey &amp; Beau into two purpose-built digital
              environments: the <strong>Reading Room</strong> for shared live
              storytelling, and the <strong>Activity Room</strong> for guided
              educational discovery.
            </p>
          </div>

          {/* ── Sub-experience A: Reading Room ── */}
          <div className="mb-20 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#011119] border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-widest mb-2 block font-bold">
                  EXPERIENCE 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  The Reading Room
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  The Reading Room connects family members in a synchronized virtual
                  environment where books feel alive. Real-time video feeds keep
                  smiles and reactions front-and-center, while host navigation
                  ensures child and adult stay fully in sync.
                </p>
                <div className="space-y-3.5 mb-6">
                  {[
                    "Live WebRTC two-way video streams powered by LiveKit",
                    "Dual-page illustrated storybook rendering with responsive zoom",
                    "Host-controlled page navigation with synchronized viewports",
                    "Live collaborative drawing, highlight pens, and erasers",
                    "Gentle session timer notifications and wrap-up warnings",
                    "Frictionless room joining via secure alphanumeric invite codes",
                    "Automatic reconnection and reading progress restoration",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#07BEB8] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300 leading-snug">
                        {feat}
                      </span>
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

          {/* ── Sub-experience B: Activity Room ── */}
          <div>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase text-[#07BEB8] tracking-widest mb-2 block font-bold">
                EXPERIENCE 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The Activity Room
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Extending the narrative beyond the final page, the Activity Room
                offers four interactive learning experiences that reinforce reading
                comprehension, emotional literacy, and artistic expression.
              </p>
            </div>

            {/* 4 Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Quiz */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col group">
                <div className="p-3.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#07BEB8]" />
                    1. Story Quest — Comprehension Quizzes
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    Story Quiz
                  </span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityQuizImg}
                    alt="Bailey & Beau Quiz Activity Room Interface"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Illustrated Questions &amp; Instant Feedback
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Children explore story comprehension through illustrated question cards, instant visual feedback, sound cues, and guided host interaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Drag & Drop */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col group">
                <div className="p-3.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#07BEB8]" />
                    2. Place &amp; Play — Match the Feeling
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    Drag &amp; Drop
                  </span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityDragDropImg}
                    alt="Bailey & Beau Drag and Drop Match the Feeling Activity"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Drop Zones &amp; Draggable Emotion Labels
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Interactive drop zones where young readers match emotion words (Excited, Curious, Brave, Surprised) to characters in the illustrated story scenes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Drawing & Coloring */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col group">
                <div className="p-3.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#07BEB8]" />
                    3. Create Together — Interactive Coloring
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    Drawing Canvas
                  </span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityDrawingImg}
                    alt="Bailey & Beau Drawing and Coloring Canvas"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Collaborative Digital Canvas &amp; Palettes
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      A digital art canvas providing pens, erasers, bucket fills, and rich color palettes for coloring story lineart or freeform sketching with loved ones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Discovery Spots */}
              <div className="rounded-2xl overflow-hidden bg-[#011119] border border-white/10 hover:border-[#07BEB8]/40 transition-all flex flex-col group">
                <div className="p-3.5 bg-[#00151c] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#07BEB8]" />
                    4. Discovery Spots — Hotspot Exploration
                  </span>
                  <span className="text-[11px] text-[#07BEB8] font-mono">
                    Hotspot Discovery
                  </span>
                </div>
                <div className="overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={activityHubImg}
                    alt="Bailey & Beau Discovery Spots Activity Hub"
                    width={1024}
                    height={682}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Hotspots &amp; Hidden Discoveries
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
          SECTION 4: EDUCATIONAL CONTENT MANAGEMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
                ADMINISTRATION &amp; PUBLISHING
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Scalable Architecture for Reusable Educational Content
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                To enable Bailey &amp; Beau to continuously expand its story
                catalog without requiring engineering handoffs, CoreHives
                architected a schema-driven content management system. Editorial
                teams can configure, preview, and launch interactive learning
                modules independently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Layers className="w-5 h-5 text-[#07BEB8] mb-2.5" />
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Reusable Activity Schemas
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Standardized JSON templates for quiz options, drop coordinates, and canvas backgrounds that render dynamically across all devices.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <FileCheck2 className="w-5 h-5 text-[#07BEB8] mb-2.5" />
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Decoupled Media Pipeline
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    High-resolution illustrated story spreads and audio tracks are managed in AWS S3 and served via CDN independently of core code.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#07BEB8] mb-2.5" />
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Staging &amp; Release Control
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Draft, preview, and scheduled publishing workflows allow content creators to test sessions thoroughly before public release.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#01141c]/60 border border-white/10">
                  <Gamepad2 className="w-5 h-5 text-[#07BEB8] mb-2.5" />
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Subscription Tier Gating
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Granular permission rules link individual books and activity packs directly to user membership tiers managed via Stripe.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#01141c] to-[#001017] border border-white/15 shadow-xl">
                <span className="text-xs font-mono uppercase text-[#07BEB8] mb-2 block font-bold">
                  ARCHITECTURAL BENEFIT
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  Decoupling Content From Code
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  Allowing the editorial team to create and launch new storybooks
                  independently accelerates curriculum growth. Illustrators and
                  educators configure interactive hotspots, quizzes, and coloring
                  templates using structured schemas without writing code or
                  triggering deployments.
                </p>
                <div className="p-4 rounded-xl bg-[#001d26]/80 border border-[#07BEB8]/30">
                  <p className="text-xs sm:text-sm text-[#8efcf8] font-mono leading-relaxed">
                    &bull; Zero-code activity creation<br />
                    &bull; Instant cross-platform schema validation<br />
                    &bull; Infinitely scalable educational library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TECHNOLOGY AND ENGINEERING (Consolidated)
      ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-3 block">
              TECHNOLOGY &amp; ENGINEERING ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Engineered for Real-Time Reliability
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Combining WebRTC video feeds, synchronized drawing, and interactive
              educational logic inside a single web application required a resilient,
              decoupled cloud architecture and rigorous real-time state management.
            </p>
          </div>

          {/* Tech Stack 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

          {/* 3 Core Engineering Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#01141c]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#07BEB8]/10 border border-[#07BEB8]/30 flex items-center justify-center text-[#07BEB8] mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Real-Time Synchronization
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
                  Configurable Activity Engine
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  A reusable activity model allows the content team to create different educational experiences without building a separate application for every activity. By structuring quizzes, puzzles, and hotspot data into modular JSON schemas, new activities deploy rapidly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: PROJECT OUTCOME
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
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              Bailey &amp; Beau brings shared reading, real-time communication, creative
              collaboration, and interactive learning into a unified product experience.
              Its configurable activity approach provides a foundation for expanding the
              educational content library while maintaining a consistent user experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  01 / CAPABILITY
                </span>
                <p className="text-base font-bold text-white mb-1">
                  Synchronized Storytelling
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Host-controlled page navigation with dual-page rendering.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  02 / MEDIA
                </span>
                <p className="text-base font-bold text-white mb-1">
                  Live WebRTC Video
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Integrated low-latency video calling powered by LiveKit.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  03 / ACTIVITIES
                </span>
                <p className="text-base font-bold text-white mb-1">
                  4 Educational Modules
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Story Quest, Place &amp; Play, Create Together, Discovery Spots.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#01141c]/60 border border-white/10">
                <span className="text-xs font-mono text-[#07BEB8] block mb-1">
                  04 / CONTENT
                </span>
                <p className="text-base font-bold text-white mb-1">
                  Reusable CMS Schema
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Zero-code activity configuration and publishing workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CLIENT REVIEW (Immediately after Outcome, before CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-b border-white/10 bg-[#00080d]">
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
                  Bailey &amp; Beau
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
                  <p className="text-xs text-gray-400">Founder &amp; Creator, Bailey &amp; Beau</p>
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
          SECTION 8: FINAL CTA (Immediately after Client Review)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#000405] to-[#011119]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#07BEB8] mb-4 block">
            WORK WITH COREHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Have a Complex Digital Product in Mind?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            From interactive web applications to real-time platforms and custom business software, CoreHives helps businesses turn product ideas into practical digital experiences.
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
