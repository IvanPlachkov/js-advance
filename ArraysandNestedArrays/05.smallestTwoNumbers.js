function solve(arr){
arr.sort((a,b)=> a-b)
let numbers = arr.slice(0,2).join(' ')
console.log(numbers);

}solve([30, 15, 50, 5] )