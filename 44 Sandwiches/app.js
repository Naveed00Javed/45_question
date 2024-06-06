function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want sandwich of ".concat(items);
}
;
var collection1 = mySandwiches("Ham", "Cheeze", "Letuce");
var collection2 = mySandwiches("Turkey", "Swiss");
var collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
