var User = function () {
};

User.prototype.exit = function (client) {
  client.destroy();
};

User.prototype.login = function (username, password) {
  $db("login").push({username: username, password: password, date: new Date()});
  return {username: username, password: password};
};

module.exports = User;