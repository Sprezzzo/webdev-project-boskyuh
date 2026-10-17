import React from 'react';
import { Sparkles, Gamepad2, Plane, Shield } from 'lucide-react';

export default function OffTrackHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E10600]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#8E96AA]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          <span className="text-white font-bold tracking-widest uppercase">
            SECTION 02 // SIM RACING, GT3 & LIFESTYLE
          </span>
        </div>
        <div className="hidden sm:block uppercase tracking-wider text-[#E10600]">
          VERSTAPPEN.COM ECOSYSTEM
        </div>
      </div>

      {/* Main Kinetic Typography */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121621] border border-[#E10600]/30 text-xs font-mono font-bold text-[#E10600] uppercase mb-4">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>BEYOND THE FORMULA 1 PADDOCK</span>
        </div>

        <h1 className="font-display-mv font-black text-5xl sm:text-7xl lg:text-9xl text-white uppercase tracking-tight leading-none">
          OFF TRACK
        </h1>

        <div className="font-display-mv font-black text-xl sm:text-3xl md:text-4xl text-[#E10600] uppercase tracking-tight mt-3">
          UNLEASHING THE LION BEYOND THE PADDOCK
        </div>

        <p className="font-body text-sm sm:text-base text-[#8E96AA] mt-6 max-w-2xl leading-relaxed">
          From 24-hour virtual endurance stints with Team Redline in his Monaco simulator to founding Verstappen.com Racing GT3 program, Falcon 8X travel, and the official Verstappen Mall collection.
        </p>

        {/* Quick Anchor Chips */}
        <div className="mt-8 flex items-center flex-wrap justify-center gap-3 font-mono text-xs">
          <span className="px-4 py-2 rounded-full bg-[#121621] border border-white/10 text-white flex items-center space-x-1.5">
            <Gamepad2 className="w-3.5 h-3.5 text-[#FF4B00]" />
            <span>TEAM REDLINE SIM</span>
          </span>
          <span className="px-4 py-2 rounded-full bg-[#121621] border border-white/10 text-white flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            <span>GT3 RACING PROGRAM</span>
          </span>
          <span className="px-4 py-2 rounded-full bg-[#121621] border border-white/10 text-white flex items-center space-x-1.5">
            <Plane className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>FALCON 8X & PADEL</span>
          </span>
          <span className="px-4 py-2 rounded-full bg-[#121621] border border-white/10 text-white flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>HELMET DESIGN</span>
          </span>
        </div>
      </div>

      {/* Bottom Coordinates Strip */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8E96AA]">
        <div>MONACO RIG / PORTIMAO GT3 / AMSTERDAM HQ</div>
        <div className="text-white">EXPLORE EDITORIAL BELOW ↓</div>
      </div>
    </section>
  );
}
