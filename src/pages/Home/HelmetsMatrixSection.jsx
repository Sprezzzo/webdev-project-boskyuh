import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { HELMETS_DATA } from '../../data/verstappenData';
import { Shield, ArrowRight, ShoppingBag } from 'lucide-react';

export default function HelmetsMatrixSection({ onNavigate }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const helmetGraphicRef = useRef(null);
  const infoRef = useRef(null);

  const activeHelmet = HELMETS_DATA[selectedIdx];

  // Animate graphic on helmet selection change
  useEffect(() => {
    if (helmetGraphicRef.current && infoRef.current) {
      gsap.fromTo(
        helmetGraphicRef.current,
        { scale: 0.9, rotateY: -20, opacity: 0.4 },
        { scale: 1, rotateY: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        infoRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [selectedIdx]);

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: activeHelmet.accentColor }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
            <Shield className="w-3.5 h-3.5 text-[#FF4B00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
              HELMETS HALL OF FAME // MATRIX
            </span>
          </div>
          <h2 className="font-display-mv font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            THE CHRONOLOGY OF SPEED
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
            10 Iconic Schuberth Liveries • World Championships & Landmark Races
          </p>
        </div>

        {/* Edition Pill Selector Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2.5 no-scrollbar select-none">
          {HELMETS_DATA.map((h, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedIdx(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF4B00] text-[#090B10] shadow-glow-orange scale-105'
                    : 'bg-[#121621] text-[#8E96AA] border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{h.name}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">[{h.season}]</span>
              </button>
            );
          })}
        </div>

        {/* Central Display Showcase Card */}
        <div className="mt-8 rounded-3xl bg-[#121621]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Visual: Helmet Vector Render */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Dynamic Halo Backdrop */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: activeHelmet.accentColor }}
            />

            {/* Stylized Helmet Artwork */}
            <div
              ref={helmetGraphicRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden p-6"
              style={{
                background: `linear-gradient(135deg, ${activeHelmet.primaryColor} 0%, #090B10 100%)`
              }}
            >
              <div className="absolute inset-0 bg-grid-carbon opacity-30" />

              {/* Multi-layer SVG Helmet Silhouette */}
              <svg className="w-48 h-48 sm:w-60 sm:h-60" viewBox="0 0 200 200" fill="none">
                {/* Shell Outline */}
                <path
                  d="M 40,110 C 35,50 145,20 170,80 C 180,105 175,145 155,160 C 135,175 75,175 55,160 C 45,150 40,135 40,110 Z"
                  fill={activeHelmet.primaryColor}
                  stroke={activeHelmet.accentColor}
                  strokeWidth="3"
                />
                {/* Aerodynamic Livery Bands */}
                <path
                  d="M 50,75 Q 110,40 160,90"
                  stroke={activeHelmet.accentColor}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 60,95 Q 110,65 145,105"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                {/* Visor Area */}
                <path
                  d="M 75,100 C 105,95 150,100 165,115 C 160,135 120,140 85,135 Z"
                  fill="#D4AF37"
                  opacity="0.85"
                />
                {/* Visor Sun Strip */}
                <path
                  d="M 75,100 C 105,95 150,100 165,105 L 160,115 C 125,105 90,105 75,110 Z"
                  fill={activeHelmet.accentColor}
                />
                {/* Lion Roar Crown Icon */}
                <circle cx="105" cy="55" r="8" fill={activeHelmet.accentColor} />
                <path d="M 98,55 L 105,42 L 112,55" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              {/* Visor Tint Stamp */}
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white">
                VISOR: {activeHelmet.visorTint}
              </div>

              {/* Season Watermark */}
              <div className="absolute top-3 right-4 font-mono text-3xl font-black text-white/15 select-none">
                {activeHelmet.season}
              </div>
            </div>

            {/* Spec Mini Badges */}
            <div className="mt-4 flex items-center space-x-3 text-xs font-mono text-[#8E96AA]">
              <span>WEIGHT: {activeHelmet.weight}</span>
              <span>•</span>
              <span>FIA 8860-2018 ABP</span>
            </div>
          </div>

          {/* Right Information & Story Column */}
          <div ref={infoRef} className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase"
                  style={{
                    backgroundColor: `${activeHelmet.accentColor}20`,
                    color: activeHelmet.accentColor,
                    border: `1px solid ${activeHelmet.accentColor}40`
                  }}
                >
                  {activeHelmet.season} SPECIAL EDITION
                </span>
                <span className="font-mono text-xs text-[#8E96AA]">
                  {activeHelmet.specs}
                </span>
              </div>

              <h3 className="font-display-mv font-black text-3xl sm:text-4xl text-white uppercase mt-4 tracking-tight">
                {activeHelmet.name}
              </h3>

              <div className="font-mono text-sm font-semibold uppercase text-[#FF4B00] mt-1">
                {activeHelmet.tagline}
              </div>

              <p className="font-body text-sm sm:text-base text-[#8E96AA] mt-4 leading-relaxed">
                {activeHelmet.story}
              </p>

              {/* Scale Availability in Store */}
              <div className="mt-6 p-4 rounded-2xl bg-[#090B10]/60 border border-white/5">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E96AA] mb-2">
                  <span>COLLECTOR REPLICAS AVAILABLE:</span>
                  <span className="text-white font-bold">{activeHelmet.miniPrice}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {activeHelmet.scaleAvailable.map((scale) => (
                    <span
                      key={scale}
                      className="px-3 py-1 rounded-lg bg-[#121621] border border-white/10 font-mono text-xs text-[#F8FAFC] font-semibold"
                    >
                      {scale}
                    </span>
                  ))}
                  <span className="text-[10px] font-mono text-emerald-400 font-bold ml-2">
                    ● IN STOCK
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('/on-track')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-glow-orange flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>VIEW ON TRACK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/off-track#mall')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#121621] border border-white/20 text-[#F8FAFC] font-display-mv font-black text-xs uppercase tracking-wider hover:border-[#FF4B00] hover:text-[#FF4B00] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>BUY MINI IN MALL</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
