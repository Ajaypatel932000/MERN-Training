var fs=require('fs');
var data='A solution of all tech';
var writeStream=fs.createWriteStream("output.txt");
writeStream.write(data)
writeStream.end();

writeStream.on('finish',function(){
    console.log("Write Completed")
})
writeStream.on("error",function(error){
    console.log(error.stack);
})

console.log("Program End")