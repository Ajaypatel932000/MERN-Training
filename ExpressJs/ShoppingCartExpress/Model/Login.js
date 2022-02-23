const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//list of columns of employee
// here we created my document strcture
let Login=new Schema({
    email:String,  //{    type:String  },
    password:String, //{     type:String  },
    isAdmin:Boolean
    },{
      collection:'login'
  });

  //exporting my model 
module.exports=mongoose.model('Login',Login);