let person= {
    name: 'Peshho',
    age:22
};
let employee= Object.create(person);// Create new objext adds prototype person

console.log(emploee);
console.log(emploee.__proto__);

let emploee2 =Object.assign({},person) //creates new object without person as prototype just CLone

console.log(emploee2);//{name: 'Peshho', age: 22}
console.log(emploee2.__proto__);