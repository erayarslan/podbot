var Podbot = function () {
};

Podbot.prototype.exit = function (client) {
  client.destroy();
};

Podbot.prototype.hostname = function () {
  return require("os").hostname();
};

Podbot.prototype.login = function (username, password) {
  return {
    username: username,
    password: password
  }
};

module.exports = Podbot;