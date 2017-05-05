const http = require('http');
const bl = require('bl');

function getRequest(url){

    http.get(url,function(response){
        response.pipe(bl(function (err,data){
            if(err){
                console.log('Error: ' + err);
            }
            else{
            console.log(data.toString().length);
            console.log(data.toString());
            }
        }));
    });

}

getRequest(process.argv[2]);