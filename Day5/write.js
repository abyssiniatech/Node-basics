

fs =require('fs')
fs.writeFile("file.txt", "Hello", (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log("Successful accepted")
  }
});