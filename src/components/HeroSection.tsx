import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background Image with Parallax feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="font-accent text-2xl md:text-3xl text-accent animate-fade-up mb-4">
          Fruten Fraten
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-gradient-sunset leading-none animate-fade-up-delay-1">
          Roberto Vs<br />The World
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 font-body font-light tracking-wide animate-fade-up-delay-2">
          Travel. Culture. Wolfgang.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <a
            href="https://www.youtube.com/@robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-sunset text-primary-foreground font-display text-xl tracking-wider gold-glow-hover transition-transform duration-300 hover:scale-105"
          >
            ▶ Watch on YouTube
          </a>
          <a
            href="https://www.instagram.com/robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent/50 text-accent font-display text-xl tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
          >
            Join the Wolfgang
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
