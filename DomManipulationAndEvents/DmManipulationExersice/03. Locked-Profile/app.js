function lockedProfile() {
    // 1.. Select Initals DOm element
   let profiles = document.querySelectorAll('#main .profile');
   let buttons = document.querySelectorAll('#main .profile button');
// Atach Even Listener to buttons
   for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', () => {
        //Get Radio Button for Profile
       
        let radioButton = document.querySelector(`input[name="user${index + 1}Locked"]:checked`)
        //CHeck IF profile is Unlock
        if(radioButton.value === 'unlock'){
            // Get Hidden Field
        let hiddenFieldElement = document.getElementById(`user${ index + 1}HiddenFields`);
            // Toggle Hidden field Display
        hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block' 
            ? 'none' 
            : 'block';

            buttons[index].textContent = buttons[index.textContent] === 'Show more'
            ? 'none'
            : 'Show more' 
    }
       
    });
    
   }
   
}



