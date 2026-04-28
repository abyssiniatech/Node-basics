const fs=require('fs')
const path=require('path')


// 1 readfile in node js 
fs.readFile(path.join(__dirname,'./files/hello.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});


// write file in node js 
fs.writeFile(path.join(__dirname,'./files/hello.txt'), 'Hello World', (err) => {
    if (err) {
        console.error(err);
    }
    else{
        console.log('File written successfully');
    }
});

// append file in node js 
fs.appendFile(path.join(__dirname,'./files/hello.txt'), '\nWelcome to Node.js', (err) => {
    if (err) {
        console.error(err);
    }
    else{
        console.log('File appended successfully');
    }
});




// 3 delete file in node js
fs.unlink(path.join(__dirname,'./files/hello.txt'), (err) => {
    if (err) {
        console.error(err);
    }
    else{
        console.log('File deleted successfully');
    }
});