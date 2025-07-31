//Nodejs is build on event-driven architectre.
//This module allows us to create and handle custom events.Works like react event handlers but for backend logic
//Its just like calling a function,but instead of alling  function directly,we emit an event(lik a signal) and all listners (on) atteched to that event name atomatically runs.
 


 const EventEmitter = require("events");

 //it is basically an object like.So, we have to create its instance
  const emitter= new EventEmitter();

  //it has 2 methods:-  .on  and .emit
  
  //.on(eventName,listners) it takes 2 paraeters, name of event and a function which listned to it
    emitter.on("greet",()=>{console.log("Hello World!")})

    //.emit(eventName,parameters(if needed)) its like calling te function
    emitter.emit("greet")