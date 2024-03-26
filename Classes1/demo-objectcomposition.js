let person = {
    name: 'pesho',
    age: 20,
    ismale: true,
    grades: [2, 3, 4],
    cat: {
        name: 'Sisa',
        age: 20,
        toys: [
            { name: 'mouse', color: 'Yellow' },
            { name: 'Ball', color: 'blue' }
        ]
    },
    sayHello: function () {
        console.log('Hello');

    }
}
//---Accessing nested property
console.log(person.cat.toys[0].name);



// Object composition
const canPrint = function () {
    console.log(`${this.name} can print`);
}
const canScan = function () {
    console.log(`${this.name} can scan`);
}
let printer = {
    name: 'Hp',
    print: canPrint,
}
let scanner = {
    name: 'samsung',
    scan: canScan,
}
let copier = {
    name: 'brother',
    print: canPrint,
    scan: canScan
}
printer.print();
copier.print();
copier.scan();
scanner.scan();

