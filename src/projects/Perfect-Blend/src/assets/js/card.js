import * as ShoppingCart from "./shopping-card/shopping-card.js";
import * as ShoppingCard from "./shopping-card/shopping-card.js";
import * as TeasBuilder from "./blend-component/render.js";

function init(){
console.log("cart")
    checkStorage();
    bindEvents()
    ShoppingCart.loadCardFromStorage()
    ShoppingCart.showCardDetails("tbody");
}

function checkStorage(){
    if(ShoppingCard.loadCardFromStorage()){
        ShoppingCard.updateCardValue();
    }
}

function bindEvents(){
    document.querySelector("#summary").addEventListener("submit",handlePurchase);
    document.querySelector("tbody").addEventListener("click",handleRemovePurchase);
}

function handlePurchase(e){
    e.preventDefault();
    const action = e.target.closest("form").getAttribute("action");
    console.log(action)
    ShoppingCart.completePurchase(action);
}

function handleRemovePurchase(e){
    const name = e.target.closest("button").getAttribute("data-name");
    const product = TeasBuilder.findByName(name);
    //console.log(product.name)
    ShoppingCart.removeToCard(product.name);
    init()
}

init()