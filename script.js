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
  }
];

console.log("Database initialized with 15 complete Ragas!");

// --- THE DISPLAY & SEARCH LOGIC ---

// 1. Grab the HTML elements we need to control
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

// 2. Create a function that draws the ragas on the screen
function displayRagas(ragasToDisplay) {
    // Clear the container first so we don't get duplicates
    resultsContainer.innerHTML = "";

    // Loop through the list of ragas and build an HTML card for each one
    ragasToDisplay.forEach(raga => {
        const card = document.createElement('div');
        card.classList.add('raga-card'); // We will style this in CSS later
        
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
        
        // Add the finished card to the webpage
        resultsContainer.appendChild(card);
    });
}

// 3. Show all 15 ragas immediately when the page first loads
displayRagas(ragaDatabase);

// 4. Make the search bar work!
searchInput.addEventListener('input', (event) => {
    // Get whatever the user typed and make it lowercase
    const searchTerm = event.target.value.toLowerCase();
    
    // Filter the database
    const filteredRagas = ragaDatabase.filter(raga => {
        // Return true if the search term is found in the Name, Western Mode, Carnatic equivalent, Mood, OR the Pakad!
        return (
            raga.name.toLowerCase().includes(searchTerm) ||
            raga.westernEquivalent.toLowerCase().includes(searchTerm) ||
            raga.carnaticEquivalent.toLowerCase().includes(searchTerm) ||
            raga.mood.toLowerCase().includes(searchTerm) ||
            raga.pakad.toLowerCase().includes(searchTerm)
        );
    });

    // Draw the screen again using only the filtered results
    displayRagas(filteredRagas);
});
