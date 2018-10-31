const http = require('http');

const server = new http.Server(); //EventEmitter

server.listen(1337, '127.0.0.1');

let counter = 0;

const  emit =server.emit;
server.emit = function(event /* , arg1, arg2,...*/){
 console.log(event);
 emit.apply(server, arguments);
};

server.on('request', function (req, res) {
    res.end("Hello World " + ++counter);
});
