let map = new Map ();
map.set("one",1)
map.set("eight",8)
map.set("two",2)


let mapEntries = map.entries();  
let number = Array.from(mapEntries) 

let numbersDestructured = [...map.entries()] 
console.log(number);

number
.sort((a,b)=> a[1] - b[1]) 
.forEach(x => {
    console.log(`${x[0]} --- ${x[1]}`); //one --- 1
                                        // two --- 2
                                       // eight --- 8
})
console.log(number);//[ [ 'one', 1 ], [ 'two', 2 ], [ 'eight', 8 ] ] sortirano 

console.log(numbersDestructured);//[ [ 'one', 1 ], [ 'eight', 8 ], [ 'two', 2 ] ] ne e sortirano

// Convert to Map again
let orderMap = new Map(number); 