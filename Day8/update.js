const fs = require('fs');
fs.updateFile('test.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error updating file:', err);
    } else {
        console.log('File updated successfully!');
    }
});
