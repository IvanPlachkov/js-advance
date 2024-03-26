let cars = ['bmw','audi','opel']
let clonedCars = [];
for(let i =0;i< cars.length;i++){ 
 clonedCars[i] = cars[i]
}
console.log(clonedCars);


// use destructuring 
let [...copiedCars] = cars // rest operator

//SPread operator 
let copiedCars 2 = [...cars] 

//Use slice 
let copiedCars3 = cars.slice () // new Shadow copy
