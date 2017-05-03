let filter = require('./modular-companion-file.js');

function files(fileName,fileExt){
    filter(fileName,fileExt,function(err,list){
            if(err){
                console.log("Error:" + err);
            }
            else {
                list.map(function(el){
                    console.log(el);
                });
            }
    });
}

files(process.argv[2],process.argv[3]);