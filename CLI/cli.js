//Command-Line Input
//console.log("hello," + process.argv[4]);// argvs means argumentvector ,[] works like an array 0,1,2. 

//create file form cli
/*const fs= require('fs');

const input=process.argv;
fs.writeFileSync(input[2], input[3]);// input[2] is a file name and input[3] is data.
*/
//add or remove file from cli
const fs= require('fs');

const input=process.argv;
if (input[2]=='add'){ //input[2] is a command add or remove

    fs.writeFileSync(input[3], input[4]); //input[3] is file name & input[4] is 'text'...
} else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("invalid input.");
}