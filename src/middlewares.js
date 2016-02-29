module.exports = {
  boom: function (req, res, next) {
    req.obj = new $pool[req.body.namespace]();
    req.f = req.obj[req.body.action];
    next();
  }
};