var _global = require(__dirname + "/global");
var br = "\n";

module.exports = function ($) {
  $.use(_global.boom);

  $.route("/upload.js/do", function (req, res) {
    req.f(req.body.data[0]);
  });

  $.route("/user.js/exit", function (req, res) {
    req.f(res.client);
  });

  $.route("/podbot.js/:f", _global.secure, function (req, res) {
    var output = req.f.apply(null, req.body.data);
    res.send(output + br);
  });

  $.route("/user.js/login", function (req, res) {
    res.client.user = req.f.apply(null, req.body.data);
    res.send("Auth Success!" + br);
  });

  $.route("/:filename/:function", function (req, res) {
    var output = req.f.apply(null, req.body.data);
    res.send(output + br);
  });

  return $;
};