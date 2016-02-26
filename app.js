global.$pool = require(__dirname + "/src/load");
global.$memory = require(__dirname + "/src/memory");
global.$run = require(__dirname + "/src/run");
global.$server = require(__dirname + "/src/server");

$server(1337, function (data) {
  var _res = $run(data);
  !!_res.data ? $memory[_res.id] = _res.data : false;
  console.log($memory);
});
