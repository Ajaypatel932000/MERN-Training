const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');


//var mongoDatabase='mongodb://localhost:27017/studentDB';


//created express server
const app=express();
//mongoose.Promise = global.Promise; not required

//connect to mongoDB
//mongoose.connect('mongodb://localhost:27017/StudentDB');

mongoose.connect("mongodb://localhost:27017/employeeDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(
   ()=>console.log("Connection  Done") )
   .catch(
       (err)=>console.log(err)
)
// All express routes
const employeeRoute=require('./Routes/Employee.route');


// converting incoming data to JSON format
app.use(bodyParser.json());

//enabled CROS
app.use(cors());

//setUp SErver port number 
const port=process.env.PORT || 8181;

//routes configration

app.use('/employees',employeeRoute);


const server=app.listen(port,function(){
    console.log("Server Listing on port "+port);
})