var express= require("express");
var app= express();

app.get("/",function(req, res){
  res.sendFile("index.html",{root:"../platforms/browser"})
})

app.listen(3000);
