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
orderRoute.route('/orderById/:id').get(function(req,res){
    let id=req.params.id;
   console.log("ID in order :",id);
    orderModel.find({$and:[{userId:id,status:false}]},function(err,order){
        // if(err) throw err;
        res.json(order);
    })
})

orderRoute.route('/addOrder').post(function(req,res){
     
    console.log(req.body);
    let orderData=new orderModel(req.body);
    orderData.save()
    .then(result=>res.status(200).json({'InsertedOrder':true}))
    .catch(err=>res.status(400).send("Someting went wrong...."));
})


orderRoute.route('/updateOrder/:id').put(function(req,res){
   //res.json("done")
    let id=req.params.id
   let total_price=req.body.total_price;
    orderModel.findOneAndUpdate({userId:id,status:false},{status:true,total_price:total_price}).then(function(data){
       // orderModel.find({userId:id}).then(function(data){
         //   res.send(data)
        //})
        res.send(data);
        
    })
    
})




// orderModel.findOne({userId:req.params.id},function(err,product){
//     if(!product)//null   
//     {
//         console.log('noting ')
//          return null;
//         //return next(new Error('Unable to find Product'));
//     }else
//     {
//         console.log("inside else",req.body.status);
//         let order=new orderRoute({
//             status:req.body.status
//         })

//         //product.status=
//         console.log("product status",product.status)
        
//         order.save()
//         .then(  emp=>{ res.send(product.status);
//            // res.json("Order Updated Sucessfully.")
//         })
//         .catch(err=>{  res.status(400).send("Unable to Update Product")})
//     }
// })
// orderModel.findById(req.params.id,function(err,product){
//     if(!product)//null   
//     {
//         return next(new Error('Unable to find Product'));
//     }else
//     {
//         product.pname=req.body.pname;
//         product.desc=req.body.desc;
//         product.price=req.body.price;
//         product.save()
//         .then(  emp=>{  res.json("Product Updated Sucessfully.")})
//         .catch(err=>{  res.status(400).send("Unable to Update Product")})
//     }
// })


module.exports=orderRoute;