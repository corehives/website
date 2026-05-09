import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Avatar4 from "../assets/avatar-4.png";
import Avatar5 from "../assets/avatar-5.png";
import Avatar6 from "../assets/avatar-6.png";

const testimonials = [
  {
    id: 1,
    name: "Tracy Schuppe",
    role: "Product Director at Humanity",
    rating: 4,
    avatar: Avatar4,
    text: "The solutions delivered by CoreHives have truly transformed our operations. Their in-depth understanding of our specific requirements, coupled with their tech staff's expertise, resulted in a solution that exceeded our expectations.",
  },
  {
    id: 2,
    name: "Jamie Wilkinson",
    role: "Business Process Improvement Manager",
    rating: 5,
    avatar: Avatar5,
    text: "We were looking to digitize our Warehousing processes, and consulted CoreHives. They came up with a centralized platform for managing all inventory data, including stock levels across various product categories.",
  },
  {
    id: 3,
    name: "Taylor Austin",
    role: "Head of Innovation & Tech",
    avatar: Avatar6,
    rating: 4,
    text: "Our partnership with CoreHives for customized solutions, including web development and app development, has been transformative. That strategic consultation honed in on our unique requirements.",
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "CTO at NovaBridge",
    avatar: Avatar4,
    rating: 5,
    text: "CoreHives exceeded every benchmark we set. Their team brought deep technical expertise and an unmatched level of dedication. The platform they built scaled beautifully and the ROI was evident within weeks.",
  },
  {
    id: 5,
    name: "Marcus Webb",
    role: "Operations Lead at FlowScale",
    avatar: Avatar5,
    rating: 5,
    text: "From kickoff to delivery, the CoreHives team was communicative, precise, and innovative. They didn't just build what we asked for — they challenged our thinking and delivered something even better.",
  },
];

const CARD_WIDTH = 340;
const CARD_HEIGHT = 260;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;
const N = testimonials.length;

// Single source of truth for timing — change only here
const TRANSITION_MS = 520;
const EASE = "cubic-bezier(0.45, 0.05, 0.25, 1)";

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

function AvatarImg({ avatar, name, size = 56 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

function TestimonialCard({ testimonial, active }) {
  return (
    <div
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        flexShrink: 0,
        borderRadius: 16,
        padding: active ? 24 : 20,
        position: "relative",
        boxSizing: "border-box",
        overflow: "hidden",
        // Card style transitions match TRANSITION_MS exactly so they
        // finish at the same moment the track does — no mid-flight swap
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
        <AvatarImg avatar={testimonial.avatar} name={testimonial.name} size={active ? 64 : 48} />
        <div>
          <p className="font-bold mb-0.5" style={{ color: "#fff", fontSize: active ? 15 : 13 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: 11, margin: 0, color: active ? "rgba(7,190,184,0.8)" : "rgba(255,255,255,0.4)" }}>
            {testimonial.role}
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: active ? 13 : 11,
          lineHeight: 1.7,
          color: active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.52)",
          display: "-webkit-box",
          WebkitLineClamp: active ? 5 : 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          margin: 0,
        }}
      >
        {active ? (
          <>
            <span style={{ fontWeight: 600, color: "#fff" }}>
              {testimonial.text.split(",").slice(0, 1).join(",")},
            </span>
            {testimonial.text.split(",").slice(1).join(",")}
          </>
        ) : (
          testimonial.text
        )}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  // Triple the list for seamless infinite loop
  const allCards = [...testimonials, ...testimonials, ...testimonials];

  // activeIdx always stays in the middle copy [N .. 2N-1]
  const [activeIdx, setActiveIdx] = useState(N);

  // trackX is the ABSOLUTE translateX value in pixels (not relative offset).
  // We compute it from activeIdx each time we settle, so the snap is invisible.
  const centerX = (idx) => -(idx * STEP) + 0; // will be added to 50% via CSS
  const [rawOffset, setRawOffset] = useState(0); // extra px during animation

  // Phase: "idle" | "sliding"
  const sliding = useRef(false);
  // const autoRef = useRef(null);
  const timerRef = useRef(null);

  // The track translateX = 50% - activeIdx*STEP - CARD_WIDTH/2 + rawOffset
  // During slide: rawOffset animates from 0 → ±STEP
  // After slide : activeIdx updates by ±1, rawOffset snaps back to 0 instantly
  const trackTransform = `translateX(calc(50% - ${activeIdx * STEP + CARD_WIDTH / 2}px + ${rawOffset}px))`;

  const [isAnimating, setIsAnimating] = useState(false);

  const shift = useCallback((dir) => {
    if (sliding.current) return;
    sliding.current = true;
    setIsAnimating(true);

    // 1. Start CSS transition: slide rawOffset by one STEP
    setRawOffset(-dir * STEP);

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
      setTimeout(() => { sliding.current = false; }, 32);
    }, TRANSITION_MS);
  }, []);

  const scrollPrev = useCallback(() => shift(-1), [shift]);
  const scrollNext = useCallback(() => shift(1), [shift]);

  // useEffect(() => {
  //   autoRef.current = setInterval(() => shift(1), 3800);
  //   return () => {
  //     clearInterval(autoRef.current);
  //     clearTimeout(timerRef.current);
  //   };
  // }, [shift]);

  // const pauseAuto = () => clearInterval(autoRef.current);
  // const resumeAuto = () => {
  //   autoRef.current = setInterval(() => shift(1), 3800);
  // };

  return (
    <section className="relative overflow-hidden bg-[#07beb826] py-20">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none top-40">
        <div
          className="w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(ellipse, rgba(7,190,184,0.2) 60%, transparent 100%)",
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
            Here's what{" "}
            <span
              style={{
                background: "#07BEB8",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Clients
            </span>{" "}
            say About us
          </h2>
          <p className="text-white text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Don't just take our word for it, hear directly from our clients!
            Read on to see how we've helped Businesses like yours Thrive.
          </p>
        </div>

        {/* Carousel — overflow:hidden crops outer cards */}
        <div
          style={{ width: "100%", overflow: "hidden" }}
        >
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
                  <TestimonialCard testimonial={testimonial} active={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-12 px-4">
          <button
            onClick={scrollPrev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              border: "1px solid rgba(7,190,184,0.35)",
              background: "rgba(7,190,184,0.06)",
              color: "white",
            }}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "#07BEB8",
              border: "none",
              color: "#000",
              boxShadow: "0 0 20px rgba(7,190,184,0.35)",
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}