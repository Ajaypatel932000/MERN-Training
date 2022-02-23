const express=require("express");
const app=express();
const fs=require('fs');
const bodyParser=require('body-parser')
const cors=require("cors");


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

 

const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";

function connectMongo(){
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        const dbObj=db.db("studentDB");
        dbObj.collection("student").findOne({},function(err,res){
            if(err) throw err;
            console.log(res);
        })
    })
}

app.get('/getStudents',function(req,res){
  console.log('Done');

//   res.header('Content-Type', 'application/json');
//   res.header('Accept', 'application/json');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('GET', 'POST', 'OPTIONS')
// // res.end("REST CALLED ");

  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    const dbObj=db.db("studentDB");
    dbObj.collection("student").findOne({},function(err,data){
        if(err) throw err;
        console.log(res);
        res.send(JSON.parse(JSON.stringify(data)));
        // data=JSON.stringify(res);
    })
})
     //res.end("send :"+JSON.stringify(data));

})

const server=app.listen(8183,function(){
    const host=server.address().address;
    const port=server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

})