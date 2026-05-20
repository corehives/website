import { lazy, Suspense, useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import WebCover from "../assets/web-cover.jpg";
import WebWork from "../assets/work.png";
import Analytic from "../assets/icons/analytic.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import Cloud from "../assets/icons/cloud.png";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import avatar5 from "../assets/avatar-7.png";
import avatar4 from "../assets/avatar-8.png";
import avatar6 from "../assets/avatar-9.png";
import { SiJavascript, SiFlutter, SiNextdotjs } from "react-icons/si";
import BgApp from "../assets/bg-app.png";
import { ArrowRight } from "lucide-react";
import PricingSection from "../components/pricing/PricingSection.jsx";

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
  ChevronDown,
} from "lucide-react";

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

export default function WebDevelopment() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState("Data Engineering");

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
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>

        {/* ── Left light ── */}
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />

        {/* ── Right light ── */}
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
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
            Technology That{" "}
            <span className="text-[#07BEB8]">Perfectly Aligns</span>
            <br />
            With Your Needs
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

      {/* Hero Image + Content Section */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative group overflow-hidden rounded-lg border border-[#07BEB8]/30">
              <img
                src={WebCover}
                alt="web development"
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span
                className="inline-block text-[11px] tracking-[0.25em] uppercase mb-5 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(7,190,184,0.12)",
                  border: "1px solid rgba(7,190,184,0.35)",
                  color: "#FFF",
                }}
              >
                Achieve more with less
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Web &amp; App Development
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tired of off-the-shelf solutions that don't quite fit?
              <br />
              <br />
              We specialize in crafting custom web applications, mobile apps,
              and software tailored to your specific needs. From development and
              implementation to ongoing maintenance and support, we're your
              one-stop shop for building the perfect tech solution.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
              >
                Hire a Developer
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <div className="flex items-center gap-8">
                {/* Avatar Group Container */}
                <div className="flex items-center justify-start relative h-32">
                  {/* Avatar 1 - Teal Border */}
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      zIndex: 30,
                    }}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={avatar4}
                        alt="avatar-1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Avatar 2 - White Border */}
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      marginLeft: "-50px",
                      zIndex: 20,
                    }}
                  >
                    <div className="w-24 h-24 rounded-full  overflow-hidden flex items-center justify-center">
                      <img
                        src={avatar5}
                        alt="avatar-2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Avatar 3 - Teal Border */}
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      marginLeft: "-50px",
                      zIndex: 10,
                    }}
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={avatar6}
                        alt="avatar-3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Avatar 4 - Empty circle with indicator dots */}
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      marginLeft: "-50px",
                      zIndex: 0,
                    }}
                  >
                    <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#07BEB8]" />
                      <div className="w-2 h-2 rounded-full bg-[#07beb89c]" />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-[#07BEB8]">80+</span>
                  <span className="text-gray-400 text-sm">Total Employee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turning Your Ideas Section with Accordion */}
      <section
        className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgApp})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Title */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Turning your ideas
                <br />
                into{" "}
                <span className="text-[#07BEB8] block md:inline">
                  digital experiences
                </span>
                <br />
                through:
              </h2>
            </div>

            {/* Right - Accordion */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                    className="w-full flex items-start justify-between p-4 rounded-lg border border-white/10 hover:border-[#07BEB8]/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#07BEB8] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 ml-4 text-[#07BEB8] transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 py-3 text-gray-300 text-sm md:text-base leading-relaxed border-l-2 border-[#07BEB8] ml-2">
                      {service.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Client Work */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest Client Work
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
              Our team of experts consists of highly skilled software engineers,
              designers, developers, project managers, and quality assurance
              specialists. here's what we excel at.
            </p>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="Analytic" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Strong Systems
                  <br />
                  Behind the Scenes
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Scalable, Architecture, Clean Code & Performance-Focused
                  Development That Drivers Real Results.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="Analytic" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Quality You
                  <br />
                  Can Count On
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Rigorous Testing Code Reviews & Industry Best Practices To
                  Deliver Bug-Free & Reliable Solutions.
                </p>
              </div>
            </div>

            {/* ── CENTER COLUMN ── */}
            <div className="flex flex-col gap-6">
              {/* Laptop showcase */}
              <div className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-900/20 to-transparent">
                <img
                  src={WebWork}
                  alt="Latest client project"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Stats card with avatars */}
              <div className="rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <img
                      src={avatar4}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-black object-cover"
                    />
                    <img
                      src={avatar5}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-black object-cover -ml-3"
                    />
                    <img
                      src={avatar6}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-black object-cover -ml-3"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">
                      80+
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Total Satisfied Clients
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
                >
                  View Portfoilo
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-6">
              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="Analytic" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Custom Web
                  <br />
                  Platforms
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  High-Performance, Secure Web Applications Built to Scale with
                  your Business and users.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="Analytic" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Mobile App
                  <br />
                  Development
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Feature-Rich, Intuitive & High-Performing Mobile Apps For iOS
                  & Andorid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection
        eyebrow="Transparent delivery retainers"
        title="Premium pricing for teams that care about quality and momentum"
        description="Each plan is structured for a different growth stage, with the same focus on clean execution, fast communication, and measurable business impact."
        savingsLabel="Save up to 20% with annual partnerships"
        footerNote="Need a custom roadmap instead of a fixed package?"
        footerDescription="We also quote enterprise websites, app plus web bundles, and ongoing white-label product partnerships for agencies and in-house teams."
        footerCtaText="Talk through your scope"
        footerCtaHref="/contact"
      />

      {/* Tech Expertise */}
      <section className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tech Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Our team of experts consists of highly skilled software engineers,
              designers, developers, project managers, and quality assurance
              specialists. here's what we excel at.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {[
              "Business Intelligence",
              "Data Engineering",
              "Platform Partnerships",
            ].map((tab) => {
              const active = tab === activeTechTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTechTab(tab)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                    active
                      ? "bg-[#07BEB8] text-white border-[#07BEB8] shadow-[0_0_25px_rgba(7,190,184,0.45)]"
                      : "bg-transparent text-gray-200 border-white/25 hover:border-white/50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tech grid — 12 items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {[
              {
                label: "HTML5",
                icon: (
                  <FaHtml5
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#E34F26" }}
                  />
                ),
              },
              {
                label: "CSS3",
                icon: (
                  <FaCss3Alt
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#1572B6" }}
                  />
                ),
              },
              {
                label: "JavaScript",
                icon: (
                  <SiJavascript
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#F7DF1E" }}
                  />
                ),
              },
              {
                label: "Flutter",
                icon: (
                  <SiFlutter
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#02569B" }}
                  />
                ),
              },
              {
                label: "next.js",
                icon: (
                  <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                ),
              },
              {
                label: "Laravel",
                icon: (
                  <FaLaravel
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#FF2D20" }}
                  />
                ),
              },
              {
                label: "PHP",
                icon: (
                  <FaPhp
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#777BB4" }}
                  />
                ),
              },
              {
                label: "Python",
                icon: (
                  <FaPython
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#3776AB" }}
                  />
                ),
              },
              {
                label: "Vue.js",
                icon: (
                  <FaVuejs
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#4FC08D" }}
                  />
                ),
              },
              {
                label: "Figma",
                icon: (
                  <FaFigma
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#F24E1E" }}
                  />
                ),
              },
              {
                label: "React",
                icon: (
                  <FaReact
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#61DAFB" }}
                  />
                ),
              },
              {
                label: "Android",
                icon: (
                  <FaAndroid
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ color: "#3DDC84" }}
                  />
                ),
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl border border-white/40  hover:border-[#07BEB8]/60 hover:shadow-[0_0_25px_rgba(7,190,184,0.15)] transition-all cursor-pointer group h-32 sm:h-36"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-white text-center">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
