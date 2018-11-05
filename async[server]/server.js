const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    let info;

    if (req.url == '/'){

        fs.readFileSync('index.html', function (err, info) { // callback
            if (err) {
              console.error(err);
              res.statusCode = 500;
              res.end('Server error');
              return;
            }

            res.end(info);
        });
    } else {/* 404 */}

}) .listen(3000);
