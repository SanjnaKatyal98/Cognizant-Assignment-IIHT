let {hello,length,upper} = require('./testdemo');

describe(" testing",function(){
    it("should return hello world",function(){
        expect(hello()).toEqual("Hello World");
    })
    it("should return length",function(){
        let str = "rhon"
        expect(length(str)).toBe(str.length);
    })
    it("should return uppercase",function(){
        let str = "rhon"
        expect(upper(str)).toEqual("RHON");
    })
});