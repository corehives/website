import { lazy, Suspense, useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import StaffOutSource from "../assets/staff-out-source.png";
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
import BgApp from "../assets/bg-app.png";
import { ArrowRight, ChevronDown, Globe, Smartphone, Cpu } from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import techStaffOutsourcingPricingPlans from "../components/pricing/techStaffOutsourcingPricingData.json";
import { FaReact, FaPython, FaAndroid, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiKubernetes,
  SiDocker,
  SiRust,
  SiFlutter,
  SiNodedotjs,
  SiSwift,
  SiTensorflow,
  SiPytorch,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

const services = [
  {
    title: "Dedicated Developer Embedding",
    description:
      "A single senior engineer embedded full-time in your team — attends your standups, uses your tools, ships your features. Exclusive focus, zero coordination overhead, measurable velocity from week one.",
  },
  {
    title: "Team Augmentation",
    description:
      "Add 2–8 senior engineers to your existing team within days, not months. Plug directly into your sprint cycles and scale up or down with 2 weeks notice as your roadmap demands.",
  },
  {
    title: "Project Squad",
    description:
      "A cross-functional squad — PM, designer, engineers, QA — assembled to deliver a specific product or feature set from discovery through launch. Fixed-scope ownership with milestone-based delivery.",
  },
  {
    title: "Fractional CTO",
    description:
      "A senior technical leader — 20–40 hrs/week — driving architecture decisions, hiring strategy, and engineering culture without the full-time executive cost. Ideal for Series A-B startups.",
  },
];

const whyItems = [
  {
    id: "speed",
    title: "72-Hour Placement Guarantee",
    description:
      "From brief to shortlisted engineer profiles in 48 hours. From accepted offer to first commit in 72 hours. We don't pad timelines to manage expectations — we deliver within them.",
  },
  {
    id: "senior",
    title: "Senior-Only Talent Pool",
    description:
      "Every engineer on our roster has 5+ years of production experience and has passed a 4-stage vetting process. No juniors, no trainees, no bait-and-switch profile swaps.",
  },
  {
    id: "timezone",
    title: "Timezone-Matched by Default",
    description:
      "Engineers are matched to your primary working hours — standups, Slack, and code reviews happen in real time, not the next morning.",
  },
  {
    id: "trial",
    title: "2-Week Trial Sprint, No Commitment",
    description:
      "Every engagement starts with a paid 2-week trial sprint — a real deliverable from your backlog. You verify quality before any long-term commitment is made.",
  },
  {
    id: "ip",
    title: "IP Ownership & NDAs Built In",
    description:
      "Full IP assignment, strict NDAs, and data-handling compliance are included in every engagement by default — not sold as premium add-ons.",
  },
];

const techTabData = {
  "Web & Backend": [
    {
      label: "React",
      icon: <FaReact className="w-9 h-9" style={{ color: "#61DAFB" }} />,
    },
    { label: "Next.js", icon: <SiNextdotjs className="w-9 h-9 text-white" /> },
    {
      label: "TypeScript",
      icon: <SiTypescript className="w-9 h-9" style={{ color: "#3178C6" }} />,
    },
    {
      label: "Node.js",
      icon: <SiNodedotjs className="w-9 h-9" style={{ color: "#339933" }} />,
    },
    {
      label: "Python",
      icon: <FaPython className="w-9 h-9" style={{ color: "#3776AB" }} />,
    },
    {
      label: "Rust",
      icon: <SiRust className="w-9 h-9" style={{ color: "#CE412B" }} />,
    },
  ],
  "Mobile & DevOps": [
    {
      label: "Flutter",
      icon: <SiFlutter className="w-9 h-9" style={{ color: "#02569B" }} />,
    },
    {
      label: "Android",
      icon: <FaAndroid className="w-9 h-9" style={{ color: "#3DDC84" }} />,
    },
    {
      label: "Swift",
      icon: <SiSwift className="w-9 h-9" style={{ color: "#FA7343" }} />,
    },
    {
      label: "Docker",
      icon: <SiDocker className="w-9 h-9" style={{ color: "#2496ED" }} />,
    },
    {
      label: "Kubernetes",
      icon: <SiKubernetes className="w-9 h-9" style={{ color: "#326CE5" }} />,
    },
    {
      label: "AWS",
      icon: <FaAws className="w-9 h-9" style={{ color: "#FF9900" }} />,
    },
  ],
  "Blockchain & AI": [
    { label: "Solidity", icon: <SiSolidity className="w-9 h-9 text-white" /> },
    {
      label: "Ethereum",
      icon: <SiEthereum className="w-9 h-9" style={{ color: "#627EEA" }} />,
    },
    {
      label: "TensorFlow",
      icon: <SiTensorflow className="w-9 h-9" style={{ color: "#FF6F00" }} />,
    },
    {
      label: "PyTorch",
      icon: <SiPytorch className="w-9 h-9" style={{ color: "#EE4C2C" }} />,
    },
    {
      label: "Python",
      icon: <FaPython className="w-9 h-9" style={{ color: "#3776AB" }} />,
    },
    {
      label: "Kubernetes",
      icon: <SiKubernetes className="w-9 h-9" style={{ color: "#326CE5" }} />,
    },
  ],
};

const tabConfig = [
  { key: "Web & Backend", icon: <Globe className="w-3.5 h-3.5" /> },
  { key: "Mobile & DevOps", icon: <Smartphone className="w-3.5 h-3.5" /> },
  { key: "Blockchain & AI", icon: <Cpu className="w-3.5 h-3.5" /> },
];

const outsourcingFaqData = [
  {
    id: "vetting",
    question: "How do you vet and select your engineering talent?",
    answer: "Every CoreHives engineer goes through a rigorous 4-stage screening process: initial portfolio/resume screening, technical coding assessment, live system architecture interview, and a communication and timezone compatibility check. We only accept the top 5% of applicants."
  },
  {
    id: "placement-time",
    question: "How fast can you place an engineer in our team?",
    answer: "We guarantee placement profiles within 48 hours of scoping your requirements. Once you accept an offer, our engineers can be embedded and make their first code commit within 72 hours."
  },
  {
    id: "timezone",
    question: "Will the outsourced engineers work in our timezone?",
    answer: "Yes. We match engineers to your primary business hours by default. They attend your daily standups, use your communication channels (Slack, Teams), and collaborate in real-time."
  },
  {
    id: "trial",
    question: "Do you offer a trial period for engineers?",
    answer: "Yes. Every engineering engagement starts with a paid 2-week trial sprint. If you are not fully satisfied with the engineer's performance or velocity during this time, you can cancel without any further commitment."
  },
  {
    id: "contracts",
    question: "Is there a minimum contract length or lock-in?",
    answer: "We offer flexible scaling. Unlike traditional placement agencies that lock you into 12-month minimum contracts, we allow team scale-ups or scale-downs with just 2 weeks of advance notice."
  },
  {
    id: "ip",
    question: "Who owns the intellectual property (IP) and source code?",
    answer: "You do. 100% of the intellectual property, source code, designs, and documentation generated by our engineers belong exclusively to your company under our standard service agreement."
  }
];

export default function TechStaffOutsourcing() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [openId, setOpenId] = useState("speed");
  const [openFaqId, setOpenFaqId] = useState("vetting");
  const [activeTechTab, setActiveTechTab] = useState("Web & Backend");

  return (
    <>
      {/* BANNER */}
      <section
        id="home"
        className="relative z-0 flex w-full items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt="hero-bg"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 mt-10 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Senior Engineering Talent
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            Your Team, <span className="precision-gradient">Extended</span>
            <br />
            On Demand
          </h1>
          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            Embed senior engineers directly into your team — zero recruitment
            overhead, no onboarding delays, first commit in 72 hours.
          </p>
        </div>

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

      {/* HERO CONTENT */}
      <section className="relative px-5 py-12 sm:px-8 sm:py-16 md:px-20 md:py-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={StaffOutSource}
                alt="tech staff outsourcing"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-2 text-center xl:text-left">
              <span
                className="inline-block text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-5 px-3 sm:px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(7,190,184,0.12)",
                  border: "1px solid rgba(7,190,184,0.35)",
                  color: "#FFF",
                }}
              >
                Senior-only engineers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Tech Staff{" "}
                <span className="precision-gradient">Outsourcing</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center xl:text-left">
              Hiring takes months. CoreHives takes 72 hours.
              <br />
              <br />
              We place pre-vetted senior engineers directly into your team —
              using your tools, attending your standups, shipping your features.
              No recruitment overhead, no probation risk, no minimum 12-month
              commitment. Scale your engineering capacity the moment your
              roadmap demands it.
            </p>
            <div className="flex items-center  justify-center md:justify-start flex-wrap gap-x-6 gap-y-5 pt-2 sm:pt-4">
              <CTAButton href="/contact">Build Your Team</CTAButton>
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="flex items-center relative">
                  <div
                    className="relative flex-shrink-0"
                    style={{ zIndex: 30 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full">
                      <img
                        src={avatar4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0 -ml-5 sm:-ml-6 lg:-ml-12"
                    style={{ zIndex: 20 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full">
                      <img
                        src={avatar5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0 -ml-5 sm:-ml-6 lg:-ml-12"
                    style={{ zIndex: 10 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full">
                      <img
                        src={avatar6}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className="relative flex-shrink-0 -ml-3 sm:-ml-4 lg:-ml-6"
                    style={{ zIndex: 0 }}
                  >
                    <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-[3px] lg:border-4 border-gray-300 bg-gray-100 flex items-center justify-center gap-1.5 lg:gap-2">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#07BEB8]" />
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#07beb89c]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-[#07BEB8] leading-none">
                    50+
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm mt-1.5">
                    Senior Engineers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section
        className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BgApp})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Scaling your engineering
                <br />
                capacity fast{" "}
                <span className="precision-gradient">through:</span>
              </h2>
            </div>
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
                      className={`flex-shrink-0 ml-4 text-[#07BEB8] transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-0"}`}
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

      {/* FEATURED WORK */}
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Engineering Teams{" "}
              <span className="precision-gradient">We've Built</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
              Senior engineers embedded into growth-stage startups and scale-ups
              — shipping features, not excuses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  72-Hour
                  <br />
                  First Commit
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  From Brief to First Engineer Embedded in Your Team in 72 Hours
                  — No Recruitment, No Delays.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  94% 12-Month
                  <br />
                  Retention Rate
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Engineers Who Stay, Deliver, and Build Deep Product Knowledge
                  — Not Contractors Who Disappear.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-900/20 to-transparent">
                <img
                  src={WebWork}
                  alt="engineering team"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-2 flex items-center justify-between">
                <div className="flex mx-auto items-center gap-3">
                  <div className="flex items-center">
                    <img
                      src={avatar4}
                      alt=""
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <img
                      src={avatar5}
                      alt=""
                      className="w-16 h-16 rounded-full object-cover -ml-6"
                    />
                    <img
                      src={avatar6}
                      alt=""
                      className="w-16 h-16 rounded-full object-cover -ml-6"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">
                      50+
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Engineers On Roster
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  5-Stage Vetting
                  <br />
                  Process
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Only the Top 5% of Applicants Make the Roster — Technical
                  Assessment, Live Architecture Review & Trial Sprint.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  8 Engineering
                  <br />
                  Disciplines
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Full-Stack, Mobile, DevOps, AI/ML, Blockchain, QA & More — One
                  Roster, Every Skill Your Roadmap Demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COREHIVES */}
      <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28 text-center xl:text-left">
            <h2 className="text-4xl sm:text-5xl text-center lg:text-6xl font-bold text-white leading-tight">
              Why CoreHives{" "}
              <span className="precision-gradient">Outsourcing</span>{" "}
              Outperforms Traditional Hiring
            </h2>
            <p className="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-sm mx-auto xl:mx-0">
              Senior talent, no friction, no long-term lock-in — engineering
              capacity on demand.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {whyItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#2a2a2a] bg-[#141414]" : "border-[#1f1f1f] bg-[#0f0f0f]"}`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </span>
                    <span className="flex-shrink-0 ml-4 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out px-5 ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"} overflow-hidden`}
                  >
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection
        plans={techStaffOutsourcingPricingPlans}
        eyebrow="Flexible engineering engagement models"
        title="Staff outsourcing pricing built for every team structure"
        description="From a single dedicated engineer to a full project squad — structured engagements with transparent rates, clear SLAs, and the flexibility to scale as your roadmap evolves."
        savingsLabel="Save up to 20% on 6-month+ engineering retainers"
        footerNote="Need a custom engineering team structure or enterprise scope?"
        footerDescription="We also quote multi-discipline squads, fractional CTO + team combinations, white-label product teams, and long-term engineering partnerships."
        footerCtaText="Discuss your team requirements"
        footerCtaHref="/contact"
      />

      {/* TECH STACK */}
      <section className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Engineering Stack{" "}
              <span className="precision-gradient">Coverage</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Senior engineers across every modern stack — no generalists, no
              juniors. Every discipline covered by specialists with
              production-grade experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {tabConfig.map(({ key, icon }) => {
              const active = key === activeTechTab;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTechTab(key)}
                  className={`shrink-0 inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all border ${active ? "bg-[#07BEB8] text-white border-[#07BEB8] shadow-[0_0_25px_rgba(7,190,184,0.45)]" : "bg-transparent text-gray-200 border-white/25 hover:border-white/50"}`}
                >
                  {icon}
                  {key}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4 pb-2">
            {techTabData[activeTechTab].map((tech, idx) => (
              <div
                key={idx}
                className="shrink-0 w-28 h-28 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 hover:border-[#07BEB8]/60 hover:shadow-[0_0_25px_rgba(7,190,184,0.15)] transition-all cursor-pointer group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-[0.65rem] font-medium text-white text-center leading-tight px-1 line-clamp-2">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
      </div>
    </section>

    {/* Frequently Asked Questions */}
    <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Frequently Asked
            <br />
            <span className="precision-gradient">Questions!</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-white/10">
          {outsourcingFaqData.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id} className="py-2">
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 pr-6 ${
                      isOpen ? "text-[#07BEB8]" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    </>
  );
}
