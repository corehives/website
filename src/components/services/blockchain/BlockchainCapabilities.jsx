import { useRef, useEffect } from "react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const capabilities = [
  {
    title: "Solidity & EVM Development",
    desc: "Production-grade Solidity engineering for Ethereum, Polygon, BNB Chain, Arbitrum, Base, and all EVM-compatible L1/L2 chains — with gas optimisation as a first-class concern.",
    tags: ["Solidity", "Foundry / Hardhat", "EVM L1/L2", "Gas Optimisation"],
    color: "#34D399",
    icon: "⟠",
  },
  {
    title: "Rust & Solana Programs",
    desc: "Native Solana program development in Rust and Anchor framework — high-performance on-chain logic, SPL tokens, and compressed NFT infrastructure.",
    tags: ["Rust / Anchor", "Solana Programs", "SPL Tokens", "cNFTs"],
    color: "#07BEB8",
    icon: "◎",
  },
  {
    title: "Security Auditing",
    desc: "Manual and automated smart contract auditing — reentrancy, overflow, access control, oracle manipulation, flash loan attacks. Pre-mainnet assurance built into every project.",
    tags: ["Manual Audit", "Slither / MythX", "Reentrancy Analysis", "Fuzz Testing"],
    color: "#A78BFA",
    icon: "🛡️",
  },
  {
    title: "DeFi Protocol Architecture",
    desc: "AMMs, CLOB DEXes, lending markets, yield vaults, and stablecoin mechanisms — designed by engineers who have shipped DeFi at scale, not academic architects.",
    tags: ["AMM Design", "Lending Markets", "Yield Vaults", "Oracle Integrations"],
    color: "#F472B6",
    icon: "🏦",
  },
  {
    title: "Web3 Frontend & Wallets",
    desc: "React/Next.js dApps with full wallet integration — MetaMask, WalletConnect, Phantom, Coinbase Wallet. Gasless transactions, signature-based auth, and ENS resolution.",
    tags: ["wagmi / viem", "WalletConnect v2", "RainbowKit", "Gasless (ERC-2771)"],
    color: "#F4A623",
    icon: "🌐",
  },
  {
    title: "Indexing & Data Infrastructure",
    desc: "The Graph subgraphs, custom indexers, on-chain event pipelines, and analytics dashboards — ensuring your protocol's data is queryable, fast, and always in sync.",
    tags: ["The Graph", "Goldsky / Ponder", "On-chain Analytics", "Event Pipelines"],
    color: "#38BDF8",
    icon: "📊",
  },
];

function CapCard({ cap, delay }) {
  const cardRef = useRef(null);
  const revealRef = useScrollReveal(delay);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    card.addEventListener("pointermove", onMove);
    return () => card.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={(el) => { cardRef.current = el; revealRef.current = el; }}
      className="group relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default transition-all duration-400 hover:-translate-y-1"
      style={{ background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.12)" }}>

      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${cap.color}10, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg"
          style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}28`, color: cap.color }}>
          {cap.icon}
        </div>
        <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{cap.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {cap.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ color: `${cap.color}cc`, background: `${cap.color}0e`, border: `1px solid ${cap.color}22` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlockchainCapabilities() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 w-80 h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(52,211,153,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#34D399", textShadow: "0 0 10px rgba(52,211,153,0.4)", letterSpacing: "0.18em" }}>
            Technical Capabilities
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Full-Stack Blockchain{" "}
            <span style={{
              background: "linear-gradient(135deg, #34D399, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Engineering
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Protocol layer to front-end — one engineering team that ships the whole stack without handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((cap, i) => (
            <CapCard key={cap.title} cap={cap} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
