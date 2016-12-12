var data = require('./data.json');

var greet = function(name) {
    var name = name;
    console.log(data.es + " " + name);
}

module.exports = greet;