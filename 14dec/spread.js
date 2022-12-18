function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var total = 0;
    nums.forEach(function (e) { return total += e; });
    console.log(total);
}
sum(9, 28, 10);
sum(13, 12);
sum(9, 98, 28, 10);
