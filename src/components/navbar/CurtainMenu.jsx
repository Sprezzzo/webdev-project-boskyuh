import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { NAV_LINKS, SOCIALS_DATA } from '../../data/verstappenData';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CurtainMenu({ isOpen, onClose, currentRoute, onNavigate }) {
  const containerRef = useRef(null);
  const curtainRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Previews corresponding to the 5 links
  const previews = [
    {
      title: "3D HELMET & MANIFESTO",
      tag: "HOMEPAGE // 2026",
      desc: "Interactive WebGL Schuberth helmet, liquid metaball shader, and career photo stream.",
      accent: "#FF4B00",
      gradient: "from-orange-600/40 via-red-950/40 to-[#090B10]",
      badge: "4X WORLD CHAMPION"
    },
    {
      title: "ON TRACK TELEMETRY",
      tag: "RACE HIGHLIGHTS // F1",
      desc: "63 Grand Prix wins, landmark milestones, career stats bento, and circuit telemetry switcher.",
      accent: "#FF4B00",
      gradient: "from-orange-500/40 via-amber-950/40 to-[#090B10]",
      badge: "63 GP WINS"
    },
    {
      title: "OFF TRACK & SIM RIG",
      tag: "TEAM REDLINE // GT3",
      desc: "Virtual 24-hour endurance, Verstappen.com Racing GT3 program, Falcon 8X travel, and padel.",
      accent: "#E10600",
      gradient: "from-red-600/40 via-rose-950/40 to-[#090B10]",
      badge: "ESPORTS & RACING"
    },
    {
      title: "CIRCUIT CALENDAR",
      tag: "SCHEDULE // COTA GP",
      desc: "Live countdown timer to Austin COTA, track telemetry, and 2026 race calendar breakdown.",
      accent: "#00E5FF",
      gradient: "from-cyan-600/40 via-blue-950/40 to-[#090B10]",
      badge: "NEXT GP"
    },
    {
      title: "VERSTAPPEN MALL",
      tag: "OFFICIAL STORE // SHOP",
      desc: "Authentic 1:2 & 1:4 scale collectible helmets, championship apparel, and Red Bull teamwear.",
      accent: "#D4AF37",
      gradient: "from-amber-500/40 via-yellow-950/40 to-[#090B10]",
      badge: "AUTHENTIC MERCH"
    }
  ];

  useEffect(() => {
    const el = curtainRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Open curtain from top to bottom
        gsap.to(el, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.75,
          ease: 'power4.inOut'
        });

        // Stagger links entrance
        gsap.fromTo(
          '.nav-curtain-item',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.35 }
        );

        gsap.fromTo(
          '.nav-preview-box',
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.4 }
        );
      } else {
        // Close curtain back to top
        gsap.to(el, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 0.6,
          ease: 'power4.inOut'
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen]);

  const handleLinkClick = (path) => {
    onClose();
    if (onNavigate) {
      onNavigate(path);
    }
    // Refresh ScrollTrigger cleanly on route change
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  return (
    <div ref={containerRef}>
      <div
        ref={curtainRef}
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
        className={`fixed inset-0 z-[80] bg-[#090B10] text-[#F8FAFC] flex flex-col justify-between overflow-y-auto px-6 sm:px-12 md:px-20 py-24 select-none ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Subtle Background Circuit Mesh */}
        <div className="absolute inset-0 bg-grid-carbon opacity-20 pointer-events-none" />
        
        {/* Top Header in Curtain */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4B00] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E96AA]">
              MAX VERSTAPPEN #1 // NAVIGATION PORTAL
            </span>
          </div>
          <div className="hidden sm:block font-mono text-xs text-[#8E96AA]">
            ORACLE RED BULL RACING SINCE 2016
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-8 items-center">
          
          {/* Left Column: Oversized Kinetic Navigation Links with Character-Stagger */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => {
              const isActive = currentRoute === link.path || (link.path.includes('#') && currentRoute === link.path.split('#')[0]);
              return (
                <div
                  key={link.id}
                  className="nav-curtain-item group flex items-baseline space-x-4 sm:space-x-8 cursor-pointer py-2 border-b border-white/5 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {/* Indexed Numeral */}
                  <span className={`font-mono text-sm sm:text-base font-bold transition-colors duration-300 ${
                    hoveredIndex === idx ? 'text-[#FF4B00]' : 'text-[#8E96AA]'
                  }`}>
                    {link.id}
                  </span>

                  {/* Route Label with Character-Stagger Hover Shifts */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <span className="font-display-mv font-black text-3xl sm:text-5xl md:text-6xl tracking-tight flex flex-wrap">
                        {link.name.split('').map((char, cIdx) => (
                          <span
                            key={cIdx}
                            style={{
                              transitionDelay: `${cIdx * 25}ms`,
                            }}
                            className={`inline-block transform transition-all duration-300 ${
                              hoveredIndex === idx
                                ? 'text-white -translate-y-1.5'
                                : 'text-[#F8FAFC]/70 group-hover:text-white group-hover:-translate-y-1'
                            }`}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                      {isActive && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF4B00]/20 text-[#FF4B00] border border-[#FF4B00]/40">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-1 group-hover:text-white/80 transition-colors">
                      {link.subtitle}
                    </p>
                  </div>

                  <span className={`font-mono text-lg transition-transform duration-300 transform group-hover:translate-x-2 ${
                    hoveredIndex === idx ? 'text-[#FF4B00] opacity-100' : 'opacity-0'
                  }`}>
                    ↗
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Hover-Reactive Preview Frame with bespoke visuals */}
          <div className="hidden lg:flex lg:col-span-5 flex-col">
            <div className="nav-preview-box relative w-full h-[370px] rounded-2xl overflow-hidden border border-white/10 bg-[#121621] p-8 flex flex-col justify-between shadow-2xl transition-all duration-500">
              
              {/* Dynamic Gradient Backdrop */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${previews[hoveredIndex]?.gradient || 'from-orange-600/30 to-black'} transition-all duration-700`} 
              />
              <div className="absolute inset-0 bg-grid-carbon opacity-30" />

              {/* Dynamic Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-[#F8FAFC] border border-white/10">
                  {previews[hoveredIndex]?.tag}
                </span>
                <span 
                  className="font-mono text-xs font-bold px-2.5 py-0.5 rounded"
                  style={{ color: previews[hoveredIndex]?.accent || '#FF4B00', backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                  {previews[hoveredIndex]?.badge}
                </span>
              </div>

              {/* Central Graphic Visual Crossfade by index */}
              <div className="relative z-10 my-auto text-center py-2">
                <div className="w-24 h-24 mx-auto rounded-2xl border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm mb-3 shadow-glow-orange overflow-hidden">
                  {hoveredIndex === 0 && (
                    <svg className="w-16 h-16 text-[#FF4B00]" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="45" r="28" stroke="#FF4B00" strokeWidth="2.5" />
                      <path d="M 32,45 Q 50,38 68,45 L 65,58 Q 50,55 35,58 Z" fill="#D4AF37" opacity="0.9" />
                      <path d="M 42,28 L 50,22 L 58,28" stroke="#FF4B00" strokeWidth="2.5" />
                      <line x1="28" y1="72" x2="72" y2="72" stroke="#FF4B00" strokeWidth="2" strokeDasharray="3 3" />
                    </svg>
                  )}
                  {hoveredIndex === 1 && (
                    <svg className="w-16 h-16 text-[#FF4B00]" viewBox="0 0 100 100" fill="none">
                      <path d="M 15 50 Q 30 20, 50 50 T 85 50" stroke="#FF4B00" strokeWidth="3" fill="none" />
                      <line x1="15" y1="50" x2="85" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <text x="50" y="78" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontWeight="900" fontFamily="Unbounded, sans-serif">
                        63 WINS
                      </text>
                    </svg>
                  )}
                  {hoveredIndex === 2 && (
                    <svg className="w-16 h-16 text-[#E10600]" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="30" stroke="#E10600" strokeWidth="3" />
                      <line x1="20" y1="50" x2="80" y2="50" stroke="#E10600" strokeWidth="4" />
                      <circle cx="50" cy="50" r="10" fill="#090B10" stroke="#FFFFFF" strokeWidth="2" />
                      <text x="50" y="54" textAnchor="middle" fontSize="8" fill="#FF4B00" fontWeight="bold">REDLINE</text>
                    </svg>
                  )}
                  {hoveredIndex === 3 && (
                    <svg className="w-16 h-16 text-[#00E5FF]" viewBox="0 0 100 100" fill="none">
                      <path d="M 20,70 L 30,30 L 70,30 L 80,50 L 60,65 L 45,60 Z" stroke="#00E5FF" strokeWidth="3" strokeLinejoin="round" />
                      <circle cx="30" cy="30" r="3" fill="#00E5FF" />
                      <circle cx="80" cy="50" r="3" fill="#00E5FF" />
                      <text x="50" y="85" textAnchor="middle" fontSize="9" fill="#F8FAFC" fontWeight="bold" fontFamily="monospace">COTA 2026</text>
                    </svg>
                  )}
                  {hoveredIndex === 4 && (
                    <svg className="w-16 h-16 text-[#D4AF37]" viewBox="0 0 100 100" fill="none">
                      <rect x="25" y="30" width="50" height="42" rx="6" stroke="#D4AF37" strokeWidth="2.5" />
                      <circle cx="50" cy="50" r="14" stroke="#FF4B00" strokeWidth="2" />
                      <path d="M 38 30 L 38 24 Q 50 18 62 24 L 62 30" stroke="#D4AF37" strokeWidth="2" />
                      <text x="50" y="88" textAnchor="middle" fontSize="9" fill="#D4AF37" fontWeight="bold" fontFamily="monospace">1:2 MINI</text>
                    </svg>
                  )}
                </div>

                <h3 className="font-display-mv font-black text-2xl text-white tracking-tight">
                  {previews[hoveredIndex]?.title}
                </h3>
                <p className="font-body text-xs text-[#8E96AA] mt-1.5 max-w-sm mx-auto leading-relaxed">
                  {previews[hoveredIndex]?.desc}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[11px] text-[#8E96AA]">
                <span>MV1 TELEMETRY READY</span>
                <span className="text-[#FF4B00] font-bold">CLICK TO DRIVE →</span>
              </div>
            </div>

            {/* Quick Enquiries Strip */}
            <div className="mt-4 p-4 rounded-xl bg-[#121621]/60 border border-white/5 flex items-center justify-between text-xs font-mono text-[#8E96AA]">
              <span>BUSINESS & SPONSORSHIP:</span>
              <a href="mailto:management@verstappen.com" className="text-white hover:text-[#FF4B00] transition-colors">
                management@verstappen.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Curtain Footer: Socials Fan Deck */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-6">
            {SOCIALS_DATA.map((s) => (
              <a
                key={s.platform}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#8E96AA] hover:text-[#FF4B00] transition-colors flex items-center space-x-1.5"
              >
                <span>{s.platform}</span>
                <span className="text-[10px] text-white/40">({s.followers})</span>
              </a>
            ))}
          </div>

          <div className="text-[#8E96AA]/60 text-[11px]">
            © 2026 MAX VERSTAPPEN. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </div>
  );
}
