function sumTable() {
let costTdElement = Array.from(document.querySelectorAll('td:nth-child(2)'));
let sumElement = costTdElement.pop();
let sum = costTdElement.reduce((a,x)=> a + Number(x.textContent),0);
sumElement.textContent = sum;
}