var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var expHandle = require("express-handlebars");

app.engine("handlebars", expHandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("")