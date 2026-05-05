import Header from "./components/layout/header.jsx";
import Hero from "./components/hero.jsx";
import Solution from "./components/solution.jsx";
import OverView from "./components/overview.jsx";
import Partners from "./components/partners.jsx";
import Testimonials from "./components/testimonials.jsx";
import Awards from "./components/awards.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/layout/footer.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000405] text-white">
      <Header />
      <main>
        <Hero />
        <Solution />
        <OverView />
        <Partners />
        <Testimonials />
        <Awards />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
