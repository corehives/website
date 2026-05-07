// Install: npm install embla-carousel-react
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

const CARD_HEIGHT = 260;

function StarRating({ count, max = 5 }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < count
              ? "text-[#FFF] fill-[#FFF]"
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
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function TestimonialCard({ testimonial, active }) {
  return (
    <div
      className="my-5"
      style={{
        height: CARD_HEIGHT,
        boxSizing: "border-box",
        overflow: "hidden",
        flexShrink: 0,
        borderRadius: 16,
        padding: active ? 24 : 20,
        position: "relative",
        transition: "all 0.35s ease",
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
      {/* Decorative glow on active */}
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
          avatar={testimonial.avatar}
          name={testimonial.name}
          size={active ? 64 : 48}
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: false,
    dragFree: false,
    slidesInView: 1, // ← add this
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative overflow-hidden bg-[#07beb826] py-20">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none top-40">
        <div
          className="w-[350px] h-[350px] rounded-full blur-[20px]"
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
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
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
                background: "linear-gradient(to bottom, #07BEB8, #33384B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Clients
            </span>{" "}
            say About us
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Don't just take our word for it, hear directly from our clients!
            Read on to see how we've helped Businesses like yours Thrive.
          </p>
        </div>

        {/* ── Embla Carousel ── */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center" style={{ marginLeft: "-10px" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{
                  flex: "0 0 320px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  boxSizing: "border-box",
                }}
                onClick={() => {
                  if (index !== selectedIndex) {
                    emblaApi && emblaApi.scrollTo(index);
                  }
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  active={selectedIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
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
              background: "#058682",
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
