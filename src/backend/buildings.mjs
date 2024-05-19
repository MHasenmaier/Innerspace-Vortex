import { player } from "./player.mjs";
import { playerUpdate } from "./player.mjs";

const output = document.getElementById("output");

const buttonBuyHQ = document.getElementById("buttonBuyHQ");
const showHQLvl = document.getElementById("hqLvl");
const showHQLvlUP = document.getElementById("hqLvlUP");
const showHqLvlUPIronCost = document.getElementById("hqLvlUPIronCost");
const showHqLvlUPCoalCost = document.getElementById("hqLvlUPCoalCost");
const showHqLvlUPAluCost = document.getElementById("hqLvlUPAluCost");
const showHqLvlUPTitanCost = document.getElementById("hqLvlUPTitanCost");

const buttonBuyIronMine = document.getElementById("buttonBuyIronMine");
const showIronMineLvl = document.getElementById("ironMineLvl");
const showIronMineLvlUp = document.getElementById("ironMineLvlUP");
const showIronMineLvlUpIronCost = document.getElementById("ironMineLvlUPIronCost");
const showIronMineLvlUPCoalCost = document.getElementById("ironMineLvlUPCoalCost");
const showIronMineLvlUPAluCost = document.getElementById("ironMineLvlUPAluCost");
const showIronMineLvlUPTitanCost = document.getElementById("ironMineLvlUPTitanCost");

const buttonBuyCoalMine = document.getElementById("buttonBuyCoalMine");
const showCoalMineLvl = document.getElementById("coalMineLvl");
const showCoalMineLvlUp = document.getElementById("coalMineLvlUP");
const showCoalMineLvlUpIronCost = document.getElementById("coalMineLvlUPIronCost");
const showCoalMineLvlUPCoalCost = document.getElementById("coalMineLvlUPCoalCost");
const showCoalMineLvlUPAluCost = document.getElementById("coalMineLvlUPAluCost");
const showCoalMineLvlUPTitanCost = document.getElementById("coalMineLvlUPTitanCost");

const buttonBuyAluMine = document.getElementById("buttonBuyAluMine");
const showAluMineLvl = document.getElementById("aluMineLvl");
const showAluMineLvlUp = document.getElementById("aluMineLvlUp");
const showAluMineLvlUPIronCost = document.getElementById("aluMineLvlUPIronCost");
const showAluMineLvlUPCoalCost = document.getElementById("aluMineLvlUPCoalCost");
const showAluMineLvlUPAluCost = document.getElementById("aluMineLvlUPAluCost");
const showAluMineLvlUPTitanCost = document.getElementById("aluMineLvlUPTitanCost");

const buttonBuyTitanMine = document.getElementById("buttonBuyTitanMine");
const showTitanMineLvl = document.getElementById("titanMineLvl");
const showTitanMineLvlUp = document.getElementById("titanMineLvlUp");
const showTitanMineLvlUPIronCost = document.getElementById("titanMineLvlUPIronCost");
const showTitanMineLvlUPCoalCost = document.getElementById("titanMineLvlUPCoalCost");
const showTitanMineLvlUPAluCost = document.getElementById("titanMineLvlUPAluCost");
const showTitanMineLvlUPTitanCost = document.getElementById("titanMineLvlUPTitanCost");

const buttonNewRound = document.getElementById("buttonNewRound");

const roundCounter = document.getElementById("roundCounter");
let roundNr = roundCounter.innerHTML;

let headquarter = {
    "name": "Hauptquartier",
    "resource": "Energie",
    "stufe": 1,
    "costIron": 100,
    "costCoal": 50,
    "costAlu":50,
    "costTitan": 50,
    "costIronMult": 150,
    "costCoalMult": 150,
    "costAluMult": 150,
    "costTitanMult": 150,
    "produktion": 0,
    "prodMult": 5
}

