const pizzUni = require('../pizza-place');
const{expect,assert} = require('chai');

describe("Piza place tests", () => { 
    describe("makeAndOrder tests",  () => { 
         //order piza only
      it('Should return confirmation massage when pizza is order',()=>{
        let order = {
            orderredPizza: 'Margarita',
        }
        expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderredPizza}`)
      });
     

      //order pizza and drink
      it('Should return confirmation massage when pizza and drink is ordered',()=>{
        let order = {
            orderredPizza: 'Caprica',
            orderedDrink: 'Coke'
        }
        expect(pizzUni.makeAnOrder(order)).to.equal(`you just ordered ${order.orderredPizza} and ${order.orderedDrink}`)
      });
      it('Should throw when there is no ordered piza',()=>{
        let order = {}
            expect(() => pizzUni.makeAnOrder(order)).to.throw()
        
       
      });
      it('Should throw when there is no ordered drink',()=>{
        let order = {
        orderedDrink: 'Pepsi'}
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        
             });
             it('Should throw when  is no ordered ',()=>{
                
                    expect(() => pizzUni.makeAnOrder()).to.throw()
                
               
              });
    }); 
    describe("getRemainingWork tests ",  () => { 
      it(`Should return all orders comleteed when two ready status  are givn`, ()=>{
        let statusArr = [
          {pizzaName:'Margaritta',status:'ready'},
          {pizzaName:'Italiana',status:'ready'}
        ];
        expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders complete!')
      })
      it(`Should return remaining piza when thereis one pending order`, ()=>{
        let statusArr = [
          {pizzaName:'Margaritta',status:'preparing'},
          {pizzaName:'Italiana',status:'ready'}
        ];
        expect(pizzUni.getRemainingWork(statusArr)).to.equal('the following pizas are still!')
      })
    }); 
    describe("orderType tests",  () => { 
      it('Should return total sum when type of order is Delivery',()=>{
        let totalSUm = 10;
        let orderType = 'Delivery';
        expect(pizzUni.orderType(totalSUm,orderType)).to.equal(totalSUm)
      });
      it('Should return totalSum with DIscound  when they type of order is Carry out',()=>{
        let totalSUm = 10;
        let orderType = 'Carry out';
        expect(pizzUni.orderType(totalSUm,orderType)).to.equal(9)
      })
      it('Should return totalSum with DIscound  when using floating point number',()=>{
        let totalSUm = 10.50;
        let orderType = 'Carry out';
        expect(pizzUni.orderType(totalSUm,orderType)).to.equal(9.45)
      })
     
    }); 
    describe("makeAndOrder tests",  () => { 
      
    }); 
   
    });