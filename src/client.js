var net = require("net");

module.exports = function (host, port, callback) {
  var client = new net.Socket();

  client.connect(port, host, function () {
    callback(client);
  });

  client.on('data', function(data) {
    var arr = data.toString().split("\n");
    for (var i in arr) {
      console.log(arr[i]);
    }
  });

  client.on('close', function () {
  });
};
