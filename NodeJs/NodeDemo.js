var http=require('http');
http.createServer(function(req,res){
    res.write("Hello Node ");

}).listen(8083)