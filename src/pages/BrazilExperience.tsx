import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import brazilBg from "@/assets/brazil-experience-bg.jpg";

type Vibe = "day" | "night" | "full";

const BrazilExperience = () => {
  const { t } = useLanguage();
  const [activeVibe, setActiveVibe] = useState<Vibe>("full");
  const [formData, setFormData] = useState({ name: "", dates: "", group: "", vibe: "" });
  const [submitted, setSubmitted] = useState(false);

  const vibes: { key: Vibe; label: string; emoji: string }[] = [
    { key: "day", label: t("exp.day"), emoji: "🌊" },
    { key: "night", label: t("exp.night"), emoji: "🌆" },
    { key: "full", label: t("exp.full"), emoji: "🔥" },
  ];

  const dayFeatures = [
    "Beach spots locals actually go to",
    "Authentic Brazilian food stops",
    "Street culture & city exploration",
    "Hidden viewpoints & secret spots",
  ];

  const nightFeatures = [
    "Local bars, not tourist traps",
    "Real Brazilian party scene",
    "Safe navigation with insider guidance",
    "Cultural context at every stop",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground/70 hover:text-accent font-display text-sm tracking-wider transition-all"
      >
        ← Back
      </a>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden film-grain">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${brazilBg})` }}
        />
        <div className={`absolute inset-0 transition-all duration-1000 ${
          activeVibe === "day"
            ? "bg-gradient-to-b from-primary/40 via-background/30 to-background"
            : activeVibe === "night"
            ? "bg-gradient-to-b from-secondary/60 via-background/50 to-background"
            : "bg-gradient-to-b from-background/50 via-background/20 to-background"
        }`} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-accent text-3xl text-accent mb-4">{t("exp.title")}</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-exotic text-6xl md:text-8xl lg:text-9xl text-gradient-sunset leading-none tracking-wider italic mb-4">
              {t("exp.style")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-foreground/70 font-serif-elegant italic">
              {t("exp.subtitle")}
            </p>
          </ScrollReveal>

          {/* Vibe Toggle */}
          <ScrollReveal delay={300}>
            <div className="mt-12 inline-flex rounded-full border border-border bg-card/50 backdrop-blur-sm p-1.5 gap-1">
              {vibes.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setActiveVibe(v.key)}
                  className={`px-6 py-3 rounded-full font-display text-sm tracking-wider transition-all duration-300 ${
                    activeVibe === v.key
                      ? "bg-gradient-sunset text-primary-foreground shadow-lg"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {v.emoji} {v.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hook Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-exotic text-gradient-sunset tracking-wide italic mb-8">
              {t("exp.hook")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-foreground/70 font-body leading-relaxed max-w-3xl mx-auto">
              {t("exp.desc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gradient-ocean film-grain">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Day */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌊</span>
                  <h3 className="font-display text-3xl text-foreground">{t("exp.day")}</h3>
                </div>
                <div className="space-y-4">
                  {dayFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <p className="text-foreground/70 font-body">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Night */}
            <ScrollReveal delay={150}>
              <div className="bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌆</span>
                  <h3 className="font-display text-3xl text-foreground">{t("exp.night")}</h3>
                </div>
                <div className="space-y-4">
                  {nightFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <p className="text-foreground/70 font-body">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Why This Isn't a Tour */}
          <ScrollReveal delay={200}>
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
              <p className="text-2xl md:text-3xl font-serif-elegant italic text-foreground/80 leading-relaxed">
                This isn't a tour guide holding a flag.<br />
                This is Brazil through real connections.<br />
                <span className="text-accent">Music. Energy. Culture. Stories.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Trust */}
          <ScrollReveal delay={300}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🧭", text: "Local Insight" },
                { icon: "🛡️", text: "Safety First" },
                { icon: "🤝", text: "Respect for Culture" },
                { icon: "👥", text: "Small Groups Only" },
              ].map((item) => (
                <div key={item.text} className="bg-card rounded-xl p-5 border border-border text-center">
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="font-display text-sm tracking-wider text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display text-gradient-sunset text-center mb-4">
              {t("exp.apply")}
            </h2>
            <p className="text-center text-foreground/60 font-body mb-12">
              Tell us about your trip and we'll get back to you with availability.
            </p>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-12 border border-accent/30 gold-glow text-center">
                <span className="text-5xl block mb-4">🔥</span>
                <h3 className="font-display text-3xl text-foreground mb-2">Fruten Fraten!</h3>
                <p className="text-foreground/70 font-body">
                  Your request has been received. Roberto's team will reach out soon. Get ready for the real Brazil experience!
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={100}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
                <div>
                  <label className="font-display text-sm tracking-wider text-foreground/80 block mb-2">
                    {t("exp.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider text-foreground/80 block mb-2">
                    {t("exp.form.dates")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. March 15-20, 2026"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider text-foreground/80 block mb-2">
                    {t("exp.form.group")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2 people"
                    value={formData.group}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                    className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider text-foreground/80 block mb-2">
                    {t("exp.form.vibe")}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {vibes.map((v) => (
                      <button
                        type="button"
                        key={v.key}
                        onClick={() => setFormData({ ...formData, vibe: v.key })}
                        className={`px-4 py-3 rounded-lg font-display text-sm tracking-wider transition-all duration-300 border ${
                          formData.vibe === v.key
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-foreground/60 hover:border-foreground/30"
                        }`}
                      >
                        {v.emoji} {v.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-sunset text-primary-foreground font-display text-lg tracking-widest gold-glow-hover transition-all duration-300 hover:scale-[1.02]"
                >
                  {t("exp.form.submit")}
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrazilExperience;
