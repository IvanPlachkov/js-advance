function addCar() {
    let carNameInputElement = document.getElementById('car-name');
    let carListElement = document.getElementById('car-list');

    let newCarItemElement = document.createElement('li')

    newCarItemElement.textContent = carNameInputElement.value ;

    carListElement.appendChild(newCarItemElement);
    


let firstListedItemEl = carListElement.children[0];
let newCloneItemEl = firstListedItemEl.cloneNode();
newCloneItemEl.textContent = carNameInputElement.value ;
carListElement.prepend(newCloneItemEl)

carNameInputElement.value = '';

}

function deleteCar() {
    let carListedElement = document.querySelector('#car-list');
    let carListedChildrenEl  = carListedElement.children;
    let lastCartEl = carListedElement.children[carListedChildrenEl.length-1]
    
    // VARIANT 1
    // carListedElement.removeChild(lastCartEl)
    //trie ot roditelq perent    
    // VARIANT 2 trie element ot durvoto
    lastCartEl.remove()
}
 // Evend Handler
 
 function overhandler(){
    console.log('prapare your self to add car');
 }

 let carNameEl = document.getElementById('car-name')
 carNameEl.onfocus = function () {
    console.log('start type car');
    carNameEl.onblur = function () {
        console.log('dont type car');
    }
 }

 
 function carNameinputhHedler() {
    let carNameElement = document.getElementById('car-name');
    console.log(carNameElement.value);
 }
 carNameElement.addEventListener(
   
 )