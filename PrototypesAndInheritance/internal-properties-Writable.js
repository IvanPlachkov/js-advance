let person = {
    name:'pesho',
    age:20,
    hobby: 'footbal'
}
console.log();

// Add readonly property
Object.defineProperty(person,'name',{
    writable:false 
})
console.log(person);
person.name = 'Gosho';
console.log(person);