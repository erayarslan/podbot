var Upload = function () {
  this.content = "";
};

Upload.prototype.do = function (url, callback) {
  var self = this;
  require("http").get(url, function (res) {
    res.on('data', function (chunk) {
      self.content += chunk;
    });

    res.on('end', function () {
      callback(self.content);
    });
  });
};

module.exports = Upload;