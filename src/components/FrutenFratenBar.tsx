import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import barImage from "@/assets/ff-bar-koh-samui.jpg";
import PerfumeBottleIcon from "./PerfumeBottleIcon";

const FrutenFratenBar = () => {
  const { t } = useLanguage();

  return (
    <section id="bar" className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="relative min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${barImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

        {/* Neon glow effect overlay */}
        <div className="absolute inset-0 mix-blend-screen opacity-10 bg-gradient-to-br from-[hsl(270,80%,60%)] via-transparent to-[hsl(200,80%,50%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <PerfumeBottleIcon size={20} className="opacity-70" />
              <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">{t("bar.pre")}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-exotic text-5xl md:text-7xl lg:text-8xl text-gradient-sunset tracking-wider italic leading-none">
              Fruten Fraten Bar
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-2 font-serif-elegant text-xl md:text-2xl text-foreground/70 italic">
              Koh Samui, Thailand 🇹🇭
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Story */}
            <div className="space-y-6">
              <ScrollReveal>
                <p className="text-xl text-foreground/80 font-serif-elegant italic leading-relaxed">
                  {t("bar.intro")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-foreground/70 font-body leading-relaxed">
                  {t("bar.desc")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-foreground/70 font-body leading-relaxed">
                  {t("bar.vibe")}
                </p>
              </ScrollReveal>
            </div>

            {/* Right - Info card */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl bg-card border border-border p-8 gold-glow-hover transition-all duration-300 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-display text-lg text-foreground tracking-wide">{t("bar.location")}</p>
                      <p className="text-muted-foreground text-sm font-body">
                        Chaweng, Koh Samui, Surat Thani 84320, Thailand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-display text-lg text-foreground tracking-wide">{t("bar.hours")}</p>
                      <p className="text-muted-foreground text-sm font-body">7 PM – Late, Every Night</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎵</span>
                    <div>
                      <p className="font-display text-lg text-foreground tracking-wide">{t("bar.music")}</p>
                      <p className="text-muted-foreground text-sm font-body">Hip-Hop, R&B, Reggaeton, Brazilian Funk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎥</span>
                    <div>
                      <p className="font-display text-lg text-foreground tracking-wide">{t("bar.feature")}</p>
                      <p className="text-muted-foreground text-sm font-body">Roberto's videos playing on screen + signature cocktails</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="text-center">
                  <p className="font-accent text-2xl text-accent mb-3">
                    {t("bar.cta")}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Chaweng+Koh+Samui+Thailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-sunset text-primary-foreground font-display text-sm tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105"
                  >
                    📍 {t("bar.directions")}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrutenFratenBar;
