// create stream like readable and writable stream
const fs=require('fs');
const readStream=fs.createReadStream('input.txt');
const writeStream=fs.createWriteStream('output.txt');
readStream.on('data',(chunk)=>{
    console.log('chunk received');
    writeStream.write(chunk);
});
readStream.on('end',()=>{
    console.log('no more data to read');
    writeStream.end();
});
