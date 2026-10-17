/**
 * MAX VERSTAPPEN OFFICIAL PLATFORM DATASET
 * 1-on-1 counterpart to LandoNorris.com
 * Contains telemetry statistics, helmet editions, Grand Prix milestones, circuits, lifestyle stories, and store inventory.
 */

export const HERO_DATA = {
  driverNumber: "01",
  permanentNumber: "33",
  driverName: "MAX VERSTAPPEN",
  teamName: "ORACLE RED BULL RACING",
  seasonBadge: "2026 ORACLE RED BULL F1 DRIVER",
  statusBadge: "NEXT GP: COTA — OCT 23-25",
  titleYears: "2021 • 2022 • 2023 • 2024",
  championshipCount: "4X WORLD CHAMPION",
  nextRaceDate: "2026-10-25T20:00:00Z",
  bioStrip: "Max Verstappen | 28 y.o | Hasselt / Netherlands | Oracle Red Bull Racing since 2016"
};

export const MANIFESTO_DATA = {
  quote: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track.",
  subtext: "From youngest ever Grand Prix winner at 18 to 4-time World Champion. Relentless speed. Uncompromising racecraft. Simply lovely.",
  signatureAuthor: "Max Verstappen #1"
};

export const POLAROIDS_DATA = [
  {
    id: "suzuka-2024",
    title: "Suzuka 2024",
    subtitle: "Trophy & Dominance",
    year: "2024",
    category: "ON TRACK",
    speed: 0.8,
    caption: "Commanding Japanese GP victory at Honda's sacred temple of speed.",
    accent: "#FF4B00",
    gradient: "from-orange-600/40 via-red-900/30 to-slate-950",
    svgType: "trophy"
  },
  {
    id: "fia-gala-2024",
    title: "FIA Gala 2024",
    subtitle: "4x World Champion",
    year: "2024",
    category: "LIFESTYLE",
    speed: 1.25,
    caption: "Crowning of the 4th consecutive FIA Formula One World Drivers' Championship.",
    accent: "#D4AF37",
    gradient: "from-amber-500/40 via-yellow-900/30 to-slate-950",
    svgType: "champion"
  },
  {
    id: "miami-2024",
    title: "Miami GP 2024",
    subtitle: "Paddock & Energy",
    year: "2024",
    category: "PADDOCK",
    speed: 0.95,
    caption: "Hard rock vibes, neon teal underglow, and Sprint race domination in Florida.",
    accent: "#00E5FF",
    gradient: "from-cyan-500/40 via-blue-900/30 to-slate-950",
    svgType: "paddock"
  },
  {
    id: "monaco-2024",
    title: "Monaco 2024",
    subtitle: "Padel & Training",
    year: "2024",
    category: "OFF TRACK",
    speed: 1.4,
    caption: "High-intensity padel sessions and reflex conditioning in the Principality.",
    accent: "#FF4B00",
    gradient: "from-rose-500/40 via-red-950/30 to-slate-950",
    svgType: "padel"
  },
  {
    id: "zandvoort-2025",
    title: "Zandvoort 2025",
    subtitle: "Orange Army",
    year: "2025",
    category: "HOME GP",
    speed: 1.1,
    caption: "Over 105,000 Dutch fans turning the North Sea coastal dunes into an orange cauldron.",
    accent: "#FF4B00",
    gradient: "from-orange-500/50 via-amber-900/30 to-slate-950",
    svgType: "lion"
  },
  {
    id: "brazil-2024",
    title: "Brazil 2024",
    subtitle: "Rain Masterclass",
    year: "2024",
    category: "LEGENDARY",
    speed: 1.35,
    caption: "P17 to P1 in biblical Interlagos downpour. 17 consecutive fastest laps.",
    accent: "#E10600",
    gradient: "from-red-600/50 via-slate-900/40 to-slate-950",
    svgType: "rain"
  },
  {
    id: "barcelona-2016",
    title: "Barcelona 2016",
    subtitle: "Youngest Winner",
    year: "2016",
    category: "HISTORIC",
    speed: 0.85,
    caption: "Age 18 years, 228 days. Debut race for Red Bull Racing. History rewritten.",
    accent: "#D4AF37",
    gradient: "from-amber-600/40 via-stone-900/30 to-slate-950",
    svgType: "youngest"
  },
  {
    id: "spa-2024",
    title: "Spa 2024",
    subtitle: "GT3 Test",
    year: "2024",
    category: "VERSTAPPEN.COM",
    speed: 1.2,
    caption: "Testing the Verstappen.com Racing Ferrari 296 GT3 through Eau Rouge and Raidillon.",
    accent: "#FF4B00",
    gradient: "from-zinc-500/40 via-red-950/30 to-slate-950",
    svgType: "gt3"
  },
  {
    id: "abu-dhabi-2021",
    title: "Abu Dhabi 2021",
    subtitle: "First Title",
    year: "2021",
    category: "CHAMPION",
    speed: 1.05,
    caption: "Turn 5, final lap. The culmination of a lifetime's quest for world championship gold.",
    accent: "#D4AF37",
    gradient: "from-amber-400/50 via-orange-950/30 to-slate-950",
    svgType: "title1"
  }
];

export const PORTALS_DATA = {
  onTrack: {
    title: "ON TRACK",
    subtitle: "THE RACECRAFT & TELEMETRY",
    description: "4 World Championships, 63 Grand Prix wins, and unprecedented Formula 1 records. Explore the precision telemetry and history.",
    route: "/on-track",
    badge: "UNLEASH THE LION",
    accent: "#FF4B00",
    statsPreview: "63 WINS • 4 TITLES"
  },
  offTrack: {
    title: "OFF TRACK",
    subtitle: "SIM RACING, GT3 & LIFESTYLE",
    description: "Team Redline 24h endurance, Verstappen.com Racing GT3 program, Falcon 8X travel, and the official Verstappen Mall.",
    route: "/off-track",
    badge: "BEYOND THE PADDOCK",
    accent: "#E10600",
    statsPreview: "TEAM REDLINE • MALL"
  }
};

