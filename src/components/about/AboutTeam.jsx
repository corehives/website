import zainImg from "../../assets/founders/zain-haider.jpg";
import hanzalahImg from "../../assets/founders/hanzalah.jpg";
import ishtiaqImg from "../../assets/founders/ishtiaq-ahmed.jpg";

const founders = [
  {
    name: "Hanzalah",
    role: "CTO - Co-Founder",
    position: "Left",
    image: hanzalahImg,
    alt: "Hanzalah - CTO & Co-Founder of CoreHives",
  },
  {
    name: "Zain Haider",
    role: "CEO - Co-Founder",
    position: "Center",
    image: zainImg,
    alt: "Zain Haider - CEO & Co-Founder of CoreHives",
  },
  {
    name: "Ishtiaq Ahmed",
    role: "COO - Co-Founder",
    position: "Right",
    image: ishtiaqImg,
    alt: "Ishtiaq Ahmed - COO & Co-Founder of CoreHives",
  },
];

export default function AboutTeam() {
  return (
    <section
      aria-label="CoreHives Leadership"
      className="relative w-full overflow-hidden bg-[#000405] py-20 px-4 sm:px-6 lg:py-28 border-t border-white/5"
    >
      {/* ── Subtle Background Mesh Glows ── */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 w-[450px] h-[450px] z-0 opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 w-[450px] h-[450px] z-0 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* ── Section Header (matching reference layout) ── */}
        <div className="mb-12 sm:mb-16">
          <span className="inline-block text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/[0.06]">
            Leadership
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto mt-2">
            The People Steering <span className="precision-gradient">CoreHives</span>
          </h2>

          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The visionary minds shaping our culture, engineering standards, and
            client partnerships to deliver high-impact digital solutions.
          </p>
        </div>

        {/* ── Founders 3-Card Grid (Left: Hanzalah | Center: Zain Haider | Right: Ishtiaq Ahmed) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] border border-white/10 bg-[#031111]/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#07BEB8]/50 hover:shadow-[0_0_35px_rgba(7,190,184,0.22)] aspect-[3/4] sm:min-h-[460px] lg:min-h-[500px]"
            >
              {/* Founder Portrait Photo */}
              <img
                src={founder.image}
                alt={founder.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Dark Gradient for crisp text readability */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000405] via-[#000405]/80 via-40% to-transparent transition-opacity duration-300 group-hover:via-[#000405]/85"
                aria-hidden="true"
              />

              {/* Founder Information (Name, Role, Teal Accent Line) */}
              <div className="relative z-10 p-6 sm:p-7 text-left">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors duration-200">
                  {founder.name}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide text-white/70">
                  {founder.role}
                </p>

                {/* Bottom Accent Bar in CoreHives signature teal */}
                <div
                  className="mt-3.5 h-1 w-10 rounded-full bg-[#07BEB8] shadow-[0_0_10px_#07BEB8] transition-all duration-400 group-hover:w-16"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
