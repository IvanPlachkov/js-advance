
function getPerson() {
    class Person {
        constructor(firstName,lastName,age,email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age :${this.age}, email: ${this.email})`
        }
    }
    
let persons = [];
 persons.push(new Person('Anna', 'Simpson', 22 , 'Anna@yahoo.bg'))
 persons.push(new Person('Softuni'))
 persons.push(new Person('Stefan', 'Johson', 25 ))
 persons.push(new Person('Gabriel', 'Peterson', 24 , 'g.p@gmail.com'))
return persons;
}
console.log(getPerson());



