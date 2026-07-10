import { useEffect, useRef, useState } from "react";
import GlobeScene from "./animations/globe.jsx";
import heroBg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";

// ── Minimal progress bar — visual only, zero text ─────────────────────────────
function ProgressBar({ duration }) {
  const [pct, setPct] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const t0 = performance.now();
    const tick = () => {
      const p = Math.min((performance.now() - t0) / duration, 1);
      const eased = p < 0.72 ? p * 1.12 : 0.806 + (p - 0.72) * 0.68;
      setPct(Math.min(eased, 0.95));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration]);

  return (
    <div style={{ position: "relative", width: "clamp(200px, 34vw, 360px)" }}>
      {/* Diffuse outer glow behind the track */}
      <div style={{
        position: "absolute",
        inset: "-6px",
        borderRadius: 99,
        pointerEvents: "none",
        boxShadow: `0 0 22px rgba(7,190,184,${(pct * 0.32).toFixed(2)}),
                    0 0 52px rgba(7,190,184,${(pct * 0.13).toFixed(2)})`,
        transition: "box-shadow 0.15s ease",
      }} />

      {/* Track */}
      <div style={{
        height: 5,
        borderRadius: 99,
        background: "rgba(7,190,184,0.09)",
        border: "1px solid rgba(7,190,184,0.18)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Fill */}
        <div style={{
          height: "100%",
          width: `${pct * 100}%`,
          borderRadius: 99,
          background: "linear-gradient(90deg, #07BEB8 0%, #4eecea 65%, #b8f9f7 100%)",
          boxShadow: "0 0 8px rgba(78,236,234,0.70), 0 0 18px rgba(7,190,184,0.38)",
          transition: "width 0.10s linear",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Shimmer sweep */}
          <div style={{
            position: "absolute",
            top: 0, left: 0,
            width: "50%", height: "100%",
            background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)",
            animation: "lsShimmer 2s linear infinite",
          }} />
        </div>
          
        {/* Leading-edge bright cap */}
        {pct > 0.03 && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: `${pct * 100}%`,
            transform: "translate(-50%, -50%)",
            width: 5,
            height: 14,
            borderRadius: 99,
            background: "#ffffff",
            boxShadow: "0 0 8px rgba(255,255,255,0.9), 0 0 18px rgba(78,236,234,0.9)",
          }} />
        )}
      </div>
    </div>
  );
}

// ── Reduced-motion detection (CSR only) ───────────────────────────────────────
const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function LoadingScreen({ visible = true }) {
  return (
    <div
      role="status"
      aria-label="Loading CoreHive"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: visible ? "none" : "opacity 0.75s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: visible ? "auto" : "none",
        background: "#020617",
      }}
    >
      {/* ── Hero background at full opacity ── */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          opacity: 1,
        }}
      />

      {/* ── Heavy dark overlay so the globe reads clearly ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: [
          "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(7,190,184,0.05) 0%, transparent 65%)",
          "linear-gradient(180deg, rgba(2,6,23,0.72) 0%, rgba(2,6,23,0.62) 45%, rgba(2,6,23,0.88) 100%)",
        ].join(", "),
      }} />

      {/* ── Left light accent ── */}
      <img
        src={leftLight}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0, top: 0,
          height: "clamp(260px, 55vh, 600px)",
          width: "auto",
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />

      {/* ── Right light accent ── */}
      <img
        src={rightLight}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0, top: 0,
          height: "clamp(260px, 55vh, 600px)",
          width: "auto",
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />

      {/* ── Globe + progress bar, centred on screen ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        {/* Globe — loaderMode strips the frame images and moves camera closer */}
        <div style={{
          position: "relative",
          // vmin keeps it square and fitting on any orientation
          width: "clamp(340px, 72vmin, 720px)",
          height: "clamp(340px, 72vmin, 720px)",
          animation: REDUCED ? "none" : "lsFloat 5s ease-in-out infinite",
        }}>
          <GlobeScene />
        </div>

        {/* Progress bar */}
        <ProgressBar duration={2400} />
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes lsFloat {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-12px); }
        }
        @keyframes lsShimmer {
          0%   { transform: translateX(-130%); }
          100% { transform: translateX(340%);  }
        }
      `}</style>
    </div>
  );
}
