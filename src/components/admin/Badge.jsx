/**
 * Small colored label. Defaults to the teal theme; accepts color overrides
 * (used for blog category via CAT_COLORS and for job type).
 */
function Badge({ children, text, bg, border }) {
  const style = {
    color: text || "#07BEB8",
    backgroundColor: bg || "rgba(7,190,184,0.08)",
    borderColor: border || "rgba(7,190,184,0.2)",
  };
  return (
    <span
      style={style}
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap"
    >
      {children}
    </span>
  );
}

export default Badge;
