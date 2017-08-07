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

//functions for math entered here
//these involve using module.exports, but I have no idea how to //incorporate them into this problem
// it seems like the equationObject should be used in the function that solves the equation and returns the answer to the browser calculator 

function solveEquation(firstNumInput, secondNumInput, equationType) {
    var answer = (parseInt(equationObject.numberOne)) + equationObject.equationType + (parseInt(equationObject.numberTwo));
}

