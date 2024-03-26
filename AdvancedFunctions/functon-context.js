// Run in Browser
// 1 first Example
// function fly() {
//         console.log(this); // pravim vunkciq 
// }
// let hero = { // tva e obekt s funkci vutre
//     name: 'supermen',
//     fly:fly // moje samo fly i e po pravilno 
// }
// fly(); // izvikvame funkciq
// hero.fly();

// 2 . second Example
//Razlichni na4ini da vpishem funkciq v obekt
// function fly() {
//     console.log(this);
// }
//  let hero1 = {
//             name:'Supermen',
//             fly:fly, // referenciq kum funkciq fly

//             laserEyes : function(){ // Function Expresion
//                 console.log(this.name +'Shot lasers'); // vzema tekushtiq kontekst heroname i vzemaime Supername
//                 console.log(this);// this so4i kum hero
//             },

//             stopBulets(){ // Objectmetot Notaison
//                 console.log(this);
//             },

//             punch: () => { //Arrow function
                    // console.log('Punch')
//                 console.log(this);
//             }
//         }
//         fly()
// hero1.laserEyes();
//let shootLaser = hero1.laserEyes; // vzema funkciqta po referenciq i q prilaga na shootLaser
// shootLaser();
// hero.punch();
// function fly() {
//     console.log(this);
// }
//  let hero1 = {
//             name:'Supermen',
//             fly:fly,
//             laserEyes : function(){  console.log(this.name +'Shot lasers');
//             console.log(this); },

//             stopBulets(){   console.log(this);
//             },

//             punch: () => {  
               
//                  console.log(this);
//             }
//         }
        
// hero1.laserEyes();
// let shootLaser = hero1.laserEyes; 
// shootLaser();
// hero1.punch();

// Exampple 3 change function content // neraboti v Firefox 
function fly(info) {
 console.log(`${this.name} is flying${info}`);
} // this so4i kum name

let contextObject = {
    name: 'Wondr Woman'
};
fly() // global context // is flying
fly.call(contextObject, 'with rope'); // WOnder Woman is flying with rope dobavihme 1 argument info moje i pove4e
fly.call({name: 'Pesho'}); // Peshto is flying
fly.apply({name:'Gosho'},['with fork']);// Gosho is flying with fork
// Example 4 Difrence call() VS apple () apply ima masiv nakraq

// Using Bind
function fly(info) {
    console.log(`${this.name1} is flying ${info}`);
   } // this so4i kum name
   
   let contextObject1 = {
       name1: 'Wondr Woman'
   };
   fly.call(contextObject1,'with Rope')
let wonderWomanFly = fly.bind(contextObject1); 
wonderWomanFly('With Plane');