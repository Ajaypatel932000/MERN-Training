const exppress=require('express');


const app=exppress();
const orderRoute=exppress.Router();

let orderModel=require('../Model/Order');


orderRoute.route('/').get(function(req,res){
     
    orderModel.find(function(err,data){
        if(err) 
           throw console.log("error in controller",err);
        else
           res.json(data);

    })
})
orderRoute.route('/addOrder').post(function(req,res){
     
    console.log(req.body);
    let orderData=new orderModel(req.body);
    orderData.save()
    .then(result=>res.status(200).json({'InsertedOrder':true}))
    .catch(err=>res.status(400).send("Someting went wrong...."));
})


module.exports=orderRoute;