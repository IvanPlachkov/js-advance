function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      // 1. select elements for input
      let textAreaElement = document.querySelector('#inputs textarea')
      // 2. extract/parse input data
      let text = textAreaElement.value ;
      let inputArr = JSON.parse(text);

      //3. Add object to keep resturant and workers data
      let resturants ={};
      
      // 4. fill resturantobject with input data
      for (let i = 0; i < inputArr.length; i++) {
       let[resturantName,workersString]= inputArr[i].split(' - ');
         let inputWorkers = workersString.split(', ').map(w => {
            let [name,salary]= w.split('')
            return{ name, salary:Number(salary)};
         })
         if(!resturants[resturantName]){
            resturants[resturantName]= {
               workers:[],
               resturantName: resturantName,
               getAvarageSalary: function(){
                  return this.workers.reduce((acc,el)=> acc + el.salary,0)/ this.workers.length
               }
            };
          
         }
         resturants[resturantName].workers= resturants[resturantName].workers.concat(inputWorkers);
      }
      // 5. calculate best resturant
      let sortedResturants = object.values(resturants)
 .sort((a,b)=> b.getAvarageSalary() - a.getAvarageSalary());
 let bestResturant = sortedResturants[0];
 let sortedWorkers = bestResturant.workers.sort((a,b)=> b.salary - a.salary);
 let averageSalary = bestResturant.getAvarageSalary().toFixed(2);
 
 let bestSalary = sortedWorkers[0].salary.toFixed(2)
 let topResturantString = `Name: ${bestResturant.resturantName} Avarage Salary: ${averageSalary } Best Salary: ${bestSalary}`
 let workersString = sortedWorkers
 .map(x => `NameL: ${x.name} With Salary: ${x.salary}`)
 .join(' ');
      //6. insert best resturant and worker data into DOom
      let  bestResturantElement = document.querySelector('#bestRestaurant p');
      let workersElement = document.querySelector('#worker p');
      bestResturantElement.textContent = topResturantString;
      workersElement.textContent = workersString;
   }
}
