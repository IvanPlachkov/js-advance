let numbers = {
    'two':2,
    'eight':8,
    'one':1,
}

let keys = Object.keys(numbers);
let values = Object.values(numbers);
let entries = Object.entries(numbers);
console.log(keys);
console.log(entries);

let sortedArray = Object.entries(numbers)
.sort((a,b)=>a[1] - b[1]);
console.log(sortedArray); // [ [ 'one', 1 ], [ 'two', 2 ], [ 'eight', 2 ] ]

let sortedObject = Object.fromEntries(sortedArray)
console.log(sortedObject);//{ one: 1, two: 2, eight: 2 }