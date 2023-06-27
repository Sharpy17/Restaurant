export default function populateMenu() {
    const content = document.querySelector("#content");
    const main = document.createElement("div");
    const beverages = document.createElement("div");

    const heading1 = document.createElement("h1")
    const shrimp = document.createElement("div"); 
    const tuna = document.createElement("div");
    const ribai = document.createElement("div");

    const heading2 = document.createElement("h1");
    const dragon = document.createElement("div");
    const paradise = document.createElement("div");
    const pink = document.createElement("div");

    content.append(main, beverages);
    main.append(heading1, shrimp, tuna, ribai);
    beverages.append(heading2, dragon, paradise, pink);

    main.classList.add("list");
    beverages.classList.add("list");

    heading1.textContent = "Main dishes";
    shrimp.textContent = "Big Shrimp";
    tuna.textContent = "HUGE Tuna";
    ribai.textContent = "Guud Steak";

    heading2.textContent = "Beverages";
    dragon.textContent = "dragon juice";
    paradise.textContent = "Paradise";
    pink.textContent = "Pink Cocktail";
}