function toggle() {
   //1.select element
    let button = document.getElementsByClassName('button')[0];
    let textDiv = document.getElementById('extra');
       //2. Parse data
      
   //3. Show/Hide text and change button text
    
                 // a Change button text
        button.textContent = button.textContent === 'More' ? 'Less' : 'More';
   

                 // b show/hide content
                 textDiv.style.display = textDiv.style.display === 'block' ? 'none' : 'block';
              

  

}