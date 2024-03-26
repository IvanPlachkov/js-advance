function calc() {
    let num1Element = Number( document.getElementById('num1').value);
    let num2Element = Number(document.getElementById('num2').value);
    let sumElement =  document.getElementById ('sum');
          
    let sum = (num1Element + num2Element);
    
    sumElement.value = sum;
}
