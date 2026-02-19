import ScrollReveal from "./ScrollReveal";

const videos = [
  {
    id: "vXl8NGhDn4M",
    title: "A Normal Day With Roberto in Rio De Janeiro",
  },
  {
    id: "JMdh6vJpifA",
    title: "Roberto's Colombia Mission",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Thailand Night Life Adventures",
  },
];

const FeaturedVideos = () => {
  return (
    <section id="videos" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">Latest Adventures</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset text-center mb-16">
            Featured Videos
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <ScrollReveal key={video.id} delay={i * 150}>
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border gold-glow-hover transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl text-foreground tracking-wide">
                    {video.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-accent/40 text-accent font-display text-lg tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
            >
              See All Videos →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedVideos;
