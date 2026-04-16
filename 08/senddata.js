const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    

    fs.readFile("./view/index.html", "utf-8", (err, data) => {
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