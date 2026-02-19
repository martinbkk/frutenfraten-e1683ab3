import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-ocean relative film-grain">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2">Who is Roberto?</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset mb-8">
            The Man Behind The Missions
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="space-y-6 text-foreground/80 font-body leading-relaxed">
              <p className="text-lg">
                Born in Sweden with Macedonian roots, Roberto has taken the world by storm with his
                raw, unfiltered travel content. From the beaches of Rio to the streets of Bangkok,
                he lives life with a boldness that's magnetic.
              </p>
              <p className="text-lg">
                His channel exploded past 400K subscribers in record time — not because of perfect
                production, but because of real connections with real people across the globe.
              </p>
              <p className="text-lg">
                Roberto's mission is simple: live boldly, engage with the world, and find connection
                everywhere he goes. His community, the{" "}
                <span className="text-accent font-semibold">Wolfgang</span>, follows him on every
                adventure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-sunset p-[2px]">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-display text-6xl text-gradient-sunset mb-4">434K+</p>
                    <p className="text-muted-foreground font-body">Subscribers & Growing</p>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-accent text-2xl">🌍</span>
                        <span className="text-foreground/80">20+ Countries Explored</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-accent text-2xl">🎬</span>
                        <span className="text-foreground/80">Cinematic Travel Vlogs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-accent text-2xl">🐺</span>
                        <span className="text-foreground/80">Wolfgang Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
