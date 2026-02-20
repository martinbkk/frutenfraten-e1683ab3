import ScrollReveal from "./ScrollReveal";
import brazilImg from "@/assets/destinations-brazil.jpg";
import thailandImg from "@/assets/destinations-thailand.jpg";
import colombiaImg from "@/assets/destinations-colombia.jpg";
import laImg from "@/assets/destinations-la.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const destinations = [
  { name: "Brazil", subtitle: "Rio · São Paulo · Beaches", image: brazilImg },
  { name: "Thailand", subtitle: "Bangkok · Temples · Nightlife", image: thailandImg },
  { name: "Colombia", subtitle: "Medellín · Cartagena · Guatapé", image: colombiaImg },
  { name: "Los Angeles", subtitle: "Venice Beach · Hollywood · Culture", image: laImg },
];

const DestinationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="section-padding bg-gradient-ocean relative film-grain">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">{t("dest.pre")}</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset text-center mb-16">
            {t("dest.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.name} delay={i * 100}>
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer gold-glow-hover">
                <img
                  src={dest.image}
                  alt={`${dest.name} travel destination`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{dest.name}</h3>
                  <p className="text-sm text-foreground/60 font-body mt-1">{dest.subtitle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
