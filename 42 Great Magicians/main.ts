function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an array of magician names
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}

// Define an array of Magician names
let magician_names = ["Naveed", "Rayan", "Rohan"]

// call make_great function to modify magician names

let Great_magicians = make_great(magician_names);
// call show_magician that show modified list of magicians

show_magicians(Great_magicians);

