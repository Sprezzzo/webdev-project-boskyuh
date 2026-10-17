import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OnTrackHero from './OnTrackHero';
import StatsBento from './StatsBento';
import ResultsTable from './ResultsTable';
import PreF1PinScroll from './PreF1PinScroll';
import CircuitTelemetry from './CircuitTelemetry';
import OnTrackHelmets from './OnTrackHelmets';
import FooterSection from '../Home/FooterSection';

gsap.registerPlugin(ScrollTrigger);

export default function OnTrack({ onNavigate }) {
  const pageRef = useRef(null);

  useEffect(() => {
    // Refresh ScrollTrigger cleanly on page load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {}, pageRef);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="w-full min-h-screen bg-[#090B10] text-[#F8FAFC]">
      {/* Module 3.1: Layered Cutout Hero */}
      <OnTrackHero />

      {/* Module 3.2: Career Stats Count-Up Bento Grid */}
      <StatsBento />

      {/* Module 3.3: F1 Result Highlights Table */}
      <ResultsTable />

      {/* Module 3.4: Pre-F1 Career Horizontal Pin-Scroll (2006–2014) */}
      <PreF1PinScroll />

      {/* Module 3.5: Circuit Telemetry & Live Next Race Countdown */}
      <CircuitTelemetry />

      {/* Module 3.6: On-Track Helmets Hall of Fame */}
      <OnTrackHelmets onNavigate={onNavigate} />

      {/* Site Footer */}
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}
