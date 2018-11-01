const url = require('url');
const log = require('./log')(module);
// const debug = require('debug')('server:request');


module.exports = function (req, res) {
    const urlParsed = url.parse(req.url, true);
    log.info("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message){
        let message = urlParsed.query.message;
        log.debug("Echo: " + message);
        res.end(message);
        return
    }

    log.error("Uknown URL");

    res.statusCode = 404;
    res.end('Not Found');
};

