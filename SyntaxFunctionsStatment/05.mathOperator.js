function solve(num1,num2,op){
let result = 0;
switch(op){
    case "+": result=num1 + num2;
    break;
    case "-": result=num1 - num2;
    break;
    case "*": result=num1 * num2;
    break;
    case "/": result=num1 / num2;
    break;
    case "%": result=num1 % num2;
    break;
    case "**": result=num1 ** num2;
    break;
}
console.log(result);
}solve(3, 5.5, '*' )