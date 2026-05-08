const express = require('express');

const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('Home Page');
});

// About Route
app.get('/about', (req, res) => {
    res.send('Welcome About Page');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Welcome Contact Page');
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
});