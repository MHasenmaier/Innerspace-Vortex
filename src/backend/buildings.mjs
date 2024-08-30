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
const showAluMineLvlUp = document.getElementById("aluMineLvlUP");
const showAluMineLvlUPIronCost = document.getElementById("aluMineLvlUPIronCost");
const showAluMineLvlUPCoalCost = document.getElementById("aluMineLvlUPCoalCost");
const showAluMineLvlUPAluCost = document.getElementById("aluMineLvlUPAluCost");
const showAluMineLvlUPTitanCost = document.getElementById("aluMineLvlUPTitanCost");

const buttonBuyTitanMine = document.getElementById("buttonBuyTitanMine");
const showTitanMineLvl = document.getElementById("titanMineLvl");
const showTitanMineLvlUp = document.getElementById("titanMineLvlUP");
const showTitanMineLvlUPIronCost = document.getElementById("titanMineLvlUPIronCost");
const showTitanMineLvlUPCoalCost = document.getElementById("titanMineLvlUPCoalCost");
const showTitanMineLvlUPAluCost = document.getElementById("titanMineLvlUPAluCost");
const showTitanMineLvlUPTitanCost = document.getElementById("titanMineLvlUPTitanCost");


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
        resourceCostUpdate(ironMine);
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
        resourceCostUpdate(coalMine);
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
        resourceCostUpdate(aluMine);
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
        resourceCostUpdate(titanMine);
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
        resourceCostUpdate(headquarter);
        playerUpdate();

        buildingUpdate(headquarter);

        updateCosts(headquarter);
        buildProtocolUpdate(headquarter);
    } else {
        buildFailedProtocolUpdate(headquarter);
        playerUpdate();
    }
}


function updateCosts(building) {
    building.costIron += building.costIronMult;
    building.costCoal += building.costCoalMult;
    building.costAlu += building.costAluMult;
    building.costTitan += building.costTitanMult;

    switch (building) {
        case ironMine:
            showIronMineLvlUpIronCost.innerHTML = building.costIron;
            showIronMineLvlUPCoalCost.innerHTML = building.costCoal;
            showIronMineLvlUPAluCost.innerHTML = building.costAlu;
            showIronMineLvlUPTitanCost.innerHTML = building.costTitan;
            break;

        case coalMine:
            showCoalMineLvlUpIronCost.innerHTML = building.costIron;
            showCoalMineLvlUPCoalCost.innerHTML = building.costCoal;
            showCoalMineLvlUPAluCost.innerHTML = building.costAlu;
            showCoalMineLvlUPTitanCost.innerHTML = building.costTitan;
            break;

        case aluMine:
            showAluMineLvlUPIronCost.innerHTML = building.costIron;
            showAluMineLvlUPCoalCost.innerHTML = building.costCoal;
            showAluMineLvlUPAluCost.innerHTML = building.costAlu;
            showAluMineLvlUPTitanCost.innerHTML = building.costTitan;
            break;

        case titanMine:
            showTitanMineLvlUPIronCost.innerHTML = building.costIron;
            showTitanMineLvlUPCoalCost.innerHTML = building.costCoal;
            showTitanMineLvlUPAluCost.innerHTML = building.costAlu;
            showTitanMineLvlUPTitanCost.innerHTML = building.costTitan;
            break;

        case headquarter:
            showHqLvlUPIronCost.innerHTML = building.costIron;
            showHqLvlUPCoalCost.innerHTML = building.costCoal;
            showHqLvlUPAluCost.innerHTML = building.costAlu;
            showHqLvlUPTitanCost.innerHTML = building.costTitan;
            break;

        default:
            output.innerHTML = "Die Funktion 'updateCosts' hat einen Fehler verursacht und ist im default gelandet";
            return false;
    }
    return true;
}

function buildProtocolUpdate(building){
    output.innerHTML = building.name + " wurde gebaut.<br>" + building.name + " hat nun Stufe: " + building.stufe + "<br>Es wird: " + building.produktion + " " + building.resource + " produziert.<br><br>" +
        "Die nächste Stufe kostet<br>" +
        "Eisen: " + building.costIron + "<br>" +
        "Kohle: " + building.costCoal + "<br>" +
        "Alu: " + building.costAlu + "<br>" +
        "Titan: " + building.costTitan;
}

