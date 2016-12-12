// Creating Module 
// Import library
// require('./greet_lib.js');

// To access function in ./greet_lib.js
var greeting = require('./greet_lib');
var person = {
    first_name: 'Sam',
    last_name: 'Harris',
    greet: function() {
        console.log("Hi " + this.first_name + " " + this.last_name);
    } 
};

console.log(person['first_name']);