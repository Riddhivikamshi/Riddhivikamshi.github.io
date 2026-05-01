// script.js

const ragaDatabase = [
  {
    id: 1,
    name: "Ahir Bhairav",
    aarohSwaras: "S, r, G, M, P, D, n, S'",
    avrohSwaras: "S', n, D, P, M, G, r, S",
    aarohScale: "1, b2, 3, 4, 5, 6, b7, 8",
    avrohScale: "8, b7, 6, 5, 4, 3, b2, 1",
    pakad: "G, M, D, n, D, P, M, G, r, S",
    westernEquivalent: "Mixolydian b2",
    carnaticEquivalent: "Chakravakam",
    time: "Early Morning",
    mood: "Peace, Devotion"
  },
  {
    id: 2,
    name: "Nat Bhairav",
    aarohSwaras: "S, R, G, M, P, d, N, S'",
    avrohSwaras: "S', N, d, P, M, G, R, S",
    aarohScale: "1, 2, 3, 4, 5, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, 4, 3, 2, 1",
    pakad: "S, R, G, M, d, N, S', S', N, d, P, M, G, M, R, S",
    westernEquivalent: "Harmonic Major",
    carnaticEquivalent: "Sarasangi",
    time: "Morning",
    mood: "Serenity, Calm"
  },
  {
    id: 3,
    name: "Bhairav",
    aarohSwaras: "S, r, G, M, P, d, N, S'",
    avrohSwaras: "S', N, d, P, M, G, r, S",
    aarohScale: "1, b2, 3, 4, 5, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, 4, 3, b2, 1",
    pakad: "G, M, d, d, P, G, M, r, r, S",
    westernEquivalent: "Double Harmonic Major",
    carnaticEquivalent: "Mayamalavagowla",
    time: "Early Morning",
    mood: "Solemnity, Devotion"
  },
  {
    id: 4,
    name: "Bhairavi",
    aarohSwaras: "S, r, g, M, P, d, n, S'",
    avrohSwaras: "S', n, d, P, M, g, r, S",
    aarohScale: "1, b2, b3, 4, 5, b6, b7, 8",
    avrohScale: "8, b7, b6, 5, 4, b3, b2, 1",
    pakad: "M, g, r, S, 'd, 'n, S, r, g, M",
    westernEquivalent: "Phrygian Mode",
    carnaticEquivalent: "Hanumatodi",
    time: "Morning (or end of concert)",
    mood: "Compassion, Devotion"
  },
  {
    id: 5,
    name: "Todi",
    aarohSwaras: "S, r, g, M(t), d, N, S'", 
    avrohSwaras: "S', N, d, P, M(t), g, r, S",
    aarohScale: "1, b2, b3, #4, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, b3, b2, 1",
    pakad: "d, N, S, r, g, r, S, M(t), g, r, g",
    westernEquivalent: "Lydian b2 b3 b6",
    carnaticEquivalent: "Shubhapantuvarali",
    time: "Late Morning",
    mood: "Pathos, Adoration"
  },
  {
    id: 6,
    name: "Gurjari Todi",
    aarohSwaras: "S, r, g, M(t), d, N, S'",
    avrohSwaras: "S', N, d, M(t), g, r, S",
    aarohScale: "1, b2, b3, #4, b6, 7, 8",
    avrohScale: "8, 7, b6, #4, b3, b2, 1",
    pakad: "d, d, N, d, M(t), g, r, g, r, S",
    westernEquivalent: "N/A (Omit 5th)",
    carnaticEquivalent: "Varali (approximate)",
    time: "Late Morning",
    mood: "Intensity, Longing"
  },
  {
    id: 7,
    name: "Bilaskhani Todi",
    aarohSwaras: "S, r, g, P, d, S'",
    avrohSwaras: "S', r', n, d, P, d, n, d, M, g, r, g, r, S",
    aarohScale: "1, b2, b3, 5, b6, 8",
    avrohScale: "8, b2(higher), b7, b6, 5, b6, b7, b6, 4, b3, b2, b3, b2, 1",
    pakad: "r, g, P, M, g, r, g, r, S, d, n, S",
    westernEquivalent: "Phrygian Mode (Notes only)",
    carnaticEquivalent: "Hanumatodi (Notes only)",
    time: "Late Morning",
    mood: "Deep Sorrow, Mournful"
  },
  {
    id: 8,
    name: "Yaman",
    aarohSwaras: "'N, R, G, M(t), P, D, N, S'",
    avrohSwaras: "S', N, D, P, M(t), G, R, S",
    aarohScale: "7(lower), 2, 3, #4, 5, 6, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 3, 2, 1",
    pakad: "'N, R, G, M(t), P, R, G, R, 'N, R, S",
    westernEquivalent: "Lydian Mode",
    carnaticEquivalent: "Kalyani",
    time: "Evening",
    mood: "Peace, Romance"
  },
  {
    id: 9,
    name: "Yaman Kalyan",
    aarohSwaras: "'N, R, G, M(t), P, D, N, S'",
    avrohSwaras: "S', N, D, P, M(t), G, M, G, R, S",
    aarohScale: "7(lower), 2, 3, #4, 5, 6, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 3, 4, 3, 2, 1",
    pakad: "'N, R, G, M(t), P, M, G, R, S",
    westernEquivalent: "Lydian (with passing natural 4)",
    carnaticEquivalent: "N/A",
    time: "Evening",
    mood: "Devotion, Grace"
  },
  {
    id: 10,
    name: "Puriya",
    aarohSwaras: "'N, r, G, M(t), D, N, S'",
    avrohSwaras: "S', N, M(t), D, G, M(t), r, S",
    aarohScale: "7(lower), b2, 3, #4, 6, 7, 8",
    avrohScale: "8, 7, #4, 6, 3, #4, b2, 1",
    pakad: "'N, r, G, M(t), D, G, M(t), r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "N/A",
    time: "Sunset",
    mood: "Detachment, Calm"
  },
  {
    id: 11,
    name: "Pooriya Dhanashri",
    aarohSwaras: "'N, r, G, M(t), P, d, N, S'",
    avrohSwaras: "S', N, d, P, M(t), G, M(t), r, G, r, S",
    aarohScale: "7(lower), b2, 3, #4, 5, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, 3, #4, b2, 3, b2, 1",
    pakad: "'N, r, G, M(t), P, d, P, M(t), G, M(t), r, G",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Pantuvarali",
    time: "Sunset",
    mood: "Deep Devotion"
  },
  {
    id: 12,
    name: "Poorvi",
    aarohSwaras: "'N, r, G, M, P, d, N, S'",
    avrohSwaras: "S', N, d, P, M(t), G, M, G, r, S",
    aarohScale: "7(lower), b2, 3, 4, 5, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, 3, 4, 3, b2, 1",
    pakad: "G, M, P, d, P, M(t), G, M, G, r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Kamavardhani",
    time: "Sunset",
    mood: "Seriousness, Mystery"
  },
  {
    id: 13,
    name: "Marwa",
    aarohSwaras: "'N, r, G, M(t), D, N, S'",
    avrohSwaras: "S', N, D, M(t), G, r, S",
    aarohScale: "7(lower), b2, 3, #4, 6, 7, 8",
    avrohScale: "8, 7, 6, #4, 3, b2, 1",
    pakad: "D, M(t), G, r, G, M(t), D, S'",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Gamanashrama (Approximate)",
    time: "Sunset",
    mood: "Anxiety, Anticipation"
  },
  {
    id: 14,
    name: "Kafi",
    aarohSwaras: "S, R, g, M, P, D, n, S'",
    avrohSwaras: "S', n, D, P, M, g, R, S",
    aarohScale: "1, 2, b3, 4, 5, 6, b7, 8",
    avrohScale: "8, b7, 6, 5, 4, b3, 2, 1",
    pakad: "S, R, R, g, M, P, D, n, D, P, M, g, R",
    westernEquivalent: "Dorian Mode",
    carnaticEquivalent: "Kharaharapriya",
    time: "Late Night",
    mood: "Joy, Romantic"
  },
  {
    id: 15,
    name: "Pooriya Kalyan",
    aarohSwaras: "'N, r, G, M(t), P, D, N, S'",
    avrohSwaras: "S', N, D, P, M(t), G, r, S",
    aarohScale: "7(lower), b2, 3, #4, 5, 6, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 3, b2, 1",
    pakad: "'N, r, G, M(t), P, D, P, M(t), G, r, S",
    westernEquivalent: "Lydian b2",
    carnaticEquivalent: "N/A",
    time: "Evening",
    mood: "Majestic, Grand"
  },
  {
    id: 16,
    name: "Adana",
    aarohSwaras: "S, R, m, P, n, P, S'",
    avrohSwaras: "S', d, n, P, g, m, R, S",
    aarohScale: "1, 2, 4, 5, b7, 5, 8",
    avrohScale: "8, b6, b7, 5, b3, 4, 2, 1",
    pakad: "S', d, n, P, m, P, g, m, R, S",
    westernEquivalent: "Natural Minor (with ascending skips)",
    carnaticEquivalent: "Atana (Approximate)",
    time: "Late Night",
    mood: "Heroic, Restless"
  },
  {
    id: 17,
    name: "Alhaiya Bilawal",
    aarohSwaras: "S, R, G, m, P, D, N, S'",
    avrohSwaras: "S', N, D, P, D, n, D, P, m, G, R, S",
    aarohScale: "1, 2, 3, 4, 5, 6, 7, 8",
    avrohScale: "8, 7, 6, 5, 6, b7, 6, 5, 4, 3, 2, 1",
    pakad: "G, R, G, P, m, G, R, S",
    westernEquivalent: "Ionian (with passing flat 7)",
    carnaticEquivalent: "Bilahari",
    time: "Late Morning",
    mood: "Devotion, Peace"
  },
  {
    id: 18,
    name: "Asavari (Shuddh Rishabh)",
    aarohSwaras: "S, R, m, P, d, S'",
    avrohSwaras: "S', n, d, P, m, g, R, S",
    aarohScale: "1, 2, 4, 5, b6, 8",
    avrohScale: "8, b7, b6, 5, 4, b3, 2, 1",
    pakad: "R, m, P, n, d, P, m, g, R, S",
    westernEquivalent: "Aeolian (omitting 3 and 7 ascending)",
    carnaticEquivalent: "Natabhairavi",
    time: "Late Morning",
    mood: "Compassion, Yearning"
  },
  {
    id: 19,
    name: "Bageshri",
    aarohSwaras: "S, g, m, D, n, S'",
    avrohSwaras: "S', n, D, m, g, R, S",
    aarohScale: "1, b3, 4, 6, b7, 8",
    avrohScale: "8, b7, 6, 4, b3, 2, 1",
    pakad: "D, n, S, m, g, R, S",
    westernEquivalent: "Dorian (omitting 2 and 5 ascending)",
    carnaticEquivalent: "Sriranjani (Approximate)",
    time: "Late Night",
    mood: "Romance, Separation"
  },
  {
    id: 20,
    name: "Bahar",
    aarohSwaras: "S, m, P, g, m, n, d, N, S'",
    avrohSwaras: "S', n, P, m, g, m, R, S",
    aarohScale: "1, 4, 5, b3, 4, b7, b6, 7, 8",
    avrohScale: "8, b7, 5, 4, b3, 4, 2, 1",
    pakad: "S, m, P, g, m, n, d, N, S'",
    westernEquivalent: "N/A (Complex zig-zag)",
    carnaticEquivalent: "Kanada (Approximate)",
    time: "Midnight / Spring Season",
    mood: "Joy, Celebration of Spring"
  },
  {
    id: 21,
    name: "Basant",
    aarohSwaras: "S, G, m, d, N, S'",
    avrohSwaras: "S', N, d, P, M(t), G, M(t), d, M(t), G, r, S",
    aarohScale: "1, 3, 4, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, 3, #4, b6, #4, 3, b2, 1",
    pakad: "M(t), d, r, S, N, d, P, M(t), G, r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Vasantabhairavi (Approximate)",
    time: "Late Night / Spring Season",
    mood: "Longing, Joy"
  },
  {
    id: 22,
    name: "Bhimpalasi",
    aarohSwaras: "'n, S, g, m, P, n, S'",
    avrohSwaras: "S', n, D, P, m, g, R, S",
    aarohScale: "b7(lower), 1, b3, 4, 5, b7, 8",
    avrohScale: "8, b7, 6, 5, 4, b3, 2, 1",
    pakad: "n, S, m, P, g, m, P, n, D, P, m, g, R, S",
    westernEquivalent: "Dorian (omitting 2 and 6 ascending)",
    carnaticEquivalent: "Abheri",
    time: "Late Afternoon",
    mood: "Yearning, Peace"
  },
  {
    id: 23,
    name: "Bhoopali (Bhup)",
    aarohSwaras: "S, R, G, P, D, S'",
    avrohSwaras: "S', D, P, G, R, S",
    aarohScale: "1, 2, 3, 5, 6, 8",
    avrohScale: "8, 6, 5, 3, 2, 1",
    pakad: "G, R, P, G, D, P, G, R, S",
    westernEquivalent: "Major Pentatonic",
    carnaticEquivalent: "Mohanam",
    time: "Early Evening",
    mood: "Devotion, Peace"
  },
  {
    id: 24,
    name: "Bihag",
    aarohSwaras: "'N, S, G, m, P, N, S'",
    avrohSwaras: "S', N, D, P, M(t), m, G, R, S",
    aarohScale: "7(lower), 1, 3, 4, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 4, 3, 2, 1",
    pakad: "'N, S, G, m, P, G, m, G, R, S",
    westernEquivalent: "Ionian (with passing #4 descending)",
    carnaticEquivalent: "Behag",
    time: "Late Evening",
    mood: "Romance, Joy"
  },
  {
    id: 25,
    name: "Brindabani Sarang",
    aarohSwaras: "S, R, m, P, N, S'",
    avrohSwaras: "S', n, P, m, R, S",
    aarohScale: "1, 2, 4, 5, 7, 8",
    avrohScale: "8, b7, 5, 4, 2, 1",
    pakad: "R, m, P, n, P, m, R, S",
    westernEquivalent: "Mixolydian (omitting 3 and 6, sharp 7 ascending)",
    carnaticEquivalent: "Madhyamavati",
    time: "Afternoon",
    mood: "Romance, Calm"
  },
  {
    id: 26,
    name: "Chandrakauns",
    aarohSwaras: "S, g, m, d, N, S'",
    avrohSwaras: "S', N, d, m, g, S",
    aarohScale: "1, b3, 4, b6, 7, 8",
    avrohScale: "8, 7, b6, 4, b3, 1",
    pakad: "g, m, d, N, S', N, d, m, g, S",
    westernEquivalent: "Harmonic Minor (omitting 2 and 5)",
    carnaticEquivalent: "Chandrakauns (Adapted)",
    time: "Late Night",
    mood: "Serious, Mysterious, Devotion"
  },
  {
    id: 27,
    name: "Charukesi",
    aarohSwaras: "S, R, G, m, P, d, n, S'",
    avrohSwaras: "S', n, d, P, m, G, R, S",
    aarohScale: "1, 2, 3, 4, 5, b6, b7, 8",
    avrohScale: "8, b7, b6, 5, 4, 3, 2, 1",
    pakad: "P, d, n, S', n, d, P, m, G, R, S",
    westernEquivalent: "Mixolydian b6",
    carnaticEquivalent: "Charukesi",
    time: "Anytime",
    mood: "Pathos, Devotion, Yearning"
  },
  {
    id: 28,
    name: "Chhayanat",
    aarohSwaras: "S, R, G, m, P, N, D, S'",
    avrohSwaras: "S', N, D, P, m, G, m, R, S",
    aarohScale: "1, 2, 3, 4, 5, 7, 6, 8",
    avrohScale: "8, 7, 6, 5, 4, 3, 4, 2, 1",
    pakad: "P, R, R, G, m, P, G, m, R, S",
    westernEquivalent: "Ionian (with complex zig-zag phrasing)",
    carnaticEquivalent: "N/A",
    time: "Early Evening",
    mood: "Playful, Romantic"
  },
  {
    id: 29,
    name: "Darbari Kanada",
    aarohSwaras: "S, R, g, m, P, d, n, S'",
    avrohSwaras: "S', d, n, P, m, P, g, m, R, S",
    aarohScale: "1, 2, b3, 4, 5, b6, b7, 8",
    avrohScale: "8, b6, b7, 5, 4, 5, b3, 4, 2, 1",
    pakad: "S, R, g, R, S, d, n, R, S",
    westernEquivalent: "Aeolian Mode (Natural Minor)",
    carnaticEquivalent: "Darbar (Approximate)",
    time: "Midnight",
    mood: "Deep, Majestic, Solemn"
  },
  {
    id: 30,
    name: "Desh",
    aarohSwaras: "S, R, m, P, N, S'",
    avrohSwaras: "S', n, D, P, m, G, R, S",
    aarohScale: "1, 2, 4, 5, 7, 8",
    avrohScale: "8, b7, 6, 5, 4, 3, 2, 1",
    pakad: "R, m, P, N, S', S', n, D, P, m, G, R, G, S",
    westernEquivalent: "Mixolydian (with major 7 ascending)",
    carnaticEquivalent: "Desh",
    time: "Late Evening",
    mood: "Romance, Patriotism, Joy"
  },
  {
    id: 31,
    name: "Deshkar",
    aarohSwaras: "S, R, G, P, D, S'",
    avrohSwaras: "S', D, P, G, R, S",
    aarohScale: "1, 2, 3, 5, 6, 8",
    avrohScale: "8, 6, 5, 3, 2, 1",
    pakad: "D, P, G, R, G, P, D, P, G, R, S",
    westernEquivalent: "Major Pentatonic",
    carnaticEquivalent: "Mohanam",
    time: "Morning",
    mood: "Lightness, Energy"
  },
  {
    id: 32,
    name: "Dhani",
    aarohSwaras: "S, g, m, P, n, S'",
    avrohSwaras: "S', n, P, m, g, S",
    aarohScale: "1, b3, 4, 5, b7, 8",
    avrohScale: "8, b7, 5, 4, b3, 1",
    pakad: "P, n, S', n, P, m, g, S",
    westernEquivalent: "Minor Pentatonic",
    carnaticEquivalent: "Suddha Dhanyasi",
    time: "Late Afternoon",
    mood: "Playful, Cheerful"
  },
  {
    id: 33,
    name: "Durga",
    aarohSwaras: "S, R, m, P, D, S'",
    avrohSwaras: "S', D, P, m, R, S",
    aarohScale: "1, 2, 4, 5, 6, 8",
    avrohScale: "8, 6, 5, 4, 2, 1",
    pakad: "R, m, P, D, m, R, D, S",
    westernEquivalent: "Suspended Pentatonic",
    carnaticEquivalent: "Shuddha Saveri",
    time: "Late Evening",
    mood: "Innocence, Devotion"
  },
  {
    id: 34,
    name: "Gaud Malhar",
    aarohSwaras: "S, R, G, m, P, N, D, S'",
    avrohSwaras: "S', N, D, P, m, G, R, m, G, R, S",
    aarohScale: "1, 2, 3, 4, 5, 7, 6, 8",
    avrohScale: "8, 7, 6, 5, 4, 3, 2, 4, 3, 2, 1",
    pakad: "S, R, G, m, R, P, m, G, R, m, G, R, S",
    westernEquivalent: "Ionian/Mixolydian blend",
    carnaticEquivalent: "N/A",
    time: "Monsoon Season / Afternoon",
    mood: "Joy, Rains, Romance"
  },
  {
    id: 35,
    name: "Gaud Sarang",
    aarohSwaras: "S, G, R, m, G, P, m, D, P, N, D, S'",
    avrohSwaras: "S', D, N, P, D, m, P, G, R, m, G, P, R, S",
    aarohScale: "1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8",
    avrohScale: "8, 6, 7, 5, 6, 4, 5, 3, 2, 4, 3, 5, 2, 1",
    pakad: "S, G, R, m, G, P, R, S",
    westernEquivalent: "Ionian Mode (with extreme zig-zag)",
    carnaticEquivalent: "N/A",
    time: "Early Afternoon",
    mood: "Complex, Joyful, Sunlit"
  },
  {
    id: 36,
    name: "Hameer",
    aarohSwaras: "S, R, S, G, m, N, D, N, S'",
    avrohSwaras: "S', N, D, P, M(t), P, D, P, m, R, S",
    aarohScale: "1, 2, 1, 3, 4, 7, 6, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 5, 6, 5, 4, 2, 1",
    pakad: "S, R, S, G, m, D, P, m, R, S",
    westernEquivalent: "Ionian/Lydian blend (Zig-zag)",
    carnaticEquivalent: "Hamirkalyani",
    time: "Early Night",
    mood: "Valor, Joy, Energy"
  },
  {
    id: 37,
    name: "Hamsadhvani",
    aarohSwaras: "S, R, G, P, N, S'",
    avrohSwaras: "S', N, P, G, R, S",
    aarohScale: "1, 2, 3, 5, 7, 8",
    avrohScale: "8, 7, 5, 3, 2, 1",
    pakad: "G, R, 'N, S, R, P, G, R",
    westernEquivalent: "Major Pentatonic (with Major 7th instead of 6th)",
    carnaticEquivalent: "Hamsadhvani",
    time: "Late Evening",
    mood: "Auspicious, Energetic, Devotion"
  },
  {
    id: 38,
    name: "Hindol",
    aarohSwaras: "S, G, M(t), D, N, S'",
    avrohSwaras: "S', N, D, M(t), G, S",
    aarohScale: "1, 3, #4, 6, 7, 8",
    avrohScale: "8, 7, 6, #4, 3, 1",
    pakad: "S, G, M(t), D, N, D, M(t), G, S",
    westernEquivalent: "Lydian Pentatonic",
    carnaticEquivalent: "Sunadavinodini",
    time: "Early Morning (Spring)",
    mood: "Joyful, Peaceful, Bright"
  },
  {
    id: 39,
    name: "Jaijaiwanti",
    aarohSwaras: "S, R, G, m, P, N, S'",
    avrohSwaras: "S', n, D, P, D, m, G, R, g, R, S",
    aarohScale: "1, 2, 3, 4, 5, 7, 8",
    avrohScale: "8, b7, 6, 5, 6, 4, 3, 2, b3, 2, 1",
    pakad: "R, g, R, S, 'D, 'n, R, S",
    westernEquivalent: "Dorian/Mixolydian blend",
    carnaticEquivalent: "Dwijavanthi",
    time: "Late Night",
    mood: "Romantic, Playful, Complex"
  },
  {
    id: 40,
    name: "Jaunpuri",
    aarohSwaras: "S, R, m, P, d, n, S'",
    avrohSwaras: "S', n, d, P, m, g, R, S",
    aarohScale: "1, 2, 4, 5, b6, b7, 8",
    avrohScale: "8, b7, b6, 5, 4, b3, 2, 1",
    pakad: "m, P, n, d, P, m, g, R, S",
    westernEquivalent: "Aeolian Mode (Natural Minor)",
    carnaticEquivalent: "Jonpuri",
    time: "Late Morning",
    mood: "Compassion, Yearning"
  },
  {
    id: 41,
    name: "Jhinjhoti",
    aarohSwaras: "S, R, m, P, D, S'",
    avrohSwaras: "S', n, D, P, m, G, R, S",
    aarohScale: "1, 2, 4, 5, 6, 8",
    avrohScale: "8, b7, 6, 5, 4, 3, 2, 1",
    pakad: "'D, S, R, m, G, R, S",
    westernEquivalent: "Mixolydian Mode",
    carnaticEquivalent: "Chenchurutti",
    time: "Late Night",
    mood: "Romantic, Lighthearted"
  },
  {
    id: 42,
    name: "Jog",
    aarohSwaras: "S, G, m, P, n, S'",
    avrohSwaras: "S', n, P, m, G, m, g, S",
    aarohScale: "1, 3, 4, 5, b7, 8",
    avrohScale: "8, b7, 5, 4, 3, 4, b3, 1",
    pakad: "S, G, m, P, n, P, m, G, m, g, S",
    westernEquivalent: "Mixolydian (with descending flat 3)",
    carnaticEquivalent: "Natai (Approximate)",
    time: "Late Night",
    mood: "Deep, Meditative, Joyful"
  },
  {
    id: 43,
    name: "Kamod",
    aarohSwaras: "S, m, R, P, m, D, P, N, S'",
    avrohSwaras: "S', N, D, P, m, P, D, P, G, m, P, G, M(t), R, S",
    aarohScale: "1, 4, 2, 5, 4, 6, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, 4, 5, 6, 5, 3, 4, 5, 3, #4, 2, 1",
    pakad: "R, P, m, P, D, P, G, m, P, G, M(t), R, S",
    westernEquivalent: "Ionian/Lydian blend (Highly Zig-zag)",
    carnaticEquivalent: "N/A",
    time: "Early Night",
    mood: "Playful, Pleasing"
  },
  {
    id: 44,
    name: "Kedar",
    aarohSwaras: "S, m, m, P, D, P, N, D, S'",
    avrohSwaras: "S', N, D, P, M(t), P, D, P, m, R, S",
    aarohScale: "1, 4, 4, 5, 6, 5, 7, 6, 8",
    avrohScale: "8, 7, 6, 5, #4, 5, 6, 5, 4, 2, 1",
    pakad: "S, m, m, P, M(t), P, D, P, m, R, S",
    westernEquivalent: "Lydian Mode (with passing natural 4)",
    carnaticEquivalent: "N/A",
    time: "Night",
    mood: "Peaceful, Romantic"
  },
  {
    id: 45,
    name: "Khamaj",
    aarohSwaras: "S, G, m, P, D, N, S'",
    avrohSwaras: "S', n, D, P, m, G, R, S",
    aarohScale: "1, 3, 4, 5, 6, 7, 8",
    avrohScale: "8, b7, 6, 5, 4, 3, 2, 1",
    pakad: "G, m, P, D, n, D, P, m, G",
    westernEquivalent: "Mixolydian Mode",
    carnaticEquivalent: "Khamas",
    time: "Late Night",
    mood: "Romantic, Flirtatious"
  },
  {
    id: 46,
    name: "Lalit",
    aarohSwaras: "N, r, G, m, M(t), G, M(t), d, N, S'",
    avrohSwaras: "S', N, d, M(t), d, M(t), m, G, r, S",
    aarohScale: "7(lower), b2, 3, 4, #4, 3, #4, b6, 7, 8",
    avrohScale: "8, 7, b6, #4, b6, #4, 4, 3, b2, 1",
    pakad: "N, r, G, m, M(t), m, G, r, S",
    westernEquivalent: "N/A (Uses both 4 and #4)",
    carnaticEquivalent: "Lalita (Approximate)",
    time: "Pre-Dawn",
    mood: "Serene, Devotion, Peaceful"
  },
  {
    id: 47,
    name: "Madhuwanti",
    aarohSwaras: "'N, S, g, M(t), P, N, S'",
    avrohSwaras: "S', N, D, P, M(t), g, R, S",
    aarohScale: "7(lower), 1, b3, #4, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, b3, 2, 1",
    pakad: "P, M(t), g, R, S, 'N, S, g, M(t), P",
    westernEquivalent: "Lydian Minor",
    carnaticEquivalent: "Dharmavati",
    time: "Late Afternoon",
    mood: "Romance, Yearning"
  },
  {
    id: 48,
    name: "Malkauns",
    aarohSwaras: "S, g, m, d, n, S'",
    avrohSwaras: "S', n, d, m, g, S",
    aarohScale: "1, b3, 4, b6, b7, 8",
    avrohScale: "8, b7, b6, 4, b3, 1",
    pakad: "g, m, d, n, d, m, g, S",
    westernEquivalent: "Minor Pentatonic",
    carnaticEquivalent: "Hindolam",
    time: "Midnight",
    mood: "Meditative, Introspective, Royal"
  },
  {
    id: 49,
    name: "Multani",
    aarohSwaras: "S, g, M(t), P, N, S'",
    avrohSwaras: "S', N, d, P, M(t), g, r, S",
    aarohScale: "1, b3, #4, 5, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, b3, b2, 1",
    pakad: "N, S, g, M(t), P, M(t), g, r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "N/A",
    time: "Late Afternoon",
    mood: "Pathos, Surrender"
  },
  {
    id: 50,
    name: "Nand",
    aarohSwaras: "S, G, m, P, N, S'",
    avrohSwaras: "S', N, D, P, M(t), P, G, m, D, P, R, S",
    aarohScale: "1, 3, 4, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 5, 3, 4, 6, 5, 2, 1",
    pakad: "G, m, P, N, D, P, M(t), P, G, m, D, P, R, S",
    westernEquivalent: "N/A (Highly zig-zag, uses both 4s)",
    carnaticEquivalent: "N/A",
    time: "Late Night",
    mood: "Joyful, Elegant, Complex"
  },
  {
    id: 51,
    name: "Nayaki Kanada",
    aarohSwaras: "S, R, m, P, n, S'",
    avrohSwaras: "S', n, d, P, m, P, g, m, R, S",
    aarohScale: "1, 2, 4, 5, b7, 8",
    avrohScale: "8, b7, b6, 5, 4, 5, b3, 4, 2, 1",
    pakad: "R, m, P, n, P, m, g, m, R, S",
    westernEquivalent: "Aeolian (with Kanada phrasing)",
    carnaticEquivalent: "Nayaki (Approximate)",
    time: "Late Night",
    mood: "Majestic, Supplication"
  },
  {
    id: 52,
    name: "Pahadi",
    aarohSwaras: "S, R, G, P, D, S'",
    avrohSwaras: "S', N, D, P, G, R, S, 'D, 'N, S",
    aarohScale: "1, 2, 3, 5, 6, 8",
    avrohScale: "8, 7, 6, 5, 3, 2, 1, 6(lower), 7(lower), 1",
    pakad: "S, R, G, P, D, P, G, R, S, 'D, 'N, S",
    westernEquivalent: "Major Pentatonic / Ionian",
    carnaticEquivalent: "N/A",
    time: "Evening",
    mood: "Folk, Lighthearted, Romantic"
  },
  {
    id: 53,
    name: "Patdeep",
    aarohSwaras: "'N, S, g, m, P, N, S'",
    avrohSwaras: "S', N, D, P, m, g, R, S",
    aarohScale: "7(lower), 1, b3, 4, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, 4, b3, 2, 1",
    pakad: "N, S, g, m, P, m, g, R, S",
    westernEquivalent: "Melodic Minor Ascending",
    carnaticEquivalent: "Gowrimanohari",
    time: "Late Afternoon",
    mood: "Separation, Longing"
  },
  {
    id: 54,
    name: "Piloo",
    aarohSwaras: "'N, S, g, m, P, N, S'",
    avrohSwaras: "S', n, d, P, m, g, R, S (Mixed)",
    aarohScale: "Mixed (Uses all 12 notes as passing tones)",
    avrohScale: "Mixed",
    pakad: "g, R, S, 'N, S, G, m, P, g, R, S",
    westernEquivalent: "Chromatic/Mixed",
    carnaticEquivalent: "Peelu",
    time: "Anytime (Usually Afternoon)",
    mood: "Sweet, Romantic, Playful"
  },
  {
    id: 55,
    name: "Rageshri",
    aarohSwaras: "S, G, m, D, n, S'",
    avrohSwaras: "S', n, D, m, G, R, S",
    aarohScale: "1, 3, 4, 6, b7, 8",
    avrohScale: "8, b7, 6, 4, 3, 2, 1",
    pakad: "G, m, D, n, D, m, G, R, S",
    westernEquivalent: "Mixolydian (omitting 5th)",
    carnaticEquivalent: "Ravichandrika",
    time: "Late Night",
    mood: "Romance, Devotion"
  },
  {
    id: 56,
    name: "Shankara",
    aarohSwaras: "S, G, P, N, D, S'",
    avrohSwaras: "S', N, P, G, P, G, R, S",
    aarohScale: "1, 3, 5, 7, 6, 8",
    avrohScale: "8, 7, 5, 3, 5, 3, 2, 1",
    pakad: "P, N, D, S', N, P, G, P, G, R, S",
    westernEquivalent: "Ionian (omitting 2 and 4 ascending)",
    carnaticEquivalent: "N/A",
    time: "Late Night",
    mood: "Heroic, Vigor, Joy"
  },
  {
    id: 57,
    name: "Shree",
    aarohSwaras: "S, r, R, P, M(t), d, N, S'",
    avrohSwaras: "S', N, d, P, M(t), G, r, S",
    aarohScale: "1, b2, 2, 5, #4, b6, 7, 8",
    avrohScale: "8, 7, b6, 5, #4, 3, b2, 1",
    pakad: "r, S, r, P, M(t), G, r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Kamavardhani (Approximate)",
    time: "Sunset",
    mood: "Solemn, Devotion, Twilight"
  },
  {
    id: 58,
    name: "Shuddha Kalyan",
    aarohSwaras: "S, R, G, P, D, S'",
    avrohSwaras: "S', N, D, P, M(t), G, R, S",
    aarohScale: "1, 2, 3, 5, 6, 8",
    avrohScale: "8, 7, 6, 5, #4, 3, 2, 1",
    pakad: "G, R, S, 'N, 'D, S, R, G, P, R, S",
    westernEquivalent: "Lydian (omitting 4 and 7 ascending)",
    carnaticEquivalent: "Mohanakalyani",
    time: "Early Night",
    mood: "Peace, Grandeur"
  },
  {
    id: 59,
    name: "Shuddha Sarang",
    aarohSwaras: "S, R, m, R, M(t), P, N, S'",
    avrohSwaras: "S', N, D, P, M(t), P, m, R, S",
    aarohScale: "1, 2, 4, 2, #4, 5, 7, 8",
    avrohScale: "8, 7, 6, 5, #4, 5, 4, 2, 1",
    pakad: "N, R, S, 'N, 'D, 'N, R, S, m, R, M(t), P, m, R, S",
    westernEquivalent: "N/A (Uses both 4s)",
    carnaticEquivalent: "N/A",
    time: "Afternoon",
    mood: "Serene, Romantic"
  },
  {
    id: 60,
    name: "Sohani",
    aarohSwaras: "S, G, M(t), D, N, S'",
    avrohSwaras: "S', N, D, G, M(t), G, r, S",
    aarohScale: "1, 3, #4, 6, 7, 8",
    avrohScale: "8, 7, 6, 3, #4, 3, b2, 1",
    pakad: "S', N, D, N, D, G, M(t), G, r, S",
    westernEquivalent: "N/A",
    carnaticEquivalent: "Hamsanandi",
    time: "Pre-Dawn",
    mood: "Yearning, Ethereal"
  },
  {
    id: 61,
    name: "Tilak Kamod",
    aarohSwaras: "S, R, G, S, R, m, P, D, m, P, S'",
    avrohSwaras: "S', P, D, m, G, S, R, G, S, 'N, S",
    aarohScale: "1, 2, 3, 1, 2, 4, 5, 6, 4, 5, 8",
    avrohScale: "8, 5, 6, 4, 3, 1, 2, 3, 1, 7(lower), 1",
    pakad: "P, D, m, G, S, R, G, S, 'N, S",
    westernEquivalent: "Mixolydian (with complex zig-zag phrasing)",
    carnaticEquivalent: "N/A",
    time: "Late Evening",
    mood: "Romantic, Cheerful"
  },
  {
    id: 62,
    name: "Tilang",
    aarohSwaras: "S, G, m, P, N, S'",
    avrohSwaras: "S', n, P, m, G, S",
    aarohScale: "1, 3, 4, 5, 7, 8",
    avrohScale: "8, b7, 5, 4, 3, 1",
    pakad: "G, m, P, N, S', n, P, m, G, S",
    westernEquivalent: "Mixolydian Pentatonic",
    carnaticEquivalent: "Gambhiranata (Approximate) / Savitri",
    time: "Late Night",
    mood: "Romance, Lighthearted"
  },
  {
    id: 63,
    name: "Vachaspati",
    aarohSwaras: "S, R, G, M(t), P, D, n, S'",
    avrohSwaras: "S', n, D, P, M(t), G, R, S",
    aarohScale: "1, 2, 3, #4, 5, 6, b7, 8",
    avrohScale: "8, b7, 6, 5, #4, 3, 2, 1",
    pakad: "P, D, n, D, P, M(t), G, R, S",
    westernEquivalent: "Lydian Dominant Mode (Acoustic Scale)",
    carnaticEquivalent: "Vachaspati",
    time: "Late Evening",
    mood: "Serious, Philosophical"
  },
  {
    id: 64,
    name: "Vibhas",
    aarohSwaras: "S, r, G, P, d, S'",
    avrohSwaras: "S', d, P, G, r, S",
    aarohScale: "1, b2, 3, 5, b6, 8",
    avrohScale: "8, b6, 5, 3, b2, 1",
    pakad: "d, P, G, r, S, r, G, P, d, P",
    westernEquivalent: "Phrygian Dominant Pentatonic",
    carnaticEquivalent: "Revagupti",
    time: "Morning",
    mood: "Devotion, Solemnity"
  },
  {
    id: 65,
    name: "Zilla Kafi",
    aarohSwaras: "S, R, g, m, P, D, n, S'",
    avrohSwaras: "S', n, D, P, m, g, R, S",
    aarohScale: "1, 2, b3, 4, 5, 6, b7, 8",
    avrohScale: "8, b7, 6, 5, 4, b3, 2, 1",
    pakad: "S, R, G, m, P, m, g, R, S",
    westernEquivalent: "Dorian Mode (with passing Major 3rd)",
    carnaticEquivalent: "Kapi",
    time: "Afternoon / Any Time",
    mood: "Folk, Playful, Colorful"
  }
];

