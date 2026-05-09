import { ChevronUp, ArrowRight } from "lucide-react";
import BgLeftContent from "../../assets/footer-bg-left.png";
import BgRightContent from "../../assets/footer-bg-right.png";

const navLinks = {
  "QUICK LINKS": ["Home", "Our Services", "Company", "Contacts"],
  "OUR SERVICES": [
    "Web & App Development",
    "Artificial Intelligence Solutions",
    "Tech Staff Outsourcing",
  ],
  COMPANY: ["Why CoreHives", "Our Approach", "Careers", "Partnerships"],
  INFORMATION: ["Privacy", "FAQ", "Cookie Policy", "Partners"],
};

const floatParams = [
  { dur: "5.2s", delay: "0s" },
  { dur: "4.7s", delay: "0.6s" },
  { dur: "6.1s", delay: "1.1s" },
  { dur: "5.5s", delay: "0.3s" },
  { dur: "4.4s", delay: "0.9s" },
  { dur: "6.3s", delay: "0.2s" },
  { dur: "5.0s", delay: "1.4s" },
  { dur: "4.8s", delay: "0.7s" },
  { dur: "5.7s", delay: "0.5s" },
];

const logoLetters = [
  {
    char: "C",
    color: "#fff",
    badge: "Cloud-Ready",
    badgePos: "top-left",
    mr: 10,
  },
  { char: "o", color: "#07BEB8", badge: null, mr: 10 },
  { char: "r", color: "#fff", badge: null, mr: 10 },
  {
    char: "e",
    color: "#07BEB8",
    badge: "Enterprise Grade",
    badgePos: "top-right",
    mr: 10,
  },
  { char: "H", color: "#fff", badge: null, mr: 10 },
  {
    char: "i",
    color: "#07BEB8",
    badge: "Future Focused",
    badgePos: "top-right",
    mr: 10,
  },
  { char: "v", color: "#fff", badge: null, mr: 10 },
  { char: "e", color: "#07BEB8", badge: null, mr: 10 },
  {
    char: "s",
    color: "#FFF",
    badge: "High Performance",
    badgePos: "top-right",
    mr: 0,
  },
];

const badgeStyle = {
  background: "rgba(7,190,184,0.12)",
  border: "1px solid rgba(7,190,184,0.35)",
  borderRadius: "999px",
  padding: "3px 10px",
  fontSize: "0.8rem",
  color: "#fff",
  whiteSpace: "nowrap",
  backdropFilter: "blur(6px)",
  position: "absolute",
  zIndex: 10,
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative w-full bg-transparent">
        {/* ── Scroll to top button — floats ABOVE the card ── */}
        <div
          className="flex justify-center"
          style={{ position: "relative", zIndex: 10, marginBottom: "-30px" }}
        >
          <button
            onClick={scrollToTop}
            className="absolute left-50% -top-10 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(180deg, #07BEB8, #33384B)",
              boxShadow:
                "0 8px 40px rgba(7,190,184,100%), 0 4px 12px rgba(0,129,142,100)",
            }}
          >
            <ChevronUp className="h-7 w-7 text-[#001925]" strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Outer dark bg card ── */}
        <div className="relative mx-auto w-full overflow-hidden">
          <img
            src={BgLeftContent}
            className="absolute w-1/2 z-0 top-7.5 opacity-90"
            alt=""
            loading="lazy"
          />
          <img
            src={BgRightContent}
            className="absolute w-1/2 -top-30 z-0 right-0 opacity-90"
            alt=""
            loading="lazy"
          />

          {/* ── Headline ── */}
          <div className="px-6 pt-20 pb-10 text-center sm:px-10">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
              Let's Build{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                What's Next.
              </span>{" "}
              Together.
            </h2>
            <p className="mt-3 text-xs text-white/40 sm:text-sm">
              Secure, scalable digital solutions designed to move your business
              forward.
            </p>

            {/* CTA */}
            <button
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(7,190,184,0.1)",
                border: "1px solid rgba(7,190,184,0.4)",
                boxShadow: "0 0 16px rgba(7,190,184,0.15)",
              }}
            >
              Hire a Developer
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ background: "#07BEB8", color: "#000" }}
              >
                <ArrowRight className="h-3 w-3" />
              </span>
            </button>
          </div>
          {/* ── Nav Links Grid ── */}
          <div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:px-10 lg:px-14 mb-20 "
            style={{
              paddingTop: "2rem",
              background:
                "linear-gradient(rgb(9 36 38 / 4%) 10%, rgb(16 39 41 / 4%) 10%)",
              borderRadius: "16px",
              borderTop: "1px solid rgb(0,102,113, 20%)",
              borderLeft: "1px solid rgb(0,102,113, 20%)",
              borderRight: "1px solid rgb(0,102,113, 20%)",
            }}
          >
            {Object.entries(navLinks).map(([heading, links]) => (
              <div key={heading}>
                <h6
                  className="mb-4 text-[0.65rem] font-bold tracking-widest"
                  style={{ color: "#ffffff" }}
                >
                  {heading}
                </h6>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-white transition-colors duration-200 hover:text-[#07BEB8]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* ── Giant Floating Logo ── */}
          <div
            className="relative flex items-end justify-center pb-0 px-2"
            style={{ overflow: "visible" }}
          >
            {/* subtle underwater shimmer layer */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{
                background:
                  "linear-gradient(to top, rgba(7,190,184,0.06) 0%, transparent 100%)",
              }}
            />

            <div className="flex items-end justify-center flex-wrap">
              {logoLetters.map((item, i) => {
                const { dur, delay } = floatParams[i];
                return (
                  <div
                    key={i}
                    className="relative"
                    style={{ marginRight: `${item.mr}px` }}
                  >
                    {item.badge && (
                      <div
                        style={{
                          ...(item.badgePos === "top-left"
                            ? { top: "0px", left: "-8px" }
                            : { top: "0px", right: "-8px" }),
                          ...badgeStyle,
                          animation: `badge-drift ${parseFloat(dur) + 0.8}s ease-in-out ${delay} infinite`,
                        }}
                      >
                        {item.badge}
                      </div>
                    )}

                    <span
                      className="select-none font-black leading-none"
                      style={{
                        display: "inline-block",
                        color: item.color,
                        fontSize: "clamp(10rem, 6vw, 10rem)",
                        lineHeight: 1,
                        letterSpacing: "10px",
                        animation: `float-${i} ${dur} ease-in-out ${delay} infinite`,
                        willChange: "transform",
                        fontWeight: "600",
                      }}
                    >
                      {item.char}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <p className="my-2 text-center text-xs text-white">
          © 2025 CoreHives.com | All rights reserved.
        </p>
      </footer>
    </>
  );
}
