var id = 0;

module.exports = function (req) {
  var token = " ";
  var tokens = req.split(token);
  var command = tokens.shift();
  var fileName = tokens.shift();
  var args = tokens;
  var _req = $pool.hasOwnProperty(fileName) ? new $pool[fileName] : false;
  try {
    return {data: _req ? _req[command].apply(null, args) : false, id: id++};
  } catch (e) {
    if (!(e instanceof TypeError)) {
      throw e;
    }
  }
};