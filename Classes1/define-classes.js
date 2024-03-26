class Caty {
    constructor() {
        this.name1 = 'Pesho'
    }
}
let cat3 = new Caty();
console.log(cat3);
cat3.age1 = 10;
console.log(cat3);
delete cat3.age

// -----------------
// class Cat {
//     constructor(name,breed){
//         this.name = name // this zna4i tekushata i nstanciq
//         this.breed = breed
//     }
// }
// let cat1 = new Cat('Nafcho', 'persian');
// let cat2 = new Cat ('Tsutsula', 'bravo');
// console.log(cat1);
// console.log(cat2);

//----------Class Methods -------------
class Dog {

    hunger1 = 100;

    constructor(nameDog, breedDog) {
        this.nameDog = nameDog
        this.breedDog = breedDog
    }
    static sayHelloDog() {// - static metods
        console.log('Hello');
    }
    makeSound() {
        console.log(` ${this.nameDog} say Bao`);
    }
}
let dog1 = new Dog('Nafcho', 'persian');
let dog2 = new Dog('Tsutsula', 'bravo');
dog1.makeSound()
dog2.makeSound()

//     //---------- instanceof Operator ---
//     console.log(cat1 instanceof Cat); 
//     console.log(typeof cat1); 

//     // ---- Static methods----
//     Cat.sayHello()

//---- Accessor properties
class Cat {

    hunger = 100;

    constructor(name) {
        this.name = name
    }
    get isHungry() {
        return this.hunger > 80;
    }
    set isHungry(value) {
        if (typeof value != 'boolen') {
            return;
        }
        if (value) {
            this.hunger = 100
        } else {
            this.hunger = 0
        }
    }
}
let cat1 = new Cat('Nafcho');


console.log(cat1.hunger);
console.log(cat1.isHungry);

// Accsessor properties
if (cat1.isHungry) {
    //feed the cat
    cat1.isHungry = false;
}
console.log(cat1.isHungry);
console.log(cat1.hunger);


