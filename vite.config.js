import { resolve } from 'path';
import { defineConfig } from 'vite';

// Multi-Page HTML/CSS/JS Application Architecture
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname || __dirname, 'index.html'),
        onTrack: resolve(import.meta.dirname || __dirname, 'on-track.html'),
        offTrack: resolve(import.meta.dirname || __dirname, 'off-track.html'),
        calendar: resolve(import.meta.dirname || __dirname, 'calendar.html'),
        paddockPass: resolve(import.meta.dirname || __dirname, 'paddock-pass.html'),
      },
    },
  },
});
