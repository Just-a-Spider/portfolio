# Full-Stack & AI Systems Engineering Portfolio

**Developer:** Gustavo Andre Argandoña Becerra (Andre Argandoña)  
**Location:** Huánuco, Perú  
**Live Site:** [Kuantum Educa](https://kuantumeduca.com) | [GitHub Profile](https://github.com/Just-a-Spider) | [LinkedIn](https://www.linkedin.com/in/andre-argando%C3%B1a-3011a6263/)  
**Stack:** Angular 22, Three.js (`three` 0.185), WebGL 3D Starfield, Reactive i18n (`en` / `es`), Firebase Free Tier Hosting

---

## Overview

A high-performance, responsive single-page web portfolio designed with a No Man's Sky (NMS) space voyage theme. Instead of rigid slideshows, visitors fly through a continuous 3D space corridor passing celestial sector cards (`// Overview Planet`, `// Projects Sector`, `// Skills Nexus`, `// Experience Outpost`, `// Contact Portal`).

```
[ Top COSMIC Panel HUD ] ── [ Pixelated Spaceship Flight Track (0% -> 100%) ]
        │
        ├── [ 3D WebGL Starfield & Warp Speed Accelerator (Three.js) ]
        │
        └── [ Fluid Space Corridor: Overview ➔ Projects ➔ Skills ➔ Experience ➔ Contact ]
```

---

## Key Features

- **Three.js 3D WebGL Space Engine:** 3D starfield (`THREE.Points`) with 3,000 star particles and ambient cyan (`#00f0ff`) & purple (`#a855f7`) nebulae point lights.
- **Hyperdrive Warp Acceleration:** Scrolling velocity dynamically stretches 3D star particles into hyperdrive light streaks and moves camera forward through 3D space.
- **Pixelated Spaceship Flight HUD Track:** A retro pixelated sci-fi spaceship icon (`.pixel-ship`) travels along the top HUD progress track (`0%` to `100%`) with dual animated plasma thruster trails.
- **100% Scrollbar Elimination:** Hidden scrollbars globally (`scrollbar-width: none !important; ::-webkit-scrollbar { display: none !important; }`) for uninterrupted space flight.
- **Developer-Grade Reactive i18n (EN / ES):** Typed `TranslationService` in `src/app/i18n.ts` supporting instant language switching across 100% of UI cards, skills, bullet points, and modals.
- **Flagship Systems Showcase:** Featured cards for Kuantum Educa (`https://kuantumeduca.com`), SysMon 3DS (Rust server + devkitARM C homebrew), AI Assistant, and YOLO Computer Vision.
- **Live & Repo Link Integration:** Side-by-side Live Site icons and GitHub repository links.

---

## Hardware & Performance Optimizations

1. **Adaptive Particle & Quality Scaling:** Auto-detects mobile screens (`width < 768`) or low-core CPUs (`hardwareConcurrency <= 4`) to reduce star particles from 3,000 down to 1,000 and caps `devicePixelRatio` to `1.0`.
2. **Zero-GC Buffers:** Uses `THREE.BufferGeometry` with `Float32Array` attributes to eliminate garbage collection frame drops.
3. **Tab Inactivity Pause:** Automatically halts the Three.js render loop when `document.hidden` is true (0% CPU/GPU overhead when backgrounded).

---

## Project Structure

```text
~/Desktop/Projects/Portfolio/
├── firebase.json            # Firebase Hosting CDN & SPA rewrite rules
├── .firebaserc              # Firebase project target definition
├── angular.json             # Angular 22 workspace build configuration
├── package.json             # Pnpm dependencies (Angular 22, Three.js)
└── src/
    ├── main.ts              # Angular main entrypoint
    ├── index.html           # HTML template & Google Fonts (Outfit, Plus Jakarta Sans)
    ├── styles.css           # Global CSS, cosmic theme, hidden scrollbars, HUD track
    └── app/
        ├── app.ts           # Angular App component, Three.js WebGL engine, Signals
        ├── app.html         # HUD top panel, pixelated spaceship, sector cards
        ├── app.css          # Component layout & frosted glass styles
        └── i18n.ts          # Typed English & Spanish translation dictionaries
```

---

## Local Development Setup

### 1. Install Dependencies
```bash
cd ~/Desktop/Projects/Portfolio
pnpm install
```

### 2. Run Local Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser.

### 3. Build Production Bundle
```bash
npm run build
```
Output generated at `dist/portfolio/browser`.

---

## Deployment Guide (Firebase Free Tier Hosting)

This repository is configured for zero-cost static deployment on **Firebase Hosting Free Tier**.

### 1. Login to Firebase CLI
```bash
npx firebase-tools login
```

### 2. Deploy to Firebase CDN
```bash
npx firebase-tools deploy --only hosting
```

---

## License & Credits

Designed & Engineered by **Gustavo Andre Argandoña Becerra**  
Built with **Angular 22** & **Three.js**.
