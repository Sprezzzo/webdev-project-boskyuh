import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';
import ManifestoSection from './ManifestoSection';
import PhotoStreamSection from './PhotoStreamSection';
import DualPortalsSection from './DualPortalsSection';
import HelmetsMatrixSection from './HelmetsMatrixSection';
import StoreBannerSection from './StoreBannerSection';
import FooterSection from './FooterSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onNavigate }) {
  const homeRef = useRef(null);

  useEffect(() => {
    // Refresh ScrollTrigger cleanly when mounting
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      // Global page context
    }, homeRef);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={homeRef} className="w-full min-h-screen bg-[#090B10] text-[#F8FAFC]">
      {/* 2A: 3D WebGL Helmet Hero */}
      <HeroSection />

      {/* 2B: Manifesto & Scroll-Drawn Signature */}
      <ManifestoSection />

      {/* 2C: Scattered Parallax Track & Lifestyle Photo Stream */}
      <PhotoStreamSection />

      {/* 2D: Dual Split Portals (ON TRACK vs OFF TRACK) */}
      <DualPortalsSection onNavigate={onNavigate} />

      {/* 2E: Homepage Helmets Hall of Fame Matrix */}
      <HelmetsMatrixSection onNavigate={onNavigate} />

      {/* 2F: World Drivers' Champion Store Banner & Partners */}
      <StoreBannerSection onNavigate={onNavigate} />

      {/* 2G: Socials Fan Deck & Site Footer */}
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}
