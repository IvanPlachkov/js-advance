function addGHero() {
    let heroNameInputElement = document.querySelector('#Ghero-name');
    let heroListedElement  = document.getElementById('Ghero-list');
    let newHeroItemElement= document.createElement('li');
    newHeroItemElement.textContent = heroNameInputElement.value ;
    heroListedElement.appendChild(newHeroItemElement);
    //klonirane
    let furstListdEl = heroListedElement.children[0];
    let newCloneGhero = furstListdEl.cloneNode();
    newCloneGhero.textContent = heroNameInputElement.value;
    heroListedElement.prepend(newCloneGhero);
    heroNameInputElement.value = '';
         
}
// handler ili kato poso4i butona da izpisva neshto ili dr efekti
function buttonMausOverHandler() {
    console.log('be prapare to write');
}
// usng Dom element propertys
let herNameElement =document.getElementById('Ghero-name');
herNameElement.onfocus = function () {
    console.log('start type');
}
herNameElement.onblur = function () {
    console.log('Stop write');
}
// add event listener
function heroNameInputHandler () {
    let heroNameElelm = document.getElementById('hero-name');
    console.log(heroNameElelm.value);
    heroNameElelm.addEventListener('input',heroNameInputHandler);
}

function addBHero() {
    let bHeroNameInputE = document.getElementById('Bhero-name');
    let bHerolistedElement = document.getElementById('Bhero-list');
    let bNewHeroItemElement = document.createElement('li')
    bNewHeroItemElement.textContent = bHeroNameInputE.value ;
    bHerolistedElement.appendChild(bNewHeroItemElement)
    
    let firstListedBadElement = bHerolistedElement.children[0];
    let newCloneBadhero = firstListedBadElement.cloneNode();
    newCloneBadhero.textContent = bHeroNameInputE.value;
    bHerolistedElement.prepend(newCloneBadhero)
    bHeroNameInputE.value = '';

    
}
function deleteHero(){
     let heroListedElement = document.querySelector('#Ghero-list');
     let herolistChildrenEl = heroListedElement.children;
     let lastHeroElement = heroListedElement.children[herolistChildrenEl.length-1];
     heroListedElement.removeChild(lastHeroElement)
}
// Suzdavane na element
let ul = document.getElementById('Ghero-list');
let li = document.createElement('li')
ul.appendChild(li)
li.innerText = 'X men';
let span = document.createElement('span');
li.appendChild(span);
span.textContent = ' Mamata si traka';

let firstDete = document.querySelector('li:first-of-type')
let li1 = document.createElement('span');

firstDete.append(li1)
li1.textContent = 'Ebalo si mamata';

