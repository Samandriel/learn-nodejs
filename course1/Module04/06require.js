/** Modules
 * 1. Require folder './06export'. It will looking for index file in the folder
 * 2. In './06export/index.js', we require modules "english.js" and "spanish.js" and put variables to module.exports = {....}
 * 3. In "english.js" and "spanish.js" we require data from 'data.json' and use dot notation to access the data in the json file*/


var greet = require('./06export');

greet.en("John");
greet.es("Pablo");
