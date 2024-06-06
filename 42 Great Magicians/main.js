function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array of magician names
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of Magician names
var magician_names = ["Naveed", "Rayan", "Rohan"];
// call make_great function to modify magician names
var Great_magicians = make_great(magician_names);
// call show_magician that show modified list of magicians
show_magicians(Great_magicians);
