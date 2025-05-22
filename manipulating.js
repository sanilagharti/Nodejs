

//reading 
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file");
  } else {
    console.log("File content:", data);
  }
});

