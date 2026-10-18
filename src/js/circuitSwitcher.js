const CIRCUITS_DATABASE = {
  cota: {
    name: 'Circuit of the Americas',
    location: 'Austin, Texas, USA',
    date: 'OCTOBER 23–25, 2026',
    flag: '🇺🇸',
    length: '5.513 km',
    laps: 56,
    turns: 20,
    drsZones: 2,
    lapRecord: '1:36.169 (C. Leclerc, 2019)',
    maxWins: '3 Victories (2021, 2022, 2023)',
    elevationChange: '41 meters (Turn 1 uphill climb)',
    color: '#FF4B00',
    svgPath: 'M 60,280 C 70,220 80,180 120,80 C 130,50 160,40 180,60 C 200,80 230,120 270,120 C 310,120 330,80 370,90 C 400,100 420,150 420,190 C 420,240 380,260 320,270 C 280,280 240,250 200,260 C 160,270 110,310 80,310 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 12:30 CDT / 17:30 UTC' },
      { name: 'Sprint Qualifying', time: 'FRI 16:30 CDT / 21:30 UTC' },
      { name: 'Sprint Race (19 Laps)', time: 'SAT 13:00 CDT / 18:00 UTC' },
      { name: 'Qualifying', time: 'SAT 17:00 CDT / 22:00 UTC' },
      { name: 'Grand Prix (56 Laps)', time: 'SUN 14:00 CDT / 19:00 UTC' },
    ],
  },
  zandvoort: {
    name: 'Circuit Zandvoort',
    location: 'Zandvoort, Netherlands',
    date: 'AUGUST 28–30, 2026',
    flag: '🇳🇱',
    length: '4.259 km',
    laps: 72,
    turns: 14,
    drsZones: 2,
    lapRecord: '1:11.097 (L. Hamilton, 2021)',
    maxWins: '3 Victories (2021, 2022, 2023 Hat-trick)',
    elevationChange: '18 degrees banking at Arie Luyendykbocht',
    color: '#FF4B00',
    svgPath: 'M 80,180 C 80,100 140,60 220,60 C 320,60 400,110 400,180 C 400,240 330,290 240,290 C 160,290 140,220 110,210 C 90,200 80,195 80,180 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 12:30 CEST / 10:30 UTC' },
      { name: 'Practice 2', time: 'FRI 16:00 CEST / 14:00 UTC' },
      { name: 'Practice 3', time: 'SAT 11:30 CEST / 09:30 UTC' },
      { name: 'Qualifying', time: 'SAT 15:00 CEST / 13:00 UTC' },
      { name: 'Dutch Grand Prix', time: 'SUN 15:00 CEST / 13:00 UTC' },
    ],
  },
  spa: {
    name: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot, Belgium',
    date: 'JULY 24–26, 2026',
    flag: '🇧🇪',
    length: '7.004 km',
    laps: 44,
    turns: 19,
    drsZones: 2,
    lapRecord: '1:46.286 (V. Bottas, 2018)',
    maxWins: '3 Victories (2021, 2022 P14-to-P1, 2023)',
    elevationChange: '102.2 meters (Eau Rouge & Raidillon)',
    color: '#E10600',
    svgPath: 'M 100,280 C 90,220 110,140 160,90 C 210,40 290,40 340,80 C 400,120 440,210 400,270 C 360,330 280,310 220,300 C 170,290 120,330 100,280 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 13:30 CEST / 11:30 UTC' },
      { name: 'Sprint Qualifying', time: 'FRI 17:00 CEST / 15:00 UTC' },
      { name: 'Sprint Race (15 Laps)', time: 'SAT 12:00 CEST / 10:00 UTC' },
      { name: 'Qualifying', time: 'SAT 16:00 CEST / 14:00 UTC' },
      { name: 'Belgian Grand Prix', time: 'SUN 15:00 CEST / 13:00 UTC' },
    ],
  },
  redbullring: {
    name: 'Red Bull Ring',
    location: 'Spielberg, Austria',
    date: 'JUNE 26–28, 2026',
    flag: '🇦🇹',
    length: '4.318 km',
    laps: 71,
    turns: 10,
    drsZones: 3,
    lapRecord: '1:05.619 (C. Sainz, 2020)',
    maxWins: '5 Victories (Home circuit record)',
    elevationChange: '63.5 meters full throttle crest',
    color: '#D4AF37',
    svgPath: 'M 120,250 C 100,170 140,80 230,70 C 320,60 390,90 410,150 C 430,220 370,270 290,280 C 220,290 160,280 120,250 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 12:30 CEST / 10:30 UTC' },
      { name: 'Sprint Qualifying', time: 'FRI 16:30 CEST / 14:30 UTC' },
      { name: 'Sprint Shootout', time: 'SAT 12:00 CEST / 10:00 UTC' },
      { name: 'Qualifying', time: 'SAT 16:00 CEST / 14:00 UTC' },
      { name: 'Austrian Grand Prix', time: 'SUN 15:00 CEST / 13:00 UTC' },
    ],
  },
  monaco: {
    name: 'Circuit de Monaco',
    location: 'Monte Carlo, Monaco',
    date: 'MAY 22–24, 2026',
    flag: '🇲🇨',
    length: '3.337 km',
    laps: 78,
    turns: 19,
    drsZones: 1,
    lapRecord: '1:12.909 (L. Hamilton, 2021)',
    maxWins: '2 Victories (2021, 2023)',
    elevationChange: '42 meters from Casino Square down to Port',
    color: '#00E5FF',
    svgPath: 'M 90,200 C 90,120 160,60 250,70 C 330,80 390,130 380,200 C 370,260 290,280 220,270 C 160,260 120,280 90,200 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 13:30 CEST / 11:30 UTC' },
      { name: 'Practice 2', time: 'FRI 17:00 CEST / 15:00 UTC' },
      { name: 'Practice 3', time: 'SAT 12:30 CEST / 10:30 UTC' },
      { name: 'Qualifying', time: 'SAT 16:00 CEST / 14:00 UTC' },
      { name: 'Monaco Grand Prix', time: 'SUN 15:00 CEST / 13:00 UTC' },
    ],
  },
  silverstone: {
    name: 'Silverstone Circuit',
    location: 'Northamptonshire, UK',
    date: 'JULY 03–05, 2026',
    flag: '🇬🇧',
    length: '5.891 km',
    laps: 52,
    turns: 18,
    drsZones: 2,
    lapRecord: '1:27.097 (M. Verstappen, 2020)',
    maxWins: '2 Victories (70th Anniversary GP 2020, 2023)',
    elevationChange: '11.3 meters through Maggotts, Becketts & Chapel',
    color: '#FF4B00',
    svgPath: 'M 110,220 C 100,140 180,80 280,80 C 380,80 430,160 410,240 C 380,300 290,290 220,280 C 160,270 120,280 110,220 Z',
    sessions: [
      { name: 'Practice 1', time: 'FRI 12:30 BST / 11:30 UTC' },
      { name: 'Practice 2', time: 'FRI 16:00 BST / 15:00 UTC' },
      { name: 'Practice 3', time: 'SAT 11:30 BST / 10:30 UTC' },
      { name: 'Qualifying', time: 'SAT 15:00 BST / 14:00 UTC' },
      { name: 'British Grand Prix', time: 'SUN 15:00 BST / 14:00 UTC' },
    ],
  },
};

