function solve(n,m){
let result = 0;
let num1 = +n
let num2 = +m

for (let index = num1; index <= num2; index++) {
    result += index;
    
}
console.log(result);
}solve('1', '5' )