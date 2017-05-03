let fs = require('fs');

function newLines(filename){

    let file = fs.readFileSync(filename);
    let str = file.toString();
    let splitString = str.split('\n');

    console.log(splitString.length - 1);

}
newLines(process.argv[2]);