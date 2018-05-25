var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.get("/o-reveil", function(req, res){
    res.render("opis");
})

app.get("/oferta", function(req, res){
    res.render("oferta");
})

app.get("/kosmetyki", function(req, res){
    res.render("kosmetyki");
})

app.get("/kontakt", function(req, res){
    res.render("kontakt");
})

app.get("/*", function(req, res){
    res.send("Page not found");
})

app.listen(4000, process.env.IP, function(){
    console.log("server is working");
})