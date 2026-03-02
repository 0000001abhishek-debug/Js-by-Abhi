alert("Welcome to Myntra Bag!");

let bagItems = 0;

let bagText = document.getElementById("bagText");

document.getElementById("addBtn").onclick = function() {
    bagItems = bagItems + 1;
    bagText.innerText = "Your Bag has " + bagItems + " items";
};

document.getElementById("wishBtn").onclick = function() {
    if (bagItems > 0) {
        bagItems = bagItems - 1;
        bagText.innerText = "Your Bag has " + bagItems + " items";
    }
};

document.getElementById("saleBtn").onclick = function() {
    bagItems = bagItems + 2;
    bagText.innerText = "Your Bag has " + bagItems + " items";
};