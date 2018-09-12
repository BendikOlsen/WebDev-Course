var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});


app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;app
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Post 1", author: "Susy"},
        {title: "Can you velieve this pomsky?", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server is live!")
});

// <%= %> This will render whatever the code return on the html 
// <% %> This evaluates the code, does NOT add anything to the html. most used for if statements and loops