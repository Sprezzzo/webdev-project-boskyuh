import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenisManager.js';
import { initNavbar } from './navbar.js';
import { initLiquidShader } from './liquidShader.js';
import { initStatsBento } from './statsBento.js';
import { initPinScroll } from './pinScroll.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initNavbar();
  initLiquidShader('liquid-cursor-container');
  initStatsBento();
  initPinScroll();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
