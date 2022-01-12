let a = "00",
    b = "00";
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let play = document.getElementById("play");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let Interval;

play.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 1);
});

submit.addEventListener('click', () => {
    clearInterval(Interval);
});

reset.addEventListener('click', () => {
    clearInterval(Interval);
    a = "00";
    b = "00";
    min.textContent = a;
    sec.textContent = b;
});

//-------------------------------------------------------------------------
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];

const input1 = document.getElementById("in");
const input2 = document.getElementById("in2");
const main = document.getElementById("Main");

let tileSelected = "tile1";
for (let i = 0; i < 81; i++) {
    let tile = document.createElement("div");
    main.appendChild(tile);
    tile.classList.add("tile");
    let temp = easy[0];
    if (temp[i] != '-') {
        tile.textContent = temp[i];
    }
    tile.id = "tile" + i;
    tile.setAttribute('onclick', "ontileclick('tile" + i + "')");
}

const ontileclick = (tilename) => {
    console.log(tilename, "clicked");
    const prevSelectedTile = document.getElementById(tileSelected);
    prevSelectedTile.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    tileSelected = tilename;
    const selectedTile = document.getElementById(tilename);
    selectedTile.style.backgroundColor = "white";
}

const functionss = () => {
    let i1 = input1.value;
    console.log(i1, "sdfds");
}

const numberClick = (num) => {
    const prevSelectedTile = document.getElementById(tileSelected);
    prevSelectedTile.innerText = num;
}