const http = require('http');
let url = require('url');

function getTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function getUnixTime(time){
    return {
        unixtime: time.getTime()
    }
}

function createQuery(url){
    if(url.pathname === "/api/parsetime"){
        return getTime(new Date(url.query.iso));
    }
    if(url.pathname === "/api/unixtime"){
        return getUnixTime(new Date(url.query.iso));
    }
}

function json(port){

    let server = http.createServer(function(req,resp){
        if(req.method === 'GET'){
        resp.writeHead(200, { "Content-Type": 'application/json' });
        url = url.parse(req.url,true);
        resp.end(JSON.stringify(createQuery(url)));
    }
    else {
        resp.writeHead(405,"Send GET request");
        resp.end();
    }
    });
    server.listen(port);
}
json(process.argv[2]);