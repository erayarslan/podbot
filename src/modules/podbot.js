var Podbot = function () {
};

Podbot.prototype.hostname = function () {
  return require("os").hostname();
};

module.exports = Podbot;