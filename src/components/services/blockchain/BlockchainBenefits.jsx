import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import BgLeft from "../../../assets/bg-left-content.webp";

const stats = [
  { value: "240+",  label: "smart contracts deployed across EVM and Solana chains in production", color: "#34D399" },
  { value: "$180M+",label: "total value locked across DeFi protocols engineered by CoreHives",     color: "#07BEB8" },
  { value: "100%",  label: "of deployed contracts passed security audit with zero critical findings", color: "#A78BFA" },
  { value: "14+",   label: "blockchain networks and L2s actively supported in our engineering practice", color: "#F4A623" },
];

const benefits = [
  { title: "Security is not optional",     desc: "Every contract ships with full internal audit, fuzz testing, and static analysis. We don't deploy contracts we wouldn't stake our own tokens on." },
  { title: "Gas-optimised by default",      desc: "Storage layout, opcode efficiency, and batching strategies are baked into every design — not treated as a post-delivery optimisation pass." },
  { title: "Upgrade-aware architecture",    desc: "Proxy patterns, timelock governance, and emergency pause mechanisms designed in from day one — because protocols evolve." },
  { title: "14+ chains, one team",          desc: "EVM chains, Solana, Cosmos SDK, and more — without the coordination overhead of working with separate chain-specific specialists." },
  { title: "Full-stack, not protocol-only", desc: "From Solidity to React — front-end dApps, subgraphs, and wallet UX built by the same team that wrote the contracts." },
  { title: "Post-launch incident support",  desc: "30-day post-launch incident response included on every engagement. If something unexpected happens on-chain, we're already in the room." },
];

export default function BlockchainBenefits() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img src={BgLeft} alt="" aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-1/2 opacity-40 z-0" loading="lazy" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="w-full lg:w-[42%]">
            <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
              style={{ color: "#34D399", textShadow: "0 0 10px rgba(52,211,153,0.4)", letterSpacing: "0.18em" }}>
              Why CoreHives Blockchain
            </p>
            <h2 ref={headRef} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
              Production Track Record,{" "}
              <span style={{
                background: "linear-gradient(135deg, #34D399, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                On-Chain
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const ref = useScrollReveal(i * 80);
                return (
                  <div ref={ref} key={stat.value} className="rounded-2xl p-5"
                    style={{ background: `${stat.color}07`, border: `1px solid ${stat.color}22` }}>
                    <span className="block text-2xl sm:text-3xl font-extrabold mb-2 leading-none"
                      style={{ background: stat.color, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {stat.value}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-[58%]">
            <div className="rounded-2xl p-7 sm:p-8"
              style={{ background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.12)" }}>
              <h3 className="text-xl font-bold text-white mb-6">
                What CoreHives Blockchain Engineering Delivers
              </h3>
              <div className="flex flex-col gap-5">
                {benefits.map((item, i) => {
                  const ref = useScrollReveal(i * 70);
                  return (
                    <div ref={ref} key={item.title} className="flex gap-4 items-start group">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#34D399]"
                        style={{ color: "rgba(52,211,153,0.5)" }} strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#8ca0b0" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
