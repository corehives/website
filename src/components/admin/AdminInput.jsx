/**
 * Dark input matching the site's FormInput (careers.jsx). Supports label + error.
 */
function AdminInput({ label, error, id, className = "", ...props }) {
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
      <input
        id={inputId}
        {...props}
        style={props.type === "date" ? { colorScheme: "dark", ...props.style } : props.style}
        className={[
          "w-full rounded-2xl border bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-white/25",
          error
            ? "border-red-400/60 bg-red-500/3 focus:border-red-400"
            : "border-white/10 focus:border-[#07BEB8]/55",
          props.disabled ? "cursor-not-allowed opacity-60" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default AdminInput;
