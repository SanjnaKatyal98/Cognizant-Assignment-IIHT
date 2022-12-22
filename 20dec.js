"use strict";
exports.__esModule = true;
// create an enum Weekdays --all days
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Tuesday"] = 1] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 2] = "Wednesday";
    weekdays[weekdays["Thursday"] = 3] = "Thursday";
    weekdays[weekdays["Friday"] = 4] = "Friday";
    weekdays[weekdays["Saturday"] = 5] = "Saturday";
    weekdays[weekdays["Sunday"] = 6] = "Sunday";
})(weekdays || (weekdays = {}));
;
// create a arrray daysOff with two off days
var daysOff = [weekdays.Monday, weekdays.Saturday];
// create a function convertTemperature(temp:number,fromTo:string):number{}
// eg: convertTemperature(70,'FToC') c
function convertTemperature(temp, from, to) {
    var res;
    // C = [(°F-32)×5]/9
    if (from === "f" && to === "c") {
        res = ((temp - 32) * 5) / 9;
        return res;
    }
    else if (from === "c" && to === "f") {
        res = ((temp * 9) / 5) + 32;
        return res;
    }
    else {
        return 'error';
    }
}
var ans = convertTemperature(32, "f", "c");
console.log("32 Fahreneit = ".concat(ans, " Celcius"));
ans = convertTemperature(0, "c", "f");
console.log("0 Celcius = ".concat(ans, " Fahreneit"));
var Direction;
(function (Direction) {
    Direction["North"] = "moving to north";
    Direction["South"] = "moving to south";
    Direction["East"] = "moving to eats";
    Direction["West"] = "moving to west";
})(Direction || (Direction = {}));
function move(dir) {
    console.log(dir);
}
move(Direction.East);
