"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//es5
function Person(id, name) {
    this.id = id;
    this.name = name;
}
Person.prototype.address = function () { };
var p = new Person(111, 'max');
console.log(p);
// ecmascript 6 specifications
var Game = /** @class */ (function () {
    function Game(id, name, multiplayer, online, gameCode) {
        this.id = id;
        this.name = name;
        this.multiplayer = multiplayer;
        this.online = online;
        this.gameCode = gameCode;
    }
    //public is the default access specifier 
    Game.prototype.getDetails = function () {
        return "".concat(this.id, " ").concat(this.name, " ");
    };
    return Game;
}());
var destiny = new Game(111, 'Destiny', true, true, 445455);
console.log(destiny.getDetails());
//this only came in ES6 
var VRGame = /** @class */ (function (_super) {
    __extends(VRGame, _super);
    function VRGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disp = function () {
            console.log("".concat(_this.name));
        };
        return _this;
    }
    return VRGame;
}(Game));
var vr = new VRGame(1121, 'Minecraft', true, true, 4545455);
vr.disp();
//create a class Product with id,name,brand,price ,category 
//create a class ShoppingCart which has map of product as key and number of items as value
//write a method to calculate the cart's total price
var map = new Map();
map.set(p1);
