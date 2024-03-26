function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(`Hi my name ${this.name}`);
}
function Employee(name,age,id,department) {  
    Person.call(this,name,age)
    this.id = id;
    this.department = department;
    }
    Employee.prototype = Object.create(Person.prototype)
    Employee.prototype.showId = function(){
        console.log(`This is my Id ${this.id}`);
    }
    let employee = new Employee('Pesho',22,111,'It')
    console.log(employee);
    employee.greet()
    employee.showId()

