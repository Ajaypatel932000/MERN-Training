const http=require('http');
const server=http.createServer(function(req,res){
    if(req.url==="/")
     {  
         res.write("Hello World");
         res.end();
    }
    if(req.url==="/api")
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

// server.on('connection',function(socket){
//     console.log("new Connection")

// })

server.listen(8081)
console.log("Listen On Port 3000")