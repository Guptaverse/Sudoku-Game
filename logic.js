let emht = [{
    name: "easy",
    question: "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    answer: "685329174971485326234761859362574981549618732718293465823946517197852643456137298",
},
{
    name: "medium",
    question: "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    answer: "619472583243985617587316924158247369926531478734698152891754236365829741472163895",
},
{
    name: "hard",
    question: "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    answer: "712583694639714258845269173521436987367928415498175326184697532253841769976352841",
}
];

var vec2dCheck = [
[],
[],
[],
[],
[],
[],
[],
[],
[],
];


const input1 = document.getElementById("in");
const input2 = document.getElementById("in2");
const main = document.getElementById("Main");

let themeEMH = -1;

let tileSelected = "tile0";

// Creating blank tiles at creation of page.
for (let i = 0; i < 81; i++) {
let tile = document.createElement("div");
main.appendChild(tile);
tile.classList.add("tile");
tile.id = "tile" + i;
tile.setAttribute('onclick', "ontileclick('tile" + i + "')");
tile.style.opacity = "1";
// tile.style.zIndex = "-10";
let randA = Math.floor(Math.random() * 300) - 150;
let randb = Math.floor(Math.random() * 300) - 150;
// tile.style.transform = "translate(" + randA + "px," + randb + "px) rotate(" + 180 + "deg)";

// creating vector2DChecker
vec2dCheck[Math.floor(i / 9)][i % 9] = '0';



// for making 3*3 boxes
if (i % 3 === 0) {
    tile.style.borderLeftColor = "black";
}
if ((Math.floor(i / 9) % 3) === 0) {
    tile.style.borderTopColor = "black";
}
if (i % 9 == 8) {
    tile.style.borderRightColor = "black";
    tile.style.borderRightWidth = "5px"
}
if (i >= 72) {
    tile.style.borderBottomColor = "black";
    tile.style.borderBottomWidth = "5px"
}
if (i < 9) {
    tile.style.borderTopWidth = "3px";
}
if (i % 9 === 0 || i == 0) {
    tile.style.borderLeftWidth = "3px"
}
// for border radius of 4 tiles
if (i == 0 || i == 8 || i == 72 || i == 80) {
    if (i == 0) {
        tile.style.borderRadius = "10px 0px 0px 0px";
    } else if (i == 8) {
        tile.style.borderRadius = "0px 10px 0px 0px";
    } else if (i == 72) {
        tile.style.borderRadius = "0px 0px 0px 10px";
    } else if (i == 80) {
        tile.style.borderRadius = "0px 0px 10px 0px";
    }
}
}
console.log(vec2dCheck);

// Setting game theme when easy, medium, hard is clicked.
const gamethemeEMH = (temp) => {
// to clear numpad
let numtemp = document.getElementById("numpad1");
if (numtemp.classList.contains("cursoor")) {
    for (let i = 1; i <= 9; i++) {
        let num = document.getElementById("numpad" + i);
        num.classList.remove("cursoor");
    }
}


for (let i = 0; i < 81; i++) {
    let tile = document.getElementById("tile" + i);
    if (tile.classList.contains("wrong")) {
        console.log("tile" + i, "removed wrong");
        tile.classList.remove("wrong");
    }
    if (tile.classList.contains("bolderr")) {
        tile.classList.remove("bolderr");
    }



    tile.style.transform = "translate(" + 0 + "px," + 0 + "px) rotate(" + 0 + "deg)";
    tile.style.opacity = "1";
    tile.textContent = "";
    vec2dCheck[Math.floor(i / 9)][i % 9] = '0';
    if (emht[temp].question[i] !== '-') {
        tile.textContent = emht[temp].question[i];
        tile.classList.add("bolderr");
        // to create vector also
        vec2dCheck[Math.floor(i / 9)][i % 9] = emht[temp].question[i];
    }

    if (themeEMH != -1) {
        tile.classList.remove(emht[themeEMH].name + "Theme");
    }
    tile.classList.add(emht[temp].name + "Theme");
}
themeEMH = temp;
console.log(vec2dCheck);

}

// When numpad is clicked.
const ontileclick = (tilename) => {
console.log(tilename, "clicked");
const prevSelectedTile = document.getElementById(tileSelected);
if (themeEMH != -1) {
    prevSelectedTile.classList.remove("whiteTheme");
    if (prevSelectedTile.classList.contains("wrong")) {
        prevSelectedTile.classList.remove("wrong");
        for (let i = 1; i <= 9; i++) {
            let num = document.getElementById("numpad" + i);
            num.classList.remove("cursoor");
        }
    }
}

tileSelected = tilename;
const selectedTile = document.getElementById(tilename);
selectedTile.classList.add("whiteTheme");

// for wrong tile clicked;
// const prevSelectedTile = document.getElementById(tileSelected);
let tempcloser = true;

for (let i = 0; i < 81; i++) {
    if ("tile" + i === tileSelected) {
        if (emht[themeEMH].question[i] != "-") {
            tempcloser = false;
        }
        break;
    }
}
if (tempcloser === false) {
    selectedTile.classList.add("wrong");
    console.log(tilename, "Wrong One Clicked");
    // -----
    for (let i = 1; i <= 9; i++) {
        let num = document.getElementById("numpad" + i);
        num.classList.add("cursoor");
    }
}

}


const numberClick = (num) => {
const prevSelectedTile = document.getElementById(tileSelected);
let tempcloser = true;
let intForUpdate;
for (let i = 0; i < 81; i++) {
    if ("tile" + i === tileSelected) {
        if (emht[themeEMH].question[i] != "-") {
            tempcloser = false;
        }
        intForUpdate = i;
        break;
    }
}

if (tempcloser === true) {
    prevSelectedTile.innerText = num;
    update2dcvector(intForUpdate, num);
}

}
const update2dcvector = (intForUpdate, num) => {
vec2dCheck[Math.floor(intForUpdate / 9)][intForUpdate % 9] = (num).toString();
console.log(vec2dCheck);
var mp = new Map();
for (let i = 0; i < 81; i++) {
    if (vec2dCheck[Math.floor(i / 9)][i % 9] != '0') {
        let a = vec2dCheck[Math.floor(i / 9)][i % 9] + "row" + Math.floor(i / 9);
        let b = vec2dCheck[Math.floor(i / 9)][i % 9] + "column" + intForUpdate % 9;
        let c = vec2dCheck[Math.floor(i / 9)][i % 9] + "box" + Math.floor(Math.floor(i / 9) / 3) + "-" + Math.floor((i % 9) / 3);
        if (mp.has(a) || mp.has(a) || mp.has(a)) {
            console.log("error", vec2dCheck[Math.floor(i / 9)][i % 9]);
        }
        mp.set(a, "tile" + i);
        mp.set(b, "tile" + i);
        mp.set(c, "tile" + i);
    }
}
console.log(mp);
duplicatechecker(mp);
}
const duplicatechecker = () => {
for (let i = 0; i < 81; i++) {

}
}