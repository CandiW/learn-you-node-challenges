let fs = require('fs');

function newLines(filename){

    let file = fs.readFile(filename,function(err,data){
        let str = data.toString();
        let splitString = str.split('\n');

        console.log(splitString.length - 1);

    });

}
newLines(process.argv[2]);