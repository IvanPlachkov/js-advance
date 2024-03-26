function solve(arr,step){
let result = [];
for (let index = 0; index < arr.length; index+=step) {
    result.push(arr[index]);
    
}

    // 02 variant
// let filterArry = arr.filter((el,index)=>index % step ===0);

// 03 variant
// let result =[];
// arr.forEach((element,i)=> {
//     if(i % step ===0){
//         resultArry.push(element)
//     }
  
// });

console.log(result)

}solve(['5','20','31','4','20'],2)