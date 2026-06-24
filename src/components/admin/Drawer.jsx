import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Right slide-in panel (480px desktop, full-screen mobile). Fade/slide in like
 * careers.jsx ApplicationModal. Escape + backdrop close, body scroll lock.
 */
function Drawer({ open, title, subtitle, onClose, children, footer }) {
  const [visible, setVisible] = useState(false);
  const closeRef = useRef(null);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => setVisible(true), 10);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className={`relative z-10 flex h-full w-full sm:w-120 flex-col bg-[#07090f] border-l border-[#07BEB8]/20 shadow-[0_0_80px_rgba(7,190,184,0.14),0_40px_100px_rgba(0,0,0,0.7)] transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/6 shrink-0">
          <div>
            {subtitle && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07BEB8] mb-0.5">
                {subtitle}
              </p>
            )}
            <h2 id="drawer-title" className="text-lg font-bold text-white leading-tight">
              {title}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={handleClose}
            aria-label="Close panel"
            className="w-9 h-9 rounded-full border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/25 flex items-center justify-center transition-all shrink-0"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 [scrollbar-width:thin]">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-white/6 shrink-0 bg-[#07090f]">{footer}</div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
