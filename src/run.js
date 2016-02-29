module.exports = function (req) {
  var token = " ";
  var tokens = req.split(token);
  var command = tokens.shift();
  var fileName = tokens.shift();
  return {
    namespace: fileName,
    action: command,
    data: tokens
  }
};