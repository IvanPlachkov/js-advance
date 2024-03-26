const sum = require('../sumOfNumber');
const assert = require('chai').assert;
describe('test numbers',() => { 
it('It shoud add positive numbers', () => {
  //Arange
let input = [1,2,3,4,5];
let expectetResult = 15;

  //Act
  let actualResult = sum(input);

  //Asert
//  if(expectetResult == actualResult){
//     console.log('Passing');
//  } else {
//     throw new Error ( 'Sum not be 15');
//  }
assert.strictEqual(actualResult,expectetResult)
});
it('Shoud pass negative numbers',()=>{
  let input = [ -1,-2,-3,-5,-6]
  let expectedResult = sum(input);
  let actualResult = -1
  assert.notEqual(actualResult,expectedResult)
})
});