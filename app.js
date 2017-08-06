var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var bodyParser = bodyParser();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/*', function(req, res){
    res.send('Request Received');
});

app.listen(5000, function(){
    console.log("listening on port:", port);
})

