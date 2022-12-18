function f(args) {
    console.log(args);
    return args;
}
console.log(f(100));
console.log(f("sanj"));
console.log(f(true));
function funct(arg1, arg2, arg3) {
    console.log("".concat(arg1, " ").concat(arg2, " ").concat(arg3));
    return arg3;
}
funct(928, 'sanj', false);
funct('mohd', 'shahid', false);
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
var gen4 = new Generic2("sanjna", "shahid");
console.log("".concat(gen4.getProp1(), " ").concat(gen4.getProp2()));
var gen5 = new Generic2(12121, 1212122);
console.log("".concat(gen5.getProp1(), " ").concat(gen5.getProp2()));
