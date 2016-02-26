var Example = function () {
};

Example.prototype.say = function () {
  return Array.prototype.slice.call(arguments).join(" ");
};

module.exports = Example;