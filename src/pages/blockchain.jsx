import { lazy, Suspense, useState } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import IosApp from "../assets/enterprise-app-dev.png";
import BlockchainProtocols from "../assets/blockchain-protocols.png";
import Analytic from "../assets/icons/analytic.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import Cloud from "../assets/icons/cloud.png";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import BgApp from "../assets/bg-app.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import PricingSection from "../components/pricing/PricingSection.jsx";
import blockchainPricingPlans from "../components/pricing/blockchainPricingData.json";
import { FaReact } from "react-icons/fa";
import {
  SiSolidity,
  SiRust,
  SiEthereum,
  SiOpenzeppelin,
  SiChainlink,
  SiSolana,
  SiTypescript,
  SiNextdotjs,
  SiWeb3Dotjs,
  SiWagmi,
  SiGraphql,
  SiPolygon,
  SiBinance,
  SiIpfs,
  SiEthers,
  SiNear,
} from "react-icons/si";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

const services = [
  {
    title: "Smart Contract Development",
    description:
      "Full-lifecycle smart contract engineering — architecture, Solidity/Rust development, gas optimisation, and multi-stage security auditing. We write contracts we wouldn't hesitate to stake our own tokens on.",
  },
  {
    title: "DeFi Protocol Engineering",
    description:
      "AMMs, lending protocols, yield vaults, and stablecoin mechanisms — built with the rigour that billions of dollars in TVL demands. No copy-paste forks, no shortcuts on security.",
  },
  {
    title: "NFT Platforms & Web3 dApps",
    description:
      "Full-stack NFT ecosystems — ERC-721/1155 contracts, marketplace infrastructure, royalty enforcement, and React/Next.js front ends with wallet integrations and gasless meta-transactions.",
  },
  {
    title: "Blockchain Strategy & Consulting",
    description:
      "Chain selection, tokenomics design, governance architecture, and regulatory positioning — strategic guidance from engineers who have shipped production protocols, not just written whitepapers.",
  },
];

const whyItems = [
  {
    id: "security",
    title: "Security-First By Design",
    description:
      "Every contract ships with 100% test coverage, fuzz testing, Slither/MythX static analysis, and a full internal audit. Security isn't a post-deployment checklist — it's baked into every line of implementation.",
  },
  {
    id: "gas",
    title: "Gas-Optimised as Standard",
    description:
      "Storage layout, opcode efficiency, and batching strategies are considered from the first design pass — not applied as a patch after deployment makes them expensive to change.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web3, One Team",
    description:
      "From Solidity to React — protocol layer, subgraph indexing, and front-end wallet UX built by the same team that wrote the contracts. No handoffs, no seams, no finger-pointing.",
  },
  {
    id: "multichain",
    title: "14+ Chains, One Relationship",
    description:
      "EVM chains (Ethereum, Arbitrum, Polygon, Base), Solana, and more — without the overhead of managing separate chain-specialist relationships for every deployment target.",
  },
  {
    id: "postlaunch",
    title: "30-Day Post-Launch Support",
    description:
      "Staged deployments, monitoring infrastructure, and a 30-day incident response window included as standard. You don't go to mainnet alone — and you're not left alone after it either.",
  },
];

