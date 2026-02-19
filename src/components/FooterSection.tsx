const FooterSection = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-3xl text-gradient-sunset mb-4">Roberto Vs The World</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Travel creator, culture explorer, and founder of the Wolfgang community. Living life
              one adventure at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#about" className="transition-colors duration-200 hover:text-accent">About Roberto</a>
              </li>
              <li>
                <a href="#videos" className="transition-colors duration-200 hover:text-accent">Videos</a>
              </li>
              <li>
                <a href="#destinations" className="transition-colors duration-200 hover:text-accent">Destinations</a>
              </li>
              <li>
                <a href="#fruten-fraten" className="transition-colors duration-200 hover:text-accent">Fruten Fraten</a>
              </li>
              <li>
                <a href="#wolfgang" className="transition-colors duration-200 hover:text-accent">Wolfgang</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Shop & Merch</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a
                  href="https://robertoa.myshopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  Official Merch Store
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/60">Perfume Collection (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2025 Roberto Vs The World. All rights reserved.
          </p>
          <p className="font-accent text-accent text-xl">Fruten Fraten 🌴</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
