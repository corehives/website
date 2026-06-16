import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import CTAButton from "../shared/CTAButton";
import Logo from "../../assets/logo.png";

const serviceLinks = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Branding", href: "/services/branding" },
  {
    label: "Illustration & Animation",
    href: "/services/illustration-animation",
  },
  { label: "Tech Staff Outsourcing", href: "/services/tech-staff-outsourcing" },
  { label: "AI Market Optimization", href: "/services/ai-market-optimization" },
  { label: "Blockchain", href: "/services/blockchain" },
];

const productLinks = [
  { label: "Curelia.pro", href: "/products/corehive-crm" },
  { label: "Ascendera.ai", href: "/products/corehive-analytics" },
  { label: "thedrivingdesk.com", href: "/products/corehive-automation" },
  // { label: "AI Suite", href: "/products/corehive-ai-suite" },

];

const portfolioLinks = [
  {
    label: "Mobile App Development",
    href: "/portfolio/mobile-app-development",
  },
  { label: "Web Development", href: "/portfolio/web-development" },
  { label: "UI/UX Design", href: "/portfolio/ui-ux-design" },
  { label: "Custom Software", href: "/portfolio/custom-software" },
  { label: "Digital Marketing", href: "/portfolio/digital-marketing" },
  { label: "Branding & Illustration", href: "/portfolio/branding" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", menuKey: "services", links: serviceLinks },
  { label: "Our Products", menuKey: "products", links: productLinks },
  { label: "Portfolio", menuKey: "portfolio", links: portfolioLinks },
  { label: "Blog", to: "/blogs" },
  // { label: "Careers", to: "/careers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const navRef = useRef(null);
  const location = useLocation();

  const closeAll = () => {
    setIsMenuOpen(false);
    setMobileOpenMenu(null);
    setOpenMenu(null);
  };

  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  useEffect(() => {
    let frameId = 0;

    const syncScrollState = () => {
      frameId = 0;
      const next = window.scrollY > 20;
      setScrolled((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(syncScrollState);
    };

    syncScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDesktopMenu = (key) =>
    setOpenMenu((prev) => (prev === key ? null : key));
  const toggleMobileMenu = (key) =>
    setMobileOpenMenu((prev) => (prev === key ? null : key));

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(1, 10, 17, 0.15)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
            <img
              src={Logo}
              alt="CoreHives logo"
              className="h-20 w-auto sm:h-15"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className="hidden lg:block rounded-full border border-white/10 bg-[#010A11]/40 px-4 py-2 backdrop-blur-xl"
          >
            <ul className="flex items-center gap-1 text-sm text-white/80">
              {navItems.map((item) =>
                item.menuKey ? (
                  <li key={item.label} className="relative">
                    <button
                      onClick={() => toggleDesktopMenu(item.menuKey)}
                      className="flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          openMenu === item.menuKey ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMenu === item.menuKey && (
                      <div className="absolute left-0 top-full mt-2 min-w-55 rounded-2xl border border-white/10 bg-[#010A11]/95 p-2 shadow-xl backdrop-blur-xl">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            <CTAButton href="/contact">
              Hire a Developer
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? "mt-3 max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_24px_100px_-40px_rgba(15,23,42,0.95)] backdrop-blur-xl">
          <nav>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              {navItems.map((item) =>
                item.menuKey ? (
                  <li key={item.label}>
                    <button
                      onClick={() => toggleMobileMenu(item.menuKey)}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileOpenMenu === item.menuKey ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileOpenMenu === item.menuKey && (
                      <ul className="mt-1 flex flex-col gap-1 pl-4">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              onClick={closeAll}
                              className="flex items-center rounded-xl px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={closeAll}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <CTAButton href="/contact" onClick={closeAll} className="mt-4">
            Hire a Developer
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
