import { lazy, Suspense } from "react";
import BannerSection from "../components/app-development/BannerSection";
import HeroContentSection from "../components/app-development/HeroContentSection";
import AppServicesSection from "../components/app-development/AppServicesSection";
import StatsSection from "../components/app-development/StatsSection";
import ProcessSection from "../components/app-development/ProcessSection";
import WhyCoreHivesSection from "../components/app-development/WhyCoreHivesSection";
import ProjectsSection from "../components/app-development/ProjectsSection";
import BenefitsSection from "../components/app-development/BenefitsSection";
import InsightsSection from "../components/app-development/InsightsSection";
import FaqSection from "../components/app-development/FaqSection";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

export default function AppDevelopment() {
  return (
    <>
      <BannerSection />
      <HeroContentSection />
      <AppServicesSection />
      <StatsSection />
      <ProcessSection />
      <WhyCoreHivesSection />
      <ProjectsSection />
      <BenefitsSection />
      <InsightsSection /> 
      <FaqSection />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
