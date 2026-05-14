import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/header.jsx";
import Hero from "./components/hero.jsx";
import PageLoader from "./components/PageLoader.jsx";

const Solution = lazy(() => import("./components/solution.jsx"));
const OverView = lazy(() => import("./components/overview.jsx"));
const Partners = lazy(() => import("./components/partners.jsx"));
const Testimonials = lazy(() => import("./components/testimonials.jsx"));
const Awards = lazy(() => import("./components/awards.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));
const Footer = lazy(() => import("./components/layout/footer.jsx"));
const WebDevelopment = lazy(() => import("./pages/web-development.jsx"));
const OurPortfolio = lazy(() => import("./pages/our-portfolio.jsx"));
const AppDevelopment = lazy(() => import("./pages/app-development.jsx"));

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
          <Contact />
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Minimum display time so the loader doesn't flash
    const minDisplay = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(minDisplay);
  }, [location.pathname]);

  if (loading) return <PageLoader />;

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/mobile-app-development" element={<AppDevelopment />} />
      </Routes>
    </Suspense>
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
