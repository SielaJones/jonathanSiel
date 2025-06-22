import * as TeasBuilder from "./blend-component/render.js";
import * as ShoppingCard from "./shopping-card/shopping-card.js";

function init() {
    checkStorage()
    TeasBuilder.renderTeas(".wrapper");
    bindEvents()
}

function bindEvents(){
    const $productContainer = document.querySelector("#products");
    $productContainer.addEventListener("click",handleAddToCart);
}

function handleAddToCart(e){
    e.preventDefault();
    const name = e.target.closest("article").dataset.name;
    const product = TeasBuilder.findByName(name);
    ShoppingCard.addToCard(product);
    checkStorage()
}


function checkStorage(){
    if(ShoppingCard.loadCardFromStorage()){
        ShoppingCard.updateCardValue();
    }
}

init()