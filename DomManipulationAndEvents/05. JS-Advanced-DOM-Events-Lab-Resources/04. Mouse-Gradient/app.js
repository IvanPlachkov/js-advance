function attachGradientEvents() {
   let gradientBoxElement = document.getElementById('gradient-box');
   let resultElement= document.getElementById('result');

    gradientBoxElement.addEventListener('click', function (e) {
        console.log(e.currentTarget.offsetWidth); 
        console.log(e.offsetX); 

        let percent = Math.floor( (e.offsetX / e.currentTarget.offsetWidth)*100); 
        resultElement.textContent = `${percent}%`
       
    });
}
