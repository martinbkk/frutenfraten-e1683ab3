import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const WolfgangSection = () => {
  const { t } = useLanguage();

  const socials = [
    {
      name: "YouTube",
      icon: "📺",
      href: "https://www.youtube.com/@robertovstheworld",
      desc: t("wolf.yt.desc"),
      stat: "441K+ Subscribers →",
    },
    {
      name: "Twitch",
      icon: "🎮",
      href: "https://www.twitch.tv/robertovstheworld",
      desc: t("wolf.tw.desc"),
      stat: "Follow Live →",
    },
    {
      name: "Instagram",
      icon: "📸",
      href: "https://www.instagram.com/robertovstheworld",
      desc: t("wolf.ig.desc"),
      stat: "340K+ Followers →",
    },
    {
      name: "TikTok",
      icon: "🎵",
      href: "https://www.tiktok.com/@robertovstheworld",
      desc: t("wolf.tt.desc"),
      stat: "Follow →",
    },
  ];

  return (
    <section id="wolfgang" className="section-padding bg-gradient-ocean relative film-grain">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">{t("wolf.pre")}</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset text-center mb-6">
            🐺 {t("wolf.title")}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-center text-lg text-foreground/70 font-body max-w-2xl mx-auto mb-16">
            {t("wolf.desc")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <ScrollReveal key={social.name} delay={i * 100 + 200}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{social.icon}</span>
                  <h3 className="font-display text-2xl text-foreground">{social.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{social.desc}</p>
                <p className="text-accent font-display text-lg mt-4">{social.stat}</p>
              </a>
            </ScrollReveal>
          ))}

          {/* Join the Pack card */}
          <ScrollReveal delay={700}>
            <div className="bg-card rounded-2xl p-8 border border-accent/30 gold-glow transition-all duration-300 h-full sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🐺</span>
                <h3 className="font-display text-2xl text-foreground">{t("wolf.join")}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {t("wolf.join.desc")}
              </p>
              <p className="font-accent text-accent text-2xl mt-4">Fruten Fraten! 🔥</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WolfgangSection;
