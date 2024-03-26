function addItem() {
    let newItemTextEl = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');

    let liItemEl = document.createElement('li');
    liItemEl.textContent= newItemTextEl.value;

    itemsElement.appendChild(liItemEl);
    



}