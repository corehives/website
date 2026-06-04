import { useState } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ALL_POSTS, CAT_COLORS } from "../../data/blogs";
import BlogCoverImage from "./BlogCoverImage";
import useScrollReveal from "../../hooks/useScrollReveal";

function RelatedCard({ post, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const ref = useScrollReveal(index * 80);
  const c = CAT_COLORS[post.category] || CAT_COLORS["AI & ML"];

  return (
    <article
      ref={ref}
      onClick={() => navigate(`/blogs/${post.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        background: "#040d1a",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 56px rgba(0,0,0,0.5), 0 0 0 1px ${c.glow}`
          : "0 2px 12px rgba(0,0,0,0.25)",
        position: "relative",
      }}
    >
      {/* Category accent strip */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background: hovered
            ? `linear-gradient(90deg, ${c.text}, transparent 80%)`
            : `linear-gradient(90deg, ${c.text}40, transparent 80%)`,
          transition: "opacity 0.3s",
          zIndex: 1,
        }}
      />

      {/* Visual panel */}
      <div
        style={{
          position: "relative",
          height: 148,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <BlogCoverImage category={post.category} variant="card" />
        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: 12, left: 12,
            zIndex: 2,
            padding: "3px 10px",
            borderRadius: 99,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: c.text,
            background: c.bg,
            border: `1px solid ${c.border}`,
            backdropFilter: "blur(8px)",
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "18px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(14px, 1.3vw, 16px)",
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: "-0.015em",
            color: hovered ? "#fff" : "rgba(255,255,255,0.88)",
            transition: "color 0.2s",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.36)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flexGrow: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 10,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div
              style={{
                width: 24, height: 24,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${c.text}, rgba(255,255,255,0.4))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                fontWeight: 800,
                color: "#020617",
                flexShrink: 0,
              }}
            >
              {post.authorInitials}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
                {post.author}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
                <Calendar size={8} />
                {post.date}
                <span>·</span>
                <Clock size={8} />
                {post.readTime}
              </div>
            </div>
          </div>
          <div
            style={{
              width: 28, height: 28,
              borderRadius: "50%",
              border: `1px solid ${hovered ? c.border : "rgba(255,255,255,0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: hovered ? c.text : "rgba(255,255,255,0.25)",
              transition: "all 0.25s",
              transform: hovered ? "translateX(2px)" : "none",
              flexShrink: 0,
            }}
          >
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RelatedBlogs({ currentPost }) {
  const navigate  = useNavigate();
  const headerRef = useScrollReveal();

  // Same category first, fill with others if needed, exclude current post
  const related = (() => {
    const sameCategory = ALL_POSTS.filter(
      (p) => p.id !== currentPost.id && p.category === currentPost.category
    );
    const others = ALL_POSTS.filter(
      (p) => p.id !== currentPost.id && p.category !== currentPost.category
    );
    return [...sameCategory, ...others].slice(0, 3);
  })();

  if (related.length === 0) return null;

  return (
    <section
      style={{
        background: "#020617",
        padding: "0 clamp(20px, 5vw, 40px) clamp(80px, 14vh, 130px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section header */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span
                style={{
                  height: 1, width: 36,
                  background: "linear-gradient(90deg, transparent, rgba(7,190,184,0.6))",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
                  color: "#07BEB8", textTransform: "uppercase",
                }}
              >
                Continue Reading
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                letterSpacing: "-0.026em",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Related Articles
            </h2>
          </div>

          <button
            onClick={() => navigate("/blogs")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 22px",
              borderRadius: 99,
              border: "1px solid rgba(7,190,184,0.25)",
              background: "rgba(7,190,184,0.04)",
              color: "#07BEB8",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "background 0.22s, border-color 0.22s, gap 0.22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(7,190,184,0.1)";
              e.currentTarget.style.borderColor = "rgba(7,190,184,0.45)";
              e.currentTarget.style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(7,190,184,0.04)";
              e.currentTarget.style.borderColor = "rgba(7,190,184,0.25)";
              e.currentTarget.style.gap = "8px";
            }}
          >
            All Articles <ArrowRight size={13} />
          </button>
        </div>

        {/* Cards grid */}
        <div
          className="rb-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {related.map((post, i) => (
            <RelatedCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rb-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .rb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
