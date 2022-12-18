var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getInfo = function () {
        return "".concat(this.name, "  ").concat(this.age);
    };
    return Person;
}());
var p = new Person('sanjna', 24);
console.log(p.getInfo());