console.log("Database initialized with 65 complete Ragas!");

// --- THE DISPLAY & SEARCH LOGIC ---

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

function displayRagas(ragasToDisplay) {
    resultsContainer.innerHTML = "";

    ragasToDisplay.forEach(raga => {
        const card = document.createElement('div');
        card.classList.add('raga-card'); 
        
        card.innerHTML = `
            <div class="card-header">
                <h2>${raga.name}</h2>
                <span class="time-badge">${raga.time}</span>
            </div>
            <div class="card-body">
                <div class="swara-section">
                    <p><strong>Aaroh:</strong> ${raga.aarohSwaras} <br> <span class="scale-text">(${raga.aarohScale})</span></p>
                    <p><strong>Avroh:</strong> ${raga.avrohSwaras} <br> <span class="scale-text">(${raga.avrohScale})</span></p>
                    <p class="pakad-text"><strong>Pakad:</strong> ${raga.pakad}</p>
                </div>
                <hr>
                <div class="equivalency-section">
                    <p><strong>Western:</strong> ${raga.westernEquivalent}</p>
                    <p><strong>Carnatic:</strong> ${raga.carnaticEquivalent}</p>
                </div>
                <hr>
                <p class="mood-text"><strong>Mood:</strong> ${raga.mood}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// Show all ragas initially
displayRagas(ragaDatabase);

// The Smart Search with Relevance Sorting & Comma-Agnostic Searching
searchInput.addEventListener('input', (event) => {
    const rawSearchTerm = event.target.value.toLowerCase().trim();
    
    // Create a "clean" version of the search term (removes all spaces and commas)
    // The /[\s,]+/g is a tiny piece of Regex that finds spaces and commas.
    const cleanSearchTerm = rawSearchTerm.replace(/[\s,]+/g, '');

    if (rawSearchTerm === "") {
        displayRagas(ragaDatabase);
        return;
    }

    const scoredRagas = ragaDatabase.map(raga => {
        let score = 0;

        // 1. Name Matches
        if (raga.name.toLowerCase().includes(rawSearchTerm)) score += 50;
        if (raga.name.toLowerCase().startsWith(rawSearchTerm)) score += 50; 

        // 2. Equivalencies Matches
        if (raga.westernEquivalent.toLowerCase().includes(rawSearchTerm)) score += 40;
        if (raga.westernEquivalent.toLowerCase().startsWith(rawSearchTerm)) score += 40; 
        
        if (raga.carnaticEquivalent.toLowerCase().includes(rawSearchTerm)) score += 40;
        if (raga.carnaticEquivalent.toLowerCase().startsWith(rawSearchTerm)) score += 40;

        // 3. Mood and Time Matches
        if (raga.mood.toLowerCase().includes(rawSearchTerm)) score += 20;
        if (raga.time.toLowerCase().includes(rawSearchTerm)) score += 20;

        // --- THE NEW FIX: SWARAS, SCALES, AND PAKAD ---
        // We clean the database strings first so they have no spaces or commas
        const cleanAaroh = raga.aarohSwaras.toLowerCase().replace(/[\s,]+/g, '');
        const cleanAvroh = raga.avrohSwaras.toLowerCase().replace(/[\s,]+/g, '');
        const cleanAarohScale = raga.aarohScale.toLowerCase().replace(/[\s,]+/g, '');
        const cleanAvrohScale = raga.avrohScale.toLowerCase().replace(/[\s,]+/g, '');
        const cleanPakad = raga.pakad.toLowerCase().replace(/[\s,]+/g, '');

        // Now we compare the clean search term against the clean database strings!
        if (cleanAaroh.includes(cleanSearchTerm)) score += 30;
        if (cleanAvroh.includes(cleanSearchTerm)) score += 30;
        if (cleanAarohScale.includes(cleanSearchTerm)) score += 30;
        if (cleanAvrohScale.includes(cleanSearchTerm)) score += 30;
        if (cleanPakad.includes(cleanSearchTerm)) score += 30;

        return { raga: raga, score: score };
    });

    // Filter out 0 scores
    const filteredRagas = scoredRagas.filter(item => item.score > 0);

    // Sort by highest score first
    filteredRagas.sort((a, b) => b.score - a.score);

    // Extract the raw raga data and display
    const finalSortedRagas = filteredRagas.map(item => item.raga);
    displayRagas(finalSortedRagas);
});

// --- DARK MODE TOGGLE LOGIC ---
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Change the text of the button depending on the mode
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️ Light Mode';
    } else {
        themeToggle.innerText = '🌙 Dark Mode';
    }
});
