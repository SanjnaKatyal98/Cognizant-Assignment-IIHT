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
var Category;
(function (Category) {
    Category["saop"] = "soap";
    Category["bodywash"] = "bodywash";
    Category["shampoo"] = "shampoo";
})(Category || (Category = {}));
var Product = /** @class */ (function () {
    function Product(id, name, brand, price, Category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.Category = Category;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShoppingCart;
}(Product));
function shoppingCart(pr) {
    var total = 0;
    for (var i in pr) {
        total = total + pr[i].price;
    }
    console.log(total);
}
var product1;
var product2;
var product3;
product1 = {
    id: 1,
    name: 'sanjna',
    brand: "shahid",
    price: 450,
    Category: Category.bodywash
};
product2 = {
    id: 1,
    name: 'sanjna',
    brand: "shahid",
    price: 450,
    Category: Category.bodywash
};
product3 = {
    id: 1,
    name: 'sanjna',
    brand: "shahid",
    price: 450,
    Category: Category.bodywash
};
var pr = [product1, product2, product3];
shoppingCart(pr);
