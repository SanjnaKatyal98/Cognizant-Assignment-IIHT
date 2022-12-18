var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
;
var base;
(function (base) {
    base["regular"] = "regular";
    base["handtossed"] = "handtossed";
})(base || (base = {}));
;
var topping;
(function (topping) {
    topping[topping["veg"] = 0] = "veg";
    topping[topping["nonveg"] = 1] = "nonveg";
    topping[topping["cheezburst"] = 2] = "cheezburst";
})(topping || (topping = {}));
;
;
var val;
val = {
    id: 100,
    top: topping.veg,
    sizes: size.medium,
    base: base.handtossed
};
console.log(val);
var val1;
val1 = {
    id: 200,
    top: topping.nonveg,
    sizes: size.large,
    base: base.regular
};
console.log(val1);
var val2;
val2 = {
    id: 300,
    top: topping.cheezburst,
    sizes: size.small,
    base: base.regular
};
console.log(val1);
var arr = [val, val1, val2];
function outForDelivery(pizza) {
    switch (pizza.sizes) {
        case size.small:
            console.log('You have to pay 100rs at the time of delivery');
            break;
        case size.medium:
            console.log('You have to pay 200rs at the time of delivery');
            break;
        case size.large:
            console.log('You have to pay 300rs at the time of delivery');
            break;
        default:
            console.log('choose again!');
    }
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log("".concat(i.id, " ").concat(size[i.sizes], " ").concat(topping[i.top]));
    outForDelivery(i);
}
