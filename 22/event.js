const eventEmmiter=require("events");
const event= new eventEmmiter();
event.on("datas",(id,name)=>{
    console.log("these is the first events over the net")
    console.log(`my name is ${name}`)
    console.log(`my Id number is: ${id}`)
})

event.emit("datas",12,"surafel")