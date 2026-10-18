import '../index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from './lenisManager.js';
import { initNavbar } from './navbar.js';
import { initLiquidShader } from './liquidShader.js';
import { initFormValidation } from './formValidation.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initNavbar();
  initLiquidShader('liquid-cursor-container');
  initFormValidation();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
