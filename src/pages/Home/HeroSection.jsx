import React, { useRef } from 'react';
import HelmetScene from '../../components/three/HelmetScene';
import LiquidShader from '../../components/three/LiquidShader';
import { HERO_DATA } from '../../data/verstappenData';

export default function HeroSection() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090B10] pt-28 pb-16"
    >
      {/* 1. Liquid Blob Cursor Displacement Shader (Background) */}
      <LiquidShader />

      {/* Subtle Carbon Grid Overlay */}
      <div className="absolute inset-0 bg-grid-carbon opacity-30 pointer-events-none" />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4B00]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E10600]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Kinetic Text Layer Behind the 3D Helmet */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-10 px-4">
        
        {/* Top Badges & Driver Permanent Number */}
        <div className="w-full max-w-7xl flex items-center justify-between mb-auto pt-24 sm:pt-28 text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#8E96AA]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#FF4B00] rounded-full inline-block" />
            <span className="text-[#F8FAFC]">{HERO_DATA.seasonBadge}</span>
          </div>
          <div className="text-right">
            <span>NO. {HERO_DATA.driverNumber} // CAR #{HERO_DATA.permanentNumber}</span>
          </div>
        </div>

        {/* Monolithic Kinetic Typography */}
        <div className="text-center my-auto transform -translate-y-6 sm:-translate-y-10">
          <div className="font-mono text-xs sm:text-sm font-black tracking-[0.4em] uppercase text-[#FF4B00] mb-2 sm:mb-3">
            2026 ORACLE RED BULL F1 DRIVER
          </div>

          <div className="font-display-mv font-black text-5xl sm:text-8xl md:text-[10rem] lg:text-[13rem] tracking-tighter text-[#121621] uppercase leading-none opacity-90 select-none">
            MAX VERSTAPPEN
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-8 -mt-2 sm:-mt-6">
            <span className="h-[1px] w-12 sm:w-28 bg-[#FF4B00]/40" />
            <span className="font-display-mv font-bold text-xs sm:text-base md:text-xl tracking-[0.3em] uppercase text-[#FF4B00]">
              {HERO_DATA.championshipCount} • {HERO_DATA.titleYears}
            </span>
            <span className="h-[1px] w-12 sm:w-28 bg-[#FF4B00]/40" />
          </div>
        </div>

        {/* Orange SVG Signature behind Helmet */}
        <div className="absolute bottom-24 opacity-25 max-w-lg w-full">
          <svg viewBox="0 0 500 150" className="w-full text-[#FF4B00]" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M 50,110 Q 120,20 180,90 T 260,70 Q 320,130 380,40 Q 430,90 480,50" />
            <path d="M 190,85 L 290,20 L 310,95" />
            <circle cx="330" cy="40" r="8" fill="#FF4B00" />
          </svg>
        </div>

        {/* Bottom Telemetry Coordinates & Scroll Cue */}
        <div className="w-full max-w-7xl flex items-end justify-between mt-auto pb-4 text-[10px] sm:text-xs font-mono text-[#8E96AA]">
          <div>
            <span className="text-[#FF4B00] font-bold">LAT:</span> 43° 44' N / <span className="text-[#FF4B00] font-bold">LON:</span> 7° 25' E
            <br />
            <span className="text-white/70">MONACO / HASSELT / ZANDVOORT</span>
          </div>
          <div className="text-right">
            <span className="text-[#F8FAFC]">SCROLL TO EXPLORE ARCHIVE</span>
            <div className="w-24 h-[1px] bg-white/20 mt-1 ml-auto overflow-hidden">
              <div className="w-8 h-full bg-[#FF4B00] animate-pulse" />
            </div>
          </div>
        </div>

      </div>

      {/* 3. Three.js WebGL Scene with 3D Helmet & OrbitControls */}
      <div className="relative z-20 w-full h-[65vh] sm:h-[75vh] max-w-5xl">
        <HelmetScene />
      </div>

    </section>
  );
}
