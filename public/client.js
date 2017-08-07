console.log("the files are linked");
console.log('client.js is working');

//get user information to send to the server
$(document).ready(function(){
    $("#enter").on("click", function(){
        var firstNumInput = $("#firstNumber").val();
        var secondNumInput = $("#secondNumber").val();
        //need to get equationType passed into object, but not sure how to //pass the type when there are four options
        var equationType = "";
        if (id == "add") {
            equationType = "+";
        } else if(id == "subtract") {
            equationType = "-";
        } else if (id == "multiply"){
            equationType = "*";
        } else {
            equationType = "/";
        };

        var equationObject = {
            numberOne: firstNumInput,
            numberTwo: secondNumInput,
            type: equationType
        };

        //send information the unser entered in calculator to the server
        $.ajax ({
            method: "POST",
            url:"/calculator",
            data: equationObject,
            success: function(response){
                console.log(response);
                getEquation();
            }
        })
    });
});

function getEquation() {
    $.ajax({
        method: "GET",
        url: "/calculator",
        success: function(response){
            console.log(response);
            //some function is called here that returns the answer to the equation to the browser
        }    
    })
}
