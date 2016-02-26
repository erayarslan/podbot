var fs = require("fs");
var pool = {};
var path = __dirname + "/modules/";
var modules = fs.readdirSync(path);
for (var i in modules) {
  var _module = modules[i];
  pool[_module] = require(path + _module);
}

module.exports = pool;