const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    const dbo=db.db("studentDB");
    dbo.collection("student").findOne({},function(err,result){
        if(err) throw err;
        console.log(result);
        
        db.close();
    })
})