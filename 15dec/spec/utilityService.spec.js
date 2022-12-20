const utilityService = require('../src/utility');
const Calculator = require('../src/utility');
describe("testing utility function of utilityService",function(){
    it("should return hello",function(){
        expect(utilityService()).toMatch("hi");
    });
});