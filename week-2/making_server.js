const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
// frist server happy happy happy
app.use(bodyParser.json());

app.get("/",function(req,res){
    console.log(req.body);
    res.send("hello kalua")

});

app.listen(3000);
