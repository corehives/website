import { useState } from "react";
import { faqData } from "./data";

export default function FaqSection() {
  const [openId, setOpenId] = useState("platforms");

  return (
    <section className="bg-black px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Frequently Ask
            <br />
            <span className="text-[#07BEB8]">Questions!</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div>
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                >
                  <span
                    className={`text-sm sm:text-base font-medium transition-colors duration-200 pr-6 ${
                      isOpen ? "text-[#07BEB8]" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#07BEB8] flex items-center justify-center text-[#07BEB8] text-lg leading-none font-light">
                    {isOpen ? "+" : "−"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                {index < faqData.length - 1 && (
                  <div className="h-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
