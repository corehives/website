import { Star } from "lucide-react";
import BGLeftContent from "../assets/bg-left-content.webp";
import BGRightContent from "../assets/bg-right-content.webp";

// — inline SVG badge for the "Clutch Awards" style cards —
function ClutchBadge({ label, sublabel, color = "#F4A623" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: "100%",
        height: "100%",
      }}
    >
      {/* crown icon */}
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
        <path d="M2 18L6 8L14 14L22 4L26 18H2Z" fill={color} opacity="0.9" />
        <rect x="2" y="18" width="24" height="3" rx="1.5" fill={color} />
      </svg>
      <span
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: color,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {label}
      </span>
      {sublabel && (
        <span
          style={{
            fontSize: 8,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            letterSpacing: "0.06em",
          }}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
}

function StarRow({ count = 5, color = "#00B67A" }) {
  return (
    <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill={color} stroke="none" />
      ))}
    </div>
  );
}

// Card wrapper with glowing border
function AwardCard({
  children,
  href = "#",
  borderColor = "rgba(244,166,35,0.45)",
  glowColor = "rgba(244,166,35,0.12)",
  style = {},
}) {
  const isExternalLink = href !== "#";

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      style={{
        borderRadius: 14,
        border: `1.5px solid ${borderColor}`,
        background: "rgba(8, 30, 28, 0.85)",
        boxShadow: `0 0 24px ${glowColor}, 0 8px 32px rgba(0,0,0,0.35)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 18px",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow = `0 0 40px ${glowColor}, 0 16px 48px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = `0 0 24px ${glowColor}, 0 8px 32px rgba(0,0,0,0.35)`;
      }}
    >
      {children}
    </a>
  );
}

export default function AwardsSection() {
  return (
    <section
      className="section-auto-render"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "90px 24px",
      }}
    >
      <img
        src={BGLeftContent}
        className="absolute z-0 -top-1/2 w-1/2 left-0 opacity-90"
        alt=""
      />
      <img
        src={BGRightContent}
        className="absolute z-0 -top-1/2 w-1/2 right-0 opacity-90"
        alt=""
      />
      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 800,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(7,190,184,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 20,
              padding: "6px 18px",
              borderRadius: 9999,
              background: "rgba(7,190,184,0.1)",
              border: "1px solid rgba(7,190,184,0.32)",
              color: "#FFF",
            }}
          >
            Endorsements
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 16px",
              lineHeight: 1.2,
              //   fontFamily: "'Georgia', serif",
            }}
          >
            Awards &amp;{" "}
            <span className="precision-gradient">
              Recognitions
            </span>
          </h2>

          <p
            style={{
              color: "#FFF",
              fontSize: 14,
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            We're proud to be recognized on trusted platforms, building credibility as we grow our track record of delivering results for clients worldwide.
          </p>
        </div>        {/* Row 1 — 3 cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {/* Trustpilot */}
          <AwardCard
            href="https://www.trustpilot.com/review/corehives.com"
            style={{
              flex: "1 1 260px",
              minWidth: 260,
              height: 130,
            }}
            borderColor="rgba(0,182,122,0.45)"
            glowColor="rgba(0,182,122,0.1)"
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  marginBottom: 8,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 0L12.94 6.58L20 7.64L15 12.42L16.18 19.51L10 16.27L3.82 19.51L5 12.42L0 7.64L7.06 6.58L10 0Z"
                    fill="#00B67A"
                  />
                </svg>

                <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Trustpilot
                </span>
              </div>

              <StarRow count={5} color="#FBBC04" />
            </div>
          </AwardCard>

          {/* GoodFirms */}
          <AwardCard
            href="https://www.goodfirms.co/company/corehives"
            style={{
              flex: "1 1 220px",
              minWidth: 220,
              height: 130,
            }}
            borderColor="rgba(213,164,61,0.45)"
            glowColor="rgba(213,164,61,0.08)"
          >
            <div style={{ textAlign: "center", width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                  {/* Left half (lighter gold) */}
                  <path
                    d="M 50,11 C 38,11 26,9 18,9 C 15,9 13.5,11 13.5,14 L 13.5,58 C 13.5,75 26,86 50,92 Z"
                    fill="#D5A43D"
                  />
                  {/* Right half (darker gold) */}
                  <path
                    d="M 50,11 C 62,11 74,9 82,9 C 85,9 86.5,11 86.5,14 L 86.5,58 C 86.5,75 74,86 50,92 Z"
                    fill="#BA8A2D"
                  />
                  {/* Star Shadow */}
                  <polygon
                    points="50,26 54.2,36.2 65.2,37.1 56.8,44.2 59.4,54.9 50,49.2 40.6,54.9 43.2,44.2 34.8,37.1 45.8,36.2"
                    fill="#8C6212"
                    transform="translate(1.5, 2)"
                  />
                  {/* White Star */}
                  <polygon
                    points="50,26 54.2,36.2 65.2,37.1 56.8,44.2 59.4,54.9 50,49.2 40.6,54.9 43.2,44.2 34.8,37.1 45.8,36.2"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>

              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#D5A43D",
                  textTransform: "uppercase",
                }}
              >
                GoodFirms
              </span>

            </div>
          </AwardCard>

          {/* Google Reviews */}
          <AwardCard
            href="https://g.page/r/Ccl1CDMeIfgIEBM/review"
            style={{
              flex: "1 1 300px",
              minWidth: 300,
              height: 130,
            }}
            borderColor="rgba(66,133,244,0.4)"
            glowColor="rgba(66,133,244,0.08)"
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: 6 }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  style={{ display: "inline-block" }}
                >
                  <path
                    d="M18 7.2C21.06 7.2 23.76 8.34 25.8 10.2L30.6 5.4C27.42 2.52 23.4 0.72 18 0.72C11.04 0.72 5.04 4.8 2.16 10.68L7.68 14.94C9.12 10.56 13.2 7.2 18 7.2Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M35.28 18.36C35.28 17.16 35.16 16.08 34.92 15.12H18V21.24H27.6C27.12 23.52 25.8 25.44 23.88 26.76L29.28 30.96C32.64 27.84 35.28 23.52 35.28 18.36Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M7.68 21.06C7.32 19.98 7.2 18.84 7.2 17.64C7.2 16.44 7.44 15.3 7.8 14.22L2.28 9.96C0.84 12.6 0 15.6 0 18.72C0 21.84 0.84 24.72 2.28 27.24L7.68 21.06Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M18 35.28C23.4 35.28 27.96 33.48 31.2 30.48L25.8 26.28C24.12 27.48 21.96 28.2 18 28.2C13.2 28.2 9.12 24.84 7.68 20.46L2.28 24.72C5.04 30.72 11.04 35.28 18 35.28Z"
                    fill="#34A853"
                  />
                </svg>
              </div>

              <span
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 17,
                  display: "block",
                  marginBottom: 5,
                }}
              >
                Google{" "}
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 400,
                    fontSize: 13,
                  }}
                >
                  Reviews
                </span>
              </span>
            </div>
          </AwardCard>
        </div>
      </div>
    </section>
  );
}
