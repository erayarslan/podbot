module.exports = {
  boom: function (req, res, next) {
    try {
      req.obj = new $pool[req.body.namespace]();
      req.f = req.obj[req.body.action];
      next();
    } catch (e) {
      console.error("/" + req.body.namespace + "/" + req.body.action + " [" + e.message + "]");
    }
  },
  secure: function (req, res, next) {
    var auth = $config.auth;
    var user = res.client.user;

    $db("secure").push({
      username: user.username,
      password: user.password,
      date: new Date(),
      target: req.url
    });

    if (auth.username === user.username &&
      auth.password === user.password) {
      next();
    } else {
      console.error("Access Denied :^");
    }
  }
};