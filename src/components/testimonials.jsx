import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { getTestimonials } from "../services/api";

const CARD_WIDTH_MAX = 340;
const CARD_HEIGHT_MAX = 260;
const CARD_GAP = 16;

const TRANSITION_MS = 520;
const EASE = "cubic-bezier(0.45, 0.05, 0.25, 1)";

function useCardDimensions() {
  const [dims, setDims] = useState(() => {
    if (typeof window === "undefined")
      return { width: CARD_WIDTH_MAX, height: CARD_HEIGHT_MAX };
    const vw = window.innerWidth;
    if (vw < 640) {
      const w = Math.min(Math.round(vw * 0.84), CARD_WIDTH_MAX);
      return {
        width: w,
        height: Math.round((w / CARD_WIDTH_MAX) * CARD_HEIGHT_MAX),
      };
    }
    return { width: CARD_WIDTH_MAX, height: CARD_HEIGHT_MAX };
  });

  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth;
      if (vw < 640) {
        const w = Math.min(Math.round(vw * 0.84), CARD_WIDTH_MAX);
        setDims({
          width: w,
          height: Math.round((w / CARD_WIDTH_MAX) * CARD_HEIGHT_MAX),
        });
      } else {
        setDims({ width: CARD_WIDTH_MAX, height: CARD_HEIGHT_MAX });
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return dims;
}

function StarRating({ count, max = 5 }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < count
              ? "text-[#FFD139] fill-[#FFD139]"
              : "text-white/20 fill-white/20"
          }
        />
      ))}
    </div>
  );
}

function AvatarImg({ initials, name, size = 56 }) {
  const fontSize = size < 44 ? 13 : size < 52 ? 15 : 18;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        background: "linear-gradient(135deg, #07BEB8 0%, #4eecea 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 800,
        color: "#020617",
        letterSpacing: "0.02em",
        userSelect: "none",
      }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ testimonial, active, cw, ch }) {
  const compact = cw < 310;
  const pad = active ? (compact ? 16 : 24) : compact ? 12 : 20;
  const avatarSize = active ? (compact ? 52 : 64) : compact ? 40 : 48;

  return (
    <div
      style={{
        width: cw,
        height: ch,
        flexShrink: 0,
        borderRadius: 16,
        padding: pad,
        position: "relative",
        boxSizing: "border-box",
        overflow: "hidden",
        transition: `transform ${TRANSITION_MS}ms ${EASE}, opacity ${TRANSITION_MS}ms ${EASE}, box-shadow ${TRANSITION_MS}ms ${EASE}, background ${TRANSITION_MS}ms ${EASE}, border-color ${TRANSITION_MS}ms ${EASE}`,
        background: active
          ? "linear-gradient(145deg, #0d3533, #082e2c)"
          : "rgba(10,46,44,0.6)",
        border: active
          ? "1px solid rgba(7,190,184,0.45)"
          : "1px solid rgba(7,190,184,0.15)",
        boxShadow: active
          ? "0 0 40px rgba(7,190,184,0.12), 0 20px 60px rgba(0,0,0,0.4)"
          : "none",
        transform: active ? "scale(1.04)" : "scale(0.95)",
        opacity: active ? 1 : 0.72,
      }}
    >
      {active && (
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-tr-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(7,190,184,0.18), transparent)",
          }}
        />
      )}

      <StarRating count={testimonial.rating} />

      <div className="flex items-center gap-3 mb-3">
        <AvatarImg
          initials={testimonial.initials}
          name={testimonial.name}
          size={avatarSize}
        />
        <div>
          <p
            className="font-bold mb-0.5"
            style={{ color: "#fff", fontSize: active ? 15 : 13 }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontSize: 11,
              margin: 0,
              color: active ? "rgba(7,190,184,0.8)" : "rgba(255,255,255,0.4)",
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>

      {active && testimonial.title && (
        <p
          style={{
            fontSize: compact ? 12 : 13,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 6px",
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {testimonial.title}
        </p>
      )}

      <p
        style={{
          fontSize: active ? 13 : 11,
          lineHeight: 1.7,
          color: active ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.52)",
          display: "-webkit-box",
          WebkitLineClamp: active ? (compact ? 4 : 5) : compact ? 3 : 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          margin: 0,
        }}
      >
        {testimonial.text}
      </p>
    </div>
  );
}

function SkeletonCard({ cw, ch }) {
  return (
    <div
      style={{
        width: cw,
        height: ch,
        flexShrink: 0,
        borderRadius: 16,
        padding: 24,
        boxSizing: "border-box",
        background: "rgba(10,46,44,0.6)",
        border: "1px solid rgba(7,190,184,0.15)",
      }}
      className="animate-pulse"
    >
      <div className="h-3 w-24 rounded bg-white/10 mb-4" />
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-white/10" />
        <div className="flex-1">
          <div className="h-3 w-20 rounded bg-white/10 mb-2" />
          <div className="h-2.5 w-28 rounded bg-white/5" />
        </div>
      </div>
      <div className="h-2.5 w-full rounded bg-white/10 mb-2" />
      <div className="h-2.5 w-11/12 rounded bg-white/5 mb-2" />
      <div className="h-2.5 w-4/5 rounded bg-white/5" />
    </div>
  );
}

