import React, { useState } from 'react';
import { PORTALS_DATA } from '../../data/verstappenData';
import { ArrowUpRight } from 'lucide-react';

export default function DualPortalsSection({ onNavigate }) {
  const [activePortal, setActivePortal] = useState(null);

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] border-t border-b border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
            DUAL SPLIT PORTALS // 02
          </span>
        </div>
        <h2 className="font-display-mv font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
          CHOOSE YOUR DRIVE
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
          Two Worlds • One Driver • Total Dedication
        </p>
      </div>

      {/* Dual Interactive Split Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Portal: ON TRACK */}
        <div
          onMouseEnter={() => setActivePortal('on')}
          onMouseLeave={() => setActivePortal(null)}
          onClick={() => onNavigate('/on-track')}
          className={`group relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#121621] transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xl ${
            activePortal === 'on'
              ? 'border-[#FF4B00] shadow-glow-orange scale-[1.01]'
              : 'hover:border-white/20'
          }`}
        >
          {/* Ambient Orange Telemetry Glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#FF4B00]/20 blur-3xl pointer-events-none group-hover:bg-[#FF4B00]/30 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B00]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Tag & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#FF4B00]/15 text-[#FF4B00] border border-[#FF4B00]/30">
              {PORTALS_DATA.onTrack.badge}
            </span>
            <span className="font-display-mv font-black text-3xl text-white/20 group-hover:text-[#FF4B00]/50 transition-colors">
              #01
            </span>
          </div>

          {/* Centerpiece Vector Profile Silhouette: Helmeted Profile */}
          <div className="relative z-10 my-10 py-6 flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[#FF4B00]/30 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-105 transition-transform duration-500">
              {/* Telemetry concentric rings */}
              <div className="absolute inset-3 rounded-full border border-dashed border-[#FF4B00]/20 animate-spin" style={{ animationDuration: '25s' }} />
              
              {/* Helmeted Driver Icon */}
              <svg className="w-24 h-24 sm:w-28 sm:h-28 text-[#FF4B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.61 6.24 4.09 8.04L8 16h8l1.91 4.04C20.39 18.24 22 15.31 22 12c0-5.52-4.48-10-10-10z" />
                <path d="M7 11h10v2H7z" />
                <path d="M9 13v3h6v-3" />
              </svg>

              <div className="absolute bottom-2 px-3 py-1 rounded-full bg-black/80 font-mono text-[10px] text-[#FF4B00] font-bold border border-[#FF4B00]/30">
                RACE SPEC ACTIVE
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h3 className="font-display-mv font-black text-3xl sm:text-4xl text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
              {PORTALS_DATA.onTrack.title}
            </h3>
            <p className="font-mono text-xs font-bold text-[#FF4B00] uppercase tracking-wider mt-1">
              {PORTALS_DATA.onTrack.subtitle}
            </p>
            <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-3 leading-relaxed">
              {PORTALS_DATA.onTrack.description}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-white/70">
                {PORTALS_DATA.onTrack.statsPreview}
              </span>
              <div className="flex items-center space-x-2 font-display-mv font-black text-xs uppercase tracking-wider text-[#FF4B00]">
                <span>ENTER CIRCUIT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Portal: OFF TRACK */}
        <div
          onMouseEnter={() => setActivePortal('off')}
          onMouseLeave={() => setActivePortal(null)}
          onClick={() => onNavigate('/off-track')}
          className={`group relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#121621] transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xl ${
            activePortal === 'off'
              ? 'border-[#E10600] shadow-glow-crimson scale-[1.01]'
              : 'hover:border-white/20'
          }`}
        >
          {/* Ambient Crimson Aura */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#E10600]/20 blur-3xl pointer-events-none group-hover:bg-[#E10600]/30 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#E10600]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Tag & Number */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#E10600]/15 text-[#E10600] border border-[#E10600]/30">
              {PORTALS_DATA.offTrack.badge}
            </span>
            <span className="font-display-mv font-black text-3xl text-white/20 group-hover:text-[#E10600]/50 transition-colors">
              #02
            </span>
          </div>

          {/* Centerpiece Vector Profile Silhouette: Casual Teamwear Profile */}
          <div className="relative z-10 my-10 py-6 flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[#E10600]/30 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-105 transition-transform duration-500">
              {/* Telemetry concentric rings */}
              <div className="absolute inset-3 rounded-full border border-dashed border-[#E10600]/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              
              {/* Casual Driver / Sim Outfit Icon */}
              <svg className="w-24 h-24 sm:w-28 sm:h-28 text-[#E10600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M16 11l2 2 4-4" />
              </svg>

              <div className="absolute bottom-2 px-3 py-1 rounded-full bg-black/80 font-mono text-[10px] text-[#E10600] font-bold border border-[#E10600]/30">
                TEAM REDLINE // MALL
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <h3 className="font-display-mv font-black text-3xl sm:text-4xl text-white uppercase tracking-tight group-hover:text-[#E10600] transition-colors">
              {PORTALS_DATA.offTrack.title}
            </h3>
            <p className="font-mono text-xs font-bold text-[#E10600] uppercase tracking-wider mt-1">
              {PORTALS_DATA.offTrack.subtitle}
            </p>
            <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-3 leading-relaxed">
              {PORTALS_DATA.offTrack.description}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-white/70">
                {PORTALS_DATA.offTrack.statsPreview}
              </span>
              <div className="flex items-center space-x-2 font-display-mv font-black text-xs uppercase tracking-wider text-[#E10600]">
                <span>EXPLORE OFF TRACK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
