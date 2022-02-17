const EventEmitter=require('events'); /// class

const emitter=new EventEmitter();// created object

// making noise, produce something
//raise event

// Listener
emitter.on('msgLogged',function(){
    console.log("Listener Called")
})


emitter.emit('msgLogged');

emitter.on('getUser',function(user){
    console.log("============*****************=============");
    console.log("Event ARgument :",user);
    console.log("Event ARgument :"+user);
    
    console.log(`Event argument accepted  id :${user.id} and name is ${user.name}`);

})
// calling event
emitter.emit('getUser',{id:1,name:"Ajay"});


// listener
emitter.on('getUserById',function(id){
    console.log("id is ",id);
})

emitter.emit("getUserById",20);
