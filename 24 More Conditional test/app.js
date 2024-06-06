// equality and inequality
var myName = "Naveed";
console.log(myName == "Naveed"); // true   equal to
console.log(myName !== "naveed"); // true   not equal to
// numberics
var myNumber = 10;
console.log(myNumber == 10); //true
console.log(myNumber !== 10); //true  
console.log(myNumber > 5); //true greater than
console.log(myNumber < 5); // false less than
console.log(myNumber <= 5); // false less than equal to
console.log(myNumber >= 5); // true greater than or equal to
// and && ==== or ||(pipe)
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); // false
// true stat false stat
console.log(num1 > 9 || num2 < 5); // true
// true stat false stat
var myArray = [2, 3, "Naveed"];
var myString = "Rayan";
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false
