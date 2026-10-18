import gsap from 'gsap';
import { stopLenis, startLenis } from './lenisManager.js';

export function initNavbar() {
  const nav = document.getElementById('global-navbar');
  const toggleBtn = document.getElementById('curtain-toggle-btn');
  const curtainMenu = document.getElementById('curtain-menu');
  const lineTop = document.getElementById('hamburger-line-1');
  const lineBottom = document.getElementById('hamburger-line-2');
  const magneticBtn = document.getElementById('magnetic-pass-btn');

  let isCurtainOpen = false;

  // 1. Scroll listener for floating dynamic glass navbar
  const handleScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled', 'bg-[#090B10]/85', 'backdrop-blur-xl', 'border-[#FF4B00]/25', 'shadow-2xl', 'py-3');
      nav.classList.remove('bg-transparent', 'border-transparent', 'py-5');
    } else {
      nav.classList.remove('scrolled', 'bg-[#090B10]/85', 'backdrop-blur-xl', 'border-[#FF4B00]/25', 'shadow-2xl', 'py-3');
      nav.classList.add('bg-transparent', 'border-transparent', 'py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Fullscreen Curtain Menu Toggle
  const toggleCurtain = (forceState) => {
    isCurtainOpen = forceState !== undefined ? forceState : !isCurtainOpen;

    if (!curtainMenu) return;

    if (isCurtainOpen) {
      stopLenis();
      curtainMenu.classList.add('open');
      curtainMenu.classList.remove('pointer-events-none', 'opacity-0');
      curtainMenu.classList.add('pointer-events-auto', 'opacity-100');

      // Hamburger to X animation
      if (lineTop && lineBottom) {
        lineTop.style.transform = 'translateY(4px) rotate(45deg)';
        lineBottom.style.transform = 'translateY(-4px) rotate(-45deg)';
        lineTop.classList.add('bg-[#FF4B00]');
        lineBottom.classList.add('bg-[#FF4B00]');
      }

      // Stagger entrance of links
      const links = curtainMenu.querySelectorAll('.curtain-link-item, .curtain-nav-link');
      gsap.fromTo(
        links,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
      );
    } else {
      startLenis();
      curtainMenu.classList.remove('open');
      curtainMenu.classList.add('opacity-0');
      curtainMenu.classList.remove('opacity-100');
      setTimeout(() => {
        if (!isCurtainOpen) {
          curtainMenu.classList.add('pointer-events-none');
          curtainMenu.classList.remove('pointer-events-auto');
        }
      }, 400);

      // X to Hamburger animation
      if (lineTop && lineBottom) {
        lineTop.style.transform = 'translateY(0) rotate(0deg)';
        lineBottom.style.transform = 'translateY(0) rotate(0deg)';
        lineTop.classList.remove('bg-[#FF4B00]');
        lineBottom.classList.remove('bg-[#FF4B00]');
      }
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleCurtain());
  }

  // Close curtain on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isCurtainOpen) {
      toggleCurtain(false);
    }
  });

  // Close curtain when clicking links inside it
  if (curtainMenu) {
    curtainMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggleCurtain(false);
      });
    });
  }

  // 3. Magnetic Hover Effect on CTA button
  if (magneticBtn) {
    magneticBtn.addEventListener('mousemove', (e) => {
      const rect = magneticBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      magneticBtn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    magneticBtn.addEventListener('mouseleave', () => {
      magneticBtn.style.transform = 'translate(0px, 0px)';
    });
  }

  // 4. Highlight current active route
  const currentPath = window.location.pathname;
  document.querySelectorAll('[data-route]').forEach((el) => {
    const route = el.getAttribute('data-route');
    if (
      (route === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) ||
      (route !== '/' && currentPath.includes(route))
    ) {
      el.classList.add('text-[#FF4B00]', 'border-b-2', 'border-[#FF4B00]');
      el.classList.remove('text-[#8E96AA]');
    }
  });
}
