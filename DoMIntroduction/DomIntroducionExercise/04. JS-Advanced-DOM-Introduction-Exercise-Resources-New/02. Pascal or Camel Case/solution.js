function solve() {
  //1.Select element
let textElement= document.querySelector('#text');
let namingConvetionElement = document.querySelector('#naming-convention');
  //2.Parse Data
let text = textElement.value ;
let namingConvetion=  namingConvetionElement.value;
  //3.Maing logik
  let result = applyNamingConvention(text,namingConvetion)
  //4.display DOm
let spanElement = document.getElementById('result');
spanElement.textContent=result

function applyNamingConvention(text,convention){
  const convetionSwitch = {
    'Pascal Case': () => text
    .toLowerCase()
    .split(' ')
    .map(x=> x[0].toUpperCase() + x.slice(1))
    .join(''),

    'Camel Case': () => text
    .toLowerCase()
    .split(' ')
    .map((x,i)=> x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
   

    .join(''),
    default: () => 'Error!'
   
  };
  return (convetionSwitch[convention] || convetionSwitch.default) ();
 }




}