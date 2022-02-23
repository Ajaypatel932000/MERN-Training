const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//list of columns of product
// here we created my document strcture
let Product=new Schema({
    
    pname:String,  //{    type:String  },
    desc:String, //{     type:String  },
    price:Number
    },{
      collection:'product'
  });

  //exporting my model 
module.exports=mongoose.model('Product',Product);