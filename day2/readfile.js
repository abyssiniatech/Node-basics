const fs = require("fs");

// read file
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log("File Content:");
  console.log(data);
});