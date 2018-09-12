var express = require ("express");
var app = express();


app.get("/", function (req, res){
    res.send("Hi there, welcome to my assignment!");
});

 app.get("/speak/:id/", function(req, res){
    var animal = req.params.id;
        if (animal === "pig") {
             res.send ("The " + animal + " says 'OINK'")
        }
        if (animal === "cow"){
            res.send ("The " + animal + " says 'MOO'")
        }
        if (animal === "dog") {
            res.send ("The " + animal + " says 'Woof Woof!")
        }
        else {
             res.send("Sorry, page not found...What are you doing with your life?")
        }
    
 });
 
 app.get("/repeat/:id/:num", function(req, res) {
    var id = req.params.id;
    var numbers = Math.floor(req.params.num);
    var print = "";
    
    for (var i = 0; i < numbers; i++) {
        print += id + " "
    }
    res.send(print);
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started!!!")
});

