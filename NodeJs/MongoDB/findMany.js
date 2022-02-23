const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
     if(err) throw err;
     const dbObj=db.db("studentDB");
     dbObj.collection("student").find({}).toArray(function(err,result){
         if(err) throw err;
         console.log(result);
     })
})