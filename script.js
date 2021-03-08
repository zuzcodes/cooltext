"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    displayCoolText();
}

function displayCoolText() {
    let coolText = document.querySelector("#cooltext").textContent;
    let container = document.querySelector(".container");

    container.innerHTML = "";

    let coolArray = [];

    for (let i = 0; i < coolText.length; i++) {
        let currentLetter = coolText.substring(i, i + 1);
        coolArray.push(currentLetter);
    }

    for (let i = 0; i < coolArray.length; i++) {
        let span = document.createElement("span");
        let delay = 0.1 * i;
        if (coolArray[i] == " ") {
            span.innerHTML = "&nbsp";
        } else {
            span.innerHTML = coolArray[i];
        }

        container.appendChild(span);
        span.classList = "fadein";
        span.style.setProperty("--delay", delay + "s");
    }
}