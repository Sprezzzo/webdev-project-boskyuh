import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenisManager.js';
import { initNavbar } from './navbar.js';
import { initLiquidShader } from './liquidShader.js';
import { initCircuitSwitcher } from './circuitSwitcher.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initNavbar();
  initLiquidShader('liquid-cursor-container');
  initCircuitSwitcher();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
