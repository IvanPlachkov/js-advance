function solve(arr){

let max = Number.NEGATIVE_INFINITY;
for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
        if(arr[row][col] > max){
            max = arr[row][col]
        }
        
    }
    
}
console.log(max);

}solve([[20, 50, 10],

    [8, 33, 145]])