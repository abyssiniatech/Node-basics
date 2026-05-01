const fs = require('fs').promises;

fs.readFile("promise.txt", 'utf-8')
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log("done"));