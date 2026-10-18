import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenisManager.js';
import { initNavbar } from './navbar.js';
import { initHelmetScene } from './helmetScene.js';
import { initLiquidShader } from './liquidShader.js';
import { initPinScroll } from './pinScroll.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Smooth Scroll
  initLenis();

  // 2. Initialize Global Navbar & Curtain Overlay
  initNavbar();

  // 3. Initialize Procedural 3D WebGL Helmet
  initHelmetScene('helmet-container', 'tap-to-lock-btn');

  // 4. Initialize Liquid Cursor Background Shader
  initLiquidShader('liquid-cursor-container');

  // 5. Initialize Parallax Photo Stream
  initPinScroll();

  // 6. Preloader Shutter Reveal
  const preloader = document.getElementById('preloader-overlay');
  if (preloader) {
    const tl = gsap.timeline();
    tl.to('#preloader-progress-bar', { width: '100%', duration: 0.8, ease: 'power2.out' })
      .to('#preloader-counter', { innerHTML: 100, snap: { innerHTML: 1 }, duration: 0.8 }, '<')
      .to(preloader, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.75,
        ease: 'power4.inOut',
        onComplete: () => {
          preloader.style.display = 'none';
          ScrollTrigger.refresh();
        },
      });
  }

  // 7. Micro-interactions for interactive cards
  document.querySelectorAll('.interactive-card-hover').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });
});
