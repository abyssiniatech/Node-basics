// create events 
const eventEmmiter =require('events')

const events=new eventEmmiter()
// create event handler
events.on("welcome to ",()=>{
    console.log("welcome to node js")
})

// fire the event
events.emit("I'm graduted bsc in computer science ")