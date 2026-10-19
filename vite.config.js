import { resolve } from 'path';
import { defineConfig } from 'vite';

// Multi-Page HTML/CSS/JS Application Architecture
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        onTrack: resolve(import.meta.dirname, 'on-track.html'),
        offTrack: resolve(import.meta.dirname, 'off-track.html'),
        calendar: resolve(import.meta.dirname, 'calendar.html'),
        paddockPass: resolve(import.meta.dirname, 'paddock-pass.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'vendor-motion';
          }
        },
      },
    },
  },
});
