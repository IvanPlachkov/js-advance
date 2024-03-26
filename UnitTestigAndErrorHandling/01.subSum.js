function subSum(numbers,startIndex,endINdex) {
 let result = numbers
 .slice(startIndex,endINdex)
 .reduce((a, x) => a + x,0);
 return result;
}

function test1SubSum() {
    //Arange
    let numbers = [10,20,30,40,50,60];
    let startIndex =3;
    let endIndex = 300;
    let expectedResult = 150;
    // Act
    let actualResult = subSum(numbers,startIndex,endIndex)

    // Asset
    if(actualResult === expectedResult){
console.log('Test 1 is passing');
    }else{
        console.error('Testing 1 failed')
    }
}
function test2SubSum() {
    //Arange
    let numbers = [1.1, 2.2,3.3 ,4.4 ,5.5 ];
    let startIndex = -3;
    let endIndex = 1;
    let expectedResult = 3.3;
    // Act
    let actualResult = subSum(numbers,startIndex,endIndex)

    // Asset
    if(actualResult === expectedResult){
console.log('Test 2 is passing');
    }else{
        console.error('Testing 2 failed')
    }
}
test1SubSum()
test2SubSum()