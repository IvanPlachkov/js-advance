let { expect} = require ('chai');
let StringBuilder = require('../13.stringBuilder');
console.log(StringBuilder);
console.log(expect);

describe('StringBuilder', () => {
    describe('constructor', ()=> {
        it('Should initialize with empty array if undefind is pass', ()=> {
            let sb = new StringBuilder(undefined);
            expect(sb.toString()).to.equal('');
        })
    })
})
// not finish