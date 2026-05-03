const eventEmitter=require('events');
const myEventEmmiter=new eventEmitter();

myEventEmmiter.on("surafel",()=>{
    console.log("surafel is emitted")
})


myEventEmmiter.emit("surafel")