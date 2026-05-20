import { classNames } from "../../utils/helpers";

export default function PricingToggle({
  cycles,
  activeCycle,
  onChange,
  savingsLabel,
}) {
  if (!cycles?.length) {
    return null;
  }

  const activeIndex = Math.max(
    cycles.findIndex((cycle) => cycle.id === activeCycle),
    0,
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative inline-grid min-w-[280px] rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:min-w-[320px]"
        style={{
          gridTemplateColumns: `repeat(${cycles.length}, minmax(0, 1fr))`,
        }}
      >
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-1 top-1 rounded-full bg-[#07BEB8] shadow-[0_14px_35px_-15px_rgba(7,190,184,0.9)] transition-transform duration-300 ease-out"
          style={{
            width: `calc((100% - 0.5rem) / ${cycles.length})`,
            transform: `translateX(calc(${activeIndex} * 100%))`,
          }}
        />

        {cycles.map((cycle) => (
          <button
            key={cycle.id}
            type="button"
            onClick={() => onChange(cycle.id)}
            aria-pressed={activeCycle === cycle.id}
            className={classNames(
              "relative z-10 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300",
              activeCycle === cycle.id
                ? "text-slate-950"
                : "text-white/70 hover:text-white",
            )}
          >
            {cycle.label}
          </button>
        ))}
      </div>

      {savingsLabel ? (
        <p className="inline-flex items-center rounded-full border border-[#07BEB8]/20 bg-[#07BEB8]/10 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.24em] text-[#84fff7] uppercase">
          {savingsLabel}
        </p>
      ) : null}
    </div>
  );
}