function buildFailedProtocolUpdate(buildingName) {
    output.innerHTML = "Kosten für<br>" + buildingName.name + " Stufe "+ (buildingName.stufe + 1) + "<br>zu hoch!<br>Kosten<br>Eisen: " + buildingName.costIron + "<br>Kohle: " + buildingName.costCoal + "<br>Alu: " + buildingName.costAlu + "<br>Titan: " + buildingName.costTitan;
}

function resourceCostUpdate(building) {
    player.iron -= building.costIron;
    player.coal -= building.costCoal;
    player.alu -= building.costAlu;
    player.titan -= building.costTitan;
}

function resourceProdUpdate() {
    player.iron += ironMine.produktion;
    player.coal += coalMine.produktion;
    player.alu += aluMine.produktion;
    player.titan += titanMine.produktion;
}

function buildingUpdate(building) {
    building.stufe++;
    building.produktion = building.prodMult * building.stufe;

    switch (building) {
        case ironMine:
            showIronMineLvl.innerHTML = building.stufe;
            showIronMineLvlUp.innerHTML = building.stufe + 1;
            break;

        case coalMine:
            showCoalMineLvl.innerHTML = building.stufe;
            showCoalMineLvlUp.innerHTML = building.stufe + 1;
            break;

        case aluMine:
            showAluMineLvl.innerHTML = building.stufe;
            showAluMineLvlUp.innerHTML = building.stufe + 1;
            break;

        case titanMine:
            showTitanMineLvl.innerHTML = building.stufe;
            showTitanMineLvlUp.innerHTML = building.stufe + 1;
            break;

        case headquarter:
            showHQLvl.innerHTML = building.stufe;
            showHQLvlUP.innerHTML = building.stufe + 1;
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

function refreshBuildings() {

    //Iron
    showIronMineLvl.innerHTML = ironMine.stufe;
    showIronMineLvlUp.innerHTML = ironMine.stufe + 1;
    showIronMineLvlUpIronCost.innerHTML = ironMine.costIron;
    showIronMineLvlUPCoalCost.innerHTML = ironMine.costCoal;
    showIronMineLvlUPAluCost.innerHTML = ironMine.costAlu;
    showIronMineLvlUPTitanCost.innerHTML = ironMine.costTitan;

    //Coal
    showCoalMineLvl.innerHTML = coalMine.stufe;
    showCoalMineLvlUp.innerHTML = coalMine.stufe + 1;
    showCoalMineLvlUpIronCost.innerHTML = coalMine.costIron;
    showCoalMineLvlUPCoalCost.innerHTML = coalMine.costCoal;
    showCoalMineLvlUPAluCost.innerHTML = coalMine.costAlu;
    showCoalMineLvlUPTitanCost.innerHTML = coalMine.costTitan;

    //Alu
    showAluMineLvl.innerHTML = aluMine.stufe;
    showAluMineLvlUp.innerHTML = aluMine.stufe + 1;
    showAluMineLvlUPIronCost.innerHTML = aluMine.costIron;
    showAluMineLvlUPCoalCost.innerHTML = aluMine.costCoal;
    showAluMineLvlUPAluCost.innerHTML = aluMine.costAlu;
    showAluMineLvlUPTitanCost.innerHTML = aluMine.costTitan;

    //Titan
    showTitanMineLvl.innerHTML = titanMine.stufe;
    showTitanMineLvlUp.innerHTML = titanMine.stufe + 1;
    showTitanMineLvlUPIronCost.innerHTML = titanMine.costIron;
    showTitanMineLvlUPCoalCost.innerHTML = titanMine.costCoal;
    showTitanMineLvlUPAluCost.innerHTML = titanMine.costAlu;
    showTitanMineLvlUPTitanCost.innerHTML = titanMine.costTitan;

    //HQ
    showHQLvl.innerHTML = headquarter.stufe;
    showHQLvlUP.innerHTML = headquarter.stufe + 1;
    showHqLvlUPIronCost.innerHTML = headquarter.costIron;
    showHqLvlUPCoalCost.innerHTML = headquarter.costCoal;
    showHqLvlUPAluCost.innerHTML = headquarter.costAlu;
    showHqLvlUPTitanCost.innerHTML = headquarter.costTitan;
}

export {refreshBuildings};
export {resourceProdUpdate};


buttonBuyIronMine.addEventListener("click", buildIronMine);
buttonBuyCoalMine.addEventListener("click", buildCoalMine);
buttonBuyAluMine.addEventListener("click", buildAluMine);
buttonBuyTitanMine.addEventListener("click", buildTitanMine);
buttonBuyHQ.addEventListener("click", buildHQ);