import ScrollReveal from "./ScrollReveal";
import perfumeCria from "@/assets/perfume-cria.jpg";
import perfumeCosmo from "@/assets/perfume-cosmo.jpg";
import perfumeFalang from "@/assets/perfume-falang.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const perfumes = [
  {
    name: "Falang Maffia",
    subtitle: "Signature Limited Edition",
    description:
      "The beginning of the Fruten Fraten story. For those who decide to follow their dreams and refuse to live on autopilot.",
    price: "$67.00",
    image: perfumeFalang,
    url: "https://frutenfraten.com/products/fruten-fraten%C2%AE-falang-maffia-limited-edtion",
    available: true,
  },
  {
    name: "Cria",
    subtitle: "Limited Edition",
    description:
      "Embrace the energy of the streets. Bold, vibrant, and unapologetically alive — just like the culture that inspired it.",
    price: "$67.00",
    image: perfumeCria,
    url: "https://frutenfraten.com/products/fruten-fraten%C2%AE-falang-maffia-limited-edtion-kopie",
    available: false,
  },
  {
    name: "Cosmo",
    subtitle: "Limited Edition",
    description:
      "A scent for the global explorer. Sophisticated yet adventurous — the perfect companion for nights that become stories.",
    price: "$67.00",
    image: perfumeCosmo,
    url: "https://frutenfraten.com/products/fruten-fraten%C2%AE-cosmo-limited-edtion",
    available: false,
  },
];

const PerfumeShop = () => {
  const { t } = useLanguage();

  return (
    <section id="shop" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">{t("shop.pre")}</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-exotic text-gradient-sunset text-center mb-4 tracking-wide">
            {t("shop.title")}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-center text-foreground/60 font-serif-elegant italic text-lg max-w-2xl mx-auto mb-16">
            {t("shop.subtitle")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, i) => (
            <ScrollReveal key={perfume.name} delay={i * 150 + 200}>
              <div className="group relative bg-card rounded-2xl overflow-hidden border border-border gold-glow-hover transition-all duration-500 hover:-translate-y-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={perfume.image}
                    alt={`Fruten Fraten ${perfume.name} perfume`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {!perfume.available && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-muted/90 backdrop-blur-sm text-muted-foreground text-xs font-display tracking-wider">
                      SOLD OUT
                    </div>
                  )}
                </div>
                <div className="p-6 -mt-8 relative">
                  <p className="text-accent/70 text-xs font-display tracking-[0.2em] uppercase mb-1">
                    {perfume.subtitle}
                  </p>
                  <h3 className="font-exotic text-3xl text-foreground mb-2 tracking-wide">
                    {perfume.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                    {perfume.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-accent">{perfume.price}</span>
                    <a
                      href={perfume.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 rounded-full font-display text-sm tracking-wider transition-all duration-300 ${
                        perfume.available
                          ? "bg-gradient-sunset text-primary-foreground gold-glow-hover hover:scale-105"
                          : "border border-border text-muted-foreground cursor-default"
                      }`}
                    >
                      {perfume.available ? t("shop.now") : t("shop.notify")}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={700}>
          <div className="text-center mt-12">
            <a
              href="https://frutenfraten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent/40 text-accent font-display text-lg tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
            >
              {t("shop.visit")} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PerfumeShop;
