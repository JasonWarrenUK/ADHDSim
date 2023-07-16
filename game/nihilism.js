/* Initialise Game */
let tyrant = {
    name: 'The Glorious Tyrant',
    wealth: 0,
    power: 0
}

let nation = {
    name: 'The Homeland',
    wealth: 0,
    freedom: 0
}

let stateNow = {
    pWealth: 0,
    pPower: 0,
    nWealth: 0,
    nFreedom: 0
}

const displayPWealth = document.getElementById('statsPWealth');
const displayPPower = document.getElementById('statsPPower');
const displayNWealth = document.getElementById('statsNWealth');
const displayNFreedom = document.getElementById('statsNFreedom');

const winWWLo = {
    pWealth: 2,
    nWealth: 0
};
const winWWHi = {
    pWealth: 2,
    nWealth: 2
};
const winWFLo = {
    pWealth: 2,
    nFreedom: 0
};
const winWFHi = {
    pWealth: 2,
    nFreedom: 2
};
const winPWLo = {
    pPower: 2,
    nWealth: 0
};
const winPWHi = {
    pPower: 2,
    nWealth: 2
};
const winPFLo = {
    pPower: 2,
    nFreedom: 0
};
const winPFHi = {
    pPower: 2,
    nFreedom: 2
};

/* Start Game */

displayPWealth.innerHTML = tyrant.wealth;
displayPPower.innerHTML = tyrant.power;
displayNWealth.innerHTML = nation.wealth;
displayNFreedom.innerHTML = nation.freedom;

let winGame;

function picker() {
    let pick = Math.random();
    return pick;
}

let seed = picker();
seed >= 0.85 ? winGame = winPFHi : seed >= 0.75 ? winGame = winPFLo : seed >= 0.65 ? winGame = winPWHi :