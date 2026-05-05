import React, { useState, useRef } from "react";
import BgLeft from "../assets/bg-left-content.png";
import BgRight from "../assets/bg-right-content.png";
import LogoInitals from "../assets/logo-initials.png";
import LineLeft from "../assets/line-left.png";
import LineRight from "../assets/line-right.png";
import LineBottom from "../assets/line-bottom.png";
import Preview from "../assets/preview.png";
import BGInnerCard from "../assets/bg-inner-card.png";
import AvatarReal from "../assets/avatar-real.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import menu from "../assets/menu.png";
import avatarMale from "../assets/avatar-male.png";
import BGBoxes from "../assets/bg-boxes.png";
import { ArrowRight } from "lucide-react";

const tagStyle = {
  background: "rgba(7,190,184,0.08)",
  border: "1px solid rgba(7,190,184,0.4)",
  borderRadius: 20,
  padding: "5px 14px",
  textAlign: "center",
  fontSize: "0.72rem",
  width: "100px",
  color: "#FFF",
};

const avatarStyle = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "2px solid rgba(0,245,212,0.3)",
  background: "linear-gradient(135deg, #1a4a5a, #0d2535)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.65rem",
  color: "#00f5d4",
  fontWeight: 700,
};

const cards = [
  {
    title: "Artificial Intelligence Solutions",
    desc: "Be Future-Ready with our Artificial Intelligence & Machine Learning Solutions",
    preview: (
      <div className="flex flex-col items-center w-full p-4 relative">
        <div className="flex justify-between w-full mb-6">
          <span style={tagStyle}>AI</span>
          <span style={tagStyle}>Chatbots</span>
        </div>
        <div className="relative flex items-center justify-center w-full my-2">
          <img
            src={LineLeft}
            className="absolute right-1/2 -mt-8 w-30 opacity-70"
            alt=""
          />
          <img
            src={LogoInitals}
            className="w-25 h-25 object-contain relative z-10"
            alt="logo"
          />
          <img
            src={LineRight}
            className="absolute left-1/2 -mt-8 w-30 opacity-70"
            alt=""
          />
        </div>
        <img src={LineBottom} className="h-10 opacity-70 -mt-2 mb-3" alt="" />
        <span style={{ ...tagStyle, width: "150px" }}>
          Predictive Analytics
        </span>
      </div>
    ),
  },
  {
    title: "Web & App Development",
    desc: "Creating Powerful Web and Mobile Apps for Businesses of all kinds.",
    preview: (
      <div className="flex items-end justify-center gap-3 w-full p-4 relative h-48 mb-21">
        <div className="absolute top-5 right-0 flex flex-row gap-1 z-20">
          <div className="w-5 h-[10px] rounded-full bg-white/60" />
          <div className="w-5 h-[10px] rounded-full bg-white/40" />
          <div className="w-5 h-[10px] rounded-full bg-white/50" />
        </div>
        <div
          className="w-40 h-50 rounded-xl absolute left-4 top-1/2"
          style={{ background: "rgba(0,245,212,0.08)" }}
        />
        <div
          className="w-40 h-50 rounded-xl absolute right-4 top-1/2"
          style={{ background: "rgba(0,245,212,0.08)" }}
        />
        <div className="w-60 h-58 absolute top-20 left-1/2 -translate-x-1/2 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={Preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Tech Staff Outsourcing",
    desc: "Hire Skilled Tech Professionals for less than half the Price!",
    preview: (
      <div className="flex flex-col items-center gap-4 p-4 w-full relative">
        <div
          className="w-80 h-74 rounded-2xl flex flex-col justify-between p-4"
          style={{
            background: "rgba(0,245,212,0.08)",
            border: "1px solid rgba(0,245,212,0.15)",
          }}
        >
          <span className="text-white text-sm">Making Post</span>
          <span className="absolute bg-white/20 top-20 right-10 w-65 h-2 rounded-2xl"></span>
          <span className="absolute bg-white/20 top-25 right-10 w-65 h-2 rounded-2xl"></span>
          <div className="absolute bg-white w-45 h-10 rounded-lg top-18 right-5 flex justify-end">
            {[avatar4, avatar5, avatar6, menu].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`avatar-${i}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid #FFFF",
                  marginLeft: i === 0 ? 0 : "-15px",
                  zIndex: 3 - i,
                  position: "relative",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between w-full gap-2">
            <div
              className="absolute left-3 top-52 -translate-y-1/2 w-10 h-40 overflow-hidden rounded-r-lg flex-shrink-0"
              style={{
                background: "rgba(225,225,225,0.5)",
                border: "1px solid rgba(225,225,225,0.12)",
              }}
            />
            <div
              className="w-45 h-40 rounded-lg flex-shrink-0 absolute left-20 top-32"
              style={{
                background: "rgba(225,225,225,0.3)",
                border: "1px solid rgba(225,225,225,0.12)",
              }}
            />
            <img
              src={AvatarReal}
              className="absolute bottom-10 left-24 h-32"
              alt=""
            />
            <div
              className="absolute right-3 top-52 -translate-y-1/2 w-10 h-40 overflow-hidden rounded-l-lg flex-shrink-0"
              style={{
                background: "rgba(225,225,225,0.5)",
                border: "1px solid rgba(225,225,225,0.12)",
              }}
            />
          </div>
        </div>
        <span
          style={{
            ...tagStyle,
            width: "110px",
            color: "#FFF",
            background: "rgba(7,190,184,0.2)",
          }}
          className="absolute bottom-10 left-0"
        >
          Expert team
        </span>
      </div>
    ),
  },
];

// ── Glow Card ──
function GlowCard({ card }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    el.style.setProperty("--x", "-999px");
    el.style.setProperty("--y", "-999px");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      style={{
        minHeight: "520px",
        background: "rgba(7,190,184,0.04)",
        border: "1px solid rgba(7,190,184,0.2)",
        boxShadow: "0 0 20px rgba(7,190,184,0.08)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(200px circle at var(--x) var(--y), rgba(7,190,184,0.13), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full flex-1">
        <div
          className="rounded-xl mb-6 relative overflow-hidden flex-shrink-0"
          style={{ height: "315px" }}
        >
          {card.preview}
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-2 mt-10">
            {card.title}
          </h3>
          <p className="text-sm text-[#8ca0b0] leading-relaxed mb-6 flex-1">
            {card.desc}
          </p>
          <div className="mt-auto">
            <button
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#FFF] w-fit cursor-pointer transition-all hover:brightness-125"
              style={{
                background: "rgba(7,190,184,0.09)",
                border: "1px solid #9D9D9D",
                boxShadow: "0 0 10px rgba(7,190,184,0.1)",
              }}
            >
              Read More
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07beb8] text-slate-950">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Accordion Data ──
const accordions = [
  {
    title: "Challenge",
    content:
      "Outdated and fragmented systems created operational inefficiencies, delayed insights, and restricted the ability to make real-time, data-driven decisions.",
  },
  {
    title: "Solution",
    content:
      "We implemented a unified low-code platform that streamlined workflows, enabled real-time reporting, and empowered teams to make faster, data-driven decisions with 70% less manual effort.",
  },
];

// ── Accordion Item ──
function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(7,190,184,0.35)",
      }}
    >
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 px-1 text-left transition-colors duration-200 hover:bg-white/5 rounded-lg"
      >
        <span
          className="font-semibold text-base"
          style={{ color: isOpen ? "#07BEB8" : "#ffffff" }}
        >
          {item.title}
        </span>
        <span
          className="text-lg flex-shrink-0 ml-4 inline-block"
          style={{
            color: isOpen ? "#07BEB8" : "#9ca3af",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
        >
          ↗
        </span>
      </button>

      {/* Animated body */}
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.3s ease",
        }}
      >
        <p className="text-white-400 text-sm leading-relaxed px-1 pb-4">
          {item.content}
        </p>
      </div>
    </div>
  );
}

// ── Main Section ──
export default function PartnersSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen flex flex-col justify-center text-[#e8f0f4] relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={BgLeft}
          alt=""
          className="absolute -top-130 left-0 w-full h-auto opacity-100"
        />
        <img
          src={BgRight}
          alt=""
          className="absolute -top-1/2 right-0 w-1/2 h-auto opacity-100"
        />
        <img
          src={BGBoxes}
          alt=""
          className="absolute bottom-0 right-0 w-1/5 h-auto"
        />
        <div
          className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(7,190,184,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Cards Section ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-baseline-last md:justify-between gap-10 mb-14">
          <div className="flex-1 max-w-lg">
            <p
              className="text-xs uppercase text-[#07BEB8] mb-3 font-medium"
              style={{ textShadow: "0 0 10px rgba(7,190,184,0.5)" }}
            >
              What We Offer
            </p>
            <h1 className="text-4xl sm:text-[2.625rem] font-extrabold leading-tight text-white">
              Your{" "}
              <span
                className="text-[#07BEB8]"
                style={{ textShadow: "0 0 20px rgba(7,190,184,0.5)" }}
              >
                Partners
              </span>{" "}
              in Digital Transformation
            </h1>
          </div>
          <div className="flex-1 max-w-lg md:pt-14">
            <p className="text-sm sm:text-base leading-relaxed text-white/60">
              Our solutions are crafted to help you leverage technology
              effectively, ensuring your operations are efficient, secure, and
              future-ready. From{" "}
              <span
                className="font-medium px-1 rounded"
                style={{ backgroundColor: "#07BEB8", color: "#0d2535" }}
              >
                Web & Mobile App Development to Artificial Intelligence
              </span>{" "}
              and beyond, here's how we're helping businesses go digital.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <GlowCard key={i} card={card} />
          ))}
        </div>
      </div>

      {/* ── Low-Code Section ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 mt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* ── Left Column 40% ── */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
            {/* Wrapper — adds top margin so image has room to overflow above */}
            <div className="relative mt-20 sm:mt-24">
              {/* Image — absolutely positioned ABOVE the card */}
              <div className="absolute -top-10 sm:-top-28 left-0 right-0 flex justify-center z-20 pointer-events-none">
                <img
                  src={avatarMale}
                  alt="Professional"
                  className="h-80 sm:h-100 w-auto object-contain object-bottom"
                />
              </div>

              {/* Glassmorphism card */}
              <div
                className="relative rounded-2xl overflow-hidden mb-10 h-70"
                style={{
                  background: "rgba(7,190,184,0.05)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderTop: "1px solid #07BEB8",
                  borderLeft: "1px solid #07BEB8",
                  borderRight: "1px solid #07BEB8",
                  borderBottom: "none",
                  boxShadow:
                    "0 0 32px rgba(7,190,184,0.15), inset 0 0 32px rgba(7,190,184,0.05)",
                }}
              >
                {/* Spacer so card has some height */}
                <div className="h-44 sm:h-52" />
              </div>
            </div>

            {/* Stat boxes — OUTSIDE & BELOW the card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className="rounded-xl p-3 sm:p-4 flex gap-3 items-center"
                style={{
                  background: "rgba(7,190,184,0.08)",
                  border: "1px solid rgba(7,190,184,0.3)",
                }}
              >
                <span
                  className="text-3xl sm:text-4xl font-bold block"
                  style={{ color: "#07BEB8" }}
                >
                  70%
                </span>
                <p className="text-xs text-white-400 mt-1 leading-tight">
                  Reduction In Manual Reporting
                </p>
              </div>
              <div
                className="rounded-xl p-3 sm:p-4 flex gap-3 items-center"
                style={{
                  background: "rgba(7,190,184,0.08)",
                  border: "1px solid rgba(7,190,184,0.3)",
                }}
              >
                <span
                  className="text-3xl sm:text-4xl font-bold block"
                  style={{ color: "#07BEB8" }}
                >
                  40%
                </span>
                <p className="text-xs text-white-400 mt-1 leading-tight">
                  Faster Decision-Making
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column 60% ── */}
          <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:pt-4">
            {/* Badge */}
            <span
              className="self-start text-xs sm:text-sm px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(7,190,184,0.1)",
                border: "1px solid rgba(7,190,184,0.4)",
                color: "#FFF",
              }}
            >
              Achieve more with less
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              How our{" "}
              <span style={{ color: "#07BEB8" }}>Low-Code Approach</span> helps
              save Time & Money
            </h2>

            {/* Body */}
            <p className="text-white-400 text-sm leading-relaxed">
              What sets us apart is our 'Low-Code' approach for custom
              development. We've used this approach to cut down on go-live times
              and save our clients money. We've streamlined processes that used
              to take weeks into days.
            </p>

            {/* CTA Button */}
            <button
              className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Read More
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#07BEB8", color: "#000" }}
              >
                ↗
              </span>
            </button>

            {/* Accordions */}
            <div className="flex flex-col mt-2">
              {accordions.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
