var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var bodyParser = bodyParser();

var port = 5000;

app.listen(5000, function(){
    console.log("listening on port:", port);
})

//app.get