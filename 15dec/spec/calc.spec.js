const Calculator = require('../src/calc');
let calculator;
beforeEach(function(){
    //console.log('called before each test case');
    console.log('creating calc obj');
    calculator=new Calculator();
});
describe("calculator test suite",function(){
    it("add function test",function(){
        expect(calculator.add(1,1)).toEqual(2);
    });
});