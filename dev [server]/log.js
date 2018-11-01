const winston = require('winston'); // npm install winston@2.4.0
module.exports = function (module) {
    return makeLogger(module.filename);
};

function makeLogger(path) {

    if (path.match(/request.js$/)) {

        const transports = [

            new winston.transports.Console({
                timestamp: true, // function() { return new Date().toString() }
                colorize: true,
                level: 'info'
            }),

            new winston.transports.File({ filename:'debug.log', level: 'debug' })
        ];

        return new winston.Logger({ transports: transports });

    } else {

        return new winston.Logger({
            transports: []
        });
    }
}