let arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// arr.forEach(row=>{
// console.log(row);
// row.forEach(col=>{
//     console.log(col)
// })
// })

for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
        console.log(arr[row][col]);
        
    }
    
}