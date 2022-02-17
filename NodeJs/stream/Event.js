var events=require('events');
var eventsEmitter=new events.EventEmitter();


//create event handler
var myEventHandler=function(){
    console.log("I am here!");
}
//assign event to handler
eventsEmitter.on('myevent',myEventHandler);
//fire the event
eventsEmitter.emit('myevent');