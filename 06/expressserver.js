const express = require('express');
const app = express();

// route
app.get('/', (req, res) => {
  res.send('Hello Surafel from Express ');
});

// server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});