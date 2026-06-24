import { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import adminAxios from "../../api/adminAxios.js";
import DataTable from "../../components/admin/DataTable.jsx";
import Drawer from "../../components/admin/Drawer.jsx";
import ConfirmModal from "../../components/admin/ConfirmModal.jsx";
import Toggle from "../../components/admin/Toggle.jsx";
import Badge from "../../components/admin/Badge.jsx";
import ErrorBanner from "../../components/admin/ErrorBanner.jsx";
import AdminInput from "../../components/admin/AdminInput.jsx";
import AdminTextarea from "../../components/admin/AdminTextarea.jsx";
import TagInput from "../../components/admin/TagInput.jsx";

const TYPES = ["FULL_TIME", "PART_TIME", "REMOTE", "CONTRACT"];
const TYPE_LABELS = {
  FULL_TIME: "Full-Time",
  PART_TIME: "Part-Time",
  REMOTE: "Remote",
  CONTRACT: "Contract",
};

const COLUMNS = [
  { key: "title", label: "Title" },
  { key: "department", label: "Department" },
  { key: "location", label: "Location" },
  { key: "type", label: "Type" },
  { key: "isActive", label: "Active" },
  { key: "expiresAt", label: "Expires" },
  { key: "actions", label: "Actions", className: "text-right" },
];

const emptyForm = {
  title: "",
  department: "",
  location: "",
  type: "FULL_TIME",
  shortDesc: "",
  fullDesc: "",
  requirements: [],
  isActive: true,
  expiresAt: "",
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

function toDateInput(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function JobsAdmin() {
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
      const res = await adminAxios.get("/jobs");
      setRows(res.data.data || []);
    } catch (err) {
      setError(errMessage(err, "Failed to load jobs."));
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
      title: row.title ?? "",
      department: row.department ?? "",
      location: row.location ?? "",
      type: row.type ?? "FULL_TIME",
      shortDesc: row.shortDesc ?? "",
      fullDesc: row.fullDesc ?? "",
      requirements: Array.isArray(row.requirements) ? row.requirements : [],
      isActive: row.isActive ?? true,
      expiresAt: toDateInput(row.expiresAt),
    });
    setFormError("");
    setDrawerOpen(true);
  };

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleToggleActive = async (row, next) => {
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, isActive: next } : r)));
    try {
      await adminAxios.put(`/jobs/${row.id}`, { isActive: next });
    } catch (err) {
      setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, isActive: !next } : r)));
      setError(errMessage(err, "Failed to update active state."));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setFormError("");

    let expiresAt = null;
    if (form.expiresAt) {
      const d = new Date(form.expiresAt);
      if (Number.isNaN(d.getTime())) {
        setFormError("Invalid expiry date.");
        return;
      }
      if (d.getTime() <= Date.now()) {
        setFormError("Expiry date must be in the future.");
        return;
      }
      expiresAt = d.toISOString();
    }

    const payload = {
      title: form.title.trim(),
      department: form.department.trim(),
      location: form.location.trim(),
      type: form.type,
      shortDesc: form.shortDesc.trim(),
      fullDesc: form.fullDesc.trim(),
      requirements: form.requirements,
      isActive: !!form.isActive,
      expiresAt,
    };

    setSaving(true);
    try {
      if (editing) {
        await adminAxios.put(`/jobs/${editing.id}`, payload);
      } else {
        await adminAxios.post("/jobs", payload);
      }
      setDrawerOpen(false);
      await fetchData();
    } catch (err) {
      const errs = err?.response?.data?.errors;
      if (errs?.length) {
        setFormError(errs.map((x) => x.message).join(" "));
      } else {
        setFormError(errMessage(err, "Failed to save job."));
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await adminAxios.delete(`/jobs/${toDelete.id}`);
      setRows((rs) => rs.filter((r) => r.id !== toDelete.id));
      setToDelete(null);
    } catch (err) {
      setError(errMessage(err, "Failed to delete job."));
    } finally {
      setDeleting(false);
    }
  };

  const renderCell = (row, col) => {
    switch (col.key) {
      case "title":
        return <span className="font-medium text-white">{row.title}</span>;
      case "type":
        return <Badge>{TYPE_LABELS[row.type] || row.type}</Badge>;
      case "isActive":
        return (
          <Toggle
            checked={!!row.isActive}
            onChange={(next) => handleToggleActive(row, next)}
            ariaLabel="Toggle active"
          />
        );
      case "expiresAt":
        return <span className="text-white/55 whitespace-nowrap">{formatDate(row.expiresAt)}</span>;
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
        <p className="text-sm text-white/50">Manage open job postings.</p>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#07BEB8] px-4 py-2.5 text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add job
        </button>
      </div>

      <ErrorBanner message={error} onRetry={fetchData} />

      <DataTable
        columns={COLUMNS}
        rows={rows}
        loading={loading}
        renderCell={renderCell}
        emptyMessage="No jobs yet. Add your first posting."
      />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        subtitle={editing ? "Edit" : "New"}
        title={editing ? "Edit job" : "Add job"}
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
              form="job-form"
              disabled={saving}
              className="px-5 py-2.5 rounded-2xl bg-[#07BEB8] text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        }
      >
        <form id="job-form" onSubmit={handleSave} className="flex flex-col gap-4">
          {formError && (
            <div className="rounded-2xl border border-red-400/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
              {formError}
            </div>
          )}
          <AdminInput
            label="Title"
            name="title"
            value={form.title}
            onChange={(e) => setField("title", e.target.value)}
            placeholder="Senior Frontend Engineer"
          />
          <AdminInput
            label="Department"
            name="department"
            value={form.department}
            onChange={(e) => setField("department", e.target.value)}
            placeholder="Engineering"
          />
          <AdminInput
            label="Location"
            name="location"
            value={form.location}
            onChange={(e) => setField("location", e.target.value)}
            placeholder="Remote / Karachi"
          />
          <div>
            <label
              htmlFor="job-type"
              className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5"
            >
              Type
            </label>
            <select
              id="job-type"
              value={form.type}
              onChange={(e) => setField("type", e.target.value)}
              style={{ colorScheme: "dark" }}
              className="w-full rounded-2xl border border-white/10 bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-[#07BEB8]/55"
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABELS[t]}
                </option>
              ))}
            </select>
          </div>
          <AdminTextarea
            label="Short description"
            name="shortDesc"
            rows={3}
            maxLength={500}
            value={form.shortDesc}
            onChange={(e) => setField("shortDesc", e.target.value)}
            placeholder="A short summary (max 500 characters)…"
          />
          <AdminTextarea
            label="Full description"
            name="fullDesc"
            rows={6}
            value={form.fullDesc}
            onChange={(e) => setField("fullDesc", e.target.value)}
            placeholder="Full job description…"
          />
          <TagInput
            label="Requirements"
            value={form.requirements}
            onChange={(v) => setField("requirements", v)}
            placeholder="Type a requirement and press Enter"
          />
          <AdminInput
            label="Expires at"
            name="expiresAt"
            type="date"
            value={form.expiresAt}
            onChange={(e) => setField("expiresAt", e.target.value)}
          />
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#000405] px-4 py-3">
            <span className="text-sm text-white/70">Is active</span>
            <Toggle checked={!!form.isActive} onChange={(v) => setField("isActive", v)} ariaLabel="Is active" />
          </div>
        </form>
      </Drawer>

      <ConfirmModal
        open={!!toDelete}
        title="Delete job"
        message="Are you sure you want to delete this job? This cannot be undone."
        loading={deleting}
        onCancel={() => setToDelete(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default JobsAdmin;
