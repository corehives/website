import { useRef, useEffect } from "react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const capabilities = [
  {
    title: "Full-Stack Web Engineering",
    desc: "React, Next.js, Node.js, Python, Go — frontend through backend. Senior engineers who own entire feature slices, not just tickets.",
    tags: ["React / Next.js", "Node / Python / Go", "PostgreSQL / Redis", "REST & GraphQL"],
    color: "#38BDF8",
    icon: "⚡",
  },
  {
    title: "Mobile Development",
    desc: "Native iOS & Android, React Native, Flutter. Engineers who ship to the App Store and Play Store, not just simulators.",
    tags: ["React Native", "Flutter", "Swift / Kotlin", "CI/CD for Mobile"],
    color: "#07BEB8",
    icon: "📱",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, GCP, Azure — infrastructure that scales. CI/CD pipelines, Kubernetes orchestration, observability, and zero-downtime deploys.",
    tags: ["AWS / GCP / Azure", "Kubernetes / Docker", "Terraform / Pulumi", "Observability"],
    color: "#A78BFA",
    icon: "☁️",
  },
  {
    title: "AI & ML Engineering",
    desc: "Production-grade AI — not demos. LLM integration, fine-tuning, RAG pipelines, computer vision, and MLOps infrastructure.",
    tags: ["LLM Integration", "RAG Pipelines", "PyTorch / TF", "ML Infra / MLflow"],
    color: "#F472B6",
    icon: "🤖",
  },
  {
    title: "Blockchain Engineering",
    desc: "Smart contract development, DeFi protocols, NFT infrastructure, wallet integrations, and cross-chain bridge engineering.",
    tags: ["Solidity / Rust", "EVM / Solana", "DeFi Protocols", "Web3.js / Ethers.js"],
    color: "#F4A623",
    icon: "⛓️",
  },
  {
    title: "QA & Test Engineering",
    desc: "End-to-end quality assurance — automation frameworks, performance testing, security scanning, and regression suites that ship with confidence.",
    tags: ["Playwright / Cypress", "Load & Perf Testing", "Security Scanning", "CI Integration"],
    color: "#34D399",
    icon: "✅",
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
      style={{ background: "rgba(56,189,248,0.03)", border: "1px solid rgba(56,189,248,0.12)" }}>

      {/* Pointer glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), ${cap.color}10, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}28` }}>
          {cap.icon}
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:transition-colors duration-300"
          style={{}}>
          {cap.title}
        </h3>
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

export default function OutsourcingCapabilities() {
  const labelRef = useScrollReveal(0);
  const headRef  = useScrollReveal(100);
  const paraRef  = useScrollReveal(180);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 w-80 h-[500px] z-0"
        style={{ background: "radial-gradient(ellipse at right, rgba(56,189,248,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p ref={labelRef} className="text-xs uppercase font-medium mb-3"
            style={{ color: "#38BDF8", textShadow: "0 0 10px rgba(56,189,248,0.4)", letterSpacing: "0.18em" }}>
            Engineering Capabilities
          </p>
          <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Every Skill You Need,{" "}
            <span style={{
              background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Ready to Deploy
            </span>
          </h2>
          <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}>
            Senior-level specialists across every modern stack. No generalists, no juniors.
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
