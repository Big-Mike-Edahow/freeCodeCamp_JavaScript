// script.js

let fortune1 = "You will find a hidden gem at the right time in your life."
let fortune2 = "The odds will forever be in your favor."
let fortune3 = "A unique person will come along when you least expect it."
let fortune4 = "Your career will take off when you find what you seek."
let fortune5 = "Hard work and persistence will take you to unexpected places."

let randomNumber = Math.floor(Math.random() * (5)) + 1;
let selectedFortune

switch (randomNumber) {
    case 1:
        selectedFortune = fortune1;
        break;
    case 2:
        selectedFortune = fortune2;
        break;
    case 3:
        selectedFortune = fortune3;
        break;
    case 4:
        selectedFortune = fortune4;
        break
    case 5:
        selectedFortune = fortune5;
        break;
}

console.log(selectedFortune);
