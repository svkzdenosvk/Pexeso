console.log("ahoj");

const fs = require('fs');
  
// Function to get current filenames
// in directory
fs.readdir("pictures", (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      console.log(file);
    })
  }
})

