const greeting=require('../src/app');
afterEach(function(){
    console.log('called after each test case,mostly resetting');
});
describe("testing greeting function",function(){
    it("test return value of good morning",function(){
        expect(greeting()).toEqual("good morning");
    });
});