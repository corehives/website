import { useState, useEffect, Suspense, lazy } from "react";
import BlogsHero from "../components/blogs/BlogsHero";
import FeaturedPost from "../components/blogs/FeaturedPost";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogNewsletter from "../components/blogs/BlogNewsletter";
import { getBlogs } from "../services/api";
import { normalizeBlog } from "../utils/helpers";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    // Pull a generous page so the grid + featured have data to work with.
    getBlogs({ page: 1, limit: 100 })
      .then(({ posts: data }) => {
        if (!alive) return;
        setPosts((data || []).map(normalizeBlog));
        setError(false);
      })
      .catch(() => alive && setError(true))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  // Featured = the flagged post, else the first; grid gets the remainder.
  const featured = posts.find((p) => p.featured) || posts[0] || null;
  const gridPosts = featured
    ? posts.filter((p) => p.id !== featured.id)
    : posts;

  return (
    <main style={{ background: "#020617", minHeight: "100vh" }}>
      <BlogsHero onSearch={setSearchQuery} />

      {loading && <BlogsStatus>Loading the latest articles…</BlogsStatus>}

      {!loading && error && (
        <BlogsStatus>
          We couldn&apos;t load articles right now. Please try again later.
        </BlogsStatus>
      )}

      {!loading && !error && posts.length === 0 && (
        <BlogsStatus>No articles published yet. Check back soon.</BlogsStatus>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          {featured && <FeaturedPost post={featured} />}
          <BlogGrid posts={gridPosts} searchQuery={searchQuery} />
        </>
      )}

      <BlogNewsletter />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}

function BlogsStatus({ children }) {
  return (
    <section style={{ background: "#020617", padding: "60px 20px 100px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
          color: "rgba(255,255,255,0.4)",
          fontSize: 15,
        }}
      >
        {children}
      </div>
    </section>
  );
}
