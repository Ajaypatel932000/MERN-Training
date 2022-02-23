const res = require('express/lib/response');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Test",{useNewUrlParser:true,useUnifiedTopology:true})
.then(
   ()=>console.log("Connection  Done") )
   .catch(
       (err)=>console.log(err)
)
// schema
// A mongoose schema define the structure of document
const studentDoc=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:String,
    collage:String,
    number:Number,
    active:Boolean
})


// Mongoose model is a wrapper on the Mongoose schema

// create collection
const Student=new mongoose.model("Student",studentDoc);


const createDocument=async ()=>{
 // create or insert a document
  try{
    const stdDoc1=new Student({
        name:"Karan",
        city:'Mahemdavad',
        collage:"SLICA",
        number:9714036212,
        active:true
    
    })
    const stdDoc2=new Student({
        name:"Ajay",
        city:'Mahemdavad',
        collage:"SLICA",
        number:9714036212,
        active:true
    
    })
    // insert value in db
    //stdDoc.save();
   // const result=await stdDoc.save()
    // insert many
    const result=await Student.insertMany([stdDoc1,stdDoc2]) 
   console.log("Done "+result);
  }catch(err)
  {
      console.log(err);
  }
}

//createDocument();

const  getDocument=async ()=>{
//   const result=await Student.find();
 // const result=await Student.find({name:"Vijay"});
//   const result=await Student.find({name:"Vijay"}).select({name:1,number:1});
     const result=await Student.find({name:{$in:['Ajay Patel','Vijay']}}).select({name:1,age:1});

 
  console.log(result)
}
getDocument();
                            //id
const updateDocument=async (_id)=>{
   //const result=await Student.updateOne({_id:id},{})
   try{
    const result=await Student.updateOne({_id},{$set:{name:"Ajay Patel"}},{new:true})
        console.log("Updated DAta :",result)
   }catch(err){
       console.log(err);

   }
}
updateDocument("620fe552b478f317fda464ab")

// delete document

const deleteDocument=async (_id)=>{
  try{
    const result= await Student.deleteOne({_id});
    console.log("Deleted Data",result)

  }catch(err){
      console.log(err);
  }
}

//deleteDocument("620ff32c962f3647c9880314")