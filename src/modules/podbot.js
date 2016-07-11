var Podbot = function () {
};

Podbot.prototype.hostname = function () {
  return require("os").hostname();
};

Podbot.prototype.exec = function () {
  var args = Array.prototype.slice.call(arguments);
  var cmd = args.shift();
  return {
    cmd: cmd,
    args: args
  };
};

module.exports = Podbot;
