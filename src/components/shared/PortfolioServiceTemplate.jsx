import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import hero_bg from "../../assets/hero-bgs.webp";
import leftLight from "../../assets/left-light.png";
import rightLight from "../../assets/right-light.png";
import Cloud from "../../assets/icons/cloud.png";
import BgApp from "../../assets/bg-app.png";
import avatar5 from "../../assets/avatar-7.png";
import avatar4 from "../../assets/avatar-8.png";
import avatar6 from "../../assets/avatar-9.png";
import BannerRightAnimation from "../animations/bannerRight";
import BannerLeftAnimation from "../animations/bannerleft";

const Footer = lazy(() => import("../layout/footer.jsx"));

/* ── Banner ──────────────────────────────────────────────────────────────────── */
function Banner({ badge, title, titleAccent, subtitle }) {
  return (
    <section className="relative z-0 flex w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={hero_bg} alt="" loading="eager" fetchpriority="high"
          className="h-full w-full object-cover object-center opacity-90" />
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
        <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white/80 sm:text-base">{subtitle}</p>
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

/* ── Featured Projects ───────────────────────────────────────────────────────── */
function FeaturedProjects({ image, categories }) {
  const [expandedCategory, setExpandedCategory] = useState(0);

  return (
    <section className="px-5 sm:px-10 lg:px-20 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-5 rounded-2xl overflow-hidden">
          <div className="col-span-12 lg:col-span-8 relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
            <img src={image} alt="Portfolio showcase" className="w-full h-full object-contain max-h-[320px]" />
          </div>

          <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-start space-y-4">
            {categories.map((category, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === index ? -1 : index)}
                  className="w-full text-left"
                >
                  <h3 className={`text-lg sm:text-xl font-semibold transition-colors duration-200 pb-3 border-b ${
                    expandedCategory === index
                      ? "text-[#07BEB8] border-[#07BEB8]"
                      : "text-white/40 hover:text-[#07BEB8] border-gray-700 hover:border-[#07BEB8]/50"
                  }`}>
                    {category.title}
                  </h3>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCategory === index ? "max-h-40 opacity-100 pt-4" : "max-h-0 opacity-0"
                }`}>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 hover:text-[#07BEB8] transition-colors">
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
  );
}

/* ── Projects Grid ───────────────────────────────────────────────────────────── */
function ProjectsGrid({ projects }) {
  return (
    <section className="px-6 py-16 sm:px-12 md:px-20 lg:px-32 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-[#07BEB8]">Work</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            A selection of real-world projects delivered for clients across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-[#07BEB8]/40 hover:shadow-lg hover:shadow-[#07BEB8]/10">
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-[#07BEB8]/10 to-[#010A11]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-[#07BEB8]/20 group-hover:text-[#07BEB8]/30 transition-colors">
                    {proj.number}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="mr-2 inline-block rounded-full bg-[#07BEB8]/20 px-3 py-1 text-xs font-medium text-[#07BEB8]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#07BEB8] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────────────── */
function Stats({ stats }) {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 py-10">
        {stats.map((s) => (
          <div key={s.num} className="mx-auto sm:text-left">
            <div className="flex items-center gap-2 border-b border-white/40 pb-2">
              <div className="w-[50%]">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none">{s.num}</div>
              </div>
              <div className="w-[30%]">
                <div className="text-[11px] sm:text-xs font-medium text-gray-200 leading-tight">{s.label}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────────────────────────────── */
function Process({ steps }) {
  return (
    <section
      className="px-6 py-20 sm:px-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-[#07BEB8]">Approach</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm">
            A proven methodology that consistently delivers exceptional results.
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

/* ── Problem Cards / CTA ─────────────────────────────────────────────────────── */
function ProblemCta({ heading, clientCount, problems }) {
  return (
    <>
      <section className="px-5 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {heading}
          </h2>
          <div className="space-y-6">
            <p className="text-white leading-relaxed text-sm sm:text-base">
              We've helped{" "}
              <span className="text-[#07BEB8] font-semibold">{clientCount}+ companies</span>{" "}
              solve challenges, boost engagement, increase conversions, build MVPs, and raise funds — driving growth and success.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 py-1.5 pl-4 pr-1.5 text-xs font-medium text-white hover:bg-white/5 transition"
              >
                Start a project
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07BEB8] text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src={avatar4} alt="" className="h-8 w-8 rounded-full border-2 border-black object-cover" />
                  <img src={avatar5} alt="" className="h-8 w-8 rounded-full border-2 border-black object-cover" />
                  <img src={avatar6} alt="" className="h-8 w-8 rounded-full border-2 border-black object-cover" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#07BEB8] leading-none">80+</div>
                  <div className="text-[10px] text-gray-500">Total Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div key={i} className={`rounded-2xl p-7 ${p.bg} ${p.textColor} min-h-[200px] flex flex-col justify-between ${i === 0 ? "lg:row-span-2 min-h-[260px] lg:min-h-[420px]" : ""}`}>
              <h3 className={`font-bold mb-3 ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ── Main Template ───────────────────────────────────────────────────────────── */
export default function PortfolioServiceTemplate({ data }) {
  return (
    <>
      <Banner {...data.banner} />
      <FeaturedProjects image={data.showcaseImage} categories={data.categories} />
      <Stats stats={data.stats} />
      <ProjectsGrid projects={data.projects} />
      <Process steps={data.process} />
      <ProblemCta heading={data.ctaHeading} clientCount={data.clientCount} problems={data.problems} />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
