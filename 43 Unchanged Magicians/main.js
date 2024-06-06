var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["Naveed", "Rayan", "Rohan"];
// making a copy an array
var magiciansNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(great) {
    var withGreetings = "";
    for (var _i = 0, magiciansNamesCopy_1 = magiciansNamesCopy; _i < magiciansNamesCopy_1.length; _i++) {
        var item = magiciansNamesCopy_1[_i];
        withGreetings += great + " " + item + "\n";
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(magicianNames2);
