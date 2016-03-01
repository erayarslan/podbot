var net = require("net");

module.exports = function (host, port, callback) {
  var client = new net.Socket();

  client.connect(port, host, function () {
    callback(client);
  });

  client.on('data', function(data) {
    console.log(data.toString());
  });

  client.on('close', function () {
  });
};