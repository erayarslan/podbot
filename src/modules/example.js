var Example = function () {
};

Example.prototype.say = function () {
  console.log(Array.prototype.slice.call(arguments).join(" "));
};

module.exports = Example;