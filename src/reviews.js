export default function populateReviews() {
    const content = document.querySelector("#content");

    const reviewer1 = document.createElement("div");
    const name1 = document.createElement("p");
    const review1 = document.createElement("p");

    const reviewer2 = document.createElement("div");
    const name2 = document.createElement("p");
    const review2 = document.createElement("p");

    content.append(reviewer1, reviewer2);
    reviewer1.append(name1, review1);
    reviewer2.append(name2, review2);
    reviewer1.classList.add("list");
    reviewer2.classList.add("list");

    name1.textContent = "Gordon Ramsay";
    review1.textContent = "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they're doing and what they're talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it's 100% worth it."

    name2.textContent = "Sadyrbek Japarov";
    review2.textContent = "I am a president of Kyrgyz Republic and I am usually facing difficulties visiting restaurants. But I don't care about anything when it comes to Dosia's 100! I don't care about the crowds, the journalists. The food, the beverages are so good they are worth the sacrifice!";
}