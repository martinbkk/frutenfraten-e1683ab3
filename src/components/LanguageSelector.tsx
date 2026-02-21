import { useState, useRef, useEffect } from "react";
import { useLanguage, languages } from "@/contexts/LanguageContext";

const flagColors: Record<string, string[]> = {
  en: ["#B22234", "#FFFFFF", "#3C3B6E"], // US
  es: ["#AA151B", "#F1BF00", "#AA151B"], // Spain
  pt: ["#009739", "#FEDD00", "#012169"], // Brazil
  de: ["#000000", "#DD0000", "#FFCC00"], // Germany
  fr: ["#002395", "#FFFFFF", "#ED2939"], // France
  th: ["#A51931", "#F4F5F8", "#2D2A4A"], // Thailand
};

const FlagCircle = ({ code, size = 28 }: { code: string; size?: number }) => {
  const colors = flagColors[code] || ["#888", "#888", "#888"];
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-shrink-0">
      <clipPath id={`flag-clip-${code}-${size}`}>
        <circle cx={r} cy={r} r={r} />
      </clipPath>
      <g clipPath={`url(#flag-clip-${code}-${size})`}>
        <rect x="0" y="0" width={size / 3} height={size} fill={colors[0]} />
        <rect x={size / 3} y="0" width={size / 3} height={size} fill={colors[1]} />
        <rect x={(size * 2) / 3} y="0" width={size / 3} height={size} fill={colors[2]} />
      </g>
      <circle cx={r} cy={r} r={r - 0.5} fill="none" stroke="hsl(20 10% 30%)" strokeWidth="1" />
    </svg>
  );
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center hover:border-accent transition-colors duration-200 overflow-hidden"
        aria-label="Select language"
      >
        <FlagCircle code={language} size={28} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 min-w-[220px] animate-fade-up">
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
              <FlagCircle code={lang.code} size={24} />
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
