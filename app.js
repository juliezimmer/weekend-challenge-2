var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/calculator", function(req,res){
    console.log("An equation has been solved");
    res.sendStatus(201);
});

app.get('/calculator', function(req, res){
    res.send('Request Received');
});

app.listen(5000, function(){
    console.log("listening on port:", port);
})

