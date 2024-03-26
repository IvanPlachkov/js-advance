function solve(input){
    let rezult=0;
  let inputType =  typeof(input)
if( inputType === 'number'){
rezult= Math.pow(input,2)* Math.PI;
console.log(rezult.toFixed(2))
}else{
    console.log(`We can not calculate the circle area, because we receive a ${input}}.`)
}
}solve("name")