function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create prototype, we can attach properties to an object
Person.prototype.greet = function() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

var john = new Person("John", "Doe");
console.log(john.firstName);
john.greet(); //call on prototype

var jane = new Person("Jane", "Doe");
jane.greet();

// Checking prototype
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === john.__proto__);