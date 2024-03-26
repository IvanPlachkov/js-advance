function solve(matrix){
let normalDiagonal =0;
let backDiagona =0;
for (let row = 0; row < matrix.length; row++) {
    
      normalDiagonal += matrix[row][row];
      backDiagona += matrix[row][matrix[row].length-1-row]
    
    
}
console.log(normalDiagonal,backDiagona);
}solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])