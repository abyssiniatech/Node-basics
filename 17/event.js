const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('myEvent',()=>{
    console.log('myEvent is emitted');
});

eventEmitter.emit('myEvent');

