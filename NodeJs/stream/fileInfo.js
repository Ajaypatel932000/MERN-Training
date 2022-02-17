var fs=require('fs');
console.log("Going to get  File info");
fs.stat("input.txt",function(err,stats){
    if(err)
    {
        return console.log(err);
    }
    console.log(stats);
    console.log("isFile :",stats.isFile());
    console.log("isDirectory :",stats.isDirectory());

})