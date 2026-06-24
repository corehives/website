import { Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogCoverImage from "./BlogCoverImage";
import useScrollReveal from "../../hooks/useScrollReveal";
import CTAButton from "../shared/CTAButton";

export default function FeaturedPost({ post }) {
  const navigate  = useNavigate();
  const labelRef  = useScrollReveal();
  const cardRef   = useScrollReveal(80);

  if (!post) return null;

  const handleOpen = () => navigate(`/blogs/${post.slug}`);

  return (
    <section
    className="py-6 sm:py-10"
      style={{
        background: "#020617",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section label */}
        <div
          ref={labelRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              height: 1,
              width: 36,
              background: "linear-gradient(90deg, transparent, rgba(7,190,184,0.6))",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#07BEB8",
              textTransform: "uppercase",
            }}
          >
            Latest Article
          </span>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="fp-outer"
          onClick={handleOpen}
          style={{
            borderRadius: 28,
            border: "1px solid rgba(7,190,184,0.1)",
            background: "#040d1a",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "55% 45%",
            minHeight: 440,
            cursor: "pointer",
            transition: "border-color 0.35s, box-shadow 0.35s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(7,190,184,0.32)";
            e.currentTarget.style.boxShadow =
              "0 4px 8px rgba(7,190,184,0.08), 0 32px 120px rgba(7,190,184,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(7,190,184,0.1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* ── Visual panel ── */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <BlogCoverImage category={post.category} variant="card" />

            {/* Featured badge */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 99,
                background: "rgba(7,190,184,0.12)",
                border: "1px solid rgba(7,190,184,0.28)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#07BEB8",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#07BEB8",
                  boxShadow: "0 0 6px #07BEB8",
                }}
              />
              Featured
            </div>

            {/* Article number label */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                zIndex: 2,
                fontSize: 10,
                fontWeight: 500,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Article No. 001
            </div>
          </div>

          {/* ── Content panel ── */}
          <div
            style={{
              padding: "clamp(32px, 4vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 22,
              borderLeft: "1px solid rgba(7,190,184,0.07)",
            }}
          >
            {/* Category badge */}
            <span
              style={{
                display: "inline-block",
                width: "fit-content",
                padding: "4px 12px",
                borderRadius: 99,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#07BEB8",
                background: "rgba(7,190,184,0.08)",
                border: "1px solid rgba(7,190,184,0.2)",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(20px, 2.2vw, 30px)",
                fontWeight: 800,
                lineHeight: 1.22,
                letterSpacing: "-0.025em",
                color: "#ffffff",
              }}
            >
              {post.title}
            </h2>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(7,190,184,0.3), transparent)",
                width: "60%",
              }}
            />

            {/* Excerpt */}
            <p
              style={{
                margin: 0,
                fontSize: "clamp(13px, 1.2vw, 15px)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {post.excerpt}
            </p>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #07BEB8, #4eecea)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#020617",
                    flexShrink: 0,
                  }}
                >
                  {post.authorInitials}
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {post.author}
                </span>
              </div>

              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "rgba(255,255,255,0.32)",
                  fontSize: 12,
                }}
              >
                <Calendar size={11} />
                {post.date}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "rgba(255,255,255,0.32)",
                  fontSize: 12,
                }}
              >
                <Clock size={11} />
                {post.readTime}
              </div>
            </div>

            {/* CTA */}
            <CTAButton className="flex justify-center" onClick={(e) => { e.stopPropagation(); handleOpen(); }}>
              Read Article
            </CTAButton>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .fp-outer { grid-template-columns: 1fr !important; }
          .fp-outer > div:first-child { min-height: 200px; }
          .fp-outer > div:last-child { border-left: none !important; border-top: 1px solid rgba(7,190,184,0.07); }
        }
      `}</style>
    </section>
  );
}
