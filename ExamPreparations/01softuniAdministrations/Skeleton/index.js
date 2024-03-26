function solve() {
   let buttonElement = document.querySelector('.admin-view .action button');
   let modules = {};
   
buttonElement.addEventListener('click',(e) => {
    e.preventDefault(); 

    let lectureNameElement = document.querySelector('input[name="lecture-name"]')
    let lectureDateElement = document.querySelector('input[name="lecture-date"]') 
    let lectureModuleElement = document.querySelector('select[name="lecture-module"]') 
   
    if(!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value === 'Select module'){
        return; 
    }
    if(!modules[lectureModuleElement.value]){
        modules[lectureModuleElement.value] = [];
    }
    let currentLecture = {name:lectureNameElement.value, data:formatDate(lectureDateElement.value)}
    modules[lectureModuleElement.value].push(currentLecture);
   
   creatTrainings(modules)
   lectureDateElement.value = '';
   lectureNameElement.value = '';
   lectureModuleElement.value = 'Select';
}); 
function creatTrainings(modules){
    let modulesElement = document.querySelector('.modules');
    modulesElement.innerHTML ='';
    
    for (const moduleName in modules) {
        let moduleElement = creatModule(moduleName);
        let lectureLIstElements = document.createElement ('ul');
                let lectures = modules[moduleName];
        // sort lectures
        lectures
        .sort((a,b)=> a.date.localCompare(b.date))
        .forEach(({name,date}) => { 
          let lectureElement  = creatLecture(name,date, moduleName);
          lectureLIstElements.appendChild(lectureElement);

        let deleteButtonElemenet = lectureElement.querySelector('button')
        deleteButtonElemenet.addEventListener('click', (e)=>{
           
            modules[moduleName]= modules[moduleName]
            .filter(x => !(x.name == name && x.date == date));
            if(modules[moduleName].length ==0){
                delete modules[moduleName];
                
        e.currentTarget.closest('.module').remove()
            }else{
                e.currentTarget.parentNode.ramove();
            }
            
          });
        });
 moduleElement.appendChild(lectureLIstElements);
 modulesElement.appendChild(moduleElement);
        }
     
    }
   

function creatModule(name){
    let divElement = document.createElemenet('div');
    divElement.classList.add('module');

    let hedingElement = document.createElement('h3');
    hedingElement.textContent = `${name.toUpperCase()}-MODULE`;

   

    divElement.appendChild(hedingElement);
   

 return divElement;
}
function creatLecture(name,date){
     //Creat lecture
    let liElement = document.createElement('li');
    liElement.classList.add('flex');

    let courseHedingElement = document.createElement('h4');
   courseHedingElement.textContent =
         `${name} - ${date}`;

         let deleteBottonElement= document.createElemenet('button');
         deleteBottonElement.classList.add('red');
         deleteBottonElement.textContent = 'Del';
         
         liElement.appendChild(courseHedingElement)
         liElement.appendChild(deleteBottonElement)

         return liElement;
}
function formatDate (dataInput){
    let[date, time] = dataInput.split('T'); 
    date = date.replace(/-/g, '/'); 
  
    return `${date} - ${time}`;
    
}
}
