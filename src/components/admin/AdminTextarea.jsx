/**
 * Multiline variant of AdminInput. `mono` enables a monospace font for JSON editing.
 */
function AdminTextarea({ label, error, hint, id, mono = false, className = "", rows = 4, ...props }) {
  const inputId = id || props.name;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        {...props}
        className={[
          "w-full rounded-2xl border bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-white/25 resize-y",
          mono ? "font-mono text-xs leading-relaxed" : "",
          error
            ? "border-red-400/60 bg-red-500/3 focus:border-red-400"
            : "border-white/10 focus:border-[#07BEB8]/55",
          props.disabled ? "cursor-not-allowed opacity-60" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {hint && !error && <p className="mt-1 text-xs text-white/30">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default AdminTextarea;
