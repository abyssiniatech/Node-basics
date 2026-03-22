const fs = require("fs/promises");

async function writeFile() {
  try {
    await fs.writeFile("write.txt", "Hello World 🚀");
    console.log("Data saved!");
  } catch (err) {
    console.error(err);
  }
}

writeFile();