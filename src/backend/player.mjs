
const ressPlayerIron = document.getElementById("ressPlayerIron");
const ressPlayerCoal = document.getElementById("ressPlayerCoal");
const ressPlayerAlu = document.getElementById("ressPlayerAlu");
const ressPlayerTitan = document.getElementById("ressPlayerTitan");

const player = {
    "iron": 100,
    "coal": 0,
    "alu": 0,
    "titan": 0
}

function playerUpdate() {
    ressPlayerIron.innerHTML = player.iron;
    ressPlayerCoal.innerHTML = player.coal;
    ressPlayerAlu.innerHTML = player.alu;
    ressPlayerTitan.innerHTML = player.titan;
}


export {player};
export {playerUpdate};