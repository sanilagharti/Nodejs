
/*synchronous 
console.log("1");
console.log("2");
console.log ("3");
*/

/* asynchrounous 
function hello(){
    console.log("hello world");
}

setTimeout(hello,5000);
*/

const fs = require('fs');
fs.readFile('/filemanipulation/data/notes.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
