import { ArrowRight, Calendar } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const trustItems = [
  "2-week trial sprint, no commitment",
  "72hr placement guarantee",
  "Senior engineers only",
  "Full IP ownership & NDAs",
];

export default function OutsourcingCTA() {
  const headRef  = useScrollReveal(60);
  const paraRef  = useScrollReveal(160);
  const ctaRef   = useScrollReveal(260);
  const trustRef = useScrollReveal(340);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(7,190,184,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#38BDF8" }} />
          <span className="text-xs font-medium tracking-widest text-white uppercase">Build Your Extended Team</span>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#38BDF8" }} />
        </div>

        <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Your Next Senior Engineer{" "}
          <span style={{
            background: "linear-gradient(135deg, #38BDF8, #07BEB8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Ships in 72 Hours
          </span>
        </h2>

        <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}>
          Tell us your stack, your team size, and what you're building.
          We'll have shortlisted profiles in your inbox within 48 hours.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#1e4a5e5e]">
            Get Shortlisted Profiles
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#38BDF8] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Calendar className="h-4 w-4" style={{ color: "#38BDF8" }} />
            Book a Team Brief Call
          </a>
        </div>

        <div ref={trustRef} className="flex flex-wrap justify-center gap-4">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#38BDF8" }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
