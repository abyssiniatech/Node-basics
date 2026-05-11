const http = require('http');
const routes = require('./routes');

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer(routes);

server.listen(PORT, HOST, () => {

    console.log(`Server running at http://${HOST}:${PORT}`);

});