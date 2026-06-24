import { useState } from "react";
import { X } from "lucide-react";

/**
 * Type + Enter to add a tag, ✕ to remove. `value` is string[].
 * Used for job requirements.
 */
function TagInput({ label, value = [], onChange, placeholder = "Type and press Enter", disabled = false }) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    const t = draft.trim();
    if (!t) return;
    if (!value.includes(t)) onChange?.([...value, t]);
    setDraft("");
  };

  const removeTag = (idx) => {
    onChange?.(value.filter((_, i) => i !== idx));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !draft && value.length) {
      removeTag(value.length - 1);
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5">
          {label}
        </label>
      )}
      <div
        className={[
          "flex flex-wrap items-center gap-2 rounded-2xl border bg-[#000405] px-3 py-2.5 transition-all duration-200",
          "border-white/10 focus-within:border-[#07BEB8]/55",
          disabled ? "cursor-not-allowed opacity-60" : "",
        ].join(" ")}
      >
        {value.map((tag, idx) => (
          <span
            key={`${tag}-${idx}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/10 px-2.5 py-1 text-xs text-[#84fff7]"
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTag(idx)}
                aria-label={`Remove ${tag}`}
                className="hover:text-white transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </span>
        ))}
        <input
          value={draft}
          disabled={disabled}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={value.length ? "" : placeholder}
          className="flex-1 min-w-[120px] bg-transparent text-sm text-white outline-none placeholder-white/25 py-1"
        />
      </div>
    </div>
  );
}

export default TagInput;
