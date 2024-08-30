import {player, playerUpdate} from "./player.mjs";
import {refreshBuildings, resourceProdUpdate} from "./buildings.mjs";

const output = document.getElementById("output");

const msPerRound = 1000;

const showClock = document.getElementById("clock");
const roundCounter = document.getElementById("roundCounter");

let roundNr = roundCounter.innerHTML;

setInterval(newRound, msPerRound);

function preZeroClock (number) {

    return ((number < 10) ? '0' : '' ) + number;
}

function refreshClock() {
    let clockNow = new Date();
    let hours = clockNow.getHours();
    let minutes = clockNow.getMinutes();
    let seconds = clockNow.getSeconds();
    hours = preZeroClock(hours);
    minutes = preZeroClock(minutes);
    seconds = preZeroClock(seconds);

    return hours + ":" + minutes + ":" + seconds;
}

function newRound() {
    resourceProdUpdate();
    console.log(player);
    roundCounter.innerHTML = ++roundNr;
    output.innerHTML = "Neue Runde:<br> Jetzt Runde: " + roundNr;
    showClock.innerHTML = refreshClock();
    playerUpdate();
    refreshBuildings();
}

export {newRound, roundCounter, roundNr};