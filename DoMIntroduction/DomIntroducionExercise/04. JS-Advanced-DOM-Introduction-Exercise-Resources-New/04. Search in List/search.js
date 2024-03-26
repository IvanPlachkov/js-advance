function search() {
   // 1. Select elements
   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll('#towns li'));
   
   //2. Paarse serch text
   let searchText = searchElement.value ;
      // 3. Main logik
      // a.clear result from previoes search
      allLiElements.forEach(el => {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
        
      });
      // b. filter all Li`s witch contain the search text
                     // AND -> bold and underline matching Li`s
      let targetLI = allLiElements
      .filter(x => x.textContent.includes(searchText))
      .forEach(x => {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
         console.log(x);
      })
      // c. show number of matches in result div
      let resultDiv = document.getElementById('result');
      resultDiv.textContent = `${targetLI.length} matches found`;
   }
