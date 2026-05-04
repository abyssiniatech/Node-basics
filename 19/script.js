const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page')
    } else if (req.url === '/about' && req.method === 'GET') {
        res.end('About Page')
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.end('Contact Page')
        }
     else {
        res.statusCode = 404
        res.end('Page Not Found')
    }
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000')
})