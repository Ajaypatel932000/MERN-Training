const express=require('express');
const res = require('express/lib/response');
var app=express();
const fs=require('fs');
const { endianness } = require('os');

app.get('/user',function(req,res){
        fs.readFile('./user.json',function(error,data){

            res.append('Content-Type', 'application/json');
            res.append('Accept', 'application/json');
            res.append('Access-Control-Allow-Origin', 'http://localhost:3002');
            res.append('Access-Control-Allow-Credentials', 'true');
            res.append('GET', 'POST', 'OPTIONS')

            console.log(data);
         //   res.write(data);
            res.end(data);
        })
})

var server=app.listen(8083,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)


})