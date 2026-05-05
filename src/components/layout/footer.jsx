import { ChevronUp, ArrowRight } from "lucide-react";

const floatKeyframes = `
  @keyframes float-0 {
    0%,100% { transform: translateY(0px)   rotate(-20deg) scaleX(1);   }
    30%      { transform: translateY(-18px) rotate(-17deg) scaleX(1.02); }
    60%      { transform: translateY(-8px)  rotate(-22deg) scaleX(0.99); }
  }
  @keyframes float-1 {
    0%,100% { transform: translateY(0px)   rotate(-10deg) scaleX(1);   }
    40%      { transform: translateY(-22px) rotate(-7deg)  scaleX(1.01); }
    70%      { transform: translateY(-10px) rotate(-13deg) scaleX(0.98); }
  }
  @keyframes float-2 {
    0%,100% { transform: translateY(0px)   rotate(14deg)  scaleX(1);   }
    25%      { transform: translateY(-14px) rotate(17deg)  scaleX(1.02); }
    65%      { transform: translateY(-6px)  rotate(11deg)  scaleX(0.99); }
  }
  @keyframes float-3 {
    0%,100% { transform: translateY(0px)   rotate(10deg)  scaleX(1);   }
    35%      { transform: translateY(-20px) rotate(13deg)  scaleX(1.01); }
    75%      { transform: translateY(-9px)  rotate(7deg)   scaleX(0.98); }
  }
  @keyframes float-4 {
    0%,100% { transform: translateY(0px)   rotate(-6deg)  scaleX(1);   }
    45%      { transform: translateY(-16px) rotate(-3deg)  scaleX(1.02); }
    80%      { transform: translateY(-7px)  rotate(-9deg)  scaleX(0.99); }
  }
  @keyframes float-5 {
    0%,100% { transform: translateY(0px)   rotate(10deg)  scaleX(1);   }
    20%      { transform: translateY(-24px) rotate(13deg)  scaleX(1.01); }
    55%      { transform: translateY(-11px) rotate(7deg)   scaleX(0.98); }
  }
  @keyframes float-6 {
    0%,100% { transform: translateY(0px)   rotate(-5deg)  scaleX(1);   }
    50%      { transform: translateY(-19px) rotate(-2deg)  scaleX(1.02); }
    85%      { transform: translateY(-8px)  rotate(-8deg)  scaleX(0.99); }
  }
  @keyframes float-7 {
    0%,100% { transform: translateY(0px)   rotate(6deg)   scaleX(1);   }
    30%      { transform: translateY(-15px) rotate(9deg)   scaleX(1.01); }
    70%      { transform: translateY(-6px)  rotate(3deg)   scaleX(0.99); }
  }
  @keyframes float-8 {
    0%,100% { transform: translateY(0px)   rotate(-9deg)  scaleX(1);   }
    40%      { transform: translateY(-21px) rotate(-6deg)  scaleX(1.02); }
    75%      { transform: translateY(-10px) rotate(-12deg) scaleX(0.98); }
  }
  @keyframes badge-drift {
    0%,100% { transform: translateY(0px) rotate(-3deg); opacity: 0.9; }
    50%      { transform: translateY(-6px) rotate(2deg); opacity: 1;   }
  }
`;

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
    color: "#fff",
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
    color: "#07BEB8",
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
  fontSize: "0.6rem",
  color: "#07BEB8",
  whiteSpace: "nowrap",
  backdropFilter: "blur(6px)",
  position: "absolute",
  zIndex: 10,
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{floatKeyframes}</style>

      <footer className="relative w-full bg-transparent px-5">
        {/* ── Scroll to top button — floats ABOVE the card ── */}
        <div
          className="flex justify-center"
          style={{ position: "relative", zIndex: 10, marginBottom: "-30px" }}
        >
          <button
            onClick={scrollToTop}
            className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #07BEB8, #00818E)",
              boxShadow:
                "0 8px 40px rgba(7,190,184,100%), 0 4px 12px rgba(0,129,142,100)",
            }}
          >
            <ChevronUp className="h-7 w-7 text-[#001925]" strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Outer dark bg card ── */}
        <div
          className="relative mx-auto w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, rgb(4 185 184 / 35%) 10%, #010e0e 30%, #021510 70%)",
            borderRadius: "45px",
            border: "1px solid rgba(7,190,184,0.18)",
            boxShadow: "0 0 80px rgba(7,190,184,0.08)",
          }}
        >
          {/* Decorative corner arcs */}
          <div
            className="pointer-events-none absolute left-4 top-16 w-20 h-20 sm:w-28 sm:h-28"
            style={{
              border: "1px solid rgba(7,190,184,0.15)",
              borderRadius: "50%",
              opacity: 0.5,
            }}
          />
          <div
            className="pointer-events-none absolute right-4 top-16 w-20 h-20 sm:w-28 sm:h-28"
            style={{
              border: "1px solid rgba(7,190,184,0.15)",
              borderRadius: "50%",
              opacity: 0.5,
            }}
          />

          {/* Dot accents */}
          <div
            className="pointer-events-none absolute left-10 top-[38%] w-2 h-2 rounded-full"
            style={{ background: "#07BEB8", boxShadow: "0 0 8px #07BEB8" }}
          />
          <div
            className="pointer-events-none absolute right-10 top-[38%] w-2 h-2 rounded-full"
            style={{ background: "#07BEB8", boxShadow: "0 0 8px #07BEB8" }}
          />

          {/* ── Nav Links Grid ── */}
          <div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:px-10 lg:px-14 mt-20 "
            style={{
              paddingTop: "2rem",
              background: "linear-gradient(rgb(9 36 38 / 44%) 10%, rgb(16 39 41 / 34%) 10%)",
              borderRadius: "16px",
              border: "1px solid rgb(0,102,113,45%)",
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
                        className="text-xs text-white/50 transition-colors duration-200 hover:text-[#07BEB8]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div
            className="mx-6 sm:mx-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          />

          {/* ── Headline ── */}
          <div className="px-6 py-10 text-center sm:px-10">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Let's Build <span style={{ color: "#07BEB8" }}>What's Next.</span>{" "}
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
                            ? { top: "12px", left: "-8px" }
                            : { top: "12px", right: "-8px" }),
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
                        fontSize: "clamp(9rem, 10vw, 10rem)",
                        lineHeight: 1,
                        animation: `float-${i} ${dur} ease-in-out ${delay} infinite`,
                        willChange: "transform",
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
        <p className="mt-5 text-center text-xs text-white mb-5">
          © 2026 CoreHives.com | All rights reserved.
        </p>
      </footer>
    </>
  );
}
