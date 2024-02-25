/////////////
/**
 * X ArrayIndex X       X Gebäude X             X Kosten / Punkte X     X Ertrag X
 *              0       Hauptquartier           Lv. x 100               - - -
 *              1       Forschungszentrum       Lv. x 104 + 37          - - -
 *              2       Baracken                Lv. x 87 + 13           - - -
 *              3       Uranmine                Lv. x 102 + 27          Lv. x 4 + 3
 *              4       Erzmine                 Lv. x 172 + 15          Lv. x 9 + 4
 *              5       MoneyMaker              Lv. x 172 + 15          Lv. x 4 + 3
 */
/////////////


/////////////
/** Class **/
/////////////

class Element {
    name;
    cost;
    scoreValue;
    upgradeLevel;
}

class Army extends Element {
    att;
    hp;
    spd;
}

class Building extends Element {
    costMultiplier;
    defenseScore;
    feature;
}

class Research extends Element {
    //tbd
}

const hqBuilding = new Building();
hqBuilding.name = 'Hauptquartier';
hqBuilding.costMultiplier = 100;
hqBuilding.cost = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
hqBuilding.scoreValue = hqBuilding.cost;
hqBuilding.upgradeLevel = 1;
hqBuilding.defenseScore = hqBuilding.costMultiplier;
hqBuilding.feature = 'building';

const researchBuilding = new Building();
researchBuilding.name = 'Forschungsgebäude';
researchBuilding.costMultiplier = 104;
researchBuilding.cost = [141, 245, 349, 453, 557, 661, 765, 869, 973, 1077];
researchBuilding.scoreValue = researchBuilding.cost;
researchBuilding.upgradeLevel = 0;
researchBuilding.defenseScore = researchBuilding.cost;
researchBuilding.feature = 'research';

const barracks = new Building();


/////////////////
/** functions **/
/////////////////

function gameStart() {
    startTime();

    document.getElementById('costMoney').innerHTML = costMultiplierMoney(document.getElementById('upgradeMoneyButton').innerHTML);


}

function buttonIncrementValue(clickedId) {
    let buttonValue = document.getElementById(clickedId).innerHTML;
    buttonValue++;
    document.getElementById(clickedId).innerHTML = buttonValue;
}

/* check the costs */
function checkRess(input) {
    let ressOnStorage = 0;
    let MoneyCostToBuild = 0;
    switch (input) {
        case 1: //Money - pay the bill for upgrading
            ressOnStorage = document.getElementById('MoneyStorage').innerHTML;
            MoneyCostToBuild = costMultiplierMoney(document.getElementById('upgradeMoneyButton').innerHTML);
            if (costToBuild < ressOnStorage) {
                return;
            } else {
                ressOnStorage = ressOnStorage - costToBuild;
            }
    }
}

/* ressource production */

function ressMultiplierUran(input) {
    if (input * 1 < 1) {
        return 0;
    }
    return (input * 4 + 3);
}

function ressMultiplierMoney(input) {
    if (input * 1 < 1) {
        return 0;
    }
    return (input * 4 + 3);
}

function costMultiplierUran(input) {
    return ((input + 1) * 102 + 27);
}

function costMultiplierMoney(input) {
    return ((input + 1) * 172 + 15);
}

function gainRessPerTick() {
    let upgradeCost = document.getElementById('upgradeMoneyButton').innerHTML;
    let moneyOnStock = 0;
    moneyOnStock = document.getElementById('moneyStorage').innerHTML;
    moneyOnStock = moneyOnStock + ressMultiplierMoney(upgradeCost);
    document.getElementById('moneyStorage').innerHTML = '';
    //document.getElementById('moneyStorage').innerHTML = moneyOnStock;
}



/* clock */
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = addZero(m);
    s = addZero(s);
    document.getElementById('uhrzeitID').innerHTML = h + ":" + m + ":" + s;
    gainRessPerTick();
    setTimeout(startTime, 1000);
}

function addZero(input) {
    if (input < 10) { input = "0" + input }; // führende 0 bei Ziffern
    return input;
}