"use strict";
document.addEventListener("DOMContentLoaded", init)

const drinks = ["Earl Grey Tea", "Coffee", "Beer", "Martini", "Milkshake", "Whiskey", "Hot Chocolate"];

function init() {
    const $dynamicList = document.querySelector("#dynamic ul");
    fillDrinksList($dynamicList, drinks);

    const $sortButton = document.querySelector("#sort button");
    const $sortUl = document.querySelector("#sort ul");
    $sortButton.addEventListener("click", () => {
        sortList($sortUl);
    });

    const $sortLaterButton = document.querySelector("#sort-later button");
    $sortLaterButton.addEventListener("click", toggleSort);

    const $searchSubmission = document.querySelector("form button");
    const $findUl = document.querySelector("#find ul");
    $searchSubmission.addEventListener("click", find)
    fillDrinksList($findUl, drinks);
}

function fillDrinksList(list, array){
    list.innerHTML = "";
    array.forEach(drink => {
        const drinkClass =  stripSpaces(drink.toLowerCase());
        list.insertAdjacentHTML("beforeend", `<li class="${drinkClass}"> ${drink}</li>`);
    });
}

function stripSpaces(txt){
    return(txt.replace(/\s+/g, "-"));

}

function sortList($ul, ascending = true) {
    let sortedList = drinks.sort();
    if (!ascending) {
        sortedList = sortedList.reverse();
    }
    $ul.innerHTML = "";
    fillDrinksList($ul, sortedList);
}

function toggleSort(ascending = true) {
    const $ul = document.querySelector("#sort-later ul");
    const $sortLaterButton = document.querySelector("#sort-later button");
    if (ascending) {
         sortList($ul);
         $sortLaterButton.innerText = "Sort list descending";
         $sortLaterButton.addEventListener("click", () => {
         toggleSort(false);
         });
     } else {
        sortList($ul, false);
        $sortLaterButton.innerText = "Sort list ascending";
        $sortLaterButton.addEventListener("click", () => {
            toggleSort(true);
        });
    }

}

function find(){
    const $input = document.querySelector("input");
    const query  = $input.value;
    const result = drinks.filter(drink => drink.toLowerCase().includes(query.toLowerCase()));
    const $ul = document.querySelector("#find ul");

    fillDrinksList($ul, result);
}
