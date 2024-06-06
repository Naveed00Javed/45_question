// Define a function to creat a car object with optoinal options...
function create_Car(make, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        make: make,
        model: model,
        options: options,
    };
    // Add additionl options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car.make[key.trim()] = value.trim();
    });
    return car;
}
// call the function to creat a car object
var my_car = create_Car("Honda", "Accord", "color:blue", "sunroof: true", "year: 2024");
// print the variable to ensure all the information is stored correctly in the car bject
console.log(my_car);
