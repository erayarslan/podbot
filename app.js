#!/usr/bin/env node
global.$test = require(__dirname + "/src/test");
global.$db = require(__dirname + "/src/db");
global.$rider = require(__dirname + "/src/rider");
global.$config = require(__dirname + "/src/config");
global.$pool = require(__dirname + "/src/load");
global.$memory = require(__dirname + "/src/memory");
global.$run = require(__dirname + "/src/run");
global.$server = require(__dirname + "/src/server");
global.$client = require(__dirname + "/src/client");

$server(1337, function () {
  if ($test) {
    $client("localhost", 1337, function (client) {
      setTimeout(function () {
        client.write("say example.js hi");
      }, 0);

      setTimeout(function () {
        client.write("login user.js root toor");
      }, 1000);

      setTimeout(function () {
        client.write("exec podbot.js ls -la");
      }, 2000);
    });
  }
});
