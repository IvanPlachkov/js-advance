function subtract() {
    //1. Get Element containig input:
    let num1Element = document.getElementById('firstNumber');
    let num2Element = document.getElementById('secondNumber');
    //2. Extrat.Parse Input data
    let num1 = Number(num1Element.value);
    let num2 = Number(num2Element.value);
    //3.Base logic for the task
    let result = num1 - num2;
    //4. Display result in DOom
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;




}