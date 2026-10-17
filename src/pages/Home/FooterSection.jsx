import React, { useState } from 'react';
import { SOCIALS_DATA, NAV_LINKS } from '../../data/verstappenData';
import { ArrowUpRight } from 'lucide-react';

export default function FooterSection({ onNavigate }) {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const rotations = [-6, -2, 2, 6];

  return (
    <footer className="relative w-full bg-[#090B10] border-t border-white/10 pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        
        {/* Fan-Out Socials Deck */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
              CONNECT DIRECTLY // SOCIALS FAN DECK
            </span>
          </div>

          <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-12">
            JOIN THE ORANGE ARMY
          </h2>

          {/* Fan Deck Container */}
          <div className="relative w-full max-w-4xl h-72 sm:h-80 flex items-center justify-center select-none">
            {SOCIALS_DATA.map((social, idx) => {
              const isHovered = hoveredSocial === idx;
              return (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredSocial(idx)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="absolute w-56 sm:w-64 h-64 sm:h-72 rounded-2xl p-6 bg-[#121621] border border-white/15 flex flex-col justify-between shadow-2xl transition-all duration-500 cursor-pointer group"
                  style={{
                    transform: isHovered
                      ? `translateY(-30px) scale(1.08) rotate(0deg)`
                      : `translateX(${(idx - 1.5) * 65}px) rotate(${rotations[idx]}deg)`,
                    zIndex: isHovered ? 40 : 10 + idx,
                    borderColor: isHovered ? social.color : 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Top Platform Tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ color: social.color, backgroundColor: `${social.color}20` }}
                    >
                      {social.platform}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Center Branding */}
                  <div className="my-auto text-left">
                    <div className="font-display-mv font-black text-2xl sm:text-3xl text-white uppercase group-hover:text-[#FF4B00] transition-colors">
                      {social.followers}
                    </div>
                    <div className="font-mono text-xs text-[#8E96AA] mt-1">
                      {social.handle}
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#8E96AA]">
                    <span>OFFICIAL FEED</span>
                    <span className="text-[#FF4B00] font-bold">FOLLOW →</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Sitemap & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-16 border-t border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-lg flex items-center justify-center shadow-glow-orange">
                MV1
              </div>
              <div>
                <span className="font-display-mv font-black text-lg text-white uppercase tracking-tight block">
                  MAX VERSTAPPEN
                </span>
                <span className="font-mono text-[10px] text-[#8E96AA] uppercase tracking-widest block">
                  ORACLE RED BULL RACING #1
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#8E96AA] leading-relaxed max-w-sm pt-2">
              4-time FIA Formula One World Drivers' Champion. Built for pure velocity, relentless racecraft, and authentic fan engagement.
            </p>

            <div className="font-mono text-xs text-[#8E96AA] pt-2">
              MANAGEMENT: <a href="mailto:info@verstappen.com" className="text-white hover:text-[#FF4B00] transition-colors">info@verstappen.com</a>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap Links */}
          <div className="lg:col-span-3 flex flex-col space-y-2.5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-2">
              PLATFORM SITEMAP
            </span>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.path)}
                className="text-left font-body text-xs text-[#8E96AA] hover:text-[#FF4B00] hover:translate-x-1 transition-all cursor-pointer"
              >
                {link.name} — <span className="font-mono text-[10px] opacity-60">{link.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Col 3: Orange Army Fan Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-1">
              ORANGE ARMY TELEMETRY DISPATCH
            </span>
            <p className="font-body text-xs text-[#8E96AA] leading-relaxed">
              Receive race weekend setup breakdowns, exclusive helmet drops, and Verstappen Mall access directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 pt-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL..."
                  required
                  className="w-full px-4 py-2.5 rounded-full bg-[#121621] border border-white/10 text-xs font-mono text-white placeholder-[#8E96AA] focus:outline-none focus:border-[#FF4B00] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#FF4B00] text-[#090B10] font-display-mv font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-glow-orange cursor-pointer"
              >
                JOIN
              </button>
            </form>

            {subscribed && (
              <span className="font-mono text-[11px] text-[#FF4B00] font-bold animate-pulse">
                ✓ WELCOME TO THE ORANGE ARMY GRID
              </span>
            )}
          </div>

        </div>

        {/* Bottom Baseline Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8E96AA] gap-4">
          <div>
            © 2026 MAX VERSTAPPEN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-white cursor-pointer">FIA LICENSED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
