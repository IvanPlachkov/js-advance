function solve() {
 //1.select element
let textAreaElemet = document.getElementById('input');

 //2. extract text from  text area
let text = textAreaElemet.value ;
 //3. Split text by '.' to get sentences
let sentences = text.split('.').filter(x => x !== '').map(x => x + '.');

 //4. group sentnces buy 3  in paragraphs

 //   Purci variant
//let paragraphsSentences = [];
// for (let index = 0; index < array.length; index++) {
//   let paragraphIndex = Match.trunc(index/3);
//   paragraphsSentences[paragraphIndex] = paragraphsSentences[paragraphIndex] === undefined
//   ? sentences[index]
//   : paragraphsSentences[paragraphIndex] + sentences[index];
// }
let paragraphRoof = Math.ceil(sentences.length / 3);

 //5. insert paragraphs int Dom
 let resultDiv = document.getElementById('output');
 for (let index = 0; index < paragraphRoof; index++) {
  resultDiv.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`;
  
 }
}