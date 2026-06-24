import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

/**
 * Small centered modal for delete confirmation. Delete button in danger color.
 */
function ConfirmModal({
  open,
  title = "Are you sure?",
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => setVisible(true), 10);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape" && !loading) onCancel?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => !loading && onCancel?.()}
        aria-hidden="true"
      />
      <div
        role="alertdialog"
        aria-modal="true"
        className={`relative z-10 w-full max-w-md rounded-3xl bg-[#07090f] border border-[#07BEB8]/20 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.7)] transition-all duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full bg-red-500/12 border border-red-500/35 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white">{title}</h3>
            {message && <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{message}</p>}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-5 py-2.5 rounded-2xl border border-white/12 text-sm text-white/70 hover:bg-white/5 hover:border-white/25 transition-all disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="px-5 py-2.5 rounded-2xl border border-red-500/40 bg-red-500/15 text-sm font-medium text-red-300 hover:bg-red-500/25 transition-all disabled:opacity-50"
          >
            {loading ? "Deleting…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
