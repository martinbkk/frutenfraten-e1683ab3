import ScrollReveal from "./ScrollReveal";

const WolfgangSection = () => {
  return (
    <section id="wolfgang" className="section-padding bg-gradient-ocean relative film-grain">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">The Pack</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset text-center mb-6">
            🐺 Wolfgang
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-center text-lg text-foreground/70 font-body max-w-2xl mx-auto mb-16">
            The Wolfgang isn't just a fanbase — it's a global tribe of adventurers, dreamers, and
            real ones who ride with Roberto through every mission.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={200}>
            <a
              href="https://www.youtube.com/@robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">📺</span>
                <h3 className="font-display text-2xl text-foreground">YouTube</h3>
              </div>
              <p className="text-muted-foreground">
                Watch the latest travel vlogs, missions, and behind-the-scenes content.
              </p>
              <p className="text-accent font-display text-lg mt-4">434K+ Subscribers →</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.instagram.com/robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">📸</span>
                <h3 className="font-display text-2xl text-foreground">Instagram</h3>
              </div>
              <p className="text-muted-foreground">
                Follow for daily stories, travel photos, and Wolfgang updates.
              </p>
              <p className="text-accent font-display text-lg mt-4">340K+ Followers →</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <a
              href="https://www.tiktok.com/@robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-8 border border-border gold-glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🎵</span>
                <h3 className="font-display text-2xl text-foreground">TikTok</h3>
              </div>
              <p className="text-muted-foreground">
                Quick clips, viral moments, and chaotic energy from around the world.
              </p>
              <p className="text-accent font-display text-lg mt-4">Follow →</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="bg-card rounded-2xl p-8 border border-accent/30 gold-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">🐺</span>
                <h3 className="font-display text-2xl text-foreground">Join the Pack</h3>
              </div>
              <p className="text-muted-foreground">
                Become a true Wolfgang member. Subscribe, follow, and be part of the global adventure.
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
