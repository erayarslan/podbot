module.exports = {
  boom: function (req, res, next) {
    try {
      req.obj = new $pool[req.body.namespace]();
      req.f = req.obj[req.body.action];
      next();
    } catch (e) {
      console.log("[ERROR]" + " /" + req.body.namespace + "/" + req.body.action);
    }
  }
};