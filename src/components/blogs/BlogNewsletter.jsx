import { useState } from "react";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const AVATARS = ["EU", "SM", "AK", "HR", "OF"];
const AVATAR_COLORS = [
  "linear-gradient(135deg,#07BEB8,#4eecea)",
  "linear-gradient(135deg,#818cf8,#c4b5fd)",
  "linear-gradient(135deg,#ec4899,#f9a8d4)",
  "linear-gradient(135deg,#34d399,#6ee7b7)",
  "linear-gradient(135deg,#f59e0b,#fcd34d)",
];

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cardRef  = useScrollReveal();
  const textRef  = useScrollReveal(100);
  const formRef  = useScrollReveal(200);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      style={{
        background: "#020617",
        padding: "0 clamp(20px, 5vw, 40px) clamp(80px, 14vh, 150px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(7,190,184,0.18) 30%, rgba(7,190,184,0.18) 70%, transparent 100%)",
            marginBottom: "clamp(48px, 8vh, 88px)",
          }}
        />

        {/* Card */}
        <div
          ref={cardRef}
          style={{
            borderRadius: 28,
            border: "1px solid rgba(7,190,184,0.1)",
            background:
              "linear-gradient(145deg, #040d1a 0%, #041f1e 60%, #040d1a 100%)",
            padding: "clamp(44px, 7vw, 80px) clamp(28px, 6vw, 80px)",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
          className="nl-card"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-50%",
              left: "-10%",
              width: "60%",
              height: "200%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(7,190,184,0.08) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Dot grid */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(7,190,184,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {/* Corner accent lines */}
          {[
            { top: 0, left: 0, borderTop: true, borderLeft: true, r: "28px 0 0 0" },
            { top: 0, right: 0, borderTop: true, borderRight: true, r: "0 28px 0 0" },
            { bottom: 0, left: 0, borderBottom: true, borderLeft: true, r: "0 0 0 28px" },
            { bottom: 0, right: 0, borderBottom: true, borderRight: true, r: "0 0 28px 0" },
          ].map((corner, i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position: "absolute",
                width: 48,
                height: 48,
                ...(corner.top !== undefined ? { top: corner.top } : {}),
                ...(corner.bottom !== undefined ? { bottom: corner.bottom } : {}),
                ...(corner.left !== undefined ? { left: corner.left } : {}),
                ...(corner.right !== undefined ? { right: corner.right } : {}),
                borderTop: corner.borderTop ? "1px solid rgba(7,190,184,0.25)" : undefined,
                borderBottom: corner.borderBottom ? "1px solid rgba(7,190,184,0.25)" : undefined,
                borderLeft: corner.borderLeft ? "1px solid rgba(7,190,184,0.25)" : undefined,
                borderRight: corner.borderRight ? "1px solid rgba(7,190,184,0.25)" : undefined,
                borderRadius: corner.r,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Left: copy */}
          <div
            ref={textRef}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Stacked avatars */}
              <div style={{ display: "flex" }}>
                {AVATARS.map((init, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: AVATAR_COLORS[i],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 800,
                      color: "#020617",
                      border: "2px solid #040d1a",
                      marginLeft: i === 0 ? 0 : -8,
                      zIndex: AVATARS.length - i,
                      position: "relative",
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                }}
              >
                Join{" "}
                <span style={{ color: "#07BEB8", fontWeight: 700 }}>2,000+</span>{" "}
                monthly readers
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              Stay ahead of
              <br />
              <span
             className="precision-gradient"
              >
                the curve
              </span>
            </h2>

            {/* Body */}
            <p
              style={{
                margin: 0,
                fontSize: "clamp(13px, 1.3vw, 15px)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 340,
              }}
            >
              The best articles on AI, web development, design, and digital strategy —
              straight to your inbox every two weeks.
            </p>

            {/* Perks */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Curated picks from the CoreHives team",
                "No spam, ever — unsubscribe in one click",
              ].map((perk) => (
                <div
                  key={perk}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#07BEB8",
                      boxShadow: "0 0 6px #07BEB8",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.38)",
                    }}
                  >
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            ref={formRef}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  padding: "40px 24px",
                  borderRadius: 20,
                  border: "1px solid rgba(7,190,184,0.2)",
                  background: "rgba(7,190,184,0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(7,190,184,0.1)",
                    border: "1px solid rgba(7,190,184,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  ✓
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#07BEB8",
                    }}
                  >
                    You're in!
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Welcome to the CoreHives Journal.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  Your email address
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      borderRadius: 50,
                      border: `1px solid ${focused ? "rgba(7,190,184,0.45)" : "rgba(255,255,255,0.09)"}`,
                      background: focused ? "rgba(7,190,184,0.04)" : "rgba(255,255,255,0.03)",
                      boxShadow: focused ? "0 0 0 4px rgba(7,190,184,0.06)" : "none",
                      transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
                      overflow: "hidden",
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="you@company.com"
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        padding: "14px 18px",
                        fontSize: 15,
                        color: "#ffffff",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "14px 24px",
                      borderRadius: 50,
                      border: "none",
                      background: "linear-gradient(135deg, #07BEB8 0%, #4eecea 100%)",
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 800,
                      cursor: "pointer",
                      letterSpacing: "0.02em",
                      transition: "opacity 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.88";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Subscribe to the Journal
                    <ArrowRight size={15} />
                  </button>
                </form>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                  }}
                >
                  Free forever · No spam · Unsubscribe any time
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.22); }
        @media (max-width: 680px) {
          .nl-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
