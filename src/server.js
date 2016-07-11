var Spachcock = require("spachcock");
var $ = require(__dirname + "/routers")(new Spachcock());

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
