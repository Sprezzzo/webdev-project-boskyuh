import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MANIFESTO_DATA } from '../../data/verstappenData';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const signaturePathRef = useRef(null);

  const words = MANIFESTO_DATA.quote.split(' ');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Word-by-word scroll illumination
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.2, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'center center',
            scrub: 0.8,
          }
        }
      );

      // 2. Scroll-drawn SVG signature
      const path = signaturePathRef.current;
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'center 70%',
            end: 'bottom 40%',
            scrub: 1.2,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 sm:py-48 px-6 sm:px-12 bg-[#090B10] flex flex-col items-center justify-center border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF4B00]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#FF4B00]">
            THE MANIFESTO // 01
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B00]" />
        </div>

        {/* Word-by-Word Scroll-Illuminated Typography */}
        <h2 className="font-display-mv font-black text-3xl sm:text-5xl md:text-7xl leading-[1.15] tracking-tight uppercase max-w-4xl">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (wordsRef.current[i] = el)}
              className="inline-block mr-2 sm:mr-4 transition-colors duration-200"
              style={{ color: '#F8FAFC' }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtext */}
        <p className="font-body text-sm sm:text-lg text-[#8E96AA] max-w-2xl mt-10 leading-relaxed">
          {MANIFESTO_DATA.subtext}
        </p>

        {/* Scroll-Drawn Signature in Dutch Lion Neon Orange */}
        <div className="mt-14 sm:mt-20 w-72 sm:w-96 relative flex flex-col items-center">
          <svg
            viewBox="0 0 420 120"
            className="w-full text-[#FF4B00] overflow-visible"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              ref={signaturePathRef}
              d="M 25,95 Q 60,15 110,65 T 160,85 Q 210,10 240,80 T 310,40 Q 360,110 400,25 M 100,55 L 220,15 L 260,95 M 295,45 Q 315,10 330,35"
            />
          </svg>
          <div className="mt-4 font-mono text-xs font-bold tracking-widest text-[#FF4B00] uppercase">
            {MANIFESTO_DATA.signatureAuthor}
          </div>
        </div>

      </div>
    </section>
  );
}
