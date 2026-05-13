const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/data', (req, res) => {

    res.json(data);

});

app.listen(5000, () => {
    console.log('Server running at port 5000');
});