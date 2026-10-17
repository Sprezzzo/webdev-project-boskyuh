import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Preloader from './components/preloader/Preloader';
import Home from './pages/Home/Home';
import OnTrack from './pages/OnTrack/OnTrack';
import OffTrack from './pages/OffTrack/OffTrack';
import { initLenis, destroyLenis, scrollTo } from './data/scrollManager';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
  );
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize single Lenis instance strictly linked to GSAP ticker
  useEffect(() => {
    initLenis();

    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      destroyLenis();
    };
  }, []);

  // Handle route navigation cleanly
  const handleNavigate = (path) => {
    const [pathname, hash] = path.split('#');
    const targetRoute = pathname || '/';

    if (targetRoute !== currentRoute) {
      setCurrentRoute(targetRoute);
      window.history.pushState({}, '', path);
      setTimeout(() => {
        if (hash) {
          const targetEl = document.getElementById(hash);
          if (targetEl) {
            scrollTo(targetEl);
          } else {
            scrollTo(0, { immediate: true });
          }
        } else {
          scrollTo(0, { immediate: true });
        }
        ScrollTrigger.refresh();
      }, 150);
    } else if (hash) {
      window.history.pushState({}, '', path);
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        scrollTo(targetEl);
      }
      ScrollTrigger.refresh();
    } else {
      scrollTo(0);
      ScrollTrigger.refresh();
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#090B10] text-[#F8FAFC] overflow-x-hidden select-text">
      {/* 1. Fullscreen LOAD VERSTAPPEN Preloader Overlay */}
      {isPreloaderActive && (
        <Preloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* 2. Floating Global Navbar & Curtain Overlay */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 3. Main Route Views */}
      <main className="w-full">
        {currentRoute === '/' && (
          <Home onNavigate={handleNavigate} />
        )}

        {currentRoute === '/on-track' && (
          <OnTrack onNavigate={handleNavigate} />
        )}

        {currentRoute === '/off-track' && (
          <OffTrack
            onNavigate={handleNavigate}
            cart={cart}
            setCart={setCart}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />
        )}
      </main>
    </div>
  );
}
