const fs = require("fs").promises;

async function Read() {
    try {
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

Read();

console.log("Before reading file");