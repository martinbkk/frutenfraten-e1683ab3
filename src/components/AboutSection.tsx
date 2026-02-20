import ScrollReveal from "./ScrollReveal";
import robertoCartoon from "@/assets/roberto-cartoon.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-ocean relative film-grain overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Roberto cartoon - large, behind content on right */}
      <div className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[500px] lg:w-[600px] opacity-15 md:opacity-20 pointer-events-none z-0">
        <img
          src={robertoCartoon}
          alt=""
          className="w-full h-auto object-contain mix-blend-lighten"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Left — Text (3 cols) */}
          <div className="md:col-span-3 space-y-8">
            <ScrollReveal>
              <p className="font-accent text-2xl text-accent mb-1">{t("about.pre")}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-5xl md:text-7xl font-exotic text-gradient-sunset leading-tight tracking-wide">
                {t("about.title1")}<br />{t("about.title2")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="h-px w-24 bg-gradient-to-r from-accent to-transparent" />
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-xl text-foreground/80 font-serif-elegant italic leading-relaxed">
                "{t("about.quote")}"
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-5 text-foreground/70 font-body leading-relaxed">
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Stats card (2 cols) */}
          <div className="md:col-span-2">
            <ScrollReveal delay={350}>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-sunset p-[1px] gold-glow">
                  <div className="rounded-2xl bg-card p-8 space-y-6">
                    <div className="text-center mb-6">
                      <p className="font-exotic text-6xl text-gradient-sunset tracking-wide">441K+</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">{t("about.subs")}</p>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="space-y-5">
                      {[
                        { icon: "🌍", label: "20+ Countries", detail: "Explored & Documented" },
                        { icon: "🎬", label: "400+ Videos", detail: "Raw Travel Content" },
                        { icon: "🐺", label: "Wolfgang", detail: "Global Community" },
                        { icon: "🧴", label: "Fruten Fraten®", detail: "Perfume Brand" },
                      ].map((stat) => (
                        <div key={stat.label} className="flex items-center gap-4">
                          <span className="text-2xl w-8 text-center">{stat.icon}</span>
                          <div>
                            <p className="text-foreground font-display text-lg tracking-wide">{stat.label}</p>
                            <p className="text-muted-foreground text-xs">{stat.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-border" />

                    <div className="text-center">
                      <p className="font-accent text-accent text-2xl">Fruten Fraten 🔥</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
