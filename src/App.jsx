import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/layout/header.jsx";
import TawkToChat from "./components/TawkToChat.jsx";
import Hero from "./components/hero.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

// Admin panel (lazy, rendered without the public Header/TawkToChat chrome)
const AdminLayout = lazy(() => import("./components/admin/AdminLayout.jsx"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin.jsx"));
const TestimonialsAdmin = lazy(() => import("./pages/admin/TestimonialsAdmin.jsx"));
const BlogsAdmin = lazy(() => import("./pages/admin/BlogsAdmin.jsx"));
const JobsAdmin = lazy(() => import("./pages/admin/JobsAdmin.jsx"));

const ADMIN_TOKEN_KEY = "corehives_admin_token";

// Guards protected admin routes; bounces to login when no token is present.
function ProtectedRoute({ children }) {
  if (!localStorage.getItem(ADMIN_TOKEN_KEY)) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}

// Simple fallback so admin routes never trigger the public LoadingScreen overlay.
function AdminFallback() {
  return <div className="min-h-screen bg-[#07090f]" />;
}

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

// Portfolio service pages
const PortfolioMobileApp = lazy(() => import("./pages/portfolio/mobile-app-development.jsx"));
const PortfolioWebDevelopment = lazy(() => import("./pages/portfolio/web-development.jsx"));
const PortfolioUiUxDesign = lazy(() => import("./pages/portfolio/ui-ux-design.jsx"));
const PortfolioCustomSoftware = lazy(() => import("./pages/portfolio/custom-software.jsx"));
const PortfolioDigitalMarketing = lazy(() => import("./pages/portfolio/digital-marketing.jsx"));
const PortfolioBranding = lazy(() => import("./pages/portfolio/branding.jsx"));
const Careers    = lazy(() => import("./pages/careers.jsx"));
const Blogs      = lazy(() => import("./pages/blogs.jsx"));
const BlogDetail = lazy(() => import("./pages/blog-detail.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/privacy.jsx"));
const CookiePolicy = lazy(() => import("./pages/cookie-policy.jsx"));

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
import("./pages/portfolio/mobile-app-development.jsx");
import("./pages/portfolio/web-development.jsx");
import("./pages/portfolio/ui-ux-design.jsx");
import("./pages/portfolio/custom-software.jsx");
import("./pages/portfolio/digital-marketing.jsx");
import("./pages/portfolio/branding.jsx");
import("./pages/careers.jsx");
import("./pages/blogs.jsx");
import("./pages/blog-detail.jsx");
import("./pages/privacy.jsx");
import("./pages/cookie-policy.jsx");

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

function AdminRoutes() {
  return (
    <Suspense fallback={<AdminFallback />}>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/corehives/admin"
          element={<Navigate to="/corehives/admin/testimonials" replace />}
        />
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/corehives/admin/testimonials" element={<TestimonialsAdmin />} />
          <Route path="/corehives/admin/blogs" element={<BlogsAdmin />} />
          <Route path="/corehives/admin/jobs" element={<JobsAdmin />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading]   = useState(true);
  const [mounted, setMounted]   = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location}>
        {/* Core pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/mobile-app-development" element={<AppDevelopment />} />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingScreen />}>
            <ContactPage />
            <Footer />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingScreen />}>
            <AboutUs />
          </Suspense>
        } />

        {/* Service pages */}
        <Route path="/services/branding" element={
          <Suspense fallback={<LoadingScreen />}><Branding /></Suspense>
        } />
        <Route path="/services/illustration-animation" element={
          <Suspense fallback={<LoadingScreen />}><IllustrationAnimation /></Suspense>
        } />
        <Route path="/services/tech-staff-outsourcing" element={
          <Suspense fallback={<LoadingScreen />}><TechStaffOutsourcing /></Suspense>
        } />
        <Route path="/services/ai-market-optimization" element={
          <Suspense fallback={<LoadingScreen />}><AIMarketOptimization /></Suspense>
        } />
        <Route path="/services/blockchain" element={
          <Suspense fallback={<LoadingScreen />}><Blockchain /></Suspense>
        } />

        {/* Product pages */}
        <Route path="/products/corehive-crm" element={
          <Suspense fallback={<LoadingScreen />}><CoreHiveCrm /></Suspense>
        } />
        <Route path="/products/corehive-analytics" element={
          <Suspense fallback={<LoadingScreen />}><CoreHiveAnalytics /></Suspense>
        } />
        <Route path="/products/corehive-automation" element={
          <Suspense fallback={<LoadingScreen />}><CoreHiveAutomation /></Suspense>
        } />

        {/* Portfolio service pages */}
        <Route path="/portfolio/mobile-app-development" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioMobileApp /></Suspense>
        } />
        <Route path="/portfolio/web-development" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioWebDevelopment /></Suspense>
        } />
        <Route path="/portfolio/ui-ux-design" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioUiUxDesign /></Suspense>
        } />
        <Route path="/portfolio/custom-software" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioCustomSoftware /></Suspense>
        } />
        <Route path="/portfolio/digital-marketing" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioDigitalMarketing /></Suspense>
        } />
        <Route path="/portfolio/branding" element={
          <Suspense fallback={<LoadingScreen />}><PortfolioBranding /></Suspense>
        } />

        {/* Careers */}
        <Route path="/careers" element={
          <Suspense fallback={<LoadingScreen />}><Careers /></Suspense>
        } />

        {/* Privacy Policy */}
        <Route path="/privacy" element={
          <Suspense fallback={<LoadingScreen />}><PrivacyPolicy /></Suspense>
        } />

        {/* Cookie Policy */}
        <Route path="/cookie-policy" element={
          <Suspense fallback={<LoadingScreen />}><CookiePolicy /></Suspense>
        } />

        {/* Blog */}
        <Route path="/blogs" element={
          <Suspense fallback={<LoadingScreen />}><Blogs /></Suspense>
        } />
        <Route path="/blogs/:slug" element={
          <Suspense fallback={<LoadingScreen />}><BlogDetail /></Suspense>
        } />
      </Routes>
    </Suspense>
    </>
  );
}

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/corehives/admin") || location.pathname === "/admin-login";

  if (isAdmin) {
    return <AdminRoutes />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000405] text-white">
      <Header />
      <AppRoutes />
      <TawkToChat />
    </div>
  );
}

export default App;
