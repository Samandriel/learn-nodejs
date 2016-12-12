console.log("Imported greet_lib.js");
var greet = function() {
    console.log("Hello ");
};

// Make function from ./greet_lib beable to invoked from other file
module.exports = greet;