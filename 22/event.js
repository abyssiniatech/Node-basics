const eventEmmiter=require("events");
const event= new eventEmmiter();
event.on("datas",()=>{
    console.log("these is the first events over the net")
})

event.emit("datas")