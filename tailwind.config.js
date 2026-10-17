/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact tokens as defined in Design System
        'dutch-lion-orange': '#FF4B00',
        'red-bull-crimson': '#E10600',
        'rb-midnight-carbon': '#090B10',
        'asphalt-slate': '#131722',
        'championship-gold': '#D4AF37',
        'ice-white': '#F8AFC',

        // Exact name variants for compatibility
        'Dutch Lion Orange': '#FF4B00',
        'Red Bull Crimson': '#E10600',
        'RB Midnight Carbon': '#090B10',
        'Asphalt Slate': '#131722',
        'Championship Gold': '#D4AF37',
        'Ice White': '#F8AFC',

        // CamelCase / short aliases
        dutchOrange: '#FF4B00',
        rbCrimson: '#E10600',
        rbMidnight: '#090B10',
        asphaltSlate: '#131722',
        championshipGold: '#D4AF37',
        iceWhite: '#F8AFC',

        // System Specification design tokens
        carbon: '#090B10',
        'carbon-matte': '#090B10',
        elevated: '#121621',
        'accent-orange': '#FF4B00',
        'accent-crimson': '#E10600',
        'accent-gold': '#D4AF37',
        'text-primary': '#F8FAFC',
        'text-muted': '#8E96AA',
      },
      fontFamily: {
        racing: ['"Titillium Web"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        unbounded: ['"Unbounded"', 'system-ui', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 75, 0, 0.4)',
        'glow-crimson': '0 0 25px -5px rgba(225, 6, 0, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'glow-orange-lg': '0 0 45px -5px rgba(255, 75, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
