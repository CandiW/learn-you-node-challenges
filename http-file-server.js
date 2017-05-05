const http = require('http');
const fs = require('fs');

function fileserver(port,fileLoc){

    let server = http.createServer(function (request,response){
        fs.createReadStream(fileLoc).pipe(response);
    });
    
    server.listen(port);

}

fileserver(process.argv[2],process.argv[3]);