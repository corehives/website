import { ArrowRight, Calendar, Film } from "lucide-react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const trustItems = [
  "Free creative brief session",
  "Script writing included",
  "2 revision rounds standard",
  "Source files on final delivery",
];

export default function IllustrationCTA() {
  const headRef  = useScrollReveal(60);
  const paraRef  = useScrollReveal(160);
  const ctaRef   = useScrollReveal(260);
  const trustRef = useScrollReveal(340);

  return (
    <section className="section-auto-render relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.11) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full z-0"
        style={{ background: "radial-gradient(ellipse, rgba(244,114,182,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.3)" }}>
          <Film className="h-6 w-6" style={{ color: "#A78BFA" }} strokeWidth={1.5} />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#A78BFA" }} />
          <span className="text-xs font-medium tracking-widest text-white uppercase">Start a Creative Project</span>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#A78BFA" }} />
        </div>

        <h2 ref={headRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Your Story Deserves{" "}
          <span style={{
            background: "linear-gradient(135deg, #A78BFA, #07BEB8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            to Be Seen
          </span>
        </h2>

        <p ref={paraRef} className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "#8ca0b0" }}>
          Whether you need a single Lottie animation or a complete motion brand system,
          our creative team is ready to bring your vision to life with precision and artistry.
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]">
            Start a Creative Project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform group-hover:scale-105">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Calendar className="h-4 w-4" style={{ color: "#A78BFA" }} />
            Book a Free Brief Session
          </a>
        </div>

        <div ref={trustRef} className="flex flex-wrap justify-center gap-4">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#A78BFA" }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
