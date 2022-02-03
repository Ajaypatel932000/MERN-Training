var arr=["hello","world"]
var[first,second]=arr;
console.log("first ",first);
console.log("second ",second);
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
var[color1, ,color3, ,color5] = colors; //Leave space for unpick elements  
console.log(color1); // Violet  
console.log(color3); // Blue  
console.log(color5); // Yellow  


console.log("====================")
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);