export const HELMETS_DATA = [
  {
    id: "season-2026",
    name: "Season 2026",
    tagline: "Matte Carbon & Dutch Neon",
    season: "2026",
    specs: "Schuberth SF4 FIA 8860-2018 ABP",
    weight: "1,350g Carbon Kevlar",
    primaryColor: "#0A0D14",
    accentColor: "#FF4B00",
    visorTint: "Chrome Iridescent Gold",
    story: "Engineered for the 2026 aerodynamic regulations. High-contrast Dutch Lion roar with raw exposed carbon weave.",
    miniPrice: "€179.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "dutch-lion-2025",
    name: "Dutch Lion 2025",
    tagline: "Orange Army National Pride",
    season: "2025",
    specs: "Special Zandvoort & Spa GP Edition",
    weight: "1,350g Ultra-Rigid Carbon",
    primaryColor: "#FF4B00",
    accentColor: "#FFFFFF",
    visorTint: "Deep Orange Mirror",
    story: "A visual love letter to the passionate Dutch fans. Features an embossed 3D stylized Lion crest across the crown.",
    miniPrice: "€189.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "dark-carbon-2025",
    name: "Dark Carbon 2025",
    tagline: "Exposed Matte Carbon Weave",
    season: "2025",
    specs: "Night Race Stealth Spec (Singapore/Qatar)",
    weight: "1,310g Lightweight Carbon",
    primaryColor: "#11141D",
    accentColor: "#D4AF37",
    visorTint: "Smoked Electrochromic",
    story: "Stripped-down minimalism. 40g weight saving by omitting primary base coat, letting structural carbon reflect stadium lights.",
    miniPrice: "€194.95",
    scaleAvailable: ["1:2 Scale"]
  },
  {
    id: "champion-gold-2024",
    name: "Champion Gold 2024",
    tagline: "4-Star Commemorative Edition",
    season: "2024",
    specs: "24k Real Gold Flake Inlay",
    weight: "1,360g Collector Spec",
    primaryColor: "#D4AF37",
    accentColor: "#090B10",
    visorTint: "Mirrored 24k Gold",
    story: "Celebrates Max Verstappen's fourth consecutive World Championship crown with 4 stars inlaid on the rear aerodynamic spoiler.",
    miniPrice: "€199.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "brazil-2024",
    name: "Brazil 2024",
    tagline: "Wet Weather Masterclass",
    season: "2024",
    specs: "Sao Paulo Interlagos Rain Tribute",
    weight: "1,350g Carbon Composite",
    primaryColor: "#0A2818",
    accentColor: "#FFE600",
    visorTint: "High-Contrast Yellow Wet Spec",
    story: "Worn during the legendary P17-to-P1 wet victory in Sao Paulo. Features vibrant Brazilian yellow and emerald accents.",
    miniPrice: "€184.95",
    scaleAvailable: ["1:2 Scale"]
  },
  {
    id: "japan-white-2024",
    name: "Japan White 2024",
    tagline: "Honda Tribute Pearl White",
    season: "2024",
    specs: "Suzuka Special Cherry Blossom Edition",
    weight: "1,340g Pearl Finish",
    primaryColor: "#F4F5F7",
    accentColor: "#E10600",
    visorTint: "Ruby Red Iridium",
    story: "Commemorating the profound partnership with Honda. Features subtle Japanese maple and cherry blossom watermarks.",
    miniPrice: "€184.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "vegas-2023",
    name: "Vegas 2023",
    tagline: "Strip Neon & Polished Chrome",
    season: "2023",
    specs: "Las Vegas Night Race Special",
    weight: "1,380g Reflective Chrome",
    primaryColor: "#C0C0C0",
    accentColor: "#FF0055",
    visorTint: "Laser Magenta Mirror",
    story: "Reflects the billion-candlepower neon of the Las Vegas Strip. Polished electroplated chrome shell with playing card suits.",
    miniPrice: "€189.95",
    scaleAvailable: ["1:2 Scale"]
  },
  {
    id: "miami-2023",
    name: "Miami 2023",
    tagline: "Turquoise & Deco Sunset",
    season: "2023",
    specs: "Miami International Autodrome Special",
    weight: "1,350g Art Deco Spec",
    primaryColor: "#00E5FF",
    accentColor: "#FF4B80",
    visorTint: "Ocean Blue Mirror",
    story: "Pastel turquoise shell with art deco typography and palm leaf motifs inspired by South Beach glamour.",
    miniPrice: "€179.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "gold-2022",
    name: "Gold 2022",
    tagline: "World Champion Debut Gold",
    season: "2022",
    specs: "Reigning World Champion #1 Livery",
    weight: "1,350g Championship Spec",
    primaryColor: "#E2BA49",
    accentColor: "#FFFFFF",
    visorTint: "Gold Flash Mirror",
    story: "The historic helmet marking Max's first season defending the #1 car number in Formula 1.",
    miniPrice: "€179.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  },
  {
    id: "title-winner-2021",
    name: "Title Winner 2021",
    tagline: "Abu Dhabi Finale White & Gold",
    season: "2021",
    specs: "Historic Maiden World Championship Spec",
    weight: "1,350g Historic Spec",
    primaryColor: "#FFFFFF",
    accentColor: "#D4AF37",
    visorTint: "24k Pure Gold Mirror",
    story: "The legendary helmet worn during the heart-stopping final lap shootout in Abu Dhabi to claim his maiden crown.",
    miniPrice: "€199.95",
    scaleAvailable: ["1:2 Scale", "1:4 Scale"]
  }
];

export const CAREER_STATS = {
  championships: 4,
  championshipYears: ["2021", "2022", "2023", "2024"],
  wins: 63,
  podiums: 112,
  poles: 40,
  fastestLaps: 33,
  careerPoints: "3,014.5",
  winRate: "30.4%",
  consecutiveWinsRecord: "10 (All-time F1 Record)",
  seasonWinsRecord: "19 (All-time F1 Record)"
};

export const SEASONS_DATA = [
  { year: "2026", team: "Oracle Red Bull Racing", car: "RB22", races: "Active", wins: "TBD", podiums: "TBD", poles: "TBD", points: "—", pos: "#1 Current", title: false },
  { year: "2025", team: "Oracle Red Bull Racing", car: "RB21", races: "24", wins: "9", podiums: "15", poles: "8", points: "437", pos: "P2", title: false },
  { year: "2024", team: "Oracle Red Bull Racing", car: "RB20", races: "24", wins: "9", podiums: "14", poles: "8", points: "429", pos: "1st (Champion)", title: true },
  { year: "2023", team: "Oracle Red Bull Racing", car: "RB19", races: "22", wins: "19", podiums: "21", poles: "12", points: "575", pos: "1st (Champion)", title: true },
  { year: "2022", team: "Oracle Red Bull Racing", car: "RB18", races: "22", wins: "15", podiums: "17", poles: "7", points: "454", pos: "1st (Champion)", title: true },
  { year: "2021", team: "Red Bull Racing Honda", car: "RB16B", races: "22", wins: "10", podiums: "18", poles: "10", points: "395.5", pos: "1st (Champion)", title: true },
  { year: "2020", team: "Aston Martin Red Bull", car: "RB16", races: "17", wins: "2", podiums: "11", poles: "1", points: "214", pos: "P3", title: false },
  { year: "2019", team: "Aston Martin Red Bull", car: "RB15", races: "21", wins: "3", podiums: "9", poles: "2", points: "278", pos: "P3", title: false },
  { year: "2018", team: "Aston Martin Red Bull", car: "RB14", races: "21", wins: "2", podiums: "11", poles: "0", points: "249", pos: "P4", title: false },
  { year: "2017", team: "Red Bull Racing", car: "RB13", races: "20", wins: "2", podiums: "4", poles: "0", points: "168", pos: "P6", title: false },
  { year: "2016", team: "Red Bull / Toro Rosso", car: "RB12 / STR11", races: "21", wins: "1", podiums: "7", poles: "0", points: "204", pos: "P5", title: false },
  { year: "2015", team: "Scuderia Toro Rosso", car: "STR10", races: "19", wins: "0", podiums: "0", poles: "0", points: "49", pos: "P12 (Rookie)", title: false }
];

export const RESULTS_DATA = [
  {
    series: "Formula 1",
    grandPrix: "Brazilian Grand Prix",
    date: "Nov 03, 2024",
    year: "2024",
    circuit: "Autodromo Jose Carlos Pace (Interlagos)",
    finish: "P1",
    timeGap: "+19.477s (From P17)",
    notes: "Biblical rain masterclass. Passed 16 cars, set 17 consecutive fastest laps.",
    category: "WET MASTERCLASS"
  },
  {
    series: "Formula 1",
    grandPrix: "Las Vegas Grand Prix",
    date: "Nov 23, 2024",
    year: "2024",
    circuit: "Las Vegas Strip Circuit",
    finish: "P5",
    timeGap: "+8.910s (Title Clinched)",
    notes: "Mathematically secured his 4th World Drivers' Championship title under the neon strip lights.",
    category: "CHAMPIONSHIP CLINCH"
  },
  {
    series: "Formula 1",
    grandPrix: "Italian Grand Prix (Monza)",
    date: "Sep 03, 2023",
    year: "2023",
    circuit: "Autodromo Nazionale Monza",
    finish: "P1",
    timeGap: "+6.064s",
    notes: "Achieved the historic 10th consecutive Grand Prix victory, setting an all-time F1 world record.",
    category: "WORLD RECORD"
  },
  {
    series: "Formula 1",
    grandPrix: "Dutch Grand Prix",
    date: "Aug 27, 2023",
    year: "2023",
    circuit: "Circuit Zandvoort",
    finish: "P1",
    timeGap: "+3.744s",
    notes: "Equaled Sebastian Vettel's record of 9 straight wins amidst torrential cloudbursts at home.",
    category: "HOME GLORY"
  },
  {
    series: "Formula 1",
    grandPrix: "Belgian Grand Prix",
    date: "Aug 28, 2022",
    year: "2022",
    circuit: "Circuit de Spa-Francorchamps",
    finish: "P1",
    timeGap: "+17.841s (From P14)",
    notes: "Started 14th after engine penalty. Took the race lead in just 12 laps with breathtaking pace.",
    category: "PURE PACE"
  },
  {
    series: "Formula 1",
    grandPrix: "Abu Dhabi Grand Prix",
    date: "Dec 12, 2021",
    year: "2021",
    circuit: "Yas Marina Circuit",
    finish: "P1",
    timeGap: "+2.256s",
    notes: "Overtook Lewis Hamilton on turn 5 of the final lap to claim his maiden Formula 1 World Title.",
    category: "MAIDEN TITLE"
  },
  {
    series: "Formula 1",
    grandPrix: "Spanish Grand Prix",
    date: "May 15, 2016",
    year: "2016",
    circuit: "Circuit de Barcelona-Catalunya",
    finish: "P1",
    timeGap: "+0.616s",
    notes: "Youngest winner in F1 history (18 yrs, 228 days) in his debut race for Red Bull Racing.",
    category: "HISTORIC DEBUT"
  }
];

export const LANDMARK_WINS_STRIP = [
  {
    id: "barcelona-2016",
    race: "SPANISH GP 2016",
    sub: "Debut Win at 18y 228d",
    date: "15 MAY 2016",
    circuit: "Barcelona-Catalunya",
    badge: "HISTORIC FIRST",
    accent: "#D4AF37",
    gap: "+0.616s",
    detail: "Held off Kimi Räikkönen for 30 laps on worn tires to become the youngest winner in Formula 1 history.",
    gradient: "from-amber-600/40 via-yellow-900/30 to-black"
  },
  {
    id: "abu-dhabi-2021",
    race: "ABU DHABI GP 2021",
    sub: "Maiden World Championship",
    date: "12 DEC 2021",
    circuit: "Yas Marina",
    badge: "TITLE #1",
    accent: "#D4AF37",
    gap: "+2.256s",
    detail: "Final-lap Turn 5 lunge to clinch his first World Drivers' Championship after a titanic 22-race title duel.",
    gradient: "from-amber-500/50 via-orange-950/40 to-black"
  },
  {
    id: "spa-2022",
    race: "BELGIAN GP 2022",
    sub: "P14 to P1 Demolition",
    date: "28 AUG 2022",
    circuit: "Spa-Francorchamps",
    badge: "PURE SPEED",
    accent: "#FF4B00",
    gap: "+17.841s",
    detail: "Lapped nearly two seconds quicker than the grid, leading the Grand Prix by lap 12 from 14th on the grid.",
    gradient: "from-orange-600/50 via-red-950/30 to-black"
  },
  {
    id: "monza-2023",
    race: "ITALIAN GP 2023",
    sub: "10 Consecutive Wins Record",
    date: "03 SEP 2023",
    circuit: "Monza Temple of Speed",
    badge: "WORLD RECORD",
    accent: "#E10600",
    gap: "+6.064s",
    detail: "Broke Sebastian Vettel's decade-old record of 9 consecutive GP wins with victory on Ferrari's home soil.",
    gradient: "from-red-600/50 via-stone-900/40 to-black"
  },
  {
    id: "interlagos-2024",
    race: "BRAZIL GP 2024",
    sub: "P17 Monsoon Masterclass",
    date: "03 NOV 2024",
    circuit: "Interlagos",
    badge: "WET LEGEND",
    accent: "#00E5FF",
    gap: "+19.477s",
    detail: "Overcame qualifying heartbreak to pass 16 cars in torrential rain, pumping in 17 consecutive fastest laps.",
    gradient: "from-cyan-600/50 via-slate-900/40 to-black"
  },
  {
    id: "las-vegas-2024",
    race: "VEGAS GP 2024",
    sub: "4x World Title Crown",
    date: "23 NOV 2024",
    circuit: "Las Vegas Strip",
    badge: "4X CHAMPION",
    accent: "#D4AF37",
    gap: "Title Sealed",
    detail: "Secured fourth consecutive FIA Formula One World Drivers' Championship under the neon strip lights.",
    gradient: "from-amber-400/50 via-purple-950/40 to-black"
  }
];

export const PRE_F1_DATA = [
  {
    year: "2014",
    title: "FIA Formula 3 European Championship",
    team: "Van Amersfoort Racing",
    car: "Dallara F312 - Volkswagen",
    achievement: "10 Race Wins & 6 Consecutive Wins",
    description: "Dominant rookie season, winning 6 consecutive races at Spa and Norisring. Signed directly into Formula 1 by Helmut Marko at age 16."
  },
  {
    year: "2014",
    title: "Zandvoort Masters of Formula 3",
    team: "Motopark Academy",
    car: "Dallara F314",
    achievement: "Pole Position & Race Winner",
    description: "Conquered the prestigious international Formula 3 Masters at Zandvoort from pole position, leading every lap."
  },
  {
    year: "2013",
    title: "CIK-FIA World Championship KZ",
    team: "CRG Racing Team",
    car: "CRG / TM Shifter Kart",
    achievement: "World Champion (Age 15)",
    description: "Youngest driver ever to win the premier 125cc manual shifter kart World Championship against seasoned factory professionals."
  },
  {
    year: "2013",
    title: "CIK-FIA European Championships (KZ & KF)",
    team: "CRG / TM Racing",
    car: "CRG Factory Kart",
    achievement: "Dual European Champion in single year",
    description: "Historic double European Championship sweep in both elite KZ gearbox and KF direct-drive karting categories."
  },
  {
    year: "2006–2012",
    title: "International Karting Domination",
    team: "Jos Verstappen Prepped / CRG",
    car: "CRG Rotax Max / WSK",
    achievement: "WSK Euro Series & Master Series Champion",
    description: "Trained relentlessly by former F1 driver Jos Verstappen across Europe in rain and cold, capturing over 20 national and international championships."
  }
];

export const CIRCUITS_DATA = [
  {
    id: "cota",
    name: "Circuit of the Americas",
    location: "Austin, Texas, USA",
    flag: "🇺🇸",
    nextEvent: "OCT 23 - OCT 25, 2026",
    lapLength: "5.513 km (3.426 mi)",
    raceDistance: "308.405 km (56 Laps)",
    lapRecord: "1:36.169 — Charles Leclerc (2019)",
    turns: "20 Turns (11 Left, 9 Right)",
    elevationChange: "40.5 m uphill run into Turn 1",
    drsZones: "2 DRS Detection & Activation Zones",
    verstappenWins: "3 Wins (2021, 2022, 2023)",
    schedule: [
      { session: "Practice 1", date: "Friday, Oct 23", time: "12:30 CDT" },
      { session: "Sprint Qualifying", date: "Friday, Oct 23", time: "16:30 CDT" },
      { session: "Sprint Race", date: "Saturday, Oct 24", time: "13:00 CDT" },
      { session: "Grand Prix Qualifying", date: "Saturday, Oct 24", time: "17:00 CDT" },
      { session: "Grand Prix (56 Laps)", date: "Sunday, Oct 25", time: "14:00 CDT" }
    ],
    svgPath: "M 40,160 C 50,140 70,80 90,60 C 110,40 140,50 160,80 C 180,110 210,130 250,120 C 290,110 330,80 370,70 C 410,60 450,90 470,120 C 490,150 490,200 460,230 C 430,260 380,260 340,240 C 300,220 280,230 250,260 C 220,290 170,300 130,280 C 90,260 60,240 50,200 Z"
  },
  {
    id: "zandvoort",
    name: "Circuit Zandvoort",
    location: "Zandvoort, Netherlands",
    flag: "🇳🇱",
    nextEvent: "AUG 28 - AUG 30, 2026",
    lapLength: "4.259 km (2.646 mi)",
    raceDistance: "306.648 km (72 Laps)",
    lapRecord: "1:11.097 — Lewis Hamilton (2021)",
    turns: "14 Turns with 18-degree banking (Turn 3 & Turn 14)",
    elevationChange: "Dune rollercoaster with 15m elevation drops",
    drsZones: "2 DRS Zones (including banked Arie Luyendykbocht)",
    verstappenWins: "3 Wins (2021, 2022, 2023)",
    schedule: [
      { session: "Practice 1", date: "Friday, Aug 28", time: "12:30 CEST" },
      { session: "Practice 2", date: "Friday, Aug 28", time: "16:00 CEST" },
      { session: "Practice 3", date: "Saturday, Aug 29", time: "11:30 CEST" },
      { session: "Qualifying", date: "Saturday, Aug 29", time: "15:00 CEST" },
      { session: "Dutch Grand Prix", date: "Sunday, Aug 30", time: "15:00 CEST" }
    ],
    svgPath: "M 80,240 C 60,200 60,130 90,90 C 120,50 180,50 230,70 C 280,90 320,130 350,120 C 380,110 420,80 460,100 C 500,120 500,180 470,220 C 440,260 380,280 320,270 C 260,260 210,290 160,290 C 110,290 90,270 80,240 Z"
  },
  {
    id: "spa",
    name: "Circuit de Spa-Francorchamps",
    location: "Stavelot, Belgium",
    flag: "🇧🇪",
    nextEvent: "JUL 24 - JUL 26, 2026",
    lapLength: "7.004 km (4.352 mi) - Longest in F1",
    raceDistance: "308.052 km (44 Laps)",
    lapRecord: "1:44.701 — Sergio Perez (2024)",
    turns: "19 Legendary Turns (Eau Rouge, Raidillon, Pouhon, Blanchimont)",
    elevationChange: "102.2 m steep elevation gradient",
    drsZones: "2 High-speed DRS Zones",
    verstappenWins: "3 Wins (2021, 2022, 2023)",
    schedule: [
      { session: "Practice 1", date: "Friday, Jul 24", time: "13:30 CEST" },
      { session: "Qualifying", date: "Friday, Jul 24", time: "17:00 CEST" },
      { session: "Sprint Shootout", date: "Saturday, Jul 25", time: "12:00 CEST" },
      { session: "Sprint Race", date: "Saturday, Jul 25", time: "16:30 CEST" },
      { session: "Belgian Grand Prix", date: "Sunday, Jul 26", time: "15:00 CEST" }
    ],
    svgPath: "M 50,110 C 80,70 140,50 200,60 C 260,70 310,100 370,90 C 430,80 480,110 490,160 C 500,210 470,250 430,280 C 380,310 320,290 270,260 C 220,230 180,240 140,270 C 100,300 60,260 50,210 C 40,160 30,130 50,110 Z"
  },
  {
    id: "suzuka",
    name: "Suzuka International Racing Course",
    location: "Mie Prefecture, Japan",
    flag: "🇯🇵",
    nextEvent: "APR 03 - APR 05, 2027",
    lapLength: "5.807 km (3.608 mi)",
    raceDistance: "307.471 km (53 Laps)",
    lapRecord: "1:30.983 — Lewis Hamilton (2019)",
    turns: "18 Turns (Unique Figure-Eight layout with crossover bridge)",
    elevationChange: "40.4 m undulating Suzuka hills",
    drsZones: "1 Main Straight DRS Zone",
    verstappenWins: "3 Wins (2022, 2023, 2024)",
    schedule: [
      { session: "Practice 1", date: "Friday, Apr 03", time: "11:30 JST" },
      { session: "Practice 2", date: "Friday, Apr 03", time: "15:00 JST" },
      { session: "Practice 3", date: "Saturday, Apr 04", time: "11:30 JST" },
      { session: "Qualifying", date: "Saturday, Apr 04", time: "15:00 JST" },
      { session: "Japanese Grand Prix", date: "Sunday, Apr 05", time: "14:00 JST" }
    ],
    svgPath: "M 60,250 C 50,190 70,120 120,80 C 170,40 230,60 270,100 C 310,140 340,180 380,180 C 420,180 470,140 480,90 C 490,40 520,70 510,130 C 500,190 450,230 390,230 C 330,230 290,180 250,150 C 210,120 160,170 120,220 C 80,270 65,280 60,250 Z"
  },
  {
    id: "interlagos",
    name: "Autodromo Jose Carlos Pace (Interlagos)",
    location: "Sao Paulo, Brazil",
    flag: "🇧🇷",
    nextEvent: "NOV 06 - NOV 08, 2026",
    lapLength: "4.309 km (2.677 mi) Anti-Clockwise",
    raceDistance: "305.879 km (71 Laps)",
    lapRecord: "1:10.540 — Valtteri Bottas (2018)",
    turns: "15 High-G Turns (Senna S, Curva do Sol, Juncao)",
    elevationChange: "43 m natural amphitheater bowl",
    drsZones: "2 High-speed overtake DRS Zones",
    verstappenWins: "2 Wins (2019, 2024 - Rain Masterclass)",
    schedule: [
      { session: "Practice 1", date: "Friday, Nov 06", time: "11:30 BRT" },
      { session: "Sprint Qualifying", date: "Friday, Nov 06", time: "15:30 BRT" },
      { session: "Sprint Race", date: "Saturday, Nov 07", time: "11:00 BRT" },
      { session: "Grand Prix Qualifying", date: "Saturday, Nov 07", time: "15:00 BRT" },
      { session: "Sao Paulo Grand Prix", date: "Sunday, Nov 08", time: "14:00 BRT" }
    ],
    svgPath: "M 90,120 C 130,70 190,60 260,80 C 330,100 400,120 460,160 C 500,190 490,260 440,290 C 390,320 310,290 260,250 C 210,210 160,220 120,250 C 80,280 50,240 50,190 C 50,150 70,130 90,120 Z"
  }
];

export const OFF_TRACK_STORIES = [
  {
    number: "01",
    tag: "SIM RACING & ESPORTS",
    title: "TEAM REDLINE & VIRTUAL 24H ENDURANCE",
    subtitle: "From Grand Prix podium straight into a 24-hour virtual endurance battle.",
    description: "Max Verstappen's dedication to motorsport transcends the physical Formula 1 calendar. As an active team member and driver for Team Redline—the world's most successful esports racing outfit—Max logs hundreds of hours in his custom Monaco simulator rig.",
    details: [
      "24 Hours of Le Mans Virtual & Nurburgring 24h competitor",
      "Direct physics and telemetry correlation between rFactor 2 / iRacing and F1 setup balance",
      "Monaco hydraulic direct-drive sim setup with bespoke Redline telemetry dashboards",
      "Mentoring young virtual prodigies into real-world cockpit opportunities"
    ],
    quote: "Sim racing keeps my mind razor-sharp. When you race 24 hours against the best sim drivers in the world, there is zero room for error.",
    accent: "#FF4B00",
    gradient: "from-orange-600/30 via-slate-900 to-black"
  },
  {
    number: "02",
    tag: "GT3 RACING PROGRAM",
    title: "VERSTAPPEN.COM RACING (GT3)",
    subtitle: "Building the next generation of professional GT endurance champions.",
    description: "Verstappen.com Racing is Max's personal racing team project designed to bridge the gap between sim racing and real-world GT3 competition. Running competitive campaigns in the GT World Challenge Europe and Nurburgring Langstrecken-Serie.",
    details: [
      "Operating competitive Ferrari 296 GT3 and Aston Martin Vantage GT3 machinery",
      "Hands-on driver coaching by Max at Portimao, Mugello, and Spa test days",
      "Bespoke Verstappen.com Racing matte carbon livery with Dutch lion graphics",
      "Long-term goal: Competing in the real-world 24 Hours of Le Mans in the GT3/Hypercar category"
    ],
    quote: "My goal with Verstappen.com Racing is to give sim racers who might never have had the karting budget a real path to a factory GT3 seat.",
    accent: "#E10600",
    gradient: "from-red-600/30 via-slate-900 to-black"
  },
  {
    number: "03",
    tag: "CONDITIONING & LIFESTYLE",
    title: "ABOVE THE CLOUDS & PADEL",
    subtitle: "High-output physical conditioning, Monaco padel tournaments, and Falcon 8X travel.",
    description: "Maintaining the physical endurance to pull 5.5 lateral G-forces requires non-stop biometric training. When outside the cockpit, Max blends intense neck and core workouts with competitive padel games alongside fellow athletes in Monaco.",
    details: [
      "Personal Dassault Falcon 8X private jet customized in matte grey and Dutch orange",
      "Daily padel matches at Monte-Carlo Country Club for hand-eye reflex training",
      "Strict personal trainer regimen managed by Bradley Scanes & Rupert Manwaring",
      "Down-time in Monaco with his Bengal cats Jimmy and Sassy"
    ],
    quote: "You have to be able to switch off completely when you leave the track. That is the only way to come back with 100% hunger every race weekend.",
    accent: "#00E5FF",
    gradient: "from-cyan-600/30 via-slate-900 to-black"
  },
  {
    number: "04",
    tag: "AERODYNAMICS & DESIGN",
    title: "HELMET DESIGN STUDIO",
    subtitle: "The bespoke craft of Schuberth aerodynamics and custom paint artistry.",
    description: "Every helmet Max Verstappen wears is an aerodynamic masterpiece and an intimate canvas of personal symbolism. Working closely with Schuberth engineers and Dutch custom painters, each special edition takes over 70 hours of precision airbrushing.",
    details: [
      "Schuberth SF4 carbon shell custom molded to Max's exact cranial scan",
      "Top air intake and rear spoiler aero-optimized in Red Bull wind tunnel",
      "Special gold leaf and fluorescent paint reactions for night races",
      "The Dutch Lion: Stylized roar emblem integrated seamlessly into every edition"
    ],
    quote: "My helmet is my identity. When I pull the visor down, the entire outside world disappears.",
    accent: "#D4AF37",
    gradient: "from-amber-600/30 via-slate-900 to-black"
  }
];

export const MALL_PRODUCTS = [
  {
    id: "mv-helmet-2026-half",
    name: "2026 Season Schuberth 1:2 Scale Mini Helmet",
    category: "1:2 Scale Helmets",
    price: 179.95,
    currency: "€",
    scale: "1:2 SCALE",
    badge: "NEW ARRIVAL",
    rating: 4.9,
    reviews: 142,
    inStock: true,
    leadTime: "Immediate dispatch (1-3 business days)",
    material: "High-grade carbon-fiber shell with opening iridescent visor and Hans clip attachments",
    description: "Exact 1:2 scale collector replica of Max Verstappen's 2026 season Formula 1 helmet. Features Dutch lion roar artwork, Oracle Red Bull Racing branding, and authentic visor tear-off strips.",
    features: [
      "Functional visor mechanism with tinted visor strip",
      "Detailed chin spoiler and top air intakes",
      "Delivered in exclusive matte black Verstappen.com collector showcase box",
      "Official holographic Certificate of Authenticity"
    ],
    accent: "#FF4B00"
  },
  {
    id: "mv-helmet-gold-2024-half",
    name: "4x World Champion Gold 1:2 Scale Mini Helmet",
    category: "1:2 Scale Helmets",
    price: 199.95,
    currency: "€",
    scale: "1:2 SCALE",
    badge: "LIMITED EDITION",
    rating: 5.0,
    reviews: 310,
    inStock: true,
    leadTime: "Limited Edition - Final 80 units",
    material: "24k gold flake electroplated carbon composite with 4 championship gold stars",
    description: "Commemorating Max's 4th World Drivers' Championship. Finished in dazzling gold flake with bespoke rear spoiler star detailing.",
    features: [
      "Individually numbered metal chassis plaque (x/2024)",
      "Mirror gold electroplated visor",
      "Padded interior liner replicating FIA fireproof Nomex lining",
      "Velvet display plinth included"
    ],
    accent: "#D4AF37"
  },
  {
    id: "mv-helmet-brazil-half",
    name: "Brazil 2024 Rain Masterclass 1:2 Scale Helmet",
    category: "1:2 Scale Helmets",
    price: 184.95,
    currency: "€",
    scale: "1:2 SCALE",
    badge: "FAN FAVORITE",
    rating: 4.9,
    reviews: 88,
    inStock: true,
    leadTime: "In stock",
    material: "Fluorescent yellow and emerald green rain-spec lacquer with high-visibility visor",
    description: "The helmet from one of the greatest wet weather drives in Formula 1 history: P17 to P1 in the Sao Paulo monsoon.",
    features: [
      "Yellow rain-visibility visor tint",
      "Authentic Interlagos commemorative markings",
      "Schuberth aerodynamic top vortex generators",
      "Collector edition sleeve"
    ],
    accent: "#E10600"
  },
  {
    id: "mv-helmet-2026-quarter",
    name: "2026 Season Official 1:4 Scale Mini Helmet",
    category: "1:4 Scale Helmets",
    price: 69.95,
    currency: "€",
    scale: "1:4 SCALE",
    badge: "BESTSELLER",
    rating: 4.8,
    reviews: 95,
    inStock: true,
    leadTime: "Immediate dispatch",
    material: "Die-cast precision ABS composite with high-gloss automotive finish",
    description: "Compact 1:4 scale miniature of the 2026 season helmet. Perfect desktop collector showpiece with rotatable visor.",
    features: [
      "Compact desktop scale (approx. 8cm height)",
      "Opening visor with Red Bull visor strip",
      "Display plinth with driver signature print",
      "Official Verstappen hologram"
    ],
    accent: "#FF4B00"
  },
  {
    id: "mv-helmet-gold-quarter",
    name: "4x World Champion Gold 1:4 Scale Mini Helmet",
    category: "1:4 Scale Helmets",
    price: 74.95,
    currency: "€",
    scale: "1:4 SCALE",
    badge: "COLLECTOR ITEM",
    rating: 4.9,
    reviews: 64,
    inStock: true,
    leadTime: "In stock",
    material: "Gold metallic finish with collector display base",
    description: "1:4 scale desktop tribute to Max Verstappen's four consecutive World Championships (2021-2024).",
    features: [
      "Gold mirror finish",
      "Four World Champion trophy icons printed on plinth",
      "Crystal-clear acrylic dust cover included",
      "Authentic Schuberth SF4 miniature sculpt"
    ],
    accent: "#D4AF37"
  },
  {
    id: "mv-hoodie-lion-carbon",
    name: "Unleash The Lion Matte Carbon Heavyweight Hoodie",
    category: "Champion Apparel",
    price: 94.95,
    currency: "€",
    scale: "S / M / L / XL / XXL",
    badge: "PREMIUM WEAR",
    rating: 4.9,
    reviews: 218,
    inStock: true,
    leadTime: "In stock",
    material: "460 GSM organic French terry cotton with silicone rubber lion badge",
    description: "Heavyweight matte carbon oversized hoodie engineered for premium everyday comfort. Features high-density Dutch Lion chest emblem.",
    features: [
      "460 GSM heavyweight looped back cotton",
      "Embossed Dutch Lion chest logo in neon orange silicone",
      "Subtle #1 embroidered on the left cuff",
      "Metal drawstring aglets engraved with MV1"
    ],
    accent: "#FF4B00"
  },
  {
    id: "mv-tee-4x-champion",
    name: "4X World Champion Commemorative Oversized Tee",
    category: "Champion Apparel",
    price: 49.95,
    currency: "€",
    scale: "XS / S / M / L / XL",
    badge: "LIMITED PRINT",
    rating: 4.9,
    reviews: 173,
    inStock: true,
    leadTime: "In stock",
    material: "260 GSM single jersey premium cotton with metallic gold foil screen print",
    description: "Celebratory boxy fit tee commemorating Max's quadruple World Drivers' Championships with championship seasons listed on back.",
    features: [
      "Drop-shoulder contemporary boxy streetwear fit",
      "Metallic gold back print detailing 2021, 2022, 2023, 2024 titles",
      "Custom woven Verstappen hem tag",
      "Pre-shrunk vintage wash treatment"
    ],
    accent: "#D4AF37"
  },
  {
    id: "mv-cap-lion-orange",
    name: "Orange Army Dutch Lion Curved Brim Cap",
    category: "Champion Apparel",
    price: 44.95,
    currency: "€",
    scale: "ONE SIZE (ADJUSTABLE)",
    badge: "RACE DAY MUST-HAVE",
    rating: 4.8,
    reviews: 412,
    inStock: true,
    leadTime: "Immediate dispatch",
    material: "Structured 6-panel technical polyester with moisture-wicking sweatband",
    description: "The iconic Dutch Lion orange cap worn by tens of thousands across Zandvoort, Spa, and Red Bull Ring.",
    features: [
      "3D raised embroidery Dutch Lion on front crown",
      "Car #1 embroidered on side panel",
      "Laser-etched metal buckle closure with MV monogram",
      "Reflective piping on visor sandwich"
    ],
    accent: "#FF4B00"
  },
  {
    id: "mv-jacket-redbull-softshell",
    name: "Oracle Red Bull Racing Official Driver Softshell Jacket",
    category: "Red Bull Teamwear",
    price: 159.95,
    currency: "€",
    scale: "S / M / L / XL / XXL",
    badge: "AUTHENTIC TEAMWEAR",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    leadTime: "In stock",
    material: "Tri-layer windproof and water-resistant technical softshell with fleece backing",
    description: "Authentic team-issue driver jacket with high-density team and sponsor logos as worn by Max in the Formula 1 paddock.",
    features: [
      "Oracle Red Bull Racing, Honda, Mobil 1, and Tag Heuer heat transfers",
      "Ergonomic articulated sleeves for freedom of motion",
      "Waterproof chest zipper with storm guard",
      "Verstappen #1 Dutch flag badge inside neck collar"
    ],
    accent: "#E10600"
  },
  {
    id: "mv-sim-gloves-redline",
    name: "Team Redline x Verstappen Pro Sim Racing Gloves",
    category: "Red Bull Teamwear",
    price: 54.95,
    currency: "€",
    scale: "S / M / L / XL",
    badge: "SIM ESPORTS",
    rating: 4.9,
    reviews: 126,
    inStock: true,
    leadTime: "In stock",
    material: "Ultra-breathable 4-way stretch mesh with external seams and high-grip silicone palm",
    description: "Designed in collaboration with Team Redline. Engineered to prevent hand fatigue during marathon 24-hour virtual endurance stints.",
    features: [
      "External stitching for zero pressure points against force-feedback wheels",
      "Tactile touch-screen fingertips for telemetry and phone adjustment",
      "Team Redline and MV1 Dutch lion grip pattern",
      "Elasticated slip-on wrist cuff"
    ],
    accent: "#FF4B00"
  }
];

export const PARTNERS_DATA = [
  { name: "Oracle Red Bull Racing", category: "Formula 1 Constructor", year: "Since 2016", badge: "Factory Team" },
  { name: "Honda RBPT", category: "Power Unit Partner", year: "Since 2019", badge: "Championship Power" },
  { name: "EA Sports", category: "Global Gaming Partner", year: "Official Ambassador", badge: "F1 Game Cover" },
  { name: "Heineken 0.0", category: "Global Responsible Drinking", year: "Since 2023", badge: "When You Drive Never Drink" },
  { name: "TAG Heuer", category: "Official Timekeeper", year: "Swiss Chronograph", badge: "Precision" },
  { name: "Viaplay", category: "Broadcast & Documentaries", year: "Exclusive Access", badge: "Lion Unleashed" },
  { name: "Team Redline", category: "Sim Racing & Esports", year: "Co-Owner / Driver", badge: "Virtual Dominance" }
];

export const SOCIALS_DATA = [
  { platform: "TikTok", handle: "@maxverstappen1", followers: "3.2M+", link: "https://www.tiktok.com/@maxverstappen1", color: "#FE2C55" },
  { platform: "Instagram", handle: "@maxverstappen1", followers: "12.8M+", link: "https://www.instagram.com/maxverstappen1", color: "#E4405F" },
  { platform: "YouTube", handle: "Verstappen Official", followers: "1.1M+", link: "https://www.youtube.com", color: "#FF0000" },
  { platform: "Twitch / Team Redline", handle: "TeamRedlineSim", followers: "520K+", link: "https://www.twitch.tv/teamredline", color: "#9146FF" }
];

export const NAV_LINKS = [
  { id: "01", name: "HOME", path: "/", subtitle: "3D Helmet & 2026 Core Experience" },
  { id: "02", name: "ON TRACK", path: "/on-track", subtitle: "4x World Titles, Telemetry & Circuits" },
  { id: "03", name: "OFF TRACK", path: "/off-track", subtitle: "Team Redline, GT3 & Lifestyle" },
  { id: "04", name: "CIRCUIT CALENDAR", path: "/on-track#calendar", subtitle: "Next GP: COTA & Telemetry Switcher" },
  { id: "05", name: "VERSTAPPEN MALL", path: "/off-track#mall", subtitle: "Official Helmets, Caps & Collector Shop" }
];
