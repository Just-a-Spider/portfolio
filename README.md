# Gustavo Andre - Freelance Software Consultant Portfolio

**Developer:** Gustavo Andre Argandoña Becerra (Andre Argandoña)  
**Location:** Huánuco, Perú  
**Live Site:** [https://Just-a-Spider.github.io/portfolio/](https://Just-a-Spider.github.io/portfolio/)  
**Stack:** Angular 22, Three.js (`three`), WebGL 3D Starfield, Reactive i18n (`en` / `es`), GitHub Pages

---

## Overview

A high-performance, responsive single-page web portfolio designed to position me as a premium Freelance Software Consultant. It features a modern, glassmorphic UI with smooth tab-based navigation, backed by a highly optimized, interactive 3D WebGL starfield engine.

---

## Key Features

- **Three.js 3D WebGL Space Engine:** 3D starfield (`THREE.Points`) with custom-generated circular particles and ambient glowing nebulae.
- **Premium Glassmorphic UI:** Tab-based architecture (`Overview`, `Portfolio`, `Services`, `Experience`, `Contact`) with interactive hover states, dynamic CSS gradients, and pulsing CTA buttons.
- **Developer-Grade Reactive i18n (EN / ES):** Typed `TranslationService` in `src/app/i18n.ts` supporting instant, zero-reload language switching across the entire UI.
- **Timeline Architecture:** A custom vertical CSS timeline layout for the Professional Experience track record.
- **Flagship Systems Showcase:** Featured case studies for large-scale projects like Kuantum Educa (handling thousands of simultaneous exams), SysMon 3DS (Rust/C homebrew), and AI Computer Vision systems.

---

## Hardware & Performance Optimizations

1. **Adaptive Particle Scaling:** Auto-detects mobile screens (`width < 768`) or low-core CPUs to reduce star particles from 3,000 down to 1,000, ensuring buttery-smooth 60fps across all devices.
2. **Zero-GC Buffers:** Uses `THREE.BufferGeometry` with `Float32Array` attributes to eliminate garbage collection frame drops.
3. **Tab Inactivity Pause:** Automatically halts the Three.js render loop when the browser tab is hidden (0% CPU/GPU overhead).

---

## Project Structure

```text
~/Desktop/Projects/Portfolio/
├── angular.json             # Angular workspace build configuration
├── package.json             # Dependencies (Angular, Three.js, angular-cli-ghpages)
└── src/
    ├── main.ts              # Angular main entrypoint
    ├── index.html           # HTML template & Google Fonts (Outfit, Plus Jakarta Sans)
    ├── styles.css           # Global CSS, cosmic theme, UI animations, mobile layout
    └── app/
        ├── app.ts           # Angular App component, Three.js WebGL engine, Signals
        ├── app.html         # Tab-based UI, glass cards, timeline, modals
        └── i18n.ts          # Typed English & Spanish translation dictionaries
```

---

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser.

---

## Deployment Guide (GitHub Pages)

This repository is configured for zero-cost static deployment via GitHub Pages using the `angular-cli-ghpages` utility.

To deploy a new version to production:
```bash
npx ng build --base-href=/portfolio/
npx angular-cli-ghpages --dir=dist/portfolio
```

---

## License & Credits

Designed & Engineered by **Gustavo Andre Argandoña Becerra**  
Built with **Angular** & **Three.js**.
