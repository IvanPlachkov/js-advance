function solve(numArr) {
    let currentBigArr = [numArr[0]]
    for (let i = 1; i < numArr.length; i++) {
      let el = numArr[i]                            // tova RABOTI
        if(el > currentBigArr[currentBigArr.length -1]){
                currentBigArr .push(el)
        }
    }
    console.log(currentBigArr);
    //--------------
//     let resultArr = aggraged(numArr,reducer,[])
//     function reducer(acc,el) {
//         if(acc.length === 0 || acc[acc.length -1] < el){
//             acc.push(el);
                                             //   NERABOTI
//         }
//         console.log(acc);
//     }
//     function aggraged(arr,reduceFunc,initiaValue) {
//         for (let i = 0; i < numArr.length; i++) {
//             let el = arr[i]  
//              initiaValue = reduceFunc(initiaValue,el)
//     }
//     console.log(initiaValue)
// }
//-----------
// let  resultArr = numArr.reduce((acc,el)=>{
//     if(acc.length ===0 || el>=acc[acc.length -1]){

//     }
//     return acc;
// },[])
// return resultArr;

  
  }solve([1,3,8,4,10,12,3,2,24] )