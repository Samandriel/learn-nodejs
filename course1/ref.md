# References
##  Definitions
- **Module:** Reusable code block with scope.
- **Commonjs Module:** Agreement upon standard of how module should be structured.
- **First-Class Function:** Function that we can put them in variable or arrays etc.
- **Function Expression:** A block of code that results in value.
- **Invoke the Function:** Call the function
- **Object:** A collection of name-value pair
- **Object Literal:**
```
{name: "sam", age: 28, {...},...}
```
- **Inheritance:** One object gets access to the properties and methods of another object
- **Function Constructor:** a function that is used to construct objects
- **Primitive value:** Type of data that represent a single value (number or string).
- **Passing Value:**
    - *Primitive value* -> pass by value.
    - *Object* -> pass by reference
- **Revealing Module Pattern:** Encapsulate variable inside the module, and prevent it to access directly outside the module
- **Event:** Something that happen on the app the we can respond to

## Module Pattern
#### pattern1
*greet1.js*
```
module.exports = function() {
  console.log("Hello, world");
};
```
app.js
```
var greet = require('./greet1');
greet();
```
#### pattern2
*greet2.js*
```
module.exports.greet = function() {
  console.log("Hello, world");
};
```
app.js
```
// More common way
var greet2 = require('./greet2').greet;
greet2();
// or less common way
var greet2 = require('./greet2');
greet2.greet();
```
#### pattern3
Using function constructor. This will create a function as an object
*greet3.js*
```
function Greetr() {
  this.greeting = 'Hello3';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greetr();
```
app.js
```
// More common way
var greet3 = require('./greet3');
greet3.greet();
```
#### pattern4
Using function constructor. This will create a function as an object
*greet4.js*
```
function Greetr() {
  this.greeting = 'Hello3';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greetr();
```
app.js
```
// More common way
var greet3 = require('./greet3');
greet3.greet();
```



## Native module
Import module
```
var util = require('util');
```
Using module function
```
var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
```

## Running NodeJS file
```
$> node filename
```
