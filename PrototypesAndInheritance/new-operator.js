// dopulnitelno
function Person(name,age) {
    this.name = name;
    this.age=age;
}
Person.prototype.greet = function(){
    console.log(`Hi my name is ${this.name}`);
};

function newKeyword(constructor, ...params) {
    let newObj={};
    constructor.apply(newObj,params);
    Object.setPrototypeOf(newObj,constructor.prototype)
    return newObj;
}
let person = new Person('Pesho',22);
let person2 = newKeyword(Person,'Gosho',18)

console.log(person2.name);
person2.greet()

