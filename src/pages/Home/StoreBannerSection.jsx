import React from 'react';
import { PARTNERS_DATA } from '../../data/verstappenData';
import { ShoppingBag } from 'lucide-react';

export default function StoreBannerSection({ onNavigate }) {
  return (
    <section className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        
        {/* Full-Bleed World Drivers' Champion Store Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FF4B00] via-[#E10600] to-[#990000] p-8 sm:p-14 lg:p-16 text-[#090B10] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Carbon Grid Overlay */}
          <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />
          
          {/* Huge Watermark MV1 Monogram */}
          <div className="absolute right-4 -bottom-10 text-[14rem] sm:text-[18rem] font-display-mv font-black text-black/10 select-none pointer-events-none leading-none">
            #1
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black text-white text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <span>OFFICIAL STORE // 4X WORLD CHAMPION</span>
            </div>

            <h2 className="font-display-mv font-black text-3xl sm:text-5xl md:text-6xl text-[#090B10] uppercase tracking-tight leading-none">
              VERSTAPPEN STORE
            </h2>

            <p className="font-display-mv font-bold text-lg sm:text-2xl text-[#090B10]/90 uppercase mt-2">
              4X WORLD DRIVERS' CHAMPION ERA
            </p>

            <p className="font-body text-sm sm:text-base text-[#090B10]/85 font-medium mt-4 leading-relaxed max-w-xl">
              Celebrate this incredible era with a collection designed for the Orange Army who never stopped believing. Authentic 1:2 scale helmets, heavyweight championship apparel, and Team Redline esports gear.
            </p>
          </div>

          {/* Action CTA Pill */}
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => onNavigate('/off-track#mall')}
              className="group px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#090B10] text-[#F8FAFC] font-display-mv font-black text-xs sm:text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center space-x-3 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-[#FF4B00]" />
              <span>VISIT THE STORE</span>
              <span className="group-hover:translate-x-1.5 transition-transform text-[#FF4B00]">→</span>
            </button>
          </div>

        </div>

        {/* Partners Grid */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E96AA]">
              GLOBAL PARTNERS & ALLIANCES
            </span>
            <h3 className="font-display-mv font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
              THE RACING ECOSYSTEM
            </h3>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.name}
                className="group p-5 sm:p-6 rounded-2xl bg-[#121621] border border-white/5 hover:border-[#FF4B00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8E96AA] mb-3">
                    <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      {partner.badge}
                    </span>
                    <span>{partner.year}</span>
                  </div>
                  <h4 className="font-display-mv font-bold text-base sm:text-lg text-white group-hover:text-[#FF4B00] transition-colors">
                    {partner.name}
                  </h4>
                </div>
                <p className="font-mono text-[11px] text-[#8E96AA] mt-4">
                  {partner.category}
                </p>
              </div>
            ))}

            {/* Redline Special Tile */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#121621] to-[#FF4B00]/10 border border-[#FF4B00]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#FF4B00] mb-3">
                  <span>ESPORTS DIVISION</span>
                  <span>ACTIVE</span>
                </div>
                <h4 className="font-display-mv font-bold text-base sm:text-lg text-white">
                  VERSTAPPEN.COM
                </h4>
              </div>
              <p className="font-mono text-[11px] text-[#8E96AA] mt-4">
                GT3 Endurance & Sim Racing Program
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
