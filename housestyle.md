# Fruten Fraten — House Style Guide

## Brand Identity

### Primary Brand: Fruten Fraten
- **Domain**: frutenfraten.com
- **Origin**: Invented by Roberto and a friend in a coffee shop in Barcelona
- **Never translate** the names "Fruten Fraten" or "RobertoVsTheWorld"

### Secondary Brand: Roberto Vs The World
- YouTube channel identity
- Used as subtitle/secondary positioning

### Logo
- Perfume bottle icon (based on Falang Maffia bottle) + "Fruten Fraten" text
- No "FF" monogram — just icon + name
- Icon uses sunset gradient (orange to coral)

---

## Color Palette (HSL)

| Token | HSL | Usage |
|-------|-----|-------|
| `--background` | `20 14% 4%` | Page background, deep dark warm |
| `--foreground` | `40 30% 92%` | Main text, warm off-white |
| `--primary` | `24 95% 53%` | Sunset orange, primary actions |
| `--secondary` | `200 70% 25%` | Deep ocean blue |
| `--accent` | `45 90% 55%` | Gold, highlights, hover glows |
| `--coral` | `12 80% 60%` | Warm coral, gradient partner |
| `--ocean` | `210 65% 20%` | Deep blue backgrounds |
| `--jungle` | `150 50% 30%` | Green accent (used sparingly) |
| `--card` | `20 12% 8%` | Card backgrounds |
| `--muted` | `20 10% 15%` | Muted backgrounds |
| `--border` | `20 10% 18%` | Border color |

### Gradients
- **Sunset**: `linear-gradient(135deg, primary → coral)` — CTAs, headings
- **Ocean**: `linear-gradient(180deg, ocean → background)` — section backgrounds
- **Text Gradient**: `linear-gradient(135deg, primary → coral → accent)` — headline text

---

## Typography

| Class | Font | Usage |
|-------|------|-------|
| `font-exotic` | Playfair Display | Primary headlines, brand name |
| `font-display` | Bebas Neue | Section titles, navigation, buttons |
| `font-accent` | Caveat | Handwritten feel, callouts |
| `font-serif-elegant` | Cormorant Garamond | Quotes, elegant body text |
| `font-body` (default) | Inter | Body text, descriptions |

### Rules
- "Fruten Fraten" always uses `font-exotic` with `text-gradient-sunset` and italic
- Navigation uses `font-display` with `tracking-[0.2em]` uppercase
- Quotes use `font-serif-elegant` italic

---

## Effects & Interactions

- **Gold Glow Hover** (`gold-glow-hover`): Warm gold box-shadow on hover for cards/buttons
- **Film Grain** (`film-grain`): Subtle SVG noise overlay for cinematic sections
- **Scroll Reveal**: IntersectionObserver-powered fade-up animations
- **Float Animation** (`animate-float`): Gentle up/down for scroll indicators

---

## Component Patterns

### Cards
- `bg-card rounded-2xl border border-border` base
- Add `gold-glow-hover` for interactive cards
- `hover:-translate-y-2` or `hover:-translate-y-3` for lift effect

### CTAs
- Primary: `bg-gradient-sunset text-primary-foreground rounded-full font-display tracking-widest`
- Secondary: `border border-accent/40 text-accent rounded-full`
- Ghost: `border border-foreground/20 text-foreground/80 rounded-full`

### Section Layout
- Use `section-padding` class for consistent spacing
- Max width: `max-w-7xl` for wide sections, `max-w-6xl` for standard, `max-w-4xl` for focused

---

## Content Voice

- First person, raw, authentic — not AI-polished
- No bullet-point lists in public-facing copy
- Conversational tone, like Roberto is talking to you
- Use full sentences, not marketing buzzwords

---

## Language Support

Six languages: English (default), Spanish, Portuguese, German, French, Thai.
Flag-colored circle buttons in language selector (not emoji flags).
