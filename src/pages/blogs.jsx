import { useState, Suspense, lazy } from "react";
import BlogsHero from "../components/blogs/BlogsHero";
import FeaturedPost from "../components/blogs/FeaturedPost";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogNewsletter from "../components/blogs/BlogNewsletter";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main style={{ background: "#020617", minHeight: "100vh" }}>
      <BlogsHero onSearch={setSearchQuery} />
      <FeaturedPost />
      <BlogGrid searchQuery={searchQuery} />
      <BlogNewsletter />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
