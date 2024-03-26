// pravene na obek
function creat(name,population,tresury) {
    let city = {};
    city.name = name;
    city.population =population;
    city.tresury = tresury
    return city;
}

function creat(name,population,tresury) {
    return {
        name,
        population,
        tresury
    }
}


let person = {bane:'Ivan'};
 person.age = 25
person.kategoriq = 'idiot'
let{   bane,age} = person

delete person.kategoriq;

person['kqkkq'] = 6;

let keys  = Object.keys(person)
console.log(keys);
let value = Object.values(person)
console.log(value);
let test = Object.entries(person)

let a = person.bane;
a.bane = "peso"
console.log(person);

function solve(name,lastName,age) {
        let person = {
            name,
            lastName,
            age
        }
        return person;

}console.log(solve('Petur','Georgiev','40'));

let obj = {city: "turnovo"};
obj.viligase = "karanci";
delete obj.city;
console.log(obj);
let obekt = { age: 20 , statis: 'free'}
delete obekt.statis;
console.log(obekt)

let obj1 = {age :20,step :1,sum :50}
let {sum , step}= obj1
console.log(sum,step);



// for (const key in obj1) {
//             const element = obj1[key];
//         console.log(element);
//     }
let entr = Object.entries(obj1)
entr.forEach(element => {
    let [age,step]=element;
    console.log(age,step);
});
 

let arr12 = ['ivan <-> 30','pesho <-> 50','dimit <-> 35'];
 const resul12 = {}
 // Variant 1
for (const key in arr12) {
   
        const parseArr = arr12[key].split(' <-> ');
        if(resul12[parseArr[0]]){
            resul12[parseArr[0]] += Number(parseArr[1])
        }else {
            resul12[parseArr[0]] = Number(parseArr[1])
        }
    }
    console.log(resul12);
// Variant 2
arr12.forEach((a) => {
    const [key,value] = a.split(' <-> ');
        if(resul12[key]){
            resul12[key] += Number(value)
        }else {
            resul12[key]= Number(value)
           
        }
    
   
})
console.log(resul12)


// Object Metods

 let person1 = { 
    firstN:'DImit', 
    SecodnN:'Peshpv', 
 printName: function(){
    console.log(this.firstN,this.SecodnN)
 }
 };
 person1.printName();


 // Object like Switch 
//  let count = 5;
//  const user = {
//     increment() { count++},
//     decrement() { count--}
//  }
//  user['increment']();
//  console.log(user);

 // Podavane na funkciq ot edin obekt w drug 
  let user2 = { firstNa: 'Ivan ', 
    secondNa: 'Djabaski',
    printNa: function(){
        console.log(this.firstNa, this.secondNa);
    }
}
let testFunction = user2.printNa
let secondUser = {firstNa:'Jon',secondNa:'Snow'}
secondUser.printNa = testFunction;
secondUser.printNa();
// objeck COmpositioon
let student = {
    firstName:'mitio',
    secondName:'trosov',
    location:{
        lat:54.35,lgn:32.45
    }
    }
    console.log(student.location.lat);
   
    let town = 'sofia';
    let country = 'bulgaria';
    let population = 60000;
    let national = {country,town,population};
    console.log(national);

   // Nested destruction 
    let department = {
        name:'Enginer',
        data:{
            direct0r:{
                name:'jon',
                positon:'enginer'
            },
            emploes:[],
            company:'Build'
        }
    }
    
   console.log({data:{direct0r}}= department);

   //object destruktorirane 
   let empoyees = [
    {name: 'Jphn', positon: 'worker'}, 
    {name:'Peter', position: 'director'}
   ];
   console.log ( [{name}] = empoyees);

   let company = {
    empoyees : ['Jack','Jane','Sam'],
    name: 'Quick Build'
   };
   let {empoyees:[empName]}= company 

   // Function factory 
   function creatReact(widt,hight) {
    let rect = { widt,hight };
    rect.getAre = function(){
        return this.widt * this.hight
    }
    return rect;
    
   }
   let rectngel = creatReact(100,200);
   let func = rectngel.getAre;
   let costomeRect = {
    with:1000, hight:500
      }
      costomeRect.getAre = func;
      console.log(costomeRect.getAre());

      // Decoration Functions
      function canPrint(divice) {
        divice.print = () => {
            console.log(`${divice.name} i printn a page`);
        }
      }
      let printer = {name: 'ACME printer'};
      canPrint(printer);
      printer.print();

      
      // JSON.stringify()
      let workers = {meneger:{
        firstName1:'John', lastName: 'Doe'}
      }
      let workerStringify = JSON.stringify(workers);
      console.log(workerStringify);
      // JSON.parse()
      
      let workerParse = JSON.parse(workerStringify);
      console.log(workerParse.meneger.lastName);
