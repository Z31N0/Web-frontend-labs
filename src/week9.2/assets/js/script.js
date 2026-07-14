"use strict";

const TEXT_AVAILABLE_SEAT = "available seat";
const people = ["Jane Doe", "Johnny Fever", "Jack Brick", "James McQueen", "Randall Wise", "Lydia Flynn", "Rebecca Heart", "Nick Balthar", "Joan Sloan", "Lili Creed", "Walter White"];
const seats = {
    vip: 5,
    regular: 10,
    budget: 15
}

let selectedPerson = "";

document.addEventListener("DOMContentLoaded", init);

function init(){
    const $ulPeople = document.querySelector(".people");
    $ulPeople.addEventListener("click", selectPerson);

    renderPeople();
    renderSeats();


    const seatLis = document.querySelectorAll(".vip li, .regular li, .budget li");
    seatLis.forEach($li => {
        $li.addEventListener("click", allocateSeat);
    });
    

}

function allocateSeat(e){
    if(selectedPerson === ""){
        return;
    }
    
    const $li = e.target;

    if( ! $li.classList.contains("available")){
        return;
    }


    $li.innerText = selectedPerson;
    $li.classList.remove("available");

    const indexOfSelectedPerson = people.indexOf(selectedPerson);
    if(indexOfSelectedPerson !== -1){
        people.splice(indexOfSelectedPerson, 1);
    }

    renderPeople();

    selectedPerson = "";
}

function selectPerson(e){    
    if( e.target.tagName !== "LI"){
        return;
    }

    const $li = e.target;
    selectedPerson = $li.innerText;
    
    const $selectedLi = document.querySelector("li.selected");
    if($selectedLi){
        $selectedLi.classList.remove("selected");
    }

    $li.classList.add("selected");

    console.log(selectedPerson)
}

function renderPeople(){
    const $ul = document.querySelector(".people");
    $ul.innerHTML = "";
    people.forEach(person => {
        const $li = `<li>${person}</li>`;
        $ul.insertAdjacentHTML("beforeend", $li);
    });
}

function renderSeats(){
    for(let seatType in seats){        
        const query = `.${seatType}`;

        const $ul = document.querySelector(query);
        const maxSeats = seats[seatType];
        for(let i = 0; i < maxSeats; i++){
            const $li = `<li class="available">${TEXT_AVAILABLE_SEAT}</li>`;
            $ul.insertAdjacentHTML("beforeend", $li);
        }        
    }
}