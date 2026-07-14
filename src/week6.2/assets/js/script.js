"use strict";

const _MAXIMUM = 40;
const _MINIMUM = 1;
const _AMOUNT = 6;

document.addEventListener("DOMContentLoaded", init);

function init() {

    document.querySelector("#generate").addEventListener("click", rollNumbers);


}


function rollNumbers(e) {
    e.preventDefault();
    const $ul = document.querySelector("#generated");
    showPreviousNumbers($ul);

    $ul.innerHTML = "";

    const numbers = generateNumbers();
    numbers.forEach(number => displayNumber(number,$ul));
}

function showPreviousNumbers($container){
    const liHTML = $container.innerHTML;
    document.querySelector("#previous").innerHTML = liHTML;
}

function generateNumbers() {
    const numbers = [];
    while(numbers.length < _AMOUNT){
        const randomNumber = generateRandomNumber();
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function displayNumber(number,$container) {
    $container.insertAdjacentHTML("beforeend", `<li>${number}</li>`);
}

function generateRandomNumber() {
    return Math.floor((Math.random() * _MAXIMUM) + _MINIMUM);
}