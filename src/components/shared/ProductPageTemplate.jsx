import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.png";
import rightLight from "../../assets/right-light.png";
import Cloud from "../../assets/icons/cloud.png";
import BgApp from "../../assets/bg-app.png";
import BannerRightAnimation from "../animations/bannerRight";
import BannerLeftAnimation from "../animations/bannerleft";

const Footer = lazy(() => import("../layout/footer.jsx"));

/* ── Banner ─────────────────────────────────────────────────────────────────── */
function Banner({ badge, title, titleAccent, subtitle }) {
  return (
    <section className="relative z-0 flex w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={hero_bg}
          alt=""
          loading="eager"
          fetchpriority="high"
          className="h-full w-full object-cover object-center opacity-90"
        />
      </div>

      <img src={leftLight} alt="" aria-hidden="true" loading="eager" fetchpriority="high"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left" />
      <img src={rightLight} alt="" aria-hidden="true" loading="eager" fetchpriority="high"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-24 text-center sm:px-12 md:px-20 lg:px-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium tracking-widest text-white uppercase">{badge}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-tight tracking-wide text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {title} <span className="text-[#07BEB8]">{titleAccent}</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white/80 sm:text-base">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-2 pl-6 pr-2 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
          >
            Get Started
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:rotate-45">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <a
            href="#overview"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
        <BannerRightAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="absolute -top-16 -right-16 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-500/30 bg-gradient-to-br from-white to-white p-2">
            <img src={Cloud} alt="" className="h-12 w-12 object-contain brightness-125" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
        <BannerLeftAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="absolute top-26 -left-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-500/30 bg-gradient-to-br from-white to-white p-2">
            <img src={Cloud} alt="" className="h-12 w-12 object-contain brightness-125" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Overview ────────────────────────────────────────────────────────────────── */
function Overview({ image, heading, accentHeading, paragraphs }) {
  return (
    <section id="overview" className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={heading}
            className="w-full h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            <span className="text-[#07BEB8]">{accentHeading}</span> {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-300 leading-relaxed text-sm sm:text-base">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Key Features ────────────────────────────────────────────────────────────── */
function KeyFeatures({ features }) {
  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[#07BEB8] uppercase">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Key <span className="text-[#07BEB8]">Features</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to streamline operations, delight customers, and scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.Icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#07BEB8]/40 hover:bg-white/8 hover:shadow-lg hover:shadow-[#07BEB8]/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#07BEB8]/10 text-[#07BEB8] transition-colors group-hover:bg-[#07BEB8]/20">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-base font-semibold text-white group-hover:text-[#07BEB8] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────────────────────────────── */
function Process({ heading, steps }) {
  return (
    <section
      className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            CoreHives <span className="text-[#07BEB8]">Process</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {heading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-[#07BEB8]/30 hover:border-[#07BEB8]/80 bg-gradient-to-br from-[#0a3a37]/40 to-[#051a19]/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#07BEB8]/20"
            >
              <div className="mb-4 text-5xl font-bold text-[#07BEB8]/20 group-hover:text-[#07BEB8]/40 transition-colors">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white group-hover:text-[#07BEB8] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Technologies ────────────────────────────────────────────────────────────── */
function Technologies({ technologies }) {
  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technologies <span className="text-[#07BEB8]">We Use</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Built on industry-leading tools and frameworks trusted by top-tier engineering teams worldwide.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const Icon = tech.Icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#07BEB8]/40 hover:bg-white/8"
              >
                {Icon && (
                  <Icon className="h-8 w-8 text-gray-400 transition-colors group-hover:text-[#07BEB8]" />
                )}
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Benefits ────────────────────────────────────────────────────────────────── */
function Benefits({ benefits }) {
  const colors = [
    { bg: "bg-[#07BEB8]", text: "text-[#062E2C]" },
    { bg: "bg-[#E5F8F2]", text: "text-[#062E2C]" },
    { bg: "bg-[#FFF3DC]", text: "text-[#3a2e14]" },
    { bg: "bg-[#F5F5F5]", text: "text-[#0a0a0a]" },
    { bg: "bg-[#E6FEFE]", text: "text-[#0a0a0a]" },
  ];

  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 bg-[#080808]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Key <span className="text-[#07BEB8]">Benefits</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className={`rounded-2xl p-7 ${color.bg} ${color.text} min-h-[180px] flex flex-col justify-between`}
              >
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────────────── */
function Stats({ stats }) {
  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 bg-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl sm:text-5xl font-bold text-white">
          Why <span className="text-[#07BEB8]">CoreHives?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-700 hover:border-[#07BEB8]/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#07BEB8]/20"
            >
              <div className="mb-2 text-center text-4xl sm:text-5xl font-bold text-[#07BEB8] group-hover:scale-110 transition-transform duration-300">
                {s.number}
              </div>
              <h3 className="mb-3 text-center text-sm font-semibold text-gray-300">{s.label}</h3>
              <p className="text-center text-xs text-white leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────────────────────────── */
function Faq({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked <span className="text-[#07BEB8]">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-[#07BEB8] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────────────────────── */
function Cta({ heading, subtitle, highlights, buttonText, buttonHref }) {
  return (
    <section className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 bg-black">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {heading} <span className="text-[#07BEB8]">Today</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">{subtitle}</p>

        {highlights && (
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="h-4 w-4 text-[#07BEB8]" />
                {h}
              </div>
            ))}
          </div>
        )}

        <Link
          to={buttonHref || "/contact"}
          className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-2 pl-6 pr-2 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
        >
          {buttonText || "Contact Us"}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:rotate-45">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ── Main Template ───────────────────────────────────────────────────────────── */
export default function ProductPageTemplate({ data }) {
  return (
    <>
      <Banner {...data.banner} />
      <Overview {...data.overview} />
      <KeyFeatures features={data.features} />
      <Process heading={data.processHeading} steps={data.process} />
      {data.technologies && data.technologies.length > 0 && (
        <Technologies technologies={data.technologies} />
      )}
      <Benefits benefits={data.benefits} />
      <Stats stats={data.stats} />
      <Faq faq={data.faq} />
      <Cta {...data.cta} />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
