import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let isTickerAttached = false;

export function initLenis() {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  });

  // Sync with GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update);

  if (!isTickerAttached) {
    gsap.ticker.add((time) => {
      lenisInstance?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    isTickerAttached = true;
  }

  // Handle anchor clicks smoothly
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenisInstance.scrollTo(target, { offset: -80 });
        }
      }
    });
  });

  return lenisInstance;
}

export function stopLenis() {
  if (lenisInstance) {
    lenisInstance.stop();
  }
}

export function startLenis() {
  if (lenisInstance) {
    lenisInstance.start();
  }
}

export function getLenis() {
  return lenisInstance;
}
