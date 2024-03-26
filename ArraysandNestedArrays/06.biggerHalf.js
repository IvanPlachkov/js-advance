function solve(arr){
// let newLength= Math.floor(arr.length/2) ;
// let numbers = [];
// let sortedArr = arr.sort((a,b)=> a-b);
// for (let i =newLength; i < sortedArr.length; i++) {
//     if(i %2 ===0){
//         numbers.push(sortedArr[i])
//     }else if(i %2 ===1){
//         numbers.push(sortedArr[i])
//     }
    
// }
// console.log(numbers);


arr.sort((a,b)=>b-a);
let number =[];
let sumIndex=0
sumIndex = arr.length;
if(sumIndex % 2 ===0){
    number = arr.slice(0,sumIndex/2)
    console.log(number.reverse());
}else if(sumIndex % 2 ===1){
    number = arr.slice(0,(sumIndex/2)+1)
    console.log(number.reverse());
}


}solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])