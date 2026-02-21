import heroBg from "@/assets/hero-roberto-sunset.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import PerfumeBottleIcon from "./PerfumeBottleIcon";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Primary brand */}
        <h1 className="font-exotic text-7xl md:text-9xl lg:text-[11rem] text-gradient-sunset leading-none animate-fade-up tracking-wider italic">
          Fruten Fraten
        </h1>

        {/* Secondary brand */}
        <p className="mt-4 font-display text-2xl md:text-3xl text-foreground/70 tracking-[0.3em] uppercase animate-fade-up-delay-1">
          {t("hero.subtitle")}
        </p>

        <p className="mt-4 text-lg md:text-xl text-foreground/60 font-serif-elegant italic tracking-wide animate-fade-up-delay-2">
          {t("hero.tagline")}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          {/* Perfume CTA */}
          <a
            href="#shop"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-sunset text-primary-foreground font-display text-lg tracking-widest gold-glow-hover transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(24_95%_53%/0.5)]"
          >
            <PerfumeBottleIcon size={14} className="opacity-90" />
            {t("hero.shop")}
          </a>
          {/* Experience Brazil CTA */}
          <a
            href="/experience"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-accent/50 text-accent font-display text-lg tracking-widest gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent/10"
          >
            🇧🇷 {t("hero.experience")}
          </a>
          <a
            href="https://www.youtube.com/@robertovstheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground/80 font-display text-lg tracking-widest transition-all duration-300 hover:scale-105 hover:border-foreground/40"
          >
            ▶ {t("hero.youtube")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
