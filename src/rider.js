var oldies = {};
oldies._console_log = console.log;
oldies._console_error = console.error;

console.log = function (data) {
  var _date = new Date();
  $db("logs").push({date: _date, log: data});
  oldies._console_log(_date, data);
};

console.error = function (data) {
  oldies._console_error(new Date(), "[ERROR]", data);
};

module.exports = true;