let ironMine = {
    "name": "Eisenmine",
    "resource": "Eisen",
    "stufe": 1,
    "costIron": 50,
    "costCoal": 0,
    "costAlu":0,
    "costTitan": 0,
    "costIronMult": 35,
    "costCoalMult": 30,
    "costAluMult": 20,
    "costTitanMult": 15,
    "produktion": 5,
    "prodMult": 5
}

let coalMine = {
    "name": "Kohlemine",
    "resource": "Kohle",
    "stufe": 0,
    "costIron": 50,
    "costCoal": 0,
    "costAlu":0,
    "costTitan": 0,
    "costIronMult": 35,
    "costCoalMult": 30,
    "costAluMult": 20,
    "costTitanMult": 15,
    "produktion": 0,
    "prodMult": 5
}

let aluMine = {
    "name": "Aluminiummine",
    "resource": "Aluminium",
    "stufe": 0,
    "costIron": 50,
    "costCoal": 50,
    "costAlu":0,
    "costTitan": 0,
    "costIronMult": 35,
    "costCoalMult": 30,
    "costAluMult": 20,
    "costTitanMult": 15,
    "produktion": 0,
    "prodMult": 5
}

let titanMine = {
    "name": "Titanmine",
    "resource": "Titan",
    "stufe": 0,
    "costIron": 50,
    "costCoal": 50,
    "costAlu":50,
    "costTitan": 0,
    "costIronMult": 35,
    "costCoalMult": 30,
    "costAluMult": 20,
    "costTitanMult": 15,
    "produktion": 0,
    "prodMult": 5
}


function buildIronMine() {
    if (resourceCheck(ironMine)) {
        resourceUpdate(ironMine);
        playerUpdate();

        buildingUpdate(ironMine);

        updateCosts(ironMine);
        buildProtocolUpdate(ironMine);
    } else {
        buildFailedProtocolUpdate(ironMine);
        playerUpdate();
    }
}

function buildCoalMine() {
    if (resourceCheck(coalMine)) {
        resourceUpdate(coalMine);
        playerUpdate();

        buildingUpdate(coalMine);

        updateCosts(coalMine);
        buildProtocolUpdate(coalMine);
    } else {
        buildFailedProtocolUpdate(coalMine);
        playerUpdate();
    }
}

function buildAluMine() {
    if (resourceCheck(aluMine)) {
        resourceUpdate(aluMine);
        playerUpdate();

        buildingUpdate(aluMine);

        updateCosts(aluMine);
        buildProtocolUpdate(aluMine);
    } else {
        buildFailedProtocolUpdate(aluMine);
        playerUpdate();
    }
}

function buildTitanMine() {
    if (resourceCheck(titanMine)) {
        resourceUpdate(titanMine);
        playerUpdate();

        buildingUpdate(titanMine);

        updateCosts(titanMine);
        buildProtocolUpdate(titanMine);
    } else {
        buildFailedProtocolUpdate(titanMine);
        playerUpdate();
    }
}

