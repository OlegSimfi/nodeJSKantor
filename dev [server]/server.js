const http = require('http');
const log = require('winston');
// const debug = require('debug')('server'); // npm i debug (DEBUG=server* node server.js)

const server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

log.info("Server is runing");