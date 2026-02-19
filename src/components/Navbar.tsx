import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-gradient-sunset">
          RBTW
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Videos", "Destinations", "Wolfgang"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display text-sm tracking-widest text-foreground/70 transition-colors duration-200 hover:text-accent"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-gradient-sunset text-primary-foreground font-display text-sm tracking-wider gold-glow-hover transition-transform duration-200 hover:scale-105"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
