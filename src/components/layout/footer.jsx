import { ChevronUp, ArrowRight } from "lucide-react";
import CTAButton from "../shared/CTAButton";
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

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/corehives",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/corehives",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.262 5.636 5.902-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/corehives",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/corehives",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

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
  const scrollToTop = () => {
    const behavior =
      "scrollBehavior" in document.documentElement.style ? "smooth" : "auto";

    window.scrollTo({ top: 0, behavior });
    document.documentElement.scrollTo?.({ top: 0, behavior });
    document.body.scrollTo?.({ top: 0, behavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      <footer className="relative isolate z-10 w-full bg-transparent">
        {/* ── Scroll to top button ── */}
        <div
          className="pointer-events-none flex justify-center z-[9999]"
          style={{ position: "relative", zIndex: 9999, marginBottom: "-30px" }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto absolute left-1/2 top-0 z-[9999] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #07BEB8 50%, #ffff)",
              boxShadow:
                "0 8px 40px rgba(7,190,184,100%), 0 4px 12px rgba(0,129,142,100)",
            }}
          >
            <ChevronUp className="h-7 w-7 text-[#001925]" strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Outer card ── */}
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
          <div className="px-6 pt-20 pb-10 text-center sm:px-10 relative z-10">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
              Let's Build{" "}
              <span className="precision-gradient">What's Next.</span> Together.
            </h2>
            <p className="mt-3 text-xs text-white/40 sm:text-sm">
              Secure, scalable digital solutions designed to move your business
              forward.
            </p>
            <CTAButton href="/contact" className="mt-6 mb-10 w-fit">
              Hire a Developer
            </CTAButton>
          </div>

          {/* ── Nav Links Grid ── */}
          <div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-8 sm:grid-cols-5 sm:px-10 lg:px-14 mb-20 relative z-10"
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
            {/* Nav link columns */}
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

            {/* ── Social Icons Column ── */}
            <div>
              <h6
                className="mb-4 text-[0.65rem] font-bold tracking-widest"
                style={{ color: "#ffffff" }}
              >
                FOLLOW US
              </h6>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, href, path }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group flex items-center gap-2.5 text-xs text-white/70 transition-colors duration-200 hover:text-[#07BEB8]"
                    >
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-200 group-hover:border-[#07BEB8] group-hover:text-[#07BEB8]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="14"
                          height="14"
                        >
                          <path d={path} />
                        </svg>
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Giant Floating Logo ── */}
          <div
            className="relative flex items-end justify-center pb-0 px-2"
            style={{ overflow: "visible" }}
          >
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
                        fontSize: "clamp(4.5rem, 12vw, 20rem)",
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
