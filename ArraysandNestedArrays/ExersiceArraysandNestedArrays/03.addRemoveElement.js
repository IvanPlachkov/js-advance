function solve(arr){
    let result =[]
    let sum =0;
for (let i = 0; i < arr.length; i++) {
    let op = arr[i];
   switch (op) {
    case 'add':
        sum = i +1
        result.push(sum)
        break;
       case 'remove':
        sum = i-1;
        result.pop()
        break;
          }
   }
if(result.length <= 0){
    console.log('Empty');
}else{
    console.log(result.join('\n'));
}
}solve( ['add','add','add','add'])