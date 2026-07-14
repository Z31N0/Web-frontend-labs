"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    const $links = document.querySelectorAll("#link-list a");
    $links.forEach((link) => {
        link.addEventListener("click", identifyLink)
    });

    const $close = document.querySelector(".close");
    $close.addEventListener("click", closeShield);

    const $form = document.querySelector("form");
    $form.addEventListener("submit", formSubmission);

}

const protectMe = {
    fishy: false,
    malishy: false,
    all: false
}

function identifyLink(e){
    const $link = e.target;
    const $status = $link.dataset.status;
    if (protectMe[$status] || protectMe["all"]){
        e.preventDefault()
        activateShield();
    }

}

function formSubmission(e){
    e.preventDefault();
    let message = ""
    const $inputs = document.querySelectorAll('input');
    for (let i = 0; i < $inputs.length; i++) {
        protectMe[$inputs[i].value] = $inputs[i].checked
        if (protectMe[$inputs[i].value]){
            message += $inputs[i].value + ", "
        }
    }
    const statusMessage = document.querySelector(".statusmessage");
    statusMessage.innerText = message + "traffic will be blocked."
}


function activateShield(){
    const $shield = document.querySelector("#overlay");
    $shield.classList.add("active");
}

function closeShield(){
    const $shield = document.querySelector("#overlay");
    $shield.classList.toggle("active");
}