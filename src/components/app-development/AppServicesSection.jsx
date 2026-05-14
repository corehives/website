import { useState } from "react";
import BgApp from "../../assets/bg-app.png";
import { appServicesData, appServiceTabs } from "./data";

export default function AppServicesSection() {
  const [activeTechTab, setActiveTechTab] = useState("ios");
  const currentService = appServicesData[activeTechTab];

  return (
    <section
      className="px-6 py-20 sm:py-28 sm:px-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgApp})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Innovative
            <span className="text-[#07BEB8]"> Mobile App Development</span>
            <br />
            <span className="text-[#07BEB8]">Services</span> For Your Custom
            Needs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            CoreLives has an entire treasure chest of variety of services,
            making sure they have something unique to offer every business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Tabs List */}
          <div className="col-span-1">
            <div className="space-y-3">
              {appServiceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTechTab(tab.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeTechTab === tab.id
                      ? "bg-[#FFF] border-l-3 border-[#07BEB8]"
                      : "bg-transparent border-l-4 border-transparent hover:bg-white/10"
                  }`}
                >
                  <h3
                    className={`text-sm sm:text-base font-semibold transition-colors ${
                      activeTechTab === tab.id
                        ? "text-black"
                        : "text-white hover:text-white"
                    }`}
                  >
                    {tab.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="col-span-1">
            {currentService && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {currentService.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="col-span-1">
            {currentService && (
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-auto object-contain transition-opacity duration-500"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#07BEB8]/20 to-transparent rounded-3xl -z-10 blur-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
