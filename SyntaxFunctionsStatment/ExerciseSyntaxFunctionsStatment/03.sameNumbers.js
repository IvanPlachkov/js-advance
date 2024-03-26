function solve(num){
 let numString= String(num)
 let sum =numString.length >0 ? Number(numString[0]):0;
 let isSame = true;
 for (let index = 0; index < numString .length-1; index++) {
    let element = Number(numString[index]);
    let nextelement = Number(numString[index +1]);
   if(element !== nextelement){
    isSame = false;
   }
    sum +=  nextelement;
   
 }
 console.log(sum);
 console.log(isSame)
}solve(2222222)