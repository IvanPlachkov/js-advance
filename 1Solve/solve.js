
    let heroHedingElement = document.getElementById('superHero-list-hedding');
    let heroListElemenet = document.getElementsByClassName('hero-list')
    let wrapper = document.getElementById('wrapper');
    wrapper.style.background = 'lightBlue'
   let heros = document.getElementsByTagName('li');
   heroListElemenet[0] = 'Ebah'
let goodH = document.getElementsByClassName('good')
   console.log(goodH[0].textContent);
   goodH[0].textContent += 'Idiot'
    console.log(goodH);
    for (const name of  heros) {
      console.log(name.textContent +'NEW');
    }
    let heroArr = Array.from(heros)
    console.log(heroArr);
    console.log(heros[0].parentElement);
    console.log(heroListElemenet[0].children);
    
function show() {
  let batElement = document.querySelector('.good')
  
  let taggleButton = document.getElementById('btn')
  // purvi variant
taggleButton.textContent = taggleButton.textContent=== 'More' ? 'Less' : 'More';
batElement.style.display  = batElement.style.display === 'block' ? 'none' : 'block';

// vtori
  // if(batElement.style.display === 'none'){
  //   batElement.style.display = 'block'
  //   taggleButton.textContent = 'Hide'
  // }else{
  //   batElement.style.display='none'
  //   taggleButton.textContent='Show'
  // }
}
    
    let nTiLi = document.querySelectorAll(' li:nth-of-type(2n)')
    console.log(nTiLi);
   for (const her of nTiLi) {

    her.style.backgroundColor = 'grey'
   }
    function newH() {
      // let newHeroElemenet = document.createElement('li');
       let inputElemenet = document.querySelector('.input')
      // newHeroElemenet.textContent = inputElemenet.value ;
      //       heroListElemenet.appendChild(newHeroElemenet) ;
      let firstListitem = heroListElemenet[0];
      let cloneHero = firstListitem.cloneNode();
      cloneHero.textContent = inputElemenet.value ;
      heroListElemenet.prepend(cloneHero)
            inputElemenet.value = '';
    }
    
