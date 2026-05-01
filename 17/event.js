const event=require('events');
const eventEmitter=new event.EventEmitter();

eventEmitter.on('myEvent',()=>{
    console.log('myEvent is emitted');
});

eventEmitter.emit('myEvent');
