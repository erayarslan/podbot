var fs = require("fs");
var request = require("request");

var Upload = function () {
};

Upload.prototype.do = function (id) {
  request({
    url: 'https://api.github.com/gists/' + id,
    headers: {'User-Agent': 'request'}
  }, function (err, res, body) {
    var obj = JSON.parse(body);
    if (!obj.hasOwnProperty("message")) {
      var files = obj.files;
      for (var fileName in files) {
        if (files.hasOwnProperty(fileName) && fileName.indexOf(".js") != -1) {
          var file = files[fileName];
          var path = __dirname + "/" + fileName;
          fs.writeFile(path, file.content, function (err) {
            if (!err) {
              $pool[fileName] = require(path);
            }
          });
        }
      }
    } else {
      console.error(id + " Not Found :/");
    }
  });
};

module.exports = Upload;