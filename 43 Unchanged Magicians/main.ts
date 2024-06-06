let magicianNames2 = ["Naveed", "Rayan", "Rohan"];

// making a copy an array
let magiciansNamesCopy = [...magicianNames2];

function show_magicians(great: string){
    let withGreetings = "";

    for(let item of magiciansNamesCopy){
        withGreetings += great + " " + item + "\n";
    
    }
    return withGreetings;
};

let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);

console.log(magicianNames2)
