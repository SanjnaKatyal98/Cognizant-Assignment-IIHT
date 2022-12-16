function f1(args) {
    console.log(typeof args);
    return args;
}
console.log(f1(100));
console.log(f1("kiran"));
console.log(f1(true));
//this is a function f2 which is a generics function
//how do you know its a generics function
//angular bracket besides the function name indicates that it is a generics function which takes any 3 datatypes and returns 3rd datatype value
function f2(arg1, arg2, arg3) {
    console.log("".concat(arg1, " ").concat(arg2, " ").concat(arg3));
    return arg3;
}
//how to create Generics class 
f2(123, 'hiten', false);
f2('abc', 'abc', false);
var Generic = /** @class */ (function () {
    function Generic(t) {
        this.prop1 = t;
    }
    Generic.prototype.setProp1 = function (t) {
        this.prop1 = t;
    };
    Generic.prototype.getProp1 = function () {
        return this.prop1;
    };
    return Generic;
}());
var gen1 = new Generic('nidhi');
console.log(gen1.getProp1());
var gen2 = new Generic(2323213);
console.log(gen2.getProp1());
var GenArr = /** @class */ (function () {
    function GenArr() {
        this.arr = [];
    }
    GenArr.prototype.add = function (item) {
        this.arr.push(item);
    };
    GenArr.prototype.get = function () {
        return this.arr;
    };
    return GenArr;
}());
var strArr = new GenArr();
strArr.add("hiten");
strArr.add("uday");
strArr.add("kailash");
console.log(strArr.get());
var numArr = new GenArr();
numArr.add(122);
numArr.add(500);
numArr.add(600);
console.log(numArr.get());
var Generic2 = /** @class */ (function () {
    function Generic2(t, t2) {
        this.prop1 = t;
        this.prop2 = t2;
    }
    Generic2.prototype.setProp1 = function (t) {
        this.prop1 = t;
    };
    Generic2.prototype.getProp1 = function () {
        return this.prop1;
    };
    Generic2.prototype.setProp2 = function (t) {
        this.prop2 = t;
    };
    Generic2.prototype.getProp2 = function () {
        return this.prop2;
    };
    return Generic2;
}());
var gen4 = new Generic2("abc", "def");
console.log("".concat(gen4.getProp1(), " ").concat(gen4.getProp2()));
var gen5 = new Generic2(12121, 1212122);
console.log("".concat(gen5.getProp1(), " ").concat(gen5.getProp2()));