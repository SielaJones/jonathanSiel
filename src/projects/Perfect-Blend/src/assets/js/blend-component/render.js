import { teas } from "../data/tea.js"

function renderTeas(targetSelector) {
    const $template = document.querySelector("#teas-template");
    const $target = document.querySelector(targetSelector);

    teas.forEach(tea => {
        const $tea = $template.content.firstElementChild.cloneNode(true);
        populateTeas($tea, tea);

        $target.insertAdjacentHTML("beforeend", $tea.outerHTML);
    });
}

function populateTeas($tea, tea) {

    $tea.setAttribute('data-name',tea.name);
    $tea.querySelector("h3").innerText = tea.name;
    $tea.querySelector('img').setAttribute('src',`.${tea.imageurl}`);
    $tea.querySelector('img').setAttribute('alt',tea.name);
    $tea.querySelector('img').setAttribute('title',tea.name);

    $tea.querySelector('p').innerText = tea.description;

    $tea.querySelector('.price').textContent = `€${tea.price.toFixed(2)}`

    $tea.querySelector('.category').textContent = tea.category;
}

function findByName(name){
    return teas.find(product=>product.name.toLowerCase() === name.toLowerCase())
}

function addProductToCard(e){
    if(e.target.tagName === "BUTTON"){
        const name = e.currentTarget.getAttribute("data-name");
        const tea = findByName(teas,name)
        console.log(tea)

    }

}

export { renderTeas, addProductToCard, findByName };