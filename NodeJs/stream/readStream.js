var fs=require("fs")
var data="";

var readerStream=fs.createReadStream("input.txt");
readerStream.on('data',function(chunk){
  data+=chunk;
})
readerStream.on('end',function(){
    console.log(data);
})
readerStream.on("error",function(error){
    console.log(error.stack)
})
console.log("Program end")