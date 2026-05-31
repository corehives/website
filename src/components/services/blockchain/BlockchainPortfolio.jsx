import { ArrowRight, ArrowUpRight } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgRight from "../../../assets/bg-right-content.webp";

const projects = [
  {
    id: 1,
    name: "AquaSwap",
    category: "DeFi · AMM Protocol",
    description: "A concentrated liquidity AMM deployed on Arbitrum — custom tick math, flash loan protection, dynamic fee tiers, and a multi-sig governance system managing $40M+ in peak TVL.",
    result: "$40M+ peak TVL",
    result2: "Zero security incidents",
    colors: ["#34D399", "#0a2a1e", "#07BEB8"],
    tags: ["Solidity", "Concentrated Liquidity", "Arbitrum", "Security Audit"],
    accentColor: "#34D399",
    chain: "Arbitrum",
  },
  {
    id: 2,
    name: "Spectra Protocol",
    category: "NFT · Marketplace + Staking",
    description: "A full NFT ecosystem — ERC-1155 contracts, a custom marketplace with royalty enforcement via EIP-2981, and a staking protocol where NFTs generate on-chain yield. 50K+ NFTs minted.",
    result: "50K+ NFTs minted",
    result2: "£2.4M primary sales volume",
    colors: ["#A78BFA", "#1a0a2e", "#F472B6"],
    tags: ["ERC-1155", "NFT Marketplace", "Staking Protocol", "EIP-2981"],
    accentColor: "#A78BFA",
    chain: "Ethereum",
  },
  {
    id: 3,
    name: "VaultEdge",
    category: "DeFi · Yield Vault",
    description: "An ERC-4626 yield vault aggregator deployed on Polygon — auto-compounding strategies across 5 protocols, gas-optimised rebalancing, and a Chainlink oracle integration for real-time APY calculations.",
    result: "5 integrated protocols",
    result2: "$12M AUM at peak",
    colors: ["#07BEB8", "#0d2535", "#38BDF8"],
    tags: ["ERC-4626", "Yield Aggregator", "Polygon", "Chainlink"],
    accentColor: "#07BEB8",
    chain: "Polygon",
  },
];

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{ background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.12)" }}>

      <div className="relative h-52 overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${project.colors[1]}, rgba(5,15,22,0.95))`, borderBottom: `1px solid ${project.accentColor}20` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute rounded-full opacity-20"
            style={{ width: "80px", height: "80px", border: `2px solid ${project.accentColor}`, animation: "rotateSlow 8s linear infinite" }} />
          <div className="absolute rounded-full"
            style={{ width: "50px", height: "50px", background: `radial-gradient(circle, ${project.accentColor}40, transparent)`, animation: "pricing-orb-float 4s ease-in-out infinite" }} />
          <div className="relative z-10 text-xs font-mono font-bold px-3 py-1.5 rounded-lg"
            style={{ color: project.accentColor, background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}>
            {project.chain}
          </div>
        </div>
        <div className="absolute top-5 left-5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ color: project.accentColor, background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}28`, backdropFilter: "blur(8px)" }}>
          {project.category.split("·")[0].trim()}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs text-white/30 mb-1">{project.category}</span>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#34D399] transition-colors duration-300">{project.name}</h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(52,211,153,0.1)" }}>
          <div>
            <span className="block text-sm font-bold" style={{ color: project.accentColor }}>{project.result}</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{project.result2}</span>
          </div>
          <button className="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-white/35 transition-all duration-300 group-hover:border-[#34D399] group-hover:text-[#34D399]">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BlockchainPortfolio() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgRight} alt="" aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-40 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#34D399", textShadow: "0 0 10px rgba(52,211,153,0.4)", letterSpacing: "0.18em" }}>
              On-Chain Work
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Protocols We've{" "}
              <span style={{
                background: "linear-gradient(135deg, #34D399, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Shipped to Mainnet
              </span>
            </h2>
          </div>
          <a href="/our-portfolio" ref={paraRef}
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#0a2a1e5e] flex-shrink-0">
            View Full Portfolio
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#34D399] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
