const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017/student";
MongoClient.connect(url,function(error,db){
    if(error) throw error;
    console.log("Database Created");
    db.close();

})