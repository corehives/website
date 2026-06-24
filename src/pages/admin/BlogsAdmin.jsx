import { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import adminAxios from "../../api/adminAxios.js";
import { CAT_COLORS } from "../../data/blogs.js";
import DataTable from "../../components/admin/DataTable.jsx";
import Drawer from "../../components/admin/Drawer.jsx";
import ConfirmModal from "../../components/admin/ConfirmModal.jsx";
import Toggle from "../../components/admin/Toggle.jsx";
import Badge from "../../components/admin/Badge.jsx";
import ErrorBanner from "../../components/admin/ErrorBanner.jsx";
import AdminInput from "../../components/admin/AdminInput.jsx";
import AdminTextarea from "../../components/admin/AdminTextarea.jsx";

const CATEGORIES = ["Development", "Design", "Web Dev", "AI & ML", "Mobile", "Branding", "Cloud"];

const COLUMNS = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "author", label: "Author" },
  { key: "isPublished", label: "Published" },
  { key: "featured", label: "Featured" },
  { key: "date", label: "Date" },
  { key: "actions", label: "Actions", className: "text-right" },
];

const emptyContent = JSON.stringify(
  [{ type: "paragraph", text: "Write your first paragraph here." }],
  null,
  2
);

const emptyForm = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Development",
  author: "",
  authorInitials: "",
  authorRole: "",
  authorBio: "",
  readTime: "",
  isPublished: true,
  featured: false,
  content: emptyContent,
};

function errMessage(err, fallback) {
  return err?.response?.data?.message || fallback;
}

