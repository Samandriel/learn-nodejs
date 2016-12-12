var data = require('./data.json');

var greet = function(name) {
    name = name;
    console.log(data.en + " " + name);
};

module.exports = greet;

