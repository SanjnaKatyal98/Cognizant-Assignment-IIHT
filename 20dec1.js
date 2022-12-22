"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// 2.create objects of Artist and store it in an array
var artists = [];
var artist1, artist2, artist3;
artist1 = {
    id: 1,
    name: 'manvi',
    bio: 'dog lover'
};
artist2 = {
    id: 2,
    name: 'manvi2',
    bio: 'dog lover 2'
};
artist3 = {
    id: 3,
    name: 'manvi3',
    bio: 'dog lover 3'
};
artists.push(artist1);
artists.push(artist2);
artists.push(artist3);
// 3. create class Work --with  a map of  key --artist and   and value as  string  array details of the work done
var ArtistWork = /** @class */ (function () {
    function ArtistWork() {
        this.artistMap = new Map;
    }
    ArtistWork.prototype.addArtist = function (a, work) {
        var _this = this;
        var temp = 0;
        this.artistMap.forEach(function (value, key) {
            if (key.id === a.id) {
                var newWork = __spreadArray(__spreadArray([], value, true), work, true);
                console.log(newWork);
                newWork = newWork.flat(1);
                console.log(newWork);
                _this.artistMap.set(key, newWork);
                temp = 1;
                return;
            }
        });
        if (!temp) {
            this.artistMap.set(a, work);
        }
    };
    ArtistWork.prototype.print = function () {
        this.artistMap.forEach(function (value, key) {
            console.log(key, value);
        });
    };
    return ArtistWork;
}());
var obj;
obj = new ArtistWork();
obj.addArtist(artist1, ["dog_paintng1", "nature1"]);
obj.addArtist(artist2, ["dog_paintng2", "nature2"]);
obj.addArtist(artist3, ["dog_paintng3", "nature3"]);
obj.print();
obj.addArtist(artist3, ["new painting"]);
obj.print();
