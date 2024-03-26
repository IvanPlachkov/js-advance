function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      // 1. select elments
      let searchElement = document.getElementById('searchField');
      let rowElements= Array.from(document.querySelectorAll('tbody tr'));
       // 1a extract /parse values
      let searchText = searchElement.value;
            //1b - clear style form previos search
            rowElements.forEach(el=>{
               el.className= '';
            })
      //2. find Match row elements to text
        //3. modify style for matching rows
      let filterdRowls = rowElements.filter(el => {
         let value = Array.from(el.children) 
         if(value.some(x => x.textContent.includes(searchText))){
                  el.className = 'select';
         }
      });
       //4.clear text fld
      searchElement.values= '';
     
   }
}
