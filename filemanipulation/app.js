const { writeFile, readFile } = require('./fileController');

async function main() {
  await writeFile('Hello, this is a txt file created using Node.js');
  await readFile();
}

main();
