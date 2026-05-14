import { useEffect, useState } from "react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  const [lines, setLines] = useState([]);

  const bootLines = [
    "BOOTING CORE SYSTEM...",
    "LOADING ASSETS...",
    "ESTABLISHING CONNECTION...",
    "RENDERING INTERFACE...",
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 12, 95));
    }, 120);

    const dotsTimer = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 380);

    let lineIndex = 0;
    const lineTimer = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setLines((prev) => [...prev, bootLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(lineTimer);
      }
    }, 300);

    return () => {
      clearInterval(progressTimer);
      clearInterval(dotsTimer);
      clearInterval(lineTimer);
    };
  }, []);

  const hex = Math.floor(progress * 2.55)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000405",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(7,190,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,190,184,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Scan line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #07BEB8 40%, #07BEB8 60%, transparent 100%)",
          opacity: 0.35,
          animation: "chScan 2.4s linear infinite",
        }}
      />

      {/* Corner brackets */}
      {[
        { top: 32, left: 32, borderTop: true, borderLeft: true },
        { top: 32, right: 32, borderTop: true, borderRight: true },
        { bottom: 32, left: 32, borderBottom: true, borderLeft: true },
        { bottom: 32, right: 32, borderBottom: true, borderRight: true },
      ].map((corner, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 36,
            height: 36,
            ...(corner.top !== undefined ? { top: corner.top } : {}),
            ...(corner.bottom !== undefined ? { bottom: corner.bottom } : {}),
            ...(corner.left !== undefined ? { left: corner.left } : {}),
            ...(corner.right !== undefined ? { right: corner.right } : {}),
            borderTop: corner.borderTop ? "2px solid #07BEB8" : undefined,
            borderBottom: corner.borderBottom ? "2px solid #07BEB8" : undefined,
            borderLeft: corner.borderLeft ? "2px solid #07BEB8" : undefined,
            borderRight: corner.borderRight ? "2px solid #07BEB8" : undefined,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Center content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* Spinner rings */}
        <div style={{ position: "relative", width: 88, height: 88 }}>
          {/* Outer pulse ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(7,190,184,0.2)",
              animation: "chPing 2s ease-out infinite",
            }}
          />
          {/* Mid pulse ring */}
          <div
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "50%",
              border: "1px solid rgba(7,190,184,0.3)",
              animation: "chPing 2s ease-out infinite 0.6s",
            }}
          />
          {/* Spinning arc */}
          <div
            style={{
              position: "absolute",
              inset: 18,
              borderRadius: "50%",
              border: "2px solid transparent",
              borderTopColor: "#07BEB8",
              borderRightColor: "rgba(7,190,184,0.3)",
              animation: "chSpin 1s linear infinite",
              boxShadow: "0 0 10px rgba(7,190,184,0.4)",
            }}
          />
          {/* Reverse arc */}
          <div
            style={{
              position: "absolute",
              inset: 26,
              borderRadius: "50%",
              border: "1px solid transparent",
              borderBottomColor: "#07BEB8",
              animation: "chSpin 1.6s linear infinite reverse",
            }}
          />
          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#07BEB8",
              boxShadow: "0 0 16px #07BEB8, 0 0 32px rgba(7,190,184,0.4)",
              animation: "chPulse 1.2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.4em",
            color: "#07BEB8",
            textShadow: "0 0 20px rgba(7,190,184,0.5)",
          }}
        >
          COREHIVES
        </div>

        {/* Terminal boot lines */}
        <div
          style={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: 10,
                color: i === lines.length - 1 ? "#07BEB8" : "rgba(7,190,184,0.35)",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ color: "rgba(7,190,184,0.5)" }}>›</span>
              {line}
              {i === lines.length - 1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 11,
                    background: "#07BEB8",
                    animation: "chBlink 0.8s step-end infinite",
                    marginLeft: 2,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 6 }}>
          <div
            style={{
              width: "100%",
              height: 3,
              background: "rgba(7,190,184,0.1)",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(7,190,184,0.1)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #07BEB8, #4eecea)",
                boxShadow: "0 0 10px #07BEB8",
                borderRadius: 2,
                transition: "width 0.12s ease",
              }}
            />
          </div>

          {/* Progress labels */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 9,
              letterSpacing: "0.1em",
              color: "rgba(7,190,184,0.4)",
            }}
          >
            <span>0x00</span>
            <span style={{ color: "rgba(7,190,184,0.7)" }}>
              LOADING{dots}
            </span>
            <span>0x{hex}</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes chScan {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes chSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes chPing {
          0%        { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes chPulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.6; transform: translate(-50%, -50%) scale(0.8); }
        }
        @keyframes chBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
