// Function Statement
function greet() {
    console.log('hi');
}

greet();

// Function are First-Class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// Function Expression
var greetMe = function() {
    console.log('Hi Sam');
}
greetMe();
logGreeting(greetMe);

// Function expression on the fly
logGreeting(function() {
    var name = "Rich";
    console.log("Hello " + name);
})