var Spachcock = require("spachcock");
var $ = new Spachcock();
var routers = require(__dirname + "/routers")($);

module.exports = function (port, callback) {
  require("net").createServer(function (socket) {
    socket.user = {username: "", password: ""};

    socket.on("data", function (data) {
      $.handle($run(data.toString()), null, socket);
    });

    socket.on("close", function () {
    });
  }).listen(port, function () {
    console.log("I AM UP [" + port + "]");
    callback ? callback() : false;
  });
};