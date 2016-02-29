global.$rider = require(__dirname + "/src/rider");
global.$pool = require(__dirname + "/src/load");
global.$memory = require(__dirname + "/src/memory");
global.$run = require(__dirname + "/src/run");
global.$server = require(__dirname + "/src/server");

$server(1337);
