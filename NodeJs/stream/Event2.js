var events=require("events");
var eventsEmitter=new events.EventEmitter();

//handler
var connectHandler=function connected(){
   console.log("Connection Successfull");
   eventsEmitter.emit("show_data")
}
//handler
var showHandler=function(){
    console.log("show event called")
}

//assign event
eventsEmitter.on("connect",connectHandler);
eventsEmitter.on("show_data",function(){
    console.log("Show Data Sucessfully executed..")
});

//fire event
eventsEmitter.emit("connect")