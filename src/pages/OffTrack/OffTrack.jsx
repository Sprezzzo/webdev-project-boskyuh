import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OffTrackHero from './OffTrackHero';
import LifestyleStories from './LifestyleStories';
import VerstappenMall from './VerstappenMall';
import FooterSection from '../Home/FooterSection';

gsap.registerPlugin(ScrollTrigger);

export default function OffTrack({
  onNavigate,
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen
}) {
  const pageRef = useRef(null);

  useEffect(() => {
    // Refresh ScrollTrigger cleanly on page load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {}, pageRef);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="w-full min-h-screen bg-[#090B10] text-[#F8FAFC]">
      {/* Module 4.1: Off Track Hero */}
      <OffTrackHero />

      {/* Module 4.2: Pinned Editorial Lifestyle Cards */}
      <LifestyleStories />

      {/* Module 4.3: Integrated "Verstappen Mall" Store Experience */}
      <VerstappenMall
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Site Footer */}
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}
