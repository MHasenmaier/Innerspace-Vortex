import { player } from "./player.mjs";
import { playerUpdate } from "./player.mjs";


const output = document.getElementById("output");

const buttonBuyHQ = document.getElementById("buttonBuyHQ");
const showHQLvl = document.getElementById("hqLvl");
const showHQLvlUP = document.getElementById("hqLvlUP");
const showHQLvlUPCost = document.getElementById("hqLvlUPCost");

const buttonBuyIronMine = document.getElementById("buttonBuyIronMine");
const showIronMineLvl = document.getElementById("ironMineLvl");
const showIronMineLvlUp = document.getElementById("ironMineLvlUP");
const showIronMineLvlUpCost = document.getElementById("ironMineLvlUPIronCost");

const buttonBuyCoalMine = document.getElementById("buttonBuyCoalMine");
const showCoalMineLvl = document.getElementById("coalMineLvl");
const showCoalMineLvlUp = document.getElementById("coalMineLvlUP");
const showCoalMineLvlUpCost = document.getElementById("coalMineLvlUPIronCost");

const buttonBuyAluMine = document.getElementById("buttonBuyAluMine");
const showAluMineLvl = document.getElementById("aluMineLvl");
const showAluMineLvlUp = document.getElementById("aluMineLvlUp");
const showAluMineLvlUpCost = document.getElementById("aluMineLvlUPIronCost");

const buttonBuyTitanMine = document.getElementById("buttonBuyTitanMine");
const showTitanMineLvl = document.getElementById("titanMineLvl");
const showTitanMineLvlUp = document.getElementById("titanMineLvlUp");
const showTitanMineLvlUpCost = document.getElementById("titanMineLvlUPIronCost");

const buttonNewRound = document.getElementById("buttonNewRound");

const roundCounter = document.getElementById("roundCounter");
let roundNr = roundCounter.innerHTML;

let hauptquartier = {
    "name": "Hauptquartier",
    "stufe": 1,
    "costIron": 100,
    "costIronMult": 150
}

let ironMine = {
    "name": "Eisenmine",
    "stufe": 1,
    "costIron": 50,
    "costIronMult": 35,
    "produktion": 5,
    "prodMult": 5
}

let coalMine = {
    "name": "Kohlemine",
    "stufe": 1,
    "costIron": 50,
    "costIronMult": 35,
    "produktion": 5,
    "prodMult": 5
}

let aluMine = {
    "name": "Aluminiummine",
    "stufe": 0,
    "costIron": 50,
    "costIronMult": 35,
    "produktion": 0,
    "prodMult": 5
}

let titanMine = {
    "name": "Titanmine",
    "stufe": 0,
    "costIron": 50,
    "costIronMult": 35,
    "produktion": 0,
    "prodMult": 5
}


function buildIronMine() {
    if (player.iron >= ironMine.costIron) {
        player.iron -= ironMine.costIron;
        playerUpdate();

        ironMine.stufe++;

        ironMine.produktion = ironMine.prodMult * ironMine.stufe;
        
        ironMine.costIron += ironMine.costIronMult;
        showIronMineLvlUpCost.innerHTML = ironMine.costIron;

        showIronMineLvl.innerHTML = ironMine.stufe;
        showIronMineLvlUp.innerHTML = ironMine.stufe + 1;

        output.innerHTML = "Eisenmine wurde gebaut. Eisenmine hat nun Stufe: " + ironMine.stufe + " und produziert: " + ironMine.produktion + " Ressourcen <br> Die nächste Stufe wird: " + ironMine.costIron + " Eisen kosten.";

    } else {
        output.innerHTML = "Kosten für Eisenmine Stufe: "+ (ironMine.stufe + 1) +" zu hoch!<br>!!!!";
        playerUpdate();
    }
}

