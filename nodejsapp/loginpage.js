const express =require('express');
const { ROUTE_CONSTANTS } = require('./route_constants');
const bodyParser= require("body-parser");
const app =express();
//route,callback func
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/pages/register.html')
});
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body)
    res.send("registered successfully")
});
app.listen(3000)