let {expect, assert} = require('chai');
let lookupChar = require ('../03charLookup')

describe('lookupChar', ()=> {
    it('Shoud return undefind when first parameter is not a string',() => {
        expect(lookupChar(undefined,1)).to.equal(undefined);
        expect(lookupChar(1,1)).to.equal(undefined);
    })
    it('Shoud return undefind when second parameter is not a string',() => {
        expect(lookupChar('some', undefined)).to.equal(undefined);
        expect(lookupChar('some', null)).to.equal(undefined);
        expect(lookupChar('some', 1.23)).to.equal(undefined);
        expect(lookupChar('some', '1')).to.equal(undefined);
       
    })
    it('Shoud return "Incorrect index" when second parameter is not within index range',() => {
        expect(lookupChar('some', -1)).to.equal("Incorrect index");
        expect(lookupChar('some', 4)).to.equal("Incorrect index");
               
    })
    it('Shoud return correct char when both parameters are valid',() => {
        expect(lookupChar('other', 0)).to.equal("o"); // o4akva pyrvata bukva na other da e O
        expect(lookupChar('other', 3)).to.equal("e");// ochakva 3ti index tata bukva na othe da e E
               
    })
});