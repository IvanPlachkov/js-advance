function addItem() {
   let newItemTextElement = document.getElementById('newItemText');
   let itemsElement= document.getElementById('items');
   let liItemElement = document.createElement('li');
   liItemElement.textContent = newItemTextElement.value ;
   // Add Delete boton
   let deleteButton = document.createElement('a');
   deleteButton.setAttribute('href', '#') 
   deleteButton.textContent= '[Delete]';
//Atach Event
deleteButton.addEventListener('click',(e) => {
    console.log('delete clicked');
   e.currentTarget.parentNode.remove(); 
})


   liItemElement.appendChild(deleteButton)
   itemsElement.appendChild(liItemElement)

   newItemTextElement ='';
}