var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});
app.get("/results", function (req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error || data.Response === 'False'){
            var data = JSON.parse(body)
          res.render("results", {data: data});
        }
    })
});
app.get("*", function(req, res){
    res.send("Something went wrong, make sure to double check the directory?")
})
app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server is live!")
});
