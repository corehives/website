import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services", hasMenu: true },
  { label: "Company", href: "#company" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(1, 10, 17, 0.15)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={Logo} alt="CoreHives logo" className="h-10 w-auto sm:h-11" />
          </a>

          <nav className="hidden lg:block rounded-full border border-white/10 bg-[#010A11]/40 px-4 py-2 backdrop-blur-xl">
            <ul className="flex items-center gap-1 text-sm text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                    {item.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#hire"
              className="group inline-flex items-center gap-2 rounded-full border border-white/50 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e]"
            >
              Hire a Developer
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#058682] text-slate-950 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_24px_100px_-40px_rgba(15,23,42,0.95)] backdrop-blur-xl">
          <nav>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span>{item.label}</span>
                    {item.hasMenu && <ChevronDown className="h-4 w-4" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#hire"
            onClick={closeMenu}
            className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/40 text-[#FFF] text-sm font-medium hover:bg-[#07BEB8]/20 transition-all duration-300"
          >
            Hire a Developer
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}