// // value type
// let number =5;
// let secondNumber = number;
// number =10;
// console.log(secondNumber);

// //reference Type
// let cars = ['bmw','audi','opel']
// let clonedCars = cars;
// clonedCars[0]= 'Mercedes'
// console.log(clonedCars) // dont use for clone


// COPY  array use destructorirane
let cars = ['bmw','audi','opel']
let [...copyCars]= cars  // rest operator
copyCars[0]="mercedes"
console.log(cars);
console.log(copyCars);
// spred operator
let copiedCars2 = [...cars] // spred operator