const fs=require('fs');
// syncronous request
// const files=fs.readdirSync('./');
// console.log(files);

// asyncrounous request
const files=fs.readdir('./',function(error,files){
    if(error)
      return console.log("error",error);
    console.log("fiels",files);

})