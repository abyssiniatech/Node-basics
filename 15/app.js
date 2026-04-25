// file system module
const fs = require('fs');
// 1. read file
fs.readFile('input.txt','utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log('Asynchronous read: ' + data.toString());
});