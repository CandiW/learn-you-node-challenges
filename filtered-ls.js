const fs = require('fs');
const path = require('path');

function files(a,b){

    fs.readdir(a,function(err,list){
        list.map(function(el,i){
            if(path.extname(el) === "." + b){
                console.log(el);
            }
        })
    });

}
files(process.argv[2],process.argv[3]);