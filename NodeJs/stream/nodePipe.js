var fs=require('fs')
var readerStream=fs.createReadStream("input.txt");

var writeStream=fs.createWriteStream("output.txt");

// read input.txt and write data to output.txt  
readerStream.pipe(writeStream);