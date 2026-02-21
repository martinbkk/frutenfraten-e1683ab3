import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import PerfumeBottleIcon from "./PerfumeBottleIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.about", href: "#about" },
    { key: "nav.shop", href: "#shop" },
    { key: "nav.videos", href: "#videos" },
    { key: "nav.wolfgang", href: "#wolfgang" },
    { key: "nav.bar", href: "#bar" },
    { key: "nav.experience", href: "/experience" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Perfume Icon + FRUTEN FRATEN */}
        <a href="/" className="flex items-center gap-2 group">
          <PerfumeBottleIcon size={16} />
          <span className="font-display text-sm md:text-base tracking-[0.2em] text-foreground uppercase">
            Fruten Fraten
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="font-display text-xs tracking-[0.2em] text-foreground/70 transition-colors duration-200 hover:text-accent uppercase"
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-sunset text-primary-foreground font-display text-xs tracking-wider gold-glow-hover transition-transform duration-200 hover:scale-105"
          >
            {t("nav.subscribe")}
          </a>
          <LanguageSelector />
        </div>

        {/* Mobile hamburger + language */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-lg tracking-[0.2em] text-foreground/80 hover:text-accent transition-colors uppercase"
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="https://www.youtube.com/@robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-sunset text-primary-foreground font-display text-sm tracking-wider"
            >
              {t("nav.subscribe")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
