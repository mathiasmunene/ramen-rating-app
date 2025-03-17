const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById("ramen-detail");
    ramenDetail.querySelector("#ramen-name").textContent = ramen.name;
    ramenDetail.querySelector("#ramen-restaurant").textContent = ramen.restaurant;
    ramenDetail.querySelector("#ramen-rating").textContent = `Rating: ${ramen.rating}`;
    ramenDetail.querySelector("#ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value
        };
        ramens.push(newRamen);
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);

function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}