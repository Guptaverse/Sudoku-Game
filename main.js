let a="00",b="00";
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let play = document.getElementById("play");
let submit= document.getElementById("submit");
let reset = document.getElementById("reset");
let Interval;

play.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime,1);
});

submit.addEventListener('click',()=>{
    clearInterval(Interval);
});

reset.addEventListener('click',()=>{
    clearInterval(Interval);
    a = "00";
    b = "00";
    min.textContent = a;
    sec.textContent = b;
});


