import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-base tracking-[0.2em] text-foreground mb-1 uppercase">
              <span className="text-accent text-xs mr-1">FF</span> Fruten Fraten
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mt-3">
              Travel creator, culture explorer, and founder of the Wolfgang community. Living life
              one adventure at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#about" className="transition-colors duration-200 hover:text-accent">{t("nav.about")}</a></li>
              <li><a href="#shop" className="transition-colors duration-200 hover:text-accent">{t("nav.shop")}</a></li>
              <li><a href="#videos" className="transition-colors duration-200 hover:text-accent">{t("nav.videos")}</a></li>
              <li><a href="#destinations" className="transition-colors duration-200 hover:text-accent">{t("nav.destinations")}</a></li>
              <li><a href="#wolfgang" className="transition-colors duration-200 hover:text-accent">{t("nav.wolfgang")}</a></li>
              <li><a href="/experience" className="transition-colors duration-200 hover:text-accent">{t("nav.experience")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">{t("nav.shop")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#shop" className="transition-colors duration-200 hover:text-accent">Perfume Collection</a></li>
              <li>
                <a href="https://frutenfraten.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-accent">
                  FrutenFraten.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2025 Roberto Vs The World. {t("footer.rights")}
          </p>
          <p className="font-accent text-accent text-xl">Fruten Fraten 🔥</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
