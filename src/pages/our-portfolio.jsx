import { useState, useEffect } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import WebCover from "../assets/portfolio-cover.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import Cloud from "../assets/icons/cloud.png";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import avatar5 from "../assets/avatar-7.png";
import avatar4 from "../assets/avatar-8.png";
import avatar6 from "../assets/avatar-9.png";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

import {
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaPhp,
  FaFigma,
  FaReact,
  FaAndroid,
  FaPython,
  FaVuejs,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Zap,
  Shield,
  Database,
  Palette,
  ChevronDown,
} from "lucide-react";

// Counter Component
function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationId;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Extract number from target (e.g., "100+" -> 100)
      const numValue = parseInt(target);
      const currentValue = Math.floor(progress * numValue);

      setCount(currentValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [target, duration]);

  return <span>{count}+</span>;
}

const services = [
  {
    title: "Web Development",
    description:
      "Creating captivating and functional websites to strengthen your online presence and engage users effectively",
    icon: "↗",
  },
  {
    title: "Mobile App Development",
    description:
      "Designing user-friendly and optimized mobile applications that cater to various platforms and user needs.",
    icon: "↗",
  },
  {
    title: "Plugin Development",
    description:
      "Crafting custom plugins to enhance the capabilities of your software and tailor it to your specific requirements.",
    icon: "↗",
  },
  {
    title: "Quality Assurance and Testing",
    description:
      "Ensuring the dependability and performance of your software through testing and quality checks.",
    icon: "↗",
  },
];

