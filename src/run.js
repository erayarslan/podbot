module.exports = function (req) {
  var token = " ";
  var tokens = req.split(token);
  var command = tokens.shift();
  var fileName = tokens.shift();
  var args = tokens;
  var _req = $pool.hasOwnProperty(fileName) ? new $pool[fileName] : false;
  try {
    _req ? _req[command].apply(null, args) : false;
  } catch (e) {
    if (!(e instanceof TypeError)) {
      throw e;
    }
  }
};