// Public site API client. In dev, Vite proxies /api → http://localhost:5000.
// In prod, set VITE_API_URL to the backend origin (e.g. https://api.corehives.com).
import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_URL || ""}/api/v1`;

const api = axios.create({
  baseURL,
  timeout: 15000,
});

// ─── Testimonials ───────────────────────────────────────────────────────────
export const getTestimonials = () =>
  api.get("/testimonials").then((r) => r.data.data);

// ─── Blogs ──────────────────────────────────────────────────────────────────
export const getBlogs = (params = {}) =>
  api.get("/blogs", { params }).then((r) => ({
    posts: r.data.data,
    pagination: r.data.pagination,
  }));

export const getBlogBySlug = (slug) =>
  api.get(`/blogs/${slug}`).then((r) => r.data.data);

// ─── Jobs ─────────────────────────────────────────────────────────────────--
export const getJobs = () => api.get("/jobs").then((r) => r.data.data);

export default api;
