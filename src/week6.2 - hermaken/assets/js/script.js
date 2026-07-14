"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    const button = document.querySelector("#generate");
    button.addEventListener("click", generateRandomNumbers)
}

let previousRandomNumbers = [];

function generateRandomNumbers() {
    let randomNumbers = []
    const generatedUl = document.querySelector("#generated");

    generatedUl.innerHTML = "";

    while (randomNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random()*40);
        randomNumbers.push(randomNumber);
        if (isNumberRepeated(randomNumbers)) {
            randomNumbers = []
        }
    }
    listPreviousNumbers(previousRandomNumbers);
    previousRandomNumbers = [...randomNumbers];
    listNumbers(randomNumbers);
}

function listPreviousNumbers(array) {
    const ul = document.querySelector("#previous");
    ul.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        ul.insertAdjacentHTML("beforeend", `<li>${array[i]}</li>`);
    }
}

function listNumbers(array){
    const ul = document.querySelector("#generated");
    for (let i = 0; i < array.length; i++) {
        ul.insertAdjacentHTML("beforeend", `<li>${array[i]}</li>`);
    }
}

function isNumberRepeated(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
