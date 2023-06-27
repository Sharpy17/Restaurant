const content = document.querySelector("#content");
const body = document.querySelector("body");

import "./style.css";
import initialLoad from "./load";
import populateMenu from "./menus";
import populateReviews from "./reviews";

const header = document.createElement("div");
const home = document.createElement("button");
home.classList.add("home");
const menu = document.createElement("button");
menu.classList.add("menu");
const reviews = document.createElement("button");
reviews.classList.add("review")

body.append(header);
header.append(home, menu, reviews);
header.classList.add("header");

home.textContent = "Home";
menu.textContent = "Menu";
reviews.textContent = "Reviews";

initialLoad();

function eraseDOM() {
    content.innerHTML = "";
}

const homebtn = document.querySelector(".home");
homebtn.addEventListener("click", (() => {
    eraseDOM();
    initialLoad();
})
);

const menubtn = document.querySelector(".menu");
menubtn.addEventListener("click", (() => {
    eraseDOM();
    populateMenu();
})
);


const reviewbtn = document.querySelector(".review");
reviewbtn.addEventListener("click", (() => {
    eraseDOM();
    populateReviews();
}))



