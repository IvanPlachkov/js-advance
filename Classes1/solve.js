// class Cat {
//     constructor(){
//         this.name = 'gosho';
//     }
//     catSay(){
//         console.log(`${this.name} dano e ok`);
//     }
// } let nameCat = new Cat();
// console.log(nameCat);
// nameCat.age = 20;
// console.log(nameCat);
// delete nameCat.age
// console.log(nameCat);
// console.log(nameCat.catSay());

// class Dog{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     bark(){
//         return `${this.name} ${this.age} kazva bau bau`;
//     }
// }
// let dog1 =  new Dog('Pesho',3)
// let dog2 =  new Dog('Gosho',5)

// console.log(dog1.bark());
// console.log(dog2.bark());

// class Fish {
//     constructor(nameFish){
//         this.nameFish = nameFish;
//     }
//     static sayHello(){
//         console.log('Hello');
//     }
// }
// let fish  = new Fish('Pesho');
// console.log(Fish.sayHello());

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diametur() {
        return 2 * this.radius
    }
    set diametur(velue){
        this.radius = velue/2;
    }
    get area(){
        return this.radius*3
    }
}
let c = new Circle(2);
c.diametur = 3
console.log(`Radius ${c.radius}`);
console.log(`Diametur ${c.diametur}`);
console.log(`Area ${c.area}`);

class Pet{
    hunger = 100;
    constructor(name){
        this.name = name;
        
    }
    get isHungry(){
         return this. hunger > 80  
    }
    set isHungry(value){
        if(typeof value != 'boolen'){
            return;
        }
        if(value){
            this.hunger =100;
            }else {
                this.hunger =0
            }
    }
}
let pet = new Pet ('Gosho');
console.log(pet.hunger);
console.log(pet.isHungry);
if(pet.isHungry){
    pet.isHungry = false;
}
console.log(pet.isHungry);
console.log(pet.hunger);