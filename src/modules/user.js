var User = function () {
};

User.prototype.exit = function (client) {
  client.destroy();
};

User.prototype.login = function (username, password) {
  return {
    username: username,
    password: password
  }
};

module.exports = User;