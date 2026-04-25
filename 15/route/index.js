const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;
const hostname = 'localhost';

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 404 Page
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Start server
app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});