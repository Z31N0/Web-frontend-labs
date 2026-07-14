/*
    DON'T MAKE CHANGES IN THIS FILE
*/

document.querySelectorAll(".toggle-link").forEach($el => $el.addEventListener("click", () => {
    document.querySelectorAll(".right-panel").forEach($element => $element.classList.toggle("hidden"));
}));