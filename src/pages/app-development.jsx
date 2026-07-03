import { lazy, Suspense } from "react";
import BannerSection from "../components/app-development/BannerSection";
import HeroContentSection from "../components/app-development/HeroContentSection";
import AppServicesSection from "../components/app-development/AppServicesSection";
import StatsSection from "../components/app-development/StatsSection";
import ProcessSection from "../components/app-development/ProcessSection";
import WhyCoreHivesSection from "../components/app-development/WhyCoreHivesSection";
import ProjectsSection from "../components/app-development/ProjectsSection";
import BenefitsSection from "../components/app-development/BenefitsSection";
import FaqSection from "../components/app-development/FaqSection";
import PricingSection from "../components/pricing/PricingSection";
import appDevelopmentPricingPlans from "../components/pricing/appDevelopmentPricingData.json";

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
      <PricingSection
        plans={appDevelopmentPricingPlans}
        eyebrow="Mobile product engagement models"
        title="App development pricing built for launches, growth, and long-term scale"
        description="Whether you are validating an MVP or expanding a mature product, these plans give you a clear delivery model with room to evolve as your roadmap grows."
        savingsLabel="Annual app retainers unlock the best long-term value"
        footerNote="Need a custom mobile roadmap or enterprise app scope?"
        footerDescription="We also handle discovery workshops, product redesigns, backend-heavy mobile platforms, and app plus web ecosystems with tailored engagement models."
        footerCtaText="Discuss your app scope"
        footerCtaHref="/contact"
        showToggle={false}
        showPeriod={false}
      />
      <FaqSection />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
