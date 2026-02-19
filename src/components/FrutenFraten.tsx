import ScrollReveal from "./ScrollReveal";

const FrutenFraten = () => {
  return (
    <section id="fruten-fraten" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-accent text-7xl md:text-9xl text-accent mb-8 animate-float">
            Fruten Fraten
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-foreground/80 font-body leading-relaxed mb-8">
            More than a catchphrase — it's a philosophy. It's about living in the moment, embracing
            the chaos, and finding joy in every corner of the world. When Roberto says{" "}
            <span className="font-accent text-accent text-3xl">"Fruten Fraten"</span>, it means
            the adventure is about to get real.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🌴</p>
              <p className="font-display text-xl text-foreground">Live Bold</p>
              <p className="text-sm text-muted-foreground mt-2">No comfort zones allowed</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🤝</p>
              <p className="font-display text-xl text-foreground">Stay Real</p>
              <p className="text-sm text-muted-foreground mt-2">Authentic connections only</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border gold-glow-hover transition-all duration-300">
              <p className="text-4xl mb-3">🔥</p>
              <p className="font-display text-xl text-foreground">Party Hard</p>
              <p className="text-sm text-muted-foreground mt-2">Life is a celebration</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FrutenFraten;
