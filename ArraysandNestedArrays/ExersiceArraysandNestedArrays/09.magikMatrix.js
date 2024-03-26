function solve(arr) {
    let magikSum = Number.MIN_SAFE_INTEGER;
    let isMagikMatrix= true;
    for (let row = 0; row < arr.length; row++) {      
        let sum=0              
                                     
        for (let col = 0; col < arr[row].length; col++) {
                               
           let el = arr[row][col];
           sum+=el;
                                
        }
        if(magikSum === Number.MIN_SAFE_INTEGER){
            magikSum = sum;
        }
        if(sum !== magikSum){
          isMagikMatrix = false;
         }
         }
   
   
    for (let col = 0; col < arr[0].length; col++) { 
        let sum=0
        for (let row = 0; row < arr.length; row++) {
            
           let el = arr[row][col]; 
           sum+=el;
        }
        if(sum !== magikSum){
            isMagikMatrix = false;
           }
    }
    return isMagikMatrix;
}console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
//  Second answer
// function solve(matrix) {
//     let magikSum = Number.MIN_SAFE_INTEGER;
//     let isMagikMatrix = true;
//     for (let row = 0; row < matrix.length; row++) {
//     let sum = 0;
//     let colSUm=0;
//      for (let col = 0; col < matrix[row].length; col++) {
//            let element = matrix[row][col];
//            sum+=element;
//            let el = matrix[col][row];
//            colSUm +=el;
//       }
//      if(magikSum === Number.MIN_SAFE_INTEGER){
//            magikSum = sum;
//      }
//      if( sum!==magikSum || colSUm !==magikSum){
//            isMagikMatrix = false;
//      }
     
//     }
//     return isMagikMatrix
//  }console.log(solve([[4, 5, 6],
//                      [6, 5, 4], 
//                      [5, 5, 5]]));;