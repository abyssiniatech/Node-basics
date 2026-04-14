const EventEmmiter=require('node:events');
const emmiter=new EventEmmiter()

emmiter.on("emmiter1",()=>{
    console.log("These is the second event in node js")
})

emmiter.emit('emmiter1')
