let person ={
    name:'Pesho Goshev',
    age:22,
    greet(){console.log(`Hello my name is ${this.name}`)}
}

let employee = {
    employee:111,
    department: 'development'
}

console.log(employee);
console.log(employee.__proto__);
console.log(Object.getPrototypeOf(employee));
console.log(employee.hasOwnProperty('department'));
Object.setPrototypeOf(employee,person)
//Use prototype property
console.log(employee.name); 
//Loop thorugh al properties including prototypes
for (const key in employee) {
    //console.log(key);// 
    if(employee.hasOwnProperty(key)){
        console.log('Own properties',key);
    }else{
        console.log('Prototype`s property',key);
    }
}

//Caling metod
employee.greet();