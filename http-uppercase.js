const http = require('http');
const map = require('through2-map');

function uppercase(port){

    let server = http.createServer(function(req, resp){

        if(req.method !== 'POST'){
            return resp.end('Send POST');
        }
        else {
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(resp);
        }
    });
    server.listen(port);
}

uppercase(process.argv[2]);