const techTabData = {
  "Smart Contracts": [
    {
      label: "Solidity",
      icon: (
        <SiSolidity
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "Rust",
      icon: (
        <SiRust
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#CE412B" }}
        />
      ),
    },
    {
      label: "Ethereum",
      icon: (
        <SiEthereum
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#627EEA" }}
        />
      ),
    },
    {
      label: "OpenZeppelin",
      icon: (
        <SiOpenzeppelin
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#4E5EE4" }}
        />
      ),
    },
    {
      label: "Chainlink",
      icon: (
        <SiChainlink
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#375BD2" }}
        />
      ),
    },
    {
      label: "Solana",
      icon: (
        <SiSolana
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#9945FF" }}
        />
      ),
    },
  ],
  "Web3 Frontend": [
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
      label: "TypeScript",
      icon: (
        <SiTypescript
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#3178C6" }}
        />
      ),
    },
    {
      label: "Next.js",
      icon: (
        <SiNextdotjs
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "Web3.js",
      icon: (
        <SiWeb3Dotjs
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F16822" }}
        />
      ),
    },
    {
      label: "wagmi",
      icon: (
        <SiWagmi
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "GraphQL",
      icon: (
        <SiGraphql
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#E10098" }}
        />
      ),
    },
  ],
  "DeFi & Tools": [
    {
      label: "Ethereum",
      icon: (
        <SiEthereum
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#627EEA" }}
        />
      ),
    },
    {
      label: "Polygon",
      icon: (
        <SiPolygon
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#7B3FE4" }}
        />
      ),
    },
    {
      label: "Binance",
      icon: (
        <SiBinance
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#F0B90B" }}
        />
      ),
    },
    {
      label: "IPFS",
      icon: (
        <SiIpfs
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#65C2CB" }}
        />
      ),
    },
    {
      label: "Ethers.js",
      icon: (
        <SiEthers
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
    {
      label: "NEAR",
      icon: (
        <SiNear
          className="w-10 h-10 sm:w-12 sm:h-12"
          style={{ color: "#FFFFFF" }}
        />
      ),
    },
  ],
};

export default function Blockchain() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [openId, setOpenId] = useState("security");
  const [activeTechTab, setActiveTechTab] = useState("Smart Contracts");

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

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20 text-center mt-10 sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Web3 & Blockchain Engineering
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>
          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            Build On Chain, <span className="text-[#07BEB8]">Ship With</span>
            <br />
            Confidence
          </h1>
          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            Production-grade blockchain engineering — from smart contract
            architecture to full-stack dApp deployment, security-first and
            battle-tested.
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
      <section className="relative px-6 py-16 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative group overflow-hidden rounded-lg border border-[#07BEB8]/30">
              <img
                src={IosApp}
                alt="blockchain development"
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
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
                Security-first blockchain
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Blockchain Development{" "}
                <span className="precision-gradient">Services</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              On-chain bugs aren't patches — they're exploits. We build
              accordingly.
              <br />
              <br />
              CoreHives engineers write production-grade smart contracts, DeFi
              protocols, and Web3 applications with security-first discipline at
              every layer. 240+ contracts deployed. $180M+ TVL managed. Zero
              critical security incidents. That record doesn't happen by
              accident.
            </p>
            <div className="flex items-center flex-wrap gap-4 pt-4">
              <CTAButton href="/contact">Blockchain</CTAButton>
              <div className="flex flex-col ml-2 sm:ml-4">
                <span className="text-4xl font-bold text-[#07BEB8]">
                  240+
                </span>
                <span className="text-gray-400 text-sm">
                  Contracts Deployed
                </span>
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
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Building on-chain systems
                <br />
                that secure real{" "}
                <span className="precision-gradient">value through</span>
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
              Protocols We've Shipped{" "}
              <span className="precision-gradient">to Mainnet</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
              DeFi protocols, NFT platforms, and yield infrastructure — deployed
              to mainnet with zero critical security incidents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  $180M+ TVL
                  <br />
                  Managed
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Total Value Locked Across DeFi Protocols Engineered by
                  CoreHives — Zero Critical Security Incidents.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  100% Audit
                  <br />
                  Pass Rate
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every Contract Deployed Has Passed Internal Security Audit
                  With Zero Critical Findings — No Exceptions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-900/20 to-transparent">
                <img
                  src={BlockchainProtocols}
                  alt="blockchain work"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="rounded-2xl border border-[#07BEB8]/40 bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-2 flex items-center justify-between">
                <div className="flex mx-auto items-center gap-3">
                  <div>
                    <p className="text-2xl font-bold text-[#07BEB8] leading-none">
                      240+
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Contracts Deployed
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
                  14+ Chains
                  <br />
                  Supported
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  EVM Chains, Solana, Cosmos & More — Full Cross-Chain
                  Engineering Capability Without Extra Specialists.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#07BEB8]/40 hover:border-[#07BEB8] bg-gradient-to-br from-teal-900/50 via-black/60 to-black/80 p-7 transition-all flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <img src={Analytic} className="h-5" alt="" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  Full-Stack Web3
                  <br />
                  Engineering
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Protocol to Frontend — Smart Contracts, Subgraphs, Wallet UX &
                  dApp Built by One Team With No Handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COREHIVES */}
      <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why CoreHives{" "}
              <span className="precision-gradient">Blockchain</span> Engineering
              Stands Out
            </h2>
            <p className="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-sm">
              Security-first, gas-optimised, battle-tested — production
              blockchain engineering with zero compromises.
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
        plans={blockchainPricingPlans}
        eyebrow="Transparent blockchain project pricing"
        title="Web3 engineering packages built for production-grade protocols"
        description="From single smart contract audits to full DeFi protocol builds — structured engagements with clear security standards, milestone-based delivery, and post-launch support included."
        savingsLabel="Save up to 20% on ongoing protocol maintenance retainers"
        footerNote="Need a custom blockchain scope or multi-chain protocol build?"
        footerDescription="We also quote full DeFi protocol ecosystems, cross-chain bridge infrastructure, DAO governance systems, and long-term on-chain engineering partnerships."
        footerCtaText="Discuss your protocol requirements"
        footerCtaHref="/contact"
        showToggle={false}
        showPeriod={false}
      />

      {/* WEB3 STACK */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-20 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4">
              Web3 <span className="precision-gradient">Engineering Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2">
              Production-grade blockchain tools and frameworks operated by
              engineers who have shipped real protocols with real TVL on the
              line.
            </p>
          </div>

          {/* Tabs — single row at every breakpoint */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-4 mb-10 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center">
            {["Smart Contracts", "Web3 Frontend", "DeFi & Tools"].map((tab) => {
              const active = tab === activeTechTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTechTab(tab)}
                  className={`min-w-0 px-1.5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-medium transition-all border whitespace-nowrap text-center ${
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
            {techTabData[activeTechTab].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/40 hover:border-[#07BEB8]/60 hover:shadow-[0_0_25px_rgba(7,190,184,0.15)] transition-all cursor-pointer group h-28 sm:h-36"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-white text-center leading-tight">
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
