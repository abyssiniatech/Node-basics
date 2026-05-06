const EventEmmiter=require("events");
const event=new EventEmmiter();

event.on("welcome",(name)=>{
    console.log(`Welcome ${name} to the world of Node.js`)
})


event.emit("welcome","Surafel")
