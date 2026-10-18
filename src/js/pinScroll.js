import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initPinScroll() {
  // 1. Pre-F1 Horizontal Scroll Pinning
  const horizontalTrack = document.getElementById('pre-f1-horizontal-track');
  const horizontalSection = document.getElementById('pre-f1-pin-section');

  if (horizontalTrack && horizontalSection) {
    const totalScrollWidth = horizontalTrack.scrollWidth - window.innerWidth;

    if (totalScrollWidth > 0) {
      gsap.to(horizontalTrack, {
        x: () => -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection,
          start: 'top top',
          end: () => `+=${totalScrollWidth + 300}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }

  // 2. Parallax Photo Stream on Homepage
  const streamSection = document.getElementById('photo-stream-section');
  if (streamSection) {
    const items = streamSection.querySelectorAll('[data-speed]');
    items.forEach((item) => {
      const speed = parseFloat(item.getAttribute('data-speed')) || 1;
      const yOffset = (speed - 1) * 160;

      gsap.to(item, {
        y: yOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: streamSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  // 3. Stacking Card Deck in Off Track
  const stackCards = document.querySelectorAll('.stacking-card-item');
  if (stackCards.length) {
    stackCards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top top+=90',
        pin: true,
        pinSpacing: false,
        endTrigger: '#lifestyle-stories-container',
        end: 'bottom bottom',
        id: `card-pin-${i}`,
      });
    });
  }
}
