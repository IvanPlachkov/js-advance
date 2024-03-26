function solve(arr) {
arr.sort((a,b)=> a-b);
let resultArr = [];
// let startIndex = 0;
// let endIndex = arr.length -1;
// while(startIndex < endIndex){
//     resultArr.push(arr[startIndex++] )
//     resultArr.push(arr[endIndex --])
// }
while(arr.length > 0){
    resultArr.push(arr.shift());
    resultArr.push(arr.pop())
    
    
}
return resultArr
} 
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));