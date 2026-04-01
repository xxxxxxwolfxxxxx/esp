# Elektroservice Pägelow – Website

Portfolio-Projekt: Unternehmenswebsite für einen Elektrofachbetrieb aus Mecklenburg-Vorpommern.

**Live:** [e-s-p.netlify.app](https://e-s-p.netlify.app)

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **styled-jsx** (komponentenscoptes CSS)
- **Netlify** (Deployment)

## Features

- Responsive Design mit mobilem Hamburger-Menü
- Animierte Service-Karten mit Hover-Expand
- DGUV V3 Prüfungsseite mit gesetzlichen Informationen
- Stellenanzeige (geschlechtsneutral)
- Impressum, Datenschutzerklärung, AGB
- SVG-Icons mit expliziter Farbgebung (Netlify-kompatibel)
- Performance-optimierte Bilder via `next/image`

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Projektstruktur

```
app/
  page.js              # Startseite (Hero, Services, Kontakt)
  dguv-v3/page.js      # DGUV V3 Prüfungsseite
  stellenanzeige/      # Jobanzeige
  impressum/           # Impressum
  datenschutz/         # Datenschutzerklärung
  agb/                 # AGB
components/
  Navbar.jsx           # Navigation mit Hamburger-Menü
  Services.jsx         # Service-Karten
  Footer.jsx           # Footer
public/
  logo.png             # EP-Logo mit rotem Blitz
  hero.png             # Hero-Bild
```
