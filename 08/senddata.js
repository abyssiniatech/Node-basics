const fs = require('fs');
const http = require('http');
const path="./view/"
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case '/':
            path+="index.html";
            break;

        case '/about':
            path+="index.html";
            break;
    
        default:
            path+= "404.html"
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end("Server Error");
        } else {
            res.end(data); // send HTML and end response
        }
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});