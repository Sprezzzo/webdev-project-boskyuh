import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OFF_TRACK_STORIES } from '../../data/verstappenData';
import { Gamepad2, Car, Plane, Palette, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LifestyleStories() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Stacking card deck animation on scroll
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: `top ${12 + idx * 2}%`,
          endTrigger: containerRef.current,
          end: 'bottom 90%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          id: `lifestyle-pin-${idx}`
        });

        // Dynamic scale & subtle darken when subsequent card scrolls over
        if (idx < cardsRef.current.length - 1) {
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.8,
            ease: 'none',
            scrollTrigger: {
              trigger: cardsRef.current[idx + 1],
              start: 'top 65%',
              end: 'top 20%',
              scrub: true
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderIcon = (idx, accent) => {
    switch (idx) {
      case 0:
        return <Gamepad2 className="w-6 h-6" style={{ color: accent }} />;
      case 1:
        return <Car className="w-6 h-6" style={{ color: accent }} />;
      case 2:
        return <Plane className="w-6 h-6" style={{ color: accent }} />;
      default:
        return <Palette className="w-6 h-6" style={{ color: accent }} />;
    }
  };

  return (
    <section ref={containerRef} className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E10600]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
              EDITORIAL LIFESTYLE STORIES // PINNED
            </span>
          </div>
          <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            FOUR PILLARS OF PASSION
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
            Scroll To Explore The Stacking Editorial Dossier
          </p>
        </div>

        {/* 4 Stacked Cards */}
        <div className="flex flex-col space-y-16 sm:space-y-24">
          {OFF_TRACK_STORIES.map((story, idx) => (
            <div
              key={story.number}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="rounded-3xl bg-[#121621] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-300"
              style={{
                zIndex: 10 + idx,
                boxShadow: `0 20px 50px -10px ${story.accent}20`
              }}
            >
              {/* Dynamic Glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ backgroundColor: story.accent }}
              />

              {/* Top Tag & Number */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
                    {renderIcon(idx, story.accent)}
                  </div>
                  <div>
                    <span
                      className="font-mono text-xs font-black uppercase tracking-widest block"
                      style={{ color: story.accent }}
                    >
                      {story.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#8E96AA] uppercase">
                      CHAPTER {story.number} // DOSSIER
                    </span>
                  </div>
                </div>

                <span className="font-display-mv font-black text-4xl sm:text-5xl text-white/20 select-none">
                  {story.number}
                </span>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 7 Cols: Narrative & Bullet Points */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    <h3 className="font-display-mv font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                      {story.title}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm font-semibold uppercase text-white/80 mt-1">
                      {story.subtitle}
                    </div>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[#8E96AA] leading-relaxed">
                    {story.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {story.details.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: story.accent }} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 Cols: Editorial Quote Box */}
                <div className="lg:col-span-5 rounded-2xl bg-[#090B10] border border-white/5 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-2 right-4 text-7xl font-black font-display-mv text-white/5 select-none pointer-events-none">
                    “
                  </div>
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] text-[#8E96AA] uppercase tracking-widest block mb-4">
                      DRIVER COMMENTARY // RAW VOICE
                    </span>
                    <blockquote className="font-display-mv font-bold text-base sm:text-lg text-white uppercase leading-snug tracking-tight">
                      “{story.quote}”
                    </blockquote>
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#8E96AA]">
                    <span className="text-white font-bold">MAX VERSTAPPEN</span>
                    <span style={{ color: story.accent }}>VERIFIED</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
