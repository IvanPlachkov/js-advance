let numberOperations = require('../numberOperations')
let{assert} = require('chai')


describe("numberOperations", function(){
    describe("powerNumber", function(){
        it("Should return number to the secound power", function(){
            assert.strictEqual(numberOperations.powNumber(3),9)
            assert.strictEqual(numberOperations.powNumber(1.5),1.5 *1.5)
            assert.strictEqual(numberOperations.powNumber(-4),16)
            assert.strictEqual(numberOperations.powNumber(-4),16)
            assert.strictEqual(numberOperations.powNumber(0),0)
    });
    });
    describe("numberChecker", function(){
        it("Should correctly coece input argument", function(){
            assert.strictEqual(numberOperations.numberChecker("3"),'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(""),'The number is lower than 100!')
            
    });
    it("Should throw when passed a argumenet tht coerces to NaN", function(){
        assert.throw(()=>numberOperations.numberChecker("abc"),Error ,'The input is not a number!')
        assert.throw(()=>numberOperations.numberChecker(undefined),Error ,'The input is not a number!')
        assert.throw(()=> numberOperations.numberChecker("123b"),'The input is not a number!')
        
     }); 

     it("Should return correct string when argument is a valid number", function(){
        assert.strictEqual(numberOperations.numberChecker("99"),'The number is lower than 100!')
        assert.strictEqual(numberOperations.numberChecker("-100"),'The number is lower than 100!')
        assert.strictEqual(numberOperations.numberChecker("100"),'The number is greater or equal to 100!')
        assert.strictEqual(numberOperations.numberChecker("123.51"),'The number is greater or equal to 100!')
        
            });
            describe('sumArrays',function() {
                it("Should return empty array when called called with empty array", function(){
                    assert.deepEqual(numberOperations.sumArrays([],[]),[]);
                    //assert.deepEqual(numberOperations.sumArrays([1],[2]),[3]);
                               
            });
            it("Should return empty array when one parameter is an empty array", function(){
                assert.deepEqual(numberOperations.sumArrays([1,2,3],[]),[1,2,3]);
                assert.deepEqual(numberOperations.sumArrays([],[1,2,3]),[1,2,3]);
                
                
                 });
             it("Should return correct result when both parameteres are non empty equal array leangth arrays", function(){
                    assert.deepEqual(numberOperations.sumArrays([1,2,3],[2,3,4]),[3,5,7]);
                    assert.deepEqual(numberOperations.sumArrays(['a','b','c'],['b','c','d']),['ab','bc','cd']);
                    
                    
                     });
                     it("Should return correct result when both parameteres are non empty equal arrays of difrend leangth ", function(){
                        assert.deepEqual(numberOperations.sumArrays([1,2,8],[2,3,]),[3,5,8]);
                        assert.deepEqual(numberOperations.sumArrays(['a','b','c'],['b','c']),['ab','bc','c']);
                        
                        
                         });
            });
           
    });
});