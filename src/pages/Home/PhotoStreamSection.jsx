import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { POLAROIDS_DATA } from '../../data/verstappenData';

gsap.registerPlugin(ScrollTrigger);

export default function PhotoStreamSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Parallax scroll on individual photo stream cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const speed = POLAROIDS_DATA[i]?.speed || 1.0;
        gsap.to(card, {
          y: -80 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Visual bespoke SVG artwork renderer for all 9 landmark cards
  const renderCardArt = (type, accent) => {
    switch (type) {
      case 'trophy': // Suzuka 2024
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Figure-8 Suzuka Track Vector */}
            <path d="M 25 35 C 10 35 10 65 35 65 C 50 65 50 35 65 35 C 90 35 90 65 75 65 C 55 65 45 35 25 35 Z" stroke={accent} strokeWidth="2.5" opacity="0.6" />
            {/* Grand Prix Winner Trophy */}
            <path d="M 38 28 L 62 28 L 58 55 C 58 62 42 62 42 55 Z" fill={`${accent}30`} stroke={accent} strokeWidth="2" />
            <path d="M 38 32 C 30 32 30 44 38 46" stroke={accent} strokeWidth="2" />
            <path d="M 62 32 C 70 32 70 44 62 46" stroke={accent} strokeWidth="2" />
            <line x1="50" y1="58" x2="50" y2="72" stroke={accent} strokeWidth="2.5" />
            <rect x="40" y="72" width="20" height="6" rx="2" fill={accent} />
          </svg>
        );
      case 'champion': // FIA Gala 4x
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 54,32 72,32 58,42 63,60 50,49 37,60 42,42 28,32 46,32" fill={`${accent}40`} stroke={accent} strokeWidth="2" />
            <circle cx="50" cy="50" r="38" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="50" y="78" textAnchor="middle" fontSize="13" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">
              4X WORLD
            </text>
          </svg>
        );
      case 'paddock': // Miami GP 2024
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <line x1="50" y1="20" x2="50" y2="80" stroke="#00E5FF" strokeWidth="2" />
            <path d="M 50 35 Q 25 25 20 45" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 35 Q 75 25 80 45" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 48 Q 28 42 25 60" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 48 Q 72 42 75 60" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="34" y="68" width="32" height="12" rx="6" fill="#00E5FF" />
            <text x="50" y="77" textAnchor="middle" fontSize="7" fill="#090B10" fontWeight="900">MIAMI 01</text>
          </svg>
        );
      case 'padel': // Monaco 2024 Padel & Training
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="40" r="24" stroke={accent} strokeWidth="2.5" fill={`${accent}20`} />
            <circle cx="43" cy="34" r="2.5" fill={accent} />
            <circle cx="57" cy="34" r="2.5" fill={accent} />
            <circle cx="50" cy="40" r="2.5" fill={accent} />
            <circle cx="43" cy="46" r="2.5" fill={accent} />
            <circle cx="57" cy="46" r="2.5" fill={accent} />
            <rect x="46" y="64" width="8" height="22" rx="4" fill={accent} />
          </svg>
        );
      case 'lion': // Zandvoort 2025 Orange Army
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <path d="M 20 75 L 35 25 L 50 55 L 65 25 L 80 75 Z" stroke="#FF4B00" strokeWidth="3" fill="#FF4B0025" />
            <circle cx="50" cy="20" r="4" fill="#FF4B00" />
            <circle cx="32" cy="22" r="3.5" fill="#FF4B00" />
            <circle cx="68" cy="22" r="3.5" fill="#FF4B00" />
            <text x="50" y="72" textAnchor="middle" fontSize="12" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">
              ORANGE
            </text>
          </svg>
        );
      case 'rain': // Brazil 2024 Rain Masterclass
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <path d="M 25 45 C 25 35 35 30 45 30 C 50 22 65 22 70 30 C 80 30 85 38 85 46 C 85 54 78 58 70 58 L 28 58 C 20 58 20 45 25 45 Z" fill="#E1060025" stroke="#E10600" strokeWidth="2.5" />
            <line x1="32" y1="65" x2="26" y2="82" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
            <line x1="45" y1="65" x2="39" y2="82" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="65" x2="52" y2="82" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
            <line x1="71" y1="65" x2="65" y2="82" stroke="#E10600" strokeWidth="2" strokeLinecap="round" />
            <text x="50" y="48" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontWeight="bold">P17 → P1</text>
          </svg>
        );
      case 'youngest': // Barcelona 2016 Youngest Winner
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="34" stroke={accent} strokeWidth="2" />
            <text x="50" y="44" textAnchor="middle" fontSize="18" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">
              18y
            </text>
            <text x="50" y="60" textAnchor="middle" fontSize="9" fill={accent} fontWeight="bold" fontFamily="monospace">
              228 DAYS
            </text>
            <path d="M 28 72 Q 50 82 72 72" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'gt3': // Spa 2024 GT3 Test
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            {/* Eau Rouge Elevation Path */}
            <path d="M 15 75 Q 35 75 45 55 T 85 25" stroke={accent} strokeWidth="3" strokeLinecap="round" />
            {/* Aerodynamic GT3 Wing Silhouette */}
            <rect x="35" y="42" width="30" height="6" rx="2" fill={accent} />
            <line x1="42" y1="48" x2="40" y2="58" stroke={accent} strokeWidth="2" />
            <line x1="58" y1="48" x2="60" y2="58" stroke={accent} strokeWidth="2" />
            <text x="50" y="85" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold" fontFamily="monospace">EAU ROUGE 296</text>
          </svg>
        );
      case 'title1': // Abu Dhabi 2021 First Title
      default:
        return (
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="34" stroke={accent} strokeWidth="2.5" />
            <polygon points="50,22 55,36 70,36 58,46 62,60 50,51 38,60 42,46 30,36 45,36" fill={`${accent}40`} stroke={accent} strokeWidth="1.5" />
            <text x="50" y="74" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">
              TITLE #1
            </text>
          </svg>
        );
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#FF4B00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121621] border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF4B00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
            CHRONICLES & PHOTO STREAM // ARCHIVE
          </span>
        </div>
        <h2 className="font-display-mv font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
          THE MOMENTS THAT DEFINED AN ERA
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-3 uppercase tracking-wider">
          Staggered Telemetry & Lifestyle Photo Cards // 2016–2026
        </p>
      </div>

      {/* First Central Quote Break with Orange SVG Signature */}
      <div className="max-w-4xl mx-auto my-16 text-center px-4 relative z-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121621]/80 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute -top-12 -left-12 text-8xl font-black text-[#FF4B00]/10 select-none font-display-mv">
            “
          </div>
          <p className="font-display-mv font-black text-xl sm:text-3xl text-white uppercase leading-snug tracking-tight">
            “It doesn't matter where you start, it's how you progress from there.”
          </p>
          
          {/* Authentic Orange SVG Signature Under Quote 1 */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 340 85"
              className="w-52 sm:w-64 text-[#FF4B00] filter drop-shadow-[0_0_12px_rgba(255,75,0,0.5)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M 25,65 Q 55,15 95,50 T 140,60 Q 175,15 205,55 T 255,25 Q 295,70 330,20 M 80,45 L 180,15 L 205,65" />
            </svg>
            <div className="mt-3 flex items-center justify-center space-x-3">
              <span className="h-[1px] w-8 bg-[#FF4B00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4B00] font-bold">
                MAX VERSTAPPEN — 4X WORLD CHAMPION
              </span>
              <span className="h-[1px] w-8 bg-[#FF4B00]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scattered Parallax Cards Grid (9 Cards in 3 Offset Columns) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 my-16">
        {POLAROIDS_DATA.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`group relative rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#121621] hover:border-[#FF4B00]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden ${
              i % 3 === 1 ? 'lg:translate-y-12' : i % 3 === 2 ? 'lg:-translate-y-8' : ''
            }`}
          >
            {/* Ambient Card Glow */}
            <div
              className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: card.accent }}
            />

            {/* Visual Media Canvas / SVG Art Box */}
            <div className={`relative w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br ${card.gradient} border border-white/10 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500`}>
              <div className="absolute inset-0 bg-grid-carbon opacity-30" />
              
              <div className="relative z-10 p-6 flex flex-col items-center justify-center text-center">
                {renderCardArt(card.svgType, card.accent)}
                <span className="mt-3 font-mono text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {card.title}
                </span>
              </div>

              {/* Year Stamp */}
              <div className="absolute bottom-3 right-3 font-mono text-2xl font-black text-white/20 select-none">
                {card.year}
              </div>
            </div>

            {/* Card Content & Telemetry Caption */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-mono text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{ color: card.accent, backgroundColor: `${card.accent}15` }}
                >
                  {card.category}
                </span>
                <span className="font-mono text-xs text-[#8E96AA]">
                  DATA_SPEED: {card.speed}x
                </span>
              </div>

              <h3 className="font-display-mv font-black text-xl text-white uppercase tracking-tight group-hover:text-[#FF4B00] transition-colors">
                {card.subtitle}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-2 leading-relaxed">
                {card.caption}
              </p>
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#8E96AA]">
              <span>ORACLE RED BULL #1</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#FF4B00]">EXPAND ↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Central Quote Break */}
      <div className="max-w-4xl mx-auto my-20 text-center px-4 relative z-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121621]/80 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 text-8xl font-black text-[#D4AF37]/10 select-none font-display-mv">
            “
          </div>
          <p className="font-display-mv font-black text-xl sm:text-3xl text-white uppercase leading-snug tracking-tight">
            “Since I was 4 years old and had my first experience with kart racing, I've worked tirelessly to make that dream come true.”
          </p>
          <div className="mt-6 flex items-center justify-center space-x-3">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              EARLY ASPIRATIONS TO 4X WORLD CHAMPION
            </span>
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>
      </div>

    </section>
  );
}
