import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRE_F1_DATA } from '../../data/verstappenData';
import { Trophy, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PreF1PinScroll() {
  const pinSectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const pinEl = pinSectionRef.current;
    const trackEl = trackRef.current;
    if (!pinEl || !trackEl) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return -(trackEl.scrollWidth - window.innerWidth + 80);
      };

      gsap.to(trackEl, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${trackEl.scrollWidth - window.innerWidth + 400}`,
          invalidateOnRefresh: true,
        }
      });
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pinSectionRef}
      className="relative w-full h-screen bg-[#090B10] flex flex-col justify-center overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4B00]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Pinned Header */}
      <div className="px-6 sm:px-12 md:px-20 mb-8 max-w-7xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-3">
          <Trophy className="w-3.5 h-3.5 text-[#FF4B00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
            PRE-F1 CAREER HORIZONTAL TIMELINE // 2006–2014
          </span>
        </div>
        <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
          THE ROAD TO THE FORMULA 1 GRID
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-1 uppercase tracking-wider flex items-center">
          SCROLL DOWN TO TRAVEL HORIZONTALLY <ChevronRight className="w-4 h-4 ml-1 text-[#FF4B00]" />
        </p>
      </div>

      {/* Horizontal Moving Track */}
      <div
        ref={trackRef}
        className="flex items-center space-x-8 px-6 sm:px-12 md:px-20 will-change-transform select-none"
      >
        {PRE_F1_DATA.map((item, idx) => (
          <div
            key={item.year + item.title}
            className="w-[340px] sm:w-[440px] flex-shrink-0 p-8 rounded-3xl bg-[#121621] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-[#FF4B00]/50 transition-colors"
          >
            {/* Top Year & Index */}
            <div className="flex items-center justify-between">
              <span className="font-display-mv font-black text-4xl text-[#FF4B00]">
                {item.year}
              </span>
              <span className="font-mono text-xs text-[#8E96AA] px-2.5 py-1 rounded bg-black/40 border border-white/5">
                MILESTONE #{idx + 1}
              </span>
            </div>

            {/* Achievement Badge */}
            <div className="my-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FF4B00]/15 text-[#FF4B00] border border-[#FF4B00]/30 font-mono text-xs font-bold uppercase mb-3">
                {item.achievement}
              </div>

              <h3 className="font-display-mv font-black text-2xl text-white uppercase tracking-tight">
                {item.title}
              </h3>

              <div className="mt-2 font-mono text-xs text-[#8E96AA]">
                TEAM: <span className="text-white">{item.team}</span>
              </div>
              <div className="font-mono text-xs text-[#8E96AA]">
                CHASSIS: <span className="text-white">{item.car}</span>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Footer Telemetry Stamp */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#8E96AA]">
              <span>VERSTAPPEN JUNIOR ARCHIVE</span>
              <span className="text-[#FF4B00] font-bold">VERIFIED FIA STATS</span>
            </div>
          </div>
        ))}

        {/* F1 Debut Milestone Terminal Card */}
        <div className="w-[340px] sm:w-[420px] flex-shrink-0 p-8 rounded-3xl bg-gradient-to-br from-[#121621] to-[#FF4B00]/20 border border-[#FF4B00]/40 shadow-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-display-mv font-black text-4xl text-white">
              2015
            </span>
            <span className="font-mono text-xs font-bold text-[#FF4B00] px-2.5 py-1 rounded bg-black/60 border border-[#FF4B00]/30">
              F1 DEBUT AT 17
            </span>
          </div>

          <div className="my-6">
            <h3 className="font-display-mv font-black text-2xl text-white uppercase">
              FORMULA 1 PROMOTION
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-3 leading-relaxed">
              Youngest driver to start a Formula 1 Grand Prix in history at the 2015 Australian GP for Scuderia Toro Rosso, age 17 years, 166 days.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 font-mono text-xs text-white">
            NEXT ERA: RED BULL RACING PROMOTION (2016) →
          </div>
        </div>

      </div>
    </section>
  );
}
