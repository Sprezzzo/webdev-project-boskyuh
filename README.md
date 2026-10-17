# Max Verstappen Fan Website (Official Fan Hub)

A high-performance modern fan platform celebrating 4-time FIA Formula 1 World Drivers' Champion **Max Verstappen** and Oracle Red Bull Racing #1.

## 🎨 Design System Tokens

The project strictly adheres to the official design system color palette:
- **Dutch Lion Orange**: `#FF4B00`
- **Red Bull Crimson**: `#E10600`
- **RB Midnight Carbon**: `#090B10`
- **Asphalt Slate**: `#131722`
- **Championship Gold**: `#D4AF37`
- **Ice White**: `#F8AFC`

## 🏎️ Core Components

1. **Sticky Navigation Bar (`src/components/Navbar.jsx`)**:
   - Wordmark `"VERSTAPPEN.33 / #1"` with a Championship Gold (`#D4AF37`) badge highlight.
   - Animated navigation links (`Overview`, `Stats`, `Highlights`, `Gallery`) with Dutch Lion Orange (`#FF4B00`) underline animations.
   - Red Bull Crimson (`#E10600`) `"Official Shop"` CTA button.
   - Glassmorphism backdrop effect (`backdrop-blur-md bg-[#090B10]/80`).
   - Responsive mobile navigation overlay.

2. **Hero Section (`src/components/Hero.jsx`)**:
   - Dynamic titles: `"MAX VERSTAPPEN"` and `"WORLD CHAMPION"`.
   - Subtitle: `"ORACLE RED BULL RACING / NO. 1"`.
   - Full-bleed media container seamlessly fading into RB Midnight Carbon (`#090B10`).
   - Interactive animated scroll indicator highlighting Dutch Lion Orange (`#FF4B00`).

3. **Stats Telemetry Section (`src/components/StatsGrid.jsx`)**:
   - Telemetry cards styled on Asphalt Slate (`#131722`) background.
   - Highlights: World Championships (4x), Grand Prix Wins (63), Podiums (111), Pole Positions (40).
   - Gold accent headers (`#D4AF37`) for Championship trophies.
   - Scroll-triggered animated counters powered by Framer Motion.

4. **Defining Highlights (`src/components/Highlights.jsx`)**:
   - Interactive career milestone timeline highlighting key title wins and wet weather drives.

5. **Visual Gallery (`src/components/Gallery.jsx`)**:
   - High-resolution trackside photography with modal lightbox viewer.

6. **Footer (`src/components/Footer.jsx`)**:
   - Palette indicators, official links, and Orange Army fan club information.

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Server runs by default on `http://localhost:5173/`.
