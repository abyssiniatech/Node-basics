// GET method in node js
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request received');

    }
   else if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received');

    }
   else if (req.method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT request received');
   }
    else if (req.method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE request received');
    }
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
