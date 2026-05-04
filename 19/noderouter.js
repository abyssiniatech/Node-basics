const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('./index.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('./about.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('./contact.html').pipe(res)
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        fs.createReadStream('./404.html').pipe(res)
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})