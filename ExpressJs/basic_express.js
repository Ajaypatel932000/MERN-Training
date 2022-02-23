const { response } = require('express');
var express=require('express');
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({
    extended:true

}));

app.get('/',function(req,res){
    res.sendFile("/home/ajay/MERN Training/ExpressJs/index.html");
})
app.post("/process_get",function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    // response={
    //     fname:req.query.fname,
    //     lname:req.query.lname

    // };
    console.log("process_get :",fname,lname);
    res.end(" "+fname+ "  : "+lname);

})
const server=app.listen(8083,function(){
    const host=server.address().address;
    const port=server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);  
  
})