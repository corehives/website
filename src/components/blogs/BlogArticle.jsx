import { CAT_COLORS } from "../../data/blogs";
import BlogCoverImage from "./BlogCoverImage";

// Renders a single content block by type
function Block({ block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(15px, 1.4vw, 17px)",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.68)",
            fontWeight: 400,
          }}
        >
          {block.text}
        </p>
      );

    case "heading2":
      return (
        <h2
          style={{
            margin: "48px 0 20px",
            fontSize: "clamp(20px, 2.2vw, 26px)",
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: "-0.025em",
            color: "#ffffff",
          }}
        >
          {block.text}
        </h2>
      );

    case "heading3":
      return (
        <h3
          style={{
            margin: "36px 0 14px",
            fontSize: "clamp(16px, 1.7vw, 20px)",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "-0.018em",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul
          style={{
            margin: "0 0 28px",
            paddingLeft: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                fontSize: "clamp(14px, 1.3vw, 16px)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#07BEB8",
                  boxShadow: "0 0 6px rgba(7,190,184,0.5)",
                  flexShrink: 0,
                  marginTop: 9,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote
          style={{
            margin: "36px 0",
            padding: "24px 28px",
            borderLeft: "3px solid #07BEB8",
            background: "rgba(7,190,184,0.04)",
            borderRadius: "0 12px 12px 0",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              lineHeight: 1.7,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.78)",
              fontWeight: 400,
            }}
          >
            &ldquo;{block.text}&rdquo;
          </p>
          {block.author && (
            <cite
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#07BEB8",
                fontStyle: "normal",
              }}
            >
              — {block.author}
            </cite>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <div
          style={{
            margin: "36px 0",
            padding: "20px 24px",
            borderRadius: 14,
            border: "1px solid rgba(7,190,184,0.22)",
            background: "rgba(7,190,184,0.05)",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(7,190,184,0.15)",
              border: "1px solid rgba(7,190,184,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 2,
              fontSize: 11,
              color: "#07BEB8",
              fontWeight: 800,
            }}
          >
            ✦
          </span>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(13px, 1.3vw, 15px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            {block.text}
          </p>
        </div>
      );

    case "code":
      return (
        <div style={{ margin: "36px 0" }}>
          {block.language && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px",
                background: "rgba(7,190,184,0.08)",
                borderRadius: "10px 10px 0 0",
                border: "1px solid rgba(7,190,184,0.15)",
                borderBottom: "none",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#07BEB8",
                }}
              >
                {block.language}
              </span>
            </div>
          )}
          <pre
            style={{
              margin: 0,
              padding: "20px 20px",
              background: "#040d1a",
              border: "1px solid rgba(7,190,184,0.12)",
              borderRadius: block.language ? "0 0 10px 10px" : 10,
              overflowX: "auto",
              fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
              fontSize: "clamp(12px, 1.1vw, 13px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)",
              whiteSpace: "pre",
            }}
          >
            <code>{block.code}</code>
          </pre>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogArticle({ post }) {
  const c = CAT_COLORS[post.category] || CAT_COLORS["AI & ML"];

  return (
    <div
      style={{
        background: "#020617",
        padding: "0 clamp(20px, 5vw, 40px) clamp(16px, 4vh, 32px)",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        {/* Cover image */}
        <BlogCoverImage category={post.category} variant="detail" style={{ marginBottom: 44 }} />

        {/* Lead divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${c.text}20, transparent)`,
            marginBottom: 48,
          }}
        />

        {/* Article content */}
        <article>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {/* End divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${c.text}20, transparent)`,
            marginTop: 48,
            marginBottom: 56,
          }}
        />

        {/* Author card */}
        <div
          style={{
            padding: "28px 32px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#040d1a",
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${c.text}, rgba(255,255,255,0.3))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#020617",
              flexShrink: 0,
            }}
          >
            {post.authorInitials}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 700, color: "#ffffff" }}>
                {post.author}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.text,
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  padding: "2px 10px",
                  borderRadius: 99,
                }}
              >
                {post.authorRole}
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.42)",
              }}
            >
              {post.authorBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
