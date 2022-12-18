var logger = {
    log: function (msg) {
        console.log(msg);
    }
};
logger.log('hello sanjna shahid');
var p = {
    print: function () { return console.log('display method'); }
};
p.print();
var np = {
    print: function () {
        console.log('printing from new print class');
    },
    log: function (msg) {
        console.log('new print log');
    }
};
np.log('hi there');
np.print();
