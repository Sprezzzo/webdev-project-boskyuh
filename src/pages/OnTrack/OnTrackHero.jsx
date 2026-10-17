import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_DATA } from '../../data/verstappenData';

gsap.registerPlugin(ScrollTrigger);

export default function OnTrackHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const signatureRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Kinetic typography entrance
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }
      );

      // Scroll-drawn signature
      const path = signatureRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'center 40%',
            scrub: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden border-b border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#FF4B00]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#8E96AA]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-ping" />
          <span className="text-white font-bold tracking-widest uppercase">
            SECTION 01 // RACECRAFT & TELEMETRY
          </span>
        </div>
        <div className="hidden sm:block uppercase tracking-wider text-[#FF4B00]">
          CHAMPIONSHIP HERITAGE
        </div>
      </div>

      {/* Main Kinetic Typography & Profile */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Kinetic Title Column */}
        <div ref={titleRef} className="max-w-2xl text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-[#FF4B00]/30 text-xs font-mono font-bold text-[#FF4B00] uppercase mb-4">
            <span>ORACLE RED BULL RACING CAR #1</span>
          </div>

          <h1 className="font-display-mv font-black text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none">
            ON TRACK
          </h1>

          <div className="font-display-mv font-black text-2xl sm:text-4xl text-[#FF4B00] uppercase tracking-tight mt-2">
            UNLEASH THE LION
          </div>

          <p className="font-body text-sm sm:text-base text-[#8E96AA] mt-6 leading-relaxed max-w-xl">
            From youngest Grand Prix points finisher at 17 to shattering every Formula 1 dominance record in history. The pursuit of perfection through relentless telemetry, pinpoint racecraft, and pure determination.
          </p>

          {/* Bio Strip */}
          <div className="mt-8 p-4 rounded-2xl bg-[#121621]/80 border border-white/10 font-mono text-xs text-[#F8FAFC]">
            {HERO_DATA.bioStrip}
          </div>
        </div>

        {/* Driver Visual Art / Parallax Foreground Cutout */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-br from-[#121621] to-[#FF4B00]/20 flex items-center justify-center backdrop-blur-md shadow-glow-orange">
            
            {/* Ambient Animated Speed Rays */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#FF4B00]/30 animate-spin" style={{ animationDuration: '40s' }} />

            {/* Stylized Driver Figure & Helmet Vector */}
            <svg className="w-56 h-56 sm:w-72 sm:h-72 text-white" viewBox="0 0 200 200" fill="none">
              {/* Shoulders / Racing Suit */}
              <path d="M 40,190 C 40,150 70,140 100,140 C 130,140 160,150 160,190" fill="#121621" stroke="#FF4B00" strokeWidth="3" />
              {/* Suit Zipper / Sponsors */}
              <line x1="100" y1="140" x2="100" y2="190" stroke="#FF4B00" strokeWidth="2" strokeDasharray="4 4" />
              {/* Helmet Dome */}
              <circle cx="100" cy="95" r="45" fill="#090B10" stroke="#FF4B00" strokeWidth="3.5" />
              {/* Visor */}
              <path d="M 70,95 Q 100,85 130,95 L 125,115 Q 100,110 75,115 Z" fill="#D4AF37" stroke="#FF4B00" strokeWidth="2" />
              {/* Visor reflection shimmer */}
              <path d="M 80,98 Q 95,92 110,98" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              {/* Crown Lion Roar Emblem */}
              <path d="M 90,65 L 100,55 L 110,65" stroke="#FF4B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Watermark #1 */}
            <div className="absolute bottom-4 right-4 font-display-mv font-black text-4xl text-[#FF4B00]/40">
              #1
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll-Drawn Signature & Telemetry Footer */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="w-64 sm:w-80">
          <svg
            viewBox="0 0 400 90"
            className="w-full text-[#FF4B00]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path
              ref={signatureRef}
              d="M 20,70 Q 50,10 90,50 T 140,65 Q 180,10 210,60 T 270,30 Q 320,80 360,20 M 80,45 L 190,15 L 220,75"
            />
          </svg>
        </div>

        <div className="font-mono text-xs text-[#8E96AA] text-right">
          AUTHENTIC FIA TELEMETRY FEED // ORACLE RED BULL RACING
        </div>
      </div>
    </section>
  );
}
