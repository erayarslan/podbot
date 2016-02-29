var _global = require(__dirname + "/global");

module.exports = function ($) {
  $.use(_global.boom);

  $.route("/upload.js/do", function (req, res) {
    req.f(req.body.data[0]);
  });

  $.route("/:filename/:function", function (req, res) {
    var output = req.f.apply(null, req.body.data);
    res.send(output);
  });

  return $;
};