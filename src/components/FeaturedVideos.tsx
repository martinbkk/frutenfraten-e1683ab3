import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const videos = [
  { id: "vXl8NGhDn4M", title: "A Normal Day With Roberto in Rio De Janeiro" },
  { id: "AjubOzvdwwk", title: "São Paulo Adventures with a Local" },
  { id: "Y9AQvJPoHhE", title: "Villa Party in Pattaya Thailand" },
  { id: "InKq9xnHKGc", title: "Woke Up in Bangkok" },
  { id: "dY9enKwd9ew", title: "Fruten Fraten Strikes Back in Brazil" },
  { id: "Sr2sz1eCDJg", title: "The Hottest Girls in Cartagena Colombia" },
  { id: "x0ZmYSFbTuI", title: "Brazilian Girls in Pattaya Thailand" },
  { id: "EVktIGSwSUY", title: "Tokyo's Party District Kabukicho" },
  { id: "gws_x0iqM9c", title: "How To Get Girls in Colombia" },
];

const shorts = [
  { id: "1Lk37KgRmlw" },
  { id: "bY45mqLYKzA" },
  { id: "zYviEX9V_-A" },
  { id: "ySPPEleT9_w" },
  { id: "DPBuqoiCZ7g" },
  { id: "tWdzYvxe2s4" },
  { id: "Qv3PGKX8zOQ" },
  { id: "w4YVbF_qFIM" },
  { id: "kZ2sR8TKJJI" },
  { id: "Hv6z7nGpFQk" },
  { id: "7e8SXGU0b_M" },
  { id: "X2kQz6DPKYM" },
  { id: "JhXo3xKLzIs" },
  { id: "eU5dF8SV2Rc" },
  { id: "3C9FPBI0lfQ" },
  { id: "RjFv4mNp_H0" },
  { id: "6V4pR8kO0NQ" },
  { id: "ZPkQaOxR9kE" },
  { id: "L1RmA7x3y5Q" },
  { id: "fYm3a0K7zxA" },
];

const FeaturedVideos = () => {
  const { t } = useLanguage();

  return (
    <section id="videos" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-accent text-2xl text-accent mb-2 text-center">{t("videos.pre")}</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-display text-gradient-sunset text-center mb-16">
            {t("videos.title")}
          </h2>
        </ScrollReveal>

        {/* 9 Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <ScrollReveal key={video.id} delay={i * 80}>
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border gold-glow-hover transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base lg:text-lg text-foreground tracking-wide line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@robertovstheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent/40 text-accent font-display text-lg tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
            >
              {t("videos.all")} →
            </a>
          </div>
        </ScrollReveal>

        {/* Shorts Section */}
        <div className="mt-24">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-display text-gradient-sunset text-center mb-12">
              {t("videos.shorts")}
            </h3>
          </ScrollReveal>

          {/* Row 1 - scrollable */}
          <div className="overflow-x-auto pb-4 scrollbar-thin">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {shorts.slice(0, 10).map((short, i) => (
                <ScrollReveal key={short.id} delay={i * 60}>
                  <div className="group relative rounded-2xl overflow-hidden bg-card border border-border gold-glow-hover transition-all duration-500 hover:-translate-y-2 w-[180px] sm:w-[200px]">
                    <div className="aspect-[9/16]">
                      <iframe
                        src={`https://www.youtube.com/embed/${short.id}`}
                        title={`Short ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Row 2 - scrollable */}
          <div className="overflow-x-auto pb-4 mt-4 scrollbar-thin">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {shorts.slice(10, 20).map((short, i) => (
                <ScrollReveal key={short.id} delay={i * 60}>
                  <div className="group relative rounded-2xl overflow-hidden bg-card border border-border gold-glow-hover transition-all duration-500 hover:-translate-y-2 w-[180px] sm:w-[200px]">
                    <div className="aspect-[9/16]">
                      <iframe
                        src={`https://www.youtube.com/embed/${short.id}`}
                        title={`Short ${i + 11}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/@robertovstheworld/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent/40 text-accent font-display text-lg tracking-wider gold-glow-hover transition-all duration-300 hover:scale-105 hover:border-accent"
              >
                {t("videos.allShorts")} →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
