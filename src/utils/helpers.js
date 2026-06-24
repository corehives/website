// Utility helper functions can be added here

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Format an API date (publishedAt / createdAt) into the human-readable string
// the blog UI expects, e.g. "June 11, 2026". Falls back gracefully.
export function formatBlogDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Normalize an API blog object so legacy components keep working
// (they read `post.date`, which the API exposes as `publishedAt`).
export function normalizeBlog(post) {
  if (!post) return post;
  return {
    ...post,
    date: post.date || formatBlogDate(post.publishedAt || post.createdAt),
  };
}
