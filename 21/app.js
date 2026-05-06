const path = require('path');
const fs = require('fs');

const readfile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'file.txt'), 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// call the function OUTSIDE
readfile()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });