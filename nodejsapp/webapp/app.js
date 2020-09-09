//to work with http we will use http module

var http= require('http');
var requestListner= function(req,res){
    if(req.url=='/register'){
     res.writeHead(200);
     res.end("<h1>Welocome to resgistration</h1><input type='text'/>")
    }
    else{
        res.writeHead(200);
        res.end("<h1>Welocome</h1><input type='text'/>")
    }
   
};

var server= http.createServer(requestListner);
server.listen("3000");
