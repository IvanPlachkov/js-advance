// function division(a,b) {
//     if(b == 0 ) {
//        // throw new Error('Divison with zero!')
//        // throw new RangeError('Divison with zero!')
//         throw{
//             massage:'Divison with Zero!',
//             firstNumber: a,
//         };
//     }
//     return a / b;
// }
// console.log(division(10,2));
// console.log(division(10,0)); 

function division(a,b) {
    if(b == 0 ) {
        throw new Error('Divison with zero!')
       // throw new RangeError('Divison with zero!')
        // throw{
        //     massage:'Divison with Zero!',
        //     firstNumber: a,
        // };
    }
    return a / b;
}
try{
    console.log(division(10,2));
    console.log(division(10,0));
}catch(error){
    //handling
console.log(error);
}finally{
    console.log(('This will always execute'));
}
console.log('Finish');