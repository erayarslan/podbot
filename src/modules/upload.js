var fs = require("fs");
var request = require("request");

var Upload = function () {
};

Upload.prototype.do = function (id) {
  request({
    url: 'https://api.github.com/gists/' + id,
    headers: {
      'User-Agent': 'request'
    }
  }, function (err, res, body) {
    var obj = JSON.parse(body);
    if (!obj.hasOwnProperty("message")) {
      for (var fileName in obj.files) {
        if (fileName.indexOf(".js") != -1) {
          var path = __dirname + "/" + fileName;
          fs.writeFile(path, obj.files[fileName].content, function (err) {
            if (!err) {
              $pool[fileName] = require(path);
            }
          });
        }
      }
    }
  });
};

module.exports = Upload;