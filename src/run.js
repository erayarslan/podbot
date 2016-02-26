var id = 0;

module.exports = function (req) {
  var token = " ";
  var tokens = req.split(token);
  var command = tokens.shift();
  var fileName = tokens.shift();
  var args = tokens;
  try {
    var _req = new $pool[fileName]();
    return {
      data: _req[command].apply(null, args),
      id: id++
    };
  } catch (e) {
    if (!(e instanceof TypeError)) {
      throw e;
    }
  }
};