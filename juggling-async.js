const http = require('http');
const bl = require('bl');
let count = 1;

function getRequest(){

for(let i = 0; i<3; i++){
    count++;

    http.get(process.argv[count],function(response){
        
        response.pipe(bl(function (err,data){
            if(err){
                console.log('Error: ' + err);
            }
            else{
            console.log(data.toString());
            }
        }));
        
    });
}
}

getRequest();