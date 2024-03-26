
function addHero() {
   
    let heroNameInputElement = document.getElementById('hero-name')
    let heroListedElmet = document.getElementById('hero-list')
    // // Adding hero dangerousle , avoid usin NOT!!
    // heroListedElmet.innerHTML += `<li>${heroNameElement.value}</li>`
 

    // ------1. ADD HERO PRAVILEN NACHIN bye creating element!!-----
    // a) purva stupka suzdavane
    let newHeroItemElement = document.createElement('li');
    // b) modificiram elementa
    newHeroItemElement.textContent = heroNameInputElement.value;
    // tuk suzdadohme elementa , no ne e zakrepen kum DOm durvoto , 
    // i sled suzdavane vinagi se zakrepq za durvoto
    // c) Na4ich zakrepvan
    heroListedElmet.appendChild(newHeroItemElement)

    // -----2 Add hero by Clone Element( allso corect) pak e pravilno!!!----
    let firstListItemElemnt = heroListedElmet.children[0]
    //vzemane na purvoto pod red dete ot roditel
    let newCloneItemElement = firstListItemElemnt.cloneNode();
    //.cloneNode() ima nqkolko vainata v zavisimost dali iskame da klonirame samo orditelq
    // ili nego i cqloto durvo ot deca kato se napish neshto v skobite
    newCloneItemElement.textContent=heroNameInputElement.value;
    heroListedElmet.prepend(newCloneItemElement)
    //.prepend() kara elementa da otide v na4aloto obratnoto na appendChild()


    // d) crelar input iz4istva sled vuvejdane nageroi poleto za dobavqne
    heroNameInputElement.value = '';

}
// DELETE last hero
function deleteHero() {
        let heroListedElmet= document.querySelector('#hero-list');
        let heroListChildrenElement= heroListedElmet.children
        let lastHeroElemnt = heroListedElmet.children[heroListChildrenElement.length -1]
        // vzema posledniq element
        heroListedElmet.removeChild(lastHeroElemnt) // Delete from perent variant 1
       //lastHeroElemnt.remove();    // variant 2

    }
// HTML Atribut event
function buttonMouseOverHandler(event){
    console.log('show hero');
    // kato puso4im butona s mishkata izpisva tova
}
// DOm element property
let heroNameElement = document.getElementById('hero-name')
heroNameElement.onfocus = function () {
    console.log('startTypeing a hero');
    // kato cuknem poleto za pisane izpisva tova
}
heroNameElement.onblur= () => console.log('stopTyping hero');
// sus arrow funkciq sushto moje, kato kursora e izvun poleto i cuknem izpisva stoptyping hero

// Dom event handler (prefer nai polzvan metod)
function heroNameInputHandler(event) {
    let heroNameElement = document.getElementById('hero-name')
    // console.log(heroNameElement.value); // 1- variant
    console.log(event.currentTarget);//2- variant vtori na4in i otdolu vmesto heroNameElement moje
    // dase zapishe event.currenTarget kato po tozi na4in nqma da zagubi referenciq ako 
    // se mesti v drug fail
}
heroNameElement.addEventListener('input',heroNameInputHandler) // purvoto e za tipa koito slushame(nieslushame z input)
//             a vtoroto e referenciq kum funkciqta heroNameInputHandler
// .addEventListener() slusha za daden event dali go ima da se izpulni i pri vsqka bukva vuvedena q izpsva posledowatelno l, lo, lok, loki


// Click on hero BEST way Evemt Deligation
let heroListetElement= document.getElementById('hero-list');
heroListetElement.addEventListener('click', (e)=> {
    // kudeto i da kliknesh vurhu lista da go
    if(e.target.tagName != 'Li'){
    return;
    }
console.log(`you ckliked on hr : ${e.target.textContent}`);
});