let uniqueNumbers = new Set ();
uniqueNumbers.add(2)
uniqueNumbers.add(10)
uniqueNumbers.add(2)
uniqueNumbers.add(4)
console.log(uniqueNumbers);

for (const num of uniqueNumbers) {
    console.log(num);
}

let numArray = [...uniqueNumbers] 

console.log(numArray);