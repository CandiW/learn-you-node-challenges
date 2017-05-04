const http = require('http');

function server(data){
    http.get(data,function(response){
        response.setEncoding('utf8');
        response.on('data',console.log);
        response.on('error',console.error);
    })
}
server(process.argv[2]);