const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//list of columns of employee
// here we created my document strcture
let Employee=new Schema({
    firstName:String,  //{    type:String  },
    lastName:String, //{     type:String  },
    email:String,  //{ type:String},
    phone:String  //{ type:Number }
    
  },{
      collection:'employees'
  });

  //exporting my model 
module.exports=mongoose.model('Employee',Employee);