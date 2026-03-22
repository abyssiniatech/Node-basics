const fs = require("fs/promises");
const path = require("path");

// folder path
const dirPath = path.join(__dirname, "files");

// get command & inputs
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

async function run() {
  try {
    const filePath = path.join(dirPath, fileName);

    // CREATE
    if (command === "create") {
      await fs.writeFile(filePath, content || "");
      console.log("✅ File created");
    }

    // READ
    else if (command === "read") {
      const data = await fs.readFile(filePath, "utf8");
      console.log("📄 Content:\n", data);
    }

    // UPDATE (overwrite)
    else if (command === "update") {
      await fs.writeFile(filePath, content || "");
      console.log("✏️ File updated");
    }

    // DELETE
    else if (command === "delete") {
      await fs.unlink(filePath);
      console.log("🗑️ File deleted");
    }

    else {
      console.log("❌ Invalid command");
    }

  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();