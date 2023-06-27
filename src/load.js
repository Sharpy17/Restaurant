export default function initialLoad() { 
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    const info = document.createElement("p");

    content.append(heading, info);
    info.classList.add("info");

    heading.textContent = "Dosia's 100";
    info.textContent = "The best restaurant in Kyrgyzstan. We serve 100 different types of beverages, steaks and pastas. We received over a million 5 star reviews from all over the country. We have locations in Issyk-kul, Osh and Bishkek. Waiting for you and your fat momma.";
}