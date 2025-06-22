import * as TeasBuilder from "../blend-component/render.js";

let card = {}

function addToCard(product){
    if(card[product.name]){
        card[product.name]++;
    }else {
        card[product.name] = 1;
    }
    console.log(card)
    saveCardFromLocalStorage()
}

//let person = { name: 'John', age: 30, profession: 'Developer' };
function removeToCard(product){
    console.log(card)
    if(card[product]){
        delete card[product] ;
        console.log(card)

    }
    saveCardFromLocalStorage()
}

function saveCardFromLocalStorage(){
    localStorage.setItem('card', JSON.stringify(card))
}

function loadCardFromStorage(){
    card = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : {}
    return card;
}

function updateCardValue() {
    document.querySelector("#viewcart span").innerHTML = calcItemsInCard().toString();
}

function calcItemsInCard(){
    let amount = 0;

    for(const item in card){
        amount += card[item];
    }
    return amount;
}

function showCardDetails($selector){
    const $card = document.querySelector($selector)

    $card.innerHTML = "";
    const $tr = document.querySelector("table + template").content.firstElementChild.cloneNode(true);

    let sum = 0;

    for(const item in card){
        const tea = TeasBuilder.findByName(item);

        $tr.querySelector("td[data-name]").textContent = tea.name;
        $tr.querySelector("td[data-name]").dataset.name = tea.name;
        $tr.querySelector("td[data-price]").textContent = `€ ${tea.price}`;
        $tr.querySelector("td[data-price]").dataset.price = tea.price;
        $tr.querySelector("td[data-amount]").textContent = card[item];
        $tr.querySelector("td[data-amount]").dataset.amount = card[item];
        $tr.querySelector("td[data-total]").textContent = `€ ${card[item] * tea.price}`;
        $tr.querySelector("td[data-total]").dataset.total = `€ ${card[item] * tea.price}`;
        $tr.querySelector(".remove button").dataset.name = tea.name;
        $card.insertAdjacentHTML("beforeend", $tr.outerHTML);
        console.log(item, card[item] , tea.price)
        sum += card[item] * tea.price;
    }

    document.querySelector("#carttotal").innerText = `€ ${parseFloat(sum).toFixed(2)}`;
}

function completePurchase(location){

    card = {};

    localStorage.removeItem("card");

    updateCardValue();
    showCardDetails("tbody");

    showThankYouPage(location);
}

function showThankYouPage(location){
    const url = `${getUrl()}/${location}`;
    window.location.replace(url);
}

function getUrl(){
    const loc = window.location.href.split("/");
    loc.pop();
    return loc.join("/");
}


export {addToCard, removeToCard, loadCardFromStorage, updateCardValue,showCardDetails, completePurchase}