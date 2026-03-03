// Beach stations data
const BEACH_STATIONS = [
    // Nice area
    {"name": "Nice - Plage Beau Rivage", "lat": 43.6950, "lon": 7.2800},
    {"name": "Nice - Promenade des Anglais", "lat": 43.6951, "lon": 7.2658},
    {"name": "Nice - Plage Carras", "lat": 43.6920, "lon": 7.2500},
    {"name": "Nice - Plage de Lenval", "lat": 43.6900, "lon": 7.2400},
    {"name": "Nice - Plage Magnan", "lat": 43.6880, "lon": 7.2300},
    {"name": "Nice - Plage de Carras", "lat": 43.6860, "lon": 7.2200},
    {"name": "Villefranche-sur-Mer - Plage des Marinières", "lat": 43.7050, "lon": 7.3100},
    {"name": "Saint-Jean-Cap-Ferrat - Plage de Passable", "lat": 43.6900, "lon": 7.3300},
    {"name": "Beaulieu-sur-Mer - Plage de la Petite Afrique", "lat": 43.7070, "lon": 7.3300},
    
    // Antibes - Juan-les-Pins area
    {"name": "Antibes - Plage de la Gravette", "lat": 43.5810, "lon": 7.1250},
    {"name": "Antibes - Plage de la Salis", "lat": 43.5528, "lon": 7.1239},
    {"name": "Antibes - Plage du Ponteil", "lat": 43.5650, "lon": 7.1150},
    {"name": "Juan-les-Pins - Plage de Juan", "lat": 43.5670, "lon": 7.1100},
    {"name": "Juan-les-Pins - Plage Gallice", "lat": 43.5600, "lon": 7.1050},
    {"name": "Golfe-Juan - Plage du Soleil", "lat": 43.5650, "lon": 7.0800},
    {"name": "Vallauris - Plage de Vallauris", "lat": 43.5700, "lon": 7.0650},
    
    // Cannes area
    {"name": "Cannes - Plage du Midi", "lat": 43.5483, "lon": 7.0172},
    {"name": "Cannes - Plage de la Croisette", "lat": 43.5500, "lon": 7.0300},
    {"name": "Cannes - Plage du Mourre Rouge", "lat": 43.5450, "lon": 7.0100},
    {"name": "Cannes - Plage de la Bocca", "lat": 43.5400, "lon": 6.9800},
    {"name": "Mandelieu - Plage de la Rague", "lat": 43.5350, "lon": 6.9400},
    {"name": "Théoule-sur-Mer - Plage de Théoule", "lat": 43.5100, "lon": 6.9400},
    
    // Fréjus - Saint-Raphaël area
    {"name": "Saint-Raphaël - Plage du Veillat", "lat": 43.4253, "lon": 6.7686},
    {"name": "Saint-Raphaël - Plage de Boulouris", "lat": 43.4100, "lon": 6.8000},
    {"name": "Saint-Raphaël - Plage du Débarquement", "lat": 43.4250, "lon": 6.7650},
    {"name": "Fréjus - Plage de Fréjus", "lat": 43.4200, "lon": 6.7350},
    {"name": "Fréjus - Plage de la Base Nature", "lat": 43.4150, "lon": 6.7250},
    {"name": "Saint-Aygulf - Plage de Saint-Aygulf", "lat": 43.3850, "lon": 6.7200},
    {"name": "Les Issambres - Plage des Issambres", "lat": 43.3500, "lon": 6.7000},
    
    // Sainte-Maxime area
    {"name": "Sainte-Maxime - Grande Plage", "lat": 43.3089, "lon": 6.6403},
    {"name": "Sainte-Maxime - Plage de la Nartelle", "lat": 43.3200, "lon": 6.6600},
    {"name": "Sainte-Maxime - Plage de la Croisette", "lat": 43.3050, "lon": 6.6350},
    {"name": "Sainte-Maxime - Plage des Éléphants", "lat": 43.3000, "lon": 6.6300},
    
    // Saint-Tropez area
    {"name": "Saint-Tropez - Plage de Pampelonne", "lat": 43.2361, "lon": 6.6556},
    {"name": "Saint-Tropez - Plage des Graniers", "lat": 43.2650, "lon": 6.6400},
    {"name": "Saint-Tropez - Plage de la Bouillabaisse", "lat": 43.2700, "lon": 6.6350},
    {"name": "Ramatuelle - Plage de l'Escalet", "lat": 43.2100, "lon": 6.6700},
    {"name": "Ramatuelle - Plage de Tahiti", "lat": 43.2300, "lon": 6.6600},
    {"name": "Gassin - Plage de la Briande", "lat": 43.2400, "lon": 6.6500},
    {"name": "Cavalaire - Plage de Cavalaire", "lat": 43.1750, "lon": 6.5350},
    {"name": "Cavalaire - Plage de Bonporteau", "lat": 43.1700, "lon": 6.5250},
    
    // Le Lavandou - Bormes area
    {"name": "Le Lavandou - Plage de Saint-Clair", "lat": 43.1350, "lon": 6.3700},
    {"name": "Le Lavandou - Grande Plage", "lat": 43.1380, "lon": 6.3650},
    {"name": "Le Lavandou - Plage de la Fossette", "lat": 43.1400, "lon": 6.3600},
    {"name": "Le Lavandou - Plage d'Aiguebelle", "lat": 43.1450, "lon": 6.3500},
    {"name": "Bormes-les-Mimosas - Plage de la Favière", "lat": 43.1500, "lon": 6.3400},
    {"name": "Bormes-les-Mimosas - Plage du Pellegrin", "lat": 43.1550, "lon": 6.3300},
    
    // Hyères area and islands
    {"name": "Hyères - Plage de l'Almanarre", "lat": 43.0833, "lon": 6.1333},
    {"name": "Hyères - Plage de la Bergerie", "lat": 43.0800, "lon": 6.1400},
    {"name": "Hyères - Plage de la Capte", "lat": 43.0750, "lon": 6.1500},
    {"name": "Giens - Plage de la Madrague", "lat": 43.0400, "lon": 6.1300},
    {"name": "Giens - Plage de la Tour Fondue", "lat": 43.0200, "lon": 6.1400},
    {"name": "Porquerolles - Plage d'Argent", "lat": 43.0000, "lon": 6.2000},
    {"name": "Porquerolles - Plage Notre-Dame", "lat": 42.9950, "lon": 6.2200},
    {"name": "Port-Cros - Plage de la Palud", "lat": 43.0050, "lon": 6.3900},
    
    // Toulon area
    {"name": "Toulon - Plage du Mourillon", "lat": 43.1042, "lon": 5.9417},
    {"name": "Toulon - Plage de Méjean", "lat": 43.1000, "lon": 5.9500},
    {"name": "Toulon - Anse Magaud", "lat": 43.0900, "lon": 5.9600},
    {"name": "La Seyne-sur-Mer - Plage des Sablettes", "lat": 43.0850, "lon": 5.8800},
    {"name": "La Seyne-sur-Mer - Plage de Fabrégas", "lat": 43.0800, "lon": 5.8700},
    {"name": "Six-Fours - Plage du Brusc", "lat": 43.0750, "lon": 5.8000},
    {"name": "Six-Fours - Plage de Bonnegrâce", "lat": 43.0700, "lon": 5.7900},
    {"name": "Sanary-sur-Mer - Plage de Portissol", "lat": 43.1100, "lon": 5.7900},
    {"name": "Bandol - Plage de Renécros", "lat": 43.1350, "lon": 5.7550},
    {"name": "Bandol - Grande Plage", "lat": 43.1380, "lon": 5.7500},
    
    // La Ciotat area
    {"name": "La Ciotat - Plage Lumière", "lat": 43.1750, "lon": 5.6083},
    {"name": "La Ciotat - Plage du Mugel", "lat": 43.1700, "lon": 5.6150},
    {"name": "La Ciotat - Plage de Saint-Jean", "lat": 43.1800, "lon": 5.6000},
    {"name": "La Ciotat - Plage de Fontsainte", "lat": 43.1850, "lon": 5.5900},
    {"name": "La Ciotat - Plage de l'Arène", "lat": 43.1900, "lon": 5.5800},
    
    // Cassis area
    {"name": "Cassis - Grande Mer", "lat": 43.2144, "lon": 5.5381},
    {"name": "Cassis - Plage du Bestouan", "lat": 43.2100, "lon": 5.5450},
    {"name": "Cassis - Plage de l'Arène", "lat": 43.2050, "lon": 5.5500},
    
    // Marseille area
    {"name": "Marseille - Plage des Catalans", "lat": 43.2800, "lon": 5.3550},
    {"name": "Marseille - Plage du Prophète", "lat": 43.2750, "lon": 5.3600},
    {"name": "Marseille - Plage de la Pointe Rouge", "lat": 43.2700, "lon": 5.3650},
    {"name": "Marseille - Plage du Prado", "lat": 43.2583, "lon": 5.3750},
    {"name": "Marseille - Plage de Bonneveine", "lat": 43.2550, "lon": 5.3800},
    {"name": "Marseille - Plage de la Vieille Chapelle", "lat": 43.2500, "lon": 5.3850},
    {"name": "Marseille - Plage de Montredon", "lat": 43.2300, "lon": 5.3500},
    {"name": "Marseille - Plage de la Madrague", "lat": 43.3500, "lon": 5.3600},
    {"name": "Marseille - Plage de Corbière", "lat": 43.3450, "lon": 5.3550},
    
    // Martigues - Côte Bleue area
    {"name": "Carry-le-Rouet - Plage du Rouet", "lat": 43.3300, "lon": 5.1500},
    {"name": "Sausset-les-Pins - Plage de Sausset", "lat": 43.3350, "lon": 5.1100},
    {"name": "Martigues - Plage de Ferrières", "lat": 43.3500, "lon": 5.0500},
    {"name": "Martigues - Plage de Sainte-Croix", "lat": 43.3550, "lon": 5.0400},
    {"name": "Martigues - Plage de la Couronne", "lat": 43.3300, "lon": 5.0300},
    {"name": "Martigues - Plage de Carro", "lat": 43.3250, "lon": 5.0200},
    
    // Port-de-Bouc - Fos area
    {"name": "Port-de-Bouc - Plage Napoléon", "lat": 43.4056, "lon": 4.9861},
    {"name": "Port-de-Bouc - Plage du Jaï", "lat": 43.4100, "lon": 4.9800},
    {"name": "Fos-sur-Mer - Plage de Fos", "lat": 43.4200, "lon": 4.9400},
    
    // Port Saint Louis area
    {"name": "Port Saint Louis - Plage Napoléon", "lat": 43.3833, "lon": 4.8167},
    {"name": "Port Saint Louis - Plage de la Gracieuse", "lat": 43.3900, "lon": 4.8100},
    {"name": "Port Saint Louis - Plage de Piémanson", "lat": 43.3500, "lon": 4.7500}
];

