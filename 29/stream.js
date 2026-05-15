const fs = require('fs');

const readStream = fs.createReadStream('bigFile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:');
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.log('Error:', err);
});