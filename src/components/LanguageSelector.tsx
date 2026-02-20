import { useState, useRef, useEffect } from "react";
import { useLanguage, languages } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center text-lg hover:border-accent transition-colors duration-200 overflow-hidden"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 min-w-[200px] animate-fade-up">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                lang.code === language
                  ? "bg-accent/10 text-accent"
                  : "text-foreground/80 hover:bg-muted"
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-display text-sm tracking-wider">{lang.name}</span>
              {lang.code === language && (
                <span className="ml-auto text-accent text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
