import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  // { label: "Portfolio", to: "/our-portfolio" },
  { label: "Our Services", hasMenu: true },
  { label: "Company", to: "#" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Our Portfolio", href: "/our-portfolio" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  };

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

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src={Logo}
              alt="CoreHives logo"
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block rounded-full border border-white/10 bg-[#010A11]/40 px-4 py-2 backdrop-blur-xl">
            <ul className="flex items-center gap-1 text-sm text-white/80">
              {navItems.map((item) =>
                item.hasMenu ? (
                  <li key={item.label} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setServicesOpen((o) => !o)}
                      className="flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item.label}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-2xl border border-white/10 bg-[#010A11]/95 p-2 shadow-xl backdrop-blur-xl">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setServicesOpen(false)}
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
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
            >
              Hire a Developer
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
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
                item.hasMenu ? (
                  <li key={item.label}>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <ul className="mt-1 flex flex-col gap-1 pl-4">
                        {serviceLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              onClick={closeMenu}
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
                      onClick={closeMenu}
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
          <a
            href="#hire"
            onClick={closeMenu}
            className="mt-4 group flex items-center gap-2 rounded-full border border-[#07BEB8]/40 bg-[#07BEB8]/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#07BEB8]/20"
          >
            Hire a Developer
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
