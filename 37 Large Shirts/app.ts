// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function with by defaults values
make_shirt();

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now with small size and also different print Message

make_shirt("Small", "I Love JavaScript")