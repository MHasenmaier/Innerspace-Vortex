import fs from 'fs';
import path from 'path';

// Lade die JSON-Datei
function loadJsonFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Fehler beim Laden der Datei '${filePath}': ${error.message}`);
        return null;
    }
}

// Pfade zur JSON-Datei anpassen
const shipsJSON = path.join(__dirname, 'src', 'objects', 'ships.json');
const playerJSON = path.join(__dirname, 'src', 'website', 'player.json');

// Lade die ShipsDaten aus der JSON-Datei
const shipsDataJSON = loadJsonFile(shipsJSON);

// Lade die PlayerDaten aus der JSON-Datei
const playerDataJSON = loadJsonFile(playerJSON);

// Zugriff auf das 4. Element (Index 3) in den Schiffdaten
if (shipsDataJSON) {
    const ship = shipsDataJSON[3];
    console.log(`Das 4. Element in ships.json ist: ${JSON.stringify(ship)}`);
} else {
    console.log('Fehler beim Laden der Schiffdaten aus der JSON-Datei.');
}

// Spielerdaten ausgeben
console.log('Spielerdaten:', playerDataJSON);

