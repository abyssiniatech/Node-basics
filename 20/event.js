const eventEmmiter =require("events")
const eventemmiter= new eventEmmiter()



eventemmiter.emit("welcome to event")
eventemmiter.on("welcome to event",(name)=>{
    console.log("welcome to event"+name)
})
eventemmiter.emit("welcome to event","Alice")
