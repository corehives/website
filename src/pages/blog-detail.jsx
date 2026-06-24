import { Suspense, lazy, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogDetailHero from "../components/blogs/BlogDetailHero";
import BlogArticle from "../components/blogs/BlogArticle";
import RelatedBlogs from "../components/blogs/RelatedBlogs";
import { getBlogBySlug, getBlogs } from "../services/api";
import { normalizeBlog } from "../utils/helpers";

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

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        color: "rgba(255,255,255,0.4)",
        fontSize: 15,
      }}
    >
      Loading article…
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  // Failure is scoped to the slug it happened on, so a slug change clears it
  // without a synchronous setState inside the effect.
  const [failure, setFailure] = useState(null); // { slug, kind } | null

  // Scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    let alive = true;

    getBlogBySlug(slug)
      .then((data) => alive && setPost(normalizeBlog(data)))
      .catch((err) => {
        if (!alive) return;
        setFailure({
          slug,
          kind: err?.response?.status === 404 ? "notfound" : "error",
        });
      });

    // Related articles need the wider list (best-effort, non-blocking).
    getBlogs({ page: 1, limit: 100 })
      .then(({ posts }) => alive && setAllPosts((posts || []).map(normalizeBlog)))
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, [slug]);

  const failed = failure && failure.slug === slug ? failure.kind : null;
  const ready = post && post.slug === slug;
  const isLoading = !failed && !ready;

  return (
    <main style={{ background: "#020617", minHeight: "100vh" }}>
      {isLoading && <Loader />}

      {failed && <NotFound navigate={navigate} />}

      {ready && (
        <>
          <BlogDetailHero post={post} />
          <BlogArticle post={post} />
          <RelatedBlogs currentPost={post} posts={allPosts} />
        </>
      )}

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
