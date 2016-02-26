module.exports = function (port, dataHandler) {
  require("net").createServer(function (socket) {
    socket.on("data", function (data) {
      dataHandler(data.toString());
    });

    socket.on("close", function () {
    });
  }).listen(port);
};