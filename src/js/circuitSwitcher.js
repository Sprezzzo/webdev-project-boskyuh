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
    image: '/assets/cota.png',
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
    image: '/assets/zandvoort.png',
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
    image: '/assets/spa francorchamps.png',
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
    image: '/assets/Red_Bull_Ring-removebg-preview.png',
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
    image: '/assets/Monaco_Circuit-removebg-preview.png',
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
    image: '/assets/SilverStone-removebg-preview.png',
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
  const imageEl = document.getElementById('circuit-display-image');
  const sessionsContainer = document.getElementById('circuit-sessions-list');

  const selectCircuit = (circuitId) => {
    const data = CIRCUITS_DATABASE[circuitId];
    if (!data) return;

    circuitButtons.forEach((btn) => {
      const id = btn.getAttribute('data-circuit-id');
      if (id === circuitId) {
        btn.classList.add('active');
        btn.style.backgroundColor = 'var(--accent-orange)';
        btn.style.color = '#FFFFFF';
        btn.style.borderColor = 'var(--accent-orange)';
      } else {
        btn.classList.remove('active');
        btn.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        btn.style.color = 'var(--text-secondary)';
        btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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

    if (imageEl && data.image) {
      imageEl.style.opacity = '0';
      setTimeout(() => {
        imageEl.src = data.image;
        imageEl.alt = `${data.name} Track Layout`;
        imageEl.style.opacity = '1';
      }, 150);
    }

    if (sessionsContainer && data.sessions) {
      sessionsContainer.innerHTML = '';
      data.sessions.forEach((session, idx) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';
        li.style.padding = '12px 16px';
        li.style.borderRadius = '10px';
        li.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
        li.style.border = '1px solid rgba(255, 255, 255, 0.06)';
        li.style.fontSize = '13px';
        li.style.fontFamily = 'var(--font-mono)';
        li.innerHTML = `
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="width: 24px; height: 24px; border-radius: 4px; background-color: rgba(255, 75, 0, 0.2); color: var(--accent-orange); font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center;">${idx + 1}</span>
            <span style="font-weight: 700; color: #FFFFFF;">${session.name}</span>
          </div>
          <span style="font-size: 11px; color: var(--text-secondary);">${session.time}</span>
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
