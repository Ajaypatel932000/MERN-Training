var buf=new Buffer(10);
var buf1=new Buffer([10,20,30,40]);
var buf2=new Buffer("Simple ","utf-8");
len=buf.write("Hello World")
console.log("buf ",buf);
console.log("buf1 ",buf1);
console.log("buf2",buf2);
buf11 = new Buffer(25);  
len=buf11.write("Simply Easy Learning");  
console.log("Octets written : "+  len);

