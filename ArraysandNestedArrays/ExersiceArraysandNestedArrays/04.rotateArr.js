function solve(arr,rotation){
let realRotations = rotation % arr.length;
///for (let i = 0; i < realRotations; i++) { 
    // let el = arr.pop();
    // arr.unshift(el);
    //}
    //variant 2
    let element = arr.splice(arr.length - realRotations,realRotations);
    arr.splice(0,0,...element)

console.log(arr);
}solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)