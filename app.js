var app = require("express")();
var gm = require("gm");
var HashMap = require("hashmap");
var sessions = new HashMap();
var fs = require("fs");

var start = require("./start")(app, sessions, fs);
var imgs = require("./images")(app, sessions);
var collage = require("./collage.js")(app, sessions, gm);

app.listen(3000);
console.log("Application now listening on port 3000");