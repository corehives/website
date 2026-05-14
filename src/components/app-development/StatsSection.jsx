import { statsData } from "./data";

export default function StatsSection() {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-28 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16 sm:mb-20">
          Why CoreHives?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="border border-gray-700 hover:border-[#07BEB8]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#07BEB8]/20 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-[#07BEB8] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <h3 className="text-sm sm:text-base text-center font-semibold text-gray-300 mb-3 sm:mb-4">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-center text-white leading-relaxed group-hover:text-gray-300 transition-colors">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
