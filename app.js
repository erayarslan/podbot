global.$test = require(__dirname + "/src/test");
global.$rider = require(__dirname + "/src/rider");
global.$config = require(__dirname + "/src/config");
global.$pool = require(__dirname + "/src/load");
global.$memory = require(__dirname + "/src/memory");
global.$run = require(__dirname + "/src/run");
global.$server = require(__dirname + "/src/server");
global.$client = require(__dirname + "/src/client");

$server(1337, function () {
  if ($test) {
    $client("localhost", 1337, function (client) {
      client.write("say example.js hi");
    });
  }
});