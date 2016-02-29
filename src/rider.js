var oldies = {};
oldies._console_log = console.log;

console.log = function (data) {
  oldies._console_log(new Date(), data);
};

module.exports = true;