
function Person(name,age){
    this.name = name;
    this.age= age;
    //this.greet = function(){
     //  console.log(`Hi,my name is ${this.name}`);
    //     }



        } 
        Person.prototype.greet = function(){
                   console.log(`Hi,my name is ${this.name}`);
        } 
    let person = new Person('Pesho',20);
    console.log(person);
    let person2 = new Person('Gosho',22);
    person.greet();
    person2.greet(); 

    console.log(`Employe ----->>>`)

   
    let employeePrototype= {
         employer: 'Softuni',
         sayHi : function(){
            console.log('Hi');
         }
    }
    function Employee(id,department){
        this.id = id;
        this.department= department;
    }
    Employee.prototype = employeePrototype; 
    
    let employee = new Employee('1010','It')

    console.log(employee.__proto__);//{employer: 'Softuni', sayHi: ƒ}
    console.log(employee.__proto__.sayHi);//ƒ (){ console.log('Hi');}    
    employee.sayHi()//HI