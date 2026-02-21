# Fruten Fraten Website — Project Documentation

## Overview
Personal brand website for Roberto Vs The World / Fruten Fraten — a travel & lifestyle creator. Built with React, Vite, TypeScript, and Tailwind CSS.

## Architecture

### Pages
- `/` — Main landing page (Index)
- `/experience` — Brazil Experience booking page

### Components (Landing Page Order)
1. **Navbar** — Fixed navigation with perfume bottle icon logo
2. **HeroSection** — Fullscreen cinematic hero with CTAs
3. **AboutSection** — "Who is Roberto?" with bio and stats card
4. **PerfumeShop** — E-commerce section for Falang Maffia, Cria, Cosmo
5. **FeaturedVideos** — 9-video grid + 20 shorts (2 scrollable rows)
6. **DestinationsSection** — *Currently hidden* (Brazil, Thailand, Colombia, LA)
7. **FrutenFraten** — Brand philosophy & story section
8. **WolfgangSection** — Community hub (YouTube, Instagram, TikTok, Twitch)
9. **FrutenFratenBar** — Koh Samui bar showcase
10. **FooterSection** — Links and brand footer

### Shared Components
- `ScrollReveal` — IntersectionObserver animation wrapper
- `LanguageSelector` — Flag-colored circle dropdown
- `PerfumeBottleIcon` — Reusable SVG icon component
- `NavLink` — Navigation link component

### Context
- `LanguageContext` — i18n support for 6 languages (EN, ES, PT, DE, FR, TH)

## Key Design Decisions
- Destinations section is hidden (not deleted) — can be re-enabled
- Perfume bottle icon replaces all previous "FF" monograms and palm tree icons
- Roberto's bio is written in first person from his own words
- Language selector uses flag-colored circles instead of emoji flags
- Shorts display in 2 scrollable rows of 10 each (20 total)

## External Links
- YouTube: youtube.com/@robertovstheworld
- Twitch: twitch.tv/robertovstheworld
- Shop: frutenfraten.com
- Bar: Chaweng, Koh Samui, Thailand
