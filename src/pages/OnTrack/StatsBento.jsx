import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CAREER_STATS, SEASONS_DATA } from '../../data/verstappenData';
import { Trophy, Award, Zap, Flag, Gauge } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsBento() {
  const containerRef = useRef(null);
  const [counts, setCounts] = useState({
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    fastestLaps: 0,
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const statsObj = {
        championships: 0,
        wins: 0,
        poles: 0,
        podiums: 0,
        fastestLaps: 0,
      };

      gsap.to(statsObj, {
        championships: CAREER_STATS.championships,
        wins: CAREER_STATS.wins,
        poles: CAREER_STATS.poles,
        podiums: CAREER_STATS.podiums,
        fastestLaps: CAREER_STATS.fastestLaps,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          once: true,
        },
        onUpdate: () => {
          setCounts({
            championships: Math.round(statsObj.championships),
            wins: Math.round(statsObj.wins),
            poles: Math.round(statsObj.poles),
            podiums: Math.round(statsObj.podiums),
            fastestLaps: Math.round(statsObj.fastestLaps),
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
              CAREER STATS // BENTO TELEMETRY
            </span>
          </div>
          <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            UNPRECEDENTED FORMULA 1 DOMINANCE
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
            Scroll-Triggered Career Telemetry Counters • 2015–2026
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: 4X World Championships (Large Feature Box) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#121621] to-[#D4AF37]/15 border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#D4AF37] px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                QUADRUPLE TITLE ERA
              </span>
            </div>

            <div className="my-8">
              <div className="font-display-mv font-black text-7xl sm:text-8xl text-white tracking-tight leading-none group-hover:text-[#D4AF37] transition-colors">
                {counts.championships}
              </div>
              <div className="font-display-mv font-black text-xl text-[#D4AF37] uppercase tracking-wider mt-2">
                WORLD CHAMPIONSHIPS
              </div>
              <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-2">
                Consecutive Formula One World Drivers' Championships won in 2021, 2022, 2023, and 2024.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-2">
              {CAREER_STATS.championshipYears.map((yr) => (
                <span
                  key={yr}
                  className="px-2.5 py-1 rounded-lg bg-black/40 font-mono text-xs font-black text-[#D4AF37] border border-[#D4AF37]/30"
                >
                  {yr} 🏆
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: 63+ Grand Prix Wins */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#121621] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-[#FF4B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4B00]/20 border border-[#FF4B00]/40 flex items-center justify-center text-[#FF4B00]">
                <Flag className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#FF4B00]">
                30.4% WIN RATE
              </span>
            </div>

            <div className="my-6">
              <div className="font-display-mv font-black text-6xl sm:text-7xl text-white tracking-tight leading-none group-hover:text-[#FF4B00] transition-colors">
                {counts.wins}+
              </div>
              <div className="font-display-mv font-bold text-lg text-white uppercase tracking-wider mt-2">
                GRAND PRIX VICTORIES
              </div>
              <p className="font-body text-xs text-[#8E96AA] mt-2">
                3rd all-time in Formula 1 history, passing legendary champions Ayrton Senna, Alain Prost, and Sebastian Vettel.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#8E96AA]">
              ALL-TIME CONSECUTIVE: <span className="text-[#FF4B00] font-bold">10 IN A ROW</span>
            </div>
          </div>

          {/* Card 3: 40+ Pole Positions */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-[#121621] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-white/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Gauge className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#8E96AA]">
                SATURDAY SPEED
              </span>
            </div>

            <div className="my-6">
              <div className="font-display-mv font-black text-6xl sm:text-7xl text-white tracking-tight leading-none group-hover:text-[#FF4B00] transition-colors">
                {counts.poles}+
              </div>
              <div className="font-display-mv font-bold text-lg text-white uppercase tracking-wider mt-2">
                POLE POSITIONS
              </div>
              <p className="font-body text-xs text-[#8E96AA] mt-2">
                Pure qualifying speed across the world's most demanding circuits.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#8E96AA]">
              SEASON RECORD: <span className="text-white font-bold">12 POLES (2023)</span>
            </div>
          </div>

          {/* Card 4: 112+ Podiums */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#121621] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-[#FF4B00]/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4B00]/15 border border-[#FF4B00]/30 flex items-center justify-center text-[#FF4B00]">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#8E96AA]">
                CONSISTENCY BENCHMARK
              </span>
            </div>

            <div className="my-6">
              <div className="font-display-mv font-black text-6xl sm:text-7xl text-white tracking-tight leading-none group-hover:text-[#FF4B00] transition-colors">
                {counts.podiums}+
              </div>
              <div className="font-display-mv font-bold text-xl text-white uppercase tracking-wider mt-2">
                CAREER PODIUM FINISHES
              </div>
              <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-2">
                A podium conversion rate unmatched in modern hybrid regulations. Finished on the podium in 21 of 22 races in 2023.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#8E96AA]">
              TOTAL CAREER POINTS: <span className="text-white font-bold">{CAREER_STATS.careerPoints} PTS</span>
            </div>
          </div>

          {/* Card 5: 33+ Fastest Laps */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#121621] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-[#E10600]/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#E10600]/15 border border-[#E10600]/30 flex items-center justify-center text-[#E10600]">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#E10600]">
                PURPLE SECTOR SPEED
              </span>
            </div>

            <div className="my-6">
              <div className="font-display-mv font-black text-6xl sm:text-7xl text-white tracking-tight leading-none group-hover:text-[#E10600] transition-colors">
                {counts.fastestLaps}+
              </div>
              <div className="font-display-mv font-bold text-xl text-white uppercase tracking-wider mt-2">
                FASTEST RACE LAPS
              </div>
              <p className="font-body text-xs sm:text-sm text-[#8E96AA] mt-2">
                Late-race relentless pace on worn tires to claim the bonus championship point. 17 consecutive fastest laps at Interlagos 2024.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#8E96AA]">
              SEASON RECORD: <span className="text-[#E10600] font-bold">19 WINS IN ONE YEAR</span>
            </div>
          </div>

        </div>

        {/* Seasons Breakdown Table (2015–2026) */}
        <div className="rounded-3xl bg-[#121621] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4B00] font-bold">
                FIA FORMULA 1 WORLD CHAMPIONSHIP
              </span>
              <h3 className="font-display-mv font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1">
                SEASONS BREAKDOWN ARCHIVE (2015–2026)
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-black/60 font-mono text-xs text-[#D4AF37] border border-[#D4AF37]/30 font-bold">
              🏆 = WORLD CHAMPION
            </span>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left font-mono text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-[#8E96AA] uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-3">SEASON</th>
                  <th className="py-4 px-3">CONSTRUCTOR</th>
                  <th className="py-4 px-3">CAR</th>
                  <th className="py-4 px-3">RACES</th>
                  <th className="py-4 px-3">WINS</th>
                  <th className="py-4 px-3">PODIUMS</th>
                  <th className="py-4 px-3">POLES</th>
                  <th className="py-4 px-3">POINTS</th>
                  <th className="py-4 px-3 text-right">STANDINGS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SEASONS_DATA.map((row) => (
                  <tr
                    key={row.year}
                    className={`transition-colors hover:bg-white/5 ${
                      row.title ? 'bg-[#D4AF37]/5 text-white font-semibold' : 'text-[#8E96AA]'
                    }`}
                  >
                    <td className="py-3.5 px-3 flex items-center space-x-2">
                      <span className={row.title ? 'text-[#D4AF37] font-black' : 'text-white'}>
                        {row.year}
                      </span>
                      {row.title && (
                        <span className="text-base" title="World Champion">
                          🏆
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-white font-medium">{row.team}</td>
                    <td className="py-3.5 px-3">{row.car}</td>
                    <td className="py-3.5 px-3">{row.races}</td>
                    <td className={`py-3.5 px-3 font-bold ${row.wins !== '0' && row.wins !== 'TBD' ? 'text-[#FF4B00]' : ''}`}>
                      {row.wins}
                    </td>
                    <td className="py-3.5 px-3">{row.podiums}</td>
                    <td className="py-3.5 px-3">{row.poles}</td>
                    <td className="py-3.5 px-3 font-bold text-white">{row.points}</td>
                    <td className="py-3.5 px-3 text-right">
                      {row.title ? (
                        <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-black">
                          {row.pos}
                        </span>
                      ) : (
                        <span>{row.pos}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
