var color1 = {
    color: function (msg) {
        console.log(msg);
    }
};
var color2 = {
    color: function (msg) {
        console.log(msg);
    }
};
color1.color("Red");
color2.color("black");
var printDigital = {
    print: function () {
        console.log('Inside the Digital print Object 1');
    },
    color: function (msg) {
        console.log(msg);
    }
};
printDigital.print();
printDigital.color("Yellow");
var printDigital2 = {
    print: function () {
        console.log('Inside the Digital print Object 2');
    },
    color: function (msg) {
        console.log(msg);
    }
};
printDigital2.print();
printDigital2.color("Grey");
