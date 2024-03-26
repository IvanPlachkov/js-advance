function solve(){
  let createButton = document.querySelector('.site-content aside button.btn.create');
  createButton.addEventListener('click',creatArticleHandler);

  function creatArticleHandler(e) {
   e.preventDefault(); // kogato imame forma i serefreshva stranicata se polzva tova prefentDefault()
    let authorInput = document.querySelector('#creator');
    let titleInput = document.querySelector('#title');
    let categoryInput = document.querySelector('#category');
    let contentTexArea = document.querySelector('#content');

    let articalElement = document.createElement('article');
// izgrajdame red po red HTML elementite zadadeni ot usloviet posle shte se zaka4at za articaElemenet
    let titleHeading = document.createElement('h1');
    titleHeading.textContent = titleInput.value ;

    let categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = 'Category';
   let categoryStrong = document.createElement('Strong');
   categoryStrong.textContent = categoryInput.value;
   categoryParagraph.appendChild(categoryStrong);

   let creatorParagraph = document.createElement('p')
   creatorParagraph.textContent ='Creator';
   let createStrong = document.createElement('Strong');
   createStrong.textContent = authorInput.value;
   creatorParagraph.appendChild(createStrong);

   let contentParagraph = document.createElement('p');
   contentParagraph.textContent = contentTexArea.value;

   let buttonsDiv = document.createElement('div');
   buttonsDiv.classList.add('buttons'); // polzvame classList zadavame class  'buttons'na buttonsDiv

let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.classList.add('bnt','delete');
deleteButton.addEventListener('click',deleteArticleHandler)// zaka4ane funkcii kum butonite

let archiveButton = document.createElement('button');
archiveButton.textContent = 'Archive';
archiveButton.classList.add('bnt','archive');
archiveButton.addEventListener('click', archiveArticleHandler)// zaka4ane funkcii kum butonite

//zaka4ane na butoni
buttonsDiv.appendChild(deleteButton);
buttonsDiv.appendChild(archiveButton);
//zaka4ane na elementi
articalElement.appendChild(titleHeading);
articalElement.appendChild(categoryParagraph);
articalElement.appendChild(creatorParagraph);
articalElement.appendChild(contentParagraph);
articalElement.appendChild(buttonsDiv);

let postsSection = document.querySelector('.site-content main section');
postsSection.appendChild(articalElement);
  }
// hoistvat se tezi funkcii i nqma problem
function deleteArticleHandler(e) {
   let deleteButton = e.target;
   // ot html primerniq v uslovie se ka4vamedve niva nagore do article i go triem
   let articleTOdelete = deleteButton.parentElement.parentElement;
   articleTOdelete.remove();
}
function archiveArticleHandler(e) {
   let articleToArchive = e.target.parentElement.parentElement;
   
   let archiveOl = document.querySelector('.archive-section ol');

   let archiveLis = Array.from(archiveOl.querySelectorAll('li'));
   let articleTittleHeading = articleToArchive.querySelector('h1');
   let articleTittle = articleTittleHeading.textContent;

   let newTitleLi = document.createElement('li');
   newTitleLi.textContent = articleTittle;

   articleToArchive.remove(); // kato go premesti ot osnovniq prozorec v arhimda go iztrie ot tam

   archiveLis.push(newTitleLi);
   archiveLis
    .sort((a,b)=> a.textContent.localeCompare(b.textContent))
    .forEach(li => archiveOl.appendChild(li));
     }
  }
