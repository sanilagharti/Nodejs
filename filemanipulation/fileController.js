const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'data', 'notes.txt');

async function writeFile(content) {
  await fs.writeFile(filePath, content);
  console.log('File written successfully!');
}

async function readFile() {
  const data = await fs.readFile(filePath, 'utf8');
  console.log(' File content:');
  console.log(data);
}


module.exports = {
  writeFile,
  readFile
};
