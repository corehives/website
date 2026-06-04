import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CAT_COLORS } from "../../data/blogs";
import useScrollReveal from "../../hooks/useScrollReveal";

// Inline SVG icons for Twitter/X and LinkedIn (lucide versions vary by installed version)
function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function BlogDetailHero({ post }) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const badgeRef = useScrollReveal();
  const titleRef = useScrollReveal(60);
  const metaRef  = useScrollReveal(130);

  const c = CAT_COLORS[post.category] || CAT_COLORS["AI & ML"];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = (platform) => {
    const url   = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const urls  = {
      twitter:  `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#020617",
        paddingTop: "clamp(120px, 18vh, 180px)",
        paddingBottom: "clamp(60px, 10vh, 100px)",
      }}
    >
      {/* Category-tinted radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(900px, 95vw)",
          height: "65vh",
          background: `radial-gradient(ellipse 65% 70% at 50% 0%, ${c.text}18 0%, ${c.text}06 50%, transparent 72%)`,
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(7,190,184,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 40px)",
        }}
      >
        {/* Back navigation */}
        <button
          onClick={() => navigate("/blogs")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 44,
            padding: "8px 18px 8px 12px",
            borderRadius: 99,
            border: "1px solid rgba(255,255,255,0.09)",
            background: "rgba(255,255,255,0.03)",
            color: "rgba(255,255,255,0.45)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.02em",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
            e.currentTarget.style.color = "rgba(255,255,255,0.45)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }}
        >
          <ArrowLeft size={13} />
          Back to Blog
        </button>

        {/* Category badge */}
        <div ref={badgeRef} style={{ marginBottom: 22 }}>
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 99,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: c.text,
              background: c.bg,
              border: `1px solid ${c.border}`,
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="precision-gradient"
          style={{
            margin: "0 0 28px",
            fontSize: "clamp(28px, 4.5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {post.title}
        </h1>

        {/* Teal divider */}
        <div
          style={{
            height: 1,
            width: "38%",
            minWidth: 120,
            background: `linear-gradient(90deg, ${c.text}55, transparent)`,
            marginBottom: 28,
          }}
        />

        {/* Meta row + share buttons */}
        <div
          ref={metaRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Author + date + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${c.text}, rgba(255,255,255,0.35))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 800,
                color: "#020617",
                flexShrink: 0,
              }}
            >
              {post.authorInitials}
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>
                {post.author}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                {post.authorRole}
              </div>
            </div>

            <span style={{ color: "rgba(255,255,255,0.1)", fontWeight: 300, fontSize: 18 }}>·</span>

            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              <Calendar size={11} />
              {post.date}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              <Clock size={11} />
              {post.readTime}
            </div>
          </div>

          {/* Share actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginRight: 6,
              }}
            >
              Share
            </span>

            {[
              { id: "twitter",  icon: <XIcon />,         label: "Share on X"       },
              { id: "linkedin", icon: <LinkedInIcon />,   label: "Share on LinkedIn" },
              { id: "copy",     icon: <Link2 size={13} />, label: copied ? "Copied!" : "Copy link" },
            ].map(({ id, icon, label }) => {
              const isActiveCopy = id === "copy" && copied;
              return (
                <button
                  key={id}
                  onClick={() => id === "copy" ? handleCopy() : handleShare(id)}
                  title={label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: `1px solid ${isActiveCopy ? `${c.text}40` : "rgba(255,255,255,0.09)"}`,
                    background: isActiveCopy ? c.bg : "rgba(255,255,255,0.03)",
                    color: isActiveCopy ? c.text : "rgba(255,255,255,0.38)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActiveCopy) {
                      e.currentTarget.style.borderColor = `${c.text}50`;
                      e.currentTarget.style.color = c.text;
                      e.currentTarget.style.background = c.bg;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActiveCopy) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }
                  }}
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to bottom, transparent, #020617)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
