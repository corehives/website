import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/header.jsx";
import Hero from "./components/hero.jsx";
import PageLoader from "./components/PageLoader.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

// Home page sections
const Solution = lazy(() => import("./components/solution.jsx"));
const OverView = lazy(() => import("./components/overview.jsx"));
const Partners = lazy(() => import("./components/partners.jsx"));
const Testimonials = lazy(() => import("./components/testimonials.jsx"));
const Awards = lazy(() => import("./components/awards.jsx"));
const ContactSection = lazy(() => import("./components/contact.jsx"));
const Footer = lazy(() => import("./components/layout/footer.jsx"));

// Service pages
const WebDevelopment = lazy(() => import("./pages/web-development.jsx"));
const OurPortfolio = lazy(() => import("./pages/our-portfolio.jsx"));
const AppDevelopment = lazy(() => import("./pages/app-development.jsx"));
const ContactPage = lazy(() => import("./pages/contact-us.jsx"));
const AboutUs = lazy(() => import("./pages/about-us.jsx"));
const Branding = lazy(() => import("./pages/branding.jsx"));
const IllustrationAnimation = lazy(() => import("./pages/illustration-animation.jsx"));
const TechStaffOutsourcing = lazy(() => import("./pages/tech-staff-outsourcing.jsx"));
const AIMarketOptimization = lazy(() => import("./pages/ai-market-optimization.jsx"));
const Blockchain = lazy(() => import("./pages/blockchain.jsx"));

// Product pages
const CoreHiveCrm = lazy(() => import("./pages/products/corehive-crm.jsx"));
const CoreHiveAnalytics = lazy(() => import("./pages/products/corehive-analytics.jsx"));
const CoreHiveAutomation = lazy(() => import("./pages/products/corehive-automation.jsx"));
const CoreHiveAiSuite = lazy(() => import("./pages/products/corehive-ai-suite.jsx"));

// Portfolio service pages
const PortfolioMobileApp = lazy(() => import("./pages/portfolio/mobile-app-development.jsx"));
const PortfolioWebDevelopment = lazy(() => import("./pages/portfolio/web-development.jsx"));
const PortfolioUiUxDesign = lazy(() => import("./pages/portfolio/ui-ux-design.jsx"));
const PortfolioCustomSoftware = lazy(() => import("./pages/portfolio/custom-software.jsx"));
const PortfolioDigitalMarketing = lazy(() => import("./pages/portfolio/digital-marketing.jsx"));
const PortfolioBranding = lazy(() => import("./pages/portfolio/branding.jsx"));

// Eagerly download every route chunk as soon as this module is evaluated.
// import() is deduplicated by Vite/the module registry — these reuse the
// exact same chunks as the lazy() declarations above, no double-fetch.
// The 2100ms loader window is the budget; chunks arrive before dismiss.
import("./components/solution.jsx");
import("./components/overview.jsx");
import("./components/partners.jsx");
import("./components/testimonials.jsx");
import("./components/awards.jsx");
import("./components/contact.jsx");
import("./components/layout/footer.jsx");
import("./pages/web-development.jsx");
import("./pages/our-portfolio.jsx");
import("./pages/app-development.jsx");
import("./pages/contact-us.jsx");
import("./pages/about-us.jsx");
import("./pages/branding.jsx");
import("./pages/illustration-animation.jsx");
import("./pages/tech-staff-outsourcing.jsx");
import("./pages/ai-market-optimization.jsx");
import("./pages/blockchain.jsx");
import("./pages/products/corehive-crm.jsx");
import("./pages/products/corehive-analytics.jsx");
import("./pages/products/corehive-automation.jsx");
import("./pages/products/corehive-ai-suite.jsx");
import("./pages/portfolio/mobile-app-development.jsx");
import("./pages/portfolio/web-development.jsx");
import("./pages/portfolio/ui-ux-design.jsx");
import("./pages/portfolio/custom-software.jsx");
import("./pages/portfolio/digital-marketing.jsx");
import("./pages/portfolio/branding.jsx");

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Solution />
          <OverView />
          <Partners />
          <Testimonials />
          <Awards />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading]   = useState(true);
  const [mounted, setMounted]   = useState(true);

  useEffect(() => {
    setLoading(true);
    setMounted(true);
    const SHOW = 2100; // minimum display ms
    const FADE = 820;  // must exceed LoadingScreen CSS transition (0.75s)
    const t1 = setTimeout(() => setLoading(false), SHOW);
    const t2 = setTimeout(() => setMounted(false), SHOW + FADE);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  return (
    <>
      {mounted && <LoadingScreen visible={loading} />}
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
        {/* Core pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/mobile-app-development" element={<AppDevelopment />} />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
            <Footer />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<PageLoader />}>
            <AboutUs />
          </Suspense>
        } />

        {/* Service pages */}
        <Route path="/services/branding" element={
          <Suspense fallback={<PageLoader />}><Branding /></Suspense>
        } />
        <Route path="/services/illustration-animation" element={
          <Suspense fallback={<PageLoader />}><IllustrationAnimation /></Suspense>
        } />
        <Route path="/services/tech-staff-outsourcing" element={
          <Suspense fallback={<PageLoader />}><TechStaffOutsourcing /></Suspense>
        } />
        <Route path="/services/ai-market-optimization" element={
          <Suspense fallback={<PageLoader />}><AIMarketOptimization /></Suspense>
        } />
        <Route path="/services/blockchain" element={
          <Suspense fallback={<PageLoader />}><Blockchain /></Suspense>
        } />

        {/* Product pages */}
        <Route path="/products/corehive-crm" element={
          <Suspense fallback={<PageLoader />}><CoreHiveCrm /></Suspense>
        } />
        <Route path="/products/corehive-analytics" element={
          <Suspense fallback={<PageLoader />}><CoreHiveAnalytics /></Suspense>
        } />
        <Route path="/products/corehive-automation" element={
          <Suspense fallback={<PageLoader />}><CoreHiveAutomation /></Suspense>
        } />
        <Route path="/products/corehive-ai-suite" element={
          <Suspense fallback={<PageLoader />}><CoreHiveAiSuite /></Suspense>
        } />

        {/* Portfolio service pages */}
        <Route path="/portfolio/mobile-app-development" element={
          <Suspense fallback={<PageLoader />}><PortfolioMobileApp /></Suspense>
        } />
        <Route path="/portfolio/web-development" element={
          <Suspense fallback={<PageLoader />}><PortfolioWebDevelopment /></Suspense>
        } />
        <Route path="/portfolio/ui-ux-design" element={
          <Suspense fallback={<PageLoader />}><PortfolioUiUxDesign /></Suspense>
        } />
        <Route path="/portfolio/custom-software" element={
          <Suspense fallback={<PageLoader />}><PortfolioCustomSoftware /></Suspense>
        } />
        <Route path="/portfolio/digital-marketing" element={
          <Suspense fallback={<PageLoader />}><PortfolioDigitalMarketing /></Suspense>
        } />
        <Route path="/portfolio/branding" element={
          <Suspense fallback={<PageLoader />}><PortfolioBranding /></Suspense>
        } />
      </Routes>
    </Suspense>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000405] text-white">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
