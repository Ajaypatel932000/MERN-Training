const express=require('express');
const res = require('express/lib/response');
var app=express();
const fs=require('fs');
const { endianness } = require('os');

app.get('/user',function(req,res){
        fs.readFile('./user.json',function(error,data){

            res.header('Content-Type', 'application/json');
            res.header('Accept', 'application/json');
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('GET', 'POST', 'OPTIONS')

            console.log(data);
         //   res.write(data);
            res.end(data);
        })
})
var user={
    "id": 10,
    "name": "Jay",
    "password": "admin",
    "status": "active",
    "did": 1
  }
  app.post("/addUser",function(req,res){
   
     fs.readFile("user.json",function(err,data){
         data=JSON.parse(data);
         data['user']=user;
         console.log(data);
         res.send(JSON.stringify(data));
     })
  })


var server=app.listen(8083,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)


})