export function initCircuitSwitcher() {
  // 1. Live Countdown to Austin COTA (Target: Oct 25, 2026)
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const targetDate = new Date('2026-10-25T19:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      let diff = targetDate - now;

      if (diff <= 0) {
        diff = 1000 * 60 * 60 * 24 * 7; // Keep ticker active if date passes
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 2. Circuit Selector Tabs
  const circuitButtons = document.querySelectorAll('[data-circuit-id]');
  if (!circuitButtons.length) return;

  const nameEl = document.getElementById('circuit-display-name');
  const locationEl = document.getElementById('circuit-display-location');
  const lengthEl = document.getElementById('circuit-display-length');
  const lapsEl = document.getElementById('circuit-display-laps');
  const turnsEl = document.getElementById('circuit-display-turns');
  const drsEl = document.getElementById('circuit-display-drs');
  const recordEl = document.getElementById('circuit-display-record');
  const winsEl = document.getElementById('circuit-display-wins');
  const elevationEl = document.getElementById('circuit-display-elevation');
  const svgPathEl = document.getElementById('circuit-svg-path');
  const sessionsContainer = document.getElementById('circuit-sessions-list');

  const selectCircuit = (circuitId) => {
    const data = CIRCUITS_DATABASE[circuitId];
    if (!data) return;

    circuitButtons.forEach((btn) => {
      const id = btn.getAttribute('data-circuit-id');
      if (id === circuitId) {
        btn.classList.add('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]', 'shadow-glow-orange');
        btn.classList.remove('bg-white/5', 'text-[#8E96AA]', 'border-white/10');
      } else {
        btn.classList.remove('bg-[#FF4B00]', 'text-white', 'border-[#FF4B00]', 'shadow-glow-orange');
        btn.classList.add('bg-white/5', 'text-[#8E96AA]', 'border-white/10');
      }
    });

    if (nameEl) nameEl.textContent = data.name;
    if (locationEl) locationEl.textContent = `${data.flag} ${data.location} • ${data.date}`;
    if (lengthEl) lengthEl.textContent = data.length;
    if (lapsEl) lapsEl.textContent = `${data.laps} Laps`;
    if (turnsEl) turnsEl.textContent = `${data.turns} Turns`;
    if (drsEl) drsEl.textContent = `${data.drsZones} DRS Zones`;
    if (recordEl) recordEl.textContent = data.lapRecord;
    if (winsEl) winsEl.textContent = data.maxWins;
    if (elevationEl) elevationEl.textContent = data.elevationChange;

    if (svgPathEl) {
      svgPathEl.setAttribute('d', data.svgPath);
      svgPathEl.style.stroke = data.color;
    }

    if (sessionsContainer && data.sessions) {
      sessionsContainer.innerHTML = '';
      data.sessions.forEach((session, idx) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 text-sm';
        li.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded bg-[#FF4B00]/20 text-[#FF4B00] text-xs font-mono font-bold flex items-center justify-center">${idx + 1}</span>
            <span class="font-bold text-white">${session.name}</span>
          </div>
          <span class="font-mono text-xs text-[#8E96AA]">${session.time}</span>
        `;
        sessionsContainer.appendChild(li);
      });
    }
  };

  circuitButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-circuit-id');
      selectCircuit(id);
    });
  });

  // Default to COTA
  selectCircuit('cota');
}
