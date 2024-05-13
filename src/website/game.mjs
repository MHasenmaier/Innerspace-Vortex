/**
 * commented for debugging reasons
 * 
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
const shipsJSON = path.join('..', 'objects', 'ships.json');
const playerJSON = path.join('..', 'website', 'player.json');

// Lade die ShipsDaten aus der JSON-Datei
const shipsDataJSON = loadJsonFile(shipsJSON);

// Lade die PlayerDaten aus der JSON-Datei
const playerDataJSON = loadJsonFile(playerJSON);
*/

// Zugriff auf das 4. Element (Index 3) in den Schiffsdaten
/*
if (shipsDataJSON) {
    const ship = shipsDataJSON[3];
    console.log(`Das 4. Element in ships.json ist: ${JSON.stringify(ship)}`);
} else {
    console.log('Fehler beim Laden der Schiffdaten aus der JSON-Datei.');
}*/

// Spielerdaten ausgeben
//console.log('Spielerdaten:', playerDataJSON);

let mine = {
    "cost" : 100,
    "prod" : 150,   //production per tick
    "multP" : 4,    //production multiplier
    "multC" : 4     //cost multiplier
}

let hq = {
    "name": "hq",
    "cost" : 200,
}
 
let player = {
    buildings: {
      hq: {
        lvl: 1,
      },
      mine: {
        lvl: 1,
      }
    },
    ressourcen: {
        "ress" : 200
    }
  };
  
console.log("player hq: " + player.buildings.hq.lvl);
console.log("player mine: " + player.buildings.mine.lvl);
console.log("player ress: " + player.ressourcen.ress);


function payRess(buyObj, player)
{
    let ress = player.ressourcen.ress;
    let cost = buyObj.cost;

    if(ress - cost >= 0)
    {
        player.ressourcen.ress = player.ressourcen.ress - buyObj.cost;
        return true;
    }
    console.log("!!!! payRess -> return false");
    console.log("player.ressourcen.ress: " + player.ressourcen.ress);
    console.log("buyObj.name: " + buyObj.cost + "; buyObj.cost: " + buyObj.cost);
    return false;
}

function build(buyObj, player, buildObj)
{
    if (payRess(buyObj, player))
    {
        buildObj.lvl++;
    }
}

build(hq, player, player.buildings.hq);

console.log("---------- Nach Funktionsaufruf ----------");
console.log("player hq: " + player.buildings.hq.lvl);
console.log("player mine: " + player.buildings.mine.lvl);
console.log("player ress: " + player.ressourcen.ress);