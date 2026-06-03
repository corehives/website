import { ArrowRight, CheckCircle2 } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";
import CTAButton from "../../shared/CTAButton";

const nodes = [
  { x: 50, y: 20, label: "Smart Contract", color: "#34D399" },
  { x: 20, y: 55, label: "DeFi Protocol",  color: "#07BEB8" },
  { x: 80, y: 55, label: "NFT Platform",   color: "#A78BFA" },
  { x: 35, y: 85, label: "Web3 dApp",      color: "#F4A623" },
  { x: 65, y: 85, label: "DAO Governance", color: "#38BDF8" },
];

const metrics = [
  { label: "Smart Contracts Audited", value: "240+", color: "#34D399" },
  { label: "DeFi TVL Managed", value: "$180M+", color: "#07BEB8" },
  { label: "Chains Supported", value: "14+", color: "#A78BFA" },
  { label: "Security Audits Passed", value: "100%", color: "#F4A623" },
];

const pills = [
  "Solidity + Rust expertise",
  "Full-stack Web3 builds",
  "Security-first development",
];

export default function BlockchainHero() {
  const badgeRef = useScrollReveal(0);
  const headRef  = useScrollReveal(80);
  const subRef   = useScrollReveal(160);
  const ctaRef   = useScrollReveal(240);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 65%)" }} />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(7,190,184,0.05) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

          {/* Left: Copy */}
          <div className="w-full lg:w-[52%]">
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "#34D399" }} />
              <span className="text-xs font-medium tracking-widest text-white uppercase">Blockchain Development</span>
            </div>

            <h1 ref={headRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Build on{" "}
              <span style={{
                background: "linear-gradient(135deg, #34D399, #07BEB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Chain
              </span>
              <br />
              <span className="text-white/70">Ship With Confidence</span>
            </h1>

            <p ref={subRef} className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#8ca0b0" }}>
              From smart contract architecture to full-stack dApp development — CoreHives engineers
              bring production-grade blockchain expertise to every layer of your protocol.
              Security-first, gas-optimised, battle-tested.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-8">
              <CTAButton href="/contact">
                Start Your Blockchain Project
              </CTAButton>
              <CTAButton href="#blockchain-process">
                See Our Process
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-4">
              {pills.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#34D399" }} strokeWidth={2} />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Blockchain network visual */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.16)" }}>

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: "1px solid rgba(52,211,153,0.1)", background: "rgba(52,211,153,0.04)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#34D399" }} />
                    <span className="text-xs font-bold text-white tracking-wide">Protocol Architecture</span>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                    style={{ color: "#34D399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                    EVM Compatible
                  </span>
                </div>

                {/* Network node graph */}
                <div className="relative h-48 mx-4 mt-4" style={{ background: "rgba(0,0,0,0.2)", borderRadius: "12px", border: "1px solid rgba(52,211,153,0.08)" }}>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Connection lines */}
                    {nodes.slice(1).map((node, i) => (
                      <line key={i}
                        x1={nodes[0].x} y1={nodes[0].y}
                        x2={node.x} y2={node.y}
                        stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" />
                    ))}
                    <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[3].x} y2={nodes[3].y} stroke="rgba(7,190,184,0.15)" strokeWidth="0.5" />
                    <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[4].x} y2={nodes[4].y} stroke="rgba(167,139,250,0.15)" strokeWidth="0.5" />
                    {/* Nodes */}
                    {nodes.map((node, i) => (
                      <g key={i}>
                        <circle cx={node.x} cy={node.y} r="4" fill={`${node.color}20`} stroke={node.color} strokeWidth="0.8" />
                        <circle cx={node.x} cy={node.y} r="2" fill={node.color} opacity="0.7" />
                      </g>
                    ))}
                  </svg>
                  {/* Node labels */}
                  {nodes.map((node, i) => (
                    <div key={i} className="absolute text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: i === 0 ? "translate(-50%, -200%)" : i % 2 === 0 ? "translate(10%, -50%)" : "translate(-110%, -50%)",
                        color: node.color,
                        background: `${node.color}15`,
                        border: `1px solid ${node.color}30`,
                        whiteSpace: "nowrap",
                      }}>
                      {node.label}
                    </div>
                  ))}
                </div>

                {/* Metric pills */}
                <div className="grid grid-cols-2 gap-2.5 p-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-xl px-4 py-3"
                      style={{ background: `${m.color}08`, border: `1px solid ${m.color}20` }}>
                      <span className="block text-lg font-extrabold leading-none mb-1" style={{ color: m.color }}>{m.value}</span>
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(52,211,153,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(52,211,153,0.12)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#34D399" }}>240+</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>contracts deployed</span>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 hidden sm:block"
                style={{ background: "rgba(5,15,22,0.9)", border: "1px solid rgba(7,190,184,0.35)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(7,190,184,0.10)" }}>
                <span className="block text-lg font-extrabold" style={{ color: "#07BEB8" }}>$180M+</span>
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>TVL secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
