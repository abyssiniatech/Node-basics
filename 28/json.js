const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ name: 'surafel', age: 23 }));
});

server.listen(5000, () => {
    console.log('====================================');
    console.log('run us port 500');
    console.log('====================================');
});