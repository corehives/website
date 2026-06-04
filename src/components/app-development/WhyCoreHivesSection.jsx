import { useState } from "react";
import { whyItems } from "./data";

export default function WhyCoreHivesSection() {
  const [openId, setOpenId] = useState("expert");

  return (
    <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Heading + subtitle */}
        <div className="lg:sticky lg:top-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Why CoreHives <span className="precision-gradient">Stands Out</span> As
            A Mobile App Development Company
          </h2>
          <p className="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-sm">
            CoreHives has an entire treasure chest of variety of services,
            making sure they have something unique to offer every business.
          </p>
        </div>

        {/* Right: Accordion list */}
        <div className="flex flex-col gap-3">
          {whyItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#2a2a2a] bg-[#141414]"
                    : "border-[#1f1f1f] bg-[#0f0f0f]"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </span>
                  <span className="flex-shrink-0 ml-4 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out px-5 ${
                    isOpen
                      ? "max-h-96 pb-5 opacity-100"
                      : "max-h-0 pb-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-whote text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
