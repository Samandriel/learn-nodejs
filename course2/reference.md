# File System
### Append File
Write data in to a file.
##### library
```
const fs = require('fs');
```
##### How to
They're 3 ways we can do;
- Option1
```
fs.appendFile('greetings.txt', 'Hello World');
```
- Option2
```
fs.appendFile('greetings.txt', 'Hello world', function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
})
```
- Option3
```
fs.appendFileSync('greetings.txt', 'hello world');
```
---
# OS
`OS` Module provides OS related utilities.
### User Info
Get User Info from Operating System
##### require
```
const os = require('os');
```
##### How to
```
var user = os.userInfo();

var user = os.userInfo();
console.log(user); //to see what variables are return form the 'os.userInfo()'

// We can access a variable like this 'user.username'
// Using Template String, we need to use back-tick not double or single quotes
var message = `Hello ${user.username}, How are you?`;

fs.appendFile('greetings.txt', message);

```

# ES6
### Anonymous function
```
function () {  
  ...
}
//////////////////
() => {
  ...
}
```

# Using NPM Module
1. Initialize npm in a project. This command will create package.json
```
$> npm init
```
2. To install a package in the project
```
$> npm install packagename --save
** --save will insert package info into package.json 
```
