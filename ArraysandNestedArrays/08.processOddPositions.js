function solve(arr){
    let newArr =[]
for (let i=0;  i < arr.length ;i++) {
    if(i %2 !==0){
        newArr.push(arr[i])
       }
    }
let result = newArr.map(a=> a *2)
.reverse()
.join(' ');
console.log(result);
}solve([10, 15, 20, 25])