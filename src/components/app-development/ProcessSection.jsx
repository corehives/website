import { ArrowRight } from "lucide-react";
import BgApp from "../../assets/bg-app.png";
import { processSteps } from "./data";

export default function ProcessSection() {
  return (
    <section
      className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgApp})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CoreHives <span className="text-[#07BEB8]">Process</span> For
            Mobile App
            <br />
            Development
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            CoreHives has an entire treasure chest of variety of services,
            making sure they have something unique to offer every business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((process, index) => (
            <div
              key={index}
              className={`group border border-[#07BEB8]/30 hover:border-[#07BEB8]/80 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0a3a37]/40 to-[#051a19]/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#07BEB8]/20 hover:bg-gradient-to-br hover:from-[#0a3a37]/60 hover:to-[#051a19]/60 ${
                index === 6 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="text-5xl sm:text-6xl font-bold text-[#07BEB8]/20 group-hover:text-[#07BEB8]/40 transition-colors mb-4">
                {process.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#07BEB8] transition-colors">
                {process.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 line-clamp-4">
                {process.description}
              </p>
              <button
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#FFF] w-fit cursor-pointer transition-all hover:brightness-125"
                style={{
                  background: "rgba(7,190,184,0.09)",
                  border: "1px solid #9D9D9D",
                  boxShadow: "0 0 10px rgba(7,190,184,0.1)",
                }}
              >
                Read More
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
