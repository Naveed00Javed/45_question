// Define a function to creat a car object with optoinal options...

function create_Car(make: any, model: any, ...options: any[]){

    let car = {
        make: make,
        model: model,
        options: options,

        
    };
// Add additionl options to the car object
options.forEach(option => {
    let [key, value] = option.split(":")
     car.make[key.trim()] = value.trim();

});
    return car;

} 

// call the function to creat a car object

let my_car = create_Car("Honda", "Accord", "color:blue", "sunroof: true", "year: 2024");
// print the variable to ensure all the information is stored correctly in the car bject
console.log(my_car);

