// Normal variable
var firstname = "Jane";

// **Imediately Invoke function Expression**
// variable in IIFE will accesible only inside IIFE 
(function (lastname) {
    firstname = "John";
    lastname = lastname;
   console.log("Hello " + firstname + " " + lastname); 
}("Doe"))

console.log(firstname);