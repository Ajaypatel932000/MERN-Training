const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    const dbo=db.db("studentDB");
    const myarr=[
        {name:'Vijay',add:'Highway 71'},
        {name:'Peter',add:'Lowstreet 4'}
    ]
    dbo.collection("student").insertMany(myarr,function(err,res){
        if(err) throw err;
        console.log("number of documented :"+res.insertedCount);
        db.close();
    })
})