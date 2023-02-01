const button = document.querySelector("button");
const deBerg = document.querySelector(".button1");
const poppetje = document.querySelector(".button2");
const poppetje2 = document.querySelector(".button3");
const poppetje3 = document.querySelector(".button4");
const tekst = document.querySelector(".button5");
const zwart = document.querySelector(".button6");
const tekst2 = document.querySelector(".button7");
const poppetje4 = document.querySelector(".button8");
const tekst3 = document.querySelector(".button9");
const zwart2 = document.querySelector(".button10");
const poppetje5 = document.querySelector(".button11");
const tekst4 = document.querySelector(".button12");
const tekst5 = document.querySelector(".button13");
const tekst6 = document.querySelector(".button14");

const scene1 = document.querySelector(".scene1");
const figureScene1 = document.querySelector('.scene1 .frame1');

var audio1 = new Audio('../audio/1.mp4');
audio1.play();

var audio2 = new Audio('../audio/2.mp4');
var audio3 = new Audio('../audio/3.mp4');
var audio4 = new Audio('../audio/4.mp4');
var audio5 = new Audio('../audio/5.mp4');
var audio6 = new Audio('../audio/6.mp4');
var audio7 = new Audio('../audio/7.mp4');
var audio8 = new Audio('../audio/8.mp4');
var audio9 = new Audio('../audio/9.mp4');
var audio10 = new Audio('../audio/10.mp4');
var audio11 = new Audio('../audio/11.mp4');
var audio12 = new Audio('../audio/12.mp4');
var audio13 = new Audio('../audio/13.mp4');
var audio14 = new Audio('../audio/14.mp4');


// 1
deBerg.addEventListener("click", function() {
    deBerg.classList.add("hide");
    poppetje.classList.add("show");

    figureScene1.classList.add("frame2");
    figureScene1.classList.remove("frame1");

    audio1.pause();
    audio2.play();
});

// 2
poppetje.addEventListener("click", function(){

    poppetje.classList.remove("show");
    poppetje.classList.add("hide");

    poppetje2.classList.add("show");

    figureScene1.classList.remove("frame2");
    figureScene1.classList.add("frame3");

    audio2.pause();
    audio3.play();
});

// 3
poppetje2.addEventListener("click", function(){
    poppetje2.classList.remove("show");
    poppetje2.classList.add("hide");

    poppetje3.classList.add("show");

    figureScene1.classList.remove("frame3");
    figureScene1.classList.add("frame4");

    audio3.pause();
    audio4.play();
});

// 4
poppetje3.addEventListener("click", function(){
    poppetje3.classList.remove("show");
    poppetje3.classList.add("hide");

    tekst.classList.add("show");

    figureScene1.classList.remove("frame4");
    figureScene1.classList.add("frame5");

    audio4.pause();
    audio5.play();
});

// 5
tekst.addEventListener("click", function(){
    tekst.classList.remove("show");
    tekst.classList.add("hide");

    zwart.classList.add("show");

    figureScene1.classList.remove("frame5");
    figureScene1.classList.add("frame6");

    audio5.pause();
    audio6.play();
});

// 6
zwart.addEventListener("click", function(){
    zwart.classList.remove("show");
    zwart.classList.add("hide");

    tekst2.classList.add("show");

    figureScene1.classList.remove("frame6");
    figureScene1.classList.add("frame7");

    audio6.pause();
    audio7.play();
});

// 7
tekst2.addEventListener("click", function(){
    tekst2.classList.remove("show");
    tekst2.classList.add("hide");

    poppetje4.classList.add("show");

    figureScene1.classList.remove("frame7");
    figureScene1.classList.add("frame8");

    audio7.pause();
    audio8.play();
});

// 8
poppetje4.addEventListener("click", function(){
    poppetje4.classList.remove("show");
    poppetje4.classList.add("hide");

    tekst3.classList.add("show");

    figureScene1.classList.remove("frame8");
    figureScene1.classList.add("frame9");

    audio8.pause();
    audio9.play();
});

// 9
tekst3.addEventListener("click", function(){
    tekst3.classList.remove("show");
    tekst3.classList.add("hide");

    zwart2.classList.add("show");

    figureScene1.classList.remove("frame9");
    figureScene1.classList.add("frame10");

    audio9.pause();
    audio10.play();
});

// 10
zwart2.addEventListener("click", function(){
    zwart2.classList.remove("show");
    zwart2.classList.add("hide");

    poppetje5.classList.add("show");

    figureScene1.classList.remove("frame10");
    figureScene1.classList.add("frame11");

    audio10.pause();
    audio11.play();
});

// 11
poppetje5.addEventListener("click", function(){
    poppetje5.classList.remove("show");
    poppetje5.classList.add("hide");

    tekst4.classList.add("show");

    figureScene1.classList.remove("frame11");
    figureScene1.classList.add("frame12");

    audio11.pause();
    audio12.play();
});

// 12
tekst4.addEventListener("click", function(){
    tekst4.classList.remove("show");
    tekst4.classList.add("hide");

    tekst5.classList.add("show");

    figureScene1.classList.remove("frame12");
    figureScene1.classList.add("frame13");

    audio12.pause();
    audio13.play();
});

// 13
tekst5.addEventListener("click", function(){
    tekst5.classList.remove("show");
    tekst5.classList.add("hide");

    tekst6.classList.add("show");

    figureScene1.classList.remove("frame13");
    figureScene1.classList.add("frame14");

    audio13.pause();
    audio14.play();
});

// 14
// tekst6.addEventListener("click", function(){
//     zwart.classList.remove("show");
//     zwart.classList.add("hide");

//     tekst2.classList.add("show");

//     // figureScene1.classList.remove("frame14");
//     // figureScene1.classList.add("frame7");
// });