import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import PerfumeBottleIcon from "./PerfumeBottleIcon";

const FrutenFraten = () => {
  const { t } = useLanguage();

  return (
    <section id="fruten-fraten" className="section-padding relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with perfume icon */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <PerfumeBottleIcon size={32} className="opacity-60" />
            <h2 className="font-exotic text-6xl md:text-8xl text-gradient-sunset tracking-wider italic">
              Fruten Fraten
            </h2>
            <PerfumeBottleIcon size={32} className="opacity-60 scale-x-[-1]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-foreground/50 font-display text-sm tracking-[0.3em] uppercase mb-12">
            {t("ff.origin")}
          </p>
        </ScrollReveal>

        {/* Story block - editorial style */}
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden md:block" />
            <div className="md:pl-12 space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/80 font-serif-elegant italic leading-relaxed">
                {t("ff.story1")}
              </p>
              <p className="text-lg text-foreground/70 font-body leading-relaxed">
                {t("ff.story2")}
              </p>
              <p className="text-lg text-foreground/70 font-body leading-relaxed">
                {t("ff.story3")}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 gold-glow-hover transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌴</span>
              </div>
              <p className="font-display text-xl text-foreground tracking-wide">{t("ff.bold")}</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">{t("ff.bold.sub")}</p>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 gold-glow-hover transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <p className="font-display text-xl text-foreground tracking-wide">{t("ff.real")}</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">{t("ff.real.sub")}</p>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 gold-glow-hover transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <p className="font-display text-xl text-foreground tracking-wide">{t("ff.party")}</p>
              <p className="text-sm text-muted-foreground mt-2 font-body">{t("ff.party.sub")}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Closing quote */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="font-accent text-4xl md:text-5xl text-accent">
              Fruten Fraten. 🔥
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FrutenFraten;
