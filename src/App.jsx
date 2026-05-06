import { lazy, Suspense } from "react";
import Header from "./components/layout/header.jsx";
import Hero from "./components/hero.jsx";

const Solution = lazy(() => import("./components/solution.jsx"));
const OverView = lazy(() => import("./components/overview.jsx"));
const Partners = lazy(() => import("./components/partners.jsx"));
const Testimonials = lazy(() => import("./components/testimonials.jsx"));
const Awards = lazy(() => import("./components/awards.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));
const Footer = lazy(() => import("./components/layout/footer.jsx"));

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000405] text-white">
      <Header />
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
    </div>
  );
}

export default App;
