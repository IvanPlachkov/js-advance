function solve(inputArr){
    obj={}; 
for (let index = 0; index < inputArr .length; index+=2) {
    obj[inputArr[index]] = inputArr[index +1]; 
}
return obj;
}console.log(solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']))