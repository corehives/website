import useScrollReveal from "../../hooks/useScrollReveal";
import CTAButton from "../shared/CTAButton";
import BgRight from "../../assets/bg-right-content.webp";

const team = [
  {
    name: "Ahmad Raza",
    role: "Co-Founder & CEO",
    bio: "Product strategist and engineering lead with 10+ years building scalable SaaS platforms. Passionate about making enterprise tech accessible.",
    initials: "AR",
    color: "#07BEB8",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    bio: "Full-stack architect specializing in cloud-native systems and AI integration. Previously at Deloitte Digital and two Y Combinator startups.",
    initials: "SM",
    color: "#5B8BFF",
  },
  {
    name: "Umar Farooq",
    role: "Head of Design",
    bio: "UX/UI lead with a decade of experience crafting digital products for Fortune 500s and growth-stage startups across 12 industries.",
    initials: "UF",
    color: "#A78BFA",
  },
  {
    name: "David Chen",
    role: "Lead AI Engineer",
    bio: "Machine learning specialist with deep expertise in NLP, computer vision, and predictive analytics. MSc in AI from Carnegie Mellon.",
    initials: "DC",
    color: "#34D399",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Head of Client Success",
    bio: "Dedicated to turning client goals into measurable outcomes. Over 80 digital transformation projects delivered across MENA and Europe.",
    initials: "FH",
    color: "#FB923C",
  },
  {
    name: "Marcus Webb",
    role: "Blockchain Architect",
    bio: "Web3 and DeFi specialist who has designed token economies, smart contract systems, and enterprise blockchain deployments across 3 continents.",
    initials: "MW",
    color: "#F472B6",
  },
];

function TeamCard({ member, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(7,190,184,0.14)",
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
        style={{
          boxShadow: "0 0 30px rgba(7,190,184,0.12), inset 0 0 20px rgba(7,190,184,0.04)",
          border: "1px solid rgba(7,190,184,0.25)",
          borderRadius: "16px",
        }}
      />

      {/* Avatar area */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${member.color}18, rgba(7,190,184,0.06))`,
          borderBottom: "1px solid rgba(7,190,184,0.1)",
        }}
      >
        {/* Decorative rings */}
        <div
          className="absolute w-40 h-40 rounded-full opacity-10"
          style={{ border: `1px solid ${member.color}` }}
        />
        <div
          className="absolute w-28 h-28 rounded-full opacity-15"
          style={{ border: `1px solid ${member.color}` }}
        />

        {/* Avatar circle */}
        <div
          className="relative w-20 h-20 rounded-full flex items-center justify-center z-10 transition-transform duration-400 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
            border: `2px solid ${member.color}60`,
            boxShadow: `0 0 24px ${member.color}30`,
          }}
        >
          <span
            className="text-xl font-extrabold"
            style={{ color: member.color }}
          >
            {member.initials}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-[#07BEB8] transition-colors duration-300">
          {member.name}
        </h3>
        <span
          className="text-xs font-medium mb-3"
          style={{ color: member.color }}
        >
          {member.role}
        </span>
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#8ca0b0" }}>
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-3 mt-auto">
          <a
            href="#"
            aria-label={`${member.name} LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#07BEB8] hover:text-[#07BEB8]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label={`${member.name} X / Twitter`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#07BEB8] hover:text-[#07BEB8]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.262 5.636 5.902-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  const labelRef = useScrollReveal(0);
  const headRef = useScrollReveal(120);
  const paraRef = useScrollReveal(220);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <img
        src={BgRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 opacity-50 z-0"
        loading="lazy"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            ref={labelRef}
            className="text-xs uppercase font-medium mb-3"
            style={{
              color: "#07BEB8",
              textShadow: "0 0 10px rgba(7,190,184,0.5)",
              letterSpacing: "0.18em",
            }}
          >
            The Humans Behind the Hive
          </p>
          <h2
            ref={headRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Meet the{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team
            </span>
          </h2>
          <p
            ref={paraRef}
            className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "#8ca0b0" }}
          >
            Senior engineers, strategic designers, and client success experts —
            each bringing deep domain expertise and a shared obsession with
            quality.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 80} />
          ))}
        </div>

        {/* Culture note */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(7,190,184,0.04)",
            border: "1px solid rgba(7,190,184,0.14)",
          }}
        >
          <p
            className="text-base sm:text-lg font-medium text-white mb-1"
          >
            Interested in joining the Hive?
          </p>
          <p className="text-sm mb-5" style={{ color: "#8ca0b0" }}>
            We're always looking for exceptional engineers, designers, and strategists
            who raise the bar.
          </p>
          <CTAButton href="/contact">
            View Open Positions
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
