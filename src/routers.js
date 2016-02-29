var middlewares = require(__dirname + "/middlewares");

module.exports = function ($) {
  $.use(middlewares.boom);

  $.route("/example.js/say", function (req, res) {
    var output = req.f.apply(null, req.body.data);
    res.send(output);
  });

  $.route("/upload.js/do", function (req, res) {
    var output = req.f(req.body.data[0], function (data) {
      res.send(data);
    });
  });

  return $;
};