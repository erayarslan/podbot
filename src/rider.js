var oldies = {};
oldies._console_log = console.log;
oldies._console_error = console.error;

console.log = function (data) {
  oldies._console_log(new Date(), data);
};

console.error = function (data) {
  oldies._console_error(new Date(), "[ERROR]", data);
};

module.exports = true;