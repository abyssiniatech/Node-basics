const eventEmmiter=require('events')
const event=new eventEmmiter();


event.on("data", ()=>{
    console.log('welcome events innnode js')
})

event.emit("data")