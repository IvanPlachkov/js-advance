// let cat = { name:'Tom', age: 5};
// console.log(Object.getOwnPropertyDescriptors(cat));

// //Object Freeze

// Object.freeze(cat); 


// console.log(Object.getOwnPropertyDescriptors(cat));




let person = { name:'Pesho', age: 5 };
console.log(Object.getOwnPropertyDescriptors(person));
Object.seal(person)
console.log(Object.getOwnPropertyDescriptors(person));