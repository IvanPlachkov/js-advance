const assert = require('chai').assert
const sum = require('../04.sumOfNumbers')

describe('Test sum functionallity', ()=> { // kogato se pishat pove4e testov s discribe gi obedinqvame v edin skoup
it('it shoud add positive numbers',() => {

   //Arage
   let input = [1,2,3,4,5]
   let expectedResult = 15;
   // Act 
   let actualResult = sum(input);
   //Assert
//    if(expectedResult=== actualResult){
//     console.log('Passing');
//    }else{
//     throw new Error ('Sum shoid be 15')
//    }

assert.strictEqual(actualResult, expectedResult)
});

it('Shoud return fale when adding positive numbers' , ()=> {
    //Arage
   let input = [10,20,30,40,50]
   let expectedResult = 15;
   // Act 
   let actualResult = sum(input);
   assert.equal(actualResult,expectedResult)// noteEqual e ot saita na chai komanda
})
})