const fs = require('fs').promises;
async function CreateFolder() {
    try {
        await fs.mkdir('myfolder');
        console.log('Folder created successfully');
    }
    catch (err) {
        console.log(err);
    }
}
CreateFolder()