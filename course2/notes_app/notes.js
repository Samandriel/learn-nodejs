console.log("Start sample.js file");

module.exports.age = 25;

module.exports.addNote = () => {
  console.log("addNote");
  return 'New Note';
};

module.exports.add = (a, b) => {
  return a + b;
}
