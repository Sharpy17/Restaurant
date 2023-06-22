function populateMenu() {
    const content = document.querySelector("#content");
    const main = document.createElement("div");
    const beverages = document.createElement("div");
    
    const shrimp = document.createElement("div"); 
    const tuna = document.createElement("div");
    const ribai = document.createElement("div");

    shrimp.textContent = "Big Shrimp";
    tuna.textContent = "HUUGE Tuna";

    const dragon = document.createElement("div");
    const paradise = document.createElement("div");
    const pink = document.createElement("div");

    content.append(main, beverages);
    main.append(shrimp, tuna, ribai);
    beverages.append(dragon, paradise, pink);
}