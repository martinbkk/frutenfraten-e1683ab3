import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FrutenFraten = () => {
  const { t } = useLanguage();

  return (
    <section id="fruten-fraten" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-accent text-7xl md:text-9xl text-accent mb-8 animate-float">
            Fruten Fraten
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-foreground/80 font-body leading-relaxed mb-4">
            {t("ff.desc")}
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 font-body leading-relaxed mb-8">
            {t("ff.when")}{" "}
            <span className="font-accent text-accent text-3xl">"Fruten Fraten"</span>,{" "}
            {t("ff.means")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🌴</p>
              <p className="font-display text-xl text-foreground">{t("ff.bold")}</p>
              <p className="text-sm text-muted-foreground mt-2">{t("ff.bold.sub")}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🤝</p>
              <p className="font-display text-xl text-foreground">{t("ff.real")}</p>
              <p className="text-sm text-muted-foreground mt-2">{t("ff.real.sub")}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🔥</p>
              <p className="font-display text-xl text-foreground">{t("ff.party")}</p>
              <p className="text-sm text-muted-foreground mt-2">{t("ff.party.sub")}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FrutenFraten;
