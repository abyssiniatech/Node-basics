const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    const url = req.url.toLowerCase();

    let filePath = "";
    let statusCode = 200;

    switch (url) {

        case "/":
        case "/home":
            filePath = path.join(__dirname, "view", "home.html");
            break;

        case "/about":
            filePath = path.join(__dirname, "view", "about.html");
            break;

        case "/contact":
            filePath = path.join(__dirname, "view", "contact.html");
            break;

        default:
            filePath = path.join(__dirname, "view", "404.html");
            statusCode = 404;
            break;
    }

    res.statusCode = statusCode;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("<h1>Server Error</h1>");
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});