import useScrollReveal from "../../../hooks/useScrollReveal";

const pillars = [
  {
    icon: "📜",
    title: "Smart Contract Development",
    subtitle: "From logic to deployment",
    desc: "Full-lifecycle smart contract engineering — architecture, Solidity/Rust development, gas optimisation, and multi-stage security auditing before any deployment to mainnet.",
    highlights: ["Solidity & Rust", "Gas optimisation", "Security audit included", "Multi-sig & proxy patterns"],
    color: "#34D399",
    best: "EVM & Solana protocols",
  },
  {
    icon: "🏦",
    title: "DeFi Protocol Engineering",
    subtitle: "Complex finance, engineered precisely",
    desc: "AMMs, lending protocols, yield optimisers, and liquidity management systems — built with the rigour that billions of dollars in TVL demands. No shortcuts, no copy-paste forks.",
    highlights: ["AMM & DEX architecture", "Lending & yield protocols", "Liquidity management", "Oracle integrations"],
    color: "#07BEB8",
    best: "DeFi product teams",
  },
  {
    icon: "🖼️",
    title: "NFT & Web3 Platforms",
    subtitle: "Marketplaces, games, and communities",
    desc: "Full-stack NFT platforms — smart contracts, minting mechanics, marketplace infrastructure, and Web3-native front ends with wallet integrations and gasless transaction flows.",
    highlights: ["ERC-721 / ERC-1155", "Marketplace contracts", "Royalty enforcement", "Gasless meta-transactions"],
    color: "#A78BFA",
    best: "NFT projects & games",
  },
  {
    icon: "🧭",
    title: "Blockchain Consulting",
    subtitle: "Strategy before you build",
    desc: "Chain selection, tokenomics design, governance architecture, and regulatory positioning — strategic guidance from engineers who have shipped production protocols, not just whitepapers.",
    highlights: ["Chain selection advisory", "Tokenomics design", "DAO governance architecture", "Regulatory positioning"],
    color: "#F4A623",
    best: "Pre-build strategy",
  },
];

export default function BlockchainOverview() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] z-0"
        style={{ background: "radial-gradient(ellipse, rgba(52,211,153,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#34D399", textShadow: "0 0 10px rgba(52,211,153,0.4)", letterSpacing: "0.18em" }}>
            Service Pillars
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Every Layer of{" "}
            <span style={{
              background: "linear-gradient(135deg, #34D399, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Web3 Infrastructure
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            From protocol architecture to front-end wallet integrations — a complete blockchain
            engineering practice under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => {
            const ref = useScrollReveal(i * 90);
            return (
              <div ref={ref} key={pillar.title}
                className="group relative rounded-2xl p-6 flex flex-col transition-all duration-400 hover:-translate-y-1.5"
                style={{ background: `${pillar.color}05`, border: `1px solid ${pillar.color}18` }}>

                <div className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${pillar.color}10`, border: `1px solid ${pillar.color}25` }}>
                  {pillar.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <span className="text-xs italic mb-3" style={{ color: pillar.color }}>{pillar.subtitle}</span>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#8ca0b0" }}>{pillar.desc}</p>

                <div className="flex flex-col gap-1.5 mb-4">
                  {pillar.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4" style={{ borderTop: `1px solid ${pillar.color}18` }}>
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Best for</span>
                  <span className="block text-xs font-semibold mt-1" style={{ color: pillar.color }}>{pillar.best}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
