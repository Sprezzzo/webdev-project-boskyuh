import React, { useState } from 'react';
import { RESULTS_DATA, LANDMARK_WINS_STRIP } from '../../data/verstappenData';
import { Award, Filter, Sparkles, ChevronRight } from 'lucide-react';

export default function ResultsTable() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'WET MASTERCLASS', 'CHAMPIONSHIP CLINCH', 'WORLD RECORD', 'HISTORIC DEBUT'];

  const filteredResults = filter === 'ALL'
    ? RESULTS_DATA
    : RESULTS_DATA.filter((r) => r.category === filter);

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#090B10] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-carbon opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121621] border border-white/10 mb-4">
              <Award className="w-3.5 h-3.5 text-[#FF4B00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">
                F1 RESULT HIGHLIGHTS // LANDMARK DRIVES
              </span>
            </div>
            <h2 className="font-display-mv font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              DEFINING RACE VICTORIES
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#8E96AA] mt-2 uppercase tracking-wider">
              Landmark Win Photo Strip & Official Results Archive
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 select-none">
            <span className="text-xs font-mono text-[#8E96AA] mr-2 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" /> FILTER:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#FF4B00] text-[#090B10] shadow-glow-orange'
                    : 'bg-[#121621] text-[#8E96AA] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PHOTO STRIP OF LANDMARK WINS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                PHOTO STRIP // LANDMARK GRAND PRIX MILESTONES
              </span>
            </div>
            <span className="font-mono text-xs text-[#8E96AA] hidden sm:block">
              SCROLL HORIZONTALLY TO EXPLORE 6 HISTORIC DRIVES →
            </span>
          </div>

          <div className="flex items-stretch overflow-x-auto gap-5 pb-4 no-scrollbar select-none">
            {LANDMARK_WINS_STRIP.map((win) => (
              <div
                key={win.id}
                className="w-[300px] sm:w-[340px] flex-shrink-0 p-6 rounded-3xl bg-[#121621] border border-white/10 hover:border-[#FF4B00]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Glow Backdrop */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: win.accent }}
                />

                {/* Media Artwork Box */}
                <div className={`w-full h-36 rounded-2xl bg-gradient-to-br ${win.gradient} border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-grid-carbon opacity-30" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase"
                      style={{ color: win.accent, backgroundColor: 'rgba(0,0,0,0.6)', border: `1px solid ${win.accent}40` }}
                    >
                      {win.badge}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-white/80 bg-black/50 px-2 py-0.5 rounded">
                      {win.date}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="font-display-mv font-black text-xl text-white tracking-tight leading-tight">
                      {win.race}
                    </div>
                    <div className="font-mono text-[10px] text-white/70">
                      {win.circuit}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#FF4B00] uppercase">
                      {win.sub}
                    </span>
                    <span className="font-mono text-xs font-black text-white">
                      {win.gap}
                    </span>
                  </div>

                  <p className="font-body text-xs text-[#8E96AA] leading-relaxed line-clamp-3">
                    {win.detail}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#8E96AA]">
                  <span>ORACLE RED BULL #1</span>
                  <span className="text-[#FF4B00] font-bold group-hover:translate-x-1 transition-transform flex items-center">
                    VERIFIED <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Highlights Table */}
        <div className="rounded-3xl bg-[#121621] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left font-mono text-xs sm:text-sm border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-[#8E96AA] uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-3">SERIES</th>
                  <th className="py-4 px-3">GRAND PRIX</th>
                  <th className="py-4 px-3">DATE</th>
                  <th className="py-4 px-3">FINISH</th>
                  <th className="py-4 px-3">TIME / GAP</th>
                  <th className="py-4 px-3">SIGNIFICANCE & TELEMETRY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredResults.map((race, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-3">
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[10px] text-white/80 font-bold">
                        {race.series || "Formula 1"}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <div className="font-display-mv font-bold text-white text-sm">
                        {race.grandPrix}
                      </div>
                      <span className="text-[10px] text-[#FF4B00] font-mono font-bold">
                        {race.category}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-[#F8FAFC] font-semibold">{race.date || race.year}</td>
                    <td className="py-4 px-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#FF4B00]/20 text-[#FF4B00] border border-[#FF4B00]/40 font-black text-xs">
                        {race.finish}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-white font-medium">{race.timeGap}</td>
                    <td className="py-4 px-3 font-body text-xs text-[#8E96AA] max-w-sm">
                      {race.notes}
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
