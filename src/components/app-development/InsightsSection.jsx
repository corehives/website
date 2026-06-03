import { useRef } from "react";
import BgApp from "../../assets/bg-app.png";
import { insightsData } from "./data";
import { ArrowRight } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function InsightsSection() {
  const trackRef = useRef(null);

  const slide = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const cardW = card ? card.offsetWidth + 20 : 340;
    track.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <section
      className="relative px-5 sm:px-10 lg:px-20 py-20 sm:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgApp})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            CoreHives Mobile App Development{" "}
            <span className="text-[#07BEB8]">Insights</span>
          </h2>
          <p className="mt-5 text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We have experts from every industry to offer the latest trends, best
            practices, and tips to enhance your mobile app's performance,
            security, and user engagement. Become a mobile development genius
            with CoreHives knowledge base.
          </p>
        </div>

        {/* Chevron arrows */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => slide(-1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#07BEB8] hover:text-[#07BEB8] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:border-[#07BEB8] hover:text-[#07BEB8] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {insightsData.map((post) => (
            <div
              key={post.id}
              data-card
              className="rounded-2xl border border-white/10 bg-[#0c1e1d]/80 backdrop-blur-sm overflow-hidden flex flex-col flex-shrink-0"
              style={{ width: "calc((100% - 40px) / 3)", minWidth: "260px" }}
            >
              <div className="w-full h-48 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-4 flex-1">
                  {post.description}
                </p>

                <div className="mt-4">
                  <CTAButton href="#">
                    Read More
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
