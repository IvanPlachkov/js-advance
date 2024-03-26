let number = [2,10,5,4]
number.sort() 
function compare (a ,b){
    if(a >b){
    return 1;
}else if (b > a ) {
    return - 1
}else{
    return 0
}
}
number.sort(compare)
console.log(number);// 2,4,5,10


number.sort((a,b)=> a- b)
console.log(number)

let cars = ['Bmw','audi','Opel','Honda']
cars.sort((a,b)=>a.localeCompare(b));
console.log(cars);