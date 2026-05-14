import { useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
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
import MobileApp from "../assets/mobile-app.png";
import { SiJavascript, SiFlutter, SiNextdotjs } from "react-icons/si";
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

      {/* ── CONTENT SECTIONS ── */}
      <div className="w-full py-20 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm">
        {/* Hero Image + Content Section */}
        <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={MobileApp}
                  alt="web development"
                  className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="text-[#07BEB8]">Optimize</span>
                  Your Digital Presence with CoreHives
                  <span className="text-[#07BEB8]">
                    Mobile App Development Services
                  </span>
                </h2>
              </div>

              <p className="text-gray-300 ">
                At CoreHives, our goal to become a renowned mobile app
                development company is to give your brand an online recognition
                with a platform that stays relevant among your targeted audience
                for a long time. We believe in offering exceptional services
                with the help of an expert team that are familiar with the
                methodology and functionality of creating a mobile app. With
                CoreHives, you can be assured that your mobile app will not only
                meet your business needs but also exceed your expectations,
                providing a seamless and engaging experience for your users. Our
                commitment to quality, innovation, and customer satisfaction
                sets us apart as a leading mobile app development company.
                <br />
                <br />
                CoreHives understands the uniqueness of every business and
                prefers using innovative solutions that benefit you. Our team
                also follows a well-thought approach to making your online
                presence as distinct and impactful as your brand.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
