const fs = require("fs");

fs.unlink("write.txt", (err) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  console.log("File deleted!");
});