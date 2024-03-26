let number = [10, 20, 30, 40]
let lastElement = number.pop()
console.log(number)
console.log(number.length)
console.log(lastElement);


let arr = [10, 20, 30, 40]
let lastElement1 = poop(arr)
console.log(arr)
console.log(arr.length)
console.log(lastElement1);
function poop(arr) {
    let lastElement1 = arr[arr.length - 1];
    arr.length = arr.length - 1
    return lastElement1
}

