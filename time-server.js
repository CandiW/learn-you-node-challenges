const net = require('net');

function zerofill(num){
    if(num < 10 || num === 0 || num === ""){
        return "0" + num;
    }
    else {
        return num;
    }
}

function getDate(){
    let d = new Date();
    return d.getFullYear() + "-" + zerofill(d.getMonth()+1) + "-" + zerofill(d.getDate()) + " " + zerofill(d.getHours()) + ":" + zerofill(d.getMinutes());
}

function timeserver(port){
    let server = net.createServer(function (socket){
        socket.end(getDate() + "\n");
    });
    server.listen(port);
}

timeserver(process.argv[2]);