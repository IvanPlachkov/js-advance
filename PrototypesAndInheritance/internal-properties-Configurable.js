let person = {
    name:'pesho',
    age:20,
    hobby: 'footbal'
}
console.log(Object.getOwnPropertyDescriptor(person,'name'));

//Set Configurable to false
Object.defineProperty(person,'name',{
    configurable:false 
});
Object.defineProperty(person,'name',{
    value:'Gosho' 
})
Object.defineProperty(person,'name',{
    writable:false
});
// Object.defineProperty(person,'name',{
//    enumerable:false 
// });
delete person.name;
console.log(Object.getOwnPropertyDescriptor(person,'name'));