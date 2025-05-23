
/*//synchronous 
console.log("1");
console.log("2");
console.log ("3");*/


//asynchrounous 
function hello(){
    console.log("hello world");
}

setTimeout(hello,5000);



//callback asynchronous example
/*
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

//Promise
/* 
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
*/




 //node aasync/await
 /*

const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();*/





