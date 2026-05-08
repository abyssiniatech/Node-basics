// readstream in node js
const { createReadStream } = require('fs');

// const stream = createReadStream('file.txt', {
//     encoding: 'utf-8'
// });

// stream.on("data", (chunk) => {
//     console.log("welcome to stream data in node js");
//     console.log(chunk);
// });



// the second stream 
const stream1=createReadStream('file.txt','utf8');
stream1.on('data',(chunk)=>{
    console.log("these is the stream data ")
    console.log(chunk);
    
})