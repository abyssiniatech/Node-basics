// create buffer in node js 
const buffer = Buffer.from('Hello, World!');
console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21></Buffer>

// create buffer from array
const bufferFromArray = Buffer.from([1, 2, 3, 4, 5]);
console.log(bufferFromArray); // <Buffer 01 02 03 04 05></Buffer>


// create buffer with specified size
const bufferWithSize = Buffer.alloc(10);
console.log(bufferWithSize); // <Buffer 00 00 00 00 00 00 00 00 00 00></Buffer>



// create buffer with specified size and fill it with a value
const bufferWithSizeAndFill = Buffer.alloc(10, 'A');
console.log(bufferWithSizeAndFill); // <Buffer 41 41 41 41 41 41 41 41 41 41></Buffer>



// create buffer from string with specified encoding
const bufferFromStringWithEncoding = Buffer.from('Hello, World!', 'utf-8');
console.log(bufferFromStringWithEncoding); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21></Buffer>


// create buffer from string with specified encoding
const bufferFromStringWithEncoding2 = Buffer.from('Hello, World!', 'ascii');
console.log(bufferFromStringWithEncoding2); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21></Buffer>



// create buffer from string with specified encoding
const bufferFromStringWithEncoding3 = Buffer.from('Hello, World!', 'base64');
console.log(bufferFromStringWithEncoding3); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21></Buffer>