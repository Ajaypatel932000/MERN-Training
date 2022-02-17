var fs=require('fs');

var data=fs.readFileSync("input.txt");
console.log("Synchronous :",data.toString());