export default function initialLoad() { 
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    const home = document.createElement("div");
    const menus = document.createElement("div");
    const reviews = document.createElement("div");
    const locations = document.createElement("div");
    const heading = document.createElement("h1");
    const info = document.createElement("p");

    content.append(header, heading, info);
    header.append(home, menus, reviews, locations);
    header.classList.add("header");
    info.classList.add("info");

    home.textContent = "Home";
    menus.textContent = "Menus";
    reviews.textContent = "Reviews";
    locations.textContent = "Locations";
    heading.textContent = "Dosia's 100";
    info.textContent = "The best restaurant in Kyrgyzstan. We serve 100 different types of beverages, steaks and pastas. We received over a million 5 star reviews from all over the country. We have locations in Issyk-kul, Osh and Bishkek. Waiting for you and your fat momma.";
}