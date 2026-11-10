import { lazy, Suspense } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutMissionVision from "../components/about/AboutMissionVision";
import AboutValues from "../components/about/AboutValues";
import AboutWhyUs from "../components/about/AboutWhyUs";
import AboutStats from "../components/about/AboutStats";
import AboutTeam from "../components/about/AboutTeam";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutTeam />
      <AboutWhyUs />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
