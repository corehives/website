import { useState } from "react";
import BgApp from "../../assets/bg-app.png";
import { projectsData, projectTabs } from "./data";

export default function ProjectsSection() {
  const [activeProjectTab, setActiveProjectTab] = useState("agriculture");
  const currentProject = projectsData[activeProjectTab];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-5 py-16 sm:px-8 sm:py-20 md:px-20 md:py-24 lg:px-32 lg:py-28"
      style={{
        backgroundImage: `url(${BgApp})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Our <span className="precision-gradient">Successful</span> Mobile
            <br /> App <span className="precision-gradient">Projects</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed px-2">
            CoreHives features a strong portfolio of a variety of mobile apps
            showcasing our ability to deliver high-quality results that drive
            business success.
          </p>
        </div>

        {/* Tabs — scrollable flex on mobile, equal grid on desktop */}
        <div className="mb-10 -mx-5 sm:mx-0 overflow-x-auto sm:overflow-x-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative flex sm:grid sm:grid-cols-6 gap-6 sm:gap-0 w-max sm:w-auto px-5 sm:px-0">
            <div className="absolute bottom-0 left-5 right-5 sm:left-0 sm:right-0 h-px bg-white/15" />
            {projectTabs.map((tab) => {
              const active = activeProjectTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectTab(tab.id)}
                  className="relative flex-shrink-0 pb-3 pt-1 px-1 sm:px-2 text-center transition-colors duration-200 focus:outline-none"
                >
                  <span
                    className={`text-xs font-semibold leading-snug transition-colors duration-200 cursor-pointer whitespace-nowrap ${
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-4">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-2/3 h-auto mx-auto object-cover"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
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
