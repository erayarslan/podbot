var Upload = function () {
  this.content = "";
};

Upload.prototype.do = function (url) {
  var self = this;
  require("http").get(url, function (res) {
    res.on('data', function (chunk) {
      self.content += chunk;
    });

    res.on('end', function () {
    });
  });
};

module.exports = Upload;