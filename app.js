global.$pool = require(__dirname + "/src/load");
global.$memory = require(__dirname + "/src/memory");
global.$run = require(__dirname + "/src/run");
var _response = $run("say example.js hello world from podbot!");
$memory[_response.id] = _response.data;
console.log($memory);