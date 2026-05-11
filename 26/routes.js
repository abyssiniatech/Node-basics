const fs = require('fs');
const path = require('path');

const renderPage = (fileName, statusCode, res) => {

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, (err, data) => {

        if (err) {

            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

            res.end('500 - Internal Server Error');
            return;
        }

        res.writeHead(statusCode, {
            'Content-Type': 'text/html'
        });

        res.end(data);
    });
};

const routes = (req, res) => {

    switch (req.url) {

        case '/':
            renderPage('index.html', 200, res);
            break;

        case '/about':
            renderPage('about.html', 200, res);
            break;

        default:
            renderPage('404.html', 404, res);
    }
};

module.exports = routes;