const portfolioCategories = [
  {
    title: "Web & App Development",
    items: [
      "Ecommerce Development",
      "Shopify Development",
      "Flutter Development",
    ],
  },
  {
    title: "Mobile Application Design",
    items: ["UI Design", "UX Design", "Interaction Design"],
  },
  {
    title: "UI/UX Design",
    items: ["Web Design", "App Design", "Design Systems"],
  },
  {
    title: "Graphics Design",
    items: ["Branding", "Illustrations", "Icons"],
  },
  {
    title: "Animation Design",
    items: ["Motion Graphics", "Micro-interactions", "Lottie"],
  },
];

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState("Data Engineering");
  const [expandedCategory, setExpandedCategory] = useState(0);

  return (
    <>
      {/* ── BANNER SECTION ── */}
      <section
        id="home"
        className="relative z-0 flex w-full items-center justify-center overflow-hidden"
      >
        {/* ── Background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt="hero-bg"
            loading="eager"
            fetchpriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>

        {/* ── Left light ── */}
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />

        {/* ── Right light ── */}
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
          className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
        />

        {/* ── Main content ── */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Web &amp; App Development
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            We Work With Top Brands & Industry &
            <br />
            <span className="text-[#07BEB8]">We Share Our </span> Best works.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            Purpose-driven technology crafted to integrate seamlessly into your
            operations and evolve with your needs.
          </p>
        </div>

        {/* ── Right Banner with Cloud Icon ── */}
        <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
          <BannerRightAnimation />

          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
              <img
                src={Cloud}
                alt="cloud icon"
                className="w-12 h-12 object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>

        {/* ── Left Banner ── */}
        <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
          <BannerLeftAnimation />

          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
              <img
                src={Cloud}
                alt="cloud icon"
                className="w-12 h-12 object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MOBILE APP DESIGN FEATURE WITH ACCORDIONS ───────── */}
      <section className="px-5 sm:px-10 lg:px-20 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-5 rounded-2xl overflow-hidden">
            {/* Left: col-8 */}
            <div className="col-span-12 lg:col-span-8 relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
              <img
                src={WebCover}
                alt="Mobile application design"
                className="w-full h-full object-contain max-h-[320px]"
              />
            </div>

            {/* Right: col-4 with Accordions */}
            <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-start space-y-4">
              {portfolioCategories.map((category, index) => (
                <div key={index} className="group">
                  {/* Accordion Header */}
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === index ? -1 : index,
                      )
                    }
                    className="w-full text-left"
                  >
                    <h3
                      className={`text-lg sm:text-xl font-semibold transition-colors duration-200 pb-3 border-b ${
                        expandedCategory === index
                          ? "text-[#07BEB8] border-[#07BEB8]"
                          : "text-white/40 hover:text-[#07BEB8] border-gray-700 hover:border-[#07BEB8]/50"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCategory === index
                        ? "max-h-40 opacity-100 pt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2.5 text-sm text-gray-400">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 hover:text-[#07BEB8] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#07BEB8]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATS ROW WITH COUNTER ───────── */}
      <section className="px-5 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 py-10">
          {[
            {
              num: "100+",
              label: "Startups Supported",
              sub: "Launch 2x faster with AI + frameworks.",
            },
            {
              num: "200+",
              label: "Projects Designed",
              sub: "Launch 2x faster with AI + frameworks.",
            },
            {
              num: "15+",
              label: "Years of Experience",
              sub: "Launch 2x faster with AI + frameworks.",
            },
          ].map((s) => (
            <div key={s.num} className="text-cente mx-auto sm:text-left">
              <div className="flex items-center gap-2 border-b border-white/40 pb-2">
                {/* Number */}
                <div className="w-[50%]">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none">
                    <Counter target={s.num} duration={2000} />
                  </div>
                </div>

                {/* Label */}
                <div className="w-[30%]">
                  <div className="text-[11px] sm:text-xs font-medium text-gray-200 leading-tight">
                    {s.label}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── SOLVE YOUR UI/UX INTRO ───────── */}
      <section className="px-5 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Solve Your <span className="text-[#07BEB8]">UI / UX</span>
            <br />
            Roadblocks &amp;
            <br />
            Scale Fast.
          </h2>

          <div className="space-y-6">
            <p className="text-white leading-relaxed text-sm sm:text-base">
              We've helped{" "}
              <span className="text-[#07BEB8] font-semibold">
                100+ companies
              </span>{" "}
              solve challenges, boost engagement, increase conversions, build
              MVPs, and raise funds — driving growth and success.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 py-1.5 pl-4 pr-1.5 text-xs font-medium text-white hover:bg-white/5 transition"
              >
                See how we help
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07BEB8] text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src={avatar4}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                  <img
                    src={avatar5}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                  <img
                    src={avatar6}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-black object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#07BEB8] leading-none">
                    80+
                  </div>
                  <div className="text-[10px] text-gray-500">Total Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PROBLEM CARDS GRID ───────── */}
      <section className="px-5 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Slow Launch — TEAL, spans 2 rows on lg */}
          <div className="lg:row-span-2 rounded-2xl p-7 bg-[#07BEB8] text-[#062E2C] flex flex-col justify-between min-h-[260px] lg:min-h-[420px]">
            <h3 className="text-2xl sm:text-3xl font-bold">Slow Launch?</h3>
            <p className="text-sm leading-relaxed text-[#062E2C]/80 mt-6">
              Tired of delays? Our AI-powered workflows get you 10× faster
              launch with efficient design processes.
            </p>
          </div>

          {/* Budget Concerns — PINK */}
          <div className="rounded-2xl p-7 bg-[#E5F8F2] text-[#3a1414] min-h-[200px]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Budget Concerns?
            </h3>
            <p className="text-sm leading-relaxed">
              Most top-notch design without overspending? We reduce design &amp;
              dev costs by 25%, focusing on core features that matter.
            </p>
          </div>

          {/* Scaling Issues — CREAM */}
          <div className="rounded-2xl p-7 bg-[#FFF3DC] text-[#3a2e14] min-h-[200px]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Scaling Issues?
            </h3>
            <p className="text-sm leading-relaxed">
              Need designs that grow with you? Our scalable systems and
              workflows make scaling 25% more efficient.
            </p>
          </div>

          {/* Low User Engagement — WHITE */}
          <div className="rounded-2xl p-7 bg-[#F5F5F5] text-[#0a0a0a] min-h-[200px]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Low User Engagement?
            </h3>
            <p className="text-sm leading-relaxed">
              Increase retention with intuitive UI/UX that delights users from
              the first interaction.
            </p>
          </div>

          {/* Poor Conversion Rates — WHITE */}
          <div className="rounded-2xl p-7 bg-[#E6FEFE] text-[#0a0a0a] min-h-[200px]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Poor Conversion Rates?
            </h3>
            <p className="text-sm leading-relaxed">
              Boost conversions with modern, user-focused design that drives
              action during the visit period.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
