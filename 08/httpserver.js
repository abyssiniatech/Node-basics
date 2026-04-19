const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    switch (req.url) {

        case "/":
            res.end(`
                <h1>Home Page</h1>
                <a href="/about">Go About</a>
            `);
            break;

        case "/about":
            res.end(`
                <h1>About Page</h1>
                <a href="/">Go Home</a>
            `);
            break;

        case "/contact":
            res.end(`
                <h1>Contact Page</h1>
            `);
            break;

        default:
            res.statusCode = 404;
            res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});