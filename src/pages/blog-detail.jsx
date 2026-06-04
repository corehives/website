import { Suspense, lazy, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_POSTS } from "../data/blogs";
import BlogDetailHero from "../components/blogs/BlogDetailHero";
import BlogArticle from "../components/blogs/BlogArticle";
import RelatedBlogs from "../components/blogs/RelatedBlogs";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

function NotFound({ navigate }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 20,
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "clamp(48px, 8vw, 80px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          background: "linear-gradient(135deg, #07BEB8, #4eecea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
        }}
      >
        404
      </div>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", margin: 0 }}>
        Article not found.
      </p>
      <button
        onClick={() => navigate("/blogs")}
        style={{
          marginTop: 8,
          padding: "12px 28px",
          borderRadius: 99,
          border: "1px solid rgba(7,190,184,0.3)",
          background: "rgba(7,190,184,0.06)",
          color: "#07BEB8",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Back to Blog
      </button>
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate  = useNavigate();

  const post = ALL_POSTS.find((p) => p.slug === slug);

  // Scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  return (
    <main style={{ background: "#020617", minHeight: "100vh" }}>
      {!post ? (
        <NotFound navigate={navigate} />
      ) : (
        <>
          <BlogDetailHero post={post} />
          <BlogArticle post={post} />
          <RelatedBlogs currentPost={post} />
        </>
      )}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
