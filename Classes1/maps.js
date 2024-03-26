
let map = new Map();
map.set('name', 'pesho')
map.set('age', 20)

console.log(map.get('name'));
console.log(map.get('age'));


if (map.has('name')) {
    map.delete('name');
}
map.clear();

//Itearete Map
let people = new Map();
people.set(100, 'Pehos');
people.set(200, 'Gosho');
people.set(300, 'Stamas');
people.set(400, 'Maria');

let keys = people.keys();
console.log(keys);
let values = people.values();
console.log(values);

for (const name of people.values()) {
    console.log(name);
}
for (const number of people.keys()) {
    console.log(number);
    console.log(people.get(number));
}
console.log(people.entries());
//{[ 100, 'Pehos' ],
//[ 200, 'Gosho' ],
//}
for (const kvp of people.entries()) {
    console.log(`number ${kvp[0]} is associated with the name: ${kvp[1]}`);
}

for (const [number, name] of people.entries()) {
    console.log(`number ${number} is associated with the name: ${name}`);
}

//Map with object key

let firstEmployee = { name: 'pesho', age: 20 }


let employeMap = new Map();

employeMap.set(firstEmployee, 'programmer');
employeMap.set({ name: 'Gosho', age: 18 }, 'Manager');

console.log(employeMap);
