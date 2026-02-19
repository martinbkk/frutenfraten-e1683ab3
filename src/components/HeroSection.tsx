import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Primary brand */}
        <h1 className="font-exotic text-7xl md:text-9xl lg:text-[11rem] text-gradient-sunset leading-none animate-fade-up tracking-wider">
          Fruten Fraten
        </h1>

        {/* Secondary brand */}
        <p className="mt-4 font-display text-2xl md:text-3xl text-foreground/70 tracking-[0.3em] uppercase animate-fade-up-delay-1">
          Roberto Vs The World
        </p>

        <p className="mt-4 text-lg md:text-xl text-foreground/60 font-serif-elegant italic tracking-wide animate-fade-up-delay-2">
          Travel. Culture. Wolfgang.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          {/* Perfume CTA - Primary */}
          <a
            href="#shop"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-lg bg-gradient-sunset text-primary-foreground font-exotic text-2xl tracking-wider gold-glow-hover transition-transform duration-300 hover:scale-105"
          >
            🧴 Shop Perfumes
          </a>
          <a
            href="https://www.youtube.com/@robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent/40 text-accent font-display text-xl tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
