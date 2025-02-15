function Person(firstName,lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;
       Object.defineProperty(this,'fullName',{ 
        get: function (){  
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(fullName){
            //Validation
            let pattern = /(?<firstName>\w+) (?<lastName>\w+)/; // regex grupi
            let matchResult = fullName.match(pattern);
             //pattern.exec(fullName) - vtori variant
             if(matchResult){
               this.firstName = matchResult.groups.firstName;
               this.lastName = matchResult.groups.lastName
             }
         }
    })
}
// let person = new Person("Peter", "Ivanov");
//  console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson 