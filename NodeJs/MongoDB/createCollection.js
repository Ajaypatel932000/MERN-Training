const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/studentDB";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("studentDB");
    dbo.createCollection("student", function (err, res) {
        if (err) throw err;
        console.log("Collection Created");;
        db.close();

    })
})