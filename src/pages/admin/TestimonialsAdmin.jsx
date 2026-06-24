import { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import adminAxios from "../../api/adminAxios.js";
import DataTable from "../../components/admin/DataTable.jsx";
import Drawer from "../../components/admin/Drawer.jsx";
import ConfirmModal from "../../components/admin/ConfirmModal.jsx";
import Toggle from "../../components/admin/Toggle.jsx";
import ErrorBanner from "../../components/admin/ErrorBanner.jsx";
import AdminInput from "../../components/admin/AdminInput.jsx";
import AdminTextarea from "../../components/admin/AdminTextarea.jsx";

const COLUMNS = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "rating", label: "Rating" },
  { key: "isActive", label: "Active" },
  { key: "sortOrder", label: "Sort order" },
  { key: "actions", label: "Actions", className: "text-right" },
];

const emptyForm = {
  name: "",
  initials: "",
  role: "",
  rating: 5,
  title: "",
  text: "",
  sortOrder: 0,
  isActive: true,
};

function errMessage(err, fallback) {
  return err?.response?.data?.message || fallback;
}

function TestimonialsAdmin() {
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
      const res = await adminAxios.get("/testimonials");
      setRows(res.data.data || []);
    } catch (err) {
      setError(errMessage(err, "Failed to load testimonials."));
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
      name: row.name ?? "",
      initials: row.initials ?? "",
      role: row.role ?? "",
      rating: row.rating ?? 5,
      title: row.title ?? "",
      text: row.text ?? "",
      sortOrder: row.sortOrder ?? 0,
      isActive: row.isActive ?? true,
    });
    setFormError("");
    setDrawerOpen(true);
  };

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleToggleActive = async (row, next) => {
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, isActive: next } : r)));
    try {
      await adminAxios.put(`/testimonials/${row.id}`, { ...row, isActive: next });
    } catch (err) {
      setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, isActive: !next } : r)));
      setError(errMessage(err, "Failed to update active state."));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setFormError("");
    const payload = {
      name: form.name.trim(),
      initials: form.initials.trim(),
      role: form.role.trim(),
      rating: Number(form.rating),
      title: form.title.trim(),
      text: form.text.trim(),
      sortOrder: Number(form.sortOrder) || 0,
      isActive: !!form.isActive,
    };
    setSaving(true);
    try {
      if (editing) {
        await adminAxios.put(`/testimonials/${editing.id}`, payload);
      } else {
        await adminAxios.post("/testimonials", payload);
      }
      setDrawerOpen(false);
      await fetchData();
    } catch (err) {
      const errs = err?.response?.data?.errors;
      if (errs?.length) {
        setFormError(errs.map((x) => x.message).join(" "));
      } else {
        setFormError(errMessage(err, "Failed to save testimonial."));
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await adminAxios.delete(`/testimonials/${toDelete.id}`);
      setRows((rs) => rs.filter((r) => r.id !== toDelete.id));
      setToDelete(null);
    } catch (err) {
      setError(errMessage(err, "Failed to delete testimonial."));
    } finally {
      setDeleting(false);
    }
  };

  const renderCell = (row, col) => {
    switch (col.key) {
      case "name":
        return <span className="font-medium text-white">{row.name}</span>;
      case "rating":
        return (
          <span className="inline-flex items-center gap-1 text-white/70">
            <Star className="h-3.5 w-3.5 fill-[#07BEB8] text-[#07BEB8]" />
            {row.rating}
          </span>
        );
      case "isActive":
        return (
          <Toggle
            checked={!!row.isActive}
            onChange={(next) => handleToggleActive(row, next)}
            ariaLabel="Toggle active"
          />
        );
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
        <p className="text-sm text-white/50">Manage customer testimonials shown on the site.</p>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#07BEB8] px-4 py-2.5 text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add testimonial
        </button>
      </div>

      <ErrorBanner message={error} onRetry={fetchData} />

      <DataTable
        columns={COLUMNS}
        rows={rows}
        loading={loading}
        renderCell={renderCell}
        emptyMessage="No testimonials yet. Add your first one."
      />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        subtitle={editing ? "Edit" : "New"}
        title={editing ? "Edit testimonial" : "Add testimonial"}
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
              form="testimonial-form"
              disabled={saving}
              className="px-5 py-2.5 rounded-2xl bg-[#07BEB8] text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        }
      >
        <form id="testimonial-form" onSubmit={handleSave} className="flex flex-col gap-4">
          {formError && (
            <div className="rounded-2xl border border-red-400/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
              {formError}
            </div>
          )}
          <AdminInput
            label="Name"
            name="name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Jane Smith"
          />
          <AdminInput
            label="Initials"
            name="initials"
            maxLength={5}
            value={form.initials}
            onChange={(e) => setField("initials", e.target.value)}
            placeholder="JS"
          />
          <AdminInput
            label="Role"
            name="role"
            value={form.role}
            onChange={(e) => setField("role", e.target.value)}
            placeholder="CEO, Acme Corp"
          />
          <AdminInput
            label="Rating (1-5)"
            name="rating"
            type="number"
            min={1}
            max={5}
            value={form.rating}
            onChange={(e) => setField("rating", e.target.value)}
          />
          <AdminInput
            label="Title"
            name="title"
            value={form.title}
            onChange={(e) => setField("title", e.target.value)}
            placeholder="A great experience"
          />
          <AdminTextarea
            label="Text"
            name="text"
            rows={5}
            value={form.text}
            onChange={(e) => setField("text", e.target.value)}
            placeholder="Their testimonial (at least 10 characters)…"
          />
          <AdminInput
            label="Sort order"
            name="sortOrder"
            type="number"
            value={form.sortOrder}
            onChange={(e) => setField("sortOrder", e.target.value)}
          />
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#000405] px-4 py-3">
            <span className="text-sm text-white/70">Is active</span>
            <Toggle checked={!!form.isActive} onChange={(v) => setField("isActive", v)} ariaLabel="Is active" />
          </div>
        </form>
      </Drawer>

      <ConfirmModal
        open={!!toDelete}
        title="Delete testimonial"
        message="Are you sure you want to delete this testimonial? This cannot be undone."
        loading={deleting}
        onCancel={() => setToDelete(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default TestimonialsAdmin;
