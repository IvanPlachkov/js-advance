const isSymmetric = require ('../isSymmetric');
const {assert, expect , should } = require('chai');

describe('Test 05.chekSimetrick functionality', ()=> {
    it('Shoud pass when symetric array is provide',()=>{
        let input = [1,2,3,2,1];
        let espectedResult = true;
        let actualREsult = isSymmetric(input)
        assert.equal(actualREsult,espectedResult)
    })
    it('Shoud fail when non  symetric array is provide',()=>{
        let input = [1,2,3,3,1];
        let espectedResult = false;
        let actualREsult = isSymmetric(input)
        assert.equal(actualREsult,espectedResult)
    });
    it('Shoud fail when non   array is provide as argumnet',()=>{
        // edna poverka da imapove4e  ot edin asserti
        let espectedResult = false;
        // v tozi it gi vzema v edin keis vsi4kite i edno da grumne nqma da e veren
        // po e dobre vseki assert da e v otdelen it()
        assert.equal(isSymmetric(null),espectedResult)
        assert.equal(isSymmetric({}),espectedResult)
        assert.equal(isSymmetric(0),espectedResult)
        assert.equal(isSymmetric(true),espectedResult)
        assert.equal(isSymmetric(undefined),espectedResult)
        assert.equal(isSymmetric(''),espectedResult)
    })
    // Check for empty array izpolzvane na expect pri koito mogat da e polzvat dumi ot saita chai no e po gadno
    it('Shoud pass when an empty array is provided',()=>{
        let actualREsult = isSymmetric([]);
        expect(actualREsult).to.be.true;
    });
    it('Shoud pass when string array is provided',()=>{
        let actualREsult = isSymmetric(['pesho','gosho','pesho']);
        expect(actualREsult).to.be.true;
    });
    it('Shoud fail',()=>{
        let actualREsult = isSymmetric(['1',1]);
        expect(actualREsult).to.be.false;
    })
})