// Default API key
const DEFAULT_API_KEY = 'fdd2809faa3f4782c85628e2eec7948b';

// Utility functions
function msToKnots(speedMs) {
    return speedMs * 1.94384;
}

function degreesToCardinal(deg) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                       'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Fetch wind data for a beach
async function getWindData(lat, lon, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching wind data:', error);
        return null;
    }
}

// Check all beaches
async function checkBeaches(minSpeedKnots) {
    const matchingBeaches = [];
    let checkedCount = 0;
    
    for (const beach of BEACH_STATIONS) {
        const weatherData = await getWindData(beach.lat, beach.lon, DEFAULT_API_KEY);
        checkedCount++;
        
        // Update progress
        document.getElementById('loadingProgress').textContent = 
            `${checkedCount}/${BEACH_STATIONS.length} beaches checked`;
        
        if (weatherData && weatherData.wind) {
            const windSpeedMs = weatherData.wind.speed || 0;
            const windSpeedKnots = msToKnots(windSpeedMs);
            const windDeg = weatherData.wind.deg || 0;
            const stationName = weatherData.name || 'Unknown';
            
            if (windSpeedKnots >= minSpeedKnots) {
                matchingBeaches.push({
                    name: beach.name,
                    latitude: beach.lat,
                    longitude: beach.lon,
                    source: `OpenWeather (${stationName})`,
                    windSpeedKnots: windSpeedKnots,
                    windDirection: degreesToCardinal(windDeg),
                    windDegrees: windDeg,
                    timestamp: weatherData.dt
                });
            }
        }
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Sort by longitude (East to West)
    matchingBeaches.sort((a, b) => b.longitude - a.longitude);
    
    return matchingBeaches;
}

// Display results
function displayResults(beaches, minSpeed) {
    const beachList = document.getElementById('beachList');
    beachList.innerHTML = '';
    
    if (beaches.length === 0) {
        document.getElementById('thresholdValue').textContent = minSpeed;
        document.getElementById('noResultsSection').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
        return;
    }
    
    // Update stats
    const avgSpeed = beaches.reduce((sum, b) => sum + b.windSpeedKnots, 0) / beaches.length;
    const maxSpeed = Math.max(...beaches.map(b => b.windSpeedKnots));
    
    document.getElementById('beachCount').textContent = `${beaches.length} beach${beaches.length > 1 ? 'es' : ''}`;
    document.getElementById('avgSpeed').textContent = `Avg: ${avgSpeed.toFixed(1)} kts`;
    document.getElementById('maxSpeed').textContent = `Max: ${maxSpeed.toFixed(1)} kts`;
    
    // Create beach cards
    beaches.forEach((beach, index) => {
        const card = document.createElement('div');
        card.className = 'beach-card';
        card.innerHTML = `
            <div class="beach-card-header">
                <div class="beach-name">${index + 1}. ${beach.name}</div>
                <div class="wind-speed">${beach.windSpeedKnots.toFixed(1)} kts</div>
            </div>
            <div class="beach-details">
                <div class="detail-item">
                    <span class="detail-icon">🧭</span>
                    <span>${beach.windDirection} (${beach.windDegrees}°)</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⏰</span>
                    <span>${formatTime(beach.timestamp)}</span>
                </div>
            </div>
            <div class="source-badge">${beach.source}</div>
        `;
        beachList.appendChild(card);
    });
    
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('noResultsSection').style.display = 'none';
}

// Main check function
async function performWindCheck() {
    const windThreshold = parseFloat(document.getElementById('windThreshold').value);
    
    if (isNaN(windThreshold) || windThreshold < 0) {
        showError('Please enter a valid wind speed threshold (0 or greater)');
        return;
    }
    
    // Hide previous results
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('errorSection').style.display = 'none';
    document.getElementById('noResultsSection').style.display = 'none';
    
    // Show loading
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('checkWindBtn').disabled = true;
    
    try {
        const beaches = await checkBeaches(windThreshold);
        displayResults(beaches, windThreshold);
    } catch (error) {
        showError('An error occurred while checking wind conditions. Please try again.');
        console.error(error);
    } finally {
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('checkWindBtn').disabled = false;
    }
}

// Show error
function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorSection').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('noResultsSection').style.display = 'none';
}

// Event listeners
document.getElementById('checkWindBtn').addEventListener('click', performWindCheck);

document.getElementById('windThreshold').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performWindCheck();
    }
});

// PWA Install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installPrompt').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to install prompt: ${outcome}`);
        deferredPrompt = null;
        document.getElementById('installPrompt').style.display = 'none';
    }
});

// Log app loaded
console.log('French Riviera Wind Checker loaded successfully');
console.log(`Monitoring ${BEACH_STATIONS.length} beaches`);