function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function BlogsAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminAxios.get("/blogs", { params: { limit: 100 } });
      setRows(res.data.data || []);
    } catch (err) {
      setError(errMessage(err, "Failed to load blogs."));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setFormError("");
    setDrawerOpen(true);
  };

  const openEdit = (row) => {
    setEditing(row);
    setForm({
      slug: row.slug ?? "",
      title: row.title ?? "",
      excerpt: row.excerpt ?? "",
      category: row.category ?? "Development",
      author: row.author ?? "",
      authorInitials: row.authorInitials ?? "",
      authorRole: row.authorRole ?? "",
      authorBio: row.authorBio ?? "",
      readTime: row.readTime ?? "",
      isPublished: row.isPublished ?? true,
      featured: row.featured ?? false,
      content: JSON.stringify(row.content ?? [], null, 2),
    });
    setFormError("");
    setDrawerOpen(true);
  };

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleToggle = async (row, field, next) => {
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, [field]: next } : r)));
    try {
      await adminAxios.put(`/blogs/${row.id}`, { [field]: next });
    } catch (err) {
      setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, [field]: !next } : r)));
      setError(errMessage(err, "Failed to update blog."));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setFormError("");

    let parsedContent;
    try {
      parsedContent = JSON.parse(form.content);
      if (!Array.isArray(parsedContent)) throw new Error("Content must be a JSON array.");
    } catch (err) {
      setFormError(`Invalid content JSON: ${err.message}`);
      return;
    }

    const payload = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      category: form.category,
      author: form.author.trim(),
      authorInitials: form.authorInitials.trim(),
      authorRole: form.authorRole.trim(),
      authorBio: form.authorBio.trim(),
      readTime: form.readTime.trim(),
      isPublished: !!form.isPublished,
      featured: !!form.featured,
      content: parsedContent,
    };

    setSaving(true);
    try {
      if (editing) {
        await adminAxios.put(`/blogs/${editing.id}`, payload);
      } else {
        await adminAxios.post("/blogs", payload);
      }
      setDrawerOpen(false);
      await fetchData();
    } catch (err) {
      const errs = err?.response?.data?.errors;
      if (errs?.length) {
        setFormError(errs.map((x) => x.message).join(" "));
      } else {
        setFormError(errMessage(err, "Failed to save blog."));
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await adminAxios.delete(`/blogs/${toDelete.id}`);
      setRows((rs) => rs.filter((r) => r.id !== toDelete.id));
      setToDelete(null);
    } catch (err) {
      setError(errMessage(err, "Failed to delete blog."));
    } finally {
      setDeleting(false);
    }
  };

  const renderCell = (row, col) => {
    switch (col.key) {
      case "title":
        return <span className="font-medium text-white line-clamp-1 max-w-[260px]">{row.title}</span>;
      case "category": {
        const c = CAT_COLORS[row.category] || {};
        return (
          <Badge text={c.text} bg={c.bg} border={c.border}>
            {row.category}
          </Badge>
        );
      }
      case "isPublished":
        return (
          <Toggle
            checked={!!row.isPublished}
            onChange={(next) => handleToggle(row, "isPublished", next)}
            ariaLabel="Toggle published"
          />
        );
      case "featured":
        return (
          <Toggle
            checked={!!row.featured}
            onChange={(next) => handleToggle(row, "featured", next)}
            ariaLabel="Toggle featured"
          />
        );
      case "date":
        return <span className="text-white/55 whitespace-nowrap">{formatDate(row.publishedAt || row.createdAt)}</span>;
      case "actions":
        return (
          <div className="flex justify-end gap-2">
            <button
              onClick={() => openEdit(row)}
              aria-label="Edit"
              className="w-8 h-8 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 hover:border-[#07BEB8]/40 flex items-center justify-center transition-all"
            >
              <Pencil className="w-3.5 h-3.5 text-white/60" />
            </button>
            <button
              onClick={() => setToDelete(row)}
              aria-label="Delete"
              className="w-8 h-8 rounded-xl border border-white/10 bg-white/4 hover:bg-red-500/15 hover:border-red-500/40 flex items-center justify-center transition-all"
            >
              <Trash2 className="w-3.5 h-3.5 text-white/60" />
            </button>
          </div>
        );
      default:
        return row[col.key];
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-white/50">Manage blog posts. The list shows published posts.</p>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#07BEB8] px-4 py-2.5 text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add blog
        </button>
      </div>

      <ErrorBanner message={error} onRetry={fetchData} />

      <DataTable
        columns={COLUMNS}
        rows={rows}
        loading={loading}
        renderCell={renderCell}
        emptyMessage="No blogs yet. Add your first post."
      />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        subtitle={editing ? "Edit" : "New"}
        title={editing ? "Edit blog" : "Add blog"}
        footer={
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="px-5 py-2.5 rounded-2xl border border-white/12 text-sm text-white/70 hover:bg-white/5 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="blog-form"
              disabled={saving}
              className="px-5 py-2.5 rounded-2xl bg-[#07BEB8] text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        }
      >
        <form id="blog-form" onSubmit={handleSave} className="flex flex-col gap-4">
          {formError && (
            <div className="rounded-2xl border border-red-400/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
              {formError}
            </div>
          )}
          <AdminInput
            label="Slug"
            name="slug"
            value={form.slug}
            onChange={(e) => setField("slug", e.target.value)}
            placeholder="my-blog-post"
          />
          <AdminInput
            label="Title"
            name="title"
            value={form.title}
            onChange={(e) => setField("title", e.target.value)}
            placeholder="My blog post title"
          />
          <AdminTextarea
            label="Excerpt"
            name="excerpt"
            rows={3}
            maxLength={500}
            value={form.excerpt}
            onChange={(e) => setField("excerpt", e.target.value)}
            placeholder="A short summary (max 500 characters)…"
          />
          <div>
            <label
              htmlFor="blog-category"
              className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5"
            >
              Category
            </label>
            <select
              id="blog-category"
              value={form.category}
              onChange={(e) => setField("category", e.target.value)}
              style={{ colorScheme: "dark" }}
              className="w-full rounded-2xl border border-white/10 bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#07BEB8]/55"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <AdminInput
            label="Author"
            name="author"
            value={form.author}
            onChange={(e) => setField("author", e.target.value)}
            placeholder="CoreHives"
          />
          <AdminInput
            label="Author initials"
            name="authorInitials"
            maxLength={5}
            value={form.authorInitials}
            onChange={(e) => setField("authorInitials", e.target.value)}
            placeholder="CH"
          />
          <AdminInput
            label="Author role"
            name="authorRole"
            value={form.authorRole}
            onChange={(e) => setField("authorRole", e.target.value)}
            placeholder="CoreHives Team"
          />
          <AdminTextarea
            label="Author bio"
            name="authorBio"
            rows={3}
            value={form.authorBio}
            onChange={(e) => setField("authorBio", e.target.value)}
            placeholder="Short author bio…"
          />
          <AdminInput
            label="Read time"
            name="readTime"
            value={form.readTime}
            onChange={(e) => setField("readTime", e.target.value)}
            placeholder="6 min read"
          />
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#000405] px-4 py-3">
            <span className="text-sm text-white/70">Is published</span>
            <Toggle
              checked={!!form.isPublished}
              onChange={(v) => setField("isPublished", v)}
              ariaLabel="Is published"
            />
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#000405] px-4 py-3">
            <span className="text-sm text-white/70">Featured</span>
            <Toggle checked={!!form.featured} onChange={(v) => setField("featured", v)} ariaLabel="Featured" />
          </div>
          <AdminTextarea
            label="Content (JSON)"
            name="content"
            mono
            rows={14}
            hint="Edit raw JSON content blocks"
            value={form.content}
            onChange={(e) => setField("content", e.target.value)}
          />
        </form>
      </Drawer>

      <ConfirmModal
        open={!!toDelete}
        title="Delete blog"
        message="Are you sure you want to delete this blog? This cannot be undone."
        loading={deleting}
        onCancel={() => setToDelete(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default BlogsAdmin;
