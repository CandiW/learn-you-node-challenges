const http = require('http');

function getRequest(data){
    http.get(data,function(response){
        response.setEncoding('utf8');
        response.on('data',console.log);
        response.on('error',console.error);
    })
}
getRequest(process.argv[2]);