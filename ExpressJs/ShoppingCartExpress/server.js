const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');


//var mongoDatabase='mongodb://localhost:27017/studentDB';


//created express server
const app=express();


mongoose.connect("mongodb://localhost:27017/spDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(
   ()=>console.log("Connection  Done") )
   .catch(
       (err)=>console.log(err)
)
// All express routes
const loginRoute=require('./Routes/Login.route');
const productRoute=require('./Routes/Product.route');
const orderRoute=require('./Routes/Order.route');


// converting incoming data to JSON format
app.use(bodyParser.json());

//enabled CROS
app.use(cors());

//setUp SErver port number 
const port=process.env.PORT || 8282;

//routes configration

app.use('/online',loginRoute);
app.use("/product",productRoute);
app.use('/orders',orderRoute);

const server=app.listen(port,function(){
    console.log("Server Listing on port "+port);
})