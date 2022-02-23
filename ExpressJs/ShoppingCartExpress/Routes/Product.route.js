const express=require('express');

// here we using express and route

const app=express();
const productRoute=express.Router();


// here we required employee model and imporeted
let productModel=require('../Model/Product');

// To get List of product

productRoute.route('/').get(function(req,res){
     
     productModel.find(function(err,data){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(data);

     })
})


// // // To add New  Login List

productRoute.route('/addProduct').post(function(req,res){
    
     let pData=new productModel(req.body);
     console.log(req.body);
      pData.save()/// meodel intrect with db
     .then(game=>{res.status(200).json({'Product':'Product Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

// // To get Employee Details By Employee ID

productRoute.route('/productById/:id').get(function(req,res){
     let id=req.params.id;
     productModel.findById(id,function(err,product){

         res.json(product);
     })
})

// // To update Employee Details

productRoute.route('/updateProduct/:id').put(function(req,res){
        productModel.findById(req.params.id,function(err,product){
             if(!product)//null   
             {
                 return next(new Error('Unable to find Product'));
             }else
             {
                 product.pname=req.body.pname;
                 product.desc=req.body.desc;
                 product.price=req.body.price;
                 product.save()
                 .then(  emp=>{  res.json("Product Updated Sucessfully.")})
                 .catch(err=>{  res.status(400).send("Unable to Update Product")})
             }
        })
})

// To Delete The employee

productRoute.route('/deleteProduct/:id').delete(function(req,res){
     productModel.findByIdAndRemove({_id:req.params.id},function(err,data){
          if(err) 
              res.json(err)
          else  
              res.json('Product Deleted Successfully..')
     })
})

// exporting controller

module.exports=productRoute;