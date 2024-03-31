import fs from 'fs';

// Lade die JSON-Datei
function loadShipsJsonFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Fehler beim Laden der Datei '${filePath}': ${error.message}`);
        return null;
    }
}

// Pfade zur JSON-Datei anpassen
const shipsJSON = './ships.json';

// Lade die ShipsDaten aus der JSON-Datei
const shipsDataJSON = loadShipsJsonFile(shipsJSON);

//ships
const attacker = shipsDataJSON[3];
const defender = shipsDataJSON[3];



// decrease defender-hp
function dmgCalc(attacker, defender)
{
    defender.hp.hp = defender.hp.hp - (attacker.atk.atk - defender.def.def);
}

// fight calculation
function fight(attacker, defender)
{
    let runde = 1;
    
    while (defender.hp.hp >= attacker.atk.atk - defender.def.def)
    {
        dmgCalc(attacker, defender);
        console.log("runde: " + runde);
        console.log("atk: attacker hp = " + attacker.hp.hp);
        console.log("atk: defender hp = " + defender.hp.hp);
        
        dmgCalc(defender, attacker);
        console.log("atk: attacker hp = " + attacker.hp.hp);
        console.log("atk: defender hp = " + defender.hp.hp);
        runde++;
    }
}

fight(attacker, defender);