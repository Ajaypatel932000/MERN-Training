const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("studentDB");
    const myObj={name:"Karan",add:"Ahemdabad"}

   dbo.collection("student").insertOne(myObj,function(err,res){
       if(err) throw err;
       console.log("1 Document Inserted ...");
   });    
}); 