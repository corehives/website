import { useState } from "react";
import BgApp from "../../assets/bg-app.png";
import { projectsData, projectTabs } from "./data";

export default function ProjectsSection() {
  const [activeProjectTab, setActiveProjectTab] = useState("agriculture");
  const currentProject = projectsData[activeProjectTab];

  return (
    <section
      className="px-6 py-20 sm:py-28 sm:px-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgApp})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our <span className="text-[#07BEB8]">Successful</span> Mobile
            <br /> App <span className="text-[#07BEB8]">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            CoreHives features a strong portfolio of a variety of mobile apps
            showcasing our ability to deliver high-quality results that drive
            business success.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
          <div className="grid grid-cols-6">
            {projectTabs.map((tab) => {
              const active = activeProjectTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectTab(tab.id)}
                  className="relative pb-3 pt-1 text-center transition-colors duration-200 focus:outline-none"
                >
                  <span
                    className={`text-xs font-semibold leading-snug transition-colors duration-200 cursor-pointer ${
                      active ? "text-[#07BEB8]" : "text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-all duration-200 ${
                      active ? "bg-[#07BEB8]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        {currentProject && (
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-4">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-1/2 h-auto mx-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentProject.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {currentProject.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
