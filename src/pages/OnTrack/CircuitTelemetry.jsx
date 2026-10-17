import React, { useState, useEffect } from 'react';
import { CIRCUITS_DATA, HERO_DATA } from '../../data/verstappenData';
import { Clock, MapPin, Flag } from 'lucide-react';

export default function CircuitTelemetry() {
  const [selectedCircuit, setSelectedCircuit] = useState(CIRCUITS_DATA[0]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Live ticking countdown to 25/10/2026 20:00
  useEffect(() => {
    const targetDate = new Date(HERO_DATA.nextRaceDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="calendar" className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Live Race Countdown Header Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#121621] via-[#1a2130] to-[#121621] border border-[#FF4B00]/40 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4B00]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 border border-[#FF4B00]/40 text-xs font-mono font-bold text-[#FF4B00] uppercase mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>LIVE TELEMETRY COUNTDOWN // NEXT GP</span>
            </div>
            <h2 className="font-display-mv font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              UNITED STATES GRAND PRIX
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-1">
              CIRCUIT OF THE AMERICAS (COTA) • AUSTIN, TEXAS • OCT 23-25, 2026
            </p>
          </div>

          {/* Ticking Time Cells */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 font-mono text-center">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#090B10] border border-white/10 min-w-[70px] sm:min-w-[85px]">
              <span className="block font-display-mv font-black text-2xl sm:text-4xl text-[#FF4B00]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-[#8E96AA] uppercase tracking-widest">DAYS</span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#090B10] border border-white/10 min-w-[70px] sm:min-w-[85px]">
              <span className="block font-display-mv font-black text-2xl sm:text-4xl text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-[#8E96AA] uppercase tracking-widest">HRS</span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#090B10] border border-white/10 min-w-[70px] sm:min-w-[85px]">
              <span className="block font-display-mv font-black text-2xl sm:text-4xl text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-[#8E96AA] uppercase tracking-widest">MIN</span>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#090B10] border border-white/10 min-w-[70px] sm:min-w-[85px]">
              <span className="block font-display-mv font-black text-2xl sm:text-4xl text-[#FF4B00] animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-[#8E96AA] uppercase tracking-widest">SEC</span>
            </div>
          </div>
        </div>

        {/* Circuit Telemetry Switcher */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4B00] font-bold">
              CIRCUIT TELEMETRY SWITCHER
            </span>
            <h3 className="font-display-mv font-black text-2xl sm:text-4xl uppercase text-white mt-1">
              KEY CIRCUITS IN MAX'S REIGN
            </h3>
          </div>

          {/* Circuit Tabs */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-3 no-scrollbar select-none">
            {CIRCUITS_DATA.map((circuit) => {
              const isSelected = selectedCircuit.id === circuit.id;
              return (
                <button
                  key={circuit.id}
                  onClick={() => setSelectedCircuit(circuit)}
                  className={`flex-shrink-0 px-5 py-3 rounded-2xl font-mono text-xs font-bold uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF4B00] text-[#090B10] shadow-glow-orange scale-105'
                      : 'bg-[#121621] text-[#8E96AA] border border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{circuit.flag}</span>
                  <span>{circuit.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Circuit Telemetry Details Card */}
          <div className="mt-8 rounded-3xl bg-[#121621] border border-white/10 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: SVG Circuit Track Vector Vectorization */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090B10] border border-white/5 relative overflow-hidden min-h-[340px]">
              <div className="absolute inset-0 bg-grid-carbon opacity-30" />
              <div className="absolute top-4 left-4 font-mono text-xs text-[#8E96AA] flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF4B00]" />
                <span>{selectedCircuit.location}</span>
              </div>

              {/* Dynamic SVG Track Vector Path */}
              <svg
                viewBox="0 0 540 320"
                className="w-full max-w-md h-auto text-[#FF4B00] relative z-10 filter drop-shadow-[0_0_15px_rgba(255,75,0,0.5)]"
                fill="none"
              >
                {/* Circuit Track Path */}
                <path
                  d={selectedCircuit.svgPath}
                  stroke="#FF4B00"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dotted Centerline Guide */}
                <path
                  d={selectedCircuit.svgPath}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  opacity="0.6"
                />
              </svg>

              <div className="absolute bottom-4 right-4 font-mono text-[11px] text-[#8E96AA] bg-black/60 px-3 py-1 rounded-full border border-white/10">
                WINS HERE: <span className="text-[#FF4B00] font-bold">{selectedCircuit.verstappenWins}</span>
              </div>
            </div>

            {/* Right: Telemetry Specs & Weekend Schedule */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#FF4B00] font-bold uppercase">
                  <Flag className="w-4 h-4" />
                  <span>{selectedCircuit.nextEvent}</span>
                </div>

                <h4 className="font-display-mv font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1">
                  {selectedCircuit.name}
                </h4>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#090B10]/80 border border-white/5">
                    <span className="text-[#8E96AA] block text-[10px]">LAP LENGTH</span>
                    <span className="text-white font-bold">{selectedCircuit.lapLength}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090B10]/80 border border-white/5">
                    <span className="text-[#8E96AA] block text-[10px]">RACE DISTANCE</span>
                    <span className="text-white font-bold">{selectedCircuit.raceDistance}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090B10]/80 border border-white/5">
                    <span className="text-[#8E96AA] block text-[10px]">TURNS & DYNAMICS</span>
                    <span className="text-white font-bold">{selectedCircuit.turns}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090B10]/80 border border-white/5">
                    <span className="text-[#8E96AA] block text-[10px]">LAP RECORD</span>
                    <span className="text-[#FF4B00] font-bold">{selectedCircuit.lapRecord}</span>
                  </div>
                </div>
              </div>

              {/* Weekend Schedule Table */}
              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-xs text-[#8E96AA] uppercase tracking-wider block mb-3 font-bold">
                  OFFICIAL WEEKEND SCHEDULE
                </span>
                <div className="divide-y divide-white/5 font-mono text-xs">
                  {selectedCircuit.schedule.map((session, sIdx) => (
                    <div key={sIdx} className="py-2 flex items-center justify-between">
                      <span className="text-white font-medium">{session.session}</span>
                      <div className="text-right text-[#8E96AA]">
                        <span>{session.date}</span> • <span className="text-[#FF4B00] font-bold">{session.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