function buildCoalMine() {
    if (player.iron >= coalMine.costIron) {
        player.iron -= coalMine.costIron;
        coalMine.stufe++;
        coalMine.produktion = coalMine.prodMult * coalMine.stufe;
        coalMine.costIron += coalMine.costIronMult;

        showCoalMineLvl.innerHTML = coalMine.stufe;
        showCoalMineLvlUp.innerHTML = coalMine.stufe + 1;
        showCoalMineLvlUpCost.innerHTML = coalMine.costIron;

        playerUpdate();
        output.innerHTML = "Kohlemine wurde gebaut. Kohlemine hat nun Stufe: " + coalMine.stufe + " und produziert: " + coalMine.produktion + " Ressourcen <br>Die nächste Stufe kostet<br>Eisen: " + coalMine.costIron;
    } else {
        output.innerHTML = "Kosten für Kohlemine Stufe: "+ (coalMine.stufe + 1) +" zu hoch!<br>!!!!";
    }
}

function buildAluMine() {
    if (player.iron >= ironMine.costIron) {
        player.iron -= ironMine.costIron;
        aluMine.stufe++;
        aluMine.produktion = aluMine.prodMult * aluMine.stufe;
        aluMine.costIron += aluMine.costIronMult;

        showAluMineLvl.innerHTML = aluMine.stufe;
        showAluMineLvlUp.innerHTML = aluMine.stufe + 1;
        showAluMineLvlUpCost.innerHTML = aluMine.costIron;

        output.innerHTML = "Aluminiummine wurde gebaut. Aluminiummine hat nun Stufe: " + aluMine.stufe + " und produziert: " + aluMine.produktion + " Ressourcen <br> Die nächste Stufe wird: " + aluMine.costIron + " Eisen kosten.";
        playerUpdate();
    } else {
        output.innerHTML = "Kosten für Aluminiummine Stufe: "+ (aluMine.stufe + 1) +" zu hoch!<br>!!!!";
        playerUpdate();
    }
}

function buildTitanMine() {
    if (player.iron >= ironMine.costIron) {
        player.iron -= ironMine.costIron;
        ressPlayerIron.innerHTML = player.iron;
        titanMine.stufe++;
        titanMine.produktion = titanMine.prodMult * titanMine.stufe;
        titanMine.costIron += titanMine.costIronMult;

        showTitanMineLvl.innerHTML = titanMine.stufe;
        showTitanMineLvlUp.innerHTML = titanMine.stufe + 1;
        showTitanMineLvlUpCost.innerHTML = titanMine.costIron;

        output.innerHTML = "Aluminiummine wurde gebaut. Aluminiummine hat nun Stufe: " + titanMine.stufe + " und produziert: " + titanMine.produktion + " Ressourcen <br>Die nächste Stufe wird: " + titanMine.costIron + " Eisen kosten.";
        playerUpdate();
    } else {
        output.innerHTML = "Kosten für Aluminiummine Stufe: "+ (titanMine.stufe + 1) +" zu hoch!<br>!!!!";
        playerUpdate();
    }
}

function buildHQ() {
    if (player.iron >= hauptquartier.costIron) {
        player.iron -= hauptquartier.costIron;
        hauptquartier.stufe++;
        hauptquartier.costIron += hauptquartier.costIronMult;

        showHQLvl.innerHTML = hauptquartier.stufe;
        showHQLvlUP.innerHTML = hauptquartier.stufe + 1;
        showHQLvlUPCost.innerHTML = hauptquartier.costIron;

        output.innerHTML = "HQ wurde gebaut. HQ hat nun Stufe: " + hauptquartier.stufe + "<br> Die nächste Stufe wird: " + hauptquartier.costIron + " Eisen kosten.";
        playerUpdate();
    } else {
        output.innerHTML = "Kosten für Hauptquartier Stufe: "+ (hauptquartier.stufe + 1) +" zu hoch!<br>!!!!";
        playerUpdate();
    }
}

function newRound() {
    player.iron += ironMine.produktion;
    player.coal += coalMine.produktion;
    player.alu += aluMine.produktion;
    player.titan += titanMine.produktion;
    roundCounter.innerHTML = roundNr++;
    output.innerHTML = "Neue Runde:<br> Jetzt Runde: " + roundNr;
    playerUpdate();
}



buttonBuyIronMine.addEventListener("click", buildIronMine);
buttonBuyCoalMine.addEventListener("click", buildCoalMine);
buttonBuyAluMine.addEventListener("click", buildAluMine);
buttonBuyTitanMine.addEventListener("click", buildTitanMine);
buttonBuyHQ.addEventListener("click", buildHQ);

buttonNewRound.addEventListener("click", newRound);