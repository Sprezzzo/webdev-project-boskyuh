import React, { useState } from 'react';
import { HELMETS_DATA } from '../../data/verstappenData';
import { Shield, ShoppingBag } from 'lucide-react';

export default function OnTrackHelmets({ onNavigate }) {
  const [tiltMap, setTiltMap] = useState({});

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltMap((prev) => ({
      ...prev,
      [id]: { rotateX, rotateY }
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltMap((prev) => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0 }
    }));
  };

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
            <Shield className="w-3.5 h-3.5 text-[#FF4B00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
              ON-TRACK HELMETS HALL OF FAME
            </span>
          </div>
          <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CHAMPIONSHIP ARMOR
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
            Interactive 3D-Tilt Cards • Schuberth SF4 Carbon Fiber Miniatures
          </p>
        </div>

        {/* 3D-Tilt Physics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HELMETS_DATA.slice(0, 6).map((helmet) => {
            const tilt = tiltMap[helmet.id] || { rotateX: 0, rotateY: 0 };
            return (
              <div
                key={helmet.id}
                onMouseMove={(e) => handleMouseMove(e, helmet.id)}
                onMouseLeave={() => handleMouseLeave(helmet.id)}
                className="group relative rounded-3xl p-7 bg-[#121621] border border-white/10 transition-transform duration-200 ease-out shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow Backdrop */}
                <div
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: helmet.accentColor }}
                />

                {/* Top Badge & Season */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-[10px] font-black uppercase px-2.5 py-1 rounded"
                    style={{
                      color: helmet.accentColor,
                      backgroundColor: `${helmet.accentColor}18`,
                      border: `1px solid ${helmet.accentColor}35`
                    }}
                  >
                    {helmet.season} SPECIAL
                  </span>
                  <span className="font-mono text-xs text-[#8E96AA]">
                    {helmet.weight}
                  </span>
                </div>

                {/* Helmet Vector Art Box */}
                <div
                  className="relative w-full h-48 rounded-2xl flex items-center justify-center overflow-hidden mb-6 border border-white/5"
                  style={{
                    background: `linear-gradient(135deg, ${helmet.primaryColor} 0%, #090B10 100%)`
                  }}
                >
                  <div className="absolute inset-0 bg-grid-carbon opacity-30" />
                  
                  {/* Stylized SVG Helmet */}
                  <svg className="w-36 h-36" viewBox="0 0 200 200" fill="none">
                    <path
                      d="M 40,110 C 35,50 145,20 170,80 C 180,105 175,145 155,160 C 135,175 75,175 55,160 C 45,150 40,135 40,110 Z"
                      fill={helmet.primaryColor}
                      stroke={helmet.accentColor}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 50,75 Q 110,40 160,90"
                      stroke={helmet.accentColor}
                      strokeWidth="5"
                    />
                    <path
                      d="M 75,100 C 105,95 150,100 165,115 C 160,135 120,140 85,135 Z"
                      fill="#D4AF37"
                      opacity="0.9"
                    />
                    <circle cx="105" cy="55" r="7" fill={helmet.accentColor} />
                  </svg>

                  <div className="absolute bottom-2.5 right-3 font-mono text-[10px] text-white/80 bg-black/60 px-2.5 py-0.5 rounded border border-white/10">
                    {helmet.visorTint}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-display-mv font-black text-2xl text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                    {helmet.name}
                  </h3>
                  <div className="font-mono text-xs text-[#FF4B00] font-semibold uppercase mt-0.5">
                    {helmet.tagline}
                  </div>
                  <p className="font-body text-xs text-[#8E96AA] mt-3 leading-relaxed line-clamp-3">
                    {helmet.story}
                  </p>
                </div>

                {/* Direct CTA Pill */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="font-mono text-xs">
                    <span className="text-[#8E96AA] block text-[10px]">MINI SCALE:</span>
                    <span className="text-white font-bold">{helmet.miniPrice}</span>
                  </div>

                  <button
                    onClick={() => onNavigate('/off-track#mall')}
                    className="px-4 py-2 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-[11px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center space-x-1.5 shadow-glow-orange cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>BUY MINIS (1:2 & 1:4)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
