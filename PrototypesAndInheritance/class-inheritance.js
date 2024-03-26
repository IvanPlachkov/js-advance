 class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    greet(){
        console.log(`Hi my name ${this.name}`);
    }
 }
 class Employe extends Person{ 
    constructor(name,age,department,id){
        super(name,age)
        this.department=department;
        this.id= id;
    }
    showId(){
        console.log(`${this.name} has and Id of ${this.id}`);
    }
 }
 let person = new Person('Gosho',10);
 let employee = new Employe('Peshho',20,'It',111);
 person.greet();//Hi my name Gosho
 employee.greet()//Hi my name Peshho
 // person.showId();// tova se 4upi poneje na ID
 employee.showId();//Peshho has and Id of 111