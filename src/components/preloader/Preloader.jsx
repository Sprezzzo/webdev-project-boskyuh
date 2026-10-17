import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const shutterRef1 = useRef(null);
  const shutterRef2 = useRef(null);
  const shutterRef3 = useRef(null);

  // Monitor orientation on mobile
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 1024;
      const isLandscape = window.innerWidth > window.innerHeight && window.innerHeight < 550;
      setIsLandscapeMobile(isMobile && isLandscape);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const hasEnteredRef = useRef(false);

  // Loading counter progression
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate progression towards the end
      const step = Math.floor(Math.random() * 5) + 3;
      current = Math.min(100, current + step);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setIsLoaded(true);
        // Smooth auto-completion trigger after 700ms if not clicked
        setTimeout(() => {
          if (!hasEnteredRef.current) {
            handleEnter();
          }
        }, 700);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (hasEnteredRef.current || !containerRef.current) return;
    hasEnteredRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // Animate contents out
      tl.to('.preloader-content', {
        opacity: 0,
        y: -40,
        duration: 0.45,
        ease: 'power3.in'
      });

      // Multi-panel clip-path shutter exit reveal
      tl.to([shutterRef1.current, shutterRef2.current, shutterRef3.current], {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.85,
        stagger: 0.1,
        ease: 'power4.inOut'
      }, '-=0.15');

      tl.to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  };

  return (
    <>
      {/* Mobile Landscape Orientation Guard */}
      {isLandscapeMobile && (
        <div className="fixed inset-0 z-[10000] bg-[#090B10] text-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 mb-4 rounded-full border-2 border-[#FF4B00] flex items-center justify-center animate-spin">
            <svg className="w-8 h-8 text-[#FF4B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18.01" />
            </svg>
          </div>
          <h2 className="font-display-mv text-xl font-black text-[#FF4B00] uppercase mb-2">
            Please Rotate Your Device
          </h2>
          <p className="text-sm text-[#8E96AA] max-w-xs font-mono uppercase tracking-wider">
            This is a vertical drive. Rotate your device to portrait for optimal 3D telemetry performance.
          </p>
        </div>
      )}

      {/* Fullscreen Preloader Container */}
      <div 
        ref={containerRef}
        className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center select-none"
      >
        {/* Shutter Slat Layers in Dutch Lion Orange & Carbon */}
        <div className="absolute inset-0 grid grid-cols-3 w-full h-full pointer-events-none">
          <div ref={shutterRef1} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} className="h-full bg-[#FF4B00] border-r border-[#FF6B26]/30 shadow-2xl" />
          <div ref={shutterRef2} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} className="h-full bg-[#FF4B00] border-r border-[#FF6B26]/30 shadow-2xl" />
          <div ref={shutterRef3} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} className="h-full bg-[#FF4B00] shadow-2xl" />
        </div>

        {/* Ambient Carbon Pattern & Track Lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-grid-carbon" />

        {/* Foreground Content */}
        <div className="preloader-content relative z-10 flex flex-col items-center justify-between w-full h-full max-w-5xl px-6 py-12 text-[#090B10]">
          
          {/* Header Metadata */}
          <div className="flex items-center justify-between w-full font-mono text-xs font-bold tracking-widest uppercase opacity-85">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#090B10] animate-ping" />
              <span>ORACLE RED BULL RACING</span>
            </div>
            <span>MV1 TELEMETRY // 2026</span>
          </div>

          {/* Central Monogram & Monolithic Title */}
          <div className="flex flex-col items-center text-center my-auto">
            {/* Dutch Lion Monogram SVG */}
            <div className="relative w-32 h-32 md:w-44 md:h-44 mb-6">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-[#090B10] drop-shadow-xl animate-pulse"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Stylized Lion Crown / MV Monogram */}
                <path d="M 20 80 L 35 25 L 50 60 L 65 25 L 80 80" strokeWidth="6" stroke="#090B10" />
                <path d="M 12 40 L 25 35 L 35 48" strokeWidth="3" stroke="#090B10" />
                <path d="M 88 40 L 75 35 L 65 48" strokeWidth="3" stroke="#090B10" />
                <circle cx="50" cy="20" r="4" fill="#090B10" />
                <circle cx="28" cy="22" r="3" fill="#090B10" />
                <circle cx="72" cy="22" r="3" fill="#090B10" />
                <line x1="30" y1="80" x2="70" y2="80" strokeWidth="5" stroke="#090B10" />
                <text x="50" y="74" textAnchor="middle" fontSize="16" fontWeight="900" fontFamily="Unbounded, sans-serif" fill="#090B10">
                  #1
                </text>
              </svg>
            </div>

            <h1 className="font-display-mv font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter text-[#090B10] uppercase leading-none">
              VERSTAPPEN
            </h1>
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#090B10]/90 mt-3">
              4X WORLD DRIVERS' CHAMPION • OFFICIAL PLATFORM
            </p>

            {/* Live WebGL Compilation Status */}
            <div className="mt-8 flex flex-col items-center">
              <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#090B10]">
                {String(percent).padStart(2, '0')}%
              </div>
              <div className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#090B10]/80 mt-1">
                {percent < 30 && "INITIALIZING SHADER BUFFERS..."}
                {percent >= 30 && percent < 70 && "COMPILING 3D SCHUBERTH HELMET..."}
                {percent >= 70 && percent < 100 && "SYNCHRONIZING TELEMETRY STREAM..."}
                {percent >= 100 && "SYSTEM READY • GRID LIGHTS GREEN"}
              </div>
            </div>
          </div>

          {/* Bottom Action Pill / Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#090B10]/20 gap-4">
            <div className="text-[11px] font-mono font-medium text-[#090B10]/80">
              [LAT 43.7384° N, LON 7.4246° E] • MONACO / ZANDVOORT
            </div>

            <button
              ref={buttonRef}
              onClick={handleEnter}
              className={`group relative px-8 py-3.5 rounded-full font-display-mv font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl overflow-hidden cursor-pointer ${
                isLoaded 
                  ? 'bg-[#090B10] text-[#F8FAFC] hover:scale-105 active:scale-95 shadow-[#090B10]/40' 
                  : 'bg-[#090B10]/15 text-[#090B10] border border-[#090B10]/30 hover:bg-[#090B10] hover:text-[#F8FAFC]'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>LOAD VERSTAPPEN</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-[#090B10] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
