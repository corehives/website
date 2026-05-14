import { benefitsRow1, benefitsRow2 } from "./data";

export default function BenefitsSection() {
  return (
    <section className="bg-[#080808] px-5 sm:px-10 lg:px-20 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="text-[#07BEB8]">Benefits</span> Of Choosing
            <br />
            CoreHives For Mobile App
            <br />
            Development
          </h2>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {benefitsRow1.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-6 sm:p-7"
            >
              <h3 className="text-sm font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-xs text-white leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {benefitsRow2.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-6 sm:p-7"
            >
              <h3 className="text-sm font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-xs text-white leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
