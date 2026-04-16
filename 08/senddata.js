const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let filePath = "./view/"; // ✅ use let (new variable per request)

    switch (req.url) {
        case '/':
            filePath += "index.html";
            break;
        case '/about':
            filePath += "about.html";
            break;
        default:
            filePath += "404.html";
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end("Server Error");
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});