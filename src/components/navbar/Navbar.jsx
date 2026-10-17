import React, { useState, useEffect, useRef } from 'react';
import CurtainMenu from './CurtainMenu';
import { HERO_DATA } from '../../data/verstappenData';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate, cartCount = 0, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  // Monitor scroll for glassmorphism, progress bar, and directional hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Glassmorphism toggle
      setIsScrolled(currentScrollY > 40);

      // Scroll direction reveal/hide (keep visible near top or when curtain menu is open)
      if (isMenuOpen || currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Magnetic pill mouse physics
  const handleMagneticMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMagneticOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMagneticLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isMenuOpen
            ? 'bg-transparent py-4'
            : isScrolled
            ? 'bg-[#090B10]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Max Verstappen #1 / Lion Monogram + Live Status Badge */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
                onNavigate('/');
              }}
              className="group flex items-center space-x-2.5 focus:outline-none cursor-pointer"
            >
              {/* Lion Monogram Icon */}
              <div className="w-9 h-9 rounded-lg bg-[#FF4B00] flex items-center justify-center text-[#090B10] font-black font-display-mv shadow-glow-orange group-hover:scale-105 transition-transform duration-200">
                <span className="text-base tracking-tighter">MV1</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display-mv font-black text-xs sm:text-sm tracking-tight text-white group-hover:text-[#FF4B00] transition-colors uppercase">
                  VERSTAPPEN
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8E96AA] tracking-wider uppercase font-semibold">
                  ORACLE RED BULL #1
                </span>
              </div>
            </button>

            {/* Live Status Badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF4B00] animate-ping" />
              <span className="font-mono text-[10px] text-[#F8FAFC] font-semibold tracking-wider uppercase">
                {HERO_DATA.statusBadge}
              </span>
            </div>
          </div>

          {/* Right: Mall Store Pill CTA + Cart Button + Animated 2-Line Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Quick Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#121621] border border-white/10 text-white hover:border-[#FF4B00] transition-colors cursor-pointer"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF4B00] text-[#090B10] font-mono text-[10px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Magnetic Verstappen Mall CTA Pill with Fill-Sweep Hover */}
            <button
              onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
                onNavigate('/off-track#mall');
              }}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              style={{
                transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`,
                transition: magneticOffset.x === 0 ? 'transform 0.4s ease-out' : 'transform 0.1s ease-out'
              }}
              className="hidden sm:inline-flex group relative px-5 py-2.5 rounded-full bg-[#121621] border border-[#FF4B00]/40 overflow-hidden text-xs font-display-mv font-black text-[#F8FAFC] uppercase tracking-wider transition-all duration-300 hover:shadow-glow-orange cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-1.5 transition-colors duration-300 group-hover:text-[#090B10]">
                <span>VERSTAPPEN MALL</span>
                <span className="text-xs">↗</span>
              </span>
              <div className="absolute inset-0 bg-[#FF4B00] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
            </button>

            {/* Animated 2-Line to X Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-11 h-11 rounded-full border flex flex-col items-center justify-center space-y-1.5 focus:outline-none transition-all duration-300 cursor-pointer group ${
                isMenuOpen
                  ? 'bg-[#FF4B00]/15 border-[#FF4B00] shadow-glow-orange'
                  : 'bg-[#121621] border-white/15 hover:border-[#FF4B00]'
              }`}
              aria-label={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              <span
                className={`w-5 h-[2px] transition-all duration-300 transform origin-center ${
                  isMenuOpen
                    ? 'rotate-45 translate-y-[4px] bg-[#FF4B00]'
                    : 'bg-white group-hover:bg-[#FF4B00]'
                }`}
              />
              <span
                className={`w-5 h-[2px] transition-all duration-300 transform origin-center ${
                  isMenuOpen
                    ? '-rotate-45 -translate-y-[4px] bg-[#FF4B00]'
                    : 'bg-white group-hover:bg-[#FF4B00]'
                }`}
              />
            </button>

          </div>

        </div>

        {/* Bottom Scroll Progress Line in Dutch Lion Orange */}
        {!isMenuOpen && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#FF4B00] to-[#E10600] transition-all duration-100"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </header>

      {/* Fullscreen Curtain Overlay */}
      <CurtainMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentRoute={currentRoute}
        onNavigate={onNavigate}
      />
    </>
  );
}
