import { clearScreenDown } from "readline";

// Define a fuction to print each magician name from an array
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Define an array containing magician name
let magician_names = ["Naveed", "Rayan", "Rohan"]

// call the function to print each magician name

show_magician(magician_names)
