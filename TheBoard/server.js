'use strict';
var http = require('http');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
//var ejsEngine = require('ejs-locals');
var controllers = require("./controllers");
var flash = require("connect-flash");

// Setup the View Engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs");
app.set("view engine", "vash");

// Opt into services
app.use(express.urlencoded());
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: "TheMagicBoard"}));
app.use(flash());

// allow to download static resources
var nodeApplicationRootDirectory = __dirname;
app.use(express.static(nodeApplicationRootDirectory + "/public"));

//Map the routes
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Serhiy", isValid: true, group: "Admin" });
});

app.get("/api/mongo", function(req, res) {
    
});

var server = http.createServer(app);

server.listen(3000);
