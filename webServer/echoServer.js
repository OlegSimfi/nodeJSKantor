// 127.0.0.1:1337/echo?message=Hello -> Hello

const http = require('http');
const url = require('url');

const server = new http.Server(function (req, res) {

    console.log(req.headers);
    console.log(req.method, req.url);

    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.setHeader('Cache-control', 'no-cache');
        res.statusCode = 200; // Ok
        res.end(urlParsed.query.message);
    } else{
        res.statusCode = 404; //Not Found
        res.end("Page not fond");
    }
});

server.listen(1337, '127.0.0.1');
