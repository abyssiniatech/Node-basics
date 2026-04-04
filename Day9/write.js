
const fs=require('fs').promises;
async function createFile() {
    try {
        await fs.writeFile('file.txt','hello world','utf-8');
        console.log('File created successfully');
    } catch (error) {
        console.error('Error creating file:', error);
    }``
}
createFile();