function buildHQ() {
    if (resourceCheck(headquarter)) {
        //resourceUpdate(headquarter);
        playerUpdate();

        buildingUpdate(headquarter);

        updateCosts(headquarter);
        buildProtocolUpdate(headquarter);
    } else {
        buildFailedProtocolUpdate(headquarter);
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

function updateCosts(input) {
    input.costIron += input.costIronMult;
    input.costCoal += input.costCoalMult;
    input.costAlu += input.costAluMult;
    input.costTitan += input.costTitanMult;

    switch (input) {
        case ironMine:
            showIronMineLvlUpIronCost.innerHTML = input.costIron;
            showIronMineLvlUPCoalCost.innerHTML = input.costCoal;
            showIronMineLvlUPAluCost.innerHTML = input.costAlu;
            showIronMineLvlUPTitanCost.innerHTML = input.costTitan;
            break;

        case coalMine:
            showCoalMineLvlUpIronCost.innerHTML = input.costIron;
            showCoalMineLvlUPCoalCost.innerHTML = input.costCoal;
            showCoalMineLvlUPAluCost.innerHTML = input.costAlu;
            showCoalMineLvlUPTitanCost.innerHTML = input.costTitan;
            break;

        case aluMine:
            showAluMineLvlUPIronCost.innerHTML = input.costIron;
            showAluMineLvlUPCoalCost.innerHTML = input.costCoal;
            showAluMineLvlUPAluCost.innerHTML = input.costAlu;
            showAluMineLvlUPTitanCost.innerHTML = input.costTitan;
            break;

        case titanMine:
            showTitanMineLvlUPIronCost.innerHTML = input.costIron;
            showTitanMineLvlUPCoalCost.innerHTML = input.costCoal;
            showTitanMineLvlUPAluCost.innerHTML = input.costAlu;
            showTitanMineLvlUPTitanCost.innerHTML = input.costTitan;
            break;

        default:
            output.innerHTML = "Die Funktion 'updateCosts' hat einen Fehler verursacht und ist im default gelandet";
            return false;
    }
    return true;
}

function buildProtocolUpdate(input){
    output.innerHTML = input.name + " wurde gebaut.<br>" + input.name + " hat nun Stufe: " + input.stufe + "<br>Es wird: " + input.produktion + " " + input.resource + " produziert.<br><br>" +
        "Die nächste Stufe kostet<br>" +
        "Eisen: " + input.costIron + "<br>" +
        "Kohle: " + input.costCoal + "<br>" +
        "Alu: " + input.costAlu + "<br>" +
        "Titan: " + input.costTitan;
}

function buildFailedProtocolUpdate(buildingName) {
    output.innerHTML = "Kosten für<br>" + buildingName.name + " Stufe "+ (buildingName.stufe + 1) + "<br>zu hoch!<br>Kosten<br>Eisen: " + buildingName.costIron + "<br>Kohle: " + buildingName.costCoal + "<br>Alu: " + buildingName.costAlu + "<br>Titan: " + buildingName.costTitan;
}

function resourceUpdate(input) {
    player.iron -= input.costIron;
    player.coal -= input.costCoal;
    player.alu -= input.costAlu;
    player.titan -= input.costTitan;
}

function buildingUpdate(input) {
    input.stufe++;
    input.produktion = input.prodMult * input.stufe;

    switch (input) {
        case ironMine:
            showIronMineLvl.innerHTML = input.stufe;
            showIronMineLvlUp.innerHTML = input.stufe + 1;
            break;

        case coalMine:
            showCoalMineLvl.innerHTML = input.stufe;
            showCoalMineLvlUp.innerHTML = input.stufe + 1;
            break;

        case aluMine:
            showAluMineLvl.innerHTML = input.stufe;
            showAluMineLvlUp.innerHTML = input.stufe + 1;
            break;

        case titanMine:
            showTitanMineLvl.innerHTML = input.stufe;
            showTitanMineLvlUp.innerHTML = input.stufe + 1;
            break;

        case headquarter:
            showHQLvl.innerHTML = headquarter.stufe;
            showHQLvlUP.innerHTML = headquarter.stufe + 1;
            break;

        default:
            output.innerHTML = "Die Funktion 'buildingUpdate' hat einen Fehler verursacht und ist im default gelandet";
            return false;
    }
    return true;
}

function resourceCheck(buildingName) {
    return !(player.iron < buildingName.costIron) && !(player.coal < buildingName.costCoal) && !(player.alu < buildingName.costAlu) && !(player.titan < buildingName.costTitan);
}

buttonBuyIronMine.addEventListener("click", buildIronMine);
buttonBuyCoalMine.addEventListener("click", buildCoalMine);
buttonBuyAluMine.addEventListener("click", buildAluMine);
buttonBuyTitanMine.addEventListener("click", buildTitanMine);
buttonBuyHQ.addEventListener("click", buildHQ);

buttonNewRound.addEventListener("click", newRound);