export default function TestimonialsSection() {
  const { width: cardWidth, height: cardHeight } = useCardDimensions();
  const step = cardWidth + CARD_GAP;
  // keep a ref so the shift callback always reads the latest step without
  // being recreated on every resize
  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  // ─── Data fetched from the API ────────────────────────────────────────────
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // activeIdx always stays in the middle copy [N .. 2N-1]
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let alive = true;
    getTestimonials()
      .then((data) => {
        if (!alive) return;
        const list = Array.isArray(data) ? data : [];
        setTestimonials(list);
        setActiveIdx(list.length); // re-center on the middle copy
        setError(false);
      })
      .catch(() => alive && setError(true))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const N = testimonials.length;

  // Triple the list for seamless infinite loop
  const allCards = useMemo(
    () =>
      N > 0 ? [...testimonials, ...testimonials, ...testimonials] : [],
    [testimonials, N],
  );

  const [rawOffset, setRawOffset] = useState(0);

  const sliding = useRef(false);
  const timerRef = useRef(null);
  const unlockRef = useRef(null);

  const trackTransform = `translateX(calc(50% - ${activeIdx * step + cardWidth / 2}px + ${rawOffset}px))`;

  const [isAnimating, setIsAnimating] = useState(false);

  const shift = useCallback(
    (dir) => {
      if (sliding.current || N === 0) return;
      sliding.current = true;
      setIsAnimating(true);

      setRawOffset(-dir * stepRef.current);

      // 2. After the transition finishes:
      //    a. Disable transition (no flash)
      //    b. Advance activeIdx by dir
      //    c. Reset rawOffset to 0
      //    All three happen in the same synchronous batch → one paint → no flicker
      timerRef.current = setTimeout(() => {
        // Batch all state updates together
        setIsAnimating(false); // kills CSS transition before next paint
        setActiveIdx((prev) => {
          let next = prev + dir;
          if (next < N) next += N;
          if (next >= 2 * N) next -= N;
          return next;
        });
        setRawOffset(0); // safe — transition is already off

        // Small guard before allowing next slide
        unlockRef.current = setTimeout(() => {
          sliding.current = false;
        }, 32);
      }, TRANSITION_MS);
    },
    [N],
  );

  const scrollPrev = useCallback(() => shift(-1), [shift]);
  const scrollNext = useCallback(() => shift(1), [shift]);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (unlockRef.current) {
        clearTimeout(unlockRef.current);
      }
    },
    [],
  );

  return (
    <section className="section-auto-render relative overflow-hidden bg-[#07beb826] py-20">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none top-40">
        <div
          className="w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(7,190,184,0.2) 60%, transparent 100%)",
          }}
        />
      </div>
      <div className="absolute pointer-events-none top-100 -right-40">
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "500px solid transparent",
            borderRight: "200px solid transparent",
            borderBottom: "530px solid rgba(7,190,184,0.25)",
            filter: "blur(200px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-14 px-4 sm:px-6 lg:px-10">
          <span
            className="inline-block text-[11px] tracking-[0.25em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(7,190,184,0.12)",
              border: "1px solid rgba(7,190,184,0.35)",
              color: "#FFF",
            }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Here's what <span className="precision-gradient">Our Clients</span>{" "}
            say About us
          </h2>
          <p className="text-white text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Don't just take our word for it, hear directly from our clients!
            Read on to see how we've helped Businesses like yours Thrive.
          </p>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div
            className="flex items-center justify-center gap-4"
            style={{ padding: "20px 0", overflow: "hidden" }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} cw={cardWidth} ch={cardHeight} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <p className="text-center text-sm text-white/55 px-4">
            We couldn't load testimonials right now. Please try again later.
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && N === 0 && (
          <p className="text-center text-sm text-white/55 px-4">
            No testimonials to show yet.
          </p>
        )}

        {/* Carousel — overflow:hidden crops outer cards */}
        {!loading && !error && N > 0 && (
          <>
            <div style={{ width: "100%", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: CARD_GAP,
                  padding: "20px 0",
                  transform: trackTransform,
                  // Transition only during slide phase — off during snap reset
                  transition: isAnimating
                    ? `transform ${TRANSITION_MS}ms ${EASE}`
                    : "none",
                  willChange: "transform",
                }}
              >
                {allCards.map((testimonial, i) => {
                  const isActive = i === activeIdx;
                  const relPos = i - activeIdx;
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        if (relPos < 0) shift(-1);
                        else if (relPos > 0) shift(1);
                      }}
                      style={{ cursor: isActive ? "default" : "pointer" }}
                    >
                      <TestimonialCard
                        testimonial={testimonial}
                        active={isActive}
                        cw={cardWidth}
                        ch={cardHeight}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-4 mt-12 px-4">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-black hover:bg-[#07BEB8]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-black hover:bg-[#07BEB8]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
