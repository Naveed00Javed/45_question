"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a fuction to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Define an array containing magician name
var magician_names = ["Naveed", "Rayan", "Rohan"];
// call the function to print each magician name
show_magician(magician_names);
