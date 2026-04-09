// 1. create server on node js absolutely
// 2. create server on node js with express framework
// 3. create server on node js with express framework and add some routes
// 4. create server on node js with express framework and add some routes and add some middlewares
// 5. create server on node js with express framework and add some routes and add some middlewares and add some error handling
// 6. create server on node js with express framework and add some routes and add some middlewares and add some error handling and add some database connection


// 1. create server on node js absolutely
const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!');
// });



// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });





const server =http.createServer((_req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, World!');
})

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})