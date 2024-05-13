const ressPlayerIron = document.getElementById("ressPlayerIron");
const ressPlayerCoal = document.getElementById("ressPlayerCoal");
const ressPlayerAlu = document.getElementById("ressPlayerAlu");
const ressPlayerTitan = document.getElementById("ressPlayerTitan");

const Player = {
    "iron": 100,
    "coal": 100,
    "alu": 100,
    "titan": 100
}

function playerUpdate() {
    ressPlayerIron.innerHTML = player.iron;
    ressPlayerCoal.innerHTML = player.coal;
    ressPlayerAlu.innerHTML = player.alu;
    ressPlayerTitan.innerHTML = player.titan;
}


export {Player};
export {playerUpdate};