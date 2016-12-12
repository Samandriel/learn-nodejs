console.log('Starting app.js');

// require node module
const fs = require('fs');
const os = require('os');
// require npm or 3rd party module (have to be the same name in package.json)
const _ = require('lodash');
// require our own file
const notes = require('./notes.js');

// // Get OS user name
//var user = os.userInfo();
//console.log(user);

// // Write message to file
// var message = `Hello ${user.username}, You are ${sample.age}`;
// fs.appendFile('greetings.txt', message);

// // Calling imported function
// var res = notes.addNote();
// console.log(res); // Print return file
// console.log(`Result: ${notes.add(9, -2)}`);
//
// // trying lodash module
// console.log(_.isString(true));
// console.log(_.isString("Sam"));
// console.log(_.isString(2));
// var array = [2,3,1,3,1,5,7];
// var sortedArray = array.sort();
// console.log(`sortedArray: [${sortedArray}]`);
// var filteredArray = _.sortedUniq(sortedArray);
// console.log(filteredArray);

var command = process.argv[2]; // use this to get input through command line argument
console.log("command: ", command);

if(command === "add") {
  console.log("Adding a new Note");
} else if (command === "list") {
  console.log("List all Notes ");
} else if (command === "read") {
  console.log("Reading a note");
} else if (command === "remove") {
  console.log("Remove a note");
}else {
  console.log("Command not recognized");
}
