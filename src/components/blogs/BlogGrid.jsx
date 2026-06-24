import { useState, useMemo, useRef, useEffect } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CAT_COLORS } from "../../data/blogs";
import BlogCoverImage from "./BlogCoverImage";
import useScrollReveal from "../../hooks/useScrollReveal";
import CTAButton from "../shared/CTAButton";

const CATEGORIES = [
  "All", "AI & ML", "Web Dev", "Blockchain",
  "Design", "Mobile", "Branding", "Cloud",
];

// ── Small card (standard grid cell) ─────────────────────────────────────────
function SmallCard({ post, globalIndex }) {
  const navigate  = useNavigate();
  const [hovered, setHovered] = useState(false);
  const ref = useScrollReveal((globalIndex % 3) * 70);
  const c   = CAT_COLORS[post.category] ?? CAT_COLORS["AI & ML"];

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
          ? `0 28px 80px rgba(0,0,0,0.75), 0 0 0 1px ${c.glow}, 0 0 40px ${c.glow}`
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

      {/* Visual area */}
      <div
        style={{
          position: "relative",
          height: 152,
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                }}
              >
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

// ── Large bento card (first card, spans 2 cols) ──────────────────────────────
function LargeCard({ post }) {
  const navigate  = useNavigate();
  const [hovered, setHovered] = useState(false);
  const ref = useScrollReveal();
  const c   = CAT_COLORS[post.category] ?? CAT_COLORS["AI & ML"];

  return (
    <article
      ref={ref}
      onClick={() => navigate(`/blogs/${post.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-large-card"
      style={{
        gridColumn: "span 2",
        borderRadius: 20,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        background: "#040d1a",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        cursor: "pointer",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered
          ? `0 28px 80px rgba(0,0,0,0.75), 0 0 0 1px ${c.glow}, 0 0 40px ${c.glow}`
          : "0 2px 12px rgba(0,0,0,0.25)",
        position: "relative",
        minHeight: 280,
      }}
    >
      {/* Top accent strip */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background: hovered
            ? `linear-gradient(90deg, ${c.text}, transparent 70%)`
            : `linear-gradient(90deg, ${c.text}40, transparent 70%)`,
          transition: "opacity 0.3s",
          zIndex: 1,
        }}
      />

      {/* Visual side */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BlogCoverImage category={post.category} variant="card" />
        <span
          style={{
            position: "absolute",
            top: 16, left: 16,
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

      {/* Content side */}
      <div
        style={{
          padding: "clamp(24px, 3vw, 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 16,
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(17px, 1.8vw, 22px)",
            fontWeight: 800,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: hovered ? "#fff" : "rgba(255,255,255,0.9)",
            transition: "color 0.2s",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.38)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div
            style={{
              width: 26, height: 26, borderRadius: "50%",
              background: `linear-gradient(135deg, ${c.text}, rgba(255,255,255,0.4))`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 9, fontWeight: 800, color: "#020617", flexShrink: 0,
            }}
          >
            {post.authorInitials}
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>
            {post.author}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "rgba(255,255,255,0.28)" }}>
            <Clock size={10} />{post.readTime}
          </div>
        </div>
        <CTAButton className="flex justify-center" onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${post.slug}`); }}>
          Read Article
        </CTAButton>
      </div>
    </article>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function BlogGrid({ posts = [], searchQuery = "" }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount]     = useState(7);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs   = useRef([]);
  const headerRef = useScrollReveal();

  // Animate the sliding tab indicator
  useEffect(() => {
    const idx = CATEGORIES.indexOf(activeCategory);
    const el  = tabRefs.current[idx];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let list = posts;
    if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [posts, activeCategory, searchQuery]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section
      style={{
        background: "#020617",
        padding: "0 clamp(20px, 5vw, 40px) clamp(72px, 12vh, 130px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header row */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 28,
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
                All Articles
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(24px, 3.2vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.028em",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Latest from the team
            </h2>
          </div>
          <span
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "4px 12px",
              borderRadius: 99,
            }}
          >
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Category filter tabs with sliding indicator ── */}
        <div style={{ marginBottom: 40, overflowX: "auto", paddingBottom: 4 }}>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              padding: 4,
              borderRadius: 99,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.025)",
              gap: 2,
              whiteSpace: "nowrap",
            }}
          >
            {/* Sliding pill indicator */}
            <div
              style={{
                position: "absolute",
                top: 4,
                height: "calc(100% - 8px)",
                borderRadius: 99,
                background: "rgba(7,190,184,0.1)",
                border: "1px solid rgba(7,190,184,0.28)",
                transition: "left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: "none",
                ...indicatorStyle,
              }}
            />

            {CATEGORIES.map((cat, i) => {
              const isActive = activeCategory === cat;
              const c = CAT_COLORS[cat];
              return (
                <button
                  key={cat}
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(7);
                  }}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "7px 16px",
                    borderRadius: 99,
                    border: "none",
                    background: "transparent",
                    color: isActive
                      ? c ? c.text : "#07BEB8"
                      : "rgba(255,255,255,0.42)",
                    fontSize: 12,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.03em",
                    cursor: "pointer",
                    transition: "color 0.22s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Bento grid ── */}
        {visible.length > 0 ? (
          <div
            className="bg-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {visible.map((post, i) =>
              i === 0 && visible.length > 1 ? (
                <LargeCard key={post.id} post={post} />
              ) : (
                <SmallCard key={post.id} post={post} globalIndex={i} />
              )
            )}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              color: "rgba(255,255,255,0.25)",
              fontSize: 15,
              border: "1px dashed rgba(255,255,255,0.08)",
              borderRadius: 20,
            }}
          >
            No articles match your search.
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <CTAButton onClick={() => setVisibleCount((c) => c + 3)}>
              Load More
            </CTAButton>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bg-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bg-large-card { grid-column: span 2 !important; }
        }
        @media (max-width: 580px) {
          .bg-grid { grid-template-columns: 1fr !important; }
          .bg-large-card { grid-column: span 1 !important; grid-template-columns: 1fr !important; }
          .bg-large-card > div:last-child { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.05); }
          .bg-large-card > div:first-child { min-height: 180px; }
        }
      `}</style>
    </section>
  );
}
