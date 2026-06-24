/**
 * Reusable table. Props: columns [{ key, label, className }], rows, loading,
 * renderCell(row, col), emptyMessage. Renders skeleton rows while loading and an
 * empty-state message when there are no rows.
 */
function DataTable({
  columns = [],
  rows = [],
  loading = false,
  renderCell,
  emptyMessage = "Nothing here yet.",
  keyField = "id",
}) {
  const skeletonRows = 5;

  return (
    <div className="overflow-x-auto rounded-2xl border border-[rgba(7,190,184,0.18)] bg-[#0d1117]">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-white/8">
            {columns.map((col) => (
              <th
                key={col.key}
                className={[
                  "px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40",
                  col.className || "",
                ].join(" ")}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: skeletonRows }).map((_, r) => (
              <tr key={r} className="border-b border-white/5 last:border-0">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-4">
                    <div className="h-3.5 w-full max-w-[140px] animate-pulse rounded-full bg-white/8" />
                  </td>
                ))}
              </tr>
            ))
          ) : rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-16 text-center">
                <p className="text-sm text-white/40">{emptyMessage}</p>
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row[keyField]}
                className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className={["px-4 py-3.5 text-white/80 align-middle", col.className || ""].join(" ")}>
                    {renderCell ? renderCell(row, col) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
